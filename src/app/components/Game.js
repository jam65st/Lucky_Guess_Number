import Attempts from "./Attempts";
import {ReactComponent as ToConfig} from "../svg/settings48.svg";
import Guess from "../utils/Guess";

/**
 * #Game
 *
 * Component with game elements.
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author @jam65st | Jaime A. Mendez
 */
const Game = (props) => {
	// Events
	/**
	 * #checkValue
	 *
	 * Method to test the valid user values before to update it
	 *
	 * @param event {object}
	 *
	 */
	const checkValue = event => {
		let value = Number(event.target.value);
		
		if (!isNaN(value) && value >= props.min && value <= props.max) {
			// valid values
			props.updateGuess(event.target.value);
		} else if (value !== 0) {
			// invalid values preserves the latest valid value
			event.target.value = props.guessValue;
		}
	}
	
	/**
	 * #checkEnter
	 *
	 * Activates blur if user press enter key
	 *
	 * @param event {object}
	 *
	 */
	const checkEnter = event => {
		if (event.key === 'Enter') props.testGuess(event);
	}
	
	// render
	return (
			<section id="game" result={props.result}>
				{Guess.guessInfo(props.min, props.max)}
				<div className="status">{props.result.toUpperCase()}</div>
				<Attempts attemptsList={props.attemptsList}/>
				<div className="guess-holder">
					<input type="number" placeholder="#" value={props.guessValue === 0 ? props.min : props.guessValue}
					       onChange={checkValue} onBlur={props.testGuess}
					       onKeyDown={checkEnter} disabled={props.isDisabled}/>
				</div>
				<button id="toConfig"
				        className={props.attemptsList.length < 5 && props.result !== Guess.STATE_WINNER ? 'hidden' : ''}
				        onClick={props.changeScreen}>
					<ToConfig/>
				</button>
			</section>
	);
};

export default Game;
