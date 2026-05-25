import React, { useContext } from "react";
import FriendHooks from "../../friendHook/FriendHooks";
import { useParams } from "react-router";
import { SyncLoader } from "react-spinners";
import { LuPhoneCall } from "react-icons/lu";
import { BsChatLeftText } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";
import "./friendDetails.css";
import { toast } from "react-toastify";
import { FriendContext } from "../../context/FriendProvider";

const statusColors = {
  active: "bg-red-500 text-white",
  overdue: "bg-purple-400 text-white",
  "almost due": "bg-yellow-400 text-white",
  on_track: "bg-green-700 text-white",
  inactive: "bg-gray-400 text-white",
};

const FriendDetails = () => {
  const { id } = useParams();
  const { friends, loading } = FriendHooks();
    const {callFriend, setCallFriend, messageFriend, setMessageFriend, videoCallFriend, setVideoCallFriend } = useContext(FriendContext);

  const expectedFriend = friends.find((friend) => friend.id == id);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[50vh]">
        <SyncLoader />
      </div>
    );
  };


      const handleCallFunction = ()=>{
        setCallFriend([...callFriend, expectedFriend]);
         toast.success(`${expectedFriend.name} is successfully Called.`);
    }
      const handleMessageFunction = ()=>{
        setMessageFriend([...messageFriend, expectedFriend]);
         toast.success(`${expectedFriend.name} is successfully Messaged.`);
    }
      const handleVideoCallFunction = ()=>{
        setVideoCallFriend([...videoCallFriend, expectedFriend]);
         toast.success(`${expectedFriend.name} is successfully Video Called.`);
    }





  return (
    <div className="bg-[#f8fafc] py-20">
     
    </div>
  );
};

export default FriendDetails;
