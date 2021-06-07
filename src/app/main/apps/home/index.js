import React from 'react';

const HomeConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/',
			component: React.lazy(() => import('./home'))
		}
	]
};

export default HomeConfig;
