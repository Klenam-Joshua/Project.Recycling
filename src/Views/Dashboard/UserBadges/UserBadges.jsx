import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  UncontrolledTooltip,
} from "reactstrap";
import BestPlayerBadge from "../../../assets/images/goldMedalBadge.jpg";

export default function UserBadges({ medals }) {
  console.log({ medals });
  return (
    <div>
      <Row>
        <Col md="12" lg="12" sm="12">
          <Card
            style={{
              minHeight: "67dvh",
            }}
          >
            <CardHeader>Badges (1)</CardHeader>
            <CardBody>
              {medals?.items?.map((medal, indx) => {
                return (
                  <Row key={indx}>
                    <Col id="best_player">
                      <img
                        src={BestPlayerBadge}
                        style={{
                          width: "8rem",
                          height: "8rem",
                        }}
                      />
                      <UncontrolledTooltip
                        placement="right"
                        target={`best_player`}
                      >
                        {medal?.medalName}
                      </UncontrolledTooltip>
                    </Col>
                  </Row>
                );
              })}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
