'use client'
import '../style/inputStyle.css'
export const Inputs = (props:any) =>{
  return (
    <>
    <div className="input-container">
  <input type="text" id="input" onChange={props.onChange}/>
  <label htmlFor="input" className="label">{props.name},</label>
  <div className="underline"></div>
</div>
    </>

  )

}