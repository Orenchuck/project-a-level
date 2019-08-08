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
            <div >
                {this.state.showPage ? (<div className='headline'>
                <img src='http://dgdesign.ru/uploads/posts/2018-07/1532701408_546573243.png' 
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='https://cdn.pixabay.com/photo/2017/09/01/08/45/peony-2703458_960_720.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='http://galerey-room.ru/images/0_3d5b1_5d7631f_orig.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://clipart-db.ru/file_content/rastr/flower-027.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://cdn.pixabay.com/photo/2017/11/26/23/07/flower-2980200_960_720.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://www.playcast.ru/uploads/2017/04/25/22420556.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://www.pinpng.com/pngs/m/314-3141130_green-flowers-pngs-transparent.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://avatanplus.com/files/resources/original/5ad797000f334162da25d83e.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://img0.liveinternet.ru/images/attach/c/3/77/999/77999486_0_107a8_aa17910f_XL.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://kira-scrap.ru/KATALOG/ZVETY/3/0_8bddc_b7c623aa_M.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://topflo.ru/pc/article_pic/p_sini_tsvetok.png?1334056196'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://img-fotki.yandex.ru/get/6444/65387414.13f/0_c9382_9ac7e1b3_orig.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://www.playcast.ru/uploads/2015/02/06/11983069.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://img-fotki.yandex.ru/get/6521/102699435.c19/0_fda53_3b34d1fe_orig'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://i.pinimg.com/originals/3b/50/aa/3b50aa5e4c54acc14e5cddcc6caf768e.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='https://clipart-db.ru/file_content/rastr/flower_065.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>
                
                <img src='http://kira-scrap.ru/KATALOG/RAZNOE/2/0_149c13_81bf1fe7_M.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>


                <img src='http://img.lenagold.ru/r/roza/bel/bel_roza016.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://dgdesign.ru/uploads/posts/2018-03/1522065435_zelenye-listya-8724311.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <img src='http://dgdesign.ru/uploads/posts/2018-03/1522063103_myata-na-prozrachnom-fone-43fd.png'
                style={{width: '7vh'}}
                onClick = {this.whatPicture}></img>

                <br/>

                {/* <label className='headline'> Если хотите добавить свое подготовленное изображение
                     - вставьте на него ссылку
                    <input type="text" onChange={this.onChange}></input>
                </label>
                    <br/>
                <img src={this.state.elDecor} 
                     style={{width: '7vh'}}
                    onClick = {() => {this.props.add(this.state.elDecor)}}>
                </img>
                    <br/>
                <button className='button'>Ok</button>
                <div >Удалить фон у картинки и сделать его прозрачным можно
                     в приложении &nbsp;
                     <a target="_blank" style={{textDecoration: 'none'}} 
                     href="https://www.imgonline.com.ua/replace-white-background-with-transparent.php">
                       IMGonline.com.ua</a> </div> */}
                <button className='button' onClick ={this.onClick}>Назад</button>
                </div>) : <CakeDecorating />}
                
            </div>
        );
    }
}
