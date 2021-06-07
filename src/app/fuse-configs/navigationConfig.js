import { authRoles } from 'app/auth';
import i18next from 'i18next';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATIONS',
		type: 'group',
		icon: 'apps',
		children: [
			{
				id: 'profile',
				title: 'Profile',
				type: 'item',
				icon: 'person',
				url: '/profile'
			},
			{
				id: '/',
				title: 'Home',
				type: 'item',
				icon: 'home',
				url: '/'
			},
			{
				id: 'dashbaord',
				title: 'Dashbaord',
				type: 'item',
				icon: 'dashboard',
				url: '/Dashbaord'
			},
			{
				id: 'libraries',
				title: 'Libraries',
				type: 'item',
				icon: 'video_library',
				url: '/Libraries'
			},
			{
				id: 'books',
				title: 'Books',
				type: 'item',
				icon: 'menu_book',
				url: '/Books'
			},
			{
				id: 'payments',
				title: 'Payments',
				type: 'item',
				icon: 'payment',
				url: '/Payments'
			},
			{
				id: 'settings',
				title: 'Settings',
				type: 'item',
				icon: 'settings',
				url: '/Settings'
			},
			{
				id: 'support',
				title: 'Support',
				type: 'item',
				icon: 'help_center',
				url: '/Support'
			},
			{
				id: 'logout',
				title: 'Log out',
				type: 'item',
				icon: 'exit_to_app',
				url: '/Logout'
			}
		]
	}
];

export default navigationConfig;
