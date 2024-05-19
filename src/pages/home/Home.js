import Navbar from "../../components/navbar/Navbar";
import { AdoptWrapper, Container, WelcomeWrapper } from "./Home.style";

const ImageHeader = require("../../assets/img/dummy600400.jpg");

export default function Home() {
  return (
    <Container>
      <Navbar />
      <WelcomeWrapper>
        <div>
          <section>
            <h1>
              Welcome to our
              <br />
              Pet Adoption Center
            </h1>
            <p>Find your perfect furry companion here</p>
          </section>
        </div>
        <div>
          <img src={ImageHeader} alt="Header" />
        </div>
      </WelcomeWrapper>
      <AdoptWrapper>
        <h1>Available Pets</h1>
        <ul>
          <li>
            <a href="/adopt/dog">
              <div>
                <span role="img" aria-label="dog">
                  🐶
                </span>
              </div>
              <p>Dog</p>
            </a>
          </li>
          <li>
            <a href="/adopt/dog">
              <div>
                <span role="img" aria-label="cat">
                  🐱
                </span>
              </div>
              <p>Cat</p>
            </a>
          </li>
          <li>
            <a href="/adopt/rabbit">
              <div>
                <span role="img" aria-label="rabbit">
                  🐰
                </span>
              </div>
              <p>Bunny</p>
            </a>
          </li>
        </ul>
      </AdoptWrapper>
    </Container>
  );
}
