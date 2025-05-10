import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-800 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Nirvaan Tank Cleaning Services. All rights reserved.</p>
    </footer>
  );
}

export default Footer;