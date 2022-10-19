const React = require('react')
class Show extends React.Component {
    render () {
        // ^ receives data from veggies.js
        const veggie = this.props.veggie
        const currentDate = this.props.date
        const color = {backgroundColor:this.props.veggie.color}
        console.log(color)
        const sayHello = () => {
            return "Hello! The current year is: "
            
        }
        return (
            <div style={color}>
                <h1>This product name is: {veggie.name}!</h1>
                <h2>The color of this veggie is {veggie.color}.
                </h2>
                <h3>Is it ready to eat? {veggie.readyToEat? " It is ready to eat." : " It is not ready to eat.."}</h3>
                <h4>{sayHello()}{currentDate}</h4>  
            </div>
        )
    }
}

module.exports = Show 