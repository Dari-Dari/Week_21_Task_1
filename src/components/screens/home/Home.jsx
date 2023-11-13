import styles from "./Home.module.css";
import { Chart } from "react-google-charts";
import { data } from "./home.data";
import { options } from "./home.data";

function Home() {
  return (
    <div>
      <h1>Week 21 Practical task </h1>
      <div>
        <div className={styles.item}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
