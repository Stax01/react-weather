import { Route, Switch } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Home } from './pages/Home';
import './styles/index.scss'


function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch >
    </div>
  );
}

export default App;
