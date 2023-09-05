import { createContext, useContext, useEffect, useState } from "react";


//create context
const DeviceWidthContext = createContext()

//create custom hook for use

export const useDeviceWidth = ()=>useContext(DeviceWidthContext)


//create provider

export const DeviceWidthProvider = ({children})=>{
    const [isSmall, setIsSmall] = useState((window.innerWidth < '768' ? true: false));

    // Function to update the width when the window is resized
    const handleResize = () => {
        setIsSmall((window.innerWidth < '768' ? true: false));
    };
  
    // Add an event listener to update the width on window resize
    useEffect(() => {
      window.addEventListener('resize', handleResize);
  
      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <DeviceWidthContext.Provider value={ isSmall }>
          {children}
        </DeviceWidthContext.Provider>
    )
}