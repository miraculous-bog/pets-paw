import React from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo';
import Functionality from '../Functionality';

import styles from './menu.module.css';

const Menu = () => {
	const { pathname } = useLocation();
	console.log(pathname);
	const getHiddenClass = () =>
		pathname === '/' ? styles.menu : `${styles.menu} ${styles.hidden}`;
	return (
		<div className={getHiddenClass()}>
			<Logo />
			<h1 className={styles.title}>Hi intern!</h1>
			<p className={styles.greeting}>Welcome to MI 2022 Front-end test</p>

			<h2 className={styles.functionality}>Lets start using The Cat API</h2>
			<Functionality />
		</div>
	);
};

export default Menu;
