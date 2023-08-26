import React, { useState } from 'react'
import style from './FileForm.module.css'
import FileList from './FileList';

export default function FileForm() {
    const [selectFile, setSelectFile] = useState([]);
    
    const fileButtonHandler = (event) => {
        setSelectFile(Array.from(event.target.files))
    }
    console.dir( selectFile)
    const fileInfo = [];
    for(let file in selectFile){
        
        fileInfo.push({
            fileName:selectFile[file].name,
            fileSize: selectFile[file].size,
        })
        
    }

    const fileSystem = fileInfo.map((item) => {
        return <FileList key={item.fileName} name={item.fileName} fileSize={item.fileSize}/>

    })


   
  return (
    <div>
        <div className={style.formContainer}>
       <label className={style.label}>
            <input type="file" multiple onChange={fileButtonHandler} />
             <span>Select a file</span>
        </label>
    </div>

        {fileSystem}
        <div>
            <div><button>upload</button></div>
            <div><button>cancel</button></div>
        </div>
    </div>
    
  )
}
