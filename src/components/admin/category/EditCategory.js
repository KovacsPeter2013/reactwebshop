
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Navbar from '../../../layouts/admin/Navbar'
import Sidebar from '../../../layouts/admin/Sidebar'

const EditCategory = (props) => {

  const redirect = () =>{
    window.location.href = "/admin/kategoriak";
  }





    const [categoryInput, setCategory] = useState([])
    const [error, setError] = useState([])


     const params = useParams()
    
    useEffect(()=> {
        
        const productid = params.id

        
        axios.get(`/api/edit-category/${productid}`).then(res => {
                //console.log(res)
            if(res.data.status === 200){
                setCategory(res.data.category) // category: a CategoryController edit funkcióban lévő json válasz kulcsa. értéke pedig az adat

            }else if(res.data.status === 304){ // Ha kategória nem található az API 304-es hibát ad vissza. Felugró üzenet tájékoztatja a user-t
                swal(res.data.message)
                setTimeout(function(){redirect()}, 4000);
                
            }

        })
    }, [params.id])



    const handleInput = (e) => {
        e.persist()
        setCategory({...categoryInput, [e.target.name]: e.target.value})
    }



    const updateCategory = (e) => {
      e.preventDefault(); 
      const editId = params.id;
      const data = categoryInput;
      axios.put(`/api/update-category/${editId}`, data).then(res=>{

        if(res.data.status === 200){
          swal(res.data.message)
          setError([]) // Ha volt de megszűnt a hiba akkor a setError unset-elése üres tömbbel
          
        }else if(res.data.status === 422){

          setError(res.data.errors)
          swal(res.data.message)

        }else if(res.data.status === 404){
          swal(res.data.message)
           setTimeout(function(){redirect()}, 4000);
        }

      })
    }



  return (
    
    <>
    <Navbar />
    <Sidebar />
      <div className='wrapper col-md-12' >
      <div className="content-wrapper  px-4">
        <br/>
        <h2>Kategória szerkesztése</h2>
        <Link to="/admin/kategoriak" className="btn btn-primary btn-sm float-end">Vissza</Link>
        <br/>
        <form onSubmit={updateCategory}>
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Alapadatok</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="#seo-tags" aria-selected="false">SEO tag-ek</button>
  </li>
    
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

    <div className='form-group mb-3'>
        <label>Slug</label>
        <input type="text" onChange={handleInput}  value={categoryInput.slug} name="slug" className='form-control' required />
        <small className='text-danger'>{error.slug}</small>
    </div>

    <div className='form-group mb-3'>
        <label>Név</label>
        <input type="text" onChange={handleInput}  value={categoryInput.name} name="name" className='form-control' required/>
        <small className='text-danger'>{error.name}</small>
    </div>
    <div className='form-group mb-3'>
        <label>Leírás</label>
        <textarea onChange={handleInput}  value={categoryInput.description} name="description" className='form-control' required>  </textarea>
    </div>

    <div className='form-group mb-3'>
        <label>Státusz</label>
        <input type="checkbox" onChange={handleInput}  value={categoryInput.status}  name="status" /> Status 0 = mutat / 1 = elrejt
    </div>



  </div>
  <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">


  <div className='form-group mb-3'>
        <label>Meta cím</label>
        <input type="text"  onChange={handleInput}  value={categoryInput.meta_title} name="meta_title" className='form-control' required/>
           <small className='text-danger'>{error.meta_title}</small>
    </div>


  <div className='form-group mb-3'>
        <label>Meta kulcsszavak</label>
        <input type="text" onChange={handleInput}  value={categoryInput.meta_keywords} name="meta_keywords" className='form-control'required />
    </div>

    
  <div className='form-group mb-3'>
        <label>Meta leírás</label>
        <input type="text" onChange={handleInput}  value={categoryInput.meta_descrip} name="meta_descrip" className='form-control'required />
    </div>

    
  </div>
  
</div>
    <button type='submit' className='btn btn-primary px-4 mt-2 float-end'>Mentés</button>
    </form>
    </div>

    </div>
    </>
   
  )
}

export default EditCategory