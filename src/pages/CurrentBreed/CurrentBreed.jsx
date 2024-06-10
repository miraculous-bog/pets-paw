import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { API_KEY } from '../../constants';

import BasicBtn from '../../common/BasicBtn';
import Slider from './Slider/Slider';

import styles from './currentBreed.module.css';

const CurrentBreed = () => {
	const { name } = useParams();
	const location = useLocation();
	console.log(location);
	const [currentBreed, setCurrentBreed] = useState(null); // Змінено на null для позначення незавантажених даних
	console.log(currentBreed);

	useEffect(() => {
		console.log('start request');
		fetch(`https://api.thecatapi.com/v1/breeds/${name}`)
			.then((res) => res.json())
			.then((res) => {
				setCurrentBreed({ ...res });
			})
			.catch((err) => console.log(err));

		console.log('finishing request');
	}, [name]);

	if (!currentBreed) {
		return <p>Loading...</p>; // Відображати текст "Loading...", доки дані не завантажені
	}

	return (
		<div className={styles.container}>
			<BasicBtn isIdType={true} />
			<Slider breed={currentBreed.id} />
			<div className={styles.about}>
				<h1 className={styles.title}>{currentBreed.name}</h1>
				<h2 className={styles.description}>{currentBreed.description}</h2>
				<div className={styles.column}>
					<div className={styles.left}>
						<p className={styles.text}>
							<span className={styles.bold}>Temperament: </span>
							<br />
							{currentBreed.temperament}
						</p>
					</div>
					<div className={styles.right}>
						<p className={styles.text}>
							<span className={styles.bold}>Origin: </span>
							{currentBreed.origin}
						</p>
						<p className={styles.text}>
							<span className={styles.bold}>Weight: </span>
							{currentBreed.weight.metric
								? currentBreed.weight.metric
								: currentBreed.weight.ipmeratif}
						</p>
						<p className={styles.text}>
							<span className={styles.bold}>Life span: </span>
							{currentBreed.life_span}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentBreed;
