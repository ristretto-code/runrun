import React, {Component} from 'react';
import '../style/_modal.scss';

class StartModal extends Component{

    render(){

        return(
            <div className="StartModal">
                    <div className="animalNumContainer">
                        <div>러너숫자</div>
                        <button onClick={this.props.DecreaseAnimal}>-</button>
                        <span className="AnimalNum">{this.props.AnimalCount}</span>
                        <button onClick={this.props.IncreaseAnimal}>+</button>
                    </div>
                    <div className="checkBoxContainer">
                        <input id="dummyCheck" type="checkBox"/>
                        <label htmlFor="dummyCheck">장애물 등장</label>
                    </div>
                    <div className="inputContainer">
                        {(this.props.AnimalCount >= 2) && <input id="0" placeholder={this.props.Animal[0].name} vlaue={this.props.Animal[0].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 2) && <input id="1" placeholder={this.props.Animal[1].name} vlaue={this.props.Animal[1].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 3) && <input id="2" placeholder={this.props.Animal[2].name} vlaue={this.props.Animal[2].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 4) && <input id="3" placeholder={this.props.Animal[3].name} vlaue={this.props.Animal[3].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 5) && <input id="4" placeholder={this.props.Animal[4].name} vlaue={this.props.Animal[4].name} onChange={this.props.NameChange}/>}
                        {(this.props.AnimalCount >= 6) && <input id="5" placeholder={this.props.Animal[5].name} vlaue={this.props.Animal[5].name} onChange={this.props.NameChange}/>}
                    </div>
                    <div className="submitContainer">
                        <button onClick={this.props.StartShow}>설정끝!</button>
                    </div>
            </div>
        )
    }
}

export default StartModal;