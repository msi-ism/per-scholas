const React = require('react')


class New extends React.Component {
    render(){
        return(
            <div>
                <h1>Add new Veggie</h1>
                <form action='/veggies' method='POST'>
                     Name: <input type='text' name='name'   /> 
                     <br />            
                     Color: <input type='text' name='color' /> 
                     <br />
                     Image Address: <input type='text' name='image'/>
                     <br />
                     Ready to eat?: <input type='checkbox' name='readyToEat'/>
                     <br />
                     <input type='submit' value='Create new veggie' />
                </form>
            </div>
        )
    }
}

module.exports = New

