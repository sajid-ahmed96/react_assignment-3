import Button from '@mui/material/Button';

function QuestionNo(props) {
  return (
    <center>
        <Button onClick={props.onClick} className={props.className} variant={props.variant}>{props.label}</Button>
    </center>
  );
};

export default QuestionNo;