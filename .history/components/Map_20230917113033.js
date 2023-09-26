import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const StaticMap = ({ latitude, longitude, zoom }) => {
	const mapStyle = {
		width: '100%',
		height: '300px',
	};

	return (
		<ReactMapGL
			{...mapStyle}
			latitude={latitude}
			longitude={longitude}
			zoom={zoom}
			mapStyle="mapbox://styles/mapbox/streets-v11"
			mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
		>
			<Marker latitude={latitude} longitude={longitude}>
				<div>Your Marker</div>
			</Marker>
		</ReactMapGL>
	);
};

export default StaticMap;
