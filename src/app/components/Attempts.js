/**
 * #Attempts
 *
 * Attempts counter component
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 * @author @jam65st | Jaime A. Mendez
 *
 */
const Attempts = (props) => {
	// list of user attempts
	const list = props.attemptsList;
	
	// render
	return (
			<div className="attempts">
				<small>Attempts</small>
				<span>{list.length}</span>
				<ul>
					{list.map((value, index) => (
							<li key={index} value={value}></li>
					))}
				</ul>
			</div>
	);
};

export default Attempts;
