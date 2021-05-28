import React from 'react';

export default class TimeClock extends React.Component{
    constructor(props){
        super(props);

        this.state = {'date': new Date()};
    }


    render(){
        return(
            <div>
                {this.state.date.toLocaleTimeString()}
            </div>
        );
    }
}