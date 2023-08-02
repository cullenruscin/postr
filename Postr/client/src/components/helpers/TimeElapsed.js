import React, { useState, useEffect } from 'react';

const TimeElapsed = ({ datetimeString }) => {
    const [formattedTime, setFormattedTime] = useState('');

    useEffect(() => {
        // Calculate the time difference and update the state with the formatted result
        const timeDifference = getTimeDifference(datetimeString);
        setFormattedTime(timeDifference);
    }, [datetimeString]);

    // Function to calculate the time difference between the input datetime and the current time
    const getTimeDifference = (dateTimeString) => {
        const now = new Date();
        const dateTime = new Date(dateTimeString);
        const timeDifferenceInSeconds = Math.floor((now - dateTime) / 1000);

        if (timeDifferenceInSeconds < 60) {
            // Show seconds if less than a minute
            return `${timeDifferenceInSeconds}s`;
        } else if (timeDifferenceInSeconds < 3600) {
            // Show minutes if less than an hour
            const minutes = Math.floor(timeDifferenceInSeconds / 60);
            return `${minutes}m`;
        } else if (timeDifferenceInSeconds < 86400) {
            // Show hours if less than a day
            const hours = Math.floor(timeDifferenceInSeconds / 3600);
            return `${hours}h`;
        } else {
            // Show days if more than a day
            const days = Math.floor(timeDifferenceInSeconds / 86400);
            return `${days}d`;
        }
    };

    return <>{formattedTime}</>;
};

export default TimeElapsed;