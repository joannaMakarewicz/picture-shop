import axios  from "axios";

const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env


const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${REACT_APP_API_KEY}`,
      },
  });

export default axiosInstance;

