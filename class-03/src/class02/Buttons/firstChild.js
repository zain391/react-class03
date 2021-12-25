import SecBtn from "./secChild";
function FirstBtn(props){
    return(
        <div>
            <button>{props.title}</button>
            <SecBtn title="sec-btn"/>
        </div>
    )
}
export default FirstBtn;