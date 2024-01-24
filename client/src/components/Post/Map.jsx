import React, { memo, useEffect, useState } from "react";
import icons from "asset/icon";
import GoogleMapReact from "google-map-react";
import { geocodeByAddress, getLatLng } from "react-google-places-autocomplete";

const { FaMapMarkedAlt } = icons;
const Position = ({ icon }) => <div>{icon}</div>;

const Map = ({ address }) => {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    const getCoords = async () => {
      const result = await geocodeByAddress(address);
      const latlng = await getLatLng(result[0]);
      setCoords(latlng);
    };
    if (address) {
      getCoords()
    } else {
      navigator.geolocation.getCurrentPosition(
        ({ coords: { latitude, longitude } }) => {
          setCoords({ lat: latitude, lng: longitude });
        }
      );
    }
  }, [address]);

  return (
    <div className="h-[300px] w-full relative">
      <div className="absolute max-w-[180px] top-2 left-2 z-50 bg-white shadow-xl p-4 text-xs">
        {address}
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={15}>
        <Position
          lat={coords?.lat}
          lng={coords?.lng}
          icon={<FaMapMarkedAlt color="green" size={15} />}
        />
      </GoogleMapReact>
    </div>
  );
};

export default memo(Map);
