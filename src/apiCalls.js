import { API_KEY } from './constants';

export const fetchBreedsData = () => {
	return fetch(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
		.then((res) => res.json())
		.then((res) => {
			const idSet = new Set();
			const transformedData = res
				.filter((item) => {
					if (!idSet.has(item.id)) {
						idSet.add(item.id);
						return true;
					}
					return false;
				})
				.map((item) => ({ name: item.name, value: item.id }));
			return transformedData;
		})
		.catch((err) => {
			console.log(err);
			return [];
		});
};
