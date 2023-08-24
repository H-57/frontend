

export async function  fetchAllData() {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
    


   
export async function  fetchCountryData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/country/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
   
export async function  fetchEndYearData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/end_year/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
   
export async function  fetchTopicData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/topic/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
   
export async function  fetchSectorData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/sector/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
   
export async function  fetchRegionData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/region/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
export async function  fetchSourceData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/Source/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
export async function  fetchRelevanceData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/relevance/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 
export async function  fetchIntensityData(name) {

    // TODO: change api urls
    try {
        const response= await(await fetch(`http://127.0.0.1:8080/filters/intensity/${name}`)).json()
    
    return await response
    } catch (error) {
        console.log(error,"api error")
    }
    
    
   } 



   
  

