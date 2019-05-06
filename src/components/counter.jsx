import React, { Component } from "react";

class Counter extends Component {
  // any data it needs
  //   state = {
  //     value: this.props.counter.value
  //tags: ["tag1", "tag2", "tag3"]
  // imageUrl: "https://picsum.photos/200"
  //   };

  styles = {
    fontSize: 50, //compiles to "50px"
    fontWeight: "bold"
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  //   handleIncrement = product => {
  //   this.props.value = 0; //error
  // console.log(product);
  // this.setState({ value: this.state.value + 1 }); // parse an object that is merged with state or override existing properties
  // console.log("Increment Clicked", this); // returns undefined
  //   };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value){
        //Ajax call and get new data from the server
    }
  }

  componentWillUnmount(){
      console.log("Counter - Unmount");
  }

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log("Counter - Rendered");

    // console.log("props", this.props);
    return (
      <React.Fragment>
        {/* {this.props.children} */}
        <h4>Counter #{this.props.id}</h4>
        <span style={{ fontSize: 30 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* {this.state.tags.length === 0 && "Please create a new tag!"} */}
        {/* {this.renderTags()} */}
      </React.Fragment>
    ); // gets compiled to React.Fragment.createElement()
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; // picking count property of RHS object
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
