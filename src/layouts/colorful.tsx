import { Grommet } from 'grommet';
import Head from 'next/head';
import React, { ReactNode, useEffect, useState } from 'react';
import Seo from '../components/seo';
import siteMetadata from '../config/site-metadata';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/_typography.scss';

/** Color palette to use initially. */
const baseColors = {
	background: siteMetadata.themeColor,
	accent: siteMetadata.accentColor
};

/**
 * A template that wraps your content in a colorful background.
 * @param props
 */
function Colorful(props: {
	/** Anything you want to wrap in the colorful layout. */
	children: ReactNode;
}): JSX.Element {
	const [darkThemeEnabled, setDarkThemeEnabled] = useState(false);

	useEffect(() => {
		const query = window.matchMedia('(prefers-color-scheme: dark)');

		// Set the value from when this query first runs on page load
		setDarkThemeEnabled(query.matches);

		// Each time it changes update the theme again
		query.addListener(updatedQuery => {
			setDarkThemeEnabled(updatedQuery.matches);
		});
	}, []);

	const theme = {
		name: 'jonah.pw',
		rounding: 4,
		spacing: 24,
		global: {
			colors: {
				'accent-1': darkThemeEnabled
					? baseColors.background
					: baseColors.accent,
				background: darkThemeEnabled
					? baseColors.accent
					: baseColors.background,
				brand: darkThemeEnabled ? baseColors.accent : baseColors.background
			},
			font: {
				weight: 400,
				family: 'Roboto, sans-serif'
			}
		},
		heading: {
			level: {
				1: {
					font: {
						family: 'Open Sans, sans-serif',
						weight: 700
					}
				},
				2: {
					font: {
						family: 'Roboto, sans-serif',
						weight: 700
					}
				}
			}
		}
	};

	return (
		<>
			<Head>
				<title>{siteMetadata.title}</title>
				<Seo
					siteMetadata={siteMetadata}
					theme={darkThemeEnabled ? 'dark' : 'default'}
				/>
			</Head>
			<Grommet full theme={theme}>
				{props.children}
			</Grommet>
		</>
	);
}

export default Colorful;
