
import React from 'react'
import Navbar from '../../layouts/admin/Navbar'
import Sidebar from '../../layouts/admin/Sidebar'

const Category = () => {
  return (

    <>
    <Navbar />
    <Sidebar />
      <div className='wrapper col-md-12  ' >
      <div className="content-wrapper  px-4">
        <br/>
        <h2>Kategória hozzáadás</h2>
        <br/>
        <form>
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
        <input type="text" name="slug" className='form-control' />
    </div>

    <div className='form-group mb-3'>
        <label>Név</label>
        <input type="text" name="name" className='form-control' />
    </div>
    <div className='form-group mb-3'>
        <label>Leírás</label>
        <textarea name="description" className='form-control' >  </textarea>
    </div>

    <div className='form-group mb-3'>
        <label>Státusz</label>
        <input type="checkbox" name="status" /> Status 0 = mutat / 1 = elrejt
    </div>



  </div>
  <div className="tab-pane card-body border fade" id="seo-tags" role="tabpanel" aria-labelledby="seo-tags-tab">


  <div className='form-group mb-3'>
        <label>Meta cím</label>
        <input type="text" name="meta_cim" className='form-control' />
    </div>


  <div className='form-group mb-3'>
        <label>Meta kulcsszavak</label>
        <input type="text" name="meta_keywords" className='form-control' />
    </div>

    
  <div className='form-group mb-3'>
        <label>Meta leírás</label>
        <input type="text" name="meta_descrip" className='form-control' />
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