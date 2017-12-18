import AnotherSimpleComponent from './another-simple-component';

class SimpleTest extends React.Component {
	render() {
		return(
			<div>This is a test</div>
			<AnotherSimpleComponent />
		);
	}
}

ReactDOM.render(<SimpleTest />,document.getElementById('test'));
