import React from "react";
import { Formik } from "formik";
import { useRouter } from "next/router";
import Image from "next/image";

import { Input } from "@/components";

import logoImage from "@/assets/icons/logoPurple.svg";
import banksImage from "@/assets/images/animationBanks.svg";

import { validationSchema } from "./validationSchema";
import { useLogin } from "./useLogin";

import * as S from "./styles";

export const Login = () => {
  const { push } = useRouter();
  const { onSubmit, loginSchema } = useLogin();
  const { email, password } = loginSchema;

  const isAvailableToRegister = false;

  return (
    <S.Body>
      <S.Left>
        <Image
          src={banksImage}
          width={390}
          height={425}
          alt="bancos animação"
        />
        <S.Describe>
          Somos uma plataforma que consegue trazer os dados dos seus bancos e
          entregar uma forma com que você consiga gerenciar melhor essas
          informações.
        </S.Describe>
      </S.Left>
      <S.Right>
        <S.LogoContainer>
          <Image src={logoImage} width={130} height={130} alt="logo balance" />
        </S.LogoContainer>

        <Formik
          initialValues={{
            [email.name]: "",
            [password.name]: "",
          }}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnMount
        >
          {({ isSubmitting, setFieldValue, values, isValid, handleSubmit }) => (
            <S.BoxLogin>
              <Input
                value={values[email.name]}
                onChange={(e) => setFieldValue(email.name, e.target.value)}
                label={email.label}
                placeholder={email.placeHolder}
              />
              <Input
                value={values[password.name]}
                onChange={(e) => setFieldValue(password.name, e.target.value)}
                label={password.label}
                placeholder={password.placeHolder}
                type="password"
              />
              <S.ForgotPassword>
                Esqueceu sua senha?
                <S.ChangePassword isDisabled>Redefinir.</S.ChangePassword>
              </S.ForgotPassword>
              <S.ButtonWrapper>
                <S.LoginButton
                  disable={isSubmitting || !isValid}
                  loading={isSubmitting}
                  type="submit"
                  size="medium"
                  onClick={handleSubmit}
                >
                  Entrar
                </S.LoginButton>
              </S.ButtonWrapper>
            </S.BoxLogin>
          )}
        </Formik>

        <S.DontRegister>
          Ainda não tem cadastro?
          <S.Register
            isDisabled={!isAvailableToRegister}
            onClick={() => isAvailableToRegister && push("/register")}
          >
            Cadastrar-se.
          </S.Register>
        </S.DontRegister>
      </S.Right>
    </S.Body>
  );
};
