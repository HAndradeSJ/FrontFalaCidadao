import '../style/radioStyle.css'


export const Radio = ({actived1, actived2, setActived1, setActived2}: any) =>{
return (
<div className="container">
  <div className="custom-radio">
    <input type="radio" id="radio-1" name="tabs" checked={actived1}/>
    <label className="radio-label" htmlFor="radio-1" onClick={()=>{
        setActived2(false)
      setActived1(true)
      localStorage.setItem('status','Encerrado')
    }}>
      <div className="radio-circle"></div>
      <span className="radio-text">Encerrado</span>
    </label>
    <input type="radio" id="radio-2" name="tabs" checked={actived2}/>
    <label className="radio-label" htmlFor="radio-2" onClick={()=>{
        setActived1(false)
        setActived2(true)
            localStorage.setItem('status','Recusado')
    }}>
      <div className="radio-circle"></div>
      <span className="radio-text">Recusado</span>
    </label>
  </div>
</div>


)
  
}