import React from 'react';

import styles from './input.module.css';

export const Input = () => {
	return (
		<div className={styles.container}>
			<form className={styles.form} action=''>
				<input className={styles.search} type='text' name='q' />
				<input className={styles.submit} type='submit' value='' />
			</form>
		</div>
	);
};

export default Input;
