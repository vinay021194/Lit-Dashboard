// pages/dashboard.js
import TeamList from "@/components/TeamList";
import Navbar from "../components/navbar";
// import UserProfile from "../components/UserProfile";
// import TeamList from "../components/TeamList";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4 flex h-screen">
        <TeamList />
        {/* <UserProfile />
        <TeamList /> */}
        {/* Add other dashboard components */}
      </div>
    </div>
  );
};

export default Dashboard;

// components/TodoList.js
