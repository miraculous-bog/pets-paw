import React, { useState, useEffect } from 'react';

import { API_KEY } from '../../../constants';

import styles from './slider.module.css';

const Slider = ({ breed }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [images, setImages] = useState([]);

	const transformAndSetImages = (arr) => {
		const result = arr.map((item) => item.url);
		setImages(result);
	};
	console.log(images);
	useEffect(() => {
		fetch(
			`https://api.thecatapi.com/v1/images/search?breed_ids=${breed}&limit=5`,
			{
				headers: {
					'x-api-key': API_KEY,
				},
			}
		)
			.then((res) => res.json())
			.then((res) => transformAndSetImages(res))
			.catch((err) => console.log(err));
	}, [breed]);

	const goToPreviousImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	const goToImage = (index) => {
		setCurrentImageIndex(index);
	};
	return (
		<div className={styles.slider}>
			<div className={styles.container}>
				<img
					src={images[currentImageIndex]}
					alt={`Slide ${currentImageIndex + 1}`}
					className={styles.image}
				/>
			</div>
			<div className={styles.sliderImages}>
				{images.map((image, index) => (
					<div
						key={index}
						className={`${styles.indicator} ${
							index === currentImageIndex ? styles.active : ''
						}`}
						onClick={() => goToImage(index)}
					></div>
				))}
			</div>
			{/* <button onClick={goToPreviousImage} className='slider-button'>
				&lt;
			</button>
			<button onClick={goToNextImage} className='slider-button'>
				&gt;
			</button> */}
		</div>
	);
};

export default Slider;
