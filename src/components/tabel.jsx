"use client"

import TabelBody from "./tabelBody"
import TabelFilters from "./tabelFilters"

// import api functions
import {fetchData,fetchBYRelevanceData,fetchBYIntensityData,fetchBYCountryData,fetchBYEndYearData,fetchBYTopicData,fetchBYSectorData,fetchBYRegionData,fetchBYSourceData} from "../store/slices/tabelDataSlice"

import { useDispatch } from "react-redux"
import { useEffect } from "react"

const country=[ 'United States of America','Russia','Saudi Arabia','Egypt','South Africa','Niger','Brazil','Indonesia','Iraq','Iran','Germany','China','United Kingdom','Canada','Libya','Argentina','Mexico','Nigeria','Hungary','Australia','Morocco','India','Japan','Qatar','Lebanon','Ukraine','Jordan','Colombia','Norway','Oman','Ghana','United Arab Emirates','Venezuela']
const Sector=['Energy','Environment','Government','Aerospace & defence','Manufacturing','Retail','Financial services','Support services','Information Technology','Healthcare','Food & agriculture','Automotive','Tourism & hospitality','Construction','Security','Transport','Water','Media & entertainment']
const region=[  'Northern America','Central America','World','Western Africa','Western Asia','Eastern Europe','Central Africa','Northern Africa','Southern Africa','Southern Asia','Central Asia','Eastern Asia','South America','South-Eastern Asia','Eastern Africa','Europe','Western Europe','Northern Europe','Southern Europe','Oceania','Africa','Asia','world']
const topic=[  'gas','oil','consumption','market','gdp','war','production','export','battery','biofuel','policy','economy','strategy','robot','growth','economic','energy','food','administration','unemployment','trade','demand','economic growth','industry','capital','worker','tension','terrorism','transport','peak oil','vehicle','tourist','artificial intelligence','climate','power','crisis','ice','population','politics','business','work','coal','gamification','finance','interest rate','risk','inflation','asylum','resource','plastic','electricity','bank','gasoline','car','money','technology','aquaculture','city','investment','revenue','emission','climate change','infrastructure','government','security','software','building','transportation','wealth','clothing','shortage','debt','agriculture','tax','carbon','brexit','workforce','change','automaker','nuclear','3D','water','data','fossil fuel','election','greenhouse gas','information','shale gas','factory','farm','communication','storm','consumer','material','Washington','pollution','fracking']
const relevance=[2, 3, 5, 4, 6, 7, 1]
const Intensity=[ 6,60,16,4,12,9,8,24,72,18,20,2,40,32,14,10,48,3,96,1,30,36,15]
const endYear=[2027,2018,2025,2040,2200,2019,2020,2022,2017,2024,2021,2026,2030,2046,2126,2050,2041,2035,2016,2055,2028,2036,2060,2034,2051]
const source=['EIA','sustainablebrands.com','SBWire','CleanTechnica','TRAC News','Vanguard News','Avi Melamed','WSJ','Abq','Reuters','Star Tribune','EV Obsession','creamermedia','Resilience','TheNews.NG','FashionNetwork.com','Bloomberg Business','Yes Bank','EGYPS','marketrealist','PDQFX news','therobotreport','nextbigfuture','World Bank','Zero Hedge','Rigzone','International Business Times','DOE EIA 2013 Energy Conference','AllAfrica','Energy.gov Website','AMERICAN COUNCIL ON SCIENCE AND HEALTH','The Jakarta Post','Wharton','African Arguments','Business Insider','Convenience Store Decisions','The Next Web','Cii Radio','Global Money Trends','Guardian Sustainable Business','OklahomaMinerals.com','4th Annual Congress and Expo on Biofuels and Bioenergy April 27-28 2017 Dubai UAE',       'FX Empire','Nexus Conference','Fews Net','Sputnik News','platts','CBO','The Chirographer','THE LEAGUE OF WOMEN VOTERS® OF THE FAIRFAX AREA','Yahoo Finance Canada','Gii Research','South Sudan News Agency','Climate Change News','the star online','khorreports-palmoil','Canadian Biomass','Informed Choice Chartered Financial Planners in Cranleigh','Guarini Center','OMFIF','South World','World Energy News','Slinking Toward Retirement','unian','Scientific American','Time','Transport Environment','Triple Pundit','Transport Evolved','Fox Business','','The Independent','Biofuels Digest','IRENA newsroom','Nation of Change','Middle East Eye','IEA','Gas 2','Peak Prosperity','Business Wire','RiskMap 2017','MRC','Insurance Journal','Wired UK','Technavio','News','Media Center ','EY','Tactical Investor','Seeking Alpha','iMFdirect - The IMF Blog','oilprice.com','Eurasia Group','NY Times','Imeche','University of Chicago','Adam Curry','JD Supra','UK Government','Investopedia','Vox','South China Morning Post','OEM/Lube News','PR Newswire','Future Market Insights','Manufacturing Operations Technology Viewpoints','CSIS','Edge and Odds','maltawinds.com','iamericas','cpzulia','farms','Le·gal In·sur·rec·tion','IFT','International Banker','bankofcanada','Koenig Investment Advisory','Europa','Jachin Capital','Wells Fargo','ethicalconsumer','Citibank','Cornell University','arabellaadvisors','Critical Threats','Fitch','prsync','Physics World','Renewable Energy World','BBC News Technology','edie.net','Russia Beyond The Headlines','Politico','Tech Times','Wood McKenzie','3D Printing Progress','ihsmarkit','Gizmodo Australia','The Nation','Farms.com','McKinsey & Company','The Guardian','Resources for the Future','satprnews','GreenBiz','CNBC ','Sydney Morning Herald','www.narendramodi.in','CNNMoney','EIU','Euromoney','gasstrategies','Cars.co.za','dpaq','europeanclimate','Australian Government','TeleTrade','Bloomberg New Energy Finance','The Economist','Phys Org','djsresearch','nbk','Guardian','cargill','Worldly','Utility Dive','newscientist','westpandi','IASTOPPERS','THISDAY LIVE','veteranstoday','thespanisheconomy','biologicaldiversity','portfolioticker','MIT Technology Review','FoodQualityNews.com','The Conversation','World Bank Group','TheCable','Future Earth','Carbon Brief','Wikipedia','NWF','USDA','energyglobal','IEA.org','PwC','metalprices','GE Reports','Project Syndicate','Interior Design','idc-community','Science Daily','The Mainichi','economy','Drill or drop?','Huffington Post','Lawfare','Futureseek Link Digest','Environmental Leader','Business Standard','ESPAS','Euler Hermes','amundi','ebrd','Drydock Magazine','BorneoPost Online','Finance Magnates','friday-thinking','Newsweek','ECFR','University of Latvia','Future Timeline','allianzglobalinvestors','controleng','inputsmonitor','Planetsave ','agriworldsa','globalmoneytrends','Oxfam','Gartner','clientadvisoryservices','IMF','Eco-Business.com','Channel News Asia','War on the Rocks','biomassmagazine','Think Progress','No 2 Nuclear Power','ogauthority','IBEF','Prospects for Development','Engineering News','NDTV','African Development Bank','Aljazeera.com','worldenergy','cloudfront','Zawya','FAO','VOA','Hospitality Trends','saltlakecityheadlines','The Ticker Tape','The Globe and Mail','AgWeb - The Home Page of Agriculture','CAFrackFacts','jeita','murc','Fast Co-Exist','Cushman & Wakefield Blog','Science News','Quartz','Total','globalizationpartners','Washington Post','Inside Climate News','polymerspaintcolourjournal','njc-cnm','IISS','The Atlantic','Innovations Report','Nature','Cushman & Wakefield','Maplecroft','Predictive Analytics Times','McKinsey Quarterly','Countries.com Global Content','The Market Mogul','knomad','UNESCO ','GlobalMeatNews.com','Motor Magazine','MENA-Forum','Blue and Green Tomorrow','valburyresearch','HBR','Nanotechnology Innovation','oilvoice','ecesr','Freedonia','ethicalmarkets','Climate News Network','OPEC','INSEAD Knowledge','CIO','Institutional Investor','Society of Motor Manufacturers and Traders (SMMT)','worldculturepictorial','globalfueleconomy','LiveMint','g7g20','Mast','ReadWrite','LNG','European Central Bank','Industrial Control Security','Verisk Maplecroft','ETEnergyworld.com','briandcolwell','DW.COM','Elsevier','MAPI','Days Of Year','Virgin Atlantic','Government of Ireland','The Engineer','ISA','Energy Tomorrow','Justmeans','Khaleej Times','Innovaro','FutureinFocus',"What's Next",'Stanford News','Middle East Online','Neon Nettle','Handelsblatt Global Edition','EE News',"Before It's News | Alternative News | UFO | Beyond Science | True News| Prophecy News | People Powered News",'aswm','Shenandoah','Digitalist Magazine','EPA','Azonano','National Geographic Society (blogs)','IER','Ocean Acidification','Smart Grid Observer','Freenewspos','AHDB','SlideShare','VITA Technologies','Wall Street Daily','Bearnobull','CCN: Financial Bitcoin & Cryptocurrency News','IRENA','International Monetary Fund (IMF)','Arangkada Philippines','Global Information Inc','ID TECH INDEX','The Jamestown Foundation','savepassamaquoddybay','atradius','dailyquiddity','bankofengland','Futurity','Business Green','About Best Binary Options Strategy','IHS Engineering 360','European Council','Activist Post','Newsletter','U.S. Environmental Protection Agency','Global Money Trends Magazine','CAJ News Africa','Planetizen','CDC','Strategy & Formerly Booz & Company','PriceWaterhouseCoopers','News.com','Brookings Institute','Innovate UK','The Arab Gulf States Institute Washington','Embedded Computing Design','European Environment Agency','Industry Week','Atlantic Council ','U.K. Ministry of Defense','Future in Focus','Australian Government Department of Defence','MIT Sloan Management Review','Scania Group','watercanada','Common Dreams','theicct','nbp','Thomson Reuters ','University Chronicle','globalr2p','Robothub','New Security Beat','betterenergy','Real Estate Professional','Mind Commerce','Yahoo Finance','Pickens Plan','RUSI','Hardin Tibbs','World Health','environmentalpeacebuilding','greenerearthnews','conferenceseries','dailytexanonline','EPS News','The American Prospect','Face2face Africa','Oil and Gas Journal','Infracircle','uschamber','energy news cyprus','UNEP','Foreign Policy','Europe in My Region']



function tabel() {
const dispatch=useDispatch()

useEffect(()=>{
dispatch(fetchData())
},[])

const filterByCountry=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYCountryData(value))
}
const filterByEndYear=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYEndYearData(value))
}
const filterByTopic=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYTopicData(value))
}
const filterBySector=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYSectorData(value))
}
const filterByRegion=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYRegionData(value))
}
const filterBySource=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYSourceData(value))
}
const filterByRelevance=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYRelevanceData(value))
}
const filterByIntensity=(e)=>{
  let value=e.target.getAttribute('data-value')
  dispatch(fetchBYIntensityData(value))
}


  return (
    <>
  <section className="  p-3 sm:p-5">
  <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
    {/* Start coding here */}
    <div className=" relative shadow-md sm:rounded-lg overflow-hidden">
     
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 
        dark:text-gray-400">
           

          





          
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
         
            <tr>
              <th scope="col" className="px-4 py-3">Sector<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg>  <TabelFilters values={Sector} filter={filterBySector}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">Region<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg>
  <TabelFilters values={region} filter={filterByRegion}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">Topic<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={topic} filter={filterByTopic}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">Relevance<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={relevance} filter={filterByRelevance}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">country<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={country} filter={filterByCountry}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">source<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={source} filter={filterBySource}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">Intensity<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={Intensity.sort()} filter={filterByIntensity}></TabelFilters></th>
              <th scope="col" className="px-4 py-3">End Year<svg className="w-3 h-3 ml-1.5 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z"/>
  </svg> <TabelFilters values={endYear.sort()} filter={filterByEndYear}></TabelFilters></th>
            </tr>

          </thead>
          <TabelBody></TabelBody>
        </table>
      </div>

    </div>
  </div>
</section>

    </>
  )
}

export default tabel