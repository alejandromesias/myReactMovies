import React from "react";
import axios from "axios";

const InputElement = () => {

    const fetchData = async function() {
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        //console.log(resp.data);
    }

    fetchData();

    return <input placeholder = "placeholder text new"/>
};

export default InputElement;