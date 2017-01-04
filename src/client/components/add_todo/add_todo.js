import React, { PropTypes } from 'react';

class AddTodo extends React.Component {

  state = {
    input: '',
  };

  handleInputChange = e => this.setState({ input: e.target.value });

  handleButtonClick = () => {
    const { dispatch, onAdd } = this.props;
    const { input } = this.state;
    dispatch(onAdd(input));
    this.setState({ input: '' });
  }

  render() {
    const { input } = this.state;
    return (
      <div className="add-todo">
        <input type="text" placeholder="titre" value={input} onChange={this.handleInputChange} />
        <button onClick={this.handleButtonClick}>+</button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func,
  onAdd: PropTypes.func,
};

export default AddTodo;
