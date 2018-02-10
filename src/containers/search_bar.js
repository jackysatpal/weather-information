import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { searchTerm: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ searchTerm: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();

		this.props.fetchWeather(this.state.searchTerm);
		this.setState({ searchTerm: '' });
	}

	render() {
		return(
				<div>
					<h2 className = "text-center">Know the weather information</h2>
					<form onSubmit = { this.onFormSubmit } className = "input-group">
						<input 
							placeholder = "Get a five-day forecast in your favorite cities" 
							className = "form-control"
							value = { this.state.searchTerm }
							onChange = { this.onInputChange } />

						<span className = "input-group-btn">
							<button type = "submit" className = "btn btn-primary">
								Submit
							</button>
						</span>

					</form>
				</div>
			);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);