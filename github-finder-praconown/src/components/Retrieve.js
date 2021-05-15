import React from 'react'
import {useState} from "react";

const Retrieve = (props) => {
    const {getRetrieve}=props;
    const [retrieve,setRetrieve]=useState(false);
    const onClick=()=>{   //No Prevent Default so event might not be needed;
        setRetrieve(true);
        getRetrieve(retrieve);
    }   

    return (
        <React.Fragment>
            <form>
                <input type="button" value="Retrieve" onClick={onClick}/>
            </form>
        </React.Fragment>
    )
}

export default Retrieve
