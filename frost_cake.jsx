<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';


export default class FrostCake extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: '#520599',
        }
        this.ChangeColor = this.ChangeColor.bind(this);
    }
    ChangeColor() {
        this.setState({ color: event.target.value })
    }
    render() {
        return (
            <div id='options'>
                <div className='inner'>
                    <span className='headline'>Выберите цвет</span> 
                    <input  className='color'
                            type='color' 
                            value={this.state.color} 
                            onChange={this.ChangeColor}>
                    </input>
                </div>
                <label>
                    <p className='headline'>Выберите покрытие торта:</p> 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option className='cream' value="cream">Крем</option>
                        <option className="fondant" value="fondant">Мастика</option>
                        <option className="icing" value="icing">Зеркальная глазурь</option>
                        <option className="velour" value="velour">Велюр</option>
                    </select>
                </label>
                <button onClick={() => this.props.StepFrostCake(this.state.color,
                                      }>Ок</button>
            </div>
        )
    }

=======
import React from 'react';
import ReactDOM from 'react-dom';


export default class FrostCake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '#520599',
            value: 'cream',
        }
        this.ChangeColor = this.ChangeColor.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ChangeColor() {
        this.setState({ color: event.target.value})
    }
    handleChange(){
        this.setState({value : event.target.value})
    }

    render() {
        return (
            <div id='options'>
                <div className='inner'>
                    <span className='headline'>Выберите цвет</span> 
                    <div><input  className='color'
                            type='color' 
                            value={this.state.color} 
                            onChange={this.ChangeColor}>
                    </input></div>
                    
                </div>
                <label>
                    <p className='headline'>Выберите покрытие торта:</p> 
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option className='cream' value="cream">Крем</option>
                        <option className="fondant" value="fondant">Мастика</option>
                        <option className="icing" value="icing">Зеркальная глазурь</option>
                        <option className="velour" value="velour">Велюр</option>
                    </select>
                </label>
                <button onClick={() => this.props.StepFrostCake(this.state.color, this.state.value)}>Применить</button>
            </div>
        )
    }

>>>>>>> 023f5b1f92d7a487fa2f463c8303d44
