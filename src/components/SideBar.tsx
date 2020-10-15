import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import MapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/sideBar.css';

export default function SideBar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-side-bar">
      <img src={MapMarkerImg} alt="Happy" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}