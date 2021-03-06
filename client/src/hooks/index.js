import { useState } from "react";



const useForm = callback => {
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");

  const initializeLocation = () => {


    const favoriteLocation = window.localStorage.getItem("favorite");
  
    if (favoriteLocation){
      return favoriteLocation
    } else {
      return "";
    }
  }
  const [inputs, setInputs] = useState({ location: initializeLocation()  });




  
  const getWeatherFromFavorite = () => {
    console.log("getweatherfromfavorite called");
    console.log(inputs.location);
    if (inputs.location) {
      // handleSubmit();

    }

  }
  
  const handleSubmit = async e => {
    if (e) {
      e.preventDefault();
    }
    setWeather({ loading: true });
    const res = await callback(inputs.location);
    setWeather(res);
    setLocation(inputs.location);
  };

  const handleInputChange = e => {
    e.persist();
    setInputs(inputs => ({ ...inputs, [e.target.name]: e.target.value }));
  };

 


  return { handleSubmit, getWeatherFromFavorite, handleInputChange, weather, location, inputs };
};

export default useForm;
