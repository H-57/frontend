"use client"
import ReactApexChart from 'react-apexcharts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../../store/slices/barDataSlice"

const ApexChart = () => {

  const dispatch=useDispatch()
  let years =[2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024, 2025]

  useEffect(()=>{
    dispatch(fetchData());
    
  },[])
  const {data,status}=useSelector((state) => state.barData)
  if(status==="loading"){
    return(
      <>
      <h1>"loading"</h1>
      </>
    )
  }
  if(data){
    let GasArray = years.map((year)=>data.filter((el) => el.topic == "gas" && el.end_year<=year).length);

    let OilArray = years.map((year)=>data.filter((el) => el.topic == "oil" && el.end_year<=year).length);

    let MarketArray = years.map((year)=>data.filter((el) => el.topic == "market" && el.end_year<=year).length);
    // console.log(GasArray)
  
 
  const state = {

    series: [
      {
        name: 'Gas',
        data: GasArray,
      },
      {
        name: 'Oil',
        data: OilArray,
      },
      {
        name:'Market',
        data: MarketArray,
      },
    ],
    options: {
  
      chart: {
        type: 'bar',
        height: 350,
        
        foreColor:"white"
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        style: {
         
          colors: ['white'],
        }
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2024, 2025],
      },
      yaxis: {
        title: {
          text: ' Topics',
        },
      },
     
      tooltip: {
        theme:"dark",
        style: {
          fontSize: '12px',
          
        },
        
        y: {
          formatter: (val) => ` ${val} topics`,
        },
      },
     
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="bar" height={350} />
    </div>
  );
};
}
export default ApexChart;
