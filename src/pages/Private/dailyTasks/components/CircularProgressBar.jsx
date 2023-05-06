import React from "react";
import "./circularProgressBar.css";

const CircularProgressBar = ({ percentage, color }) => {
    const radius = 50;
    const strokeWidth = 10;
    const viewBoxSize = radius * 2;
    const viewBox = `0 0 ${viewBoxSize} ${viewBoxSize}`;
    const circumference = 2 * Math.PI * radius;
    const progressOffset = circumference - (percentage / 100) * circumference;

    return (
        <svg className="circular-progress-bar" viewBox={viewBox}>
            <circle
                className="circular-progress-bar__background"
                r={radius - strokeWidth / 2}
                cx={radius}
                cy={radius}
                strokeWidth={strokeWidth}
            />
            <circle
                className="circular-progress-bar__progress"
                r={radius - strokeWidth / 2}
                cx={radius}
                cy={radius}
                strokeWidth={strokeWidth}
                strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={progressOffset}
                stroke={color}
            />
            <text className="circular-progress-bar__text" x="50%" y="50%" fill={color}>
                {percentage}%
            </text>
        </svg>
    );
};

export default CircularProgressBar;
