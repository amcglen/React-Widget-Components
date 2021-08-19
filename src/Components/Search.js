import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Search = (props)=>{
  //state for the key term to be searched on Wikipedia 
  const [term, setTerm] = useState("programming");
  const [results, setResults] = useState([]);
  console.log(results);
  const onTextChange = (e)=>{
    setTerm(e.target.value);
  }

  //handle the HTTP request to the Wikipedia API whenever the term state changes 
  //******Note: You cannot mark the callback function of useEffect within async **********/
  useEffect(()=>{
    //to use async/await, create a helper function (or use promises) inside of the useEffect function
    const search = async ()=>{
      //http get request to the wikipedia API
      const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params:{
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: {term}
        }
      });
      setResults(data.query.search);
    }


    if(term && !results.length){
      search();
    }else{
      const timeoutId = setTimeout(()=>{
        if(term){
          search();
        }
      },500);    

      return ()=>{
        clearTimeout(timeoutId);
      }
    }
    },[term]);


  const renderedResults = results.map((result) =>{
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a 
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            target="_blank"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
        </div>
      </div>
    );
  });
  
 

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input 
            type="text"
            value={term}
            onChange={e=>onTextChange(e)}
            className="input"  
          />
        </div>
      </div>
      <div className="ui celled list">
        {renderedResults}
      </div>
    </div>
    
  );

};

export default Search;

