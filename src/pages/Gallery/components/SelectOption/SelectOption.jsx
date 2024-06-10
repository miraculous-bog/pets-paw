import React, { useState } from 'react';

import styles from './selectOption.module.css';

const SelectOption = ({ options, onChange }) => {
	console.log(options.default.value);
	const [selectedValue, setSelectedValue] = useState(options.default.value);

	const handleSelectChange = (event) => {
		const newValue = event.target.value;
		setSelectedValue(newValue);
		onChange(options.default.query, newValue);
	};

	return (
		<div className={styles.container}>
			<label className={styles.label}>{options.title}</label>
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

export default SelectOption;
