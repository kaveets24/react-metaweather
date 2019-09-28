import axios from "axios";
import { rootUrl } from "../../utils";

class MetaWeather {
  constructor() {
    this.state = {
      woeid: null,
      consolidatedWeather: null
    };
  }

  getLocation = async query => {
    let res = await axios.get(`${rootUrl}/api/location/search/${query}`)

    if (res.data) {
      this.state.woeid = res.data[0].woeid;
      let locationRes = await axios.get(`${rootUrl}/api/location/${this.state.woeid}`);
      this.state.consolidatedWeather = locationRes.data.consolidated_weather;
      return this.state.consolidatedWeather;
    }
}
}
const MW = new MetaWeather();
export {MW as MetaWeather};

