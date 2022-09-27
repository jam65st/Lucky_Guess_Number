// noinspection JSUnusedLocalSymbols
/**
 * #Guess
 *
 * The Guess Class is a Dictionary utility that can be understood
 * as a parameter list, also as reserved words to improve this app.
 *
 * @author @jam65st | Jaime A. Mendez
 *
 */
export default class Guess {
	/**
	 * ##DEFAULT_MIN
	 *
	 * Constant with the inital minimal value of guess
	 */
	static DEFAULT_MIN = 1;
	
	/**
	 * ##DEFAULT_MAX
	 *
	 * Constant with the inital maximum value of guess
	 */
	static DEFAULT_MAX = 10;
	
	/**
	 * ##STATE_INIT
	 *
	 * Constant that reports the start of a new game
	 */
	static STATE_INIT   = "init";
	
	/**
	 * ##STATE_HIGHER
	 *
	 * Constant to report a higher value of the guess
	 */
	static STATE_HIGHER = "higher";
	
	/**
	 * ##STATE_LOWER
	 *
	 * Constant to report a lower value of the guess
	 */
	static STATE_LOWER  = "lower";
	
	/**
	 * ##STATE_WINNER
	 *
	 * Constant to report a the won of the game
	 */
	static STATE_WINNER = "winner";
	
	/**
	 * ##MIN
	 *
	 * Constant of control to use this string
	 */
	static MIN   = "min";
	
	/**
	 * ##MAX
	 *
	 * Constant of control to use this string
	 */
	static MAX   = "max";
	
	/**
	 * ##RESET
	 *
	 * Constant of control to use this string
	 */
	static RESET = "reset";
	
	/**
	 * ##CURRENT_GAME
	 *
	 * Constant of control of the game status
	 */
	static CURRENT_GAME      = "game";
	
	/**
	 * ##CURRENT_CONFIG
	 *
	 * Constant of control of the game status
	 */
	static CURRENT_CONFIG    = "config";
	
	/**
	 * ##CURRENT_TO_GAME
	 *
	 * Constant of control of the game views
	 */
	static CURRENT_TO_GAME   = "toGame";
	
	/**
	 * ##CURRENT_TO_CONFIG
	 *
	 * Constant of control of the game views
	 */
	static CURRENT_TO_CONFIG = "toConfig";
	
	// Game labels used in the UI
	static title       = "Play!";
	static title_sub   = "Lucky Guess Number";
	static author      = "J. A. Mendez";
	static author_uri  =
			       "https://matching.turing.com/developer-resume-preview/1784d3306c87c942285a3cf83e5d528c623e431789c8bd";
	static prelabels   = "Choose the bounds for your game";
	static label_lower = "Lower";
	static label_upper = "Upper";
	static label_reset = "Reset";
	
	/**
	 * ##guessInfo
	 * 
	 * STATIC method to return a composed message with JSX requirements
	 *
	 * @param min {number} int
	 * @param max {number} int
	 * @returns {JSX.Element}
	 * 
	 */
	static guessInfo = ( min, max ) => {
		return (<div className="info">
			Guess the number between <strong>{min}</strong> and <strong>{max}</strong>
		</div>)
	}
}
