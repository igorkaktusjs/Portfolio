import React, {useState} from 'react'

import styled from 'styled-components' 

const SearchProductsInStock = (props) => {

    
    return (
        <Conteiner>
            <div className='all-products'>
                <select name="stock" id="in-stock">
                    <option value="">All products</option>
                    <option value="In stock">In stock</option>
                    <option value="Out of stock">Out of stock</option>
                </select>    
            </div>
        </Conteiner>
    )
}

export default SearchProductsInStock;

const Conteiner = styled.div ``;