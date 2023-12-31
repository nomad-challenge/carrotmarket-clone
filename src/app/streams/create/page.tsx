const Create = () => {
  return (
    <div className="space-y-5 px-4 py-10">
      <div>
        <label className="mb-1 block  text-sm font-medium text-gray-800">
          Name
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <input
            type="text"
            className="w-full appearance-none rounded-md border border-gray-300 py-2 placeholder-gray-400 shadow-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
        </div>
      </div>
      <div>
        <label className="mb-1 block  text-sm font-medium text-gray-800">
          Price
        </label>
        <div className="relative flex items-center rounded-md shadow-sm">
          <div className="pointer-events-none absolute left-0 flex items-center justify-center pl-3">
            <span className="text-sm text-gray-500">$</span>
          </div>
          <input
            type="text"
            placeholder="0.00"
            className="w-full appearance-none rounded-md border border-gray-300 py-2 pl-7 pr-12 placeholder-gray-400 shadow-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          />
          <div className="pointer-events-none absolute right-0 flex items-center pr-3">
            <span className="text-gray-500 ">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block  text-sm font-medium text-gray-800">
          Description
        </label>
        <textarea
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm transition-colors focus:border-orange-400 focus:outline-none focus:ring-orange-400"
          rows={4}
        />
      </div>
      <button className="mt-5 w-full rounded-md border border-transparent bg-orange-500 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Go live
      </button>
    </div>
  );
};
export default Create;
