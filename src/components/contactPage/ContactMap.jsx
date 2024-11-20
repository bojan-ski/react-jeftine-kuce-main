import React from 'react'
// leaflet
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const ContactMap = () => {
  return (
    <section className="contact-map d-none d-md-block">
      <MapContainer center={[44.62036774911955, 21.18423890709805]} zoom={15} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <Marker position={[44.62036774911955, 21.18423890709805]}>
          <Popup>
            Tabačka Čaršija
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default ContactMap