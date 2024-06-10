import React from 'react';

import styles from './input.module.css';

import { breedsDataFilter } from '../../filterGalleryDefaultValues';

export const Input = ({ value, onInputChange }) => {
	console.log(value, onInputChange, breedsDataFilter);
	const query = breedsDataFilter.default.query;
	return (
		<div className={styles.container}>
			<input
				className={styles.search}
				placeholder='Search for breeds by name'
				type='text'
				name='q'
				value={value}
				onChange={(e) => onInputChange(query, e.target.value)}
			/>
			<input className={styles.submit} type='submit' value='' />
		</div>
	);
};

export default Input;
