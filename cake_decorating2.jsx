import React from 'react';
import img1 from './src/cookies/1.png';
import img2 from './src/cookies/2.png';
import img3 from './src/cookies/3.png';
import img4 from './src/cookies/4.png';
import img5 from './src/cookies/5.png';
import img6 from './src/cookies/6.png';
import img7 from './src/cookies/7.png';
import img8 from './src/cookies/8.png';
import img9 from './src/cookies/9.png';
import img10 from './src/cookies/10.png';
import img11 from './src/cookies/11.png';
import img12 from './src/cookies/12.png';
import img13 from './src/cookies/13.png';
import img14 from './src/cookies/14.png';
import img15 from './src/cookies/15.png';
import img16 from './src/cookies/16.png';
import img17 from './src/cookies/17.png';
import img18 from './src/cookies/18.png';
import img19 from './src/cookies/19.png';
import img20 from './src/cookies/20.png';
import img21 from './src/1.png';
import img22 from './src/2.png';
import img23 from './src/3.png';
import img24 from './src/4.png';
import img25 from './src/5.png';
import img26 from './src/6.png';
import img27 from './src/7.png';
import img28 from './src/8.png';
import img29 from './src/9.png';
import img30 from './src/10.png';
import img31 from './src/11.png';
import img32 from './src/12.png';



export default class CakeDecorating extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            all_list: true,
            decor_type: 0,
            elDecor: '',
            groups: [
                {
                    id: 1,
                    text: 'Добавить пряник',
                    img: [{
                        url: img1,
                        width: '45px'
                    },
                    {
                        url: img2,
                        width: '65px'
                    },
                    {
                        url: img3,
                        width: '35px'
                    },
                    {
                        url: img4,
                        width: '40px'
                    },
                    {
                        url: img5,
                        width: '61px'
                    },
                    {
                        url: img6,
                        width: '67px'
                    },
                    {
                        url: img8,
                        width: '59px'
                    },
                    {
                        url: img9,
                        width: '59px'
                    },
                    {
                        url: img10,
                        width: '59px'
                    },
                    {
                        url: img11,
                        width: '61px'
                    },
                    {
                        url: img12,
                        width: '61px'
                    },
                    {
                        url: img13,
                        width: '59px'
                    },
                    {
                        url: img14,
                        width: '45px'
                    },
                    {
                        url: img15,
                        width: '67px'
                    },
                    {
                        url: img16,
                        width: '61px'
                    },
                    {
                        url: img17,
                        width: '61px'
                    },
                    {
                        url: img18,
                        width: '40px'
                    },
                    {
                        url: img19,
                        width: '59px'
                    },
                    {
                        url: img20,
                        width: '65px'
                    },
                    ]
                },
                {
                    id: 2,
                    text: 'Добавить леденец',
                    img: [{
                        url: img21,
                        width: '40px'
                    },
                    {
                        url: img22,
                        width: '40px'
                    },
                    {
                        url: img23,
                        width: '40px'
                    },
                    {
                        url: img24,
                        width: '35px'
                    },
                    {
                        url: img25,
                        width: '45px'
                    },
                    {
                        url: img26,
                        width: '52px'
                    },
                    {
                        url: img27,
                        width: '52px'
                    },
                    {
                        url: img28,
                        width: '52px'
                    },
                    {
                        url: img29,
                        width: '52px'
                    },
                    {
                        url: 'https://avatanplus.com/files/resources/mid/58582ff33c500159187b4e2f.png',
                        width: '40px'
                    },
                    {
                        url: 'https://purepng.com/public/uploads/large/lollipop-candy-wnm.png',
                        width: '40px'
                    },

                    ]
                },
                {
                    id: 3,
                    text: 'Добавить цветок',
                    img: [{
                        url: 'https://avatanplus.com/files/resources/original/5ad797000f334162da25d83e.png',
                        width: '65px'
                    },
                    {
                        url: 'http://dgdesign.ru/uploads/posts/2018-07/1532701408_546573243.png',
                        width: '40px'
                    },
                    {
                        url: 'https://cdn.pixabay.com/photo/2017/09/01/08/45/peony-2703458_960_720.png',
                        width: '40px'
                    },
                    {
                        url: 'http://galerey-room.ru/images/0_3d5b1_5d7631f_orig.png',
                        width: '30px'
                    },
                    {
                        url: 'https://clipart-db.ru/file_content/rastr/flower-027.png',
                        width: '40px'
                    },
                    {
                        url: 'https://cdn.pixabay.com/photo/2017/11/26/23/07/flower-2980200_960_720.png',
                        width: '40px'
                    },
                    {
                        url: 'http://www.playcast.ru/uploads/2017/04/25/22420556.png',
                        width: '40px'
                    },
                    {
                        url: 'https://img0.liveinternet.ru/images/attach/c/3/77/999/77999486_0_107a8_aa17910f_XL.png',
                        width: '40px'
                    },
                    {
                        url: 'http://kira-scrap.ru/KATALOG/ZVETY/3/0_8bddc_b7c623aa_M.png',
                        width: '30px'
                    },
                    {
                        url: 'https://topflo.ru/pc/article_pic/p_sini_tsvetok.png?1334056196',
                        width: '30px'
                    },
                    {
                        url: 'https://img-fotki.yandex.ru/get/6444/65387414.13f/0_c9382_9ac7e1b3_orig.png',
                        width: '40px'
                    },
                    {
                        url: 'http://www.playcast.ru/uploads/2015/02/06/11983069.png',
                        width: '35px'
                    },
                    {
                        url: 'https://img-fotki.yandex.ru/get/6521/102699435.c19/0_fda53_3b34d1fe_orig',
                        width: '30px'
                    },
                    {
                        url: 'https://i.pinimg.com/originals/3b/50/aa/3b50aa5e4c54acc14e5cddcc6caf768e.png',
                        width: '40px'
                    },
                    {
                        url: 'https://clipart-db.ru/file_content/rastr/flower_065.png',
                        width: '40px'
                    },
                    {
                        url: 'http://kira-scrap.ru/KATALOG/RAZNOE/2/0_149c13_81bf1fe7_M.png',
                        width: '30px'
                    },
                    {
                        url: 'http://img.lenagold.ru/r/roza/bel/bel_roza016.png',
                        width: '40px'
                    },
                    {
                        url: 'http://dgdesign.ru/uploads/posts/2018-03/1522065435_zelenye-listya-8724311.png',
                        width: '30px'
                    },
                    {
                        url: 'http://dgdesign.ru/uploads/posts/2018-03/1522063103_myata-na-prozrachnom-fone-43fd.png',
                        width: '30px'
                    },
                    ]
                },
                {
                    id: 4,
                    text: 'Добавить макарон',
                    img: [{
                        url: img30,
                        width: '40px'
                    },
                    {
                        url: img31,
                        width: '24px'
                    },
                    {
                        url: img32,
                        width: '45px'
                    },
                    {
                        url: 'https://butik-tortiana.ru/upload/iblock/d9d/d9db8a6327e264163c5d68bd86c8542a.png',
                        width: '45px'
                    },
                    {
                        url: 'http://www.pngall.com/wp-content/uploads/2/Macaron-PNG-Free-Image.png',
                        width: '30px'
                    },
                    {
                        url: 'https://www.stickpng.com/assets/thumbs/586ab2361fdce414493f510c.png',
                        width: '24px'
                    },
                    {
                        url: 'http://pngimg.com/uploads/macaron/macaron_PNG105.png',
                        width: '52px'
                    },
                    ]
                },
                {
                    id: 5,
                    text: 'Добавить ягоды',
                    img: [{
                        url: 'http://dgdesign.ru/uploads/posts/2018-03/1522067166_malina-prozrachnyy-fon-55342s.png',
                        width: '30px'
                    },
                    {
                        url: 'https://images.ua.prom.st/384012376_w640_h640_letnyaya-malina.jpg',
                        width: '30px'
                    },
                    {
                        url: 'https://i.pinimg.com/originals/34/13/e5/3413e52c44c9b3cb85731ef0ccf1d8fb.png',
                        width: '40px'
                    },
                    {
                        url: 'http://www.byruss.com/upload/iblock/893/8933a2b5ba54aae64bbb7d36b5bf9c42.png',
                        width: '40px'
                    },
                    {
                        url: 'http://www.cocktailing.ru/img/u_ingredients/img_primary/ingredient_strawberry.png',
                        width: '30px'
                    },
                    {
                        url: 'http://dgdesign.ru/uploads/posts/2018-05/1527072841_klubnika-43688.png',
                        width: '40px'
                    },
                    {
                        url: 'http://dgdesign.ru/uploads/posts/2018-08/1533919444_kartinki-na-prozrachnom-fone-yagody-chernika-335417.png',
                        width: '30px'
                    },
                    {
                        url: 'http://pngimg.com/uploads/blueberries/blueberries_PNG33.png',
                        width: '30px'
                    },
                    {
                        url: 'http://parenie.com/wp-content/uploads/2016/02/ejevika.png',
                        width: '30px'
                    },
                    {
                        url: 'https://ogorodko.ru/wp-content/uploads/2017/08/%D0%95%D0%B6%D0%B5%D0%B2%D0%B8%D0%BA%D0%B0-%D1%81%D0%B0%D0%B4%D0%BE%D0%B2%D0%B0%D1%8F.png',
                        width: '35px'
                    },
                    {
                        url: 'http://www.ramki-photoshop.ru/eda/eda26.png',
                        width: '24px'
                    },
                    {
                        url: 'http://pngimg.com/uploads/raspberry/raspberry_PNG5064.png',
                        width: '24px'
                    },
                    {
                        url: 'https://img0.liveinternet.ru/images/attach/d/0/141/676/141676268_20.png',
                        width: '30px'
                    },
                    {
                        url: 'https://pngicon.ru/file/uploads/krasnaja-smorodina.png',
                        width: '24px'
                    },
                    {
                        url: 'http://kira-scrap.ru/KATALOG/EDA/1/0_8f762_29ea9fa8_M.png',
                        width: '24px'
                    },
                    {
                        url: 'https://cdn.pixabay.com/photo/2016/02/24/17/31/fruit-1220367__340.png',
                        width: '40px'
                    },
                    {
                        url: 'http://pngimg.com/uploads/cherry/cherry_PNG619.png',
                        width: '30px'
                    },
                    ]
                }
            ]
        }

        this.list = this.list.bind(this);
        this.what_decor = this.what_decor.bind(this);
        this.whatPicture = this.whatPicture.bind(this);
    }

    list() {
        return (this.state.groups.map(group => (
            <div key={group.id} onClick={() => this.setState({ decor_type: group.id })}>
                {group.text}
                <br />
            </div>
        )
        ))
    }

    what_decor(num) {
        for (let i = 0; i < this.state.groups.length; i += 1) {
            if (this.state.groups[i].id === num) {
                return this.state.groups[i].img.map((el, index) => (
                    <img key={index} 
                    src={el.url} 
                    style={{ width: el.width }}
                    onClick={this.whatPicture}></img>
                ))
            }
        }
    }

    whatPicture(event) {
        const elDecor = {
            src: event.target.src,
            x: 0, y: 0,
            width: event.target.style.width,
            id: Math.floor(Math.random() * 1000) + Date.now(),
        };
        this.setState({
            elDecor,
        });
        this.props.addElement(elDecor);
    }

    render() {
        if (this.state.decor_type === 0) {
            return (
                <div id="options">
                    {this.list()}
                </div>
            );
        }

        return (
            <div id="options">
                {this.what_decor(this.state.decor_type)}
                <br />
                <button onClick={() => this.setState({ decor_type: 0 })}>Back</button>
            </div>
        );
    }
}
