import React from 'react'
import SearchProducts from './SearchProducts';
import SearchProductsByTags from './SearchProductsByTags';
import SearchProductsInStock from './SearchProductsInStock';

import styled from 'styled-components' 

const Search = (props) => {
    
    return (
        <Conteiner>
                <SearchProducts/>
                <SearchProductsByTags/>
                <SearchProductsInStock/>
        </Conteiner>
    )
}

export default Search;

const Conteiner = styled.div ``;
