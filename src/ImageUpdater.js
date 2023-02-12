import React, { useState } from 'react';

function ImageUpdater() {
  const images = [
    'https://imgs.search.brave.com/x0jZujDB8sOaUzYJWNprNf9BUFkylnasicB_3KZKKm0/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9qb29p/bm4uY29tL2ltYWdl/cy9icm93bi1saW9u/LTQuanBn',
    'https://imgs.search.brave.com/B12LLiVzu3_E98TszcPNjj5U4XHcVilwAFMCfYDB2xU/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5o/ZHdhbGxwYXBlcnNw/dWxzZS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTMvMDIv/QmVhdXRpZnVsLUFu/aW1hbC0wMTAuanBn',
    
  ];

  const [index, setIndex] = useState(0);

  function handleButtonClick() {
    setIndex(prevIndex => (prevIndex + 1) % images.length);
  }

  return (
    <div>
      <h3>Image Updater</h3>
      <br />
      <br />
      <button onClick={handleButtonClick}>Change Image</button>
      <br />
      <br />
      <img src={images[index]} height="300px" />
    </div>
  );
}

export default ImageUpdater;
