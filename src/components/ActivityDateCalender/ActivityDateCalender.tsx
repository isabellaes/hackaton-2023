import { useState } from "react"
import "./ActivityDateCalender.scss"
import Calender from "./Calender/Calender"
import ActivityList from "../ActivityList/ActivityList"
import Form from "../../Form/Form"
const ActivityDateCalender = () => {
  const [date, setDate] = useState("")
  const setDateChosed = (date: string) => {
    setDate(date)
  }

  const [showForm, setShowForm] = useState(false)
  const setShowFormHandler = () => {
    setShowForm(!showForm)
  }
  return (
    <section className="activity-date-calender">
      <div>
        <Calender setDateChosed={setDateChosed} />
        {date && (
          <div>
            <ActivityList setShowFormHandler={setShowFormHandler} />
          </div>
        )}
      </div>
      {showForm && (
        <Form
          onClose={function (): void {
            throw new Error("Function not implemented.")
          }}
        />
      )}
    </section>
  )
}

export default ActivityDateCalender
