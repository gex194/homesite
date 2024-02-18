import { withProviders } from './providers';
import './index.scss'
import HomePage from 'pages/home';
import { useLocation, useRoute } from 'wouter';

const App = () => {
  const [, route] = useRoute('/:id')
  const [, setLocation] = useLocation()
  return (
    <div className="app">
      <HomePage />
      <a href="#" 
      style={{ position: 'absolute', top: 40, left: 40, fontSize: '16px' }} 
      onClick={() => setLocation('/')}> {route ? 'Back' : 'Double click to enter'}</a>
    </div>
  );
}

export default withProviders(App);
