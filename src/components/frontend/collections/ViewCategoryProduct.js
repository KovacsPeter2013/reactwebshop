
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

    const ProductCount = product.length;

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

    if(ProductCount){
    showProductListBasedOnCategory = product.map((item, key) => {
        return(
            <div className='col-md-4 float-left' key={key}>              
                <Link to={`/kategoriak/${item.category.slug}/${item.slug}`}>
                <img  src={`http://localhost:8000/${item.image}`} className="w-100" alt={item.name}/>
                </Link>
                <Link  to={`/kategoriak/${item.category.slug}/${item.slug}`}>
                <h5>{item.name}</h5>
                </Link>                
            </div>
        )
    })
  }else{

    <div className='col-md-4 float-left'>              

    <h5>Jelenleg nincs termék ebben a kategóriában</h5>                
    </div>
    
  }
  return (
   
    <div className='container'>
    <Nav />          
    {showProductListBasedOnCategory}
  </div>   
    
  )
}

export default ViewCategoryProduct