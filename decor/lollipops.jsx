import React from 'react';
import CakeDecorating from '../cake_decorating';

export default class Lollipop_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
            showPage: true,
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onClick () {
        this.setState ({showPage: false});
    }

    onChange (event) {
        this.setState ({elDecor: `${event.target.value}`});
    }

    render () {
        return (
            <div id='options'>
                {this.state.showPage ? (
                    <div>
                   <img src='https://st3.depositphotos.com/1009676/16362/v/1600/depositphotos_163629734-stock-illustration-sweet-colorful-lollipop.jpg'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='./src/1.JPEG'
                 style={{width: '10vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <label className='headline'> Если хотите добавить свое подготовленное изображение
                     - вставьте на него ссылку
                    <input type="text" onChange={this.onChange}></input></label>
                    <br/>
                    <img src={this.state.elDecor} style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <button>Ok</button>
                <div className='headline'>Удалить фон у картинки и сделать его прозрачным можно
                     в приложении &nbsp;
                     <a target="_blank" style={{textDecoration: 'none'}} 
                     href="https://www.imgonline.com.ua/replace-white-background-with-transparent.php">
                       IMGonline.com.ua</a> </div>
                <button onClick ={this.onClick}>Назад</button> 
                </div>
                ) : <CakeDecorating />}
                
            </div>
        );
    }
}
