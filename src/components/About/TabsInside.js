import React from "react";
import Card from "react-bootstrap/Card";
import "./tabs.css";
function TabsInside() {
  return (
    // contact card start
    <div>
      <div className="d-flex ">
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex">
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className="m-2">
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
    // contact card end
  );
}

export default TabsInside;
