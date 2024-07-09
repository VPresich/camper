import axios from "axios";

export const BaseURL = "https://65d7f3bb27d9a3bc1d7becfe.mockapi.io/";
export const axiosInst = axios.create({
  baseURL: BaseURL,
});

//For GoogleMap
export const axiosGoogleGeoInst = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/",
});
