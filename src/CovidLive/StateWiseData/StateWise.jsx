import React, { useEffect, useState } from "react";

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const currentData = await res.json();
    console.log(currentData.statewise);
    setData(currentData.statewise);
  };

  useEffect(() => {
    getCovidData();
  });
  return (
    <>
      <div>
        <h1 className="text-center">India Covid 19 Dashboard</h1>
        <table class="table">
          <thead class="thead-dark">
            <tr className="text-center">
              {/* <th scope="col">No.</th> */}
              <th scope="col">State</th>
              <th>Confirmed</th>
              <th>Recovered</th>
              <th>Deaths</th>
              <th>Active</th>
              <th>Upload</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currElem, idx) => {
              return (
                <tr className="text-center" key={idx}>
                  {/* <td scope="col">{currElem.currElem}</td> */}
                  <td scope="col">{currElem.state}</td>
                  <td>{currElem.confirmed}</td>
                  <td>{currElem.recovered}</td>
                  <td>{currElem.active}</td>
                  <td>{currElem.deaths}</td>
                  <td>{currElem.lastupdatedtime}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StateWise;
