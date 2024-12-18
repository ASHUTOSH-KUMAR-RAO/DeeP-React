const CreateTask = () => {
  return (
    <div>
      <div className="p-5 mt-7 bg-[#1c1c1c]">
        <form className="flex flex-wrap w-full items-start justify-between">
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                type="text"
                placeholder="Create a Task.."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                type="date"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Assign To</h3>
              <input
                type="text"
                placeholder="Employe Name."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>

            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Catogery</h3>
              <input
                type="text"
                placeholder="Design,Dev,Portfolio etc..."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
          </div>

          <div className="w-1/2">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              name=""
              id=""
              rows="10"
              cols="30"
              className="text-sm py-2 px-4 w-full h-44 rounded outline-none bg-transparent border-[1px] border-gray-400 "
            ></textarea>
          </div>

          <button className="bg-[salmon] px-4 py-2 hover:bg-[royalblue] rounded-xl text-sm mt-4 w-full">
            Create Task.
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateTask
