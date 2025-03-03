import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import Image1 from "../../assets/images/game1.webp";
import Image2 from "../../assets/images/game2.webp";
import Image3 from "../../assets/images/game3.webp";

// styles
import "./style.css";

const games = [
  {
    name: "Rubbish Sorting",
    image: Image1,
  },
  {
    name: "Rubbish Sorting",
    image: Image2,
  },
  {
    name: "Rubbish Sorting",
    image: Image3,
  },
];
export default function Games() {
  return (
    <div>
      <TopBanner
        title="Recycling Games"
        description="Play fun recycling games"
      />

      <div className="mt-3">
        <Row className="mx-0">
          {games?.map((game, indx) => {
            return (
              <Col key={indx} md="3" lg="3">
                <GameCard title={game.name} image={game.image} />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

const GameCard = ({ image, title }) => {
  return (
    <Card className="game__card">
      <CardBody>
        <CardImg src={image}></CardImg>
      </CardBody>
      <div className="pl-2">
        <CardTitle className="text-white pl-2">{title}</CardTitle>
      </div>
    </Card>
  );
};
