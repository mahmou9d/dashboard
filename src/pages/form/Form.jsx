import { Alert, Box, Button, MenuItem, Snackbar, TextField } from "@mui/material";
import NamePage from "../../component/NamePage";
import { useState } from "react";
import { useForm } from "react-hook-form";


const currencies = [
  {
    value: "User",
    label: "User",
  },
  {
    value: "Manager",
    label: "Manager",
  },
  {
    value: "Admin",
    label: "Admin",
  },
];
const Form = () => {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = () => console.log("jjjjjjjjjjj");

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "100%" },
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
      noValidate
      autoComplete="off"
    >
      <NamePage title={"FORM"} subTitle={undefined}/>
      <Box sx={{ display: "flex", gap: "20px", width: "100%" }}>
        <TextField
          sx={{ width: "100%" }}
          id="filled-basic"
          label="Frist Name"
          variant="filled"
          required
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This field is required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          sx={{ width: "100%" }}
          id="filled-basic"
          label="Last Name"
          variant="filled"
          required
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This field is required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Box>
      <TextField
        sx={{ width: "100%" }}
        label="Email"
        variant="filled"
        required
        error={Boolean(errors.email)}
        helperText={errors.email ? "This field is required" : null}
        {...register("email", {
          required: true,
          minLength: 20,
          pattern:
            /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        })}
      />
      <TextField
        sx={{ width: "100%" }}
        label="Contacts Number"
        variant="filled"
        type="number"
        required
        error={Boolean(errors.ContactsNumber)}
        helperText={errors.ContactsNumber ? "This field is required" : null}
        {...register("ContactsNumber", { required: true, minLength: 11 })}
      />
      <TextField sx={{ width: "100%" }} label="Address 1" variant="filled" />
      <TextField sx={{ width: "100%" }} label="Address 2" variant="filled" />
      <TextField
        select
        sx={{ width: "100%" }}
        id="filled-basic"
        label="Role"
        variant="filled"
        defaultValue={"User"}
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "left" }}>
        <Button
          type="submit"
          variant="contained"
          onClick={handleClick({ vertical: "top", horizontal: "right" })}
        >
          Create New User
        </Button>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          onClose={handleClose}
          message="Account Created Successfully"
          key={vertical + horizontal}
          autoHideDuration={3000}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%",color:"white"}}
          >
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
