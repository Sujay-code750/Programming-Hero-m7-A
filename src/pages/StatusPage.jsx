import React, { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { FriendContext } from "../context/FriendProvider";

const StatusPage = () => {

    const {callFriend, messageFriend, videoCallFriend} = useContext(FriendContext);

  const data = [
    { name: "Text", value: callFriend.length, fill: "#7f37f5" },
    { name: "Call", value: messageFriend.length, fill: "#244d3f" },
    { name: "Video", value: videoCallFriend.length, fill: "#37a163" },
  ];
  return (
    <div className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto">
        <div>
            <h1 className="font-bold text-5xl mb-10">Friendship Analytics</h1>
       
      </div>

      <div className="bg-white rounded-mg shadow p-10">
        <div>
          <h1 className="text-2xl font-semibold text-[#244d3f] mb-10">By Interaction Type</h1>
        </div>

        <div>
          <PieChart
            style={{
              width: "100%",
              maxWidth: "500px",
              maxHeight: "80vh",
              margin:'auto',
              aspectRatio: 1,
            }}
            responsive
          >
            <Pie
              data={data}
              innerRadius="80%"
              outerRadius="100%"
              // Corner radius is the rounded edge of each pie slice
              cornerRadius="50%"
              fill="#8884d8"
              // padding angle is the gap between each pie slice
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
            />
            <Legend></Legend>
            <Tooltip></Tooltip>
          </PieChart>
        </div>
      </div>
       </div>
    </div>
  );
};

export default StatusPage;
