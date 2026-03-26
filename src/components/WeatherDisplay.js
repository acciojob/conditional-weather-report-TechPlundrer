import React from "react";

function weatherDisplay({ weather }) {
    const {temperature, conditions } = weather;

    const tempColor = temperature > 20 ? "red" : "blue";

    return (
        <div>
            <p>
                Temperature: <span style= {{color: tempColor}}>{temperature}</span>
            </p>
            <p>Conditions: {conditions}</p>
        </div>
    );
}

export default weatherDisplay;