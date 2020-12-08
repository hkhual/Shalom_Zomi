import React from 'react';

class Sample extends React.Component {
    render() {
        return (
            <div className="Shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>John Cena</li>
                </ul>
            </div>
        );
    }
}

var namle = <Sample name="Huai" />;

export default Sample;