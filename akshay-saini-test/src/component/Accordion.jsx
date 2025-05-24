import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const handleToggle = (index) => {
    setSelectedIndex((p) => (selectedIndex == index ? null : index));
  };
  return (
    <>
      {!items || items.length == 0 ? (
        "No items available"
      ) : (
        <div className="accordion">
          {items.map((items, index) => {
            return (
              <div className="accordion-item" key={index}>
                <div
                  className="accordion-title"
                  onClick={() => handleToggle(index)}
                >
                  {items.title}
                </div>
                {selectedIndex == index && (
                  <div className="accordion-content">
                    <p>{items.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Accordion;
