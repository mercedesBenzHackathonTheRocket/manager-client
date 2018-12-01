import React from 'react';

import { Table } from 'evergreen-ui';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const DriverList = () => {

    const DRIVERS_QUERY = gql`{
            drivers {
                id
                name
                surname
            }
        }
    `;
    
    return (
        <Query query={DRIVERS_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return 'Loading...';
                if (error) return `Error! ${error.message}`;
                console.log('data -> ', data)

                const drivers = data.drivers;

                return (
                    <Table>
                        <Table.Head>
                        <Table.SearchHeaderCell />
                        <Table.TextHeaderCell>
                            Name
                        </Table.TextHeaderCell>
                        <Table.TextHeaderCell>
                            Surname
                        </Table.TextHeaderCell>
                        </Table.Head>
                        <Table.Body height={240}>
                        {drivers.map(driver => (
                            <Table.Row key={driver.id} isSelectable onSelect={() => alert(driver.name)}>
                            <Table.TextCell>{driver.name}</Table.TextCell>
                            <Table.TextCell>{driver.surname}</Table.TextCell>
                            </Table.Row>
                        ))}
                        </Table.Body>
                    </Table>
                );    
            }}
        </Query>
    );
}

export default DriverList;
