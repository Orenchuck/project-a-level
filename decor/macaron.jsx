import React from 'react';
import CakeDecorating from '../cake_decorating';

export default class Macaron_el extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            elDecor: {},
            showPage: true,
        }
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.whatPicture = this.whatPicture.bind(this);
    }

    onClick () {
        this.setState ({showPage: false});
    }

    onChange (event) {
        this.setState ({elDecor: `${event.target.value}`});
    }

    whatPicture (event) {
        this.setState({elDecor:{src: event.target.src,
        x: 0, y: 0}});
        console.log(this.state.elDecor);
        this.props.add(this.state.elDecor);
        
    }

    render () {
        return (
            <div>
                {this.state.showPage ? (<div>
                    <img src='http://www.pngall.com/wp-content/uploads/2/Macaron-PNG-Free-Image.png'
                 style={{width: '10vh'}}
                // onClick = {() => {this.props.add(this.state.elDecor)}}
                // onClick = {this.d}
                onClick = {this.whatPicture}
                >
                </img>
                <img src='https://www.stickpng.com/assets/thumbs/586ab2361fdce414493f510c.png'
                 style={{width: '10vh'}}
                // onClick = {() => {this.props.add(this.state.elDecor)}}
                onClick = {this.whatPicture}
                ></img>

                <img src='https://butik-tortiana.ru/upload/iblock/d9d/d9db8a6327e264163c5d68bd86c8542a.png'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='http://pngimg.com/uploads/macaron/macaron_PNG105.png'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <br/>
                {/* <label> Если хотите добавить свое подготовленное изображение
                     - вставьте на него ссылку
                    <input type="text" onChange={this.onChange}></input></label>
                    <br/>
                    <img src={this.state.elDecor} style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <button>Ok</button>
                <div>Удалить фон у картинки и сделать его прозрачным можно
                     в приложении &nbsp;
                     <a target="_blank" style={{textDecoration: 'none'}} 
                     href="https://www.imgonline.com.ua/replace-white-background-with-transparent.php">
                       IMGonline.com.ua</a> </div> */}
                <button onClick ={this.onClick}>Назад</button> 
                </div>) : <CakeDecorating />}                
                
            </div>
        );
    }
}