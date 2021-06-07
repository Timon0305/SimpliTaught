import React from 'react';
import FuseAnimate from '@fuse/core/FuseAnimate';
import Typography from '@material-ui/core/Typography';
import _ from '@lodash';

function Dashboard() {
	alert('hi');
	return (
		<div className="w-full">
			<FuseAnimate animation="transition.slideUpIn" delay={200}>
				<div className="container flex flex-col md:flex-row sm:p-8">
					<div className="flex flex-col flex-1 min-w-0">
						<FuseAnimate delay={600}>
							<Typography className="p-16 pb-8 text-18 font-300">
								How are your active users trending over time?
							</Typography>
						</FuseAnimate>

						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">
								How many pages your users visit?
							</Typography>
						</FuseAnimate>

						<FuseAnimate delay={600}>
							<Typography className="px-16 pb-8 text-18 font-300">Where are your users?</Typography>
						</FuseAnimate>
					</div>

					<div className="flex flex-wrap w-full pt-16 md:w-320">
						<div className="w-full mb-32 sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300">
									What are your top devices?
								</Typography>
							</FuseAnimate>
						</div>

						<div className="w-full mb-32 sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<div className="px-16 pb-8 text-18 font-300">How are your sales?</div>
							</FuseAnimate>
						</div>

						<div className="w-full mb-32 sm:w-1/2 md:w-full">
							<FuseAnimate delay={600}>
								<Typography className="px-16 pb-8 text-18 font-300 lg:pt-0">
									What are your top campaigns?
								</Typography>
							</FuseAnimate>
							<div className="w-full p-16 widget">
								<h1>Dashboard page herer</h1>
							</div>
						</div>
					</div>
				</div>
			</FuseAnimate>
		</div>
	);
}

export default Dashboard;
