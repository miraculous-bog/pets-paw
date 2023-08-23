import React from 'react';

import styles from './button.module.css';

const Button = ({ buttonText, actionBtn, type = 'button', isActive }) => {
	const getAvtiveStyle = () => (isActive ? 'active' : 'button');
	return (
		<button
			className={styles[getAvtiveStyle()]}
			onClick={actionBtn ? () => actionBtn() : null}
			type={type}
		>
			{buttonText}
		</button>
	);
};

export default Button;
