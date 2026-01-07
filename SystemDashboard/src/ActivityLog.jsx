function ActivityLog({ logs }) {
    console.log("ActivityLog rendered");

    return (
        <div>
            <h3>Activity Log</h3>
            <ul>
                {logs.map((log) => (
                    <li key={log.time}>
                        {log.message}
                    </li>
                ))}
            </ul>
            

        </div>
    )
}

export default ActivityLog;