import "../Activity/Activity.css";
//make thing where it shows login page if not logged in
export default function Activity() {
  return (
    <div className="content">
      <div className="top">
        <h1>Activity Feed</h1>
        <button id="orange">Add Exercise</button>
        <button id="purombre"> Log Sleep</button>
        <button id="turq"> Record Nutrition</button>
      </div>
      <div>
        <div className="stats">
          {/* block 1*/}
          <div className="sumStat" id="orangeb">
            <p>Total Exercise Minutes</p>
          </div>
          {/* block 2*/}
          <div className="sumStat" id="purombreb">
            <p>Avg Sleep Hours</p>
          </div>
          {/* block 3*/}
          <div className="sumStat" id="turqb">
            <p>Avg Daily Calories</p>
          </div>
        </div>
        {/* content block line 3 */}
        <h2>More stats</h2>
        <div className="mas">
          <div className="smolStat" id="turqb">
            {/*ombre this */}
            <p>Maximum Hourly Calories</p>
          </div>
          <div className="smolStat red">
            <p>Avg Exercise Intensity</p>
          </div>
          <div className="smolStat brightred">
            <p>Total Hours Slept</p>
          </div>
        </div>
      </div>
      {/* end main content block */}
    </div>
  );
}
