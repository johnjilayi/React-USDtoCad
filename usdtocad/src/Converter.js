import { useState } from "react";

function Converter() {

    const [usd, setUsd] = useState("");
    const [usdError, setUsdError] = useState(false);
    const cadAmount = usd * 1.34;

    const changeHandler = (e) => {
        const value = e.target.value;

            if (!Number(value)) {
                setUsdError(true);
            } else {
                if (value < 0) {
                    setUsdError(true);
                } else {
                    setUsdError(false)
                }
                setUsd(value);
            }
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        alert("Your USD balance in CAD is: " + cadAmount);
    }


    return (

        <div>
            <h>You USD in Cad is {usd}</h>
            <form onSubmit={onSubmit}>

            <p>Enter your USD account balance:</p>

            <input 
            type="text"
            value={usd}
            onChange={changeHandler}
            name="usd"
            id="usd"
            />   
            {
                usdError ? <span>Balance must be a positive number</span> : null
            }

   
            <br /><br />
            <input type="submit" value="Submit" />

             </form>

        </div>
    )
}

export default Converter; 