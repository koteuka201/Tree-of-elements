import './customButton.css'
export const CustomButton=({handleFunction, name})=>{
    return(
        <button className="btnContainer" onClick={handleFunction}>{name}</button>
    )
}