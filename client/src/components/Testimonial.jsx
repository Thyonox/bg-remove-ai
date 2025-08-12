import React from 'react';
import { testimonialsData } from '../assets/assets';

const Testimonial = ({ }) => {
    return (
        <div>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent'>
                Customer Testimonials
            </h1>

            <div>
                {testimonialsData.map((item, index) => (
                    <div key={index}>
                        <p>”</p>
                        <p>{ item.text }</p>
                        <div>
                            <img src={ item.image } alt="" />
                            <div>
                                <p>{ item.author }</p>
                                <p>{ item.jobTitle }</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;