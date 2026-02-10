import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

type DayData = { date: string; count: number; level: number }

function ContributionGraph() {
  const [days, setDays] = useState<DayData[]>([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetch('https://github-contributions-api.jogruber.de/v4/sammjung')
      .then(res => res.json())
      .then(data => {
        // API may return contributions as flat array or nested by year
        let all: DayData[] = []
        if (Array.isArray(data.contributions)) {
          all = data.contributions
        } else if (data.contributions && typeof data.contributions === 'object') {
          for (const year of Object.values(data.contributions)) {
            if (Array.isArray(year)) all.push(...(year as DayData[]))
          }
        }

        const now = new Date()
        const cutoff = new Date(now.getFullYear(), now.getMonth() - 4, now.getDate())
        const cutoffStr = cutoff.toISOString().slice(0, 10)

        const recent = all
          .filter(d => d.date >= cutoffStr && d.date <= now.toISOString().slice(0, 10))
          .sort((a, b) => a.date.localeCompare(b.date))

        setDays(recent)
        setTotal(recent.reduce((sum, d) => sum + d.count, 0))
      })
      .catch(() => {})
  }, [])

  if (days.length === 0) return null

  const colors = ['#ebedf0', '#9ec4e8', '#5a9fd4', '#3a7cb8', '#1a5276']

  // Build weeks (columns) with 7 rows each (Sun-Sat)
  const weeks: DayData[][] = []
  let currentWeek: DayData[] = []
  const startDay = new Date(days[0].date).getDay()
  for (let i = 0; i < startDay; i++) {
    currentWeek.push({ date: '', count: 0, level: -1 })
  }
  for (const day of days) {
    currentWeek.push(day)
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }
  }
  if (currentWeek.length > 0) weeks.push(currentWeek)

  // Build month labels positioned above the correct week columns
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const monthLabels: { label: string; weekIndex: number }[] = []
  let lastMonth = -1
  for (let wi = 0; wi < weeks.length; wi++) {
    const firstReal = weeks[wi].find(d => d.date)
    if (firstReal) {
      const month = new Date(firstReal.date + 'T00:00:00').getMonth()
      if (month !== lastMonth) {
        monthLabels.push({ label: monthNames[month], weekIndex: wi })
        lastMonth = month
      }
    }
  }

  const cellSize = 10
  const gap = 2

  return (
    <div>
      <a href="https://github.com/sammjung" style={{ borderBottom: 'none' }}>
        <div style={{ position: 'relative', paddingTop: '18px' }}>
          {monthLabels.map((m, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: 0,
                left: m.weekIndex * (cellSize + gap),
                fontSize: '11px',
                color: '#666',
              }}
            >
              {m.label}
            </span>
          ))}
          <div style={{ display: 'flex', gap: `${gap}px` }}>
            {weeks.map((week, wi) => (
              <div key={wi} style={{ display: 'flex', flexDirection: 'column', gap: `${gap}px` }}>
                {week.map((day, di) => (
                  <div
                    key={di}
                    title={day.date ? `${day.date}: ${day.count} contributions` : ''}
                    style={{
                      width: `${cellSize}px`,
                      height: `${cellSize}px`,
                      borderRadius: '2px',
                      backgroundColor: day.level === -1 ? 'transparent' : colors[day.level] || colors[0],
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </a>
      <p style={{ fontSize: '13px', color: '#666', marginTop: '6px' }}>
        {total} contributions in the last 4 months
      </p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <p>
        I'm Sam Jung, a tech & government accelerationist, and{' '}
        <a href="https://valleyslop.com/" target="_blank" rel="noopener noreferrer">writer</a> from San Francisco.
      </p>

      <p>
        I'm currently <a href="https://afterquery.com">mangling useful data at AfterQuery</a>.
      </p>

      <p>
        Previously, I founded a YC-backed <a href="https://archon.inc">cybersecurity startup</a>,{' '}
        scaled a <a href="https://paragonfellowship.org">tech policy fellowship</a>,{' '}
        worked on CBRN policy with the <a href="https://www.nist.gov/aisi">U.S. AI Safety Institute</a>,{' '}
        advised diplomats on emerging tech at the <a href="https://www.state.gov">U.S. Department of State</a>,{' '}
        and evangelized open source AI at <a href="https://allenai.org">AI2</a>.
      </p>

      <p>
        BA in Government, MSE in CS @ the University of Pennsylvania.
      </p>

      <p>
        I enjoy <Link to="/hobbies">photography</Link> and <a href="https://valleyslop.com/" target="_blank" rel="noopener noreferrer">writing</a>.
      </p>

      <ContributionGraph />

      <p>
        samj [at] afterquery.com · <a href="https://github.com/sammjung">GitHub</a>
      </p>
    </div>
  )
}

export default Home
