
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Navbar from '../../../layouts/admin/Navbar'
import Sidebar from '../../../layouts/admin/Sidebar'
import '../../../assets/admin/css/styles.css'
import swal from 'sweetalert'
const Category = () => {


    const [categoryInput, setCategory] = useState({
        slug : '', 
        name : '', 
        description : '',
        status : '' ,
        meta_title : '' ,
        meta_keywords : '' ,
        meta_descrip : '' ,
        error_list: []
    })


    const handleInput = (e) => {
        e.persist()
        setCategory({...categoryInput, [e.target.name]: e.target.value})
    }
    
    
    const submitCategory = (e) => {
        e.preventDefault()

        const data = {
            slug          : categoryInput.slug,
            name          : categoryInput.name,
            description   : categoryInput.description,
            status        : categoryInput.status,
            meta_title    : categoryInput.meta_title,
            meta_keywords : categoryInput.meta_keywords,
            meta_descrip  : categoryInput.meta_descrip,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/add-category`, data).then(res =>{

            if(res.data.status === 200){

              swal(res.data.message)
              document.getElementById('CATEGORY_FORM').reset()

            }else if(res.data.status === 400){

              setCategory({...categoryInput, error_list:res.data.errors})

            }
        })
        })
    }



  return (

    <>
    <Navbar />
    <Sidebar />
      <div className='wrapper col-md-12' >
      <div className="content-wrapper  px-4">
        <br/>
        <h2>Kategória hozzáadás</h2>
        <br/>
        <form onSubmit={submitCategory} id="CATEGORY_FORM">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
    <li className="nav-item" role="presentation">
    <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="seo-tags-tab" data-bs-toggle="tab" data-bs-target="#seo-tags" type="button" role="tab" aria-controls="#seo-tags" aria-selected="false">SEO tag-ek</button>
  </li>
  {/* <li className="nav-item" role="presentation">
    <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</button>
  </li> */}
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane card-body border fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

    <div className='form-group mb-3'>
        <label>Slug</label>
        <input type="text" onChange={handleInput}  value={categoryInput.slug} name="slug" className='form-control' required />
    </div>

    <div className='form-group mb-3'>
        <label>Név</label>
        <input type="text" onChange={handleInput}  value={categoryInput.name} name="name" className='form-control' required/>
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

export default Category