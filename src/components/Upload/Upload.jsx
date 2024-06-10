import React, { useState, useRef, useEffect } from 'react';

import styles from './upload.module.css';

const Upload = ({ onClose }) => {
	const filePicker = useRef(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [drag, setDrag] = useState(false);

	const handleChange = (e) => {
		const file = e.target.files[0];

		if (!file) {
			return;
		}

		if (!file.type.startsWith('image/')) {
			alert('Please upload an image file.');
			return;
		}

		setSelectedFile(file);
		setDrag(false);
		console.log(file);
	};

	const dragStartHandler = (e) => {
		e.preventDefault();
		console.log('dragStartHandler');
		setDrag(true);
	};

	const dragLeaveHandler = (e) => {
		e.preventDefault();
		setDrag(false);
	};

	const onDropHandler = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;

		if (files.length > 1) {
			alert('Please upload only one file.');
			return;
		}

		const file = files[0];

		if (!file) {
			return;
		}

		if (!file.type.startsWith('image/')) {
			alert('Please upload an image file.');
			return;
		}

		setSelectedFile(file);
		setDrag(false);
		console.log(file);
	};
	const handlerUpload = async () => {
		if (!selectedFile) {
			alert('please select a file');
			return;
		}
	};

	const modalRef = useRef(null);

	const handleClose = (e) => {
		if (e.target === modalRef.current) {
			onClose(false);
		}
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Escape') {
			onClose(false);
		}
	};

	const handlePick = () => filePicker.current.click();

	useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	return (
		<div className={styles.modalOverlay} ref={modalRef} onClick={handleClose}>
			<div className={styles.modal}>
				<div className={styles.content}>
					<button className={styles.closeButton} onClick={onClose}>
						Close
					</button>
					<h2 className={styles.title}>Upload a .jpg or .png Cat Image</h2>
					<p className={styles.text}>
						Any uploads must comply with the{' '}
						<span className={styles.highlight}>upload guidelines</span> or face
						deletion.
					</p>
					<div
						className={`${styles.dropdown} ${drag ? styles.dragged : ''}`}
						onDragStart={(e) => dragStartHandler(e)}
						onDragLeave={(e) => dragLeaveHandler(e)}
						onDragOver={(e) => dragStartHandler(e)}
						onDrop={(e) => onDropHandler(e)}
						onClick={handlePick}
					>
						<input
							ref={filePicker}
							type='file'
							accept='image/*'
							onChange={handleChange}
							className={styles.hidden} // Додати клас стилів для input
						/>
						{selectedFile ? (
							<img
								className={styles.uploadedImg}
								src={URL.createObjectURL(selectedFile)}
								alt='uploading img'
							/>
						) : (
							<p>
								{' '}
								{drag
									? 'Drop your file here'
									: 'Drag here your file or Click here to upload'}
							</p>
						)}
					</div>
					<p className={styles.text}>
						{selectedFile ? selectedFile.name : 'No file selected'}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Upload;
