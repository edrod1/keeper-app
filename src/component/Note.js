import React from "react";


export default Notes = (props) =>
(
    <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
);