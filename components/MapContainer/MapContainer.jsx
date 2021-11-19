import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
};

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '500px',
    maxHeight: '80vh'
}

const storeCoordinates = { lat: 32.022130, lng: 34.801570 };

export function MapContainer(props) {
    return (
        <Map
            google={props.google}
            containerStyle={containerStyle}
            style={mapStyles}
            zoom={14}
            defaultZoom={14}
            initialCenter={{ lat: 32.022130, lng: 34.801570 }}
        >
            <Marker lat={storeCoordinates.latitude} lng={storeCoordinates.longitude} />
        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAOt25Ti-7veP8ZxJgoAFnOfMpXsLM9hZg'
})(MapContainer);
