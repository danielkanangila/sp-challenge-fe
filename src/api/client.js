import axios from "axios";

import settings from "../config/settings";

/** Settings API URL to axios as base url  */
export default axios.create({
  baseURL: settings.apiURL,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});
