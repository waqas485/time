import React from 'react';
import { Card } from './Card';
import { ServiceData } from './ServiceData';

const Service = () => {
    return (
        <>
            {


                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto mt-5">
                            <div className="row gy-4">

                                {

                                    ServiceData.map((val, ind) => {
                                        return <Card
                                            imgsrc={val.imgsrc}
                                            title={val.title}
                                            key={ind}
                                        />

                                    })
                                }

                            </div>
                        </div>
                    </div>
                </div>

            }
        </>
    )
        }
export default Service;

