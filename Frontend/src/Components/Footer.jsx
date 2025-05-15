import { Select, Text } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";
import { BsTwitter, BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";
import image from "../Assets/image1.png";
import { Link } from "react-router-dom";
import { DIV } from "../style/Footers_Style";
const Footer = () => {
  return (
    <DIV className="footer">
      <div className="top">
        <div className="container">
          <Text fontSize="2xl">About Us</Text>
          <Link>
            <p>About Quizlet</p>
          </Link>
          <Link>
            <p>How Quizlet works</p>
          </Link>
          <Link>
            <p>Careers</p>
          </Link>
          <Link>
            <p>Advertise with us</p>
          </Link>
          <Link>
            <p>Get the app</p>
          </Link>
        </div>
        <div className="container">
          <Text fontSize="2xl">For students</Text>
          <Link>
            <p>Flashcards</p>
          </Link>
          <Link>
            <p>Learn</p>
          </Link>
          <Link>
            <p>Solutions</p>
          </Link>
          <Link>
            <p>Quizlet Plus</p>
          </Link>
        </div>
        <div className="container">
          <Text fontSize="2xl">For teachers</Text>
          <Link>
            <p>Live</p>
          </Link>
          <Link>
            <p>Checkpoint</p>
          </Link>
          <Link>
            <p>Blog</p>
          </Link>
          <Link>
            <p>Be the Change</p>
          </Link>
          <Link>
            <p>studyBuddy Plus for teachers</p>
          </Link>
        </div>
        <div className="container">
          <Text fontSize="2xl">Resources</Text>
          <Link>
            <p>Help center</p>
          </Link>
          <Link>
            <p>Sign up</p>
          </Link>
          <Link>
            <p>Honor code</p>
          </Link>
          <Link>
            <p>Community guidelines</p>
          </Link>
          <Link>
            <p>Privacy</p>
          </Link>
          <Link>
            <p>Terms</p>
          </Link>
          <Link>
            <p>Ad and Cookie Policy</p>
          </Link>
        </div>
        <div className="container">
          <Text fontSize="2xl">Language</Text>
          <Select>
            <option value="English">English</option>
            <option value="Mandarin Chinese">Mandarin Chinese</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="Arabic">Arabic</option>
            <option value="French">French</option>
            <option value="Bengali">Bengali</option>
            <option value="Russian">Russian</option>
          </Select>
        </div>
      </div>
      <div className="footerBotom">
        <div className="icons">
          <div className="iconContainer">
            <FaYoutube />
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
            <BsTiktok />
          </div>
          <Text>© 2023 StudyBuddy, Inc.</Text>
        </div>
        <div className="footerImage">
          <img src={image} alt="images" />
        </div>
      </div>
    </DIV>
  );
};

export default Footer;
