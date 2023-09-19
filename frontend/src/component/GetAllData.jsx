import React, { useEffect, useState } from 'react'
import styles from './getAllData.module.css'
import axios from 'axios';



const GetAllData = () => {
    const [name , setName] = useState('')
    const [price ,setPrice] = useState('')
    const [data ,setData] = useState([])

    const getalldata = async () => {
        try {
          const response =  await axios.get('http://localhost:3000/api/v1/properties')
          console.log(response.data.properties)
          return response.data.properties
          
          
        } catch (error) {
            console.log(`an error has occured ${error}`)
        }
    }
    useEffect(() => {

        getalldata().then((data) => {
            console.log('the data in the useeffce', data)
            setData(data)
        }).catch((error) => {
            console.log(`error storing the data in state ${error}`)
        })
    },[])
   
  return (
      
      <div className={styles['the-data']}>
        {  data && data.map((element, index) => (
            <div key={index} className={styles['the-style']}>
           
            <h2> {element.name}</h2>
            <p>{element.price}</p>
            <div className={styles['btn']}>
            <button>update me</button>
            <button>delete me</button>

            </div>
            </div>
            )) }

    </div>
  )
}

export default GetAllData
