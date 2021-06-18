// + Import CSS
import "./Chart.css";

//+ Import components
import ChartBar from "./ChartBar";

function Chart(props) {
  // Calculate the highest expenditure in terms of mont.
  const chartDataValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...chartDataValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
