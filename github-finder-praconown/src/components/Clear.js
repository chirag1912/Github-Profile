import React from 'react'
import {useState} from "react";

const Clear = (props) => {
    const {getClear}=props;
    const [clear,setClear]=useState(false);
    const onClick=()=>{   //No Prevent Default so event might not be needed;
        setClear(true);
        getClear(clear);
    }   

    return (
        <React.Fragment>
            <form>
                <input type="button" value="Clear" onClick={onClick} className="form-control btn btn-danger"/>
            </form>
        </React.Fragment>
    )
}

export default Clear
