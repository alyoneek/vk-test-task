import App from '@/App';
import ReactDOM from 'react-dom/client';
import './styles';

const container = document.getElementById('root');

if (container == null) {
  throw new Error("container can't be null");
}

const root = ReactDOM.createRoot(container);

root.render(<App />);
