import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import NavBar from './components/NavBar'
import Stories from './containers/Stories'
import StoryForm from './components/StoryForm'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/stories' component={Stories}/>
          <Route exact path='/stories/new' component={StoryForm}/>
        </Switch>


      </div>
    </Router>
  );
}

export default App;
