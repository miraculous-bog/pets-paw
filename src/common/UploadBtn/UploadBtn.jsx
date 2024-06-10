import React, { useState } from 'react';
import styles from './uploadBtn.module.css';

const UploadBtn = ({ onClick }) => {
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<button
			className={`${styles.button} ${isHovered ? styles.hovered : ''}`}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={onClick}
		>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='16'
				height='16'
				viewBox='0 0 16 16'
				fill='none'
			>
				<path
					fill-rule='evenodd'
					clip-rule='evenodd'
					d='M7.86601 0L12.2355 4.03339L11.4129 4.92452L8.48919 2.22567V12.3618H7.27645V2.30464L4.67336 4.90772L3.81583 4.05019L7.86601 0ZM1.21274 14.7873V7.51081H0V16H15.7656V7.51081H14.5529V14.7873H1.21274Z'
					fill={isHovered ? 'white' : '#FF868E'}
				/>
			</svg>
			UPLOAD
		</button>
	);
};

export default UploadBtn;
