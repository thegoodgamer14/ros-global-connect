import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <HelmetProvider>
        <App />
    </HelmetProvider>
);

// Dispatch event after render for prerendering
window.dispatchEvent(new Event('render-event'));
