import "../styles.css";
import {useState} from "react";
import Guess from "./utils/Guess";
import Game from "./components/Game";
import Config from "./components/Config";

/**
 * #App
 *
 * Contains the top features of the game
 *
 * @returns {JSX.Element}
 * @constructor
 * @author @jam65st | Jaime A. Mendez
 *
 */
const App = () => {
	// States
	const [randomNumber, setRandomNumber] = useState(0);
	const [current, setCurrent]           = useState(Guess.CURRENT_CONFIG);
	const [attemptsList, setAttemptsList] = useState([]);
	const [guessValue, setGuessValue]     = useState(0);
	const [result, setResult]             = useState(Guess.STATE_INIT);
	const [min, setMin]                   = useState(Guess.DEFAULT_MIN);
	const [max, setMax]                   = useState(Guess.DEFAULT_MAX);
	const [isDisabled, setIsDisabled]     = useState(false);
	
	/**
	 * ## updateMinMax
	 *
	 * Updates game parameters of minimal and maximal bound
	 *
	 * @param kind {string} It use values of Guess.MIN and Guess.MAX
	 * @param value {number} positive integer between 1 and 999
	 */
	const updateMinMax = (kind, value) => {
		// Reset to factory parameters
		if (kind === Guess.RESET) resetBounds();
		
		// Update custom parameters
		if (kind === Guess.MIN && value > 0 && value < max) setMin(value);
		if (kind === Guess.MAX && value > min && value < 1000) setMax(value);
	};
	
	/**
	 * #resetBounds
	 *
	 * Updates game parameters of minimal and maximal bound to the default values
	 * in Guess.DEFAULT_MIN and Guess.DEFAULT_MAX
	 */
	const resetBounds = () => {
		setMin(Guess.DEFAULT_MIN);
		setMax(Guess.DEFAULT_MAX);
	};
	
	/**
	 * ## changeScreen
	 *
	 * Changes the UI hiding settings and showing game and backwards
	 * - This method inits a new game by setting the random number
	 * - Also reset game parameters
	 *
	 * @param event {object}
	 */
	const changeScreen = (event) => {
		// update UI
		setCurrent(event.currentTarget.id === Guess.CURRENT_TO_GAME ? Guess.CURRENT_GAME : Guess.CURRENT_CONFIG);
		if (event.currentTarget.id === Guess.CURRENT_TO_GAME) {
			// define random number
			setRandomNumber(randomInt())
		} else {
			// reset parameters
			resetGame()
		}
	}
	
	/**
	 * ##resetGame
	 *
	 * Moves game parameters to the initial state
	 *
	 */
	const resetGame = () => {
		setAttemptsList([]);
		setGuessValue(0);
		setResult(Guess.STATE_INIT);
		setIsDisabled(false);
	}
	
	/**
	 * ##randomInt
	 *
	 * Generates a seudo-random number between the game bounds of minimal an maximal allowed values
	 *
	 * @returns {number}
	 *
	 */
	const randomInt = () => Math.trunc(Math.random() * (max - min) + min);
	
	/**
	 * ## testGuess
	 *
	 * It verifies if the value submitted by the user is equal to the random number and updates:
	 * - result (higher, lower, or winner )
	 * - attemptList
	 * - deactivate user input if is a winner
	 *
	 * @param event {object} from user blurring the input
	 *
	 */
	const testGuess   = (event) => {
		let toTest = Number(event.target.value);
		setResult(toTest === randomNumber ? Guess.STATE_WINNER :
				toTest > randomNumber ? Guess.STATE_HIGHER :
						Guess.STATE_LOWER)
		setAttemptsList(list => [...list, toTest])
		if (toTest === randomNumber) setIsDisabled(true);
	}
	/**
	 * ##updateGuess
	 *
	 * update the value of the guess after each user input.
	 *
	 * @param value
	 */
	const updateGuess = (value) => setGuessValue(value);
	
	// Render
	return (
			<main className="App" current={current}>
				<Game result={result}
				      min={min}
				      max={max}
				      attemptsList={attemptsList}
				      changeScreen={changeScreen}
				      testGuess={testGuess}
				      guessValue={guessValue}
				      updateGuess={updateGuess}
				      isDisabled={isDisabled}
				/>
				<Config
						min={min}
						max={max}
						resetBounds={resetBounds}
						updateMinMax={updateMinMax}
						changeScreen={changeScreen}
				/>
			</main>
	);
};

export default App;
