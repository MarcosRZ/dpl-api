import React from 'react';
import { Query } from 'react-apollo';
<<<<<<< HEAD
import { Button, Jumbotron } from 'react-bootstrap';
=======
import gql from 'graphql-tag';
import { Jumbotron, Alert, Table } from 'react-bootstrap';
>>>>>>> 0b1fa1e73eae19ca9f1225ee5f4af09d312c6141
import withMainLayout from '../HOC/withMainLayout';
import { APP_NAME, APP_DESCRIPTION } from '../config/app';
import AllHostsQuery from './queries/hosts/allHosts';
import XLink from '../routing/Xlink';

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

<<<<<<< HEAD
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
=======
            return (
              <Table responsive striped condensed bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>IP</th>
                    <th>Main Domain</th>
                  </tr>
                </thead>
                <tbody>
                  {data.hosts.map(({ _id, name }) => (
                    <tr key={_id}>
                      <td>{_id}</td>
                      <td>{name}</td>
                      <td>0.0.0.0</td>
                      <td>
                        <XLink href="/">
                          <a>www.example.com</a>
                        </XLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </Query>
        <Alert variant="info">
          <a
            target="blank"
            href="https://react-bootstrap.netlify.com/components/navbar/"
          >
            React Bootstap Docs.
          </a>
        </Alert>
>>>>>>> 0b1fa1e73eae19ca9f1225ee5f4af09d312c6141
      </Jumbotron>
    );
  }
}

Home.propTypes = {};

Home.defaultProps = {};

export default withMainLayout(Home);
