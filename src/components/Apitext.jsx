const Apitext = () => {
    return (
      <div>
        <div className="card">
          <div className="card__info">
            <div className="card__logo">MasterCard</div>
            <div className="card__chip">
              <svg className="card__chip-lines" role="img" width="20px" height="20px" viewBox="0 0 100 100" aria-label="Chip">
                <g opacity="0.8">
                  <polyline points="0,50 35,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="0,20 20,20 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="50,0 50,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="65,35 80,20 100,20" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="100,50 65,50" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="35,35 65,35 65,65 35,65 35,35" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="0,80 20,80 35,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="50,100 50,65" fill="none" stroke="#000" strokeWidth="2"></polyline>
                  <polyline points="65,65 80,80 100,80" fill="none" stroke="#000" strokeWidth="2"></polyline>
                </g>
              </svg>
              <div className="card__chip-texture"></div>
            </div>
            <div className="card__type">debit</div>
            <div className="card__number">
              <span className="card__digit-group">0123</span>
              <span className="card__digit-group">4567</span>
              <span className="card__digit-group">8901</span>
              <span className="card__digit-group">2345</span>
            </div>
            <div className="card__valid-thru" aria-label="Valid thru">Valid thru</div>
            <div className="card__exp-date"><time dateTime="2038-01">01/38</time></div>
            <div className="card__name" aria-label="Dee Stroyer">Jk Huger</div>
            <div className="card__vendor" role="img" aria-labelledby="card-vendor">
              <span id="card-vendor" className="card__vendor-sr">Mastercard</span>
            </div>
            <div className="card__texture"></div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Apitext;
  