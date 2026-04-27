import { Link } from 'react-router-dom';
export function NotFoundPage(){ return <div className="panel stack"><h1>Page not found</h1><p>The requested route does not exist in this frontend.</p><Link to="/" className="button-link">Back home</Link></div>; }
