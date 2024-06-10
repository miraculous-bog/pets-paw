import React, { useEffect, useState } from 'react';

import sizeUpImg from '../../../img/sort-up.svg';
import sizeDownImg from '../../../img/sort-down.svg';

import Select from '../../../common/Select';
import ButtonImg from '../../../common/ButtonImg/ButtonImg';
import { API_KEY } from '../../../constants';
import styles from './filterBreeds.module.css';

import {
	limitDataFilter,
	breedsDataFilter,
} from '../../../filterGalleryDefaultValues';

const FilterBreeds = ({ setSearchOptions }) => {
	const [breedsData, setBreedsData] = useState({
		...breedsDataFilter,
	});

	const onOrderChange = (key, value) => {
		setSearchOptions(key, value);
	};

	useEffect(() => {
		fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
			.then((res) => res.json())
			.then((res) => {
				const idSet = new Set();
				const transformedData = res
					.filter((item) => {
						if (!idSet.has(item.id)) {
							idSet.add(item.id);
							return true;
						}
						return false;
					})
					.map((item) => ({ name: item.name, value: item.id }));
				setBreedsData((prevState) => ({
					...prevState,
					data: transformedData,
				}));
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className={styles.container}>
			<Select options={breedsData} onChange={onOrderChange} />
			<Select options={limitDataFilter} onChange={onOrderChange} />
			<ButtonImg img={sizeUpImg} size='small' />
			<ButtonImg img={sizeDownImg} size='small' />
			{/* <div className={`${styles.filed} ${styles.item1}`}>
			</div>
			<div className={`${styles.filed} ${styles.item2}`}>
			</div>
			<div className={`${styles.filed} ${styles.item3}`}>
			</div>
			<div className={`${styles.filed} ${styles.item4}`}>
			</div> */}
		</div>
	);
};

export default FilterBreeds;
