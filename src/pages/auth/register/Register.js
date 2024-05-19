import { useState } from "react";
import ComponentInput from "../../../components/form/input/Input";
import {
  CardWrapper,
  Container,
  FormTitle,
  Hyperlink,
  RegisterForm,
  RegisterSubTitle,
  RegisterTitle,
} from "./Register.style";
import ComponentButton from "../../../components/form/button/Button";
import { RegisterAction } from "../../../services/auth/AuthService";

export default function Register() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    bio: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegister(e) {
    e.preventDefault();
    RegisterAction(form);
  }

  return (
    <Container>
      <CardWrapper>
        <RegisterTitle>Welcome to Gukpus! 🐱🐶</RegisterTitle>
        <RegisterSubTitle>
          Just a need few things to get you going.
        </RegisterSubTitle>
        <RegisterForm>
          <div style={{ gridColumn: "1 / 3" }}>
            <FormTitle>Full Name</FormTitle>
            <ComponentInput
              type="text"
              placeholder="John Doe"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            ></ComponentInput>
          </div>
          <div>
            <FormTitle>Email</FormTitle>
            <ComponentInput
              type="text"
              placeholder="example@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            ></ComponentInput>
          </div>
          <div>
            <FormTitle>Phone Number</FormTitle>
            <ComponentInput
              type="text"
              placeholder="+9999999999"
              value={form.phoneNumber}
              onChange={(e) =>
                setForm({ ...form, phoneNumber: e.target.value })
              }
            ></ComponentInput>
          </div>
          <div style={{ gridColumn: "1 / 3" }}>
            <FormTitle>Bio</FormTitle>
            <ComponentInput
              type="text"
              placeholder="dog lover and cat holic"
              value={form.bio}
              onChange={(e) => setForm({ ...form, bio: e.target.value })}
            ></ComponentInput>
          </div>
          <div style={{ gridColumn: "1 / 3" }}>
            <FormTitle>Address</FormTitle>
            <ComponentInput
              type="text"
              placeholder=""
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            ></ComponentInput>
          </div>
          <div>
            <FormTitle>Password</FormTitle>
            <ComponentInput
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            ></ComponentInput>
          </div>
          <div>
            <FormTitle>Confirm Password</FormTitle>
            <ComponentInput
              type="password"
              value={form.confirmPassword}
              onChange={(e) =>
                setForm({ ...form, confirmPassword: e.target.value })
              }
            ></ComponentInput>
          </div>
          <div style={{ gridColumn: "1 / 3" }}>
            <RegisterSubTitle>
              Already have an account?{" "}
              <Hyperlink href="/login">Sign In</Hyperlink>
            </RegisterSubTitle>
          </div>
        </RegisterForm>
        <ComponentButton
          type="submit"
          text="Sign Up"
          onClick={handleRegister}
        ></ComponentButton>
      </CardWrapper>
    </Container>
  );
}
