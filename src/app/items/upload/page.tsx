import Button from "@/components/button";
import Layout from "@/components/layout";

const Upload = () => {
  return (
    <Layout canGoBack>
      <div className="space-y-5 px-4 py-16">
        <div>
          <label
            htmlFor="price"
            className="flex h-48 w-full cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-gray-300 text-gray-600 transition-colors hover:border-orange-400 hover:text-orange-400"
          >
            <svg
              className="h-12 w-12"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input id="price" className="hidden" type="file" />
          </label>
        </div>
        <div>
          <label className="mb-1 block  text-sm font-medium text-gray-800">
            Name
          </label>
          <div className="relative flex items-center rounded-md shadow-sm">
            <input
              type="text"
              placeholder="name"
              className="w-full appearance-none rounded-md border border-gray-300 py-2  placeholder-gray-400 shadow-sm transition-colors focus:border-orange-500 focus:outline-none focus:ring-orange-500"
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
        <Button text="Upload product" />
      </div>
    </Layout>
  );
};

export default Upload;
