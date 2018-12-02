import React, { Component } from 'react';

import { Table } from 'evergreen-ui';
import { Pane } from 'evergreen-ui';
import { Avatar } from 'evergreen-ui';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Dialog } from 'evergreen-ui';


const DRIVERS_QUERY = gql`{
    drivers {
        id
        name
        surname
        experience
    }
}
`;

export default class DriverList extends Component {

    constructor (props) {
        super(props)

        this.state = {
            show: false,
            name: null,
            surname: null,
            experience: 0
        }
    }

    handleSelect = (name, surname, experience) => {
        this.setState({show: true, name, surname, experience});
    }
    
    handleReject = (name, surname) => {
        this.setState({show: false});
    }

    handleAccept = (name, surname) => {
        this.setState({show: false});
    }

    render (){
        return (
            <div>
            <Pane>
            <Dialog
                isShown={this.state.show}
                title={this.state.name + " " + this.state.surname}
                intent="success"
                onCloseComplete={() => this.setState({ show: false })}
                confirmLabel="Delete Something"
                cancelLabel="Reject"
                confirmLabel="Accept"
                onCancel = {() => this.handleReject(this.state.name, this.state.surname)}
                onConfirm = {() => this.handleAccept(this.state.name, this.state.surname)}
            >
                <Avatar isSolid name={this.state.name + " " + this.state.surname} size={40} />
                <div>
                    {this.state.experience + " years of experience."}
                </div>
            </Dialog>
            </Pane>
            <Query query={DRIVERS_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    console.log('data -> ', data)

                    const drivers = data.drivers;

                    return (
                        <Table>
                            <Table.Head>
                            {/*<Table.SearchHeaderCell />*/}
                            <Table.TextHeaderCell>
                                Name
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Surname
                            </Table.TextHeaderCell>
                            <Table.TextHeaderCell>
                                Experience(years)
                            </Table.TextHeaderCell>
                            </Table.Head>
                            <Table.Body height={240}>
                            {drivers.map(driver => (
                                <Table.Row key={driver.id} isSelectable onSelect={() => this.handleSelect(driver.name, driver.surname, driver.experience)}>
                                <Table.TextCell>{driver.name}</Table.TextCell>
                                <Table.TextCell>{driver.surname}</Table.TextCell>
                                <Table.TextCell>{driver.experience}</Table.TextCell>
                                </Table.Row>
                            ))}
                            </Table.Body>
                        </Table>
                    );    
                }}
            </Query>
            </div>
        );
    }
}

