import React from "react";
import "./GamesTable.css";
import axios from "axios";

const Table = ({library}) => {


    return (
        <table>
            <tbody>
                <tr className="heads">
                    <th>Name</th>
                </tr>
                {library.slice(0,500).map((i)=> (
                <tr key={i.id}>
                    <td>{i.name}</td>
                    <td>{i.genre}</td>
                    <td>{i.year}</td>
                    <td><button>SEE DETAILS</button></td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;