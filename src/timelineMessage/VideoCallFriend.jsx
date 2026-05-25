import React from 'react';
import videoCallImage from '../assets/video.png'

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const VideoCallFriend = ({videoCallFriend}) => {

          const now = new Date();
      const date = {
    day: now.getDate(),
    month: MONTHS[now.getMonth()],
    year: now.getFullYear(),
  };
    return (
        <div className='space-y-3'>
            {
                            videoCallFriend.map((friend) =>{
                                return (
                                    <div className='bg-white p-5 rounded shadow flex gap-3'>
                                        <img src={videoCallImage} alt={friend.name} className=''/>
                                        <div>
                                            <p className='text-[#64748b]'><span className='text-lg text-black'>Text </span>with {friend.name}</p>
                                            <p className='text-sm'>{date.month} {date.day}, {date.year}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
        </div>
    );
};

export default VideoCallFriend;