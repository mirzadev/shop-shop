
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Sidebar />
        <Switch>
          <Route path='/' />
        </Switch>

      </Router>

    </>
  );
}

export default App;
