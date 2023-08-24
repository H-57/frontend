
"use client"

import {  useSelector } from "react-redux";
import { useState } from "react";

function tabelBody () {
  const [tableRow, settableRow] = useState(50)
  let tabelData 
  const {data,status}=useSelector((state) => state.tabelData)

  
 
  if(!data){
    return(<>
    <h1>no data</h1>
    </>)
  }
 
  if(status==="loading"){
    return(
      <>
      <h1>"loading"</h1>
      </>
    )
  }


  if (status==="idle") {
    tabelData =(data.slice(0, tableRow));
   
  }

// data.slice(0, 100)




  return (
  <>
  <tbody>
  
         { tabelData.map(((elem,index)=>(
          <tr key={index}  className="border-b dark:border-gray-700">
              <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{elem.sector}</th>
              <td className="px-4 py-3">{elem.region}</td>
              <td className="px-4 py-3">{elem.topic}</td>
              <td className="px-4 py-3 w-60">{elem.relevance}</td>
              <td className="px-4 py-3">{elem.country}</td>
              <td className="px-4 py-3">{elem.source}</td>
              <td className="px-4 py-3">
 <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
  <div className={` text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full ${elem.intensity<10?"bg-red-600":elem.intensity<30?"bg-yellow-600":elem.intensity>60?"bg-green-600":"bg-blue-600"}`} style={{width: `${elem.intensity}%`}}> {elem.intensity}%</div>
</div>

</td>
              <td className="px-4 py-3">{elem.end_year?elem.end_year:"null"}</td>
              
            </tr>

         )))
          
}
           
          </tbody>
          <button type="button" className=" text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={()=>settableRow(tableRow+10)}>More Rows</button>
  </>
  )

}

export default tabelBody