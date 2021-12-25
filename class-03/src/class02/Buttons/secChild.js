import ThirdBtn from "./thirdChild";
function SecBtn(props){
    return(
        <div>
            <button>{props.title}</button>
            <ThirdBtn color="red" title="third-btn"/>
        </div>
    )
}
export default SecBtn;