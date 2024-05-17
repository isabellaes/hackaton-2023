import ActivityDateCalender from "../../components/ActivityDateCalender/ActivityDateCalender";
import "./ActivityPage.scss";
const BookingPage = () => {
  return (
    <div className="activity-page">
      <h1>Aktiviteter</h1>
      <ActivityDateCalender />
    </div>
  );
};

export default BookingPage;
