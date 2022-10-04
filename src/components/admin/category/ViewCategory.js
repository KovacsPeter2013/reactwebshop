import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../layouts/admin/Navbar";
import Sidebar from "../../../layouts/admin/Sidebar";

const ViewCategory = () => {




    const[loading, setLoading] = useState(true)
    //categoryList-> Ide van gyűjtve az API válasz
    const[categoryList, setCategorylist] = useState([]) // Tömb inicializálása összetett adatokra

    useEffect(() => {
        axios.get(`/api/view-category`).then(res => {
            //console.log(res.data.category)
            if(res.status === 200){
                setCategorylist(res.data.category)
            }
            setLoading(false)
        })

    }, [])


    var viewcategory_HTMLTABLE = ""
    if(loading){
        // return <h4>Kategória betöltése...</h4>
    }else{
        viewcategory_HTMLTABLE = categoryList.map((item) => {
            return(

                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td>{item.status}</td>
                    <td>
                        <Link to={`/admin/edit-category/${item.id}`} className="btn btn-success btm-sm">Szerkesztés</Link>
                    </td>
                    <td>
                        <button type="button " className="btn btn-danger btm-sm">Törlés</button>
                    </td>
                </tr>
            )
        })
    }


  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="wrapper col-md-12">
        <div className="content-wrapper  px-4">
          <div className="card mt-4">
            <div className="card-header">
              <h4>Kategória lista</h4>
              <Link to="/admin/kategoria" className="btn btn-primary btn-sm float-end">Kategória hozzáadása</Link>
            </div>
          </div>
          <div className="card-body">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Név</th>
                            <th>Slug</th>
                            <th>Státusz</th>
                            <th>Szerkesztés</th>
                            <th>Törlés</th>
                        </tr>
                    </thead>
                    <tbody>
                        {viewcategory_HTMLTABLE}
                    </tbody>
                </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCategory;
