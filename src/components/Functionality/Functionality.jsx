import React from 'react';
import FnCard from './FnCard';
import voting from '../../img/vote-table.png';
import breeds from '../../img/pet-breeds.png';
import gallery from '../../img/images-search.png';

import { Link, useLocation } from 'react-router-dom';

import {
	TYPE_PART_APP_VOTING,
	TYPE_PART_APP_BREEDS,
	TYPE_PART_APP_GALLERY,
} from '../../constants';
import './functionality.css';
const Functionality = () => {
	return (
		<div className='functionality'>
			<Link to='/voting'>
				<FnCard img={voting} text={TYPE_PART_APP_VOTING} />
			</Link>
			<Link to='/breeds'>
				<FnCard img={breeds} text={TYPE_PART_APP_BREEDS} />
			</Link>
			<Link to='/gallery'>
				<FnCard img={gallery} text={TYPE_PART_APP_GALLERY} />
			</Link>
		</div>
	);
};

export default Functionality;
