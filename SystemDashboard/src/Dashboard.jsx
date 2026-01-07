import { useEffect, useState } from "react";
import MetricsPanel from "./MetricsPanel";
import ActivityLog from "./ActivityLog";

function Dashboard() {
    const [systemLoad, setSystemLoad] = useState(30);
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSystemLoad((prev) => {
                const next = prev >= 90 ? 30 : prev + 1

                setLogs((oldLogs) => [
                    ...oldLogs,
                    {
                        message: `System Load changed to ${next}%`,
                        time: Date.now()
                    }
                ])
                return next
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [])

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
            <ActivityLog logs={logs} />

        </div>
    )
}

export default Dashboard;