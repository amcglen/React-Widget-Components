import React, {useState} from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

  const items =[
    {title: "What is React?", content: "React is a front-end JS framework."},
    {title: "Why learn React?", content: "React is a fav. JS library among engineers."},
    {title: "How do you use React?", content: "You use React by creating components."}
  ];

  const options= [
    {label:"The Colour Blue", value:"blue"},
    {label:"The Colour Green", value:"green"},
    {label:"The Colour Red", value:"red"},
  ];

const App = ()=>{

const [selected, setSelected] = useState(options[0]);


  return (
    <div className="ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown 
        options={options} 
        selected={selected} 
        onSelectedChange={setSelected} 
      />
    </div>
    
  );
}

export default App;