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
				mapboxAccessToken="pk.eyJ1IjoiZGZyYWdhMzMiLCJhIjoiY2xtbmI1OGVrMHY2MDJybnptZzJuZG02NSJ9.XDYsq8S-XegD1Oa0f2l4aw"
				initialViewState={{
					width: 2000,
					height: 2000,
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
