function ControlPanel({
    threshold,
    setThreshold,
    paused,
    setPaused
}) {
    console.log("ControlsPanel rendered");

    return (
        <div>
            <h3>Controls</h3>

            <label>
                <input
                 type="number"
                 value={threshold}
                 onChange={(e) => setThreshold(Number(e.target.value))} 
                 />
            </label>

            <button onClick={() => setPaused((p) => !p)}
            className="px-4 py-2 bg-black rounded-xl"
                
                >
                {paused ? "Resume" : "Pause"}
            </button>

        </div>
    )
}

export default ControlPanel;