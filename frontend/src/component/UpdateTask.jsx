import React, { useState } from 'react'
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const UpdateTask = () => {
  const [seacrhParams] = useSearchParams()
  const [data , setData] = useState([])
  const dataID = seacrhParams.get('dataID')
  console.log('the id from url is '+ dataID)
    const [name ,setName] = useState('')
    const [price ,setPrice] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()         
        try {
              await axios.patch(`http://localhost:3000/api/v1/properties/${dataID}` , {
                  name:name,
                  price:price,
                })
              
        } catch (error) {
            console.log('could not update '+ error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <label><span>name</span>
        <input type="text" name='name'  onChange={(e)=> setName(e.target.value) }/>
        </label>
        <label >
          <span>price</span>
        
        <input type="text" name='price' onChange={(e)=> setPrice(e.target.value) } />
        </label>
                <button >submit</button>
    </form>
  )
}
export default UpdateTask
