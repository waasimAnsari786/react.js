import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CovidData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/country-report-iso-based/Pakistan/pak',
          {
            headers: {
              'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY',
              'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com',
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>COVID-19 Data for Pakistan</h1>
      <p>Confirmed Cases: {data[0].TotalCases}</p>
      <p>Deaths: {data[0].TotalDeaths}</p>
      <p>Recovered: {data[0].TotalRecovered}</p>
      <p>Active Cases: {data[0].ActiveCases}</p>
      <p>Serious Critical: {data[0].Serious_Critical}</p>
    </div>
  );
};

export default CovidData;