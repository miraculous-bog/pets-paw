import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '..//Button';

import styles from './basicBtn.module.css';

const BasicBtn = ({ isIdType }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const pathMenu = location.pathname.split('/')[1];
	const id = location.pathname.split('/')[2];
	console.log('location', location.pathname.split('/'));
	const handleGoBack = () => {
		navigate(-1);
	};
	return (
		<div className={styles.container}>
			<div className={styles.back} onClick={handleGoBack}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='20'
					height='20'
					viewBox='0 0 20 20'
					fill='none'
				>
					<g clip-path='url(#clip0_1_1332)'>
						<path
							d='M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z'
							fill='#FF868E'
							className={styles.path}
						/>
					</g>
					<defs>
						<clipPath id='clip0_1_1332'>
							<rect width='20' height='20' fill='white' />
						</clipPath>
					</defs>
				</svg>
			</div>
			<div className={isIdType ? styles.noneInfo : styles.info}>{pathMenu}</div>
			{isIdType ? <div className={styles.info}>{id}</div> : null}
		</div>
	);
};

export default BasicBtn;
