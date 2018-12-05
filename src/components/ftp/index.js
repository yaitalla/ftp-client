import React from 'react';
import { Link } from 'react-router-dom';
import { container, item, btnWrapper, btn, input } from './style';


const Ftp = () => (
  <div style={container}>
    <h2 >File Transfert</h2>
    <form style={btnWrapper} method="post" action="http://localhost:4000/api/ftp/upload" encType="multipart/form-data">
      <button style={btn} type="submit" >upload file</button>
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


export default Ftp;
