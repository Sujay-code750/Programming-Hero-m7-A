import React, { useContext } from 'react';
import { FriendContext } from '../context/FriendProvider';
import CallFriend from '../timelineMessage/CallFriend';
import MessageFriend from '../timelineMessage/MessageFriend';
import VideoCallFriend from '../timelineMessage/VideoCallFriend';

const TimeLinePage = () => {
         const {callFriend, messageFriend, videoCallFriend} = useContext(FriendContext);



    return (
        <div className='bg-gray-100 py-10'>
           <div className='container mx-auto'>
                <h1 className='text-5xl font-bold pb-10'>TimeLine</h1>

           <div className='space-y-5'>
            <CallFriend callFriend={callFriend}></CallFriend>
            <MessageFriend messageFriend={messageFriend}></MessageFriend>
            <VideoCallFriend videoCallFriend={videoCallFriend}></VideoCallFriend>
            
           </div>
        </div>
            </div>
    );
};

export default TimeLinePage;