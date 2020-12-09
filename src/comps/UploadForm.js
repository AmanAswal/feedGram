import React,{ useState } from 'react';
import ProgressBar from './ProgressBar';


const UploadForm = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    // array of allowed types of images so we don't upload mp3 or video
    const types = ['image/png', 'image/jpeg', 'image/jpg'];
    
    const changeHandler = (e)=>{
        let selected = e.target.files[0];
        
        // if image type file is uploaded
        if(selected && types.includes(selected.type)){
            setFile(selected);  // update image name
            setError('');       // update no error
        } else {
            setFile(null);  // update no image
            setError('Please select an image file(png or jpeg/jpg');    // update error        
        }
    }

    return (
        <form>
        <label>
            <input type="file" onChange={changeHandler} />
            <span>+</span>
        </label>
        <div className="output">
            { error && <div className="error">{ error }</div>}
            { file && <div>{ file.name }</div> }
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
    </form>
    )
}

export default UploadForm;