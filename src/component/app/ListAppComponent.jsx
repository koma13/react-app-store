import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListAppComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apps: [],
            message: null
        }
        this.deleteApp = this.deleteApp.bind(this);
        this.downloadApp = this.downloadApp.bind(this);
        this.editApp = this.editApp.bind(this);
        this.addApp = this.addApp.bind(this);
        this.reloadAppList = this.reloadAppList.bind(this);
    }

    componentDidMount() {
        this.reloadAppList();
    }

    reloadAppList() {
        ApiService.fetchApps()
            .then((res) => {
                this.setState({ apps: res.data.result })
            });
    }

    deleteApp(appId) {
        ApiService.deleteApp(appId)
            .then(res => {
                this.setState({ message: 'App deleted successfully.' });
                this.setState({ apps: this.state.apps.filter(app => app.id !== appId) });
            })

    }

    downloadApp(appId) {
        ApiService.downloadApp(appId)
            .then(res => {
                this.setState({ apps: res.data.result })
            })

    }

    editApp(id) {
        window.localStorage.setItem("appId", id);
        this.props.history.push('/edit-app');
    }

    addApp() {
        window.localStorage.removeItem("appId");
        this.props.history.push('/add-app');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">App details</h2>
                <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.addApp()}> Upload app</button>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>#</th>
                            <th>App name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Date added</th>
                            <th>Times downloaded</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apps.map(
                                app =>
                                    <tr key={app.id}>
                                        <td>{app.id}</td>
                                        <td>{app.name}</td>
                                        <td>{app.description}</td>
                                        <td>{app.category}</td>
                                        <td>{app.dateUploaded}</td>
                                        <td>{app.timesDownloaded}</td>
                                        <td>{app.images[0]}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.deleteApp(app.id)}> Delete</button>
                                            <button className="btn btn-success" onClick={() => this.downloadApp(app.id)}> Download</button>
                                            <button className="btn btn-success" onClick={() => this.editApp(app.id)} style={{ marginLeft: '20px' }}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListAppComponent;