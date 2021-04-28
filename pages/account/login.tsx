import { useState, useEffect } from "react";

export default function login() {
  return (
    <>
      <div className="login_page_container">
        <div className="login_form_container">
          <form>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <input className="login_btn" type="submit" value="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
