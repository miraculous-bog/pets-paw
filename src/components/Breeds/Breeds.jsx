import MainFilter from '../MainFilter';

import ButtonImg from '../../common/ButtonImg';
import Select from '../../common/Select';
import Button from '../../common/Button';
import GridBreeds from '../GridBreeds';

import sizeUpImg from '../../img/sort-up.svg';
import sizeDownImg from '../../img/sort-down.svg';
import searchImg from '../../img/vektor-like.png';
import './breeds.css';

const Breeds = () => {
	return (
		<div>
			<MainFilter />
			<div className='breeds-content'>
				<div className='filter-breeds'>
					<ButtonImg img={searchImg} size='large' />
					<Button buttonText='BREEDS' isActive={false} />
					<Select />
					<ButtonImg img={sizeUpImg} size='small' />
					<ButtonImg img={sizeDownImg} size='small' />
				</div>
				<GridBreeds />
			</div>
		</div>
	);
};

export default Breeds;
