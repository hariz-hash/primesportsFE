import React, { useState } from 'react';
import ShoeContext from '../contexts/ShoeContext';
import axios from 'axios';

const BASE_URL = "https://3000-harizhash-primesports-lun7xzofp6v.ws-us97.gitpod.io/api";

export default function ShoeProvider(props) {


    let brands = [
        [1, "Adidas"], [2, "Nike"], [3, "Puma"],
        [4, "Reebok"], [5, "New Balance"],
        [6, "Under Armour"]
    ]
    let genders = [
        [1, "Male"],
        [2, "Female"],
    ];
    let materials = [
        [1, "Carbon fibre"], [2, "Polyamide"],
        [3, "Polyester"], [4, "Rubber"]
    ]
    let sizes = [
        [1, "5.5"], [2, "6"], [3, "6.5"],
        [4, "7"], [5, "7.5"], [6, "8"],
        [7, "8.5"], [8, "9"], [9, "9.5"],
        [10, "10"], [11, "10.5"], [12, "11"],
        [13, "11.5"], [14, "12"]
    ]
    let colors = [
        [1, "Red"], [2, "Yellow"], [3, "Orange"],
        [4, "Pink"], [5, "Green"], [6, "Blue"],
        [7, "White"], [8, "Silver"], [9, "Grey"], [10, "Black"]
    ]

    brands.unshift([0, '--- Any Brand ---']);
    materials.unshift([0, '--- Any Materials ---']);
    sizes.unshift([0, '--- Any Sizes ---']);
    colors.unshift([0, '--- Any Colors ---']);

    const options = {
        brands,
        materials,
        sizes,
        colors,
        genders
    }

    const [products, setProducts] = useState([])
    const [optionList, setOptionList] = useState({})

    const shoeContext = {
        getAllProducts: () => {
            return products;
        },
        getShoeSearch: async (query) => {
            const response = await axios.get(BASE_URL + '/product/search', {
                params: query
            })
            console.log("Search data " + response.data.searchShoes)
            const searchResult = response.data.searchShoes
            setProducts(searchResult)
            return searchResult
        },
        getSearchOptions: async () => {
            const response = await axios.get(BASE_URL + '/product/options')
            const searchOptions = response.data.options;
            console.log("de")
            return searchOptions;
        },
        getOptionsList: () => {
            return options;
        }


    }

    return (
        <ShoeContext.Provider value={shoeContext}>
            {props.children}
        </ShoeContext.Provider>
    )
}