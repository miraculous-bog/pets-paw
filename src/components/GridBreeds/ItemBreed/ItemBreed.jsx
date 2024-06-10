import React from 'react';
import Button from '../../../common/Button';
import Like from '../../../common/Like';
import { Link } from 'react-router-dom';
import styles from './itemBreed.module.css';

const ItemBreed = ({ id, url, type }) => {
	const getLinkId = `/breeds/${id}`;
	return (
		<div className={styles.breedImg}>
			<img className={styles.galleryImg} src={url} alt='lorem' />

			<div className={styles.galleryImgHover}>
				{type === 'title' ? (
					<Link to={getLinkId}>
						<div className={styles.title}>
							<Button buttonText='lorem' isActive={false} />
						</div>
					</Link>
				) : (
					<div className={styles.button}>
						<Like isActive={false} id={id} />
					</div>
				)}
			</div>
		</div>
	);
};

export default ItemBreed;
