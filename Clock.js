import React, { useState } from "react";




const Clock = () => {
    var time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const Updatetime = () => {
        time = new Date().toLocaleTimeString();
        setCtime(time);
    };

    setInterval(Updatetime, 1000);
    return (
        <div className="main_container">
            <h1>{ctime}</h1>
        </div>

    );
}

export default Clock;