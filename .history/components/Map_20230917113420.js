import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const SaleLocations = ({ latitude, longitude, zoom }) => {
	// Define the map style and container height as numbers
	const mapStyle = {
		width: '100%',
		height: 300, // Specify the height as a number
	};

	return (
		<div style={mapStyle}>
			<ReactMapGL
				latitude={latitude}
				longitude={longitude}
				zoom={zoom}
				width="100%"
				height="100%"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
			>
				<Marker latitude={latitude} longitude={longitude}>
					<div>Your Marker</div>
				</Marker>
			</ReactMapGL>
		</div>
	);
};

export default SaleLocations;
