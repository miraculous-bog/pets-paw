import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from './Logo.png';

import './logo.css';

const Logo = () => {
	return (
		<div className='logo'>
			<Link to='/'>
				<img src={logoImg} alt='logo' />
			</Link>
		</div>
	);
};

export default Logo;
