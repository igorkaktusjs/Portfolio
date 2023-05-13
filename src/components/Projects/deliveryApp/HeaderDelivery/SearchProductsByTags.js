import React, {useContext} from 'react'
import ProductsContext from '../dataDelivery/ProductsContext'

import styled from 'styled-components' 

    const SearchProductsByTags = (props) => {

    const data = useContext(ProductsContext);

    let tags = '';

    tags = data.map((item, i) => 
    (<option key={item.id} value={item.tags[i]}>
        {item.tags[i]}
        </option>))

    return (    
        <Conteiner>
            <div className='search-products-by-tags'>
                <select name="tags" id="tag">
                    <option value="Search products by tags">Search products by tags</option>
                    {tags}
                </select>
            </div>
        </Conteiner>
    )
}

export default SearchProductsByTags;

const Conteiner = styled.div ``;