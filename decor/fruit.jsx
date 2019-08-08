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
        this.whatPicture = this.whatPicture.bind(this);
    }

    onChange (event) {
        this.setState ({elDecor: `${event.target.value}`});
    }

    onClick () {
        this.setState ({showPage: false});
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
                    <img src='http://dgdesign.ru/uploads/posts/2018-03/1522067166_malina-prozrachnyy-fon-55342s.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://images.ua.prom.st/384012376_w640_h640_letnyaya-malina.jpg' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://i.pinimg.com/originals/34/13/e5/3413e52c44c9b3cb85731ef0ccf1d8fb.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://www.byruss.com/upload/iblock/893/8933a2b5ba54aae64bbb7d36b5bf9c42.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://www.cocktailing.ru/img/u_ingredients/img_primary/ingredient_strawberry.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://dgdesign.ru/uploads/posts/2018-05/1527072841_klubnika-43688.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://img2.freepng.ru/20180130/ycq/kisspng-frutti-di-bosco-blackberry-fruit-clip-art-blueberry-5a71085188f717.491721691517357137561.jpg' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://dgdesign.ru/uploads/posts/2018-08/1533919444_kartinki-na-prozrachnom-fone-yagody-chernika-335417.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://pngimg.com/uploads/blueberries/blueberries_PNG33.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='http://parenie.com/wp-content/uploads/2016/02/ejevika.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='https://ogorodko.ru/wp-content/uploads/2017/08/%D0%95%D0%B6%D0%B5%D0%B2%D0%B8%D0%BA%D0%B0-%D1%81%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://www.ramki-photoshop.ru/eda/eda26.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://pngimg.com/uploads/raspberry/raspberry_PNG5064.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://img0.liveinternet.ru/images/attach/d/0/141/676/141676268_20.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://pngicon.ru/file/uploads/krasnaja-smorodina.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://kira-scrap.ru/KATALOG/EDA/1/0_8f762_29ea9fa8_M.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://cdn.pixabay.com/photo/2016/02/24/17/31/fruit-1220367__340.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://pngimg.com/uploads/cherry/cherry_PNG619.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <br/>
                {/* <label className='headline'> Если хотите добавить свое подготовленное изображение
                     - вставьте на него ссылку
                    <input type="text" onChange={this.onChange}></input></label>
                    <br/>
                    <img src={this.state.elDecor} style={{width: '7vh'}}
                onClick = {() => {this.props.add(this.state.elDecor)}}></img>
                <br/>
                <button onClick = {() => {this.props.add(this.state.elDecor)}}>Ok</button>
                <div className='headline'>Удалить фон у картинки и сделать его прозрачным можно
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
