import React from 'react';

class ItemsManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Pastor-alemão', 'Buldogue', 'Labrador', 'Golden', 'Husky'],
      selectedValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ selectedValue: event.target.value });
  }

  render() {
    return (
      <div>
        <select value={this.state.selectedValue} onChange={this.handleChange}>
          <option value="">Escolha a raça do seu pet</option>
          {this.state.items.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>
        <p>Pet escolhido: {this.state.selectedValue}</p>
      </div>
    );
  }
}

export default ItemsManagement;