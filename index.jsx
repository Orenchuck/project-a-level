import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            tier: {diameter: {
                45: false,
                42: false,
                40: false,
                38: false,
                36: false,
                35: false,
                34: false,
                32: false,
                30: false,
                28: false,
                26: false,
                25: false,
                24: false,
                22: false,
                20: false,
                18: false,
                17: false,
                16: false,
                15: false,
                14: false,
                12: false,
                10: false},
                height: {4: false,
                    5: false,
                    7: false,
                    10: false,
                    12: false,
                    15: false}
            },
            //цвета: 0 = false, 1 - белый, 2 - шоколад
            coating: {
                cream: {cream: false,
                    color: 1,
                    smudget: {smudget: false, color: 2},
                    watercolor: {
                        watercolor: false, 
                        up: false, 
                        down: false,
                        color1: 0,
                        color2: 0,
                        color3: 0}},
                mastic: {mastic: false, color: 1},
                mirror: {
                    mirror: false, 
                    color1: 0,
                    color2: 0,
                    color3: 0},
                velour: {
                    velour: false, 
                    color1: 0,
                    color2: 0,
                    gradient: false}
            },
            decor: {
                flowers: {flowers: false, count: 0, img: false},
                cookie: {cookie: false, count: 0, img: false},
                lollipop: {lollipop: false, count: 0, color: 0},
                chocolateFigure: {chocolateFigure: false, count: 0, img: false},
                masticFigure: {masticFigure: false, count: 0, img: false},
                macaron: {macaron: false, count: 0, color: 0},
                photo: {photo: false, count: 0, img: false}
            }
        }

        this.whatTierD = this.whatTierD.bind(this);
        this.whatTierH = this.whatTierH.bind(this);
    }

    whatTierD () {
        let obj = this.state.tier.diameter;
        for (let key in obj) {
            if (key[i] === true) {
                return (
                    <div id={`diametr${key}`}>
                    </div>
                )
            }
        }
    }

    whatTierH () {
        let obj = this.state.tier.height;
        for (let key in obj) {
            if (key[i] === true) {
                return (
                    <div id={`height${key}`}>
                    </div>
                )
            }
        }
    }

    render () {
        return(
            <div>
                {this.whatTier}
            </div>
        )
    }
}

ReactDOM.render ((
    <Main />
), document.getElementById('root'));