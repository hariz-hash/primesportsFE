import React, {useState} from 'react';
import ShoeContext from '../contexts/ShoeContext';
import axios from 'axios';

const BASE_URL = "https://3000-harizhash-primesports-lun7xzofp6v.ws-us96.gitpod.io";

export default function ShoeProvider(props)
{

    const [searchShoe, setSearchShoe] =useState([])
    const shoeContext ={

        getShoeSearch: async(query) =>
        {
            const response = await axios.get(BASE_URL + '/product/search',{
                params:query
            })
            console.log("Search data " + response.data)
            const searchResult = response.data
            setSearchShoe(response)
            return searchResult
        }


    }

    return(
        <ShoeContext.Provider value={shoeContext}>
            {props.children}
        </ShoeContext.Provider>
    )
}