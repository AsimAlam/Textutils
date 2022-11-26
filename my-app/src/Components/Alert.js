import React from 'react'

function Alert(probs) {
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    <div style ={{height : '50px'}}>
    {probs.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>{capitalize(probs.alert.type)}</strong>: {probs.alert.msg}
    </div>}
    </div>
  )
}

export default Alert
