import React, { useState } from 'react';
import SingleColor from './SingleColor';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [list, setList] = useState(new Values('#f15025').all(10));
  const [error, setError] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
    
  }

  return <React.Fragment>
    <main>
    <section className="form-section">
      <h3>color generator</h3>
      <form className="form-control" onSubmit={handleSubmit}>
        <input type="text"  value={color} className={`${error ? 'error-border':null} `} placeholder="#f15025" onChange={(e) => setColor(e.target.value)}/>
        <button className="btn" type="submit">submit</button>
      </form>
    </section>
    <section className="colors">
      {
        list.map((color, index) => {
          return <SingleColor key={index} {...color} index={index} hex={color.hex}></SingleColor>
        })
      }
    </section>
    </main>
    <footer>
      <p>copyright @mahip-patni23...</p>
    </footer>
  </React.Fragment>
}

export default App;
