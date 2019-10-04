import axios from "axios";

class MetaWeather {
  constructor() {}

  getLocation = async query => {
    let res;

    try {
      res = await axios.get(`/api/location/search/${query}`);
    } catch (e) {
      return null;
    }
    let consolidatedWeather;

    if (res.data.length) {
      let woeid = res.data[0].woeid;
      let locationRes = await axios.get(`/api/location/${woeid}`);
      consolidatedWeather = locationRes.data.consolidated_weather;
      return consolidatedWeather;

    }


  };
}
const MW = new MetaWeather();
export { MW as MetaWeather };
