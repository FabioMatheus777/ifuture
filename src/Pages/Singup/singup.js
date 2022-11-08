import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { IconButton } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { DivPassword, Form, IconStyled, InputMaterial, Main, StyledButton } from "./styled";
import { useNavigate } from "react-router-dom";
import { goToSingupAddress } from "../../Routes/coordinator";
import { Header } from "../../Components/Header/Header";

export const Singup = () => {
  const [showPass, setShowPass] = useState(false);
  const [showCheckPass, setShowCheckPass] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [checkErrPass, setCheckErrPass] = useState(false);

  const handleClickShowPassword = () => {
    setShowPass(!showPass);
  };

  const handleClickShowCheckPassword = () => {
    setShowCheckPass(!showCheckPass);
  };

  const navigate = useNavigate();

  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const singUpPerson = async () => {
    await axios
      .post(`${BASE_URL}/signup`, form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToSingupAddress(navigate);
      })
      .catch((err) => {
        alert(err.response.data.message);
        clean();
        setConfirmPassword("");
      });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    if (form.password !== confirmPassword) {
      setCheckErrPass(true);
    } else {
      setCheckErrPass(false);
      console.log(form);
      singUpPerson();
    }
  };

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <Main>

      <Header title={"cadastro"} back={true} />
      
      <IconStyled/>
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          label={"Nome"}
          name="name"
          type={"text"}
          placeholder={"Digite seu nome"}
          variant="outlined"
          value={form.name}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"email"}
          name="email"
          type={"email"}
          placeholder={"Digite seu email"}
          variant="outlined"
          value={form.email}
          onChange={onChange}
        />
        <InputMaterial
          id="outlined-basic"
          label={"cpf"}
          name="cpf"
          type={"text"}
          placeholder={"Digite seu CPF"}
          variant="outlined"
          value={cpfMask(form.cpf)}
          onChange={onChange}
        />
        <DivPassword>
          <InputMaterial
            id="outlined-basic"
            type={showPass ? "password" : "text"}
            name="password"
            label="senha"
            variant="outlined"
            placeholder={"minimo 6 caracteres"}
            value={form.password}
            onChange={onChange}
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
        <DivPassword>
          <InputMaterial
            error={checkErrPass}
            helperText={checkErrPass ? "Deve ser a mesma que a anterior" : ""}
            id="outlined-adornment-password"
            type={showCheckPass ? "text" : "password"}
            name="password"
            label="confirmar senha"
            variant="outlined"
            placeholder={"minimo 6 caracteres"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            inputProps={{
              minLength: 6,
              title: "A senha deve conter no minimo 6 caracteres",
            }}
            required
          />
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowCheckPassword}
            edge="end"
          >
            {showCheckPass ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </DivPassword>
        <StyledButton type="submit">Criar</StyledButton>
      </Form>
    </Main>
  );
};
