import React from 'react';

export default class Lollipop_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
        }

    }

    render () {
        return (
            <div>
                <img src='https://st3.depositphotos.com/1009676/16362/v/1600/depositphotos_163629734-stock-illustration-sweet-colorful-lollipop.jpg'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='./src/1.JPEG'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                
            </div>
        );
    }
}
