import React from 'react';
import { useLocation } from 'react-router-dom';
import Button from '../../../common/Button';
import styles from './fncard.module.css';

const FnCard = ({ img, text }) => {
	const { pathname } = useLocation();
	console.log(pathname, text);

	const isActive = () => {
		if (pathname === `/${text}`) {
			return {
				className: `${styles.item} ${styles.active} ${styles[`${text}`]}`,
				isActive: true,
			};
		} else {
			return {
				className: `${styles.item} ${styles[`${text}`]}`,
				isActive: false,
			};
		}
	};

	return (
		<div className={isActive().className}>
			<div className={styles.container}>
				<img className={styles.img} src={img} alt={text} />
			</div>
			<Button buttonText={text} isActive={isActive().isActive} />
		</div>
	);
};

export default FnCard;
