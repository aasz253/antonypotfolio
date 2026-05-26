import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

try {
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '';
    createRoot(root).render(<App />);
  }
} catch (e) {
  document.getElementById('root').innerHTML = `
    <div style="padding:2rem;color:#fff;background:#0f172a;min-height:100vh;font-family:system-ui;">
      <h1 style="font-size:2rem;margin-bottom:1rem;">Antony <span style="background:linear-gradient(135deg,#818cf8,#a78bfa);-webkit-background-clip:text;background-clip:text;color:transparent;">Sifuna</span></h1>
      <p style="color:#94a3b8;">Portfolio is loading... Please ensure JavaScript is enabled.</p>
      <pre style="color:#ef4444;margin-top:1rem;font-size:0.8rem;overflow:auto;">${e.message}</pre>
    </div>
  `;
}
