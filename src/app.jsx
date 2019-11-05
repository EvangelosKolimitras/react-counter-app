class App extends React.Component {
    constructor(props){
        super(props)
        this.inc = this.inc.bind(this)
        this.dec = this.dec.bind(this)
        this.clr = this.clr.bind(this)

        this.state = {
            counter : 0
        }
    }

    inc() {
        this.setState( prevState => ({ counter: prevState.counter + 1 }) )
    }
    dec() {
        if(this.state.counter > 0) this.setState( prevState => ({ counter: prevState.counter - 1 }) )
    }
    clr() {
        this.setState( () => ({ counter: 0 }) )
    }

    render() {
        return(
            <div className="App">
                <h1 >Counter: { this.state.counter }</h1>
                <button onClick={this.inc}> + </button>
                <button disabled={this.state.counter===0} onClick={this.dec}> - </button>
                <button disabled={this.state.counter===0} onClick={this.clr}> C </button>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'))
