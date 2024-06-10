import React from 'react';
import '../styles.css';

export default function Footer()
{ 
    const currentYear = new Date().getFullYear();
    return(
    <footer className='footer'>
      <p className='footer-text'>
       &copy; {currentYear} WebstackMovie, All Rights Reserved | Developed by Calvin the Patriot & Prosper Auayigah Mawuli.
      </p>
    </footer>
    );
}
