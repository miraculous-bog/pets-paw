import React, { useState } from 'react';
import Input from '../../common/Input';

import styles from './panel.module.css';

const Panel = ({ setSearchOptions, searchValue }) => {
	return (
		<div className={styles.container}>
			<Input value={searchValue} onInputChange={setSearchOptions} />
			<div className={styles.icons}>
				<div className={styles.back}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z'
							fill='#FF868E'
							className={styles.path}
						/>
					</svg>
				</div>
				<div className={styles.back}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z'
							fill='#FF868E'
							className={styles.path}
						/>
					</svg>
				</div>
				<div className={styles.back}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='29'
						viewBox='0 0 30 29'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M8.07107 2.40998C4.71811 2.40998 2 5.37272 2 9.02744C2 10.7825 2.63963 12.4657 3.77817 13.7067L15 25.9385L26.2218 13.7067C27.3604 12.4657 28 10.7825 28 9.02744C28 5.37272 25.2819 2.40998 21.9289 2.40998C20.3188 2.40998 18.7746 3.10717 17.636 4.34819L15.7071 6.45073C15.3166 6.8764 14.6834 6.8764 14.2929 6.45073L12.364 4.34819C11.2254 3.10718 9.68121 2.40998 8.07107 2.40998ZM0 9.02744C0 4.16874 3.61354 0.22998 8.07107 0.22998C10.2116 0.22998 12.2646 1.15685 13.7782 2.8067L15 4.13849L16.2218 2.8067C17.7354 1.15685 19.7884 0.22998 21.9289 0.22998C26.3865 0.22998 30 4.16874 30 9.02744C30 11.3607 29.1497 13.5983 27.636 15.2482L15.7071 28.2507C15.3166 28.6764 14.6834 28.6764 14.2929 28.2507L2.36396 15.2482C0.850339 13.5983 0 11.3607 0 9.02744Z'
							fill='#FF868E'
							className={styles.path}
						/>
					</svg>
				</div>
				<div className={styles.back}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='30'
						height='33'
						viewBox='0 0 30 33'
						fill='none'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M0 16.4C0 7.37019 6.71573 0.0500488 15 0.0500488C23.2843 0.0500488 30 7.37019 30 16.4C30 25.4299 23.2843 32.75 15 32.75C6.71573 32.75 0 25.4299 0 16.4ZM15 2.23005C7.8203 2.23005 2 8.57417 2 16.4C2 24.2259 7.8203 30.57 15 30.57C22.1797 30.57 28 24.2259 28 16.4C28 8.57417 22.1797 2.23005 15 2.23005ZM10 13.13H8V10.95H10V13.13ZM22 13.13H20V10.95H22V13.13ZM7.6 22.0681L8.2 21.196C11.6 16.2547 18.4 16.2547 21.8 21.196L22.4 22.0681L20.8 23.376L20.2 22.504C17.6 18.7254 12.4 18.7254 9.8 22.504L9.2 23.376L7.6 22.0681Z'
							fill='#FF868E'
							className={styles.path}
						/>
					</svg>
				</div>
			</div>
		</div>
	);
};

export default Panel;
