// + Import CSS.
import styles from "./ChartBar.module.css";

function ChartBar(props) {
  // set initial bar height as string - and in % according to CSS.
  let barHeight = "0%";

  if (props.value > 0) {
    // Calculate bar height with respect to expenditure.
    barHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barHeight }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
}

export default ChartBar;
