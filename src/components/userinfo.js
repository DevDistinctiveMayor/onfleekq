import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { FaAngleRight } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import img from './img/woman.png'

function userinfo() {
    const iconStyle = {
        color: 'white',
        marginTop: '7px',
        marginLeft: '0.5rem',
        fontSize: '0.8rem'
      };
      const iconStyle1 = {
        color: 'white',
        marginTop: '1px',
        marginLeft: '0.1rem',
        fontSize: '1rem'
      };
      const iconStyle2 = {
        color: 'red',
        marginTop: '0.2rem',
        marginLeft: '1rem',
        fontSize: '1.4rem'
      };
      const iconStyle3 = {
        color: 'white',
        marginTop: '0.2rem',
        marginLeft: '',
        fontSize: '1.1rem'
      };
  return (
    <div>
        <div className="ml-4 h-[18.7rem] w-[20rem] shadow-slate-300 shadow-xl rounded-[10px] p-4">
            <div class="mt-3 ml-2">
                <div class="flex gap-3">
                    <img src={img} class="w-9 h-9 mt-1"/>
                    <div>
                        <p class="font-medium text-sm">Lilly Donovan</p>
                        <p class="text-slate-400 text-sm">Business trainer</p>
                    </div>        
                </div>
                <div class="mt-[1.4rem] w-[15rem] font-medium ml-2">
                    <p>How to properly manage your personal budget</p>
                </div>
                <div class="mt-6 flex gap-1">
                    <div class="flex">
                        <div class="flex gap-2">
                            <div class="bg-violet-800 w-[1.7rem] h-[1.7rem] rounded-full ml-2"><FaPlay style={iconStyle}/></div>
                            <p class="mt-[0.3rem] font-medium text-sm">Video</p>
                        </div>
                    </div>

                    <div>
                        <div class="flex gap-2">
                            <div class=" bg-cyan-400 w-[1.7rem] h-[1.7rem] flex justify-center rounded-full ml-2"><p style={iconStyle1}>L</p></div>
                            <p class="mt-[0.4rem] font-medium text-sm">15 mins</p>
                        </div>
                        
                    </div>

                    <div>
                        <div class="flex gap-2">
                            <div><FaStar style={iconStyle2}/></div>
                            <p class="mt-[0.4rem] font-medium text-sm">12 likes</p>
                        </div>
                    </div>
                </div>

                
                <div class="mt-7 flex justify-around gap-11">
                        <div class="mt-1 font-medium">
                            <p>5 days ago</p>
                        </div>

                        <div class="bg-violet-800 w-[7rem] flex p-2 gap-3 rounded-full">
                            <p class="text-white ml-3 text-sm">Connect</p>
                            <FaAngleRight style={iconStyle3}/>
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default userinfo