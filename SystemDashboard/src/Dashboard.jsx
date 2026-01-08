import { useEffect, useState } from "react";
import MetricsPanel from "./MetricsPanel";
import ActivityLog from "./ActivityLog";
import ControlPanel from "./ControlPanel";

function Dashboard() {
    const [systemLoad, setSystemLoad] = useState(30);
    const [logs, setLogs] = useState([]);
    const [threshold, setThreshold] = useState(70);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return

        const intervalId = setInterval(() => {
            setSystemLoad((prev) => {
                const next = prev >= 90 ? 30 : prev + 1

                setLogs((oldLogs) => [
                    ...oldLogs,
                    {
                        message:
                        next > threshold
                        ? `ALERT load crossed ${threshold}%` 
                        : `System load changed to ${next}%`,

                        time: Date.now()

                    }
                ])
                return next
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [paused, threshold])

    return (
        <div>
            <h1>System Monitor</h1>

            {/* <button
            onClick={() => setSystemLoad(systemLoad + 5)}
            className="px-4 py-2 bg-blue-500"
            >
                Increase Load
            </button> */}
            <ControlPanel
            threshold={threshold}
            setThreshold={setThreshold}
            paused={paused}
            setPaused={setPaused}
            />
            

            <MetricsPanel load={systemLoad} />
            <ActivityLog logs={logs} />

        </div>
    )
}

export default Dashboard;