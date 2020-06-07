import React from 'react';
import appRoutes from './routes';
import Header from './components/Header';

var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
function AppWrapper(props) {
  return <div className={`${supportsTouch ? 'App-content-mobile' : 'App-content-desktop'}`}>{props.children}</div>
}

function App() {
  return (
    <div className="App">
      <Header isTouch={supportsTouch} />
      <AppWrapper>

      </AppWrapper>
    </div>
  );
}

export default App;
