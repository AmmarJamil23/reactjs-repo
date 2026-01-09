import { useEffect, useState} from "react"

function useSystemMonitor() {
    const [systemLoad, setSystemLoad] = useState(30);
    const [logs, setLogs] = useState([]);
    const [threshold, setThreshold] = useState(70);
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        if (paused) return

        const intervalId = setInterval(() => {
            setSystemLoad((prev) => {
                const next = prev >= 90 ? 30 : prev + 1;

                setLogs((old) => [
                    ...old,
                    {
                        message:
                        next > threshold
                        ? `ALERT load crossed ${threshold}%`
                        : `System load changed to ${next}%`,
                        time: Date.now()
                    }
                ])
                return next;
            })
        }, 1000)

        return () => clearInterval(intervalId)
    }, [paused, threshold])



    return {
        systemLoad,
        logs,
        threshold,
        setThreshold,
        paused,
        setPaused
    }
}

export default useSystemMonitor;