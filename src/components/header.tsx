import {Box, Heading} from 'grommet';
import React from 'react';

function Header(props: {title: string; subtitle?: string}): JSX.Element {
	return (
		<Box
			direction='row-responsive'
			justify='start'
			margin={{bottom: 'large', left: 'large'}}
			as='sup'
		>
			<Box direction='column' justify='end' as='sup'>
				<Heading
					level={1}
					size='xlarge'
					color='accent-1'
					margin='small'
					as='sup'
				>
					{props.title}
				</Heading>
			</Box>
			{props.subtitle && (
				<Box direction='column' justify='end' as='sup'>
					<Heading level={2} size='large' margin='small' as='sup'>
						{props.subtitle}
					</Heading>
				</Box>
			)}
		</Box>
	);
}

export default Header;
