import React from 'react'
import './Youtube.css'


class Searchbar extends React.Component{
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="input-group">
    <div className="form-outline">
    {/* <input type="search" id="form1" className="form-control" /> */}
    <form onSubmit={this.handleSubmit} className="form-control">
        <div className="field">
          <label className="form-label" htmlFor="video-search">Search</label>
          <input className="text-field" onChange={this.handleChange} name="video-search" type="text" value={this.state.term} />
        </div>
        <button className="btn btn-primary">Fetch videos</button>
    </form>
</div>

</div>
        )
    }
}

export default Searchbar;

