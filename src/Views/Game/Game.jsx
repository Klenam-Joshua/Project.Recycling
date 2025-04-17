// Hooks
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//components
import { Card } from "reactstrap";
import TopBanner from "../../Layout/TopBanner/TopBanner";
// import { games } from "../../utils/genericData";
import SortingImg from "../../assets/images/recyclingGameBackground.jpeg";
import GameLevel from "./GameLevel/GameLevel";

// styles
import "./Game.css";

// images
import Dots from "../../assets/images/dots-black.png";
import Cursor from "../../assets/images/cursor2.png";

// Audios

import LevelClickAudio from "../../assets/audios/LevelClick2.wav";
import useFetch from "../../hooks/useFetch";

// Endpoints

import { GET_GAME_LEVELS } from "../../Endpoints/GameEndpoints";

export default function Game() {
  const param = useParams();
  const [activeGame, setActiveGame] = useState({});
  const [canPlayAudio, setCanPlayAudio] = useState(true);

  const [activeGameLevel, setActiveGameLevel] = useState({
    hasLaunchedLevel: false,
    level: null,
    gameCode: null,
    gameId: "",
  });

  const [audioInstance, setAudioInstance] = useState(null);

  // useEffect(() => {
  //   // console.log({ param });
  //   const _activeGame = games.find((game) => game.id == param.id);
  //   console.log({ level: _activeGame?.levels });
  //   setActiveGame(_activeGame);
  // }, []);

  //

  const { isLoading, error, data, refetch } = useFetch(
    GET_GAME_LEVELS(param?.id),
    [param.id],
    true,
    (resp) => {
      console.log({ resp });
      setActiveGame({
        ...resp,
        levels: resp.items,
      });
    }
  );

  console.log({ activeGame });

  const playAudio = () => {
    if (audioInstance) {
      console.log("there is an instance");
      audioInstance.play();
    } else {
      const audio = new Audio();
      console.log({ activeGame }, "there was no instance");
      audio.src = activeGame.bgAudio;
      audio.volume = 0.4;
      audio.load();
      // audio.loop = true;
      if (audio.HAVE_ENOUGH_DATA) {
        audio.play();
      }

      setAudioInstance(audio);
    }
  };

  const pauseAudio = () => {
    if (audioInstance) {
      //     // audio.loop = true;
      try {
        audioInstance.pause();
        console.log({ audioInstance });
      } catch (error) {
        console.log({ error });
      }
    }
  };
  useEffect(() => {
    // console.log(activeGame);
    // if (canPlayAudio) {
    //   if (audioInstance) {
    //     audioInstance.play();
    //   } else {
    //     const audio = new Audio();
    //     console.log(activeGame);
    //     audio.src = activeGame.bgAudio;
    //     audio.volume = 0.4;
    //     audio.load();
    //     if (audio.HAVE_ENOUGH_DATA) {
    //       audio.play();
    //     }

    //     setAudioInstance(audio);
    //   }
    //   return;
    // }

    // if (audioInstance) {
    //   try {
    //     audioInstance.pause();
    //   } catch (error) {
    //     console.log({ error });
    //   }
    // }e

    if (canPlayAudio) {
      playAudio();
    } else {
      pauseAudio();
    }

    return () => {
      // if (isUnmounted) {
      pauseAudio();
      // setAudioInstance(null);
      // }
      // setAudioInstance(null);
      // set
    };

    // if
  }, [canPlayAudio, activeGame]);

  useEffect(() => {
    // isUnmounted = false;
    return () => {
      // isUnmounted = true;
    };
  }, []);

  // Get Game levels as array

  const getLevels = (levelsCount) => {
    // new Array(
    console.log({ levelsCount });
    // Array.from()
    const arr = new Array(levelsCount).fill(0);
    console.log(arr);
    console.log({ arr: arr.length });
    return arr;
  };

  //  play sound on level click

  const handlePlayAudio = (audioFile, volume = 4) => {
    const audio = new Audio();
    console.log({ activeGame }, "there was no instance");
    audio.src = audioFile;
    audio.volume = volume;
    audio.load();
    // audio.loop = true;
    if (audio.HAVE_ENOUGH_DATA) {
      audio.play();
    }
  };

  const playLevelSound = (gameCode, level, leveId) => {
    console.log({ gameCode, level, something: null });
    localStorage.setItem("levelId", leveId);
    handlePlayAudio(LevelClickAudio, 1);
    setActiveGameLevel({
      hasLaunchedLevel: true,
      levelCode: level,
      gameCode,
      leveId,
      gameId: param?.id,
    });
  };

  console.log({ activeGameLevel });

  const prevIsCompleted = (prevGame) => {
    if (!prevGame) {
      return true;
    }

    return prevGame?.progress?.isCompleted;
  };

  console.log({ activeGameLevel });
  return (
    <div>
      <TopBanner
        title={`${activeGame?.gameName}`}
        description={
          !activeGameLevel.hasLaunchedLevel
            ? ""
            : `${activeGameLevel?.levelCode}`
        }
      />
      <div className="px-3  mt-2">
        <div
          className="game_background"
          id="game_wrapper_main"
          style={{
            width: "100%",
            height: "80vh",

            background: `url(${SortingImg})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
          }}
        >
          <div className="d-flex justify-content-end">
            <span onClick={() => setCanPlayAudio((prev) => !prev)}>Play</span>
          </div>
          {activeGameLevel.hasLaunchedLevel ? (
            <>
              <GameLevel
                refetch={refetch}
                setActiveGameLevel={setActiveGameLevel}
                activeGameLevel={activeGameLevel}
                // game={activeGameLevel}
                {...{
                  gameCode: activeGameLevel.gameCode,
                  level: activeGameLevel.levelCode,
                }}
              />
            </>
          ) : null}
          {activeGame?.levels && !activeGameLevel.hasLaunchedLevel ? (
            <>
              <div id="levels_wrapper">
                <div className="level_title_wrapper d-flex justify-content-center">
                  <div className="rounded">Select a Level</div>
                </div>
                <div>
                  <div id="levels">
                    {activeGame?.levels?.map(
                      // eslint-disable-next-line no-unused-vars
                      (level, indx) => {
                        console.log({ level });

                        return (
                          <Card
                            className={`${
                              level?.progress?.isCompleted
                                ? "bg-warning"
                                : prevIsCompleted(activeGame?.levels[indx - 1])
                                ? "bg-success"
                                : "bg-secondary"
                            }`}
                            onClick={() => {
                              if (activeGame?.levels[indx - 1]) {
                                const prevLevel = activeGame?.levels[indx - 1];
                                if (!prevLevel?.progress?.isCompleted) {
                                  return;
                                }
                              }
                              playLevelSound(
                                activeGame?.gameCode,
                                level?.levelCode,
                                level._id
                              );
                            }}
                            tabIndex={indx}
                            style={{
                              cursor: `url(${Cursor}) , default`,
                              backgroundImage: `url(${Dots})`,
                            }}
                            key={`level__${indx + 1}`}
                          >
                            {level?.levelName}
                          </Card>
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
