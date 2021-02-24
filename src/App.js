import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Home from './components/Home';
import Button from './components/Button';

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <div className="container">
        <Home />
        <Button title="+" onHandleClick={handleClick} />
      </div>
      <div className="container">

        <Button title="Add New Task" onHandleClick={handleClick} /> 
      </div>
    </ReactCardFlip>
  );
}

export default App;
