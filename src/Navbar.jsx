import React, { useState, useEffect,useRef } from 'react';
import logo from './logo.jpg';

const Navbar = () => {

  const companyName = "Aldag Renovations, LLC"
  const navLinks = [
    { id: 'About', label: 'About' },
    { id: 'Services', label: 'Services' },
    { id: 'Contact', label: 'Contact' },
  ];

  const[activeSection, setActiveSection] = useState('');
  const observer = useRef(null);
  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );
    const links = document.querySelectorAll('section');
    links.forEach((link) => {
      observer.current.observe(link);
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  const handleLinkClick = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetElement.id)
    }
  };

  return (
    <nav className="bg-[#131313] p-4 flex justify-between items-center fixed z-20 w-full top-0">
      {/* Logo on the left */}

      <div className="flex items-center space-x-4">
        <div className="text-white">
          <img id="logo" src={logo} alt="Logo" />
        </div>
        
        {/* Company Name (visible on medium and larger screens) */}
        <p className="hidden md:block text-white text-lg">{companyName}</p>
      </div>

      {/* Links on the right */}
      <div className="flex justify-end space-x-6 nav-links">
        {navLinks.map((link) => (
          <a
            href={`#${link.id}`}
            key={link.label}
            data-link={link.id}
            className={`nav-link text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${activeSection === `${link.id}` ? 'active' : ''}`}
            onClick={() => handleLinkClick(link.id)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
