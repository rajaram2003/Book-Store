/* eslint-disable react/prop-types */

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3 flex justify-center">
      <div className="card w-80 md:w-96 bg-base-100 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-100 dark:bg-slate-900 dark:text-white dark:border dark:hover:bg-slate-800">
        <figure className="h-45 overflow-hidden">
          <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-lg font-semibold flex items-center justify-between">
            {item.name}
            <span className="badge badge-secondary text-sm px-2 py-1">{item.category}</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">{item.title}</p>
          <div className="card-actions flex justify-between items-center mt-3">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">{item.price}</span>
            <button className="px-3 py-1 text-white bg-pink-500 rounded-full transition duration-300 hover:bg-pink-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;