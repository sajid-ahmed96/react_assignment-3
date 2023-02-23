import { Button } from "@mui/material";

function SMButton(props) {
  return (
    <Button variant={props.variant} onClick={props.onClick}>{props.label}</Button>
  );
};

export default SMButton;