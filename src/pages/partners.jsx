
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { partners, supporters } from '../utilis/data';
// import './Partners.css'; // Tailwind CSS imports

const Partners = () => {
  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Our Partners</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <div key={index} className="border border-white text-white p-6 rounded-lg shadow-md">
            <img className="h-32 mx-auto" src={partner.logo} alt={`${partner.name} logo`} />
            <h2 className="text-xl font-semibold mt-4">{partner.name}</h2>
            <p className="mt-2">{partner.description}</p>
            <a className="text-blue-500 mt-4 inline-block" href={partner.website} target="_blank" rel="noopener noreferrer">Visit Website</a>
            <p className="text-cyan-300 mt-2">{partner.location}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mt-12 mb-8 text-blue-600">Our Supporters</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {supporters.map((supporter, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{supporter.name}</h2>
            <p className="text-gray-600">{supporter.country}</p>
          </div>
        ))}
      </div>

      <h1 className="text-3xl font-bold mt-12 mb-8 -z-20 text-blue-600">Supporters Map</h1>
      <MapContainer className="h-96 w-full" center={[0, 0]} zoom={2} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {supporters.map((supporter, index) => (
          <Marker key={index} position={supporter.coordinates}>
            <Popup>
              <strong>{supporter.name}</strong><br />{supporter.country}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Partners;
