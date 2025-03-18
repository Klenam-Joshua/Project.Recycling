import { Col, Row } from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import GameProgress from "./GameProgress/GameProgress";
import Leaderboard from "./Leaderboard/Leaderboard";
import UserBadges from "./UserBadges/UserBadges";

export default function Dashboard() {
  return (
    <div>
      <TopBanner title={"Dashboard"} description={"Analytics"} />
      <Row>
        <Col md="9" lg="9" sm="12">
          <div id="stat">
            <GameProgress />
          </div>
          <section id="leaderboard" className="mt-3">
            <Leaderboard />
          </section>
        </Col>
        <Col md="3" lg="3" sm="12">
          <div className="mt-3">
            <UserBadges />
          </div>
        </Col>
      </Row>
    </div>
  );
}
