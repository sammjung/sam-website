import { Link } from 'react-router-dom'

function Hobbies() {
  return (
    <div>
      <h1>
        <Link to="/" style={{ borderBottom: '2px solid #f90', display: 'inline-block', paddingBottom: '2px' }}>
          Sam Jung
        </Link>
      </h1>
      
      <h2 style={{ color: '#4B0082' }}># my tries</h2>
      <p className="post-date">Updated on Jan 5, 2024</p>

      <h3># Hobbies</h3>
      
      <div>
        <h4>Things I'm trying:</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>★ Photography</li>
          <li>★ Sailing</li>
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

      <div style={{ borderTop: '1px dotted #666', marginTop: '3rem', paddingTop: '1rem' }}>
        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>2024 © Sam J.</p>
      </div>
    </div>
  )
}

export default Hobbies 