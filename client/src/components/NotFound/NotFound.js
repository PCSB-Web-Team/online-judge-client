import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="p-16 text-2xl md:-mt-16 min-h-screen">
      <div className="mb-4 text-white flex text-5xl py-8">
        //<div className="text-red-500 px-2">404</div> page not found.
      </div>
      <div className="flex text-3xl">
        <div className="text-white">if</div>(
        <div className="text-red-500 px-1">!</div>
        <div className="text-white px-1">found</div>)
      </div>
      <div>
        <div className="text-gray-300 py-2">
          throw(<span className="text-cyan-500">"(╯°□°)╯︵ ┻━┻"</span>);
        </div>
        <div className="block mb-4"></div>
        <div className="text-white text-3xl">
          //
          <Link to="/" className="text-green-500">
            Go home!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
