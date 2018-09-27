import React from 'react';
import { Query } from 'react-apollo';
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

            if (data.hosts.length === 0) return <p>No results</p>;

            return (
              <table className="table table-responsive">
                {data.hosts.map(({ _id, name }) => (
                  <tr>
                    <td>{_id}</td>
                    <td>{name}</td>
                  </tr>
                ))}
              </table>
            );
          }}
        </Query>
        <h1>BUAT THE FUCK</h1>
      </Jumbotron>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default withMainLayout(Home);
