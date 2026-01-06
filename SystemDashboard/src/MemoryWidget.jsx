function MemoryWidget({ load }) {
    console.log("MemoryWidget rendered");

    return (
        <p>Memory Usage {load * 1.5}%</p>
    )
}

export default MemoryWidget;