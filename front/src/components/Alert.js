import React from "react";

export default function Alert(props){

    function getTypeWaring(status) {
        if (status === 200) {
          return 'success';
        } else if (status >= 400 && status < 500) {
          return 'warning';
        } else if (status >= 500) {
          return 'danger';
        } else {
          return 'warning';
        }
      }
      

    return(
      <div className="position-fixed bottom-0 w-100 p-3" style={{display: props.alert.show? '':'none'}}>
        <div id="alert" className={`alert alert-${getTypeWaring(props.alert.status)} alert-dismissible fade ` + (props.alert.show? 'show':'')} role="alert">
              {/* <strong>{props.alert.status}</strong> :  */}
              {props.alert.error}
              <button type="button" className="btn-close" onClick={() => props.setAlert({status:'',error:'',show:false})}></button>
        </div>
       </div> 
    )
}