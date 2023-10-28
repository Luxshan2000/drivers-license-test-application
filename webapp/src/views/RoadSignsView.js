import React, { useEffect, useState } from 'react'
import CardComponent from '../components/CardComponent'
import FrameComponent from '../components/FrameComponent'

function RoadSignsView() {
    const [sings, setSigns] = useState([])

    const [filter, setFilter] = useState("All")
    const [tags, setTags] = useState(["All", "Prohibitory signs", "Mandatory signs" ])

    useEffect(()=>{
        const temp = [
            //Prohibitory signs
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/e/ee/LK_road_sign_PHS-01.svg",
                name:"No entry",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/4/44/LK_road_sign_PHS-10.svg",
                name:"All vehicles prohibited",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/2/26/Vienna_Convention_road_sign_C3a-V1-1.svg",
                name:"No motor vehicles, except motorcycles",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/3/33/Vienna_Convention_road_sign_C3e-V1-1.svg",
                name:"No trucks",
                tag:"Prohibitory signs"
            },
            
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Vienna_Convention_road_sign_C3f-V1-1.svg",
                name:"No trailers",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/0/03/Vienna_Convention_road_sign_C11a-V1.svg",
                name:"No left turn",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/e/ed/LK_road_sign_PHS-23.svg",
                name:"No parking",
                tag:"Prohibitory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/1/12/Vienna_Convention_road_sign_D1b-V1-1.svg",
                name:"Proceed straight",
                tag:"Mandatory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/c/c5/Vienna_Convention_road_sign_D1b-V4-1.svg",
                name:"Turn left ahead",
                tag:"Mandatory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/1/16/Vienna_Convention_road_sign_D1b-V5-1.svg",
                name:"Turn right ahead",
                tag:"Mandatory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/d/d6/Vienna_Convention_road_sign_D1b-V2-1.svg",
                name:"Turn left",
                tag:"Mandatory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/0/02/Vienna_Convention_road_sign_D1b-V3-1.svg",
                name:"Turn right",
                tag:"Mandatory signs"
            },
            {
                url:"https://upload.wikimedia.org/wikipedia/commons/a/a0/Vienna_Convention_road_sign_D1b-V6-1.svg",
                name:"Proceed straight or turn left",
                tag:"Mandatory signs"
            },

        ]

        setSigns(temp)
    },[])

  return (
    <FrameComponent>
        <div>
            <h3 className=' text-center'>RoadSigns in Sri Lanka</h3>
            <div className=' m-3' style={{display:'flex', justifyContent:'center', gap:'5px', flexWrap:'wrap'}} >
                {tags.map((item)=>(<span onClick={()=> setFilter(item) } className={`badge bg-success p-2 px-5 ${filter===item ? 'text-dark':""}`} style={{flex:"0 0 auto", cursor:"pointer"}}>{item}</span>))}
                
            </div>
            <div style={{display:'flex', justifyContent:'space-between', gap:'5px', flexWrap:'wrap'}}>
                    { sings.map((item)=><CardComponent key={item.name} url={item.url} name={item.name} tag={item.tag} filter={filter} />)}
            </div>
        </div>
    </FrameComponent>
    
  )
}

export default RoadSignsView
