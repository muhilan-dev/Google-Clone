import React from 'react'
import "./Search.css";  
import { useStateValue } from './StateProvider'
import UseGoogleSearch from './UseGoogleSearch';
import Response from './Response';

function SearchPage() {

    const [{term},dispatch] = useStateValue();
    // const { data } = UseGoogleSearch(term); // Live API Call
    const data  = Response 

 
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <h1>{term}</h1>
        </div>
        <div className='searchPage__results'>

        </div>
    </div>
  )
}

export default SearchPage