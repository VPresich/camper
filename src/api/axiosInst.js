import axios from "axios";

export const BaseURL = "https://65d7f3bb27d9a3bc1d7becfe.mockapi.io/";
export const axiosInst = axios.create({
  baseURL: BaseURL,
});

//For geoLocation
export const API_KEY = "c18cd44390b34384b29cb286f230721c";
export const axiosGeoInst = axios.create({
  baseURL: "https://api.opencagedata.com/geocode/v1/",
});
