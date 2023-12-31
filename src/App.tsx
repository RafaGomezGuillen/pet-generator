import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import React, { useState, useEffect } from "react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { Network } from "@capacitor/network";

import Menu from "./components/menu/Menu";

/* Pages */
import HomePage from "./pages/home/HomePage";

/* Cat Pages */
import CatImageGenerator from "./pages/cat/image-generator/CatImageGenerator";
import CatGifGenerator from "./pages/cat/gif-generator/CatGifGenerator";
import CatImageTextGenerator from "./pages/cat/image-text-generator/CatImageTextGenerator";
import CatCustomImageGenerator from "./pages/cat/custom-image-generator/CatCustomImageGenerator";

/* Dog Pages */
import DogImageGenerator from "./pages/dog/image-generator/DogImageGenerator";
import DogGifGenerator from "./pages/dog/gif-generator/DogGifGenerator";
import DogVideoGenerator from "./pages/dog/video-generator/DogVideoGenerator";
import DogImageGeneratorByBreed from "./pages/dog/image-generator-by-breed/DogImageGeneratorByBreed";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Theme variables */
import "./theme/variables.css";

setupIonicReact();

const App: React.FC = () => {
  const [networkState, setNetworkState] = useState(true);
  const [networkStateCataas, setNetworkStateCataas] = useState(true);

  const logCurrentNetworkStatus = async () => {
    const status = await Network.getStatus();
    setNetworkState(status.connected);
  };

  logCurrentNetworkStatus();

  useEffect(() => {
    fetch("https://cataas.com/cat")
      .then((response) => {
        if (response) {
          setNetworkStateCataas(true);
        }
      })
      .catch(() => {
        setNetworkStateCataas(false);
      });
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu networkStatusCataas={networkStateCataas} />
          <IonRouterOutlet id="main">
            <Redirect exact path="/" to="/pet-generator" />
            <Route
              path="/pet-generator"
              render={() => (
                <HomePage
                  networkStatus={networkState}
                  networkStatusCataas={networkStateCataas}
                />
              )}
              exact={true}
            />

            {networkStateCataas ? (
              <>
                <Route
                  path="/pet-generator/cat/image-generator"
                  render={() => <CatImageGenerator />}
                  exact={true}
                />
                <Route
                  path="/pet-generator/cat/gif-generator"
                  render={() => <CatGifGenerator />}
                  exact={true}
                />
                <Route
                  path="/pet-generator/cat/image-text-generator"
                  render={() => <CatImageTextGenerator />}
                  exact={true}
                />
                <Route
                  path="/pet-generator/cat/custom-image-generator"
                  render={() => <CatCustomImageGenerator />}
                  exact={true}
                />
              </>
            ) : (
              // Cataas service is down
              <> </>
            )}

            <Route
              path="/pet-generator/dog/image-generator"
              render={() => <DogImageGenerator />}
              exact={true}
            />
            <Route
              path="/pet-generator/dog/gif-generator"
              render={() => <DogGifGenerator />}
              exact={true}
            />
            <Route
              path="/pet-generator/dog/video-generator"
              render={() => <DogVideoGenerator />}
              exact={true}
            />
            <Route
              path="/pet-generator/dog/image-generator-by-breed"
              render={() => <DogImageGeneratorByBreed />}
              exact={true}
            />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;