import { Link } from "react-router-dom";

const ActivityPage = () => {
  return (
    <>
      <h1>Activitys</h1>
      <Link to={"/activity/6"}>Yoga</Link>
    </>
  );
};

export default ActivityPage;
