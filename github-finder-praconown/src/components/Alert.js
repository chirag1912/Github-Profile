import React from 'react'

const Alert = (props) => {
    const {alert}=props;
    return (
        <React.Fragment>
            <div className="text-danger">{alert}</div>            
        </React.Fragment>
    )
}

export default Alert
