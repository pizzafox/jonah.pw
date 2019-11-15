import {faHome} from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import BoxButton from '../components/box-button';
import Header from '../components/header';
import Colorful from '../layouts/colorful';

/**
 * Home page.
 */
function Home(): JSX.Element {
	return (
		<Colorful>
			<Header title='404' subtitle="This page couldn't be found" />

			<BoxButton
				relative
				icon={faHome}
				extras={{margin: 'large', width: {max: 'medium'}}}
				href='/'
			>
				Home
			</BoxButton>
		</Colorful>
	);
}

export default Home;
