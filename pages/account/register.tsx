import { useState, useEffect } from "react";

export default function register() {
  return (
    <>
      <div className="login_page_container">
        <div className="login_form_container">
          <form>
            <input type="text" placeholder="Username" />
				<input type="text" placeholder="Full name" />
				<input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input className="register_btn" type="submit" value="Sign Up" />
          </form>
        </div>
      </div>
    </>
  );
}
