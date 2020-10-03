import React from 'react';
import web from "../src/Image/blend.jpg";
import Sdata from './Image/Sdata';
import Card from './Card';

const Service = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Services </h1>
            </div>
            <div className="container-fluid mb-4">
                <div className='row'>
                    <div className=" col-11 mx-auto">
                        <div className="row gy-4">
                            {
                                Sdata.map((val, ind) =>{
                                    return <Card
                                    key={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    link={val.link}
                                    />
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};
export default Service;