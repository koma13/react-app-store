import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class ListTop5AppComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            apps5: [],
            message: null
        }
        this.reloadAppList = this.reloadAppList.bind(this);
    }

    componentDidMount() {
        this.reloadAppList();
    }

    reloadAppList() {
        ApiService.fetchApps()
            .then((res) => {
                this.setState({ apps5: res.data.result })
            });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Top 5 downloaded apps</h2>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th className="hidden">Id</th>
                            <th>App name</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Date added</th>
                            <th>Times downloaded</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.apps5.map(
                                app =>
                                    <tr key={app.id}>
                                        <td>{app.name}</td>
                                        <td>{app.description}</td>
                                        <td>{app.category}</td>
                                        <td>{app.dateUploaded}</td>
                                        <td>{app.timesDownloaded}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        );
    }

}

export default ListTop5AppComponent;