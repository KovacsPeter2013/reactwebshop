
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link, Text } from 'react-router-dom'
import swal from "sweetalert";
//import UserHome from "../../pages/UserHome";
function Protected(props){
    

    const [Authenticated, setAuthenticated] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() =>{

        axios.get(`/api/checkAuthWithAPI`).then(res => {
        
            if(res.status === 200){

                setAuthenticated(true);
            }
            
            setloading(false)
        });
        return()=>{
           

        };

    }, []);


    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err){

        if(err.response.status === 401){
            swal('Jogosulatlan hozzáférési próbálkozás');
         
        }   
        return Promise.reject(err);

    });

    

    axios.interceptors.response.use(function(response) {
        return response;
    }, function(error){

        if(error.response === 403)        
        {
             swal('Forbidden', error.response.data.message, 'warning');   
        }else if(error.response === 404)        
        {
             swal('404-es hiba', 'Oldal nem található', 'warning');   
        }

        return Promise.reject(error)

    }
    
    )


    if(loading){

        return <div>Loading....</div>
    }

    
    let Cmp = props.Cmp;

    
    return(
        
        <div>
            <Cmp/>
         </div>
        
    )
}


export default Protected;