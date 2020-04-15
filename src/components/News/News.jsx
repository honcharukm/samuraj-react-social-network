import React from "react";

const News = (props) => {
    return (
        <div>
            <h2>News</h2>
            <p>{props.news}</p>
        </div>
    );
}

export default News;