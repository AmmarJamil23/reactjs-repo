import CPUWidget from "./CPUWidget";
import MemoryWidget from "./MemoryWidget";
import NetworkWidget from "./NetworkWidget";


function MetricsPanel({ load }) {

    console.log("MetricsPanel rendered");

    return (
        <div>
            <CPUWidget load={load} />
            <MemoryWidget load={load} />
            <NetworkWidget />

        </div>
    )
}

export default MetricsPanel;