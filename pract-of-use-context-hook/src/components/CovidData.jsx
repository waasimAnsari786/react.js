import React, { useEffect, useState } from "react";

export default function CovidData() {
  const [showData, setShowData] = useState([]);
  const fetchData = async () => {
    const URL = "https://covid-19.dataflowkit.com/v1";
    const response = await fetch(URL);
    const JData = await response.json();
    setShowData(JData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return(
    <>
    <table>
      <thead>
        <tr>
          <td>country</td>
          <td>total cases</td>
          <td>total death</td>
          <td>total recovered</td>
        </tr>
      </thead>

      <tbody>
      {showData.map((curElem , i) => {
        return(
          <tr key={i} className="my-row">
          <td>{curElem.Country_text}</td>
          <td className="total-cases">{curElem["Total Cases_text"]}</td>
          <td className="total-death">{curElem["Total Deaths_text"]}</td>
          <td className="total-recovered">{curElem["Total Recovered_text"]}</td>
        </tr>
        )
      })}
      </tbody>
    </table>
    </>
  )
}