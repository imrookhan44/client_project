import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import "./footerAccordian.css";
function FooterAccordion({ text, content }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="footer-accordion">
      <div className="header" onClick={handleClick}>
        <FaPlus className={`icon ${isOpen ? 'open' : ''}`} />
        <div className="text">{text}</div>
      </div>
      {isOpen && (
        <div className="content">
          {content.map((link, index) => (
            <a key={index} href={link.href}>
              {link}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default FooterAccordion;