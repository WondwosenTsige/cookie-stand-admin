import { useState } from "react";
import useResource from "../hooks/useResource";

function Form(props) {
  const [formItems, setformItems] = useState({});
  const{createResource} = useResource();
  const handleChange = (e) => {
    const newFormItems = {
      ...formItems,
      [e.target.name]: e.target.value,
    };
    setformItems(newFormItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createResource(formItems);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 w-3/4 mx-auto my-5 bg-green-500 rounded-md space-x-10 space-y-10"
    >
      <h1 className="flex justify-center text-2xl font-extrabold">
        Create Cookie Stand
      </h1>
      <div className="flex">
        <label className="mr-4">Location:</label>
        <input
          onChange={handleChange}
          className="flex-grow "
          type="text"
          name="location"
        />
      </div>
      <div className="flex justify-between -mx-3 mb-2">
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Minimum customers per hour
          </label>
          <input
            onChange={handleChange}
            name="minimum_customers_per_hour"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Maximum customers per hour
          </label>
          <input
            onChange={handleChange}
            name="maximum_customers_per_hour"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Average cookies per slae
          </label>
          <input
            onChange={handleChange}
            name="average_cookies_per_sale"
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
          />
        </div>
        <div>
          <button class="text-teal-500 bg-transparent border border-solid border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold uppercase px-8 py-3 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
            Create
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
