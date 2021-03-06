import {DefaultSeo, NextSeo} from 'next-seo';
import {ThemeProvider, useTheme} from 'next-themes';
import {AppProps} from 'next/app';
import Head from 'next/head';
// eslint-disable-next-line import/no-unassigned-import
import 'normalize.css';
import {FC} from 'react';
import Container from '../components/container';
import Header from '../components/header';
import {color, seo, url} from '../config';
// eslint-disable-next-line import/no-unassigned-import
import '../styles/global.scss';

const JonahSniderApp: FC = props => {
	const resolvedTheme = useTheme().resolvedTheme as undefined | 'light' | 'dark' | 'system';

	const theme = resolvedTheme === 'dark' ? 'dark' : 'light';

	return (
		<>
			<Head>
				<meta name='theme-color' content={theme === 'dark' ? color.foreground : color.background} />
				<link rel='manifest' href={`/manifests/${theme}.webmanifest`} />

				<link rel='icon' href={`${url}/images/js/${theme}/favicon.ico`} type='image/x-icon' />

				{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
					<link
						key={`icon-${dimension}`}
						rel='icon'
						type='image/png'
						sizes={`${dimension}x${dimension}`}
						href={`${url}/images/js/${theme}/js-${dimension}x.png`}
					/>,
					<link
						key={`apple-touch-icon-${dimension}`}
						rel='apple-touch-icon'
						type='image/png'
						sizes={`${dimension}x${dimension}`}
						href={`${url}/images/js/${theme}/js-${dimension}x.png`}
					/>
				])}
			</Head>

			<DefaultSeo {...seo} />

			<NextSeo
				openGraph={{
					images: [
						{
							url: `${url}/images/js/${theme}/js-512x.png`
						}
					]
				}}
			/>

			<Container>
				<Header title='Jonah Snider' subtitle='Full-stack developer' />

				{props.children}
			</Container>
		</>
	);
};

const ThemedApp: FC<AppProps> = ({Component, pageProps}) => (
	<ThemeProvider>
		<JonahSniderApp>
			<Component {...pageProps} />
		</JonahSniderApp>
	</ThemeProvider>
);

export default ThemedApp;
