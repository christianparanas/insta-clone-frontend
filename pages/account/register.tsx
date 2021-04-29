import { useState, useEffect } from "react";

export default function register() {
  return (
    <>
      <div className="login_page_container">
        <div className="login_form_container">
          <form>
            <input type="text" placeholder="Username or Email" />
            <input type="password" placeholder="Password" />
            <input className="register_btn" type="submit" value="register" />
          </form>
        </div>
      </div>
    </>
  );
}
