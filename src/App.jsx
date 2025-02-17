import Loopstudio from "./assets/images/desktop/logo.svg";
import Interactive from "./assets/images/desktop/image-interactive.jpg";
import DeepEarthDesktop from "./assets/images/desktop/image-deep-earth.jpg";
import DeepEarthMobile from "./assets/images/mobile/image-deep-earth.jpg";
import NightDesktop from "./assets/images/desktop/image-night-arcade.jpg";
import NightMobile from "./assets/images/mobile/image-night-arcade.jpg";
import SoccerTeamDesktop from "./assets/images/desktop/image-soccer-team.jpg";
import SoccerTeamMobile from "./assets/images/mobile/image-soccer-team.jpg";
import TheGridDesktop from "./assets/images/desktop/image-grid.jpg";
import TheGridMobile from "./assets/images/mobile/image-grid.jpg";
import FromAboveDesktop from "./assets/images/desktop/image-from-above.jpg";
import FromAboveMobile from "./assets/images/mobile/image-from-above.jpg";
import PocketBorealisDesktop from "./assets/images/desktop/image-pocket-borealis.jpg";
import PocketBorealisMobile from "./assets/images/mobile/image-pocket-borealis.jpg";
import CuriosityDesktop from "./assets/images/desktop/image-curiosity.jpg";
import CuriosityMobile from "./assets/images/mobile/image-curiosity.jpg";
import FisheyeDesktop from "./assets/images/desktop/image-fisheye.jpg";
import FisheyeMobile from "./assets/images/mobile/image-fisheye.jpg";
import FacebookIcon from "./assets/images/icon-facebook.svg";
import TwitterIcon from "./assets/images/icon-twitter.svg";
import PinterestIcon from "./assets/images/icon-pinterest.svg";
import InstagramIcon from "./assets/images/icon-instagram.svg";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* hero section  */}
      <section className="hero ">
        {/* hero container  */}
        <div className=" container font-josefin max-w-6xl mx-auto px-6 py-12 ">
          {/* menu/logo container  */}
          <nav className="flex items-center justify-between font-bold text-white">
            {/* logo  */}
            <img src={Loopstudio} alt="logo Loopstudio" />
            <div className="hidden h-10 font-alata md:flex space-x-8">
              <div className="group">
                <a href="">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="">Career</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="">Events</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="">Support</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
              <div className="group">
                <a href="">About</a>
                <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
              </div>
            </div>

            {/*hamburger button  */}
            <div className="md:hidden">
              <button
                id="menu-btn"
                type="button"
                className={`z-40 block hamburger md:hidden focus:outline-none ${
                  isOpen ? "open" : ""
                }`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
              </button>
            </div>
          </nav>
          {/*mobile menu */}
          <div
            id="menu"
            className={`${
              isOpen ? "flex" : "hidden"
            } flex-col absolute top-0 bottom-0 left-0 self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg text-white uppercase bg-black `}
          >
            <a href="#" className="hover:text-pink-500">
              About
            </a>
            <a href="#" className="hover:text-pink-500">
              Careers
            </a>
            <a href="#" className="hover:text-pink-500">
              Events
            </a>
            <a href="#" className="hover:text-pink-500">
              Products
            </a>
            <a href="#" className="hover:text-pink-500">
              Suport
            </a>
          </div>
          <div className="max-w-lg mt-32 mb-32 p-4 font-josefin text-4xl text-white uppercase border-2 md:p-10 md:m-32 md:mx-0 md:text-6xl">
            Impressive Experiences that deliver
          </div>
        </div>
      </section>
      {/* features section */}
      <section>
        {/* features container */}
        <div className="relative container flex flex-col max-w-6xl mx-auto my-32 px-6 text-gray-900 md:flex-row md:px-0">
          <img src={Interactive} alt="interactive" />
          {/* text container  */}
          <div className="top-48 pr-0 bg-white md:absolute md:right-0 md:py-20 md:pl-20">
            <h2 className="max-w-lg mt-10 mb-6 text-4xl text-center text-gray-900 uppercase md:text-5xl md:mt-0 md:text-left font-josefin">
              The leader in interactive VR
            </h2>
            <p className="max-w-md text-center md:text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              voluptatum eveniet in fugiat, alias quis repellat optio cum
              voluptate quae nemo modi officia.
            </p>
          </div>
        </div>
      </section>

      {/* creations section */}
      <section>
        {/* creations container */}
        <div className="container max-w-6xl mx-auto my-32 px-6 text-gray-900 md:px-0">
          {/*creations header */}
          <div className="flex justify-center mb-20 md:justify-between">
            <h2 className="text-4xl text-center uppercase md:text-left md:text-5xl">
              Our Creations
            </h2>
            <button className="hidden btn md:block">See all</button>
          </div>
          {/* items container  */}
          <div className="item-container">
            {/* item 1 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={DeepEarthDesktop}
                alt="deep earth"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={DeepEarthMobile}
                alt="deep earth"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Deep Earth</h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={NightDesktop}
                alt="Night"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img src={NightMobile} alt="Night" className="w-full md:hidden" />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Night Arcade</h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={SoccerTeamDesktop}
                alt="Soccer Team"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={SoccerTeamMobile}
                alt="Soccer Team"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Soccer Team</h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={TheGridDesktop}
                alt="The grid"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={TheGridMobile}
                alt="The Grid"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>The Grid</h5>
            </div>
          </div>
          {/* items container 2 */}
          <div className="item-container mt-12">
            {/* item 1 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={FromAboveDesktop}
                alt="from above"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={FromAboveMobile}
                alt="from above"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>From Above</h5>
            </div>

            {/* item 2 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={PocketBorealisDesktop}
                alt="Pocket Borealis "
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={PocketBorealisMobile}
                alt="Night"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Pocket Borealis</h5>
            </div>

            {/* item 3 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={CuriosityDesktop}
                alt="Curiosity"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={CuriosityMobile}
                alt="Curiosity"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Curiosity</h5>
            </div>

            {/* item 4 */}
            <div className="group item">
              {/* desktop image  */}
              <img
                src={FisheyeDesktop}
                alt="The grid"
                className="hidden w-full duration-200 md:block group-hover:scale-110"
              />
              {/* mobile image  */}
              <img
                src={FisheyeMobile}
                alt="Fisheye"
                className="w-full md:hidden"
              />
              {/* item gradient  */}
              <div className="item-gradient"></div>
              {/* item text  */}
              <h5>Fisheye</h5>
            </div>
          </div>
          {/* bottom button container  */}
          <div className="flex justify-center mt-10 md:hidden">
            <button className="btn w-full md:hidden">See All</button>
          </div>
        </div>
      </section>
      {/* footer  */}
      <section>
        <footer className="bg-black ">
          <div className="container max-w-6xl py-10 mx-auto">
            {/* footer flex container  */}
            <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
              {/* menu & logo container */}
              <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
                {/* logo  */}
                <div className="h-8">
                  <img src={Loopstudio} alt="logo" className="w-44 md:ml-3" />
                </div>
                {/* menu container  */}
                <div className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">
                  {/* item 1 */}
                  <div className="h-10 group">
                    <a href="#">About</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  {/* item 2 */}
                  <div className="h-10 group">
                    <a href="#">Careers</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  {/* item 3 */}
                  <div className="h-10 group">
                    <a href="#">Events</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  {/* item 4 */}
                  <div className="h-10 group">
                    <a href="#">Products</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                  {/* item 5 */}
                  <div className="h-10 group">
                    <a href="#">Support</a>
                    <div className="mx-2 group-hover:border-b group-hover:border-blue-50"></div>
                  </div>
                </div>
              </div>
              {/* social and copyright container */}
              <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
                {/* icons container  */}
                <div className="flex items-center mx-auto justify-center space-x-4 md:justify-end md:mx-0">
                  {/* icon-1  */}
                  <div className="h-8 group">
                    <a href="#">
                      <img src={FacebookIcon} alt="facebook" />
                    </a>
                  </div>
                  {/* icon-2  */}
                  <div className="h-8 group">
                    <a href="#">
                      <img src={TwitterIcon} alt="Twitter" />
                    </a>
                  </div>
                  {/* icon-3  */}
                  <div className="h-8 group">
                    <a href="#">
                      <img src={PinterestIcon} alt="Pinterest" />
                    </a>
                  </div>
                  {/* icon-4  */}
                  <div className="h-8 group">
                    <a href="#">
                      <img src={InstagramIcon} alt="instagram" />
                    </a>
                  </div>
                </div>
                {/* copyright  */}
                <div className="font-bold">
                  &copy; 2025 loopstudios. All rights reserved
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
