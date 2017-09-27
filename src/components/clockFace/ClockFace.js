import React from 'react';

const numberStyle = {
    fontFamily: "Arial",
    fontSize: 40,
    letterSpacing: 3,
}

const containerStyle = {
    border: "solid black 3px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 280,
    height: 90,
    borderRadius: 10,
}

const centerContStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const ClockFace = ({timeString}) => (
    <div style={centerContStyle}>
        <div style={containerStyle}>
            <h1 style={numberStyle}>{timeString}</h1>
        </div>
    </div>
);

export default ClockFace;