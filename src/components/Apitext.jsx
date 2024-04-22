import { useState } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes

const ModalSpinner = ({ onClose }) => {
  return (
    <div className="overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000 }}>
      <div className="spin" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: '#fff', padding: '20px', borderRadius: '8px' }}>
        {/* Your spinner content here */}
        <div style={{ marginTop: '10px' }}>
          <input type="radio" id="option1" name="options" value="option1" />
          <label htmlFor="option1" style={{ marginLeft: '5px' }}>Option 1</label>
        </div>
        <button onClick={onClose}>Close modal</button>
      </div>
    </div>
  );
};


ModalSpinner.propTypes = {
  onClose: PropTypes.func.isRequired,
};

const Apitext = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyClick = () => {
    setIsLoading(true);
  };

  const handleCloseModal = () => {
    setIsLoading(false);
  };

  return (
    <div className='border-0' style={{ border: "2px solid", width: "200px", padding: "9px", backgroundColor: "rgb(245,247,250)", borderRadius: "12px" }}>
      <div><p>9 Mobile</p></div>
      <div style={{ display: "flex" }}>
        <div><p>2% cashback </p></div>
        <div><p>2%</p></div>
        <button onClick={handleBuyClick}>Buy</button>
      </div>

      {/* Input radio with text option */}
      <div style={{ marginTop: '10px' }}>
        <input type="radio" id="option1" name="options" value="option1" />
        <label htmlFor="option1" style={{ marginLeft: '5px' }}>Option 1</label>
      </div>

      {isLoading && <ModalSpinner onClose={handleCloseModal} />} {/* Render modal spinner if isLoading is true */}
    </div>
  );
};

export default Apitext;
