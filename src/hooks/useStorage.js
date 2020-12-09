import {useState, useEffect} from 'react';
import {projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file)=>{
    const [progress, setProgress] = useState(0);    // for the progress bar
    const [error, setError] = useState(null);       // for the error
    const [url, setUrl] = useState(null);           // for the url we will get back from the firebase after uploading image

    useEffect(()=>{
        // references
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');
        
        storageRef.put(file).on('state_changed', (snap)=>{
            let percentage = (snap.bytesTransferred / snap.totalBytes)*100;
            setProgress(percentage);
        }, (err)=>{
            setError(err);
        }, async ()=>{
            const url = await storageRef.getDownloadURL();  // stored in firestore
            const createdAt = timestamp();                  // stored in firestore
            collectionRef.add({ url, createdAt})
            setUrl(url)
        })
    },[file])

    return { progress, url, error }
}

export default useStorage;