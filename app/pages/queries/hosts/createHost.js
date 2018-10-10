import gql from 'graphql-tag';

export default gql`
  mutation {
    createHost(
      host: { name: "buat", description: "defac", url: "marcosrgz.com" }
    ) {
      OK
      error
      payload {
        _id
        name
        description
        url
        creationDate
        deletionDate
      }
    }
  }
`;
