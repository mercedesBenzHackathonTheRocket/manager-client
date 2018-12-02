import React, { Component } from 'react';
import { Combobox } from 'evergreen-ui';
import { TextInput } from 'evergreen-ui';
import { Button } from 'evergreen-ui';
import { Textarea } from 'evergreen-ui';

import { Mutation } from "react-apollo";
import gql from 'graphql-tag';

const INSERT_QUERY = gql`
    mutation addJob($id: Int!, $company_id: Int!, $model: String!, $description: String!, 
            $source: String!, $destination: String!, $time: Int!, 
            $experience: Int!, $cargo: String!, $capacity: Int!, $done: Boolean!) {
        insertJob (
                objects: [ 
                    {
                    id: $id,
                    company_id: $company_id,
                    model: $model,
                    description: $description,
                    source: $source,
                    destination: $destination,
                    time: $time,
                    experience: $experience,
                    cargo: $cargo,
                    capacity: $capacity,
                    done: $done
                    }
                ]  
            )
        }
      `;

export default class JobPost extends Component {
    constructor (props) {
        super(props)

        this.state = {
            cargo: null,
            source: null,
            destination: null,
            startTime: null,
            finishTime: null,
            experience: null,
            jobNo: null,
            model: null,
            description: null,
        }
    }

    render() {
        return (
            <div>
                {/*<Combobox
                    style={{marginBottom: '5px'}}
                    items={['Banana', 'Orange', 'Apple', 'Mango']}
                    onChange={selected => this.setState({cargo: selected})}
                    placeholder="Cargo"
                    autocompleteProps={{
                        title: 'Cargo'
                    }}
                />
                <Combobox
                    style={{marginBottom: '5px'}}
                    items={['Banana', 'Orange', 'Apple', 'Mango']}
                    onChange={selected => this.setState({source: selected})}
                    placeholder="Source"
                    autocompleteProps={{
                        title: 'Source'
                    }}
                />
                <Combobox
                    style={{marginBottom: '5px'}}
                    items={['Banana', 'Orange', 'Apple', 'Mango']}
                    onChange={selected => this.setState({destination: selected})}
                    placeholder="Destination"
                />*/}
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Cargo"
                    onChange={e => this.setState({ cargo: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Source"
                    onChange={e => this.setState({ source: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Destination"
                    onChange={e => this.setState({ destination: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Model"
                    onChange={e => this.setState({ model: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Start DD/MM/YYYY"
                    onChange={e => this.setState({ startTime: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Finish DD/MM/YYYY"
                    onChange={e => this.setState({ finishTime: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Experience years"
                    onChange={e => this.setState({ experience: e.target.value })}
                    />
                </div>
                <div>
                <TextInput
                    style={{marginBottom: '5px'}}
                    name="text-input-name"
                    placeholder="Capacity"
                    onChange={e => this.setState({ jobNo: e.target.value })}
                    />
                </div>
                <div>
                <Textarea
                    name="textarea-1"
                    placeholder="Description"
                    onChange={e => this.setState({ description: e.target.value })}
                    width='100%'
                    style={{marginBottom: '5px'}}
                    />
                </div>
                
                <div>
                <Mutation mutation={INSERT_QUERY}>
                {(insertJob, { data }) => (
                <Button appearance="primary" style={{marginBottom: '5px'}} onClick={() => insertJob({variables: {
                        id: 23,
                        company_id: 1,
                        model: this.state.model,
                        description: this.state.description,
                        source: this.state.source,
                        destination: this.state.destination,
                        time: 333,
                        experience: this.state.experience,
                        cargo: this.state.cargo,
                        capacity: this.state.jobNo,
                        done: false,
                    }})
                } >Submit</Button>
                )}
                </Mutation>
                </div>
            </div>
        );
    }
}
