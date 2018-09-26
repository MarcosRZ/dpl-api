import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Button, Jumbotron } from 'react-bootstrap';
import withMainLayout from '../HOC/withMainLayout';
import { APP_NAME, APP_DESCRIPTION } from '../config/app';
import AllHostsQuery from './queries/hosts/allHosts';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron>
        <h1>{APP_NAME}</h1>
        <p>{APP_DESCRIPTION}</p>
        <Query query={AllHostsQuery}>
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            return data.hosts.map(({ _id, name }) => (
              <div key={_id}>
                <p>{`${_id}: ${name}`}</p>
              </div>
            ));
          }}
        </Query>
        <p>
          <Button bsStyle="primary">Learn more</Button>
        </p>
      </Jumbotron>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default withMainLayout(Home);
