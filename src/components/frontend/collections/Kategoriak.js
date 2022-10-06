
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../../../layouts/frontend/Nav'




const Kategoriak = () => {


  const[category, setCategory] = useState([]);
  //const[loading, setLoading] = useState([]);

  useEffect(() => {

    axios.get(`/api/getcategory`).then(res => {

      if(res.data.status === 200){
        //console.log(res.data.category)
        setCategory(res.data.category);
        //setLoading(false);
      }
    })
  },[])

 

    var showCategoryList = '';

    showCategoryList = category.map((item, key) =>{
      return (
      
          <div className='col-md-4' key={key}>
          <div className='card'>
          <div className='card-body'>  
          <Link to={`/kategoriak/${item.slug}`}> 
              {item.name}          
              </Link>        
          </div>
          </div>
          </div>
      )
    })
  


  return (
    <div className='container'>
              <Nav />          
              {showCategoryList}
            </div>    

   
  )
}

export default Kategoriak