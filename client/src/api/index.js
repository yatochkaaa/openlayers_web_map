import axios from "axios";

const $host = axios.create({
  baseURL: "http://localhost:8000/",
});

export const createMarker = async (name, description, latitude, longitude) => {
  const { data } = await $host.post("places", {
    name,
    description,
    latitude,
    longitude,
  });

  return data;
};

export const getAllMarkers = async () => {
  const { data } = await $host.get("places");

  return data;
};
