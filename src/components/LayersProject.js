import React from 'react';
import layers from "../images/layers.jpeg";
import chicken from "../images/chicken.jpeg";
import chicken1 from "../images/chicken1.jpeg";
import chicken2 from "../images/chicken2.jpeg";
import chicken3 from "../images/chicken3.jpeg";
import chicken4 from "../images/chicken4.jpeg";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

function LayersProject() {
    return (
        <div className='container mx-auto mt-24 px-4 sm:px-6 lg:px-8'>
            <h1 className='text-center text-amber-50 text-3xl sm:text-5xl font-bold uppercase mb-8'>Layers Project</h1>
            {/* First description of the project */}
            <div className='flex flex-col-reverse sm:flex-row items-center justify-center mb-12'>
                <div className='sm:mr-4'>
                    <img src={layers} alt='project thumbnail' className='rounded-lg lg:w-2/4 hover:animate-pulse' />
                </div>
                <div className='sm:w-1/2 flex gap-1'>
                    <FaQuoteLeft className='w-20 text-slate-50' />
                    <p className='text-slate-50 tracking-tight'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem ipsum. Lectus magna
                        fringilla urna porttitor rhoncus dolor purus non enim. Duis ut diam quam nulla porttitor massa.
                        Vulputate eu scelerisque felis imperdiet. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.
                        Libero justo laoreet sit amet. Duis convallis convallis tellus id interdum. Commodo odio aenean sed
                        adipiscing diam donec adipiscing tristique risus. Adipiscing at in tellus integer feugiat scelerisque.
                        Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Sed euismod nisi porta lorem
                        mollis aliquam ut porttitor.
                    </p>
                </div>
            </div>

            {/* Second description of the project */}
            <div className='flex flex-col-reverse sm:flex-row items-center justify-center mb-24 gap-24'>
                <div className='sm:w-1/2 flex'>
                    <p className='text-slate-50 tracking-tight'>
                        Neque aliquam vestibulum morbi blandit cursus risus at ultrices. Volutpat ac tincidunt vitae semper
                        quis lectus. Gravida in fermentum et sollicitudin. Mattis molestie a iaculis at erat pellentesque adipiscing
                        commodo. Risus at ultrices mi tempus imperdiet nulla. Volutpat odio facilisis mauris sit amet massa vitae
                        tortor condimentum. Potenti nullam ac tortor vitae. Ipsum suspendisse ultrices gravida dictum fusce ut placerat
                        orci nulla. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Lacus suspendisse faucibus interdum
                        posuere. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi enim nunc faucibus a pellentes
                        que. Augue lacus viverra vitae congue eu consequat ac felis.<FaQuoteRight className='text-slate-50' />
                    </p>
                </div>
                <div className='sm:ml-4'>
                    <img src={chicken} alt='project thumbnail' className='rounded-lg lg:w-2/4 hover:animate-pulse' />
                </div>
            </div>
            {/* more project descriptions */}
            <div className='items-center mb-24 justify-center mx-auto text-center'>
                <div className='mx-auto mb-10 px-5'>
                    <h3 className='text-2xl text-slate-300 mx-auto items-center justify-center'>More About this Project</h3>
                    <small>Risus at ultrices mi tempus imperdiet nulla. Volutpat odio facilisis mauris sit amet massa vitae
                        tortor condimentum. Potenti nullam ac tortor vitae. Ipsum suspendisse ultrices gravida dictum fusce ut placerat
                        orci nulla. Faucibus purus in massa tempor nec feugiat nisl
                    </small>
                    <button className="mt-5 rounded-md bg-slate-500 px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download project budget</button>
                </div>
                {/* <div className='flex flex-col sm:flex-row items-center justify-center mb-10'>
                    <video controls className='rounded-lg w-full sm:w-1/2' >
                        <source src={demoVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div> */}
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
                    <Masonry gutter="20px">
                        <img src={chicken1} alt='chicken-pic'></img>
                        <img src={chicken3} alt='chicken-pic'></img>
                        <img src={chicken2} alt='chicken-pic'></img>
                        <img src={chicken4} alt='chicken-pic'></img>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
    );
}

export default LayersProject;
