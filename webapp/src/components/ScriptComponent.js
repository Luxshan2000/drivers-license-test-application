import React from 'react'

function ScriptComponent({data}) {
  return (
    <div className=' pt-2 m-0 rounded-2 mx-auto border border-1 col-12 col-md-10 col-lg-10  text-start'   >
      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  )
}

export default ScriptComponent