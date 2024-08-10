import React from "react";
import { Link } from "react-router-dom";

import BlogModal from "../modals/blog-modal"; // testing it

export default function() {
  return (
    <div>
        {/* <BlogModal>
        </BlogModal> */}
      <h2>Contact</h2>

      <div>
        <Link to="/about-me">Read more about myself</Link>
      </div>
    </div>
  );
}