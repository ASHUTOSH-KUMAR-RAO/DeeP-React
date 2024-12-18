import Alltask from "../works/Alltask";
import CreateTask from "../works/CreateTask";
import Header from "../works/Header";

const AdminDashBoard = () => {
  return (
    <div className="h-screen w-full p-14">
      <Header />
      <CreateTask/>
      <Alltask/>
    </div>
  );
};

export default AdminDashBoard;
