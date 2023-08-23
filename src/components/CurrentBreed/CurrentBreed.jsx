import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { API_KEY } from '../../constants';
import './currentBreed.css';

const CurrentBreed = () => {
	const { name } = useParams();
	const [currentBreed, setCurrnetBreed] = useState({});
	console.log(currentBreed);
	useEffect(() => {
		fetch(`https://api.thecatapi.com/v1/breeds/search?q=sib`)
			.then((res) => res.json())
			.then((res) => setCurrnetBreed(res[0]))
			.catch((err) => console.log(err));
	}, [name]);
	return (
		<>
			<p>{name}</p>
		</>
	);
};

export default CurrentBreed;
