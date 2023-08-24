import React from 'react';

const FilterCard = ({ children,width ,title}) => {
  const cardStyle = {
    backgroundColor: 'rgb(47, 51, 73)',
    border: '1px solid white',
    width:`${width}vw`
  };

  return (
   

  
    <div className=" h-fit text-white flex flex-col rounded-lg  overflow-y-hidden m-6 " style={cardStyle}>
      
        <h2 className="text-xl font-semibold mb-2 ml-3">{title}</h2>
        {/* Add your filter components here */}



      <div className=" p-4 flex-grow overflow-y-auto">
        {/* Add your main content here */}
        {children}
      </div>
    </div>
    
  );
};

export default FilterCard;
