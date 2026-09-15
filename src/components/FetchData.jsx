import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [apiDatas, setApiDatas] = useState([]);
    useEffect ( () => {
        const fetchDataWithApi = async () => {

        const apiData = await fetch("https://jsonplaceholder.typicode.com/todos");

        const jsonData = await apiData.json();

        console.log("Json data is Here--->>>>> ", jsonData);

        setApiDatas(jsonData)
        
    };
        fetchDataWithApi();

    },[])
  return (
    <>
    <div>{apiDatas.map( (data) => (
        <div key={data.id}>
            <h1>{data.title}</h1>
        </div>
    ))}</div>
    </>
  )
}

export default FetchData
