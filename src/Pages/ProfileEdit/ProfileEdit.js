import React, { useEffect, useState } from "react";
import { Form, InputMaterial, Main, StyledButton } from "./styled";
import { Header } from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goToProfile } from "../../Routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedPage";

export const ProfileEdit = () => {
  useProtectedPage();
  const person = useRequestData({}, `${BASE_URL}/profile`);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cpf, setCpf] = useState();

  const navigate = useNavigate();

  const getPerson = async () => {
    await axios
      .get(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setCpf(res.data.user.cpf);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const updateProfile = async () => {
    const body = {
      name,
      email,
      cpf,
    };
    await axios
      .put(`${BASE_URL}/profile`, body, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        goToProfile(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getPerson();
  }, []);

  const cpfMask = (value) => {
    if (person[0].user && cpf) {
      return value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})/, "$1-$2")
        .replace(/(-\d{2})\d+?$/, "$1");
    }
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateProfile();
  };

  return (
    <Main>
      <Header title={"Editar"} back={true} logOut={true} />
      <Form onSubmit={onSubmitForm}>
        <InputMaterial
          id="outlined-basic"
          name="name"
          type={"text"}
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <InputMaterial
          id="outlined-basic"
          name="email"
          type={"email"}
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputMaterial
          id="outlined-basic"
          name="cpf"
          type={"text"}
          variant="outlined"
          value={cpfMask(cpf)}
          onChange={(e) => setCpf(e.target.value)}
        />
        <StyledButton type="submit">Salvar</StyledButton>
      </Form>
    </Main>
  );
};
<Header title={"Meu perfil"} back={true} />;
