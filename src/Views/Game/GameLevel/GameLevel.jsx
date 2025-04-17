import { AllGameLevels } from "./LevelIndex";

//styles

// import { Leve1, Level2, Level3 } from "./SortingGame/Levels/Index";

export default function GameLevel({
  refetch,
  gameCode,
  level,
  setActiveGameLevel,
  activeGameLevel,
}) {
  console.log({ gameCode, level });
  return (
    <div>
      {" "}
      <RenderLevel
        refetch={refetch}
        activeGameLevel={activeGameLevel}
        gameCode={gameCode}
        level={level}
        setActiveGameLevel={setActiveGameLevel}
      />{" "}
    </div>
  );
}

const RenderLevel = ({
  refetch,
  gameCode,
  level,
  setActiveGameLevel,
  activeGameLevel,
}) => {
  console.log({ AllGameLevels, gameCode });
  const activeGame = AllGameLevels.find((game) => game.gameCode == gameCode);
  const levelIndx = level?.split("_")[1];
  console.log({ AllGameLevels });
  console.log({ activeGame, gameCode, level, else: levelIndx });
  // return <p></p>;
  const LevelComponent = activeGame?.levels?.[levelIndx] || NoLevelComp;
  console.log({ LEVEL: activeGame });
  return (
    <LevelComponent
      refetch={refetch}
      setActiveGameLevel={setActiveGameLevel}
      activeGameLevel={activeGameLevel}
    />
  );
};

const NoLevelComp = () => <p>Coming soon</p>;
