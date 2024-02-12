import React from 'react';
import logo from './logo.jpg';

const Navbar = () => {
    const companyName = "Aldag Renovations, LLC"
  const navLinks = [
    { id: 'About', label: 'About' },
    { id: 'Services', label: 'Services' },
    { id: 'Contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-[#131313] p-4 flex justify-between items-center">
      {/* Logo on the left */}

      <div className="flex items-center space-x-4">
        <div className="text-white">
          <img id="logo" src={logo} alt="Logo" />
        </div>
        
        {/* Company Name (visible on medium and larger screens) */}
        <p className="hidden md:block text-white text-lg">{companyName}</p>
      </div>

      {/* Links on the right */}
      <div className="flex items-center space-x-4 me-5 nav-links">
        {navLinks.map((link) => (
          <a
            href={`#${link.id}`}
            key={link.label}
            className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ${window.location.hash === `#${link.id}` ? 'underline' : ''}`}
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
