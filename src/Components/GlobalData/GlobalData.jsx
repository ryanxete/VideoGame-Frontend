import React, { useState } from 'react';
import { Chart } from "react-google-charts";
  
    const GlobalData = ({library}) => {

        function generateDataFormChart(){
            // console.log(library);

            let filtered = library.filter(game => game.year >= 2013) 
            // console.log("filterred: ", filtered)

            let platforms = filtered.map(game => {
                return game.platform})
            let nodup = [...new Set(platforms)]
            
            let eachplatarr = nodup.map(p => {

            let pgames = filtered.filter(game => game.platform == p) 
            let globalsales = 0       
                for (let i = 0; i < pgames.length; i++) {
                    globalsales += pgames[i].globalsales}
                        
                

                return [p, globalsales, 'stroke-color: #703593; stroke-width: 4; fill-color: #111']})
                
                // console.log(eachplatarr)


            // const data = [
            //     [...eachplat],
            //     ["2013", 37.8, 70.8, 22, 33,13, 37.8, 70.8, 45, 33, 43],
            //     ["2014", 37.8, 50.8, 22, 33,13, 47.8, 40.8, 22, 33,23],
            //     ["2015", 37.8, 30.8, 22, 33,13, 37.8, 60.8, 22, 43,23],
            //     ["2016", 37.8, 30.8, 22, 33,13, 37.8, 67.8, 22, 43,23]

            // ];

            const data = [
                ["Platform","Sales In $M", { role: "style" }],
                ...eachplatarr
                ]

            return data;
        }

        const options = {
                title: "Best Gaming Console To Invest, Based On Game Copies Sold During 2013-2016",
                subtitle: "in millions of dollars (USD)"
            }

        

    return (
        // <div>
        //     <Chart
        //     chartType="Line"
        //     width="95%"
        //     height="423px"
        //     data={generateDataFormChart()}
        //     options={options}
        //     />
        // </div>
        <div>
            <Chart
            chartType="ColumnChart"
            width="100%"
            height="400px"
            data={generateDataFormChart()}
            options={options}
            />
        </div>
        );
    }
 
export default GlobalData;