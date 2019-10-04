import { useState } from "react";



const useForm = callback => {
    const [inputs, setInputs] = useState({location: ""});
    const [weather, setWeather] = useState([]);
    const [location, setLocation ] = useState(null);



    const handleSubmit = async (e) => {
        if (e) {
            e.preventDefault();
        }
        setWeather({loading: true});
        const res = await callback(inputs.location);
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