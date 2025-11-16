import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

function Home() {
  return (
    <div>
      <h1 style={{ borderBottom: '2px solid #8b9eb3', display: 'inline-block', paddingBottom: '2px', maxWidth: '100%' }}>Sam Jung</h1>
      <h2>
        a tech & government accelerationist, and <a href="https://valleyslop.com/" target="_blank" rel="noopener noreferrer">writer from San Francisco</a>
      </h2>

      <h3>Currently:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>mangling</em> <a href="https://afterquery.com">useful data at AfterQuery</a></li>
        <li><em>learning</em> <Link to="/hobbies">photography</Link></li>
      </ul>

      <h3>Formerly:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>founded</em> <a href="https://getarchon.com">a YC-backed cybersecurity startup</a></li>
        <li><em>scaled</em> <a href="https://paragonfellowship.org">a tech policy fellowship</a></li>
        <li><em>worked on CBRN policy with the </em> <a href="https://www.nist.gov/aisi">U.S. AI Safety Institute</a></li>
        <li><em>advised diplomats on emerging tech</em> <a href="https://www.state.gov"> @ U.S. Department ofState</a></li>
        <li><em>evangelized open source AI</em> <a href="https://allenai.org">@ Ai2</a></li>
      </ul>

      <h3>Education:</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><em>BA in Government, MSE in CS @ the University of Pennsylvania</em></li>
      </ul>

      <p style={{ marginTop: '2rem', wordBreak: 'break-word' }}><strong>meet me</strong> at samj [at] afterquery.com</p>

      <div className="footer-content" style={{ borderTop: '1px dotted #cccccc', marginTop: '3rem', paddingTop: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
        <a href="https://github.com/sammjung" style={{ marginRight: '0.5rem', borderBottom: 'none' }}><FaGithub size={20} /></a>
        <p style={{ margin: 0, color: '#cccccc', fontSize: '0.9rem' }}>2024 © Sam J.</p>
      </div>
    </div>
  )
}

export default Home 