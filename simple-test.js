import AnotherSimpleComponent from './another-simple-component';

class SimpleTest extends React.Component {
	render() {
		return(
			<div>
			<div>This is a test</div>
			<AnotherSimpleComponent />
			</div>
		);
	}
}

ReactDOM.render(<SimpleTest />,document.getElementById('test'));
