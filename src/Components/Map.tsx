import React, { useState } from 'react';

import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

// Define interface for Marker data
interface MarkerData {
	lat: number;
	lng: number;
	content: string;
	color: string;
}

const EditableMap: React.FC<{ markers: MarkerData[] }> = ({ markers }) => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [editableMarkers, setEditableMarkers] = useState<MarkerData[]>(markers);

	const handleMarkerAdd = (event: google.maps.MapMouseEvent) => {
		if (event.latLng) {
			const newMarker: MarkerData = {
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
				content: '',
				color: 'red',
			};
			setEditableMarkers([...markers, newMarker]);
		}
	};

	const handleMarkerEdit = (index: number, newContent: string | null) => {
		if (newContent !== null) {
			const updatedMarkers = [...markers];
			updatedMarkers[index].content = newContent;
			setEditableMarkers(updatedMarkers);
		}
	};

	const handleMarkerDelete = (index: number) => {
		const updatedMarkers = [...markers];
		updatedMarkers.splice(index, 1);
		setEditableMarkers(updatedMarkers);
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
				{markers.map((marker: MarkerData, index) => (
					<Marker
						key={index}
						position={{ lat: marker.lat, lng: marker.lng }}
						icon={{
							path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z',
							fillColor: marker.color,
							fillOpacity: 1,
							strokeColor: '#000',
							strokeWeight: 2,
							scale: 1,
						}}
						onClick={() =>
							handleMarkerEdit(index, prompt('Edit marker content:'))
						}
					>
						<div className="marker-content">{marker.content}</div>
					</Marker>
				))}
			</GoogleMap>
		</LoadScript>
	);
};

export default EditableMap;
