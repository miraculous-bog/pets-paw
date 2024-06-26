import React, { useState } from 'react';

import styles from './select.module.css';

const Select = ({ options, onChange }) => {
	console.log(options.default.value);
	const [selectedValue, setSelectedValue] = useState(options.default.value);

	const handleSelectChange = (event) => {
		const newValue = event.target.value;
		setSelectedValue(newValue);
		onChange(options.default.query, newValue);
	};

	return (
		<div className={styles.container}>
			<select
				className={styles.select}
				value={selectedValue}
				onChange={handleSelectChange}
			>
				<option className={styles.option} value={options.default.value}>
					{options.default.name}
				</option>
				{options.data.map((option, index) => (
					<option className={styles.option} key={index} value={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
