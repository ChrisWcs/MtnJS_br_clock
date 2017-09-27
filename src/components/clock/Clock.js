import React from 'react';

import ClockFace from '../clockFace/ClockFace';

class Clock extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            time: new Date(),
            id: 0
        }
    }

    componentDidMount(){
        let tempId = setInterval( () => {
            this.setState((prevState) => ({
                time: new Date()
            }));
        }, 1000);

        this.setState((prevState) => ({
            id: tempId
        }));
    }

    componentWillUnmount(){
        clearInterval(this.state.id);
    }

    render(){
        return (
            <ClockFace timeString={this.state.time.toLocaleTimeString()} />
        );
    }
}

export default Clock;