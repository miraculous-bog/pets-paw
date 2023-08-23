import React from 'react';
import { useLocation } from 'react-router-dom';

import Button from '../../../common/Button';

import './fncard.css';

const FnCard = ({ img, text }) => {
	const { pathname } = useLocation();
	console.log(pathname);
	const isActive = () => {
		if (pathname === `/${text}`) {
			return {
				className: `functionality-item functionality-item-acive ${text}`,
				isActive: true,
			};
		} else {
			return { className: `functionality-item ${text}`, isActive: false };
		}
	};

	return (
		<div className={isActive().className}>
			<div className='functionality-item__img-container'>
				<img className='functionality-item__img' src={img} alt={text} />
			</div>
			<Button buttonText={text} isActive={isActive().isActive} />
		</div>
	);
};

export default FnCard;
