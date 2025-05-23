import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <h1 style={{ borderBottom: '2px solid #f90', display: 'inline-block', paddingBottom: '2px', maxWidth: '100%' }}>Sam Jung</h1>
      <h2>Founder and CPO @ Archon Technologies</h2>

      <h3>Currently:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>building</em> <a href="https://getarchon.com">the future of public security at Archon Technologies</a></li>
        <li><em>learning</em> <Link to="/hobbies">photography</Link></li>
      </ul>

      <h3>Formerly:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>scaled</em> <a href="https://paragonfellowship.org">a tech policy fellowship</a></li>
        <li><em>advised the </em> <a href="https://www.nist.gov/aisi">U.S. AI Safety Institute</a> on chemical weapons policy</li>
        <li><em>advised U.S. diplomats on emerging tech</em> <a href="https://www.state.gov"> @ State</a></li>
        <li><em>lobbied for open source AI</em> <a href="https://allenai.org">@ Ai2</a></li>
      </ul>

      <h3>Education:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>BA in Government, MSE in CS @ the University of Pennsylvania</em></li>
      </ul>

      <p style={{ marginTop: '2rem', wordBreak: 'break-word' }}><strong>meet me</strong> at sam [at] archon.inc</p>

      <div className="footer-content" style={{ borderTop: '1px dotted #666', marginTop: '3rem', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/sammjung" style={{ marginRight: '0.5rem', borderBottom: 'none' }}><FaGithub size={20} /></a>
        <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>2024 © Sam J.</p>
      </div>
    </div>
  )
}

export default Home 