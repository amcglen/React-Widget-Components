import React, {useEffect, useState, useRef} from 'react';

const Dropdown = ({options, selected, onSelectedChange, label})=>{
  const [open, setOpen] = useState(false);

  const ref = useRef();

  //needs to run onl
  useEffect(()=>{

    const onBodyClick = (event) => {
      if(ref.current.contains(event.target)){
        return;
      }
      setOpen(false);
    };

    document.body.addEventListener('click', onBodyClick, {capture: true});
      

    //clean up functions
    return () => {  
      document.body.removeEventListener('click', onBodyClick, {capture: true});
    };
  }, []);


  //display the memu options from the options lists
  const renderOptions = options.map((option)=>{
    //remove the currently selected option for the dropdown list
    if(option.value === selected.value){
      return null;
    }

    //
    return(
    <div 
      key={option.value} 
      className="item"
      onClick={()=>onSelectedChange(option)}
    >
      {option.label}
    </div>
    );
  });


  return(
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={()=> setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Dropdown;