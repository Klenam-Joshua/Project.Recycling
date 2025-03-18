// import { Pie, PieChart } from "recharts";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

// Generic data
import { games } from "@/utils/genericData";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// icons
import { RiProgress8Fill } from "react-icons/ri";

export default function GameProgress() {
  const data = [{ value: 35 }]; // 75% progress

  return (
    <div className="mt-3 ">
      <Row>
        {games?.map((game, indx) => {
          return (
            <Col key={indx} md="4" lg="4" sm="12">
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
                      <div
                        style={{ height: 100, width: 100 }}
                        id={`game__${indx}`}
                      >
                        <CircularProgressbar
                          text={`${game.items?.progress}%`}
                          value={game.items?.progress}
                          styles={buildStyles({
                            pathColor: game.color,
                          })}
                        />
                      </div>
                      <UncontrolledTooltip
                        placement="right"
                        target={`game__${indx}`}
                      >
                        {`progress: ${game.items?.progress}%`}
                      </UncontrolledTooltip>
                    </Col>
                    {/* <Col md={5} lg={5}>
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
                    </Col> */}
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
