const TaskLiatNumber = () => {
  return (
    <div className="flex justify-between mt-10 screen gap-6">

      <div className="py-6 px-9 w-[45%] bg-green-400 rounded-lg">
        <h2 className="text-3xl font-semibold  text-black">0</h2>
        <h3 className="text-2xl font-medium  text-black">New Task</h3>
      </div>

      <div className="py-6 px-9 w-[45%] bg-pink-400 rounded-lg">
        <h2 className="text-3xl font-semibold  text-black">0</h2>
        <h3 className="text-2xl font-medium  text-black">Completed Task</h3>
      </div>

      <div className="py-6 px-9 w-[45%] bg-violet-400 rounded-lg">
        <h2 className="text-3xl font-semibold  text-black">0</h2>
        <h3 className="text-2xl font-medium  text-black">Accept Task</h3>
      </div>

      <div className="py-6 px-9 w-[45%] bg-emerald-300 rounded-lg">
        <h2 className="text-3xl font-semibold  text-black">0</h2>
        <h3 className="text-2xl font-medium  text-black">failed Task</h3>
      </div>

    </div>
  )
}

export default TaskLiatNumber
