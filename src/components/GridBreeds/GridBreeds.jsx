import { useState, useEffect } from 'react';

import ItemBreed from './ItemBreed';

import './gridBreeds.css';

import { API_KEY } from '../../constants';
const GridBreeds = () => {
	const [options, setOptions] = useState({
		attach_breed: 0,
		page: 1,
		limit: 10,
	});
	const [breedsCat, setBreedsCat] = useState([]);
	const filterCorrectValue = (arr) => {
		const filteredData = arr.filter((item) =>
			Object.hasOwnProperty.bind(item)('image')
		);
		setBreedsCat(() => filteredData);
	};
	useEffect(() => {
		fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`, {
			params: options,
		})
			.then((res) => res.json())
			.then((res) => filterCorrectValue(res))
			.catch((err) => console.log(err));
	}, [options]);
	let num = 0;
	return (
		<div className='gallery-breed'>
			{breedsCat.length !== 0 &&
				breedsCat.map((item) => {
					num === 16 ? (num = 0) : num++;
					return (
						<ItemBreed
							key={item.id}
							url={item.image.url}
							name={item.name}
							num={num}
						/>
					);
				})}
			{/* <div class='item1'>
				<img class='gallery-img' src='images/img1.jpeg' alt='img' />
			</div>
			<div class='item2'>
				<img class='gallery-img' src='images/img2.jpeg' alt='img' />
			</div>
			<div class='item3'>
				<img class='gallery-img' src='images/img3.jpeg' alt='img' />
			</div>
			<div class='item4'>
				<img class='gallery-img' src='images/img4.jpg' alt='img' />
			</div>
			<div class='item5'>
				<img class='gallery-img' src='images/img5.jpg' alt='img' />
			</div>
			<div class='item6'>
				<img class='gallery-img' src='images/img6.jpg' alt='img' />
			</div>
			<div class='item7'>
				<img class='gallery-img' src='images/img7.jpg' alt='img' />
			</div>
			<div class='item8'>
				<img class='gallery-img' src='images/img8.jpg' alt='img' />
			</div>
			<div class='item9'>
				<img class='gallery-img' src='images/img9.jpeg' alt='img' />
			</div>
			<div class='item10'>
				<img class='gallery-img' src='images/img10.jpg' alt='img' />
			</div>
			<div class='item11'>
				<img class='gallery-img' src='images/img11.jpeg' alt='img' />
			</div> */}
			<h1>Breeds</h1>
		</div>
	);
};

export default GridBreeds;
