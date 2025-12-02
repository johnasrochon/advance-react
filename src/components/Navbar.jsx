import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='bg-white shadow p-4 flex gap-6 text-lg'>
      <Link to='/'>Home</Link>
      <Link to='/catalog'>Catalog</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
  );
}