import { createRoot } from 'react-dom';

import App from './containers/App';

import './assets/styles/index.css';

const container = document.getElementById('root')!;

createRoot(container).render(<App />);
