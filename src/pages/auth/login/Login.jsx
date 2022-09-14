import React from "react";
import styles from "./login.module.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Box from "@mui/material/Box";
import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { t } from "i18next";
import authService from "../../../services/auth/authService";

const schema = yup
  .object({
    username: yup.string().required(t("common:login.email_required")).trim(),
    password: yup
      .string()
      .required(t("common:login.password_required"))
      .trim()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^ ]{6,20}$/,
        t("common:login.password_wrong_format")
      ),
  })
  .required();

export default function Login() {
  const [t, i18n] = useTranslation("common");

  const lgn = localStorage.getItem("LANGUAGE");

  const [language, setLanguage] = React.useState(lgn);

  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    authService.login(data).then((res) => {
      console.log(res);
      if (res.status === "success") {
        localStorage.setItem("CURRENT_USER", "Bearer " + res.accessToken);
        navigate("/dashboard", { replace: true });
      } else {
        setError(true);
        let message = "";
        if (res.loginFailCount) {
          message =
            t(`common:ERROR.${res.message}`) +
            " " +
            res.loginFailCount +
            " times";
        } else {
          message = t(`common:ERROR.${res.message}`);
        }
        setMessage(message);
      }
    });
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
          <Typography variant="h3">{t("common:login.login")}</Typography>
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
                <TextField
                  {...register("password")}
                  error={errors.password ? true : false}
                  id="password"
                  label={t("common:login.password_placeholder")}
                  type="password"
                  fullWidth
                  helperText={errors.password?.message}
                  required
                />
              </Stack>
              {error && <span className="error-message">{message}</span>}
              <div className={styles.footer_form}>
                <div className={styles.link}>
                  <div>
                    <Checkbox {...register("remember")} defaultChecked />{" "}
                    <label>{t("common:login.remember_me")}</label>
                  </div>
                  <a href="/forgot-password">
                    {t("common:login.forgot_password")}
                  </a>
                </div>
                <Button type="submit" variant="contained">
                  {t("common:login.login_button")}
                </Button>
                <Typography variant="body2">
                  {t("common:login.dont_have_account")}{" "}
                  <a href="/register">{t("common:login.sign_up")}</a>
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
