import React from 'react'

function Input({ className, lable, ...props }: any) {
    return (
        <div className={className ? "input" + " " + className : "input"}>
            {lable ? (<h2 className="input-lable">{lable}</h2>) : null}
            <input {...props}/>
        </div>
    )
}

export default Input