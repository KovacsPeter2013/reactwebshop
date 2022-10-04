
import React from 'react'
import Navbar from '../../../layouts/admin/Navbar'
import Sidebar from '../../../layouts/admin/Sidebar'

const Addproduct = () => {







  return (
    <>
    <Navbar />
    <Sidebar />
   

   
    <div className='wrapper col-md-12'>
    <div className="content-wrapper px-4 ">
    <br/>
        <h2>Termék hozzáadás</h2>
        <br/>
  
    <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Termék adatok</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO Tag-ek</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Egyéb adatok</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade card-body border show active" id="home" role="tabpanel" aria-labelledby="home-tab">

    <div className='form-group mb-3'>
        <label>Válassz kategoriát</label>
        <select name="category_id" className='form-control'>
            <option>Válassz kategoriát</option>
        </select>
    </div>



    <div className='form-group mb-3'>
        <label>Slug</label>
            <input type="text" name="slug" className='form-control'/>
    </div>




    <div className='form-group mb-3'>
        <label>Termék neve</label>
            <input type="text" name="name" className='form-control'/>
    </div>


    <div className='form-group mb-3'>
        <label>Termék leírása</label>
            <textarea type="text" name="description" className='form-control'>
                </textarea>
    </div>


    </div>
  <div class="tab-pane fade card-body border" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
    
    B
    
    </div>
  <div class="tab-pane fade card-body border" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">
    
    C
    
    
    </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Addproduct