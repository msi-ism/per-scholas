const React = require('react')

class Show extends React.Component {
    render () {
        // ^ receives data from fruit.js
        const fruit = this.props.fruit
        const currentDate = this.props.date
        const color = {backgroundColor:this.props.fruit.color}
        console.log(color)
        const sayHello = () => {
            console.log("Hello! The current year is: ")
        }
        return (
            <div style={color}>
                <h1>Show Page!!!</h1>
                <h3>The {fruit.name} is {fruit.color}.{fruit.readyToEat? " It is ready to eat." : " It is not ready to eat..."}
                </h3>      
                <h4>{sayHello()}{currentDate}</h4>  
            </div>
        )
    }
}

module.exports = Show 