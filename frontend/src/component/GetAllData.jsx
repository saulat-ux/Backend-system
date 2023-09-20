import React, { useEffect, useRef, useState } from 'react'
import styles from './getAllData.module.css'
import { Link } from 'react-router-dom'

import axios from 'axios';



const GetAllData = () => {
    const [hidden, setHidden] = useState(false)
  
    const [data ,setData] = useState([])
    const myRef = useRef()
    const singleProperty = myRef.current
    console.log(singleProperty)
    

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
        
        HandleDelete()
    },[])

    const HandleDelete = async (event) => {
        try {
            const attrID = event && event.target ? event.target.getAttribute('data-id') : null
                console.log(attrID)

            await axios.delete(`http://localhost:3000/api/v1/properties/${attrID}`)
            setData((prevData) => prevData.filter((element) => element._id !== attrID));
            setHidden(true)
            if(singleProperty){
                singleProperty.style.display = hidden ? 'block' : 'none'
            }

          
        } catch (error) {
            console.log('could not delete property'+ error)
        }
      
       
    }
    // const HandleUpdate = async (event) => {
    //     try {
    //         const attrID = event && event.target ? event.target.getAttribute('data-id') : null
    //             await axios.patch(`http://localhost:3000/api/v1/properties/${attrID}`)
            
    //     } catch (error) {
    //         console.log('could not update '+ error)
    //     }
    // }
    






   
  return (
      
      <div className={styles['the-data']}>
        {  data && data.map((element, index) => (
            <div key={index} ref={myRef} className={styles['the-style']}>
           
            <h2> {element.name}</h2>
            <p>{element.price}</p>
            <div className={styles['btn']}>
            <button className='update-btn' data-id={element._id}   ><Link to={`/updatedata?dataID=${element._id}`}> 
                update me</Link></button>
            
            <button className='delete-btn'  data-id={element._id} onClick={HandleDelete} >delete me</button>

            </div>
            </div>
            )) }

    </div>
  )
}

export default GetAllData
