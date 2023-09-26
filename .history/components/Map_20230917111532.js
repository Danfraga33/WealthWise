import * as React from 'react';
import Head from 'next/head';
import Map from 'react-map-gl';

export default function SaleLocations() {
	return (
		<>
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
