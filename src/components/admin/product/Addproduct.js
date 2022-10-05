
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import swal from 'sweetalert'
import Navbar from '../../../layouts/admin/Navbar'
import Sidebar from '../../../layouts/admin/Sidebar'

const Addproduct = () => {


 const [categoryList, setCategoryList]  = useState([]) 
 const [productInput, setProduct]  = useState({
     
    category_id : '',
    slug : '',
    name : '',
    description : '',


    meta_title : '',
    meta_keyword : '',
    meta_descrip : '',


    selling_price : '',
    original_price : '',
    qty : '',
    brand : '',
    featured : '',
    popular : '',
    status : '',
 }) 


const [picture, setPicture]  = useState([]) 



const handleInput = (e) => {
    e.persist()
    setProduct({...productInput, [e.target.name]:e.target.value})
}


const handleImage = (e) => {
    setPicture({image: e.target.files[0]})
    
}


useEffect(() => {
    
    axios.get(`/api/all-category`).then(res => {

        if(res.data.status === 200){
           
            setCategoryList( res.data.category)
        }
    })
}, [])

    const submitProduct = (e) =>{
        e.preventDefault()

        const formData = new FormData();
        formData.append('image', picture.image)
        formData.append('category_id', productInput.category_id)
        formData.append('slug', productInput.slug)
        formData.append('name', productInput.name)
        formData.append('description', productInput.description)
        formData.append('meta_title', productInput.meta_title)
        formData.append('meta_keyword', productInput.meta_keyword)
        formData.append('meta_descrip', productInput.meta_descrip)
        formData.append('selling_price', productInput.selling_price)
        formData.append('original_price', productInput.original_price)
        formData.append('qty', productInput.qty)
        formData.append('brand', productInput.brand)
        formData.append('featured', productInput.featured)
        formData.append('popular', productInput.popular)
        formData.append('status', productInput.status)


        
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`/api/store-product`, formData).then(res => {

            if(res.data.status === 200){
                swal(res.data.message)
                
            }else if(res.data.status === 422){
                swal('Hiba! Termék hozzáadása sikertelen! Lehetséges hiba okok: Túl nagy képméret, nem megfelelő fájlformátum')
            }

        })
        })
        
    }

  return (
    <>
    <Navbar />
    <Sidebar />   
    <div className='wrapper col-md-12'>
    <div className="content-wrapper px-4 ">
    <br/>
        <h2>Termék hozzáadás</h2>
        <br/>
  
    <form onSubmit={submitProduct} encType='multipart/form-data'>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Termék adatok</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="seotags-tab" data-bs-toggle="tab" data-bs-target="#seotags" type="button" role="tab" aria-controls="seotags" aria-selected="false">SEO Tag-ek</button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="otherdetails-tab" data-bs-toggle="tab" data-bs-target="#otherdetails" type="button" role="tab" aria-controls="otherdetails" aria-selected="false">Egyéb adatok</button>
        </li>
        </ul>
        <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade card-body border show active" id="home" role="tabpanel" aria-labelledby="home-tab">

            <div className='form-group mb-3'>
                <label>Válassz kategoriát</label>
                <select name="category_id" onChange={handleInput} value={productInput.category_id} className='form-control'>
                    <option>Válassz kategoriát</option>
                        {
                            categoryList.map((item) =>{

                                return (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                )
                            })
                        }

                </select>
            </div>



            <div className='form-group mb-3'>
                <label>Slug</label>
                    <input type="text" onChange={handleInput} value={productInput.slug} name="slug" className='form-control'/>
            </div>


            <div className='form-group mb-3'>
                <label>Termék neve</label>
                    <input type="text" onChange={handleInput} value={productInput.name}  name="name" className='form-control'/>
            </div>


            <div className='form-group mb-3'>
                <label>Termék leírása</label>
                    <textarea type="text" onChange={handleInput} value={productInput.description}   name="description" className='form-control'></textarea>
            </div>


            </div>
        <div className="tab-pane fade card-body border" id="seotags" role="tabpanel" aria-labelledby="seotags-tab">
            
        <div className='form-group mb-3'>
                <label>Meta cím</label>
                    <input type="text" onChange={handleInput} value={productInput.meta_title}  name="meta_title" className='form-control'/>
            </div>


        <div className='form-group mb-3'>
                <label>Meta kulcsszavak</label>
                    <input type="text" onChange={handleInput} value={productInput.meta_keyword}  name="meta_keyword" className='form-control'/>
            </div>


        <div className='form-group mb-3'>
                <label>Meta leírás</label>
                    <textarea type="text" onChange={handleInput} value={productInput.meta_descrip} name="meta_descrip" className='form-control'></textarea>
            </div>
            
            </div>
        <div className="tab-pane fade card-body border" id="otherdetails" role="tabpanel" aria-labelledby="otherdetails-tab">
            
        <div className='form-group mb-3'>
                <label>Eredeti ár</label>
                    <input type="text"  onChange={handleInput} value={productInput.original_price} name="original_price" className='form-control'/>
            </div>

        <div className='form-group mb-3'>
                <label>Kedvezményes ár</label>
                    <input type="text"  onChange={handleInput} value={productInput.selling_price} name="selling_price" className='form-control'/>
            </div>

        <div className='form-group mb-3'>
                <label>Darabszám</label>
                    <input type="text" onChange={handleInput} value={productInput.qty} name="qty" className='form-control'/>
            </div>

        <div className='form-group mb-3'>
                <label>Márka</label>
                    <input type="text" onChange={handleInput} value={productInput.brand} name="brand" className='form-control'/>
            </div>



        <div className='form-group mb-3'>
                <label>Fotó</label>
                    <input type="file" onChange={handleImage} name="image" className='form-control'/>
            </div>



        <div class="form-check">
        <input class="form-check-input" type="checkbox" onChange={handleInput} value={productInput.featured} name="featured"/>
        <label class="form-check-label" for="flexCheckDefault">
        Kiemelt
        </label>
        </div>


        <div class="form-check">
        <input class="form-check-input" type="checkbox" onChange={handleInput} value={productInput.popular} name="popular"/>
        <label class="form-check-label" for="flexCheckDefault">
        Népszerű
        </label>
        </div>
        <div class="form-check">
        <input class="form-check-input" type="checkbox" onChange={handleInput} value={productInput.status} name="status"/>
        <label class="form-check-label" for="flexCheckChecked">
        Státusz
        </label>
        </div>
            
            </div>
        </div>
        <br/>
        <button type="submit" className='btn  btn-primary'>Mentés</button>
    </form>
    </div>
    </div>
    </>
  )
}

export default Addproduct