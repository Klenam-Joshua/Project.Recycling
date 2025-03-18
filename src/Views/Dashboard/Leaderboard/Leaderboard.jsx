import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import LeaderboardTable from "./LeaderboardTable/LeaderboardTable";
export default function Leaderboard() {
  return (
    <div>
      <Row>
        <Col md="12" lg="12" sm="12">
          <Card>
            <CardHeader>Leaderboard</CardHeader>
            <CardBody>
              <LeaderboardTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
