import React, { Component } from 'react';
import './App.css';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import DriverList from './DriverList.jsx';
import JobPost from './JobPost.jsx';
import VehicleMapContainer from './VehicleMapContainer.jsx';
import axios from 'axios'

import Header from './Header.jsx'
import FormModal from './FormModal.jsx';

const client = new ApolloClient({
  // By default, this client will send queries to the
  //  `/graphql` endpoint on the same host
  // Pass the configuration option { uri: YOUR_GRAPHQL_API_URL } to the `HttpLink` to connect
  // to a different host
  uri: 'https://gpgsql.herokuapp.com/v1alpha1/graphql',
  link: new HttpLink({uri: 'https://gpgsql.herokuapp.com/v1alpha1/graphql'}),
  cache: new InMemoryCache(),
});
const VEHICLE_DATA_API = 'http://cdc483e2.ngrok.io/api/MercedesRequest?query_type=location&vehicle_id=7DCF6CF3B96B2E3442';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vehicleData: null,
      vehicleLoading: false,
      vehicleError: null,
      showPostJobModal: false
    };
  }

  /*async componentDidMount() {
    this.setState({vehicleLoading: true});
    try {
      const res = await axios(VEHICLE_DATA_API);
      this.setState({ vehicleData: res.data, vehicleLoading: false });
    } catch (e) {
      this.setState({vehicleLoading: false, vehicleError: e});
    }
  }*/

  handlePostJob = () => {
    this.setState((prevState) => ({showPostJobModal: !prevState.showPostJobModal}));
  }

  render() {
    const {vehicleError} = this.state;
    return (
      <div className="App">
        <ApolloProvider client={client}>
          <Header handlePostJob={this.handlePostJob}/>
          <FormModal open={this.state.showPostJobModal} onClose={this.handlePostJob} />
          {vehicleError ? "there is a network error" : <VehicleMapContainer data={this.state.vehicleData} vehicleLoading={this.state.vehicleLoading}/>}
          <DriverList />
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
