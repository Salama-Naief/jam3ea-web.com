"use client";
import Button from "@/components/Button";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [lat, setLat] = useState(29.378586);
  const [lng, setLng] = useState(47.990341);

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className=" relative items-center justify-center rounded-lg overflow-hidden p-4">
      <div className=" absolute top-6Vi start-0 z-10 px-6  h-fit w-full">
        {/* render Places Auto Complete and pass custom handler which updates the state */}
        <PlacesAutocomplete
          onAddressSelect={(address) => {
            getGeocode({ address: address }).then((results) => {
              const { lat, lng } = getLatLng(results[0]);

              setLat(lat);
              setLng(lng);
            });
          }}
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "800px", height: "800px" }}
        onLoad={(map) => console.log("Map Loaded")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />

        {/* {[1000, 2500].map((radius, idx) => {
          return (
            <CircleF
              key={idx}
              center={mapCenter}
              radius={radius}
              onLoad={() => console.log("Circle Load...")}
              options={{
                fillColor: radius > 1000 ? "red" : "green",
                strokeColor: radius > 1000 ? "red" : "green",
                strokeOpacity: 0.8,
              }}
            />
          );
        })} */}
      </GoogleMap>
    </div>
  );
};

const PlacesAutocomplete = ({
  onAddressSelect,
}: {
  onAddressSelect?: (address: string) => void;
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: { componentRestrictions: { country: "Kuwait" } },
    debounce: 300,
    cache: 86400,
  });
  console.log("autocomplete data", data);
  const renderSuggestions = () => {
    return data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
        description,
      } = suggestion;

      return (
        <li
          key={place_id}
          onClick={() => {
            setValue(description, false);
            clearSuggestions();
            onAddressSelect && onAddressSelect(description);
          }}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
  };

  return (
    <div className="w-full h-full   ">
      <div className="flex h-fit bg-gray-100  items-stretch rounded-lg">
        <input
          value={value}
          className="peer
        w-full
        p-2.5  
        relative
        
        border
        rounded-md
        outline-none
        transition
        disabled:opacity-70
        disabled:cursor-not-allowed
        text-start
        ring-0 focus:ring-0"
          disabled={!ready}
          onChange={(e) => setValue(e.target.value)}
          placeholder="123 Stariway To Heaven"
        />
        <button className="flex-1 px-4 py-3 h-full bg-primary text-white rounded-md">
          <BsSearch size={25} />
        </button>
      </div>

      {status === "OK" && <ul className="">{renderSuggestions()}</ul>}
    </div>
  );
};

export default Home;
