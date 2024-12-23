import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const CounterApp = () => {
    const [textVal, setTextVal] = useState("");
    //use the count from store value
    //consuming the value from the store
    const countReducer = useSelector((state) => state.countReducer);
    //trigger an action which will change the store value
    const dispatch = useDispatch();
    //dispatch can be used to trigger an action in a store
    return <>
        {console.log("CounterApp Rendering")}        <h1>{countReducer.count}</h1>
        <button onClick={() => dispatch({ type: "count_inc" })}>Inc</button>
        <button onClick={() => dispatch({ type: "count_dec" })}>Dec</button>
        <button onClick={() => dispatch({ type: "count_reset" })}>Reset</button><br />
        <input type="text"
            value={textVal}
            onChange={(e) => setTextVal(e.target.value)} />
        <br />
        <button onClick={() => dispatch({ type: "count_inc_by", number: Number(textVal) })}>Increase by Above</button>
        {/* just for task reference */}
        <button onClick={() => dispatch({ type: "product_add_to_cart", product: {} })}> Add to cart</button >

    </>

};


export default CounterApp;  