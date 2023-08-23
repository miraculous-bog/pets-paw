import './select.css';

const Select = () => {
	return (
		<select className='filter-breeds-select' name='select'>
			<option value='value1'>Значение 1</option>
			<option value='value2' selected>
				Значение 2
			</option>
			<option value='value3'>Значение 3</option>
		</select>
	);
};

export default Select;
