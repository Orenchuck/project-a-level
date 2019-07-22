import React from 'react';

export default class Macaron_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
        }

    }

    render () {
        return (
            <div>
                <img src='http://www.pngall.com/wp-content/uploads/2/Macaron-PNG-Free-Image.png'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <img src='https://www.stickpng.com/assets/thumbs/586ab2361fdce414493f510c.png'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://library.kissclipart.com/20180914/zie/kissclipart-macaron-transparent-background-clipart-french-cuis-e46c9087ba4c9a1b.png'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                
            </div>
        );
    }
}