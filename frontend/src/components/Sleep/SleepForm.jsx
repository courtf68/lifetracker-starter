import "../Sleep/Sleep.css";
import Sleep from "./Sleep";

export default function SleepForm() {
  return (
    <div className="s">
      <h1> Sleep</h1>
      <div className="content">
        <div className="top">
          <h2>Overview</h2>
        </div>
        <div className="addSleep">
          <h2>Add Sleep</h2>
          <div className="form">
            <div className="InputField">
              <label for="startTime">Start Time</label>
              <input type="datetime-local" name="startTime" value=""></input>
            </div>
            <div className="InputField">
              <label for="endTime">End Time</label>
              <input type="datetime-local" name="endTime" value=""></input>
            </div>
            <button id="purombreb">
              <a href="/sleep">Save</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
