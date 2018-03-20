import React, { Component } from 'react';

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {
      navigated: 0,
      icons: [
        { id: 1, active: false, text: 'Individual', icon: 'fa-user', icons: null },
        { id: 2, active: false, text: 'Familiar', icon: 'fa-users', icons:
          [
            { id: 2, active: false, text: 'Particular', icon: 'fa-users', icons: null },
            { id: 1, active: false, text: 'Empresarial', icon: 'fa-building', icons: null },
          ]
        },
        { id: 3, active: false, text: 'Empresarial', icon: 'fa-building', icons: null },
      ],
      currentIcons: [],
    };

    this.state.currentIcons = this.state.icons;
    this.onClick = this.onClick.bind(this);
    this.goBack = this.goBack.bind(this);
  }


  onClick(id) {
    const icon = this.state.currentIcons.find(item => item.id === id);

    if (icon.icons === null) {
      const currentIcons = this.state.currentIcons.map(icon =>
        icon.id === id ? { ...icon, active: true } : { ...icon, active: false }
      );
      this.setState({ currentIcons });
    } else {
      const currentIcons = icon.icons;
      this.setState({ currentIcons, navigated: true });
    }
  }

  goBack() {
    const { icons } = this.state;
    this.setState({ currentIcons: icons, navigated: false });
  }

  render() {
    const { currentIcons, navigated } = this.state;

    return (
      <div>
        {navigated && (<i className="fa fa-chevron-left" onClick={this.goBack}></i>)}
        <ul className="iconlist">
          {currentIcons.map(({ id, active, text, icon }) => (
            <li key={id} className={`attached auto-property-bundle ${active ? 'active' : ''}`} onClick={() => this.onClick(id)}>
          <span>
            <span>&nbsp;</span>
            <small></small>
            <a href="#">{text}</a>
          </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Test;
