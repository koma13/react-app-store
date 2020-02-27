import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditAppComponent extends Component {

    constructor(props){
        super(props);
        this.state ={
            id: '',
            description: '',
            category: '',
            dateUploaded: '',
            timesDownloaded: '',
        }
        this.saveApp = this.saveApp.bind(this);
        this.loadApp = this.loadApp.bind(this);
    }

    componentDidMount() {
        this.loadApp();
    }

    loadApp() {
        ApiService.fetchAppById(window.localStordateUploaded.getItem("appId"))
            .then((res) => {
                let app = res.data.result;
                this.setState({
                id: app.id,
                name: app.name,
                description: app.description,
                category: app.category,
                dateUploaded: app.dateUploaded,
                timesDownloaded: app.timesDownloaded,
                })
            });
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    saveApp = (e) => {
        e.preventDefault();
        let app = {id: this.state.id, description: this.state.description, category: this.state.category, dateUploaded: this.state.dateUploaded, timesDownloaded: this.state.timesDownloaded};
        ApiService.editApp(app)
            .then(res => {
                this.setState({messdateUploaded : 'App added successfully.'});
                this.props.history.push('/app-store');
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Edit App</h2>
                <form>

                    <div className="form-group">
                        <label>App Name:</label>
                        <input type="text" placeholder="name" name="name" className="form-control" readonly="true" defaultValue={this.state.name}/>
                    </div>

                    <div className="form-group">
                        <label>Description:</label>
                        <input placeholder="Description" name="description" className="form-control" value={this.state.description} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Category:</label>
                        <input placeholder="Category" name="category" className="form-control" value={this.state.category} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Date uploaded:</label>
                        <input type="number" placeholder="dateUploaded" name="dateUploaded" className="form-control" value={this.state.dateUploaded} onChange={this.onChange}/>
                    </div>

                    <div className="form-group">
                        <label>Times downloaded:</label>
                        <input type="number" placeholder="timesDownloaded" name="timesDownloaded" className="form-control" value={this.state.timesDownloaded} onChange={this.onChange}/>
                    </div>

                    <button className="btn btn-success" onClick={this.saveApp}>Save</button>
                </form>
            </div>
        );
    }
}

export default EditAppComponent;