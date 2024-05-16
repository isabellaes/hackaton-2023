import ActivityDateCalender from "../../components/ActivityDateCalender/ActivityDateCalender"
import "./ActivityPage.scss"
const ActivityPage = () => {
  return (
    <div className="activity-page">
      <h1>Aktiviteter</h1>
      <ActivityDateCalender />
    </div>
  )
}

export default ActivityPage
