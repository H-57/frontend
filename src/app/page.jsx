"use client"
// imports chart and tabel components
import PiChart from "../components/chart/pichart"

import GeoChart from "../components/chart/geoChart"
import CircleChart from "../components/chart/circleChart"
import BarGraph from "../components/chart/barGraph"
import Tabel from "../components/tabel" 


// imports layout elements 
import Navbar from"../components/navbar"
import Card from "../components/card"
import Dropdown from "../components/dropdown"

// imports hooks and reducers
import { useEffect } from "react"
import {fetchData} from "../store/slices/dataSlice"
import { useDispatch } from "react-redux";
import {fetchPICountryData} from "../store/slices/piDataSlice"
import {fetchBarCountryData} from "../store/slices/barDataSlice"
import {fetchCircleCountryData} from "../store/slices/circleDataSlice"

function page() {
  const dispatch=useDispatch()
  
  const piFilter=(e)=>{
    dispatch(fetchPICountryData(e.target.value))
 
  }
  const barChartFilter=(e)=>{
    dispatch(fetchBarCountryData(e.target.value))
 
  }
  const circleChartFilter=(e)=>{
    dispatch(fetchCircleCountryData(e.target.value))
 
  }
    
  

  useEffect(()=>{
    dispatch(fetchData());
    
  },[])
 
  return (
    <>
    <Navbar />
    <div className="container flex  flex-wrap ">

    <Card width={45} title={"Sectors"}>
 <Dropdown  filter={piFilter}></Dropdown>
    <PiChart className="text-slate-100"></PiChart>
    </Card>

    <Card width={45} title={"Energy"}>
    <Dropdown filter={barChartFilter} ></Dropdown>
      <BarGraph></BarGraph>
    </Card>

    <Card width={30} title={"Topics"}>
    <Dropdown filter={circleChartFilter} ></Dropdown>
<CircleChart></CircleChart>
    </Card>

    <Card width={60} title={"Country Ratio"}>
    
<GeoChart></GeoChart>
</Card>
</div>

<Tabel></Tabel>
    </>
  )
}

export default page