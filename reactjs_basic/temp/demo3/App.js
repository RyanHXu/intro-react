class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div className="app">
                <div className="header">
                </div>
                <div className="container">
                    <h1 className="firstRow">Hello world!</h1>
                    <h2 className="greeting">Hello Ryan!!</h2>
                    <h3 className="date">
                        It is {this.state.date.toLocaleTimeString()}.
                    </h3>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);





