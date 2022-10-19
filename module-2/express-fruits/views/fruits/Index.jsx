const React = require("react")

class Index extends React.Component {
  render() {
    const { fruits } = this.props;
    return (
      <div style={styles.container}>
        <h1>All Fruits</h1>
        <a href="/fruits/new">Create New Fruit</a>

        <ul style={styles.fruitObj}>
          {fruits.map((fruit, idx) => (
            <li key={`key${fruit._id}`}>
              {" "}
              This <a href={`/fruits/${fruit._id}`}> {fruit.name}</a> is{" "}
              {fruit.color}. <br />
              {fruit.readyToEat
                ? "It is ready to eat."
                : "It is not ready to eat."}
              <br />
              <a href={`/fruits/${fruit._id}/edit`}>Edit this Fruit</a>
              <br />
              <a href={`/fruits/${fruit._id}`}>
                <img src={`${fruit.image}`} width="300" />
              </a>
              <form
                action={`/fruits/${fruit._id}?_method=DELETE`}
                style={styles.delete}
                method="POST"
              >
                <input type="submit" value="Delete Fruit"></input>
              </form>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

module.exports = Index;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "left",
  },
  fruitObj: {
    marginBottom: "25",
  },
  delete: {
    paddingBottom: "20px",
  },
};
