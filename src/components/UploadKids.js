import React, { useState, useRef } from 'react';
import axios from 'axios';
import { URL } from '../App';
import { HiPhoto } from "react-icons/hi2";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UploadKids() {
    const [Age, setAge] = useState('');
    const [hobby, setHobby] = useState('');
    const [gender, setGender] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [DOB, setDob] = useState('');
    const [Siblings, setSiblings] = useState('');
    const [Sponsored, setSponsor] = useState("false");
    const [photo, setPhoto] = useState('');
    const [Class, setClass] = useState('');
    const [LifeStory, setLifestory] = useState('');
    const [Ambition, setAmbition] = useState('');
    const [EducationLevel, setEducation] = useState('');
    const formRef = useRef(null);
    const [imageError, setImageError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleage = (event) => {
        const inputValue = event.target.value;
        setAge(inputValue);
    }
    const handleGender = (event) => {
        const inputValue = event.target.value;
        setGender(inputValue);
    }

    const handlefirstname = (event) => {
        const inputValue = event.target.value;
        setFirstname(inputValue);
    }
    const handleclass = (event) => {
        const inputValue = event.target.value;
        setClass(inputValue);
    }

    const handleHobby = (event) => {
        const inputValue = event.target.value;
        setHobby(inputValue);
    }

    const handleLifestory = (event) => {
        const inputValue = event.target.value;
        setLifestory(inputValue);
    }
    const handleeducation = (event) => {
        const inputValue = event.target.value;
        setEducation(inputValue);
    }
    const handleambition = (event) => {
        const inputValue = event.target.value;
        setAmbition(inputValue);
    }

    const handlelastname = (event) => {
        const inputValue = event.target.value;
        setLastname(inputValue);
    }

    const handleDob = (event) => {
        const inputValue = event.target.value;
        setDob(inputValue);
    }

    const handlesiblings = (event) => {
        const inputValue = event.target.value;
        setSiblings(inputValue);
    }

    const handlesponsor = (event) => {
        const inputValue = event.target.value;
        setSponsor(inputValue);
    }

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        if (selectedFile && allowedImageTypes.includes(selectedFile.type)) {
            setImageError("");
            setPhoto(selectedFile);
        } else {
            setPhoto(null);
            setImageError("Please upload jpeg, png, or jpg image type");
        }
    }


    async function UploadKids(event) {
        event.preventDefault();
        try {

            //formdata
            const formData = new FormData();
            formData.append("photo", photo);
            formData.append("firstname", firstname);
            formData.append("lastname", lastname);
            formData.append("Age", Age);
            formData.append("DOB", DOB);
            formData.append("Siblings", Siblings);
            formData.append("gender", gender);
            formData.append("hobby", hobby);
            formData.append("Sponsored", Sponsored);
            formData.append("Ambition", Ambition);
            formData.append("EducationLevel", EducationLevel);
            formData.append("Class", Class);
            formData.append("LifeStory", LifeStory);
            setLoading(true);
            const response = await axios.post(`${URL}/api/users/kids`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            if (response.status === 201) {
                toast.success(response.data.message);
                setAge("")
                setAmbition("")
                setClass("")
                setDob("")
                setEducation("")
                setFirstname("")
                setLastname("")
                setLifestory("")
                setPhoto("")
                setSponsor("")
                setHobby("")
                setGender("")
                setSiblings("")
                setSponsor("")
            }
        } catch (error) {
            toast.error(error.response.data.message);
            console.error("Error:", error);
            if (error.response && error.response.status === 404) {
                toast.error(error.response.data.message);
            } else if (error.response && error.response.status === 500) {
                toast.error('Server error. Please try again later.');
            } else {
                toast.error('An unexpected error occurred. Please try again later.');
            }
        } finally {
            setLoading(false);
        }
    }
    return (
        <form action='/kids' onSubmit={UploadKids} encType="multipart/form-data" className="mt-20 mx-auto max-w-4xl p-3 items-center justify-center mb-20" method='post' style={{ backgroundColor: "#F1FADA" }} ref={formRef}>
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold">CHILDREN OF DESTINY FAMILY</h1>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 justify-center items-center max-w-2xl mx-auto">
                {/* firstname*/}
                <div>
                    <label htmlFor="firstname" className="grid text-sm font-medium leading-6 text-gray-900">first name</label>
                    <input type="text" name="firstname" id="firstname" value={firstname} onChange={handlefirstname} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="firstname" />
                </div>
                {/* lastname */}
                <div>
                    <label htmlFor="lastname" className="grid text-sm font-medium leading-6 text-gray-900">last name</label>
                    <input type="text" name="lastname" id="lastname" value={lastname} onChange={handlelastname} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="lastname" />
                </div>

                {/*Age*/}
                <div>
                    <label htmlFor="age" className="grid text-sm font-medium leading-6 text-gray-900">Your Age</label>
                    <input type="text" name="Age" id="age" value={Age} onChange={handleage} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Your Age" />
                </div>
                {/* DOB */}
                <div>
                    <label htmlFor="dob" className="grid text-sm font-medium leading-6 text-gray-900">Birthday</label>
                    <input type="date" name="DOB" id="DOB" value={DOB} onChange={handleDob} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Birthday" />
                </div>
                {/*sponsor needs*/}
                <div>
                    <label htmlFor="gender" className="grid text-sm font-medium leading-18 text-gray-900">Your Gender</label>
                    <select id="gender" name="gender" value={gender} placeholder="your gender" onChange={handleGender} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option>Choose your gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                {/*siblings*/}
                <div>
                    <label htmlFor="siblings" className="grid text-sm font-medium leading-6 text-gray-900">Siblings if Any</label>
                    <input type="text" name="Siblings" id="siblings" value={Siblings} onChange={handlesiblings} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="enter Siblings" />
                </div>
                {/*siblings*/}
                <div>
                    <label htmlFor="class" className="grid text-sm font-medium leading-6 text-gray-900">Current class you are in</label>
                    <input type="text" name="Class" id="class" value={Class} onChange={handleclass} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="enter class" />
                </div>
                {/* hobby */}
                <div>
                    <label htmlFor="hobby" className="grid text-sm font-medium leading-6 text-gray-900">What's your hobby?</label>
                    <input type="text" name="hobby" id="hobby" value={hobby} onChange={handleHobby} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="enter your hobby" />
                </div>
                {/*siblings*/}
                <div>
                    <label htmlFor="lifestory" className="grid text-sm font-medium leading-6 text-gray-900">Your story</label>
                    <textarea id="lifestory" name="LifeStory" value={LifeStory} onChange={handleLifestory} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" rows="6" placeholder="Your story here" required />
                </div>

                {/*ambition*/}
                <div>
                    <label htmlFor="ambition" className="grid text-sm font-medium leading-6 text-gray-900">Who do you want to be in future</label>
                    <input type="text" name="Ambition" id="ambition" value={Ambition} onChange={handleambition} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="your ambition" />
                </div>
                {/*ambition*/}
                <div>
                    <label htmlFor="educationlevel" className="grid text-sm font-medium leading-6 text-gray-900">level of level</label>
                    <input type="text" name="EducationLevel" id="educationlevel" value={EducationLevel} onChange={handleeducation} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="education" />
                </div>

                {/*sponsor needs*/}
                <div>
                    <label htmlFor="sponsorneed" className="grid text-sm font-medium leading-18 text-gray-900">Do you have a school sponsor?</label>
                    <select id="sponsorneed" name="Sponsored" value={Sponsored} onChange={handlesponsor} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>

                {/*Photo */}
                <div>
                    <label htmlFor="photo" className="grid text-sm font-medium leading-12 text-gray-900">Your Photo</label>
                    <div className="mt-2 flex items-center justify-center flex-col border border-dashed border-gray-400 rounded-lg py-8 px-6">
                        <label htmlFor="photo" className="flex items-center justify-center rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <HiPhoto className="h-8 w-8 mr-2" />
                            Click here to upload photo
                            <input id="photo" name="photo" type="file" className="sr-only" onChange={handleFileChange} required />
                        </label>
                        <p className="mt-2 text-xs text-gray-600">PNG, JPG or JPEG only, up to 10MB</p>
                        {imageError && <p className="mt-2 text-sm text-red-500">{imageError}</p>}
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <button type="submit" disabled={loading} className="w-full sm:w-auto bg-indigo-600 px-6 py-3 text-white 
                font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {loading ? "Loading" : "Submit"}
                </button>
            </div>
            <ToastContainer />
        </form>
    )
}

export default UploadKids