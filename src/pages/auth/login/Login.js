import ComponentButton from "../../../components/form/button/Button";
import Input from "../../../components/form/input/Input";
import { LoginForm, Container, LoginDiv, FormTitle, LoginTitle, LoginTitleDescription, ImageDiv, Image } from "./Login.Style";

const logo = require("../../../assets/logo/logo-large.png");
const image = require("../../../assets/img/dummy600400.jpg");

export default function Login() {
    return(
        <Container>
            <ImageDiv>
                <Image src={image}></Image>
            </ImageDiv>
            <LoginDiv>
                <LoginTitle>Welcome Back!</LoginTitle>
                <LoginTitleDescription>Sign In to begin your journey to finding the perfect pet who's just waiting to meet you.</LoginTitleDescription>    
                <LoginForm >
                    <div>
                        <FormTitle>Email</FormTitle>
                        <Input type="text" placeholder="Type your email" />
                    </div>
                    <div>
                        <FormTitle>Password</FormTitle>
                        <Input type="password" placeholder="Type your password" />
                    </div>
                    <ComponentButton type="submit" text="Login"/>
                </LoginForm>
            </LoginDiv>
        </Container>
    );
}