const orderDataFilter = {
	title: 'order',
	default: { name: 'Random', value: '', query: 'order' },
	data: [
		{ name: 'Desk', value: 'DESK' },
		{ name: 'Ask', value: 'ASK' },
	],
};

const typeDataFilter = {
	title: 'type',
	default: { name: 'All', value: '', query: 'mime_types' },
	data: [
		{ name: 'Static', value: 'jpg,png' },
		{ name: 'Animated', value: 'gif' },
	],
};

const limitDataFilter = {
	title: 'limit',
	default: { name: '5 items per page', value: 5, query: 'limit' },
	data: [
		{ name: '10 items per page', value: 10 },
		{ name: '15 items per page', value: 15 },
		{ name: '20 items per page', value: 20 },
	],
};

const breedsDataFilter = {
	title: 'breeds',
	default: { name: 'None', value: '', query: 'breeds' },
	data: [],
};

export { orderDataFilter, typeDataFilter, limitDataFilter, breedsDataFilter };
