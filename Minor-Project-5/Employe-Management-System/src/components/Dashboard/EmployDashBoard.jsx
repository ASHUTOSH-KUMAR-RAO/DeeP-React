import TaskList from "../TaskList/TaskList"
import Header from "../works/Header"
import TaskLiatNumber from "../works/TaskLiatNumber"

const EmployDashBoard = () => {
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen w-screen">
      <Header/>
      <TaskLiatNumber/>
      <TaskList/>
    </div>
  )
}

export default EmployDashBoard
