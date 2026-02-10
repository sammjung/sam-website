import { Link } from 'react-router-dom'

function Hobbies() {
  return (
    <div>
      <p><Link to="/">← back</Link></p>

      <p><strong>my tries</strong></p>

      <p>Things I'm trying:<br />
        Cooking<br />
        Writing<br />
        Mixology
      </p>

      <p>Things I've tried:<br />
        Photography<br />
        Poker<br />
        Swimming<br />
        DJing<br />
        Hiking<br />
        Gastronomy
      </p>

      <p>Things I want to try:<br />
        Beekeeping<br />
        Curling<br />
        Boxing<br />
        Gardening<br />
        Astrophotography<br />
        Cycling
      </p>
    </div>
  )
}

export default Hobbies
