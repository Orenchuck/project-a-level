import React from 'react';
import ReactDOM from 'react-dom';
import Tiers from './tiers';
import FrostCake from './frost_cake';
import CakeDecorating from './cake_decorating2';
import Draggable from 'react-draggable';
import domtoimage from 'dom-to-image';

export class Home extends React.Component {
    constructor() {
        super();
        localStorage.getItem('cake') ? this.state = JSON.parse(localStorage.getItem('cake')) : 
        this.state = {
            show_page: 'tiers',
            width_tiers: [30, 0, 0, 0, 0],
            height_tiers: [10, 0, 0, 0, 0],
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
        this.savePicture = this.savePicture.bind(this);
    }



    StepTiers(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10) {

        if (value1 < 115 && value2 < 115 && value3 < 115 && value4 < 115 && value5 < 115 && value6 < 115 &&
            value7 < 115 && value8 < 115 && value9 < 115 && value10 < 115) {
            this.setState({
                width_tiers: [value1, value3, value5, value7, value9],
                height_tiers: [value2, value4, value6, value8, value10]
            })
        } else {
            alert('Торт слишком большой! Введите значение меньше')
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
        this.setState({ elDecor: value });
    }

    allDecor() {
        let all = this.state.allDecor;
        all.push(this.state.elDecor);
        this.setState({ allDecor: all });
    }

    setCoord(e) {
        const fot = document.getElementById('cake_place');

        const rect = fot.getBoundingClientRect();

        const newDecor = {
            src: this.state.elDecor.src,
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
            width: this.state.elDecor.width,
            id: this.state.elDecor.id,
        };

        this.setState({
            elDecor: newDecor,
            allDecor: [...this.state.allDecor, newDecor]
        });
        console.log(this.state.elDecor, this.state.allDecor);


    }

    handleStart() {
        this.setState({ moving: true });
    }

    handleDrag(e) {
        console.log(e);
        document.getElementById('basket').style.display = 'block';
    }

    handleStop(e) {
        setTimeout(() => this.setState({ moving: false }), 10);

        const y = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;
        const x = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
        const fot = document.getElementById('basket');

        if (fot) {
            const rect = fot.getBoundingClientRect();

            if (y > rect.top && y < rect.bottom && x > rect.left && x < rect.right) {
                this.removeIMG(this.state.allDecor.find(el => el.id === +e.target.getAttribute('data-id')));
            }
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

    savePicture() {
        domtoimage.toBlob(document.getElementById('cake_place'))
            .then(function (blob) {
                console.log('blob', blob);
                const URL = window.URL.createObjectURL(blob);
                const link = document.createElement('a');

                link.href = URL;
                link.download = 'cake.png';
                link.click()
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });

                setTimeout(() => window.URL.revokeObjectURL(URL), 10000);
            });
    }

    componentDidUpdate () {
        let state = JSON.stringify(this.state);
        localStorage.setItem ('cake', state);
        console.log(localStorage.getItem('cake'));
    }

    render() {
        let all = this.state.allDecor.map((item, index) => {
            return (<div key={item.id}>
                <Draggable
                    onStart={this.handleStart}
                    onDrag={this.handleDrag}
                    onStop={this.handleStop}>
                    <img src={item.src}
                        draggable={false}
                        data-id={item.id}
                        onContextMenu={this.removeIMG.bind(this, item)}
                        style={{
                            position: 'absolute', top: `${item.y}px`,
                            left: `${item.x}px`, width: `${item.width}`,
                            zIndex: 1,
                            transform: 'translate(-50%, -50%)'
                        }}
                    ></img>
                </Draggable>

            </div>)
        })
        return (
            <div id='wrapper'>
                <div id='home'>
                    
                    <div id='cake_place' onClick={this.state.moving ? undefined : this.setCoord}>
                        {all}

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[4] * 5}px`,
                                height: `${this.state.height_tiers[4] * 5}px`,
                                background: this.state.color_cake
                            }}>
                            <div className={this.state.class}
                                style={{
                                    width: `${this.state.width_tiers[4] * 5}px`,
                                    height: `${this.state.height_tiers[4] * 5}px`
                                }}></div>
                        </div>

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[3] * 5}px`,
                                height: `${this.state.height_tiers[3] * 5}px`,
                                background: this.state.color_cake
                            }}>
                            <div className={this.state.class}
                                style={{
                                    width: `${this.state.width_tiers[3] * 5}px`,
                                    height: `${this.state.height_tiers[3] * 5}px`
                                }}></div>
                        </div>

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[2] * 5}px`,
                                height: `${this.state.height_tiers[2] * 5}px`,
                                background: this.state.color_cake
                            }}>
                            <div className={this.state.class}
                                style={{
                                    width: `${this.state.width_tiers[2] * 5}px`,
                                    height: `${this.state.height_tiers[2] * 5}px`
                                }}></div>
                        </div>

                        <div className={this.state.class} style={{
                            width: `${this.state.width_tiers[1] * 5}px`,
                            height: `${this.state.height_tiers[1] * 5}px`,
                            background: this.state.color_cake
                        }}>
                            <div className={this.state.class}
                                style={{
                                    width: `${this.state.width_tiers[1] * 5}px`,
                                    height: `${this.state.height_tiers[1] * 5}px`
                                }}></div>
                        </div>

                        <div className={this.state.class}
                            style={{
                                width: `${this.state.width_tiers[0] * 5}px`,
                                height: `${this.state.height_tiers[0] * 5}px`,
                                background: this.state.color_cake
                            }}>
                            <div className={this.state.class}
                                style={{
                                    width: `${this.state.width_tiers[0] * 5}px`,
                                    height: `${this.state.height_tiers[0] * 5}px`
                                }}></div>
                        </div>
                        <footer id='basket'
                            style={{
                                border: '2px dotted black',
                                background: '#FFEFD5', padding: '20px', display: 'none',
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                boxSizing: 'border-box',
                            }}>
                            <p>Перетяните картинку сюда для удаления</p>
                        </footer>
                    </div>
                </div>

                <this.Page step={this.state.show_page}
                    handler={(this.StepTiers.bind(this))}
                    handler1={(this.StepFrostCake.bind(this))}
                    addElement={(this.addElement.bind(this))}
                    arr={[{}, {}]} ></this.Page>

                <button onClick={this.savePicture}>Сохранить макет</button>

                <nav>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'tiers' })}>
                    <i className='fa fa-cake'></i>
                        {/* Ярусы торта */}
                </button>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'frost_cake' })}>
                    <i className="fa fa-spatula"></i>
                        {/* Покрытие торта */}
                </button>
                    <button
                        className='nav_button'
                        onClick={() => this.setState({ show_page: 'cake_decorating' })}>
                    <i className="fa fa-candy"></i>
                        {/* Украшение торта */}
                </button>

                </nav>
            </div>
        )
    }
}

ReactDOM.render((
    <Home></Home>
), document.getElementById('root'));


