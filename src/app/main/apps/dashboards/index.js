import React from 'react';

const DashboardConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: '/dashboards',
			component: React.lazy(() => import('./dashboard'))
		}
	]
};

export default DashboardConfig;
