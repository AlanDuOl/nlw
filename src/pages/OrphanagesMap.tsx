import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import MapMarker from '../images/map-marker.svg';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanage.css';

const styleType = {
    street: 'streets-v11',
    satelite: 'satellite-v9',
    light: 'light-v10'
}

function OrphanagesMap() {
    const [style, setStyle] = useState(styleType.light);

    function setStreet() {
        setStyle(styleType.street);
    }
    function setLight() {
        setStyle(styleType.light);
    }
    function setSatelite() {
        setStyle(styleType.satelite);
    }
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={MapMarker} alt="Happy"></img>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Porto</strong>
                    <span>Norte</span>
                </footer>
            </aside>
            <Map center={[41.1579438, -8.6291053]} zoom={15} style={{ width: '100%', height: '100%' }}>
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/${style
                }/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <div className="map-type">
                <button className={style === styleType.satelite ? 'selected' : undefined} onClick={setSatelite}>Satelite</button>
                <button className={style === styleType.street ? 'selected' : undefined} onClick={setStreet}>Street</button>
                <button className={style === styleType.light ? 'selected' : undefined} onClick={setLight}>Light</button>
            </div>
            <Link to="" className="create-orphanage">
                <FiPlus size="32" color="#FFF" />
            </Link>
        </div>
    );
}

export default OrphanagesMap;