import Home from './view/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
     <Route path='/' component={Home} />   
    </Router>
  );
}

export default App;
