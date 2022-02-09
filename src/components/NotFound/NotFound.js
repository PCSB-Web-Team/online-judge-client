import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div class="p-16 text-2xl">
      <div className="mb-4">// 404 page not found.</div>
      <div className="flex">
        <div>if</div>(<div>!</div>
        <div>found</div>)
      </div>
      <div>
        <div>
          throw(<span>"(╯°□°)╯︵ ┻━┻"</span>);
        </div>
        <div className="block mb-4"></div>
        <div>
          //
          <Link to="/" className="text-cyan-500">
            Go home!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
