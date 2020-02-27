import React, { Component } from 'react'
import ApiService from "../../service/ApiService";
import Validator from '../../service/Validator';

class AddAppComponent extends Component {

    constructor(props) {
        super(props);
        this.validator = new Validator();
        this.state = {
            name: '',
            description: '',
            category: '',
            file: '',
            message: null
        }

        this.saveApp = this.saveApp.bind(this);

    }

    saveApp = (e) => {
        e.preventDefault();
        let app = { name: this.state.name, description: this.state.description, category: this.state.category};
        let file = this.state.file;
        if (this.validator.validateInputs(this.state)) {
            ApiService.addApp(app, file)
                .then(res => {
                    this.setState({ message: 'Application added successfully.' });
                    this.props.history.push('/app-store');
                });
        }
    }


    

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <h2 className="text-center">Add app</h2>
                <form encType = "multipart/form-data">
                    <div className="form-group">
                        <label>App name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>App description</label>
                        <input type="text" placeholder="description" name="description" className="form-control" value={this.state.description} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select className="form-control" name="category" value={this.state.category} onChange={this.onChange}>
                            <option value="GAMES">Games</option>
                            <option value="MULTIMEDIA">Multimedia</option>
                            <option value="PRODUCTIVITY">Productivity</option>
                            <option value="TOOLS">Tools</option>
                            <option value="HEALTH">Health</option>
                            <option value="LIFESTYLE">Lifestyle</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>App zip file</label>
                        <input type="file" name="file" className="form-control" value={this.state.file} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveApp}>Save</button>
                </form>
            </div>
        );
    }
}

export default AddAppComponent;