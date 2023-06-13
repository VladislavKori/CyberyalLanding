import React from 'react'

function Input({ register, className, lable, id, ...props }: any) {
  return (
    <div className={className ? "input" + " " + className : "input"}>
      {lable ? <h2 className="input-lable">{lable}</h2> : null}
      <input {...register(id)} {...props} />
    </div>
  );
}

export default Input