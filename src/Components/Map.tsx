import React, { useState } from 'react';

import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

interface MarkerData {
	lat: number;
	lng: number;
	content: string;
	color: string;
}

interface EditableMapProps {
	markers: MarkerData[];
}

const EditableMap: React.FC<EditableMapProps> = ({ markers }) => {
	const [map, setMap] = useState<google.maps.Map | null>(null);
	const [editableMarkers, setEditableMarkers] = useState<MarkerData[]>(markers);
	const [newMarker, setNewMarker] = useState<MarkerData>({
		lat: 0,
		lng: 0,
		content: '',
		color: 'ed',
	});

	const handleMarkerAdd = (event: google.maps.MapMouseEvent) => {
		if (event.latLng) {
			const newMarker: MarkerData = {
				lat: event.latLng.lat(),
				lng: event.latLng.lng(),
				content: '',
				color: 'ed',
			};
			setEditableMarkers([...editableMarkers, newMarker]);
		}
	};
	

	const handleMarkerEdit = (index: number, newContent: string | null) => {
		if (newContent !== null) {
			const updatedMarkers = [...editableMarkers];
			updatedMarkers[index].content = newContent;
			setEditableMarkers(updatedMarkers);
		}
	};

	const handleMarkerDelete = (index: number) => {
		const updatedMarkers = [...editableMarkers];
		updatedMarkers.splice(index, 1);
		setEditableMarkers(updatedMarkers);
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setNewMarker((prevMarker: MarkerData) => ({
			...prevMarker,
			[name]: value,
		}));
	};

	return (
		<div>
			<form>
				<input
					type="number"
					name="lat"
					value={newMarker.lat}
					onChange={handleInputChange}
					placeholder="Latitude"
				/>
				<input
					type="number"
					name="lng"
					value={newMarker.lng}
					onChange={handleInputChange}
					placeholder="Longitude"
				/>
				<input
					type="text"
					name="content"
					value={newMarker.content}
					onChange={handleInputChange}
					placeholder="Marker Content"
				/>
				<input
					type="text"
					name="color"
					value={newMarker.color}
					onChange={handleInputChange}
					placeholder="Marker Color"
				/>
				<button type="button" onClick={handleMarkerAdd}>
					Add Marker
				</button>
			</form>

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
					{editableMarkers.map((marker: MarkerData, index: number) => (
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
		</div>
	);
};

export default EditableMap;
