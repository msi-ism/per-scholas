// ^ Header Component

const Header = () => {
    return(
        <div>
            <h1>React Tac Toe</h1>
        </div>
    )
}

// ^ Player Component

const Player = (props) => {
    return(
        <div className={props.whichPlayer}>
            <h2>Player {props.whichPlayer} </h2>
            <h3>Wins: </h3>
        </div>

    )
}

// ^ Square Component

const Square = (props) => {
    return(
        <div>
            <h4>
            Square
            </h4>
        </div>
    )
}


// ^ Board Component

const Board = (props) => {
    return(
        <div className='board'>
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
            <Square />
        </div>
    )
}





// * App Component

const App = () => {
    return(
        <div>
            <Header />
            <Player whichPlayer='x'/>
            <Player whichPlayer='o'/>
            <Board />
        </div>

    )
}

ReactDOM.render(<App />, document.getElementById('root'))