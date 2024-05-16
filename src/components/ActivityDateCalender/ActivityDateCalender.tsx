import { useState } from "react"
import "./ActivityDateCalender.scss"
import Calender from "./Calender/Calender"
import ActivityList from "../ActivityList/ActivityList"
const ActivityDateCalender = () => {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }
  return (
    <section className="activity-date-calender">
      <Calender setDateChosed={setDateChosed} />
      {date && (
        <div>
          <ActivityList />
        </div>
      )}
    </section>
  )
}

export default ActivityDateCalender
