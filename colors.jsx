import React from 'react';

export default class Colors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 1,
        }
        this.toWhite = this.toWhite.bind(this);
        this.toBlack = this.toBlack.bind(this);
        this.toChocolate = this.toChocolate.bind(this);
        this.toRose = this.toRose.bind(this);
        this.toTiffany = this.toTiffany.bind(this);
        this.toBlue = this.toBlue.bind(this);
        this.toYellow = this.toYellow.bind(this);
        this.toRed = this.toRed.bind(this);
        this.toLightGreen = this.toLightGreen.bind(this);
        this.toPurple = this.toPurple.bind (this);
    }

    toWhite () {
        this.setState({color: 1});
    }

    toBlack () {
        this.setState({color: 2});
    }

    toChocolate () {
        this.setState({color: 3});
    }

    toRose () {
        this.setState({color: 4});
    }

    toTiffany () {
        this.setState({color: 5});
    }

    toBlue () {
        this.setState({color: 6});
    }
    
    toYellow () {
        this.setState({color: 7});
    }

    toRed () {
        this.setState({color: 8});
    }

    toLightGreen () {
        this.setState({color: 9});
    }

    toPurple () {
        this.setState({color: 10});
    }

    render () {
        return (
            <div>
                <div onClick={this.toWhite} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'white'}}></div>

            <div onClick={this.toBlack} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'black'}}></div>

            <div onClick={this.toChocolate} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: '#654321'}}></div>

            <div onClick={this.toRose} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: '#FFC0CB'}}></div>

            <div onClick={this.toTiffany} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: '#0abab5'}}></div>

            <div onClick={this.toBlue} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: '#00008B'}}></div>

            <div onClick={this.toYellow} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'yellow'}}></div>

            <div onClick={this.toRed} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'red'}}></div>

            <div onClick={this.toLightGreen} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'lightgreen'}}></div>

            <div onClick={this.toPurple} style={{width: '10vh', height: '10vh',
            borderRadius: '50%', backgroundColor: 'purple'}}></div>

            </div>
        )
    }
}