import MetricsPanel from "./MetricsPanel";
import ActivityLog from "./ActivityLog";
import ControlPanel from "./ControlPanel";
import useSystemMonitor from "./useSystemMonitor";

function Dashboard() {
    const {
        systemLoad, logs, threshold, setThreshold , paused, setPaused
    } = useSystemMonitor()
 

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
            setThreshold={}
            />
         

            

        </div>
    )
}

export default Dashboard;;