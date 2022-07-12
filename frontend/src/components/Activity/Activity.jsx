import "../Activity/Activity.css";
//make thing where it shows login page if not logged in
export default function Activity() {
  return (
    <div>
      <div className="top">
        <h1>Activity Feed</h1>
        <button id="orange">Add Exercise</button>
        <button id="purombre"> Log Sleep</button>
        <button id="turq"> Record Nutrition</button>
      </div>
      <div>
        <h2>More stats</h2>
      </div>
    </div>
  );
}
