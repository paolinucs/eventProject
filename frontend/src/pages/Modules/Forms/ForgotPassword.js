import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { validCF } from "./reg";
import axios from "axios";
function ForgotPassword() {
  const [cf, setCF] = useState("");
  const [err, setErr] = useState("");
  const validate = async () => {
    if (!validCF.test(cf)) {
      setErr("Fiscal Code not valid, Please try again");
    } else {
      setErr("Fiscal Code valid, an Email will be sent to your Email address!");
      try {
        const apiURL = "http://127.0.0.1:8080/api/mail/retrieve_psw/" + cf;
        const responseCode = await axios.post(apiURL);
        console.log("Request ended with code: ", responseCode.status);
      } catch (error) {
        console.error("Error sending request: ", error);
      }
    }
  };

  return (
    <Box style={{ margin: "4rem auto", width: "50%" }}>
      <form>
        <Stack spacing={3}>
          <Typography variant="h5">Forgot Password</Typography>
          <Typography variant="subtitle">
            Type your Fiscal Code here, then click on the button, we will send
            you your password to your e-mail address.
          </Typography>
          <TextField
            id="fiscalCode"
            label="Fiscal Code"
            required
            onChange={(e) => setCF(e.target.value)}
          ></TextField>
          <Button
            onClick={() => {
              validate();
            }}
          >
            Receive your password by email
          </Button>
          {err}
        </Stack>
      </form>
    </Box>
  );
}

export default ForgotPassword;
