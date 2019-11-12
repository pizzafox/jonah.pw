import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Anchor, Box, BoxProps, ResponsiveContext, Text} from 'grommet';
import React, {useState} from 'react';
import animationStyles from '../styles/_animate.scss';

// The Prettier indent rules will conflict with the TypeScript ones
/* eslint-disable @typescript-eslint/indent */
interface ExtraProps
	extends BoxProps,
		React.ClassAttributes<HTMLDivElement>,
		React.HTMLAttributes<HTMLDivElement> {}

const baseProps: ExtraProps = {
	direction: 'column',
	justify: 'center',
	background: 'accent-1',
	round: 'small',
	width: {min: 'small'},
	className: animationStyles.transition
};

/* eslint-enable @typescript-eslint/indent */
/**
 * Make a button using a Box.
 */
function BoxButton(props: {
	/** Where the box should take you when clicked. */
	href?: string;
	/** Label for the box. */
	children: string;
	/** Icon to display in the box. */
	icon?: IconDefinition;
	/** Extra props to pass to the box. */
	extras?: ExtraProps;
}): JSX.Element {
	const [hovered, setHovered] = useState(false);

	const box = (
		<ResponsiveContext.Consumer>
			{size => (
				<Box
					{...baseProps}
					{...props.extras}
					pad={
						size === 'small'
							? {horizontal: 'large', vertical: 'medium'}
							: 'small'
					}
					elevation={hovered ? 'xlarge' : props.href ? 'medium' : 'none'}
				>
					<Box
						as='span'
						direction='row'
						align='center'
						gap='small'
						style={{display: 'inline-flex'}}
					>
						{props.icon && <FontAwesomeIcon icon={props.icon} size='lg' />}
						<Text weight='bold'>{props.children}</Text>
					</Box>
				</Box>
			)}
		</ResponsiveContext.Consumer>
	);

	if (props.href) {
		return (
			<Anchor
				href={props.href}
				onMouseOver={() => setHovered(true)}
				onMouseOut={() => setHovered(false)}
			>
				{box}
			</Anchor>
		);
	}

	return box;
}

export default BoxButton;
