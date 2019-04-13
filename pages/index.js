/* Without CSS Modules, maybe with PostCSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

export default () => {
  const data = [
    {
      date: '14/April /2019',
      eventName: 'Raknarok ',
      adress: 'MCU',
      tag: 'movie'
    },
    {
      date: '24/April /2019',
      eventName: 'End Game ',
      adress: 'MCU',
      tag: 'movie'
    }
  ]
  return (
    <>
      <nav
        className="navbar navbar-dark "
        style={{ justifyContent: 'center', background: 'black' }}
      >
        <span className="navbar-brand mb-0" href="#">
          Hacker <span style={{ color: 'red' }}> Event</span>
        </span>
      </nav>

      <div class="jumbotron jumbotron-fluid bg-dark" style={{ color: 'white' }}>
        <div class="container">
          <h1 class="display-4">
            <strong>Event</strong>
          </h1>
          <p class="lead">We very happy for your coming</p>
        </div>
      </div>

      <section className="container">
        <h1 style={{ fontWeight: 400 }}>Coming soon</h1>

        {data.map((event, i) => (
          <div key={i}>
            <div className="row">
              <div className="col-3">
                <h1 style={{ fontWeight: 400, color: 'rgba(60,20,100,0.5)' }}>
                  {event.date.split('/')[1]}
                </h1>
                <h2> {event.date.split('/')[2]} </h2>
              </div>
              <div className="col-6">
                <h3>{event.eventName}</h3>
              </div>
              <div className="col-3">
                <h3>{event.tag}</h3>
                <h3>{event.adress}</h3>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}
