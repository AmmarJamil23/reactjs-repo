function CPUWidget({ load}) {
    console.log("CPUWidget rendered");

    return (
        <p>CPU Load {load}%</p>
    )
}

export default CPUWidget;