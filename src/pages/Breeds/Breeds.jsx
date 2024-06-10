/* eslint-disable */
import { useEffect, useState } from 'react';

import GridBreeds from '../../components/GridBreeds';
import BasicBtn from '../../common/BasicBtn/BasicBtn';
import FilterBreeds from './FilterBreeds';
import Panel from '../../components/Panel';

import ButtonImg from '../../common/ButtonImg';
import Button from '../../common/Button';

import { API_KEY } from '../../constants';
import {
	limitDataFilter,
	breedsDataFilter,
} from '../../filterGalleryDefaultValues';

import styles from './breeds.module.css';

const transformToApropriateFormatData = (data) => {
	console.log('data', data);
	const result = data.map(item => ({ id: item.id, url: item.image.url }))
	console.log('result', result);
	return result;

}
const Breeds = () => {

	const [currentPage, setCurrentPage] = useState(0);
	const [fetching, setFetching] = useState(true);

	const [limitItems, setLimitItems] = useState(limitDataFilter.default.value);
	const [breedItem, setBreedItem] = useState(breedsDataFilter.default.value);


	const [data, setData] = useState([]);

	const setSearchOptions = (key, value) => {
		setCurrentPage(0);
		if (key === limitDataFilter.default.query) {
			setLimitItems(value)
		} else {
			setBreedItem(value);
			return;
		}
		setFetching(true);
	};

	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
			(e.target.documentElement.scrollTop + window.innerHeight) <
			100
		) {
			setFetching(true);
		}
	};

	useEffect(() => {
		document.addEventListener('scroll', scrollHandler);
	}, []);

	useEffect(() => {
		console.log('CURRENT PAGE', currentPage);
		if (fetching) {
			fetch(
				`https://api.thecatapi.com/v1/breeds?limit=${limitItems}&page=${currentPage}&api_key=${API_KEY}`
			)
				.then((res) => res.json())
				.then((res) => {
					console.log(res);
					currentPage === 0 ? setData(transformToApropriateFormatData(res)) : setData([...data, ...transformToApropriateFormatData(res)]);
					setCurrentPage((prevState) => prevState + 1);
				})
				.catch((err) => console.log(err))
				.finally(() => setFetching(false));
		}
	}, [fetching]);



	useEffect(() => {
		fetch(`https://api.thecatapi.com/v1/breeds/${breedItem}`)
			.then((res) => res.json())
			.then((res) => {
				return fetch(`https://api.thecatapi.com/v1/images/${res.reference_image_id}`);
			})
			.then((secondRes) => secondRes.json())
			.then((secondResData) => {
				const respBreed = {
					id: secondResData.breeds.id,
					url: secondResData.url,
				}

				setData([respBreed]);
				setCurrentPage(0);
			})
			.catch((err) => console.log(err))
			.finally(() => setFetching(false));
	}, [breedItem]);


	return (
		<>
			<Panel setSearchOptions={setSearchOptions} searchValue={breedItem} />
			<div className={styles.wrapper}>
				<div className={styles.btns}>
					<BasicBtn sisIdType={false} />
					<FilterBreeds setSearchOptions={setSearchOptions} />
				</div>
				<GridBreeds breedsCat={data} type='title' />
			</div>
		</>
	);
};

export default Breeds;
