import { Link } from "react-router-dom";
import ComponentButton from "../../../components/form/button/Button";
import Input from "../../../components/form/input/Input";
import { LoginForm, Container, LogoImg } from "./Login.Style";

const logo = require("../../../assets/logo/logo-large.png");

export default function Login() {
    return(
        <Container>
            <Link to={"/"}><LogoImg src={logo} /></Link>
            <LoginForm >
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <ComponentButton type="submit" text="Login"></ComponentButton>
            </LoginForm>

        </Container>
    );
}