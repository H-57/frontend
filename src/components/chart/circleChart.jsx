"use client"
import ReactApexChart from 'react-apexcharts';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../../store/slices/circleDataSlice"

const ApexChart = () => {

  const topicLength=(topic)=>{
    let topicArray = data.filter((el) => el.topic == topic).length;
return topicArray
  }
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData());
    
  },[])
  const {data,status}=useSelector((state) => state.circleData)
  if(status==="loading"){
    return(
      <>
      <h1>"loading"</h1>
      </>
    )
  }
  if(data){
    

   

    


  const series = [topicLength("export"),topicLength("consumption"),topicLength("market"),topicLength("gdp")];
  const options = {
  
    chart: {
      
      foreColor:"white",
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return series.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
              }, 0)
            },
          },
        },
      },
    },
    labels: ['export','consumption','market','gdp',],
  };

  return (
    <div className="flex justify-center items-center   bg-transparent ">
      <div id="chart">
        <ReactApexChart options={options} series={series} type="radialBar" height={350} />
      </div>
    </div>
  );
}
};

export default ApexChart;
