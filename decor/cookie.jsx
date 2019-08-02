import React from 'react';
import CakeDecorating from '../cake_decorating';
import img1 from '../src/cookies/1.png';
import img2 from '../src/cookies/2.png';
import img3 from '../src/cookies/3.png';
import img4 from '../src/cookies/4.png';
import img5 from '../src/cookies/5.png';
import img6 from '../src/cookies/6.png';
import img7 from '../src/cookies/7.png';
import img8 from '../src/cookies/8.png';
import img9 from '../src/cookies/9.png';
import img10 from '../src/cookies/10.png';
import img11 from '../src/cookies/11.png';
import img12 from '../src/cookies/12.png';
import img13 from '../src/cookies/13.png';
import img14 from '../src/cookies/14.png';
import img15 from '../src/cookies/15.png';
import img16 from '../src/cookies/16.png';
import img17 from '../src/cookies/17.png';
import img18 from '../src/cookies/18.png';
import img19 from '../src/cookies/19.png';
import img20 from '../src/cookies/20.png';


export default class Cookie_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
            showPage: true,
        }
        this.onClick = this.onClick.bind(this);
        this.whatPicture = this.whatPicture.bind(this);
    }

    onClick () {
        this.setState ({showPage: false});
    }

    whatPicture (event) {
        this.setState({elDecor:{src: event.target.src,
        x: 0, y: 0}});
        console.log(this.state.elDecor);
        this.props.add(this.state.elDecor);
    }

    render () {
        return (
            <div id='options'>
                {this.state.showPage ? (
                    <div>
                   <img src={img1}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img2}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img3}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img4}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img5}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img6}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img7}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img8}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img9}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img10}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img11}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img12}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img13}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img14}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img15}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img16}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img17}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img18}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img19}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src={img20}
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <br/>
                <button onClick ={this.onClick}>Назад</button> 
                </div>
                ) : <CakeDecorating />}
                
            </div>
        );
    }
}
