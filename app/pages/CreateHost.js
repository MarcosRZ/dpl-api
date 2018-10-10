import React from 'react';
import PropTypes from 'prop-types';
import { Query } from 'react-apollo';
import { Form, Button } from 'react-bootstrap';
import withMainLayout from '../HOC/withMainLayout';
import AllHostsQuery from '../queries/hosts/allHosts';
import XLink from '../routing/Xlink';

class Hosts extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-content">
        <h1>New host</h1>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter a name" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>IP</Form.Label>
            <Form.Control type="text" placeholder="Enter the host IP" />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Url</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the host Url (if any)"
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

Hosts.propTypes = {
  title: PropTypes.string.isRequired,
};

Hosts.defaultProps = {};

export default withMainLayout(Hosts);
