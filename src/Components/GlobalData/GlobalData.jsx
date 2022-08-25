import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import axios from 'axios';


    const GlobalData = (props) => {

        const options = {
            chart: {
                title: "Box Office Earnings in First Two Weeks of Opening",
                subtitle: "in millions of dollars (USD)",
            },
            };

        console.log(props)

    return (
        <div>
            <Chart
            chartType="Line"
            width="85%"
            height="423px"
            data={props.name}
            options={options}
            />
        </div>
        );
    }
 
export default GlobalData;