
import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { Link, Text } from 'react-router-dom'
import swal from "sweetalert";

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
            //console.log(err);
        }


    });
    
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