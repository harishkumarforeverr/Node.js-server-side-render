import React, { useState, useEffect } from 'react';

const App = () => {
  const [componentString, setComponentString] = useState('');

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const response = await fetch("http://localhost:3000/");
        const fetchedString = await response.text();
        setComponentString(fetchedString);
      } catch (error) {
        console.error("Error fetching component:", error);
      }
    };

    fetchComponent();
  }, []);
 

  const createMarkup = () => {
    return { __html: componentString };
  };

 

  return (
    <div  dangerouslySetInnerHTML={createMarkup()} />
  );
};

export default App;
