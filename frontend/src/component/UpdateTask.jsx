import React, { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

const UpdateTask = () => {
  const {id} = useParams()
  const [data , setData] = useState([])
    const [name ,setName] = useState('')
    const [price ,setPrice] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()         
        try {
              await axios.patch(`http://localhost:3000/api/v1/properties/${id}` , {
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
