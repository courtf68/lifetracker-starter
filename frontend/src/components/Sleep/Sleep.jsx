import "../Sleep/Sleep.css";

export default function Sleep() {
  return (
    <div className="s">
      <h1> Sleep</h1>
      <div className="content">
        <div className="top">
          <h2>Overview</h2>
          <button className="left" id="purombre">
            <a href="/sleep/add">Add Sleep</a>
          </button>
        </div>
        <div className="sumStat" id="purombreb">
          <p id="larger">Sleep time</p>
        </div>
      </div>
    </div>
  );
}
