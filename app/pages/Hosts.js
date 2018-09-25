import React from 'react';
import PropTypes from 'prop-types';
import withMainLayout from '../HOC/withMainLayout';

class Hosts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;

    return <h1>{title}</h1>;
  }
}

Hosts.propTypes = {
  title: PropTypes.string.isRequired,
};

Hosts.defaultProps = {};

export default withMainLayout(Hosts);
