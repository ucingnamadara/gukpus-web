import ComponentButton from "../../../components/form/button/Button";
import Input from "../../../components/form/input/Input";
import {
  LoginForm,
  Container,
  LoginDiv,
  FormTitle,
  LoginTitle,
  LoginTitleDescription,
  ImageDiv,
  Image,
  LineSeparator,
  Hyperlink,
} from "./Login.Style";
import { LoginAction } from "../../../services/auth/AuthService";
import { useState } from "react";

const logo = require("../../../assets/logo/logo-large.png");
const image = require("../../../assets/img/dummy600400.jpg");

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await LoginAction(email, password);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <ImageDiv>
        <Image src={image}></Image>
      </ImageDiv>
      <LoginDiv>
        <LoginTitle>Welcome Back! 🐱🐶</LoginTitle>
        <LoginTitleDescription>
          Sign In to begin your journey to finding the perfect pet who's just
          waiting to meet you.
        </LoginTitleDescription>
        <LoginForm>
          <div>
            <FormTitle>Email</FormTitle>
            <Input
              type="text"
              placeholder="Type your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <FormTitle>Password</FormTitle>
            <Input
              type="password"
              placeholder="Type your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p>{error}</p>}
          <ComponentButton type="submit" text="Sign In" onClick={handleLogin} />
        </LoginForm>
        <LoginTitleDescription>
          Don't have an account? <Hyperlink href="/register">Sign Up</Hyperlink>
        </LoginTitleDescription>
      </LoginDiv>
    </Container>
  );
}
