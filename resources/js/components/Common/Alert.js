import React from 'react';

const Alert = ({alert}) => {
    return (
        !alert ?
            null
        :
        <div className={`alert ${alert.className}`}>
             {
                 alert.messages.map(m => {
                     return <div key={m}>{m}</div>
                 })
             }
        </div>
    );
}

export default Alert;
