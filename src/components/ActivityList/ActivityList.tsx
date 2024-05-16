import "./ActivityList.scss"
import yoga from "../../assets/yoga.jpg"

const ActivityList = () => {
  return (
    <section className="activity-list">
      <div className="activity-list-card">
        <img src={yoga} alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Yoga</h3>
          <p>Fristad</p>
          <p>10.00 - 11.00</p>
        </div>
      </div>
      <div className="activity-list-card">
        <img src="" alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Yoga</h3>
          <p>Fristad</p>
          <p>10.00 - 11.00</p>
        </div>
      </div>
      <div className="activity-list-card">
        <img src="" alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Yoga</h3>
          <p>Fristad</p>
          <p>10.00 - 11.00</p>
        </div>
      </div>
      <div className="activity-list-card">
        <img src="" alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Yoga</h3>
          <p>Fristad</p>
          <p>10.00 - 11.00</p>
        </div>
      </div>
    </section>
  )
}

export default ActivityList
