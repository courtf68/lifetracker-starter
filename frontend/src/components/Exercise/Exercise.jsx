import "../Exercise/Exercise.css";
// import "../Activity/Activity.css";

export default function Exercise() {
  return (
    <div className="e">
      <h1> Exercise</h1>

      <div className="content">
        <div className="top">
          <h2>Overview</h2>
          <button className="left" id="orange">
            Add Exercise
          </button>
        </div>
      </div>
    </div>
  );
}
