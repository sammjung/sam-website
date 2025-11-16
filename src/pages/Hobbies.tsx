import { Link } from 'react-router-dom'

function Hobbies() {
  return (
    <div>
      <h1>
        <Link to="/" style={{ borderBottom: '2px solid #8b9eb3', display: 'inline-block', paddingBottom: '2px', maxWidth: '100%' }}>
          Sam Jung
        </Link>
      </h1>
      
      <h2 style={{ color: '#ffffff' }}># my tries</h2>
      <p className="post-date">Updated on Nov 16, 2025</p>

      <h3># Hobbies</h3>
      
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        <h4>Things I'm trying:</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>★ Photography</li>
          <li>★ Cooking</li>
          <li>★ Writing</li>
        </ul>

        <h4>Things I've tried:</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>★ Poker</li>
          <li>★ Swimming</li>
          <li>★ DJing</li>
          <li>★ Hiking</li>
          <li>★ Gastronomy</li>
        </ul>

        <h4>Things I want to try:</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>★ Beekeeping</li>
          <li>★ Curling</li>
          <li>★ Boxing</li>
          <li>★ Gardening</li>
          <li>★ Astrophotography</li>
          <li>★ Mixology</li>
          <li>★ Cycling</li>
        </ul>
      </div>

      <div className="footer-content" style={{ borderTop: '1px dotted #cccccc', marginTop: '3rem', paddingTop: '1rem' }}>
        <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>2024 © Sam J.</p>
      </div>
    </div>
  )
}

export default Hobbies 