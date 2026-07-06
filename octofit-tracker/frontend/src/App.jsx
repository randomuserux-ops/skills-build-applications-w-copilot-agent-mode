import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-7">
          <h1 className="display-4 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness experience for logging workouts, tracking progress,
            and competing with your team.
          </p>
          <div className="d-flex gap-3">
            <a className="btn btn-primary btn-lg" href="/">
              Explore app
            </a>
            <a className="btn btn-outline-secondary btn-lg" href="/">
              View leaderboard
            </a>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4">
              <h2 className="h4 fw-semibold">Ready to train</h2>
              <p className="text-muted mb-4">
                React, Express, and MongoDB are now scaffolded for the full OctoFit experience.
              </p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item px-0">Activity logging</li>
                <li className="list-group-item px-0">Team management</li>
                <li className="list-group-item px-0">Leaderboard insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
