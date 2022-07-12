// ...other imports

import TextField from "@mui/joy/TextField";
import "../Login/LoginForm.css";

function LoginForm() {
  return (
    <div className="txtspace">
      <TextField
        // html input attribute
        name="email"
        type="email"
        placeholder="johndoe@email.com"
        // pass down to FormLabel as children
        label="Email"
      />
      <TextField
        name="password"
        type="password"
        placeholder="password"
        label="Password"
      />
    </div>
  );
}
export default LoginForm;
//https://mui.com/joy-ui/getting-started/tutorial/#building-the-login-page
