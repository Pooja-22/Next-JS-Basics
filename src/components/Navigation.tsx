// components/Navigation.js
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/posts', label: 'Post' },
];

export default function Navigation() {
  return (
    <nav className='nav'>
      <ul className='navList'>
        {navLinks.map((link) => (
          <li key={link.href} className='navItem'>
            <Link className='navLink' href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
