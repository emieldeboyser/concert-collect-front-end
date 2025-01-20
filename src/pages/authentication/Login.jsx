import { useTranslation } from "react-i18next";
import Form from "../../components/form/Form";
import LoginForm from "../../components/form/forms/LoginForm";
import Header from "../../layout/header";
import { useEffect, useState } from "react";
import postCall from "../../functions/post/postCall";

const LoginScreen = () => {
  const { t } = useTranslation();
  const [data, setData] = useState({});

  const handleData = (data) => {
    setData(data);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const login = async () => {
    try {
      const response = await postCall("/api/login", data);
      console.log(response);
      sessionStorage.setItem("access_token", response.access_token);
      sessionStorage.setItem("expires_in", response.expires_in);
      sessionStorage.setItem("refresh_token", response.refresh_token);
      window.location.href = "/";
    } catch (error) {
      console.error(error, "Error fetching access token");
    }
  };

  return (
    <div>
      <Header />
      <Form
        form={<LoginForm formData={handleData} />}
        title={t("login")}
        submitButtonText={t("login")}
        handleSubmit={login}
      />
    </div>
  );
};

export default LoginScreen;
