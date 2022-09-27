import Guess from "../utils/Guess";
import {ReactComponent as ToGame} from "../svg/power48.svg";

/**
 * #Config
 *
 * Component to modify user parameters and init a new game
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author @jam65st | Jaime A. Mendez
 *
 */
const Config = (props) => {
	// Events
	/**
	 * #changeMin
	 *
	 * Updates the value of the minimal value parameter
	 *
	 * @param event {object}
	 */
	const changeMin    = (event) => props.updateMinMax(Guess.MIN, Number(event.target.value));
	/**
	 * #changeMax
	 *
	 * Updates the value of the maximum value parameter
	 *
	 * @param event {object}
	 */
	const changeMax    = (event) => props.updateMinMax(Guess.MAX, Number(event.target.value));
	/**
	 * #resetDefault
	 *
	 * Move the parameter to the factory defaults
	 *
	 */
	const resetDefault = () => props.updateMinMax(Guess.RESET);
	/**
	 * #setButton
	 *
	 * This method add a button component if any user parameter is different to the factory defaults.
	 *
	 * @returns {JSX.Element}
	 */
	const setButton = () => {
		if( props.min > Guess.DEFAULT_MIN || props.max !== Guess.DEFAULT_MAX ) {
			return <button id="reset" onClick={resetDefault}>
				{Guess.label_reset}
			</button>
		}
	}
	
	// Render
	return (
			<section id="config">
				<h1>
					<small>{Guess.title_sub}</small>
					{Guess.title}
				</h1>
				<div id="params">
					<div className="choose">{Guess.prelabels}</div>
					<fieldset>
						<label>{Guess.label_lower}</label>
						<input
								type="number"
								value={props.min}
								min="1"
								max="999"
								onChange={changeMin}
						/>
					</fieldset>
					<fieldset>
						<label>{Guess.label_upper}</label>
						<input
								type="number"
								value={props.max}
								min="1"
								max="999"
								onChange={changeMax}
						/>
					</fieldset>
				</div>
				{ setButton() }
				<div className="author">
					By: <a href={Guess.author_uri} target="_blank" rel="noreferrer">{Guess.author}</a>
				</div>
				
				<button id="toGame" onClick={props.changeScreen}>
					<ToGame />
				</button>
			</section>
	);
};

export default Config;
