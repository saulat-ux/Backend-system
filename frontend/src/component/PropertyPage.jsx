
import { useState } from 'react';
import styles from './propertyPage.module.css'
import axios from 'axios';
const PropertyPage = () => {
  const [name ,setName] = useState('')
  const [price , setPrice] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(name , price)
    try {
      // const data = {name , price}
        await axios.post('http://localhost:3000/api/v1/properties' , {name ,price})
    } catch (error) {
      console.log(`error has occured ${error}`)
    }
    
  }


 



  return (
    <form className={styles['form-style']} onSubmit={handleSubmit}>
      <label>
        <span>name</span>
        <input type="text" onChange={(e) => setName(e.target.value) } />
      </label>
     
      <label>
        <span>price</span>
        <input type="text" onChange={(e) => setPrice(e.target.value)} />
      </label>
      <button> send</button>
    </form>
  )
}

export default PropertyPage
