class Clock extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="header">
                </div>
                <div className="container">
                    <h1 className="firstRow">Hello world!</h1>
                    <h2 className="greeting">Hello Ryan!!</h2>
                    <h3 className="date">
                        It is {this.props.date.toLocaleTimeString()}.
                    </h3>
                </div>
            </div>
        )
    }
}


function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)
