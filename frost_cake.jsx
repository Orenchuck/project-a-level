import React from 'react';
import ReactDOM from 'react-dom';


export default class FrostCake extends React.Component {
    constructor(props) {
        super(props);

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
            <div>
                <div>Выберите цвет <input type='color' value={this.state.color} onChange={this.ChangeColor}></input></div>
                <label>
         <p>Выберите покрытие торта:</p> 
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="cream">Крем</option>
            <option value="fondant">Мастика</option>
            <option value="icing">Зеркальная глазурь</option>
            <option value="velour">Велюр</option>
          </select>
        </label>
                <button onClick={() => this.props.StepFrostCake(this.state.color)}>Ок</button>
            </div>
        )
    }

}