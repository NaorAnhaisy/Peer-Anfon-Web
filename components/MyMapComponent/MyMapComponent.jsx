// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%',
// };

// const containerStyle = {
//     position: 'relative',
//     width: '100%',
//     height: '500px',
//     maxHeight: '80vh'
// }

// const storeCoordinates = { lat: 32.022130, lng: 34.801570 };

// export function MapContainer(props) {
//     return (
//         <Map
//             google={props.google}
//             containerStyle={containerStyle}
//             style={mapStyles}
//             zoom={14}
//             defaultZoom={14}
//             initialCenter={{ lat: 32.022130, lng: 34.801570 }}
//         >
//             <Marker lat={storeCoordinates.latitude} lng={storeCoordinates.longitude} />
//         </Map>
//     );
// }

// export default GoogleApiWrapper({
//     apiKey: 'AIzaSyAOt25Ti-7veP8ZxJgoAFnOfMpXsLM9hZg'
// })(MapContainer);



import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

mapboxgl.accessToken = 'pk.eyJ1IjoicGVlcmFuZm9uIiwiYSI6ImNrdzdxZGgyeTFlNncyeG1lbTVrZWN1Nm0ifQ.M_APSUgEXEr0lnz6zml8cw';

export default function MyMapComponent() {

    useEffect(() => {
        mapboxgl.accessToken = 'pk.eyJ1IjoicGVlcmFuZm9uIiwiYSI6ImNrdzdxZGgyeTFlNncyeG1lbTVrZWN1Nm0ifQ.M_APSUgEXEr0lnz6zml8cw';

        if (mapboxgl.getRTLTextPluginStatus() === 'unavailable') {
            mapboxgl.setRTLTextPlugin(
                'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
                null,
                true // Lazy load the plugin only when text is in hebrew
            )
        }

        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [34.801570, 32.022130],
            zoom: 14
        });

        map.on("wheel", event => {
            if (event.originalEvent.ctrlKey) {
                return;
            }

            if (event.originalEvent.metaKey) {
                return;
            }

            if (event.originalEvent.altKey) {
                return;
            }

            event.preventDefault();
        });

        map.addControl(new mapboxgl.FullscreenControl());

        const language = new MapboxLanguage();
        map.addControl(language);

        // Create a default Marker and add it to the map.
        new mapboxgl.Marker()
            .setLngLat([34.801570, 32.022130])
            .addTo(map);
    }, [])

    return (
        <div id="map"></div>
    );
}
