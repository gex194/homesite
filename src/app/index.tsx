import { Routing } from 'pages';
import { withProviders } from './providers';
import './index.scss'
import HomePage from 'pages/home';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const App = () => {
  return (
    <div className="app">
      <HomePage />
      {!window.location.pathname.includes("projects") 
      ? <a href="#" 
      style={{ position: 'absolute', top: 40, left: 40, fontSize: '16px' }} 
      onClick={() => window.history.back()}>Back</a>
      : <></>
    }
    </div>
  );
}

export default withProviders(App);
