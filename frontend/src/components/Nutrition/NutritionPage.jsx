import "../Nutrition/Nutrition.css";

export default function NutritionPage() {
  return (
    <div className="n">
      <h1>Nutrition</h1>
      <div className="content">
        <div className="top">
          <h2>Overview</h2>
          <button className="left" id="turq">
            <a href="/nutrition/add">Add Nutrition</a>
          </button>
        </div>
        <div className="sumStat" id="turqb">
          <p id="larger">Nutrition stats</p>
        </div>
      </div>
    </div>
  );
}
//reroute here
console.log("nutrition page");
