import React, { useState } from 'react';

import { LoadScript, GoogleMap } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

import { MarkerProps } from '@google/react-maps/types';

// Define interface for Marker data
interface Marker {
	lat: number;
	lng: number;
	content: string;
}



const EditableMap: React.FC = () => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [markers, setMarkers] = useState<Marker[]>([]);

	const handleMarkerAdd = (event: any) => {
		const newMarker: Marker = {
			lat: event.latLng.lat(),
			lng: event.latLng.lng(),
			content: '',
		};
		setMarkers([...markers, newMarker]);
	};

	const handleMarkerEdit = (index: number, newContent: string) => {
		const updatedMarkers = [...markers];
		updatedMarkers[index].content = newContent;
		setMarkers(updatedMarkers);
	};
	
	const handleMarkerDelete = (index: number) => {
		const updatedMarkers = [...markers];
		updatedMarkers.splice(index, 1);
		setMarkers(updatedMarkers);
	};

	return (
		<LoadScript
			googleMapsApiKey="AIzaSyCYG5qJiDS6VEhVTucACoUiSsV2IuNGykk" 
			libraries={['places']}
		>
			<GoogleMap
				mapContainerStyle={{ height: '400px', width: '600px' }}
				zoom={3}
				center={{ lat: 37.7749, lng: -122.4194 }} // Initial center coordinates
				onClick={handleMarkerAdd}
				onLoad={(mapInstance: google.maps.Map) => setMap(mapInstance)}
			>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						position={{ lat: marker.lat, lng: marker.lng }}
						onClick={() =>
							handleMarkerEdit(index, prompt('Edit marker content:'))
						}
						// Add custom marker content here (optional)
					>
						{/* Add custom marker content here (optional) */}
					</Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
};

export default EditableMap;
