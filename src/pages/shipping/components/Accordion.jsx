import React, { useState } from 'react';
import "./accordion.css"
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
function Accordion(props) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={handleClick}>
        {props.title}
        {
          isActive ?
            <AiOutlineMinus />
            :
            <AiOutlinePlus />
        }
      </div>
      {isActive && (
        <div className="accordion-content">{props.children}</div>
      )}
    </div>
  );
}
export default Accordion