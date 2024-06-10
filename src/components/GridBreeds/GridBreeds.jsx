import React from 'react';

import ItemBreed from './ItemBreed';

import styles from './gridBreeds.module.css';

const generateGridAreas = (totalItems) => {
	const gridAreas = [];
	let currentRow = 1;
	let currentCol = 1;

	for (let i = 0; i < totalItems; i++) {
		gridAreas.push(`item${currentRow} item${currentCol}`);
		currentCol++;
		if (currentCol > 3) {
			currentCol = 1;
			currentRow++;
		}
	}

	return gridAreas.join(' ');
};

const GridBreeds = ({ breedsCat, type }) => {
	return (
		<div
			className={styles.gallery}
			style={{
				gridTemplateAreas: generateGridAreas(breedsCat.length),
			}}
		>
			{breedsCat.map((item, index) => (
				<div className={styles[`item${index + 1}`]} key={item.id}>
					<ItemBreed
						key={item.id}
						url={item.url}
						num={index + 1}
						id={item.id}
						type={type}
					/>
				</div>
			))}
		</div>
	);
};

export default GridBreeds;
