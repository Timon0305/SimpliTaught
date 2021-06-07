import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import _ from '@lodash';

function Dashboard() {
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<h1>Home page</h1>
			</FuseAnimate>
		</div>
	);
}

export default Dashboard;
