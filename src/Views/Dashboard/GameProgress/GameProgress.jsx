import { Pie, PieChart } from "recharts";

// Generic data
import { games } from "../../../../public/utils/genericData";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

// icons
import { RiProgress8Fill } from "react-icons/ri";

export default function GameProgress() {
  const data = [{ value: 35 }]; // 75% progress

  return (
    <div className="mt-3  px-3">
      <Row>
        {games?.map((game, indx) => {
          return (
            <Col key={indx} md="3" lg="3" sm="10">
              <Card>
                <CardHeader className="my-0 py-1">
                  <CardTitle className="my-0">
                    <h6
                      style={{
                        fontWeight: "400",
                      }}
                    >
                      {game.name}
                    </h6>
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <Row>
                    <Col md={7} lg={7}>
                      <PieChart width={100} height={100}>
                        <Pie
                          data={data}
                          cx="50%"
                          cy="50%"
                          innerRadius={30}
                          outerRadius={40}
                          startAngle={90}
                          endAngle={-270}
                          fill={game.color}
                          dataKey="value"
                        />
                      </PieChart>
                    </Col>
                    <Col md={5} lg={5}>
                      <ul>
                        <li className="d-flex align-items-center justify-content-between">
                          <span>
                            <RiProgress8Fill />
                          </span>
                          <span>{game?.items?.progress}</span>
                        </li>{" "}
                        <li className="d-flex align-items-center justify-content-between">
                          {game?.items?.pointsEarned}
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
