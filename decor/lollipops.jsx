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
            <div id='options'>
                {this.state.showPage ? (
                    <div>
                   <img src='https://img2.freepng.ru/20171216/0a7/lollipop-png-5a35f34fc47965.8142967215134851358048.jpg'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://avatanplus.com/files/resources/mid/58582ff33c500159187b4e2f.png'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://purepng.com/public/uploads/large/lollipop-candy-wnm.png'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://mpng.pngfly.com/20171219/c1f/lollipop-png-5a38b56c33fa85.4957414815136659002129.jpg'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://mpng.pngfly.com/20171127/5e3/multicolor-swirl-lollipop-transparent-clip-art-5a1c9d95888097.1718996315118247895591.jpg'
                 style={{width: '10vh'}}
                onClick = {this.whatPicture}></img>
                <br/>
                {/* <label className='headline'> Если хотите добавить свое подготовленное изображение
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
                       IMGonline.com.ua</a> </div> */}
                <button onClick ={this.onClick}>Назад</button> 
                </div>
                ) : <CakeDecorating />}
                
            </div>
        );
    }
}
