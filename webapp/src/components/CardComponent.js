import React from 'react'

function CardComponent({url, name, tag, filter}) {
    if(filter === tag || filter==="All"){
        return (
    <div className="card hover-effect" style={{width: "18rem",flex:"0 0 auto"}}>
        <div className=' w-100 text-center p-2 pb-0'>
            <img style={{width:'150px', height:'auto'}}  src={url} className="card-img-top" alt={name}/>
        </div>
        <div className="card-body">
            <p className="card-text w-100 text-center text-dark">{name}</p>
        </div>
    </div>
  )
    }
    else{
        return ;
    }
  
}

export default CardComponent
