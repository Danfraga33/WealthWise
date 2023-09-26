import * as React from 'react';
import Head from 'next/head';
import Map from 'react-map-gl';
import * as React from 'react';
import Map, { Source, Layer } from 'react-map-gl';
import type { CircleLayer } from 'react-map-gl';
import type { FeatureCollection } from 'geojson';

const geojson: FeatureCollection = {
	type: 'FeatureCollection',
	features: [
		{
			type: 'Feature',
			geometry: { type: 'Point', coordinates: [-122.4, 37.8] },
		},
	],
};

const layerStyle: CircleLayer = {
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
