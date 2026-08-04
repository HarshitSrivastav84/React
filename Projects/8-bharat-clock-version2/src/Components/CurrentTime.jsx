import { useEffect, useState } from "react";

function CurrentTime() {

    // let time = new Date;

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => {
            clearInterval(intervalID);
            };
    }, []);

    return <h4 className="lead">
        This is the current time: {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
    </h4>
}

export default CurrentTime;