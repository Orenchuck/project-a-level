import React from 'react';

export default class Cookie_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
        }

        this.onChange = this.onChange.bind(this);
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

    render () {
        return (
            <div>
                <img src={this.state.elDecor} style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <label> Вставьте ссылку на картинку
                    <input type="text" onChange={this.onChange}></input></label>
                
            </div>
        );
    }
}
