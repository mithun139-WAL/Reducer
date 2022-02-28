import { useReducer } from "react";
import CountReducer from "./CountReducer";

const CountUseReducer = () =>{
    const initialValue = {count:0};
    const [state,dispatch] = useReducer(CountReducer,initialValue);
    const increase = () => {
        dispatch({type:"increase"});
    };
    return(
        <div>
            Count = {state.count}<br />
            <button onClick={increase}>Increase</button>
            <button
                onClick={()=>{
                    dispatch({type:"decrease"});
                }}
            >Decrease</button>
        </div>
    )
}
export default CountUseReducer;