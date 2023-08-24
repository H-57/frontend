"use client"
import { useEffect } from "react";
import Chart from "react-apexcharts";
import { useDispatch, useSelector } from "react-redux";
import {fetchData} from "../../store/slices/piDataSlice"


function App () {
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchData());
    
  },[])
  const {data,status}=useSelector((state) => state.piData)



  if(status==="loading"){
    return(
      <>
      <h1>"loading"</h1>
      </>
    )
  }
  if (data){
    const sectorCounts = data.reduce((accumulator, currentObject) => {
      const sector = currentObject.sector;
      accumulator[sector] = (accumulator[sector] || 0) + 1;
      return accumulator;
    }, {});
    
    // console.log(sectorCounts);
    
  
    let sectorData= [...new Set(data.map(item =>(item.sector=="")?"null": item.sector))]
 
   const   options= {
    chart:{

      foreColor:"white",
    },

    labels: sectorData,
      }
   const   series= Object.values(sectorCounts)


    



    return (
      
        
       
            <Chart
              options={options}
              series={series}
              label="true"
              type="donut"
              width="500"
            />
         
    );
  
}
}

export default App;