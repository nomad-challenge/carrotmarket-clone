const EditProfile = () => {
  return (
    <div className="space-y-4 px-4 py-10">
      <div className="flex items-center space-x-3">
        <div className="h-14 w-14 rounded-full bg-slate-300"></div>
        <label
          htmlFor="picture"
          className="cursor-pointer rounded-md border border-dashed border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:border-orange-500 hover:ring-2 hover:ring-orange-500 hover:ring-offset-2"
        >
          Change
          <input id="picture" className="hidden" type="file" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label
          htmlFor="email"
          className="mt-8 text-sm font-medium text-gray-700 transition-colors"
        >
          Email address
        </label>
        <input
          id="email"
          type="email"
          className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
          placeholder="email"
        />
      </div>
      <div className="space-y-1">
        <label
          htmlFor="phonenumber"
          className="mt-8 text-sm font-medium text-gray-700 transition-colors"
        >
          Phone number
        </label>
        <div className="flex rounded-sm shadow-sm">
          <span className="flex select-none items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
            +82
          </span>
          <input
            id="phonenumber"
            type="number"
            className="w-full appearance-none rounded-r-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500"
            required
          />
        </div>
      </div>
      <button className="mt-6 w-full rounded-md border border-transparent bg-orange-500 px-3 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
        Update profile
      </button>
    </div>
  );
};

export default EditProfile;
