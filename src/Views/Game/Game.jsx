import { useParams } from "react-router-dom";
import TopBanner from "../../Layout/TopBanner/TopBanner";
import { games } from "../../utils/genericData";
import "./Game.css";
import { useEffect, useState } from "react";
import { Card } from "reactstrap";

//
import Dots from "../../assets/images/dots-black.png";
import Cursor from "../../assets/images/cursor2.png";

// Audios

import LevelClickAudio from "../../assets/audios/LevelClick2.wav";

export default function Game() {
  const param = useParams();
  const [activeGame, setActiveGame] = useState({});
  const [canPlayAudio, setCanPlayAudio] = useState(true);
  const [audioInstance, setAudioInstance] = useState(null);

  useEffect(() => {
    // console.log({ param });
    const _activeGame = games.find((game) => game.id == param.id);
    console.log({ level: _activeGame?.levels });
    setActiveGame(_activeGame);
  }, []);

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
    //     // audio.loop = true;
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

  const playLevelSound = () => {
    handlePlayAudio(LevelClickAudio, 1);
  };

  return (
    <div>
      <TopBanner title={"Active Game"} description={""} />
      <div className="px-3  mt-2">
        <div
          className="game_background"
          id="game_wrapper_main"
          style={{
            width: "100%",
            height: "80vh",

            background: `url(${activeGame.bgImage})`,
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "center center",
          }}
        >
          <div className="d-flex justify-content-end">
            <span onClick={() => setCanPlayAudio((prev) => !prev)}>Play</span>
          </div>
          {activeGame.levels > 1 ? (
            <>
              <div id="levels_wrapper">
                <div className="level_title_wrapper d-flex justify-content-center">
                  <div className="rounded">Select a Level</div>
                </div>
                <div>
                  <div id="levels">
                    {getLevels(activeGame.levels).map(
                      // eslint-disable-next-line no-unused-vars
                      (_, indx) => {
                        return (
                          <Card
                            onClick={playLevelSound}
                            tabIndex={indx}
                            style={{
                              cursor: `url(${Cursor}) , default`,
                              backgroundImage: `url(${Dots})`,
                            }}
                            key={`level__${indx + 1}`}
                          >
                            Level {indx + 1}
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
