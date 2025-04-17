import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import LeaderboardTable from "./LeaderboardTable/LeaderboardTable";
import { useEffect, useState } from "react";
export default function Leaderboard({ items }) {
  console.log({ items });
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    setLeaderboard(() => {
      return items?.sort((a, b) => a.rank - b.rank);
    });
  }, [items]);
  return (
    <div>
      <Row>
        <Col md="12" lg="12" sm="12">
          <Card>
            <CardHeader>Leaderboard</CardHeader>
            <CardBody>
              <LeaderboardTable items={leaderboard} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
