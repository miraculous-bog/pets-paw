import React, { useEffect, useState } from 'react';
import SelectOption from '../SelectOption';
import Upload from '../../../../components/Upload';
import UpdateIcon from './UpdateIcon';
import { API_KEY } from '../../../../constants';
import { fetchBreedsData } from '../../../../apiCalls';
import styles from './filter.module.css';

import {
	orderDataFilter,
	typeDataFilter,
	limitDataFilter,
	breedsDataFilter,
} from '../../../../filterGalleryDefaultValues';

const Filter = ({ setSearchOptions }) => {
	const [breedsData, setBreedsData] = useState({
		...breedsDataFilter,
		data: [], // Инициализируем data пустым массивом
	});

	const onOrderChange = (key, value) => {
		setSearchOptions(key, value);
	};

	useEffect(() => {
		fetchBreedsData()
			.then((transformedData) => {
				setBreedsData((prevState) => ({
					...prevState,
					data: transformedData,
				}));
			})
			.catch((err) => console.log(err));
	}, []);
	return (
		<div className={styles.container}>
			<div className={`${styles.filed} ${styles.item1}`}>
				<SelectOption options={orderDataFilter} onChange={onOrderChange} />
			</div>
			<div className={`${styles.filed} ${styles.item2}`}>
				<SelectOption options={typeDataFilter} onChange={onOrderChange} />
			</div>
			<div className={`${styles.filed} ${styles.item3}`}>
				<SelectOption options={limitDataFilter} onChange={onOrderChange} />
			</div>
			<div className={`${styles.filed} ${styles.item4}`}>
				<SelectOption options={breedsData} onChange={onOrderChange} />
				<div className={styles.upload}>
					<UpdateIcon initialColor='#FF868E' hoverColor='#FFF' />
				</div>
			</div>
		</div>
	);
};

export default Filter;
