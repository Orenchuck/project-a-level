import React from 'react';
import CakeDecorating from '../cake_decorating';

export default class Cookie_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
            showPage: true,
        }

        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
        // this.addCookie = this.addCookie.bind(this);
    }
    onChange (event) {
        this.setState ({elDecor: `${event.target.value}`});
        // console.log (this.state.elDecor);
    }

    // addCookie () {
    //     const div = document.getElementById ('cake_place');
    //     div.addEventListener ('click', (e) => {
           
    //        this.setState ({x: e.pageX, y: e.pageY});
    //        console.log(this.state.x);
    //      const img = document.getElementById ('1');
    //      img.style.display = 'block';
    //      img.style.top = `${e.pageY}px`;
    //      img.style.left = `${e.pageX}px`;
    //     // return this.forceUpdate();
            
       
    //     }) 
    // }

    onClick () {
        this.setState ({showPage: false});
    }

    render () {
        return (
            <div>
                {this.state.showPage ? (
                    <div>
                    <img src={this.state.elDecor} style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <label> Вставьте ссылку на картинку
                    <input type="text" onChange={this.onChange}></input></label>
                <button>Ok</button>
                <button onClick ={this.onClick}>Назад</button>
                </div>
                ) : <CakeDecorating />}
            </div>
        );
    }
}
