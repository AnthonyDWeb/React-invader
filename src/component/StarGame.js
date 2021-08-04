import React, { Component } from 'react'

export class StarGame extends Component {

// constructor(){
// 	super();

// 	this.state ={
// 		nbInvader: "",
// 		nbLineOfInvader: ""
// 	}
// }

	// componentDidUpdate(prevProps, Prevstate){
	// 	console.log('inverder ->' , this.state.nbInvader);
	// 	console.log('line ->' , this.state.nbLineOfInvader)
	// }

	// changeNbInvader = (e) => {this.setState({nbInvader: e.target.value})};
	// changeNbLineOfInvader = (e) => {this.setState({nbLineOfInvader: e.target.value})};

	render() {

		return (
			<div className="centerScreen">
				<div className="invaderChoice">
					<div className="invaderSelection">
						<label className="label1" for="NoI" >Number of Invaders </label>
						<input onClick={this.props.changeNbInvader} type='number' min="0" max="20" id="NoI" />
					</div>
					<div className="invaderSelection">
						<label className="label2" for="LoI" >Line of Invaders </label>
						<input onClick={this.props.changeNbLineOfInvader} type='number' min="0" max="20" id="LoI" />
					</div>
				</div>
				<span className="startGame">Press Enter to start the game !</span>	
			</div>
		)
	}
}

export default StarGame
