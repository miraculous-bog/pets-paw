import React from 'react';

import background from '../../img/girl-and-pet.png';

import styles from './contentBg.module.css';

const ContentBg = () => {
	return (
		<div className={styles.content}>
			<div className={styles.background}>
				<img className={styles.img} src={background} alt='background' />
			</div>
		</div>
	);
};

export default ContentBg;
