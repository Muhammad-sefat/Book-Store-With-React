import { useEffect } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [books, setbooks] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setbooks(data.books));
  }, []);

  const handleAddToCart = (book) => {
    const isExist = cartItem.find((bok) => bok.title == book.title);
    console.log(isExist);
    if (!isExist) {
      setCartItem([...cartItem, book]);
    }
  };
  return (
    <>
      <div className="p-5 md:px-10 mx-auto">
        <h2 className="text-5xl text-center font-bold text-lime-500">
          Book Store
        </h2>
        <div className="flex flex-col md:flex-row justify-between pt-10 gap-5">
          <div className="md:w-[70%] grid grid-cols-1 md:grid-cols-3 gap-6">
            {books?.map((book, inx) => {
              return (
                <div
                  key={inx}
                  className="card bg-base-100 shadow-xl rounded-lg p-5"
                >
                  <figure>
                    <img
                      className="rounded-lg"
                      src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body text-center space-y-2">
                    <h2 className="card-title text-3xl font-semibold">
                      {book.name}
                    </h2>
                    <p className="text-[#555] font-medium">{book.title}</p>
                    <div className="card-actions justify-center">
                      <button
                        onClick={() => handleAddToCart(book)}
                        className="btn bg-lime-500 p-2 rounded-lg font-medium"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-5 md:w-[28%] bg-gray-200 rounded-md">
            <h1 className="text-center text-2xl font-semibold py-3">
              Add To Bookmark
            </h1>
            <hr className="border border-gray-600" />
            <div className="flex justify-between items-center p-3">
              <h2 className="text-xl font-semibold">Name</h2>
              <h2 className="text-xl font-semibold">Price</h2>
            </div>

            {cartItem.map((cart, idx) => {
              return (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-white my-3 p-3 rounded-md"
                >
                  <h2 className="text-xl font-semibold">{cart.name}</h2>
                  <h2 className="text-xl font-semibold">{cart.price}</h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
