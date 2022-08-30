import React, { useState } from 'react';
import { Chart } from "react-google-charts";
import './GlobalData.css'
    const GlobalData = ({library}) => {

        function generateColumnChart(){
            let filtered = library.filter(game => game.year >= 2013) 
            let platforms = filtered.map(game => {
                return game.platform})
            let nodup = [...new Set(platforms)]
            let eachplatarr = nodup.map(p => {
                let pgames = filtered.filter(game => game.platform == p) 
                let globalsales = 0       
                for (let i = 0; i < pgames.length; i++) {
                    globalsales += pgames[i].globalsales}
            return [p, globalsales, 'stroke-color: #703593; stroke-width: 4; fill-color: #111']})
                
            const data = [
                ["Platform","Sales In $M", { role: "style" }],
                ...eachplatarr]

        return data;}

        function generatePieChart(){
            let filtered = library.filter(game => game.year >= 2013) 
            let genres = filtered.map(g => {
                return g.genre})
            let nodup = [...new Set(genres)]
            let eachgenrearr = nodup.map(g => {
                let ggames = filtered.filter(game => game.genre == g)
                let globalsales = 0;
                for (let i = 0; i < ggames.length; i++) {
                    globalsales += ggames[i].globalsales}
            return [g, globalsales]})

            const data = [
                ["Genre","Sales In $M"],
                ...eachgenrearr]

        return data;}

            const chartoptions = {
                title: "Best Gaming Console To Invest in, Based On Game Copies Sold During 2013-2016",
                subtitle: "in millions of dollars (USD)"
            }

            const pieoptions = {
                title: "Best Gaming Genres To Play, Based On Genre Copies Sold During 2013-2016",
                is3D: true,
              };

    return (
        <div className='charts'>
            <div className='column'>
                <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={generateColumnChart()}
                options={chartoptions}
                />
            </div>
            <div className='pie'>
            <Chart
                chartType="PieChart"
                data={generatePieChart()}
                options={pieoptions}
                width={"100%"}
                height={"400px"}
            />
            </div>
        </div>
        );
    }
 
export default GlobalData;