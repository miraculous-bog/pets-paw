import Button from '../../../common/Button';

import { Link } from 'react-router-dom';

import './itemBreed.css';

const ItemBreed = ({ num, url, name }) => {
	const classNum = `item${num} breed-img`;
	const path = `/breeds/${name}`;
	return (
		<div className={classNum}>
			<img className='gallery-img' src={url} alt={name} />
			<Link to={path}>
				<div className='gallery-img-hover'>
					<Button buttonText={name} isActive={false} />
				</div>
			</Link>
		</div>
	);
};

export default ItemBreed;
