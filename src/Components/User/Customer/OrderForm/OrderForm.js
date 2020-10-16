import React, { useState } from 'react';
import { useEffect } from 'react';
import uploadIcon from '../../../../images/icons/cloud-upload-outline 1.png';
const OrderForm = ({handleSubmit,userServiceKey}) => {
    const [currentService, setCurrentService] = useState({});
    useEffect(()=>{
        userServiceKey !== "hire_us_for_your_service" && fetch(`https://creativemmhkagency30313.herokuapp.com/services/${userServiceKey}`)
        .then(res => res.json())
        .then(data => {
            // console.log(userServiceKey);
            // console.log(data);
            setCurrentService(data);
        })
        .catch(err => console.log(err))
    },[])
    // const [info, setInfo] = useState({});
    // const [file, setFile] = useState(null);
    // const handleBlur = (evt) => {
    //     const newInfo = {...info};
    //     newInfo[evt.target.name] = evt.target.value;
    //     setInfo(newInfo);
    // }
    // const handleFileChange = (evt) => {
    //     const newFile = evt.target.files[0];
    //     console.log(newFile);
    //     setFile(newFile);
    // }
    return (
        <form onSubmit={handleSubmit} className='w-50'>
            <div className="form-group">
                <input type="text" name='name' className='form-control' placeholder='Your name / company name' required/>
            </div>
            <div className="form-group">
                    <input type="text" name='email' className='form-control' placeholder='Your email address' required/>
            </div>
            <div className="form-group">
                <input type="text" name='projectTitle' defaultValue={currentService.name} className='form-control text-success' placeholder='Your project title' required/>
            </div>
            <div className="form-group">
                <textarea name="projectDetail" cols="30" rows="6" className='form-control' placeholder='Project details' required/>    
            </div>
            <div className="d-flex ">
                <input type="number" name='price' className="form-control w-50 mr-1" placeholder="Price" required/>
                <input type="file" name="file" id="upload-file" required/>
                <label className='btn btn-warning form-control w-50 ml-1' id="upload-label" htmlFor="upload-file"><img style={{height: '30px'}} src={uploadIcon} alt=""/> <span id="upload-text">Upload project file</span></label>
            </div>
            <input type="submit" className='btn btn-dark px-5' value="Send"/>
        </form>
    );
};

export default OrderForm;