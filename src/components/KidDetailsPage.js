import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../App';
import { css } from '@emotion/react';
import { FadeLoader } from 'react-spinners';

const KidDetailsPage = () => {
    const { id } = useParams(); // Extract the kid's ID from the URL
    const [kidDetails, setKidDetails] = useState([]);
    const [PhotoUrl,setPhotoUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
   

    useEffect(() => {
        const fetchKidDetails = async () => {
            try {
                setLoading(true)
                const response = await axios.get(`${URL}/api/users/kid-details/${id}`);
                setKidDetails(response.data.kid);
                setPhotoUrl(response.data.url);
            } catch (error) {
                console.error('Error fetching kid details:', error)
            } finally {
                setLoading(false);
            }
        };

        fetchKidDetails();
    }, [id]); // Fetch data when the ID changes

    if (loading) {
        return <div className="text-center mt-96">
            <FadeLoader color={'#36d7b7'} css={override} size={100} className='mx-auto' />
            <p className='text-slate-50'>loading please wait...</p>
        </div>
    }

    //go back function
    function goBack(){
        navigate("/kids");
    }

    return (
        <div className='container mt-24 justify-center items-center mx-auto text-center'>
            <h1 className='text-3xl'>Kid Details</h1>
            <div className='flex items-center justify-center text-center mx-auto'>
                <div className='mx-auto w-2/4'>
                    <img src={PhotoUrl} alt={`screen shot`} className='justify-center mx-auto w-2/4 rounded-lg'></img>
                </div>
                <div>
                    <h2>{kidDetails.firstname} {kidDetails.lastname}</h2>
                    <p>Age: {kidDetails.Age}</p>
                    <p>Gender: {kidDetails.gender}</p>
                    <p>Hobbies: {kidDetails.hobby}</p>
                    <p>Education Level: {kidDetails.EducationLevel}</p>
                    <p>Class: {kidDetails.Class}</p>
                </div>
            </div>
            <h2>My story</h2>
            <div>
                <p>{kidDetails.LifeStory}</p>
            </div>

            <button
            onClick={goBack}
                className="mt-20 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >Go back</button>
        </div>
    );
};

// CSS override for the loading spinner
const override = css`
  display: block;
  margin: 0 auto;
`;

export default KidDetailsPage;
