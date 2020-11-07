import React from 'react';

import Cookie from './components/Cookie';
import Approach from './components/Approach';
import Header from './components/Header';
import Intro from './components/Intro';

function App() {
  const [showCookie, setShowCookie] = React.useState(false);
  const closeCookie = () => setShowCookie(false);
  React.useEffect(() => {
    const timer = setTimeout(() => setShowCookie(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {
        showCookie && 
        <Cookie 
          onCloseCookie={closeCookie}
        />
      }
      <Header />
      <Intro />
      <Approach />
    </div>
  );
}

export default App;
