import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

export default function UserBadges() {
  return (
    <div>
      <Row>
        <Col md="12" lg="12" sm="12">
          <Card
            style={{
              minHeight: "67dvh",
            }}
          >
            <CardHeader>Badges</CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
