import * as React from 'react';
import Map from 'react-map-gl';

export default function SaleLocations() {
	return (
		<>
			<Head>
				<link
					href="https://api.tiles.mapbox.com/mapbox-gl-js/v<YOUR_MAPBOX_VERSION>/mapbox-gl.css"
					rel="stylesheet"
				/>
			</Head>
			<Map
				mapboxAccessToken="<Mapbox access token>"
				initialViewState={{
					longitude: -122.4,
					latitude: 37.8,
					zoom: 14,
				}}
				style={{ width: 600, height: 400 }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
			/>
		</>
	);
}
