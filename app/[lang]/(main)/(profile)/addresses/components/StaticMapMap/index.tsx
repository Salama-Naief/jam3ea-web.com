"use client";
import Button from "@/components/Button";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  CircleF,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
// import styles from "../styles/Home.module.css";

interface Props {
  currentLng?: number;
  currentLat?: number;
}
const StaticMap = ({ currentLat, currentLng }: Props) => {
  const [lat, setLat] = useState(29.378586);
  const [lng, setLng] = useState(47.990341);
  console.log("current locatoin", lat, lng);
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);

  useEffect(() => {
    if (currentLat && currentLng) {
      setLat(Number(currentLat));
      setLng(Number(currentLng));
    }
  }, [currentLat, currentLng]);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: true,
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
    <div className=" relative items-center justify-center rounded-lg overflow-hidden">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "300px" }}
        onLoad={(map) => console.log("map loaded")}
      >
        <MarkerF
          position={mapCenter}
          onLoad={() => console.log("Marker Loaded")}
        />
      </GoogleMap>
    </div>
  );
};

export default StaticMap;
