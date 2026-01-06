import { useEffect, useState } from "react";
import MetricsPanel from "./MetricsPanel";


function Dashboard() {
    const [systemLoad, setSystemLoad] = useState(30);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSystemLoad((prevLoad) => {
                if (prevLoad >= 90) return 30
                return prevLoad + 1
            })
        }, 1000)

        return () => {
            clearInterval(intervalId);
        }
    });

    console.log("Dashboard rendered", systemLoad);

    return (
        <div>
            <h1>System Monitor</h1>

            {/* <button
            onClick={() => setSystemLoad(systemLoad + 5)}
            className="px-4 py-2 bg-blue-500"
            >
                Increase Load
            </button> */}
            

            <MetricsPanel load={systemLoad} />

        </div>
    )
}

export default Dashboard;