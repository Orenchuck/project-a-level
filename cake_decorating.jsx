import React from 'react';
import ReactDOM from 'react-dom';
import Cookie_el from './decor/cookie';
import Lollipop_el from './decor/lollipops';
import Flower_el from './decor/flower';
import Macaron_el from './decor/macaron';
import Fruit_el from './decor/fruit';



export default class CakeDecorating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            all_list: true,
            decor_type: 0,
            elDecor: '',
        }

        this.cookie = this.cookie.bind(this);
        this.lollipop = this.lollipop.bind(this);
        this.flower = this.flower.bind(this);
        this.macaron = this.macaron.bind(this);
        this.fruit = this.fruit.bind(this);
        this.what_decor = this.what_decor.bind(this);
    }

    cookie () {
        this.setState ({all_list: false, decor_type: 1});
    }

    lollipop () {
        this.setState ({all_list: false, decor_type: 2});
    }

    flower () {
        this.setState ({all_list: false, decor_type: 4});
    }

    macaron () {
        this.setState ({all_list: false, decor_type: 5});
    }

    fruit () {
        this.setState ({all_list: false, decor_type: 6});
    }

    add (value) {
        this.setState ({elDecor: value});
    }

    what_decor () {
        switch (this.state.decor_type){
          case 0: this.setState ({all_list: true}); break;
          case 1: return <Cookie_el add={this.props.addElement}/>
          case 2: return <Lollipop_el add={this.props.addElement}/>;
        //   case 3: return <Foundant_el />;
          case 4: return <Flower_el add={this.props.addElement}/>; 
          case 5: return <Macaron_el add={this.props.addElement}/>; 
          case 6: return <Fruit_el add={this.props.addElement} />; 
        }
        
    }

    render() {
        return (
            <div>
                {this.state.all_list ? (<ul id='decor_list'>
                    <li>
                        <div onClick = {this.cookie}>
                            <label className='item_decor'>
                                <input type="radio"></input>
                                Добавить пряник
                            </label>
                            <button className='destroy'>x</button>
                        </div>
                    
                </li>
                <li>
                    <div onClick = {this.lollipop}>
                        <label className='item_decor'>
                            <input type="radio"></input>
                            Добавить леденец
                        </label>
                        <button className='destroy'>x</button>
                    </div>
                </li>
                <li>
                    <div onClick = {this.cookie}>
                        <label className='item_decor'>
                            <input type="radio"></input>
                            Добавить фигурку из мастики
                        </label>
                        <button className='destroy'>x</button>   
                    </div>
                </li>
                <li>
                    <div onClick = {this.flower}>
                        <label className='item_decor'>
                            <input type="radio"></input>
                            Добавить цветок
                        </label>  
                        <button className='destroy'>x</button>
                    </div>
                    
                </li>
                <li>
                    <div onClick = {this.macaron}>
                        <label className='item_decor'>
                            <input type="radio"></input>
                            Добавить макарон
                        </label>
                        <button className='destroy'>x</button>
                    </div>
                    
                </li>
                <li>
                    <div onClick = {this.fruit}>
                        <label className='item_decor'>
                            <input type="radio"></input>
                            Добавить фрукт или ягоду
                        </label>
                        <button className='destroy'>x</button>
                    </div>
                    
                </li>
                </ul>) : this.what_decor()}
                
                
            </div>
        )

    }
}

// class Cookie_el extends React.Component {
//     constructor (props) {
//         super (props);
//         this.state = {
//             img: '',
//         }

//         this.onChange = this.onChange.bind(this);
//     }
//     onChange (event) {
//         this.setState ({img: `${event.target.value}`});
//         console.log (this.state.img);
//     }

//     render () {
//         return (
//             <div>
//                 <img src={this.state.img}></img>
//                 <label><input type="text" onChange={onChange}></input></label>
//             </div>
//         );
//     }
// }