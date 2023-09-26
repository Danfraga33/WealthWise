import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

const StaticMap = ({ latitude, longitude, zoom }) => {
	const mapStyle = {
		width: '100%',
		height: '300px',
	};

	export default function SaleLocations() {
		return (
			<>
				<ReactMapGL
					{...mapStyle}
					latitude={latitude}
					longitude={longitude}
					zoom={zoom}
					mapStyle="mapbox://styles/mapbox/streets-v11"
					mapboxApiAccessToken="pk.eyJ1IjoiZGZyYWdhMzMiLCJhIjoiY2xtbmI1OGVrMHY2MDJybnptZzJuZG02NSJ9.XDYsq8S-XegD1Oa0f2l4aw"
				>
					<Marker latitude={latitude} longitude={longitude}>
						<div>Your Marker</div>
					</Marker>
				</ReactMapGL>
			</>
		);
	}
};
{
	/* <Map
				mapboxAccessToken="pk.eyJ1IjoiZGZyYWdhMzMiLCJhIjoiY2xtbmI1OGVrMHY2MDJybnptZzJuZG02NSJ9.XDYsq8S-XegD1Oa0f2l4aw"
				initialViewState={{
               width: 2000,
					height: 2000,
					longitude: -122.4,
					latitude: 37.8,
					zoom: 14,
				}}
				style={{ width: 1200, height: 1200 }}
				mapStyle="mapbox://styles/mapbox/streets-v9"
            />
         </> */
}
