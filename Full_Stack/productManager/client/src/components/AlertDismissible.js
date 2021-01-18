import React from "react";
import { Alert, Button } from "react-bootstrap";

export default function AlertDismissible(props) {
  return (
    <>
      <Alert show={props.show} variant={props.variant}>
        <Alert.Heading>{props.header}</Alert.Heading>
        <p>{props.message}</p>
        {props.showClose ? (
          <div className="d-flex justify-content-end">
            <hr />
            <Button
              onClick={() => props.setShow(false)}
              variant={`outline-${props.variant}`}
            >
              Close
            </Button>
          </div>
        ) : (
          <></>
        )}
      </Alert>
    </>
  );
}
