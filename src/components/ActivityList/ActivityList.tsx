import "./ActivityList.scss"
import yoga from "../../assets/yoga.jpg"
import walk from "../../assets/walk-unsplash.jpg"
import discgolf from "../../assets/discgolf-unsplash.jpg"
import tabletennis from "../../assets/tabletennis-unsplash.jpg"

const ActivityList = ({
  setShowFormHandler,
}: {
  setShowFormHandler: () => void
}) => {
  return (
    <section className="activity-list">
      <div className="activity-list-card" onClick={setShowFormHandler}>
        <img src={yoga} alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Yoga</h3>
          <p>Fristad</p>
          <p>16.00 - 17.00</p>
        </div>
      </div>
      <div className="activity-list-card" onClick={setShowFormHandler}>
        <img src={walk} alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Prommenad</h3>
          <p>Borås</p>
          <p>10.00 - 11.00</p>
        </div>
      </div>
      <div className="activity-list-card" onClick={setShowFormHandler}>
        <img src={discgolf} alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Discgolf</h3>
          <p>Dalsjöfors</p>
          <p>17.00 - 19.00</p>
        </div>
      </div>
      <div className="activity-list-card" onClick={setShowFormHandler}>
        <img src={tabletennis} alt="Aktivitetsbild" />
        <div className="activity-list-card-info">
          <h3>Bordtennis</h3>
          <p>Byttorp</p>
          <p>07.00 - 09.00</p>
        </div>
      </div>
    </section>
  )
}

export default ActivityList
