import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: ''
    };

    onInputChange = (event) => {
        console.log(event);
        this.setState({
            term: event.target.value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        console.log(event);
        this.props.onFormSubmit(this.state.term);
        // call cb from parent component
    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                            type="text" 
                            id="" 
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;