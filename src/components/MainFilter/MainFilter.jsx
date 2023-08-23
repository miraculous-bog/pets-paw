import React from 'react';

import Input from '../../common/Input';
import ButtonImg from '../../common/ButtonImg';

import smileImg from '../../img/vektor-smile.png';
import sadnessImg from '../../img/vektor-unhappy.png';
import likeImg from '../../img/vektor-like.png';

import './mainFilter.css';

const MainFilter = () => {
	return (
		<div className='main-filter'>
			<Input />
			<ButtonImg img={smileImg} size='large' />
			<ButtonImg img={likeImg} size='large' />
			<ButtonImg img={sadnessImg} size='large' />
		</div>
	);
};

export default MainFilter;
