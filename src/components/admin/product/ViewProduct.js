
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../layouts/admin/Navbar'
import Sidebar from '../../../layouts/admin/Sidebar'




const ViewProduct = () => {

    const [loading, setLoading] = useState(true)
    const [viewProduct, setProduct] = useState([])

    useEffect(()=> {          

        document.title = "Terméklista"
        
        axios.get(`/api/view-product`).then(res => {
              
            if(res.data.status === 200){
              //console.log(res.data.products)

                setProduct(res.data.products)
                setLoading(false)

            }
            // else if(res.data.status === 304){
            //     swal(res.data.message)
            //     setTimeout(function(){redirect()}, 4000);
                
            // }

        })
    }, [])

    var display_Productdata =  "";

    if(loading){

         <h4>Betöltés</h4>
        
    }else{

        display_Productdata = viewProduct.map( (item) => {

            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.category.name}</td>
                    <td>{item.name}</td>
                    <td>{item.selling_price}</td>
                    <td><img src={`http://localhost:8000/${item.image}`} width="50px" alt={item.image}/></td>
                
                    <td><Link to={`/admin/edit-product/${item.id}`} className='btn btn-success btn-sm '>Szerkesztés</Link></td>
                    <td><button type="button" className='btn btn-danger btn-sm '>Törlés</button></td>
                </tr>
            )
        })
    }

    
  return (
    <>
    <Navbar />
    <Sidebar />
    <div className='wrapper' >
      <div className="content-wrapper  px-4">
    <div className='card px-4 mt-3'>
        <div className='card-header'>
            <h4>
             Termék lista
                <Link to="/admin/add-product" className='btn btn-primary btn-sm float-end'>Termék hozzáadás</Link>
                </h4>
        </div>
        <div className='card-body'>
            <div className='table-responsive'>
                <table className='table  table-striped'>  
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Kategóra neve</th>
                            <th>Termék neve</th>
                            <th>Kedvezményes ár</th>
                            <th>Termékfotó</th>
                            <th>Szerkesztés</th>
                            <th>Törlés</th>
                        </tr>
                    </thead>

                    <tbody>
                        {display_Productdata}
                    </tbody>
                </table>
            </div>

        </div>
    
     </div>
     </div>
     </div>
     </>
  )
}

export default ViewProduct