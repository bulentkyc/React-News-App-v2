import React from 'react';
import {Link} from 'react-router-dom';

function NewsCard(props) {
    return (
        <div className={"card text-dark m-2 " + props.additionClass}
            style={{width: props.width}}>
            <img className="card-img-top"       
                src={props.urlToImage}
                alt="Card image cap"
            />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <button
                onClick = {props.click}
                className="btn btn-primary">Read More</button>
            </div>
        </div>
    )
}

export default NewsCard