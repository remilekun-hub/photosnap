import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Mainpages/Home';
import Pricing from './Mainpages/Pricing';
import Stories from './Mainpages/Stories';
import Features from './Mainpages/Features';
import Header from './Components/Header';


function App() {

  return (
    <Router>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/pricing" component={Pricing}/>
          <Route exact path="/stories" component={Stories}/>
          <Route exact path="/features" component={Features}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
