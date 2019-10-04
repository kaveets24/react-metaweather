import { useState } from "react";

// MetaWeather api
import { MetaWeather } from "../api/metaweather";

const useForm = () => {
    const [inputs, setInputs] = useState({location: ""});
    const [weather, setWeather] = useState([]);
    const [location, setLocation ] = useState(null);



    const handleSubmit = async (e) => {
        if (e) {
            e.preventDefault();
        }
        setWeather({loading: true});
        const res = await MetaWeather.getLocation(inputs.location);
        setWeather(res);
        setLocation(inputs.location);

    }

    const handleInputChange = (e) => {
        e.persist();
        setInputs(inputs => ({...inputs, [e.target.name]: e.target.value})
        )
    }
    return { handleSubmit,
    handleInputChange,
    weather,
    location,
    inputs };
};

export default useForm;