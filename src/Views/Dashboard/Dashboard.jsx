import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import GameProgress from "./GameProgress/GameProgress";

export default function Dashboard() {
  return (
    <div>
      <TopBanner title={"Dashboard"} description={"Analytics"} />
      <div id="stat">
        <GameProgress />
      </div>
      <section id="leaderboard" className="mt-3">
        <Row>
          <Col md="9" lg="9" sm="12">
            <Card>
              <CardHeader>Leaderboard</CardHeader>
              <CardBody>hi</CardBody>
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
}
