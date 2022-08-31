import React from "react";
import styles from "./forgotpassword.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from "@mui/material/Box";
import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email must be a valid email")
      .required("Email is required!")
      .trim(),
  })
  .required();

export default function ForgotPassword() {
  const [t, i18n] = useTranslation("common");

  const lgn = localStorage.getItem("LANGUAGE");

  const [language, setLanguage] = React.useState(lgn);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/");
    console.log(data);
  };
  const [checkTos, setCheckTos] = React.useState(true);

  const handleCheckTos = (event) => {
    setCheckTos(!event.target.checked);
  };

  const handleChangeLanguage = (event) => {
    setLanguage(event.target.value);
    i18n.changeLanguage(event.target.value);
    localStorage.setItem("LANGUAGE", event.target.value);
    document.title = t("common:app_name");
  };
  return (
    <Box>
      <div className={styles.login}>
        <div className={styles.bg_img__div}>
          <div className={styles.bg_img}></div>
        </div>
        <div className={styles.form}>
          <Typography variant="h3">{t("common:forgot_password")}</Typography>
          <Box sx={{ p: 2, pt: 5, pb: 5 }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className={styles.from_login}
            >
              <Stack spacing={4}>
                <TextField
                  {...register("username")}
                  error={errors.username ? true : false}
                  id="username"
                  label={t("common:login.email_placeholder")}
                  fullWidth
                  helperText={errors.username?.message}
                  required
                />
              </Stack>
              <div className={styles.footer_form}>
                <div className={styles.link}>
                  <Checkbox onChange={handleCheckTos} defaultChecked={false} />{" "}
                  <label>
                    I agree all statements in{" "}
                    <a href="/terms_of_service">Terms of service</a>
                  </label>
                </div>
                <Button type="submit" variant="contained" disabled={checkTos}>
                  Submit
                </Button>
                <Typography variant="body2">
                  Don't have an account? <a href="/register">Sign up</a>
                </Typography>
              </div>
            </form>
          </Box>
        </div>
        <div className={styles.language}>
          <select value={language} onChange={handleChangeLanguage}>
            <option value="vi">{t("common:language.vi")}</option>
            <option value="en">{t("common:language.en")}</option>
          </select>
        </div>
      </div>
    </Box>
  );
}
