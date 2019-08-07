import React from 'react';


export default class Tiers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width_tiers1: '',
            height_tiers1: '',
            width_tiers2: '',
            height_tiers2: '',
            width_tiers3: '',
            height_tiers3: '',
        }
        this.ChangeWidthTiers1 = this.ChangeWidthTiers1.bind(this);
        this.ChangeHeightTiers1 = this.ChangeHeightTiers1.bind(this);
        this.ChangeWidthTiers2 = this.ChangeWidthTiers2.bind(this);
        this.ChangeHeightTiers2 = this.ChangeHeightTiers2.bind(this);
        this.ChangeWidthTiers3 = this.ChangeWidthTiers3.bind(this);
        this.ChangeHeightTiers3 = this.ChangeHeightTiers3.bind(this);
        this.ClickButton = this.ClickButton.bind(this);

        
        
    }

    ChangeWidthTiers1() {
        this.setState({ width_tiers1: event.target.value });
     }
     ChangeHeightTiers1() {
        this.setState({ height_tiers1: event.target.value });
     }


     ChangeWidthTiers2() {
        this.setState({ width_tiers2: event.target.value });
     }
     ChangeHeightTiers2() {
        this.setState({ height_tiers2: event.target.value });
     }


     ChangeWidthTiers3() {
        this.setState({ width_tiers3: event.target.value });
     }
     ChangeHeightTiers3() {
        this.setState({ height_tiers3: event.target.value });
     }

    

     ClickButton(){
         this.props.StepTiers(+this.state.width_tiers1, +this.state.height_tiers1, 
           +this.state.width_tiers2,  +this.state.height_tiers2,
           +this.state.width_tiers3, +this.state.height_tiers3);
     }

    

    render() {
        return (
            <div id='options'>
                <div>
                    <div className='headline'>Первый ярус</div>

                   <div className='group'>{/*Ширина яруса*/}
                       <input type='number' min='10' max='50'
                              value={this.state.width_tiers1} 
                              onChange={this.ChangeWidthTiers1} 
                              required>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса</label>
                    </div>

                    <div className='group'>{/*Высота яруса*/}
                        <input type='number' min='3' max='25'
                               value={this.state.height_tiers1} 
                               onChange={this.ChangeHeightTiers1} 
                               required>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса</label>
                    </div>
                </div>

                <div >

                    <div className='headline'>Второй ярус</div>
                    <div className='group'>{/*Ширина яруса*/}
                        <input type='number' min='10' max='45'
                               value={this.state.width_tiers2} 
                               onChange={this.ChangeWidthTiers2}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Ширина яруса</label>
                    </div>

                    <div className='group'>{/*Высота яруса*/}
                        <input type='number' min='3' max='25'
                               value={this.state.height_tiers2} 
                               onChange={this.ChangeHeightTiers2}>
                        </input>
                        <span className='bar'></span>
                        <label className='size'>Высота яруса</label>
                    </div>

                </div>

                <div >
                <div className='headline'>Третий ярус</div>
                <div className='group'>{/*Ширина яруса*/}
                    <input type='number' min='10' max='40'
                           value={this.state.width_tiers3} 
                           onChange={this.ChangeWidthTiers3}>
                    </input>
                    <span className='bar'></span>
                    <label className='size'>Ширина яруса</label>
                </div>
                <div className='group'>{/*Высота яруса*/}
                    <input type='number' min='3' max='25'
                            value={this.state.height_tiers3} 
                            onChange={this.ChangeHeightTiers3}>
                    </input>
                    <span className='bar'></span>
                    <label className='size'>Высота яруса</label>
                </div>
                </div>
                <button onClick = {this.ClickButton}>Добавить ярусы</button>   
            </div>
        )
    }
}
