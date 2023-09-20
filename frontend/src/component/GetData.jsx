import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';



const GetData = () => {
    const [data ,setData] = useState({})
    const {id} = useParams()
    console.log('the id is this' +id)

    const HandleGet = async () => {
        try {
        const response =    await axios.get(`http://localhost:3000/api/v1/properties/${id}`)
            return response.data.property

        } catch (error) {
            console.log('error fetching the data', error)
        }
        
    }
    useEffect(() => {
        HandleGet().then((data) => {
            setData(data)
        }).catch(err => console.log(err))
    },[])

  return (
    <div className='single-data'>
        <h2>name: {data.name}</h2>
        <p> id: {data._id}</p>
        <p>price :{data.price}</p>
      
    </div>
  )
}

export default GetData
