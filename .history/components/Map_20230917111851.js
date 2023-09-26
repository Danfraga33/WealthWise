import * as React from 'react';
import Head from 'next/head';
import Map, { Source, Layer } from 'react-map-gl';

const geojson = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
		},
	],
};

const layerStyle = {
	id: 'point',
	type: 'circle',
	paint: {
		'circle-radius': 10,
		'circle-color': '#007cbf',
	},
};

export default function SaleLocations() {
	return (
		<>
			<Map
				mapboxAccessToken="<Mapbox access token>"
            initialViewState={{
               width=400,
               height=400,
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
