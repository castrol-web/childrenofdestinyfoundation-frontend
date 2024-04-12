import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from '../App';

function PostPictures() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        setSelectedFiles(files);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true);
            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append('images', file);
            });
            const response = await axios.post(`${URL}/api/users/post-pictures`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 201) {
                toast.success(response.data.message);
                setSelectedFiles([]);
            }
        } catch (error) {
            toast.error('Failed to upload pictures. Please try again later.');
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-24 items-center text-center justify-center mx-auto bg-gray-200">
            <h2 className='text-3xl text-orange-800'>Add Pictures to the gallery</h2>
            <form onSubmit={handleSubmit} action='/post-pictures' className='p-4'>
                <div className="mt-2 flex items-center justify-center flex-col border border-dashed border-gray-400 rounded-lg py-8 px-6">
                    <label htmlFor="images" className="flex items-center justify-center rounded-md font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Select Pictures:</label>
                    <input type="file" name="images" id="images" multiple onChange={handleFileChange} className="p-2 mt-2 block w-full h-10 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                <button type="submit" disabled={loading || selectedFiles.length === 0}  className="w-full sm:w-auto bg-indigo-600 px-6 py-3 text-white 
                font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    {loading ? 'Uploading...' : 'Upload'}
                </button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default PostPictures;
