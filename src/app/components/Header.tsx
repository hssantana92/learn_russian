'use client'
import { usePathname } from "next/navigation";

const links = [
  { 
      name: 'Categories', 
      href: '/categories', 
      icon: '', 
      key: '' },
  {
      name: 'Alphabet',
      href: '/alphabet',
      icon: '',
      key: ''
  },
  {   
      name: 'Settings', 
      href: '/settings', 
      icon: '', 
      key: '' },
];

export default function Header(){

  const pathName = usePathname()

    return (
        <header style={{marginBottom: '50px'}}>
        <div>
          <h3 className="float-md-start mb-10">Travel Russian</h3>
          <nav className="nav nav-masthead float-md-end">
            {links.map((link) => {

              return(
                  
                      <a key={link.name} className={(pathName === link.href) ? "nav-link active" : "nav-link"} aria-current="page" href={link.href}> 
                      {link.name}
                  </a>
              );

              })}
              <a href="/api/auth/login">Login</a>
              <a href="/api/auth/logout">Logout</a>
          </nav>
        </div>
      </header>
    )
}