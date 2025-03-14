import TopBanner from "../../Layout/TopBanner/TopBanner";
import GameProgress from "./GameProgress/GameProgress";

export default function Dashboard() {
  return (
    <div>
      <TopBanner title={"Dashboard"} description={"Analytics"} />
      <div id="stat">
        <GameProgress />
      </div>
    </div>
  );
}
