import {
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";

import { Image3, GamePad, DragAndDrop, Epuzzle, TimeTravel } from "./Images";

// styles
import "./style.css";
import { useNavigate } from "react-router-dom";

const games = [
  {
    name: "Rubbish Sorting",
    image: DragAndDrop,
    id: 1,
  },
  {
    name: "E-waste Puzzle",
    image: Epuzzle,
    id: 2,
  },
  {
    name: "Rubbish Sorting",
    image: TimeTravel,
    id: 3,
  },
];
export default function Games() {
  const navigate = useNavigate();

  const handleNavigate = (url) => {
    navigate(url);
  };
  return (
    <div>
      <TopBanner
        title="Recycling Games"
        description="Select recycling game to play"
      />

      <div className="mt-3">
        <Row className="mx-0">
          {games?.map((game, indx) => {
            return (
              <Col
                onClick={() => {
                  navigate(`/games/${game?.id}`);
                }}
                key={indx}
                md="3"
                lg="3"
              >
                <GameCard title={game.name} image={game.image} id={indx} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

const GameCard = ({ image, title, id: indx }) => {
  return (
    <div id={`card__${indx}`}>
      <Card className="game__card">
        <CardBody>
          <CardImg src={image}></CardImg>
        </CardBody>
        <div className="pl-2"></div>
        <CardFooter className="border-0">
          <div className="d-flex  justify-content-between">
            <CardTitle className="text-white pl-2">
              <h6
                className="pl-3"
                style={{
                  paddingLeft: "1rem",
                }}
              >
                {title}
              </h6>
            </CardTitle>
            <div>
              <span>
                <img src={GamePad} />
              </span>
            </div>
          </div>
        </CardFooter>
        <UncontrolledTooltip placement="right" target={`card__${indx}`}>
          {`${title}`}
        </UncontrolledTooltip>
      </Card>
    </div>
  );
};
