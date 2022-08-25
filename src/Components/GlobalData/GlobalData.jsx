import React, { useState } from 'react';
import { Chart } from "react-google-charts";

// import 'GlobalData.css';

const GlobalData = (props) => {

    const [library, setLibrary] = useState([])

    const fetchGames = async () => {
        let respose = await axios.get("http://localhost:8080/all")
        setLibrary(respose.data);
        console.log("Games: ", respose.data)
    }

    // const data = [
    //     ["Year", "Sales", "Expenses"],
    //     ["2013", 1000, 400],
    //     ["2014", 1170, 460],
    //     ["2015", 660, 1120],
    //     ["2016", 1030, 540],
    // ];

    // const options = {
    //     title: "Company Performance",
    //     hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    //     vAxis: { minValue: 0 },
    //     chartArea: { width: "50%", height: "70%" },
    // };

    return ( <div>
    {/* export function App() {
            <Chart
            chartType="AreaChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            /> */}
    </div>
    
);
        }
 
export default GlobalData;