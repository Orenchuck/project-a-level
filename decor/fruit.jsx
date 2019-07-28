import React from 'react';
import CakeDecorating from '../cake_decorating';

export default class Fruit_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: '',
            showPage: true,
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        this.setState ({elDecor: `${event.target.value}`});
    }

    onClick () {
        this.setState ({showPage: false});
    }

    render () {
        return (
            <div>
                {this.state.showPage ? (<div>
                    <img src='https://img1.freepng.ru/20190513/hsx/kisspng-clip-art-transparency-portable-network-graphics-st-fruits-archives-search-png-5cd905e46e0870.8841780315577266924507.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://i.pinimg.com/originals/eb/2f/05/eb2f05f9101ebd77d440815fdec86495.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://png.pngtree.com/element_pic/16/11/19/96a6e5c283951a47cbd6aca097969f11.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://img1.freepng.ru/20180126/ikq/kisspng-raspberry-ketone-fruit-preserves-raspberry-extract-raspberry-5a6b4c71cdf365.3897457415169813618436.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://photographers.ua/thumbnails/pictures/13653/800xbilberry.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://sc-diabeton.ru/f/upload/7/9/2/7928bd070572a9e7041992e5c66fdb0c.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://png.pngtree.com/element_pic/16/10/23/bb78c5a2c75ff87106b044f775ecfe1e.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='http://parenie.com/wp-content/uploads/2016/02/ejevika.png' 
                style={{width: '7vh'}}
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
                </div>) : <CakeDecorating />}
                
                
            </div>
        );
    }
}
