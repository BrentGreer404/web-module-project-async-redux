import React from "react"
import { connect } from "react-redux"
import { getImage } from "./actions"

const Apod = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <img src={props.image}/>
            <p>{props.description}</p>
            <button onClick={(() => props.getImage())}>Get Image</button>
        </div>
    )
}

const mapStatetoProps = state => {
    return {
        image: state.image,
        description: state.description,
        isFetching: state.isFetching,
        title: state.title,
        error: state.title
    }
}

export default connect(mapStatetoProps, {getImage})(Apod);