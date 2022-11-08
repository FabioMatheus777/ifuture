import React, { useState } from "react";
import { AvatarStyled, DivPassword, Form, IconStyled, InputMaterial, Main, StyledButton } from "./styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, IconButton } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { goToFeed, goToSingup } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [checkErrEmail, setCheckErrEmail] = useState(false);
  const [checkErrPass, setCheckErrPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const navigate = useNavigate();

  const onSubmitLogin = (e) => {
    e.preventDefault();

    const userLogin = {
      email,
      password,
    };

    loginApi(userLogin);
  };

  const loginApi = async (body) => {
    await axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        setEmail("");
        setPassword("");
        setErrPassword("");
        setErrEmail("");
        setCheckErrEmail(false);
        setCheckErrPass(false);
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
        alert(`bem vindo(a) ${res.data.user.name}`);
      })
      .catch((err) => {
        if (err.response.data.message.includes("Senha incorreta")) {
          setErrPassword(err.response.data.message);
          setCheckErrEmail(true);
        } else {
          setErrEmail(err.response.data.message);
          setCheckErrPass(true);
        }
      });
  };

  return (
    <>
      <Header title={"Entrar"} />
      <Main>
      <IconStyled/>
        <Form onSubmit={onSubmitLogin}>
          <InputMaterial
            error={checkErrEmail}
            helperText={checkErrEmail ? errEmail : ""}
            id="outlined-basic"
            type={"email"}
            label="email"
            variant="outlined"
            placeholder={"email@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <DivPassword>
            <InputMaterial
              error={checkErrPass}
              helperText={checkErrPass ? errPassword : ""}
              id="outlined-basic"
              type={showPass ? "password" : "text"}
              label="senha"
              variant="outlined"
              placeholder={"minimo 6 caracteres"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              inputProps={{
                minLength: 6,
                title: "A senha deve conter no minimo 6 caracteres",
              }}
              required
            />
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPass ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </DivPassword>
          <StyledButton type="submit">Entrar</StyledButton>
        </Form>
        <Button onClick={() => goToSingup(navigate)}>
          Não possui cadastro? clique aqui.
        </Button>
      </Main>
    </>
  );
};
