import { Link } from "react-router-dom";
import "./ActivityPage.scss";
import ActivityDetailsPage from "../ActivityDetailsPage/ActivityDetailPage";

const ActivityPage = () => {
  return (
    <div className="ActivityPage">
      <div className="activitys-box">
        <h1>Aktiviteter</h1>
        <Link className="activity-link" to={"/activity/6"}>
          <h2>Basket</h2>
        </Link>
        <Link className="activity-link selected" to={"/activity/6"}>
          <h2>Yoga</h2>
        </Link>
        <Link className="activity-link" to={"/activity/6"}>
          <h2>Promenad</h2>
        </Link>
        <Link className="activity-link" to={"/activity/6"}>
          <h2>Pingis</h2>
        </Link>
        <Link className="activity-link" to={"/activity/6"}>
          <h2>Padel</h2>
        </Link>
      </div>
      <div className="activityDetailsPage-box">
        <ActivityDetailsPage />
      </div>
    </div>
  );
};

export default ActivityPage;
