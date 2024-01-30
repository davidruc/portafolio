import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Box } from "@mui/material";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { TitleConfig } from "../../../components/title/titleConfiguration";

import "./contact.css";

function ContactSection() {
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
      alert("Por favor, completa todos los campos antes de enviar el formulario.");
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
      <TitleConfig title={"Get In Touch"} />
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
          <h4>Let's talk about your projects!</h4>
          <p>
            Don't like forms? Send me a <a href="">WhatsApp</a>
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
              <input type="text" placeholder="Your name" name="user_name" />
              <input type="text" placeholder="Email address" name="user_email" />
            </Box>
            <input className="subject" type="text" placeholder="Subject" />
            <textarea
              className="message"
              type="text"
              placeholder="Message"
              name="message"
            />

            <Box sx={{ width: "210px" }}>
              <input className="submitButton" type="submit" value="Send email" />
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
                Close
              </Button>
            }
          >
            Tu correo se ha enviado correctamente
          </Alert>
        </Stack>
      )}
    </Box>
  );
}

export { ContactSection };
