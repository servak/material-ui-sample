/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes, Component } from 'react';
import Location from '../../core/Location';

import {
  LeftNav,
  CardHeader,
  List,
  ListItem,
} from 'material-ui';

class Navigation extends Component {
  static propTypes = {
    menuItems: PropTypes.array.isRequired,
  }

  constructor() {
    super();
    this.toggle = this.toggleDockedLeftNavClick.bind(this);
  }

  toggleDockedLeftNavClick() {
    this.refs.leftNav.toggle();
  }

  jumpLink(item) {
    Location.pushState('state', item.value, null);
    this.toggleDockedLeftNavClick();
  }

  renderListItems(items) {
    return items.map((item, index) => {
      return <ListItem key={index} primaryText={item.text} leftIcon={item.icon} onTouchTap={this.jumpLink.bind(this, item)}/>;
    });
  }

  render() {
    return (
      <LeftNav ref="leftNav" docked={false}>
        <CardHeader title="Title" subtitle="Subtitle"/>
        <List>
          {this.renderListItems(this.props.menuItems)}
        </List>
      </LeftNav>
    );
  }

}

export default Navigation;
