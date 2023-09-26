import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<link
				href="https://api.tiles.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css"
				rel="stylesheet"
			/>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
