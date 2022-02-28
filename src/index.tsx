import { createRoot } from 'react-dom';

import App from './containers/App';

import './assets/styles/index.scss';

const container = document.getElementById('root')!;

createRoot(container).render(<App />);
