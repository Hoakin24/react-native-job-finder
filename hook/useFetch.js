import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';

// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '8755f7fbfamshca57c07ca0031d2p1c1108jsnd30857a0ac0c',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setisLoading(true);

        try {
            const response = await axios.request(options); 

            setData(response.data.data);
            // console.log("DONE")
            setisLoading(false);
        } catch (error) {
            setError(error);
            console.log(error)
            alert("There is an error");
        } finally {
            setisLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setisLoading(true);
        fetchData();
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;