import React from 'react';
import styles from './buttonImg.module.css'; // Импортируем модульные стили

const ButtonImg = ({ img, actionBtn, type = 'button', isActive, size }) => {
	const getSizeImg = () => (size === 'large' ? styles.large : styles.small);

	const getActiveStyle = () =>
		isActive
			? `${styles.button} ${styles.active} ${getSizeImg()}`
			: `${styles.button} ${getSizeImg()}`;

	return (
		<button
			className={getActiveStyle()}
			onClick={actionBtn ? () => actionBtn() : null}
			type={type}
		>
			<img src={img} alt='button' />
		</button>
	);
};

export default ButtonImg;
