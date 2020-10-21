import React, {Suspense} from 'react';
import appRoutes from './routes';
import Header from './containers/HeaderContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
function AppWrapper(props) {
  return <div className={`${supportsTouch ? 'App-content-mobile' : 'App-content-desktop'}`}>{props.children}</div>
}

function App() {
  return (
    <div className="App">
      <Header isTouch={supportsTouch} />
      <AppWrapper>
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              {appRoutes.map(route => {
                return (
                <Route {...route}/>
                );
              })}
            </Switch>
          </Router>
        </Suspense>
      </AppWrapper>
    </div>
  );
}

export default App;
