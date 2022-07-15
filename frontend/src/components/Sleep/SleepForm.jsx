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
        <div class="addSleep">
          <h2>Add Sleep</h2>
          <div class="form">
            <div>
              <label for="startTime">Start Time</label>
              <input type="datetime-local" name="startTime" value=""></input>
            </div>
            <div class>
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
