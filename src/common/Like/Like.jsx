import React, { useState } from 'react';
import LikeFullImg from '../../img/like-full.svg';
import LikeEmptyImg from '../../img/like-empty.svg';
import { API_KEY } from '../../constants';
import styles from './like.module.css';

const Like = ({ id, isActive }) => {
	const [isFavourite, setIsFavourite] = useState(isActive);
	const [favouriteId, setFavouriteId] = useState(null);
	const rawBody = JSON.stringify({
		image_id: id,
		sub_id: 'my-user-123',
	});
	const addToFavourite = async () => {
		try {
			const response = await fetch('https://api.thecatapi.com/v1/favourites', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'x-api-key': API_KEY,
				},
				body: rawBody,
			});

			if (response.ok) {
				const data = await response.json();
				if (data.message === 'SUCCESS') {
					setFavouriteId(data.id);
					setIsFavourite(true);
				} else {
					console.log('Adding to favorites failed:', data.message);
				}
			} else {
				console.error('Network response was not ok');
			}
		} catch (error) {
			console.error('Error adding to favorites:', error);
		}
	};
	const removeToFavourite = async () => {
		if (favouriteId) {
			try {
				const response = await fetch(
					`https://api.thecatapi.com/v1/favourites/${favouriteId}`,
					{
						method: 'DELETE',
						headers: {
							'x-api-key': API_KEY,
						},
					}
				);
				if (response.ok) {
					setFavouriteId(null);
					setIsFavourite(false);
				} else {
					console.error('Network response was not ok');
				}
			} catch (error) {
				console.error('Error removing from favorites:', error);
			}
		}
	};
	return (
		<div className={styles.container}>
			{isFavourite ? (
				<img src={LikeFullImg} alt='like' onClick={removeToFavourite} />
			) : (
				<img src={LikeEmptyImg} alt='like' onClick={addToFavourite} />
			)}
		</div>
	);
};

export default Like;
