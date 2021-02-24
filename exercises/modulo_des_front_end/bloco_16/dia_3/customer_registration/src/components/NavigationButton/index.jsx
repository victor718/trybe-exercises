import React from 'react';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';

class NavigationButton extends React.Component {
  render() {
    const { namePage, path, nameButton } = this.props;
    return (
      <div>
        <Link to={ path }>
          <button className={ nameButton } type="button">{namePage}</button>
        </Link>
      </div>
    );
  }
}

NavigationButton.propTypes = {
  nameButton: string.isRequired,
  path: string.isRequired,
  namePage: string.isRequired,
};

export default NavigationButton;
