import React from 'react'
import img from './img/card_pay.jpg'
import { FaEllipsisH } from 'react-icons/fa'

function card() {
  return (
    <div>
        <div>
            <div class="flex justify-around gap-[10rem] lg:-mt-14 SM:-mt-[6%] -mt-[15%]">
                <h2 class="font-semibold">My card</h2>
                <FaEllipsisH/>
            </div>
            <div class="flex justify-center lg:mt-4 sm:mt-12 mt-5">
                <img src={img} class="rounded-3xl lg:w-[17rem] lg:h-[10rem] w-[22rem] "/>
            </div>
        </div>
    </div>
  )
}

export default card