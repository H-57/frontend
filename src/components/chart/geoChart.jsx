"use client"
import { Chart } from "react-google-charts";
import { useSelector } from "react-redux";

// export const data = [
//   ["Country", "points"],
//   ["Germany", 200],
//   ["United States", 300],
//   ["Brazil", 400],
//   ["Canada", 500],
//   ["France", 600],
//   ["Saudi Arabia", 700],
 
// ];

export default function App() {

  const {data}=useSelector((state)=>state.allData)
  if (data){
    const countryCounts = data.reduce((accumulator, currentObject) => {
      const country = currentObject.country;
      accumulator[country] = (accumulator[country] || 0) + 1;
      return accumulator;
    }, {});
   let CountryData=Object.entries(countryCounts)
   CountryData.unshift(["Country", "points"])

   CountryData=CountryData.filter(subArray => subArray.every(element => element !== ""));

    // console.log(CountryData)
  
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = CountryData[selection[0].row + 1];
            // console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={CountryData}
      options={{
        
          
        backgroundColor: '#f1f7f9',
     
        colors: ['tomato',"orange","skyblue"]
      }}
    />
  );
}
}
