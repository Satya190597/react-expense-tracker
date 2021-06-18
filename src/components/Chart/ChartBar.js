// + Import CSS.
import "./ChartBar.css";

function ChartBar(props) {
  // set initial bar height as string - and in % according to CSS.
  let barHeight = "0%";

  if (props.value > 0) {
    // Calculate bar height with respect to expenditure.
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner ">
        <div className="chart-bar__fill" style={{ height: barHeight }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
