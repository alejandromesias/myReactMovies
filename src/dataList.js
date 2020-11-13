import React, { useState, useEffect } from "react";
import axios from "axios";

const DataList = () => {
    const [data, setData] = useState();

    useEffect(() => {
        const fetchData = async function() {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            setData(response.data)
        }
    
        fetchData();

    }, []);

    return (
        <ul>
          {data === undefined ? 
            <p>nodata</p> 
          : data.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
            </li>
          ))}
        </ul>
      );
};

export default DataList;