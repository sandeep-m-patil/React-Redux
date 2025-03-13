import React from 'react';

function ListComponent() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </ul>

    
  );
}

export default ListComponent;
