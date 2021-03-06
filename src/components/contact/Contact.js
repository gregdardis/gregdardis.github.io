import React from 'react';

import resumePDF from '../../assets/Dardis_Greg_Resume_2020.pdf';
import './contact.css';

const Contact = () => (
  <div className='contact description-box'>
    <h2>Contact</h2>
    <ul>
      <li>dardis.greg@gmail.com</li>
      <li>
        <a href={resumePDF} download>
          Resume
        </a>
      </li>
      <li>
        <a href='https://github.com/gregdardis'
          target='_blank' rel="noopener noreferrer">
        GitHub
        </a>
      </li>
      <li>
        <a href='https://www.linkedin.com/in/greg-dardis-73495514b/'
          target='_blank' rel="noopener noreferrer">
        LinkedIn
        </a>
      </li>
    </ul>
  </div>
);

export default Contact;