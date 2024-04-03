import React from 'react';

const Header = ({ isToggled, toggleStyle ,toggleNewComponent, goBack   }) => {
  return (
    <div className={`App ${isToggled ? 'toggled' : ''}`}>
      {/* Header with a button to toggle style */}
      <header className={`header ${isToggled ? 'toggled' : 'default'}`}>
        <h3>Ruchitha's Answer Wizard React Application</h3>
        <div className="header-controls">
          <div>
            <a href="https://github.com/BandlaR2/ai-test-harness-repo.git" target="_blank" rel="noopener noreferrer">
              <h5>GitHub</h5>
            </a>
          </div>
          <div>
            <a href="https://supabase.com/dashboard/project/oiqgujxdnfpzcpxpfstd" target="_blank" rel="noopener noreferrer">
              <h5>Supabase Dashboard</h5>
            </a>
          </div>
          <div>
            <a href="https://app.netlify.com/teams/bandlar2/overview"target="_blank" rel="noopener noreferrer">
              <h5>Netlify</h5>
            </a>
          </div>
          <div className="button-container">
          <button onClick={goBack}>Answer wizard</button>
          <button onClick={toggleNewComponent}>Learning Sites</button>
            <button onClick={toggleStyle}>Change theme</button>
           
          </div>
         
        </div>
      </header>
    </div>
  );
  
}

export default Header;




