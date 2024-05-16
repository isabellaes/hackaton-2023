import "./Calender.scss"
import { useState } from "react"

type CalenderTypes = {
  setDateChosed: (date: string) => void
}

const Calender: React.FC<CalenderTypes> = ({ setDateChosed }) => {
  const [dateChosedLocal, setDateChosedLocal] = useState<Date>()
  const date = new Date()
  const [year, setYear] = useState(date.getFullYear())
  const [month, setMonth] = useState(date.getMonth())

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  let firstDay = new Date(year, month, 1).getDay()

  const calenderDays = []
  if (firstDay === 0) {
    firstDay = 7
  }
  for (let i = 1; i < firstDay; i++) {
    calenderDays.push(<div key={i}></div>)
  }
  for (let i = 0; i < daysInMonth; i++) {
    const currentDate = new Date(year, month, i + 1)
    const selected =
      currentDate.toDateString() === dateChosedLocal?.toDateString()

    calenderDays.push(
      <div
        key={i + firstDay}
        className={selected ? "selected" : ""}
        onClick={() => {
          setDateChosedLocal(new Date(year, month, i + 1))
          setDateChosed(`${year}-${month + 1}-${i + 1}`)
        }}
      >
        {i + 1}
      </div>
    )
  }
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  return (
    <>
      <section className="calender">
        <header>
          <button
            onClick={() => {
              if (month > 0) {
                setMonth(month - 1)
              } else {
                setMonth(11)
                setYear(year - 1)
              }
            }}
          >
            Prev
          </button>
          <h2>
            {monthNames[month]} {year}
          </h2>
          <button
            onClick={() => {
              if (month < 11) {
                setMonth(month + 1)
              } else {
                setMonth(0)
                setYear(year + 1)
              }
            }}
          >
            Next
          </button>
        </header>
        <div className="calender-days">
          <div>Mon</div>
          <div>Tue</div>
          <div>Wen</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          <div>Sun</div>
          {calenderDays}
        </div>
      </section>
    </>
  )
}

export default Calender
