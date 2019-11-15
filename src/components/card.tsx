import {IconDefinition} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Anchor, Box, BoxProps, Heading, Paragraph, ThemeContext} from 'grommet';
import {ElevationType} from 'grommet/utils';
import React, {CSSProperties, useState} from 'react';
import animationStyles from '../styles/_animate.scss';
import typographyStyles from '../styles/_typography.scss';
import NoHover from './no-hover';

/** Base elevation for the card. */
const baseElevation: ElevationType = 'medium';

/**
 * A collection of information with a title.
 */
function Card(props: {
	/** Title of the card. */
	title: string;
	/** Description for the card. */
	children: string | string[];
	/** Link for more information about this card. */
	href?: string;
	/** An icon to display alongside the title. */
	icon?: IconDefinition;
}): JSX.Element {
	const [hovered, setHovered] = useState(false);

	const baseProps: BoxProps = {
		direction: 'column',
		round: 'small',
		background: 'accent-1',
		pad: 'small',
		margin: {
			vertical: 'small'
		}
	};

	const headingStyles: CSSProperties = {
		textDecoration: hovered ? 'underline' : 'none'
	};

	const card = (
		<>
			<Box responsive direction='row' justify='between' align='start' as='sup'>
				<ThemeContext.Extend
					value={{
						heading: {
							extend: headingStyles
						}
					}}
				>
					<Heading
						level={3}
						margin='none'
						color={{dark: '#ffffff', light: '#000000'}}
						as='sup'
					>
						{props.title}
					</Heading>
				</ThemeContext.Extend>
				{props.icon && (
					<Box
						margin={{
							left: 'small',
							bottom: 'small'
						}}
						as='sup'
					>
						<ThemeContext.Consumer>
							{theme => (
								<FontAwesomeIcon
									// @ts-ignore
									icon={props.icon}
									// @ts-ignore
									color={theme.global.colors.brand}
									size='2x'
								/>
							)}
						</ThemeContext.Consumer>
					</Box>
				)}
			</Box>

			<Paragraph
				color={{dark: '#dddddd', light: '#222222'}}
				className={typographyStyles['normal-weight']}
			>
				{props.children}
			</Paragraph>
		</>
	);

	if (props.href) {
		return (
			<NoHover>
				<Anchor key={props.title} href={props.href} as='sup'>
					<Box
						{...baseProps}
						elevation={hovered ? 'xlarge' : baseElevation}
						className={animationStyles.transition}
						as='sup'
						onMouseOver={() => setHovered(true)}
						onMouseOut={() => setHovered(false)}
					>
						{card}
					</Box>
				</Anchor>
			</NoHover>
		);
	}

	return (
		<Box {...baseProps} elevation={baseElevation}>
			{card}
		</Box>
	);
}

export default Card;
