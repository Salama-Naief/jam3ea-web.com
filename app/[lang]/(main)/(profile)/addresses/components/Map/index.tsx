"use client";
import Button from "@/components/Button";
import useHttpClient from "@/lib/hooks/useHttpClient";
import { AuthContext } from "@/lib/providers/AuthProvider";
import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import type { NextPage } from "next";
import { use, useContext, useEffect, useMemo, useState } from "react";
import { BsSearch } from "react-icons/bs";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  IUpdateProfile,
  IUpdateProfileResponseResult,
  IUser,
} from "../../../types";
import { updateProfile } from "../../../services";
import { useRouter } from "next/navigation";
import Image from "next/image";
import centerMarkerIcons from "../../../../../../../public/assets/cneterMarker.svg";
import { IDataLoadedResponse } from "@/lib/types";
import { ICity } from "@/module/(main)/city/types";
import { getCities } from "@/module/(main)/city/services";
import { showErrorAlert } from "@/lib/utils/helpers";
import Loader from "@/components/Loader";
// import styles from "../styles/Home.module.css";

interface Props {
  user: IUser;
  setIsOpen?: (v: boolean) => void;
  staticMap?: boolean;
  setAllowedCity?: (v: boolean) => void;
}
const InteractiveMap = ({
  user,
  setIsOpen,
  staticMap = true,
  setAllowedCity,
}: Props) => {
  const [lat, setLat] = useState(Number(user.address.latitude) || 29.378586);
  const [lng, setLng] = useState(Number(user.address.longitude) || 47.990341);
  const [markerLat, setMarkerLat] = useState(
    Number(user.address.latitude) || 29.378586
  );
  const [markerLng, setMarkerLng] = useState(
    Number(user.address.longitude) || 47.990341
  );

  const [city, setCity] = useState<string | null>(null);
  const [street, setStreet] = useState<string | null>(null);

  const { results: cities, sendRequest: citiesRequest } =
    useHttpClient<IDataLoadedResponse<ICity>>();
  useEffect(() => {
    if (user) {
      setLat(Number(user.address.latitude));
      setLng(Number(user.address.longitude));
      setMarkerLat(Number(user.address.latitude));
      setMarkerLng(Number(user.address.longitude));
    }
  }, [user]);
  useEffect(() => {
    citiesRequest(getCities());
  }, []);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const { translate, language } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const {
    isLoading,
    errors: validationErrors,
    sendRequest,
  } = useHttpClient<IUpdateProfileResponseResult, IUpdateProfile>();

  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(() => ({ lat: lat, lng: lng }), [lat, lng]);
  const MarkerCenter = useMemo(
    () => ({ lat: markerLat, lng: markerLng }),
    [markerLat, markerLng]
  );
  const [showInfoWindow, setShowInfoWindow] = useState<boolean>(false);
  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
      fullscreenControl: false,
      mapTypeControl: false,
      streetViewControl: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as any,
    language: language,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // // get current location
  // const handleGetLocationClick = () => {
  //   console.log("handleGetLocationClick");
  //   if (navigator.geolocation) {
  //     console.log("handleGetLocationClick navigator");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         console.log("handleGetLocationClick navigator", position);
  //         const { latitude, longitude } = position.coords;
  //         // setSelectedPlace(null);
  //         // setSearchLngLat(null);
  //         // setCurrentLocation({ lat: latitude, lng: longitude });
  //         setLat(latitude);
  //         setLng(longitude);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };

  // // on map load
  // const onMapLoad = (map: google.maps.Map) => {
  //   const controlDiv = document.createElement("div");
  //   const controlUI = document.createElement("div");
  //   controlUI.innerHTML = "Get Location";
  //   controlUI.style.backgroundColor = "white";
  //   controlUI.style.color = "red";
  //   controlUI.style.border = "2px solid #ccc";
  //   controlUI.style.borderRadius = "3px";
  //   controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
  //   controlUI.style.cursor = "pointer";
  //   controlUI.style.marginBottom = "22px";
  //   controlUI.style.textAlign = "center";
  //   controlUI.style.width = "100%";
  //   controlUI.style.padding = "8px 0";
  //   // controlUI.addEventListener("click", handleGetLocationClick);
  //   controlDiv.appendChild(controlUI);

  //   // const centerControl = new window.google.maps.ControlPosition(
  //   //   window.google.maps.ControlPosition.TOP_CENTER,
  //   //   0,
  //   //   10
  //   // );

  //   map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
  //     controlDiv
  //   );
  // };

  let guessCoords;

  const regex = new RegExp("sear".toLowerCase());
  console.log(
    "test search",
    regex.test("this is the searcH text".toLowerCase())
  );

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    const lat = e.latLng?.lat();
    const lng = e.latLng?.lng();
    guessCoords = { lat, lng };
    // setLat(lat || 0);
    // setLng(lng || 0);
    setMarkerLat(lat || 0);
    setMarkerLng(lng || 0);
    // setS=-]howInfoWindow(false);
    if (lat && lng) {
      getGeocode({ location: { lat, lng } }).then((results) => {
        // console.log("guessCoords results", results);
        if (results[0]) {
          const addressComponents = results[0].address_components;
          let city = "";
          let street = "";

          // Extract city and street from address components
          for (let component of addressComponents) {
            if (component.types.includes("locality")) {
              city = component.long_name;
            }
            if (component.types.includes("route")) {
              street = component.long_name;
            }
          }

          // Do something with city and street information
          setCity(city);
          setStreet(street);
          console.log("City:", city);
          console.log("cities", cities);

          console.log("Street:", street);
        } else {
          console.error("Geocoder failed due to:", status);
        }
      });
    }
  };

  const handleUpdateLocation = async () => {
    if (!city) {
      return;
    }

    const isCityExistArray = cities?.data[0].children?.map((c) => {
      if (city.length >= c.name.toString().length) {
        const regex = new RegExp(c.name.toString().toLowerCase());
        return regex.test(city.toLowerCase());
      } else {
        const regex = new RegExp(city.toLowerCase());
        return regex.test(c.name.toString().toLowerCase());
      }
    });

    const isCityExist = isCityExistArray?.filter((c) => c === true).length;
    console.log("isCityExist?.filter(c=>c===true).length", isCityExist);
    if (!isCityExist || isCityExist < 1) {
      showErrorAlert(`we can not deliver to this city =${city}`);
      setAllowedCity && setAllowedCity(false);
      return;
    }
    if (user && user.address) {
      console.log("map handleUpdateLocation", MarkerCenter);
      setLoading(true);
      const values = {
        fullname: user.fullname || "",
        username: user.username || "",
        email: user.email || "",
        mobile: user.mobile || "",
        address: {
          city_id: user.address.city_id || "",
          widget: user.address.widget || "",
          gada: user.address.gada || "",
          street: user.address.street || "",
          house: user.address.house || "",
          floor: user.address.floor || "",
          apartment_number: user.address.apartment_number || "",
          latitude: markerLat,
          longitude: markerLng,
        },
      };
      const status = await sendRequest(updateProfile(values));
      if (status == true) {
        router.refresh();
        setIsOpen && setIsOpen(false);
      }
      setLoading(false);
    }
  };

  const markerIcons = { url: "/assets/marker.svg" };
  return (
    <div className=" relative items-center justify-center overflow-hidden bg-white rounded-lg">
      {!staticMap && (
        <div className=" absolute top-2 px-4 start-0 z-10   h-fit w-full">
          {/* render Places Auto Complete and pass custom handler which updates the state */}
          <PlacesAutocomplete
            onAddressSelect={(address) => {
              getGeocode({ address: address }).then((results) => {
                const { lat, lng } = getLatLng(results[0]);

                setLat(lat);
                setLng(lng);
                setMarkerLat(lat);
                setMarkerLng(lng);
              });
            }}
          />
        </div>
      )}
      {/* show center marker */}
      <div
        onClick={() => {
          setLat(markerLat);
          setLng(markerLng);
        }}
        className={`${
          staticMap ? "bottom-5 " : "bottom-20 "
        } flex justify-between absolute end-2 z-10 p-2 rounded-md shadow-md bg-white`}
      >
        <Image
          src={centerMarkerIcons}
          alt="centerMarker"
          className="cursor-pointer"
        />
      </div>
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{
          width: staticMap ? "100%" : "600px",
          height: staticMap ? "300px" : "400px",
        }}
        // onLoad={(map) => setMap(map)}
        onClick={staticMap ? () => {} : handleMapClick}
      >
        <MarkerF
          position={MarkerCenter}
          onLoad={() => console.log("Marker Loaded")}
          icon={markerIcons}
          onClick={() => setShowInfoWindow(true)}
        >
          {showInfoWindow && (
            <InfoWindowF onCloseClick={() => setShowInfoWindow(false)}>
              {!staticMap && (
                <div className="p-2 rounded-lg bg-white w-48 font-semibold">
                  Move the map to match the pin to your exact delivery location
                </div>
              )}
            </InfoWindowF>
          )}
        </MarkerF>

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
      {!staticMap && (
        <button
          onClick={() => handleUpdateLocation()}
          className="bg-primary mt-4 mx-auto px-6 text-white flex gap-2 items-center justify-center  py-3 rounded-2xl mb-3 font-medium"
        >
          {loading ? (
            <Loader size={"md"} color="white" />
          ) : (
            translate("Confirm")
          )}
        </button>
      )}
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
    requestOptions: { componentRestrictions: { country: "KW" } },
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
          className="bg-white p-2"
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

      {status === "OK" && (
        <ul className="bg-white p-2 max-h-96 overflow-y-auto">
          {renderSuggestions()}
        </ul>
      )}
    </div>
  );
};

export default InteractiveMap;
