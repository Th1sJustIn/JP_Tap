import React from 'react';
import './App.css';
import AlbumIcon from '@mui/icons-material/Album';
import PianoIcon from '@mui/icons-material/Piano';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function App() {
  const links = {
    discography: 'https://www.kirksmgmt.com/stjohnpaull', 
    beatStore: 'https://www.beatstars.com/jayponthetrack', 
    instagram: 'https://www.instagram.com/st.johnpaull/',
    twitter: 'https://twitter.com/johnpaull',
    spotify: 'https://open.spotify.com/artist/your-artist-id',
    soundcloud: 'https://soundcloud.com/johnpaull',
    email: 'mailto:st.johnpaullmusic@gmail.com'
  };

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="contact-page">
      {/* Background Image with Overlay */}
      <div className="background-image"></div>
      <div className="overlay"></div>

      {/* Content Container */}
      <div className="content-container">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="name">ST. JOHN PAULL</h1>
          <p className="title">Music Producer / Artist</p>
        </div>

        {/* Main Links Section */}
        <div className="links-section">
          <button
            className="primary-link"
            onClick={() => handleLinkClick(links.discography)}
          >
            <AlbumIcon className="link-icon" />
            <span className="link-text">Discography</span>
          </button>

          <button
            className="primary-link"
            onClick={() => handleLinkClick(links.beatStore)}
          >
            <PianoIcon className="link-icon" />
            <span className="link-text">Beat Store</span>
          </button>
        </div>

        {/* Social Links Section */}
        <div className="socials-section">
          <h3 className="socials-title">Connect</h3>
          <div className="social-links">
            <button
              className="social-link"
              onClick={() => handleLinkClick(links.instagram)}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </button>

            <button
              className="social-link"
              onClick={() => handleLinkClick(links.email)}
              aria-label="Email"
            >
              <EmailIcon />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>Tap to connect</p>
        </div>
      </div>
    </div>
  );
}

export default App;
