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
      <div className="w-full md:w-300 px-5 container mx-auto">
        <div className="customGrid">
          <div className="friendDetails">
            <div className="p-5 text-center rounded-md shadow bg-white space-y-1">
              <img
                src={expectedFriend.picture}
                alt=""
                className="mx-auto rounded-full w-20 h-auto"
              />
              <h1 className="text-xl font-bold">{expectedFriend.name}</h1>
                      <div className="my-4">
          <span
              className={`px-4 py-1 rounded-full text-sm font-medium ${
                statusColors[expectedFriend.status]
              }`}
            >
              {expectedFriend.status}
            </span>
        </div>

              <div>
                <div className="badge">
                  <div className=" flex gap-2 justify-center items-center">
                    {expectedFriend.tags.map((tag, index) => (
                      <div
                        className="badge text-black bg-[#cbfadb] rounded-full"
                        key={index}
                      >
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

                      <div>
            <p className="text-[#64748b] font-semibold">"{expectedFriend.bio}"</p>
        </div>
            <p className="text-[#64748b]">Preferred: {expectedFriend.email}</p>
            </div>

          </div>

          <div className="days_since_contact flex justify-center items-center flex-col space-y-1 bg-white rounded-md shadow p-5">
            <h1 className="font-bold text-4xl">{expectedFriend.days_since_contact}</h1>
            <p className="text-lg text-[#64748b]">Days Since Contact</p>
          </div>
          <div className="goal flex justify-center items-center flex-col space-y-1 bg-white rounded-md shadow p-5">
            <h1 className="font-bold text-4xl">{expectedFriend.goal}</h1>
            <p className="text-lg text-[#64748b]">Days Since Contact</p>
          </div>
          <div className="next_due_date flex justify-center items-center flex-col space-y-1 bg-white rounded-md shadow p-5">
            <h1 className="font-bold text-4xl">{expectedFriend.next_due_date}</h1>
            <p className="text-lg text-[#64748b]">Days Since Contact</p>
          </div>

          <div className="relationship_Goal flex items-start justify-between rounded-sm p-5 bg-white shadow">
            <div className="space-y-4">
              <h2 className="text-xl text-bold">Relationship Goal</h2>
              <p className="text-[#64748b] text-lg">
                Connect every
                <span className="font-bold text-black"> {expectedFriend.goal} days</span>
              </p>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>

          <div className="buttons space-y-2 flex flex-col">
            <button className="btn btn-lg bg-white">Snooze 2 Weeks</button>
            <button className="btn btn-lg bg-white">Archive</button>
            <button className="btn btn-lg bg-white text-red-600">Delete</button>
          </div>

          <div className="Quick_check bg-white p-5 rounded-md shadow">
            <h3 className="text-xl font-semibold mb-2">Quick Check-In</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <button className="cursor-pointer bg-gray-100 flex flex-col justify-center items-center p-5 rounded-md hover:bg-gray-300 transition" onClick={handleCallFunction}>
                <span className="text-3xl">
                  <LuPhoneCall />
                </span>
                <p className="text-lg font-semibold">Call</p>
              </button>

              <button className="cursor-pointer bg-gray-100 flex flex-col justify-center items-center p-5 rounded-md hover:bg-gray-300 transition"  onClick={handleMessageFunction}>
                <span className="text-3xl">
                  <BsChatLeftText />
                </span>
                <p className="text-lg font-semibold">Text</p>
              </button>

              <button className="cursor-pointer bg-gray-100 flex flex-col justify-center items-center p-5 rounded-md hover:bg-gray-300 transition"  onClick={handleVideoCallFunction}>
                <span className="text-3xl">
                  <FiVideo />
                </span>
                <p className="text-lg font-semibold">Video</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
