import { Outlet } from 'react-router-dom';

import Menu from './components/Menu';

const Layout = () => {
	return (
		<>
			<aside>
				<Menu />
			</aside>
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default Layout;
