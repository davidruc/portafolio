import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";

import { TitleConfig } from "../../../components/title/titleConfiguration";

import "./contact.css";

function ContactSection() {
  const {t} = useTranslation();
 
  const form = useRef();
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validar que no haya campos vacíos
    const inputs = form.current.querySelectorAll("input, textarea");
    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      alert(t("alertAllFiles"));
      return;
    }

    emailjs
      .sendForm("service_hrz1l52", "template_6dbu5ld", form.current, "XmxNl2xbCQjjNgeae")
      .then(
        (result) => {
          setShowSuccessAlert(true);
          handleReset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleReset = () => {
    form.current.reset();
  };

  const handleCloseSuccessAlert = () => {
    setShowSuccessAlert(false);
  };

  return (
    <Box>
      <TitleConfig title={t("GetInTouch")} />
      <Box
        className="InTouch"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 0, md: 5 },
          marginBottom: { xs: 12, md: 8, lg: 6 },
        }}
      >
        <Box sx={{ marginLeft: { xs: 2 } }}>
          <h4>{t("letsTalk")}</h4>
          <p>
            {t("NoForms")}<a href="https://w.app/jPLhUY" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
        </Box>

        <form ref={form} onSubmit={sendEmail}>
          <Box
            className="inputs"
            sx={{ display: "flex", flexDirection: "column", gap: 2, padding: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <input type="text" placeholder={t("YourName")} name="user_name" />
              <input type="text" placeholder={t("YourEmail")} name="user_email" />
            </Box>
            <input className="subject" type="text" placeholder={t("subject")} name="subject"/>
            <textarea
              className="message"
              type="text"
              placeholder={t("message")}
              name="message"
            />

            <Box sx={{ width: { xs: "210px",sm: "50vh"} }}>
              <input className="submitButton" type="submit" value={t("Sendemail")} />
            </Box>
          </Box>
        </form>
      </Box>

      {showSuccessAlert && (
        <Stack spacing={2} sx={{ position: "fixed", bottom: 0, right: 0, padding: 2 }}>
          <Alert
            severity="success"
            action={
              <Button color="inherit" size="small" onClick={handleCloseSuccessAlert}>
                X
              </Button>
            }
          >
            {t("alertEmailSend")}
            
          </Alert>
        </Stack>
      )}
    </Box>
  );
}

export { ContactSection };
