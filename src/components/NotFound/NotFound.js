import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="mb-4">
      <div class="p-24 text-2xl">
        <div className="mb-4">// 404 page not found.</div>
        <div className="flex">
          <div>if</div>(<div>!</div>
          <div>found</div>)
        </div>
        <div>
          <div>
            <i></i>throw
          </div>
          <div>
            (<span>"(╯°□°)╯︵ ┻━┻"</span>);
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
    </div>
  );
}

export default NotFound;
