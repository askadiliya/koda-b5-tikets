import logo from "../assets/img/logo.svg";
import ebv from "../assets/img/ebv.svg";
import CineOne21 from "../assets/img/cineOne21.svg";
import hiflix from "../assets/img/hiflix.svg";
import facebook from "../assets/img/facebook.svg";
import instagram from "../assets/img/instagram.svg";
import twitter from "../assets/img/twitter.svg";
import youtube from "../assets/img/youtube.svg";

function Footer() {
  return (
    <>
      <footer className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto flex flex-col">
          <div className="flex justify-between">
            <div>
              <img src={logo} alt="Logo" />
              <p className="pt-6">
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </div>

            <div>
              <h4 className="font-bold">Explore</h4>
              <ul>
                <li className="pt-6">
                  <a href="">Cinemas</a>
                </li>
                <li className="pt-1.5">
                  <a href="">Movies List</a>
                </li>
                <li className="pt-1.5">
                  <a href="">My Ticket</a>
                </li>
                <li className="pt-1.5">
                  <a href="">Notification</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold">Our Sponsor</h4>
              <img src={ebv} alt="Logo1" className="w-32 pt-6" />
              <img src={CineOne21} alt="Logo2" className="w-32 pt-2" />
              <img src={hiflix} alt="Logo3" className="w-32 pt-2" />
            </div>
            <div>
              <h4 className="font-bold">Follow us</h4>
              <div className="flex items-center pt-6">
                <img
                  src={facebook}
                  alt="Tickitz Cinema id"
                  className="size-9 pt-1.5"
                />
                <p>Tickitz Cinema id</p>
              </div>

              <div className="flex items-center">
                <img
                  src={instagram}
                  alt="tickitz.id"
                  className="size-9 pt-3"
                />
                <p>tickitz.id</p>
              </div>
              <div className="flex items-center">
                <img
                  src={twitter}
                  alt="tickitz.id"
                  className="size-9 pt-3 "
                />
                <p>tickitz.id</p>
              </div>
              <div className="flex items-center">
                <img
                  src={youtube}
                  alt="Tickitz Cinema id"
                  className="size-9 pt-3"
                />
                <p>Tickitz Cinema id</p>
              </div>
            </div>
          </div>

          <p className="text-center mt-10 text-gray-500 text-sm">
            © 2020 Tickitz. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
