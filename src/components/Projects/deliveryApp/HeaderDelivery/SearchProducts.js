import React, {useState} from 'react'

import styled from 'styled-components' 

const SearchProducts = (props) => {

    const {input, SetInput} = props;

    const InputHandler = (e) => {
        SetInput(e.target.value);
    }
    
    return (
        <Conteiner>
            <div className='search-products-by-name'> 
                <input
                type='text'
                name='search products'
                onChange={InputHandler}
                value={input}
                />
                </div>
        </Conteiner>
    )
}

export default SearchProducts;

const Conteiner = styled.div ``;