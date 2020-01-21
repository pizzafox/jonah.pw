import React from 'react';
import {Theme} from '@material-ui/core';
import Head from 'next/head';
import siteMetadata from '../config/site-metadata';

/**
 * A collection of SEO tags that use values from a site-wide or page specific config.
 */
export default function Seo(props: {theme: Theme}): JSX.Element {
	return (
		<Head>
			<meta key='mobile-web-app-capable' name='mobile-web-app-capable' content='yes' />
			<meta key='apple-mobile-web-app-capable' name='apple-mobile-web-app-capable' content='yes' />

			<meta key='msapplication-starturl' name='msapplication-starturl' content='/' />
			<link key='manifest' rel='manifest' href={`/manifests/${props.theme.palette.type}.webmanifest`} />

			<link
				key='icon'
				rel='icon'
				href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/favicon.ico`}
				type='image/x-icon'
			/>

			<meta
				key='og:image'
				property='og:image'
				content={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`}
			/>
			<meta
				key='og:image:secure_url'
				property='og:image:secure_url'
				content={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`}
			/>
			<meta key='og:image:type' property='og:image:type' content='image/png' />
			<meta key='og:image:width' property='og:image:width' content='512' />
			<meta key='og:image:height' property='og:image:height' content='512' />

			{/* A bunch of icons. */}
			{[72, 96, 128, 144, 152, 192, 384, 512].map(dimension => [
				<link
					key={`icon-${dimension}`}
					rel='icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-${dimension}.png`}
				/>,
				<link
					key={`apple-touch-icon-${dimension}`}
					rel='apple-touch-icon'
					type='image/png'
					sizes={`${dimension}x${dimension}`}
					href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-${dimension}.png`}
				/>
			])}

			<link
				key='apple-touch-startup-image'
				rel='apple-touch-startup-image'
				href={`${siteMetadata.url}/images/js/${props.theme.palette.type}/icon-512.png`}
			/>

			<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />

			<meta key='title' name='title' content={siteMetadata.title} />
			<meta key='application-name' name='application-name' content={siteMetadata.title} />
			<meta key='apple-mobile-web-app-title' name='apple-mobile-web-app-title' content={siteMetadata.title} />
			<meta key='twitter:title' name='twitter:title' content={siteMetadata.title} />
			<meta key='og:title' property='og:title' content={siteMetadata.title} />

			<meta key='og:url' property='og:url' content={siteMetadata.url} />

			<meta key='language' name='language' content={siteMetadata.i18n.language} />

			<meta property='og:locale' content={siteMetadata.i18n.locale} />

			<meta key='description' name='description' content={siteMetadata.description} />
			<meta key='twitter:description' name='twitter:description' content={siteMetadata.description} />
			<meta key='og:description' property='og:description' content={siteMetadata.description} />

			<meta key='og:type' property='og:type' content='website' />

			<meta key='twitter:card' name='twitter:card' content='summary' />

			<meta key='theme-color' name='theme-color' content={props.theme.palette.primary.main} />
			<meta
				key='msapplication-navbutton-color'
				name='msapplication-navbutton-color'
				content={props.theme.palette.primary.main}
			/>

			<meta key='keywords' name='keywords' content={siteMetadata.keywords.join(', ')} />
		</Head>
	);
}
