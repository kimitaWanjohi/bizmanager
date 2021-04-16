import React from 'react';
import {Link} from 'react-router-dom';

export default function Record ({record}) {

    return (
        <div className="container-custom">
            <div className="bg-grey">
                <div>
                    <Link to={`/records/${record.id}`} >
                     <h5>{record.date}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}