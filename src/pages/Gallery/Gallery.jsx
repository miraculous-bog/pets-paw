/* eslint-disable */
import { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';

import Filter from './components/Filter';
import GridBreeds from '../../components/GridBreeds';
import BasicBtn from '../../common/BasicBtn/BasicBtn';
import UploadBtn from '../../common/UploadBtn';
import Upload from '../../components/Upload';
import Panel from '../../components/Panel';

import { API_KEY } from '../../constants';
import {
	orderDataFilter,
	typeDataFilter,
	limitDataFilter,
	breedsDataFilter,
} from '../../filterGalleryDefaultValues';

import styles from './gallery.module.css';

const generateCatAPIUrl = (options) => {
	console.log('generateCatAPIUrl', options);
	const baseUrl = 'https://api.thecatapi.com/v1/images/search';
	const queryParams = Object.entries(options)
		.filter(([, value]) => value !== '')
		.map(([key, value]) => `${key}=${value}`)
		.join('&');
	console.log(`${baseUrl}?${queryParams}&api_key=${API_KEY}`);
	return `${baseUrl}?${queryParams}&api_key=${API_KEY}`;
};

const Gallery = () => {
	const location = useLocation();
	console.log(location);
	const [currentPage, setCurrentPage] = useState(0);
	const [fetching, setFetching] = useState(true);
	const [uploadBtn, setUploadBtn] = useState(false);
	const [isResEmpty, setIsResEmpty] = useState(false);
	const [options, setOptions] = useState({
		[orderDataFilter.default.query]: orderDataFilter.default.value,
		[typeDataFilter.default.query]: orderDataFilter.default.value,
		[limitDataFilter.default.query]: limitDataFilter.default.value,
		[breedsDataFilter.default.query]: breedsDataFilter.default.value,
	});
	const [data, setData] = useState([]);

	const openUploadWindow = () => {
		setUploadBtn(true);
	};
	const closeUploadWindow = () => {
		setUploadBtn(false);
	};

	const setSearchOptions = (key, value) => {
		setCurrentPage(0);
		console.log('setSearchOptions is working');
		console.log(key, value);
		setOptions((prevOptions) => ({
			...prevOptions,
			[key]: value,
		}));
		setFetching(true);
	};

	const scrollHandler = (e) => {
		if (
			e.target.documentElement.scrollHeight -
			(e.target.documentElement.scrollTop + window.innerHeight) <
			100 && !isResEmpty
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
			fetch(generateCatAPIUrl({ ...options, page: currentPage }), {
				params: options,
			})
				.then((res) => res.json())
				.then((res) => {
					currentPage === 0 ? setData(res) : setData([...data, ...res]);
					setCurrentPage(prevState => prevState + 1);
					res.length === 0 ? setIsResEmpty(true) : null;
				})
				.catch((err) => console.log(err))
				.finally(() => setFetching(false));
		}
	}, [options, fetching]);
	console.log('options', options);
	console.log(data);
	return (
		<>
			<Panel setSearchOptions={setSearchOptions} searchValue={options[`${breedsDataFilter.default.query}`]} />
			<div className={styles.wrapper}>
				<div className={styles.btns}>
					<BasicBtn isIdType={false} />
					<UploadBtn onClick={openUploadWindow} />
				</div>
				<Filter setSearchOptions={setSearchOptions} />
				<GridBreeds breedsCat={data} type='like' />
			</div>
			{uploadBtn ? <Upload onClose={closeUploadWindow} /> : null}
		</>
	);
};

export default Gallery;
