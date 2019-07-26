import React from 'react';
import ReactDOM from 'react-dom';
import Tiers from './tiers';
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating';

export class Home extends React.Component {
    constructor() {
        super();
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
            elDecor: {},
            allDecor: [{src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GaBDcMqURldUayY4k_2ETMtJbkb3POgNu8likh-eg-DuwNmH',
        x: 0, y: 0},
        {src: 'http://magicake.ru/wp-content/uploads/2018/02/JZlA5flvgR0.jpg',
        x: 20, y: 20},
        {src: 'http://magicake.ru/wp-content/uploads/2018/02/dcC1HjVRAJE.jpg',
        x: 40, y: 40}],
        }
        this.allDecor = this.allDecor.bind(this);

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
            return <CakeDecorating addElement={props.addElement}/>
        }
    }

    addElement (value) {
        this.setState ({elDecor: value});
        this.allDecor();
        console.log(this.state.elDecor);
        this.setState ({elDecor: {}});
            }

    allDecor () {
        let all = this.state.allDecor;
        all.push(this.state.elDecor);
        this.setState({allDecor: all});
    }



    render() {
        let all = this.state.allDecor.map((item, index) => {
            return (<div key={index}><img src={item.src}
            style={{position: 'absolute', top: `${item.y}px`,
        left: `${item.x}px`, width: '10%'}}></img></div>)
        })
        return (
            <div>
                <div id='home'>
                <div id='cake_place' style={{border: '3px solid green'}}>
                    {all}
                    <img src={this.state.elDecor.src} 
                    style={{display: 'absolute', top: '30px', 
                    left: '25px', width: '10%'}}></img>

                    <div className = {this.state.class} 
                    style={{ width: `${this.state.width_tiers3 * 5}px`, 
                    height: `${this.state.height_tiers3 * 5}px`, 
                    background: this.state.color_cake }}></div>

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
                <this.Page step={this.state.show_page} 
                handler={(this.StepTiers.bind(this))} 
                handler1={(this.StepFrostCake.bind(this))}
                addElement={(this.addElement.bind(this))} ></this.Page>

                {/* {this.state.elDecor ? <Cookie_el addElement={this.addElement}/> : null} */}
            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));

