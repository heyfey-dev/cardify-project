const Videocomponent = () => {
  // Extract the video ID from the YouTube watch URL
  const videoId = 'jqJjJE8bO5c';
  
  // Construct the YouTube embed URL
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="container">
      {/* left side */}
      <div>
        <h3>Frequently asked questions</h3>
        <p>For questions not covered here, kindly check our <a href="#">how-to</a> articles or contact <br /> <a href="#">support.</a></p>

        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="Embedded Video"
            className="embed-responsive-item"
            src={videoUrl}
            allowFullScreen
            style={{ width: '40%', height: '20rem' }}
          ></iframe>
        </div>
      </div>

      {/* right side */}
      <div>
        <div className="accordion" id="faqAccordion">
          {/* Question 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Question 1: What is Cardify?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                Cardify is a digital wallet service that allows you to exchange, spend, and save money seamlessly across various digital wallets.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Question 2: How can I sign up for Cardify?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
              <div className="accordion-body">
                To sign up for Cardify, visit our website and click on the Sign Up button. Follow the on-screen instructions to create your account.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Videocomponent;
