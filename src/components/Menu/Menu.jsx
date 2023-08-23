import React from 'react';

import Logo from '../Logo';
import Functionality from '../Functionality';

import './menu.css';

const Menu = () => {
	return (
		<aside className='menu'>
			<Logo />
			<h1 className='menu-title'>Hi intern!</h1>
			<p className='menu-greeting'>Welcome to MI 2022 Front-end test</p>

			<h2 className='functionality-title'>Lets start using The Cat API</h2>
			<Functionality />
		</aside>
	);
};

export default Menu;
