import React from 'react';
import {
	ComposableMap,
	Marker,
	Geographies,
	Geography,
} from 'react-simple-maps';

const geoUrl =
	'https://raw.githubusercontent.com/deldersveld/topojson/master/continents/south-america.json';

const markers = [
	{ markerOffset: -15, name: 'New York', coordinates: [-74.006, 40.7128] },
	{ markerOffset: 25, name: 'Los Angeles', coordinates: [-118.2437, 34.0522] },
	{ markerOffset: 25, name: 'Chicago', coordinates: [-87.6298, 41.8781] },
	{ markerOffset: 25, name: 'Houston', coordinates: [-95.3698, 29.7604] },
	{ markerOffset: 25, name: 'Miami', coordinates: [-80.1918, 25.7617] },
	{ markerOffset: -15, name: 'Toronto', coordinates: [-79.3832, 43.6532] },
	{ markerOffset: -15, name: 'Mexico City', coordinates: [-99.1332, 19.4326] },
];

const MapChart = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [58, 20, 0],
				scale: 400,
			}}
		>
			<Geographies geography={geoUrl}>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography
							key={geo.rsmKey}
							geography={geo}
							fill="#EAEAEC"
							stroke="#D6D6DA"
						/>
					))
				}
			</Geographies>
			{markers.map(({ name, coordinates, markerOffset }) => (
				<Marker key={name} coordinates={coordinates}>
					<circle r={10} fill="#F00" stroke="#fff" strokeWidth={1} />
					<text
						textAnchor="middle"
						y={markerOffset}
						style={{ fontFamily: 'system-ui', fill: '#5D5A6D' }}
					>
						{name}
					</text>
				</Marker>
			))}
		</ComposableMap>
	);
};
const Map = () => {
	return (
		<div>
			<MapChart />
		</div>
	);
};

export default Map;
