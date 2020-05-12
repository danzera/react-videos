import React from 'react';

// SearchBar needs to be a class based component to keep track of the input search term
class SearchBar extends React.Component {
	state = {
		searchTerm: ''
	}

	onInputChange = e => {
		this.setState({ searchTerm: e.target.value });
	}

	onFormSubmit = e => {
		e.preventDefault();
		// call the callback from parent component
		this.props.onSubmit(this.state.searchTerm);
	}

	// "onSubmit" and "onChange" must be called as such
	// they are automatically called when form is submitted and the input changes, respectively
	render() {
		return (
			<div className="search-bar ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Search YouTube</label>
						<input
							type="text"
							value={this.state.searchTerm}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
