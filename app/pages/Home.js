import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import withMainLayout from '../HOC/withMainLayout';
import { APP_NAME, APP_DESCRIPTION } from '../config/app';

class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Jumbotron>
        <h1>{APP_NAME}</h1>
        <p>
         {APP_DESCRIPTION}
        </p>
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
