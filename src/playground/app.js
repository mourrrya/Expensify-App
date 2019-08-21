import ReactDOM from 'react-dom'
import React from 'react'
const info = (props) => (
    <div>
        <h1> this is the info component </h1>
        <p>{props.info}</p>
    </div>

)

const authentication = (WrappedComponent) => {
    return (props) => (
        <div>
        { props.isAuth && <WrappedComponent {...props }/> }
        
        </div>
    )

}

const IsAuthenticated = authentication(info)

const target = document.getElementById("app");
ReactDOM.render(<IsAuthenticated isAuth={true} info='this is visible if I provide the Props of the info' />, target);