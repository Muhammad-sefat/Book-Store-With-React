import "./App.css";

function App() {
  return (
    <div className="px-10 mx-auto">
      <h2 className="text-5xl text-center font-bold text-lime-500">
        Book Store
      </h2>
      <div className="flex justify-between pt-10 gap-5">
        <div className="w-[70%]">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[28%]">
          <h1>right side</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
