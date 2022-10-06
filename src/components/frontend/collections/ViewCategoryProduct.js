
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Nav from '../../../layouts/frontend/Nav'




const ViewCategoryProduct = (props) => {

    const params = useParams();
    const categorySlug = params.slug;


     const[product, setProduct] = useState([]);   
     const[category, setCategory] = useState([]);   



useEffect(() => {
    axios.get(`/api/fetchcategory/${categorySlug}`).then(res =>{

      

            if(res.data.status === 200){

                setProduct(res.data.product_data.product)
                setCategory(res.data.product_data.category)
                
            }else if(res.data.status === 400){
                console.log(res)
                swal(res.data.message)

            }           
            
            else if(res.data.status === 404){
                swal('Nem várt hiba lépett fel!')
            }
     

    })
}, [])

    var showProductListBasedOnCategory = '';
    showProductListBasedOnCategory = product.map((item, key) => {
        return(
            <div className='col-md-4' key={key}>
            <div className='card'>
            <div className='card-body'>  
                <Link to="">
                <img  src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.name}/>
                </Link>
                <h5>{item.name}</h5>
            </div>
            </div>
            </div>
        )
    })

  return (
   
    <div className='container'>
    <Nav />          
    {showProductListBasedOnCategory}
  </div>   
    
  )
}

export default ViewCategoryProduct