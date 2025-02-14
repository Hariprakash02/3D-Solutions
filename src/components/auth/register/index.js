import React, { useState } from "react";
import { Paper, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  maxWidth: 400,
}));

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    console.log("Register Clicked", email, password, confirmPassword);
    navigate("/dashboard");
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h5" sx={{ mb: 2 }}>Register</Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        type="password"
        variant="outlined"
        fullWidth
        sx={{ mb: 2 }}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          maxWidth: '40%',
          backgroundColor: '#19d272',
          '&:hover': { backgroundColor: '#19d272' }
        }}
        fullWidth
        onClick={handleRegister}
      >
        Register
      </Button>

      <Typography variant="body2" sx={{ mt: 2, cursor: "pointer" }} onClick={handleLogin}>
        Already have an account? Login
      </Typography>
    </StyledPaper>
  );
};

export default Register;
