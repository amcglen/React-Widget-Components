import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

  const items =[
    {title: "What is React?", content: "React is a front-end JS framework."},
    {title: "Why learn React?", content: "React is a fav. JS library among engineers."},
    {title: "How do you use React?", content: "You use React by creating components."}
  ];

const App = ()=>{
  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      <Search />
    </div>
    
  );
}

export default App;