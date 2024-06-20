import React from 'react'
import { useStateValue } from './StateProvider'
import UseGoogleSearch from './UseGoogleSearch';
import Response from './Response';
import { Link } from 'react-router-dom';
import googlelogo from "./google-name.png";
import './Searchpage.css'
import Search from './Search';

function SearchPage() {

    const [{term},dispatch] = useStateValue();
    // const { data } = UseGoogleSearch(term); // Live API Call
    const data  = Response 

 
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
          <Link to="/">
            <img src={googlelogo} alt="description" className="searchpage-logo" />  
          </Link>
          <div className='searchPage__header_body'>
              <Search />
          </div>
        </div>
        <div className='searchPage__results'>

        </div>
    </div>
  )
}

export default SearchPage