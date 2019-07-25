import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Route, Switch, NavLink, Redirect} from 'react-router-dom';
import Tiers from './tiers';
//import Emitter from "./Emitter";
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating';

//import Cookie_el from './cookie';

export class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_page: 'tiers',
            width_tiers1: '25',
            height_tiers1: '10',
            width_tiers2: '0',
            height_tiers2: '0',
            width_tiers3: '0',
            height_tiers3: '0',
            color_cake: '#520599',
            class: '',
            elDecor: '',
        }
        this.addElement = this.addElement.bind(this);
        // console.log(this.props.user.width_tiers1);
    }

    StepTiers(value1, value2, value3, value4, value5, value6) {
        this.setState({
            width_tiers1: value1,
            height_tiers1: value2,
            width_tiers2: value3,
            height_tiers2: value4,
            width_tiers3: value5,
            height_tiers3: value6
        })
    }

        StepFrostCake(value1, value2){
            this.setState({
                color_cake: value1,
            })
        }
    
    Page(props) {

        if (props.step === 'tiers') {
            return <Tiers StepTiers={props.handler} />
        } else if (props.step === 'frost_cake') {
            return <FrostCake StepFrostCake = {props.handler1}></FrostCake>
        } else if (props.step === 'cake_decorating') {
            return <CakeDecorating addElement={props.add} />
        }
    }

    addElement (value) {
        this.setState ({elDecor: value});
        const div = document.getElementById ('cake_place');
        div.addEventListener ('click', (e) => {
           
        return (
            <div>
                <img src={this.state.elDecor} style={{display: 'absolute', top: `${e.pageY}px`, left: `${e.pageX}px`}}></img>
            </div>
        )
            
       
        }) 
    }

    

    render() {
        return (
            <div>
                <div id='home'>
                <div id='cake_place'>
                    
                    <div className = {this.state.class} 
                    style={{ width: `${this.state.width_tiers3 * 5}px`, 
                    height: `${this.state.height_tiers3 * 5}px`, 
                    background: this.state.color_cake }}>
                    </div>

                    <div className = {this.state.class} 
                    style={{ width: `${this.state.width_tiers2 *5}px`, 
                    height: `${this.state.height_tiers2 *5}px`, 
                    background: this.state.color_cake }}></div>

                    <div className = {this.state.class} 
                    style={{ width: `${this.state.width_tiers1 * 5}px`, 
                    height: `${this.state.height_tiers1 *5}px`, 
                    background: this.state.color_cake }}></div>

                </div>
                </div>

                <button onClick={() => this.setState({ show_page: 'tiers' })}>Ярусы</button>
                <button onClick={() => this.setState({ show_page: 'frost_cake' })}>Покрытие торта</button>
                <button onClick={() => this.setState({ show_page: 'cake_decorating' })}>              Украшение торта</button>
                <this.Page step={this.state.show_page} handler={(this.StepTiers.bind(this))} handler1={(this.StepFrostCake.bind(this))}  user={props.user}></this.Page>
                {/* {this.state.elDecor ? <Cookie_el addElement={this.addElement}/> : null} */}
            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));

