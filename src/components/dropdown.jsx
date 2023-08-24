

function dropdown({filter}) {
  let countries=['United States of America','Russia','Saudi Arabia','Egypt','South Africa','Niger','Brazil','Indonesia','Iraq','Iran','Germany','China','United Kingdom','Canada','Libya','Argentina','Mexico','Nigeria','Hungary','Australia','Morocco','India','Japan','Qatar','Lebanon','Ukraine','Jordan','Colombia','Norway','Oman','Ghana','United Arab Emirates','Venezuela']



  return (
    <>
    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose a country</label>
<select id="countries" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected onClick={filter} value={"all"} >All Country</option>
    {
      countries.map((elem)=>
        <option onClick={filter} key={elem} >{elem}</option>

      )
    }
       

</select>
    </>
  )
}

export default dropdown