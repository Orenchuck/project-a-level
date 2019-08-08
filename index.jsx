<<<<<<< HEAD
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
                class_cake: value2,     //
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
            <div id='wrapper'>
                <div id='home'>
                <div id='cake_place'>
                    {/* {all} */}    
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

                <nav>
                <button className='nav_button' onClick={() => this.setState({ show_page: 'tiers' })}>Ярусы торта</button>
                <button className='nav_button' onClick={() => this.setState({ show_page: 'frost_cake' })}>Покрытие торта</button>
                <button className='nav_button' onClick={() => this.setState({ show_page: 'cake_decorating' })}>Украшение торта</button>
                </nav>

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

=======
import React from 'react';
import ReactDOM from 'react-dom';
import Tiers from './tiers';
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating2';
import Draggable from 'react-draggable';

export class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            show_page: 'tiers',
            width_tiers: [30, 0, 0],
            height_tiers: [10, 0, 0],
            color_cake: '#520599',
            class: 'cream',
            elDecor: {},
            allDecor: [],
            moving: false,
        }
        this.allDecor = this.allDecor.bind(this);
        this.setCoord = this.setCoord.bind(this);
        this.removeIMG = this.removeIMG.bind(this);
        this.handleDrag = this.handleDrag.bind(this);
        this.handleStart = this.handleStart.bind(this);
        this.handleStop = this.handleStop.bind(this);
    }



    StepTiers(value1, value2, value3, value4, value5, value6) {
        if (value1 < 115 && value2 < 115 && value3 < 115 && value4 < 115 && value5 < 115 && value6 < 115) {
            this.setState({
                width_tiers: [value1, value3, value5],
                height_tiers: [value2, value4, value6]
            })
        }
    }

    StepFrostCake(value1, value2) {
        this.setState({
            color_cake: value1,
            class: value2,
        })
    }

    Page(props) {

        if (props.step === 'tiers') {
            return <Tiers StepTiers={props.handler} Arr={props.arr} />
        } else if (props.step === 'frost_cake') {
            return <FrostCake StepFrostCake={props.handler1}></FrostCake>
        } else if (props.step === 'cake_decorating') {
            return <CakeDecorating addElement={props.addElement} />
        }
    }

    addElement(value) {
        console.warn(value);
        this.setState({ elDecor: value });
        // this.allDecor();
        // console.log(this.state.elDecor);
        // this.setState ({elDecor: {}});
    }

    allDecor() {
        let all = this.state.allDecor;
        all.push(this.state.elDecor);
        this.setState({ allDecor: all });
    }

    setCoord(e) {
        const newDecor = {
            src: this.state.elDecor.src,
            x: e.pageX,
            y: e.pageY,
            width: this.state.elDecor.width,
        };

        this.setState({
            elDecor: newDecor,
            allDecor: [...this.state.allDecor, newDecor]
        });
        console.log(this.state.elDecor, this.state.allDecor);

    }

    handleStart () {
        this.setState ({moving: true});
    }

    handleDrag(e) {
        console.log(e);
        document.getElementById('basket').style.display = 'block';
    }

    handleStop(e) {
        this.setState ({moving: false});
        if (e.x >= 360 && e.x <= 420 && e.y >=30 && e.y <=100) {
            this.removeIMG(item);
            console.log ('stop');
        }
        document.getElementById('basket').style.display = 'none';

    }

    removeIMG(item) {
        let x = item.x;
        let y = item.y;
        const all = this.state.allDecor;
        for (let i = 0; i < all.length; i += 1) {
            if (all[i].x === x && all[i].y === y) {
                all.splice(i, 1);
            }
        }
        this.setState({ allDecor: all });
    }


    render() {
        let all = this.state.allDecor.map((item, index) => {
            return (<div key={index}>
                <Draggable
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <img src={item.src}
                        onContextMenu={this.removeIMG.bind(this, item)}
                        style={{
                            position: 'absolute', top: `${item.y}px`,
                            left: `${item.x}px`, width: `${this.state.elDecor.width}`
                        }}
                    ></img>
                </Draggable>

            </div>)
        })
        return (
            <div id='wrapper'>
                <div id='home'>
                    <div id='basket' 
                        style={{
                        border: '1px dotted black', position: 'absolute', top: '5vh',
                        left: '40vh', display: 'none'
                    }}>
                        <img
                            style={{ border: '10px solid black' }}
                            src='http://pngimg.com/uploads/recycle_bin/recycle_bin_PNG36.png'
                            style={{ width: '40px' }}></img>
                    </div>
                    <div id='cake_place' onClick={this.state.moving ? undefined : this.setCoord}>
                        {all}

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[2] * 5}px`,
                                height: `${this.state.height_tiers[2] * 5}px`,
                                background: this.state.color_cake
                            }}></div>

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[1] * 5}px`,
                                height: `${this.state.height_tiers[1] * 5}px`,
                                background: this.state.color_cake
                            }}></div>

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[0] * 5}px`,
                                height: `${this.state.height_tiers[0] * 5}px`,
                                background: this.state.color_cake
                            }}></div>

                    </div>
                </div>

                <nav>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'tiers' })}>
                        Ярусы торта
                </button>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'frost_cake' })}>
                        Покрытие торта
                </button>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'cake_decorating' })}>
                        Украшение торта
                </button>
                </nav>

                <this.Page step={this.state.show_page}
                    handler={(this.StepTiers.bind(this))}
                    handler1={(this.StepFrostCake.bind(this))}
                    addElement={(this.addElement.bind(this))}
                    arr={[{}, {}]} ></this.Page>

                {/* {this.state.elDecor ? <Cookie_el addElement={this.addElement}/> : null} */}
            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));

>>>>>>> 023f5b1f92d7a487fa2f463c8303d449a6652eb5
