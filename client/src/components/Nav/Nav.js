import React, {useState} from "react";
import { Outlet } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import "../Nav/Nav.component.scss";
import Footer from "../footer/footer.component";

function Nav() {

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 90){
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);


  return (
    <>
      <Disclosure as="nav" className={`py-5 ${color ? 'nav nav-bg' : 'nav'}`}>
        {({ open }) => (
          <>
            <div className="px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div>
                  <a className="text-white" href="/">
                    Article Summarizer
                  </a>
                </div>
                <div>
                  <a className="text-white" href="/login">
                    Login
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
      <Outlet />
      <Footer />
    </>
  );
}

export default Nav;
