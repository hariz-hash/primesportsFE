import React, {useState} from 'react';
import ShoeContext from '../contexts/ShoeContext';
import axios from 'axios';

const BASE_URL = "https://3000-harizhash-primesports-lun7xzofp6v.ws-us96b.gitpod.io";

export default function ShoeProvider(props)
{

    const [products, setProducts] =useState([])
    
    const shoeContext ={
        getAllProducts: () =>
        {
            return products;
        },
        getShoeSearch: async(query) =>
        {
            const response = await axios.get(BASE_URL + '/product/search',{
                params:query
            })
            console.log("Search data " + response.data)
            const searchResult = response.data
            setProducts(response)
            return searchResult
        },
        getSearchOptions: async () =>
        {
            const response = await axios.get(BASE_URL + '/product/options')
            const options = response.data.options;
            console.log(options)
            return options;
        }


    }

    return(
        <ShoeContext.Provider value={shoeContext}>
            {props.children}
        </ShoeContext.Provider>
    )
}