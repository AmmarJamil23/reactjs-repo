import { useState, useEffect } from "react"

function NetworkWidget() {
    const [traffic, setTraffic] = useState(10);

    useEffect(() => {
        const id = setInterval(() => {
            setTraffic((t) => t + 5)
        }, 3000)

        return () => clearInterval(id)
    }, []);

    console.log("NetworkWidget rendered");

    return (
        <p>Network Traffic {traffic} kb</p>
    )
}

export default NetworkWidget;