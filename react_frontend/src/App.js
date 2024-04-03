// App.js
import React, { useState } from 'react';
import './App.css'; // Import default CSS file
import './Change.css'; // Import CSS file for change

import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Header from './components/Header';
import LearningSites from './components/LearningSites';

const App = () => {
  const [isToggled, setIsToggled] = useState(false); // State to track toggle state
  const [showNewComponent, setShowNewComponent] = useState(false); // State to track whether to show new component



  const toggleStyle = () => {
    setIsToggled(!isToggled); // Toggle the state
    document.body.classList.toggle('toggled');
  };

  const toggleNewComponent = () => {
    setShowNewComponent(!showNewComponent); // Toggle the state to show/hide the new component
  };

  const goBackToMainContent = () => {
    setShowNewComponent(false); // Hide the LearningSites component
  };

  return (
    <div>
      <Header isToggled={isToggled} toggleStyle={toggleStyle} toggleNewComponent={toggleNewComponent} goBack={goBackToMainContent} />
      {/* Render different content based on whether to show the new component */}
      {showNewComponent ? (
        <LearningSites   />
      ) : (
        <MainContent />
      )}
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;










