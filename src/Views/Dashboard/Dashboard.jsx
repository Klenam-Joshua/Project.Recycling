import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import GameProgress from "./GameProgress/GameProgress";
import Leaderboard from "./Leaderboard/Leaderboard";
import UserBadges from "./UserBadges/UserBadges";
import useFetch from "../../hooks/useFetch";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { data: gameProgress, isLoading } = useFetch("progressAnalytics", [
    `${auth?._id}_analytics`,
  ]);
  const { data: leaderboard, isLoading: loadingLeaderboad } = useFetch(
    "leaderboard",
    [`${auth?._id}_leaderboard`]
  );

  const { data: medals, isLoading: loadingMedals } = useFetch("medals", [
    `${auth?._id}_medals`,
  ]);

  console.log({ gameProgress });

  return (
    <div>
      <TopBanner title={"Dashboard"} description={"Analytics"} />
      <div className="px-3">
        <Row>
          <Col md="12">
            <Row>
              <Col md="9" lg="9" sm="12">
                <div id="stat">
                  {isLoading ? (
                    <p>Loading progress...</p>
                  ) : (
                    <GameProgress progress={gameProgress?.items} />
                  )}
                </div>
                <section id="leaderboard" className="mt-3">
                  {loadingLeaderboad ? (
                    <p>Loading leaderboard</p>
                  ) : (
                    <Leaderboard items={leaderboard?.items} />
                  )}

                  <div className="d-flex ">
                    <Card
                      style={{
                        width: "15rem",
                      }}
                    >
                      <CardHeader></CardHeader>
                      <CardBody
                      // onClick={() => {
                      //   navigate("/games");
                      // }}
                      >
                        <Link to={"/education"}>Continue Learning</Link>
                      </CardBody>
                    </Card>
                    <Card
                      style={{
                        width: "15rem",
                      }}
                    >
                      <CardHeader></CardHeader>
                      <CardBody
                      // onClick={() => {
                      //   navigate("/");
                      // }}
                      >
                        <Link to={"/games"}> Play game</Link>
                      </CardBody>
                    </Card>
                  </div>
                </section>
              </Col>
              <Col md="3" lg="3" sm="12">
                <div className="mt-3">
                  <UserBadges medals={medals} />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
