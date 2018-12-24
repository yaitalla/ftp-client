import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { container, item, btnWrapper, btn, input } from './style';

class Ftp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      file: '',
      token: window.localStorage.token,
      message: 'upload a file from your computer'
    };
    this.upload = this.upload.bind(this);
    this.getFiles = this.getFiles.bind(this);
    this.download = this.download.bind(this);
  }

  getFiles = (event) => {
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
    axios.get("http://localhost:4000/api/ftp/getUploadedFiles", {headers: headers}).then((res) => {
    }).catch((err) => {
      console.log('YASLOG', err)
    });
  }
  onChange = (event) => {
    this.setState({file: event.target.files[0]})
  }
  download = () => {
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
    axios.post("http://localhost:4000/api/ftp/download", {headers: headers}).then((res) => {
      console.log(res.data.message)
		}).catch((err) => {
			console.log('YASLOG', err.response.headers)
		});
  }
  upload = (event) => {
    const headers = {
			'x-access-token': window.localStorage.getItem('token')
		}
    const data = new FormData()
    data.append('file', this.state.file, this.state.file.name)
    event.preventDefault();
    axios.post("http://localhost:4000/api/ftp/upload", data, {headers: headers}).then((res) => {
      console.log(res.data.message)
		}).catch((err) => {
			console.log('YASLOG', err)
		});
  }
  render(){
    return (
      <div style={container}>
        <h2 >File Transfert</h2>
        <form onSubmit={this.upload} encType="multipart/form-data">
          <input type="file" onChange={this.onChange} name="sampleFile"/>
          <button type="submit" style={btn} type="submit" >upload file</button>
        </form>
        <form method="post" onSubmit={this.download}>
          <button style={btn} type="submit" name="" value="dfile">download picture</button>
        </form>
        <form method="get" onSubmit={this.getFiles}>
          <button style={btn} type="submit" name="" value="dfile">get files</button>
        </form>
      </div>
    )
  }
}

/*
const Ftp = () => (
  <div style={container}>
    <h2 >File Transfert</h2>
    <form style={btnWrapper} method="post" encType="multipart/form-data">
      <button onClick={this.upload} style={btn} type="submit" >upload file</button>
      <input style={input} type="file" name="sampleFile"/>
    </form>
    <form method="post" action="http://localhost:4000/api/ftp/download" encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">download picture</button>
    </form>
    <form method="get" action="http://localhost:4000/api/ftp/getUploadedFiles" encType="multipart/form-data">
      <button style={btn} type="file" name="" value="dfile">get files</button>
    </form>
  </div>
)
*/

export default Ftp;
