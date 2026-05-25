import React from 'react';
import callImage from '../assets/call.png'

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const CallFriend = ({callFriend}) => {

          const now = new Date();
      const date = {
    day: now.getDate(),
    month: MONTHS[now.getMonth()],
    year: now.getFullYear(),
  };
    return (
        <div className='space-y-3'>
            {
                            callFriend.map((friend) =>{
                                return (
                                    <div className='bg-white p-5 rounded shadow flex gap-3'>
                                        <img src={callImage} alt={friend.name} className=''/>
                                        <div>
                                            <p className='text-[#64748b]'><span className='text-lg text-black'>Video </span>with {friend.name}</p>
                                            <p className='text-sm'>{date.month} {date.day}, {date.year}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
        </div>
    );
};

export default CallFriend;