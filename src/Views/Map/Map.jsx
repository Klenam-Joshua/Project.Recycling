import {
  NavItem,
  Nav,
  NavLink,
  TabContent,
  TabPane,
  Card,
  CardText,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import Location from "./Locations/Map";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import { useState } from "react";

export default function Map() {
  const [activeTab, setActiveTab] = useState(1);
  // <TopBanner

  const handleSetActiveTab = (key) => {
    setActiveTab(key);
  };
  return (
    <div className="px-2">
      <TopBanner
        title="Recycling Games"
        description="Select recycling game to play"
      />
      <div className="mt-3">
        <Nav className="" tabs>
          <NavItem active={activeTab === 1}>
            <NavLink
              className="active"
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Map
            </NavLink>
          </NavItem>
          <NavItem active={activeTab === 2}>
            <NavLink
              className=""
              onClick={() => {
                setActiveTab(2);
              }}
            >
              More Tabs
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="mt-2" activeTab={activeTab}>
          <TabPane tabId={1}>
            <div>
              <Location />
            </div>
          </TabPane>
          <TabPane tabId={2}>
            {/* <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>
                    With supporting text below as a natural lead-in to
                    additional content.
                  </CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row> */}
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
}
