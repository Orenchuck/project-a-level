import React from 'react';
import CakeDecorating from '../cake_decorating';

export default class Flower_el extends React.Component {
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
            <div>
                {this.state.showPage ? (<div>
                <img src='https://png.pngtree.com/png-clipart/20190604/original/pngtree-rose-vector-png-image_1079591.jpg' 
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                
                <img src='http://rylik.ru/uploads/posts/2016-02/1456303271_vector-peonies-collection-4-06.jpg'
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                
                <img src='https://img2.freepng.ru/20171220/paw/white-rose-png-image-flower-white-rose-png-picture-5a3a973974a9e8.31503032151378924147794801.jpg'
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='http://zvetnoe.ru/upload/catalog/2017/03/CH.016036.jpg'
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://png.pngtree.com/png-clipart/20190614/original/pngtree-beautiful-eustoma-flowers-png-image_3715800.jpg'
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>

                <img src='https://png.pngtree.com/element_pic/00/16/10/1357fe6a6a239af.jpg'
                style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <label> Если хотите добавить свое подготовленное изображение
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
                       IMGonline.com.ua</a> </div>
                <button onClick ={this.onClick}>Назад</button>
                </div>) : <CakeDecorating />}
                
            </div>
        );
    }
}
