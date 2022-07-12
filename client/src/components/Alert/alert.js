import Alert from "react-bootstrap/Alert";

export default function ErrorAlert(props) {
  return (
    <div>
      <Alert variant="danger">
        <Alert.Heading>{props.message}</Alert.Heading>
      </Alert>
    </div>
  );
}
