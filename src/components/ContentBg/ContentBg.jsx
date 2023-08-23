import React from 'react';

import background from '../../img/girl-and-pet.png';

import './contentBg.css';

const ContentBg = () => {
	return (
		<main className='content'>
			<div className='content-background bg-dark'>
				<img
					className='content-background-img'
					src={background}
					alt='background'
				/>
			</div>
		</main>
	);
};

export default ContentBg;
