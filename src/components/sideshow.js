import React from 'react';
import { FaPen } from 'react-icons/fa';
import Loading from './CircularProgressBar';
import Card from './card';
import Transactions from './transactions';

function Sideshow() {
    const iconStyle = {
        color: '#B2BEB5',
    };

    return (
        <div className="hidden lg:block">
            <div className="bg-slate-200 h-[49rem] w-[21rem] -mt-[7rem] absolute rounded-2xl">
                <div className="mt-6 ml-[17rem]">
                    <FaPen style={iconStyle} />
                </div>
                <div className="bg-indigo-800 w-[5rem] p-2 rounded-xl absolute ml-[17rem] mt-5">
                    <p className="text-white">$10,600</p>
                </div>
                <div className="flex justify-center mt-1">
                    <Loading />
                </div>
                <div>
                    <Card />
                </div>
                <div>
                    <Transactions />
                </div>
            </div>
        </div>
    );
}

export default Sideshow;

