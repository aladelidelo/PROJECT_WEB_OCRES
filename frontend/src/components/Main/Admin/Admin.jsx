import React, { Component } from 'react';
import './Admin.css';
import JSONTree from 'react-json-tree'
import axios from 'axios'
import qs from 'querystring';
import Horloge from './Horloge';

const theme = {
  scheme: 'monokai',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633',
};

function DataList(props) {
  if (props.display == true) {
    return (
      <div>
        <JSONTree data={props.data} theme={theme} invertTheme={false} />
      </div>
    )
  }
  return <span></span>;
}

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = { titleAdd: '', titleDel: '', display: false, displaySolo: false, data: [], dataSolo: [] };
  }

  handleChangeAdd = (e) => {
    this.setState({ titleAdd: e.target.value });
  }

  handleChangeDel = (e) => {
    this.setState({ titleDel: e.target.value });
  }

  sendData = () => {
    if (this.state.titleAdd && this.state.titleAdd !== "") {
      const requestBody = {
        name: this.state.titleAdd,
      }
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      const url = 'http://localhost:3001/movies/';
      axios.put(url, qs.stringify(requestBody), config)
        .then((res) => {
          console.log("Ajout response :", res);
        })
        .catch((err) => {
          console.error(err);
          alert("can't access to API");
        })
      // setstate(data: Axios request)
      this.setState({ titleAdd: "" });
    }
  }

  delData = () => {
    if (this.state.titleDel && this.state.titleDel !== "") {
      const url = 'http://localhost:3001/movies/' + this.state.titleDel;
      axios.delete(url)
        .then((res) => {
          console.log("Delete response :", res);
        })
        .catch((err) => {
          console.error(err);
          alert("can't access to API");
        })
      // setstate(data: Axios request)
      this.setState({ titleDel: "" });
    }
  }

  close = (solo) => {
    if (solo) {
      this.setState({ displaySolo: false });
      return;
    }
    this.setState({ display: false });
  }

  display = () => {
    if (this.state.display === false) {
      axios.get('http://localhost:3001/movies')
        .then((res) => {
          this.setState({ data: res.data });
          this.setState({ display: true });
        })
        .catch((err) => {
          console.error(err);
          alert("can't access to API");
        })
    }
  }

  refresh = () => {
    this.setState({ display: false });
    axios.get('http://localhost:3001/movies')
      .then((res) => {
        this.setState({ data: res.data });
        this.setState({ display: true });
      })
      .catch((err) => {
        console.error(err);
        alert("can't access to API");
      })
  }

  render() {
    return (
      <div className="container-admin">
        <div className="admin-title">
          <h1> Admin Panel</h1>
          <Horloge/>
        </div>
        <div className="main-admin">
          <div className="main-content">
            <li> Ajouter un film avec son titre</li>
            <input type="text" placeholder="Exemple : Avenger 4" value={this.state.titleAdd} onChange={this.handleChangeAdd} />
            <br />
            <button className="btn2" onClick={this.sendData} > Send </button>
            <br />
            <li> Supprimer un film avec son ID</li>
            <input type="text" placeholder="Exemple : tt1201607" value={this.state.titleDel} onChange={this.handleChangeDel} />
            <br />
            <button className="btn2" onClick={this.delData} > Send </button>
            <br />
            {/* <li> Trouver un film avec son ID</li>
            <div className="listBoutons">
              <button className="btn2" onClick={() => { this.display(true) }} > Display liste </button>
              <button className="btn2" onClick={() => { this.refresh(true) }} > Refresh </button>
              <button className="btn2" onClick={() => { this.close(true) }} > Close X</button>
            </div>
            <div className="list-admin">
              <DataList display={this.state.displaySolo} data={this.state.dataSolo} />
            </div> */}
            <li> Liste de tous les films</li>
            <div className="listBoutons">
              <button className="btn2" onClick={() => { this.display() }} > Display liste </button>
              <button className="btn2" onClick={() => { this.refresh() }} > Refresh </button>
              <button className="btn2" onClick={() => { this.close() }} > Close X</button>
            </div>
            <div className="list-admin">
              <DataList display={this.state.display} data={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Admin;