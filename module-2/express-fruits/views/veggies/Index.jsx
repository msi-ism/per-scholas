const React = require("react");

class Index extends React.Component {
  render() {
    const {veggies} = this.props
    return (
      <div style={styles.container} className='container'>
        <h1 style ={styles.header}>All Veggies</h1>
        <a style ={styles.createVeggieLink} href='/veggies/new'>Create New Veggie</a>
        <ul>
          {veggies.map((veggie, idx) => (
            <li key={idx}>
              {" "}
              The<a href={`/veggies/${idx}`}> {veggie.name}</a> is {veggie.color} <br />
              {veggie.readyToEat
                ? "It is ready to eat"
                : "It is not ready to eat"}
                <br />
                <a href={`/veggies/${idx}`}>
          <img src={veggie.image} width="300"/>
        </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundColor: 'royalblue',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  header: {
    fontSize: '32px',
    color: '#fff',

  },
  ulContainer: {
    backgroundColor: '#fff',
    padding: '15px'
  },
  createVeggieLink: {
    backgroundColor: '#fff',
    padding: '5px',
    borderRadius: '5px',
    textDecoration: 'none'
  },
  item: {
    padding: '10px',
    listStyleType: 'none'
  }
}

module.exports = Index;


