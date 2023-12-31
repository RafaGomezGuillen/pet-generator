import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./HomePage.css";
import { NavLink } from "react-router-dom";
import { refreshOutline } from "ionicons/icons";

interface ContainerProps {
  networkStatus: boolean;
  networkStatusCataas: boolean;
}

const HomePage: React.FC<ContainerProps> = ({
  networkStatus,
  networkStatusCataas,
}) => {
  const [isConnected, setIsConnected] = useState(networkStatus);

  useEffect(() => {
    setIsConnected(networkStatus);
  }, [networkStatus]);

  const handleReloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen className="home">
          {isConnected ? (
            <>
              {networkStatusCataas ? (
                <>
                  <header>
                    <div className="home-header-content">
                      <h2>Discover the World of Paws: Where Cats Await!</h2>
                      <div className="home-line"></div>
                      <h1>CAT GENERATOR</h1>
                      <NavLink
                        to="/pet-generator/cat/image-generator"
                        className="home-ctn"
                      >
                        Generate cat!
                      </NavLink>
                    </div>
                  </header>

                  <section className="home-events">
                    <div className="home-title">
                      <h1>Purr-fectly Adorable: Unleash the Charm of Cats!</h1>
                      <div className="home-line"></div>
                    </div>
                    <div className="center">
                      <div
                        className="center"
                        style={{ flexDirection: "column" }}
                      >
                        <img
                          src="https://cataas.com/cat/says/Text and more text!"
                          alt="Random cat"
                        />
                        <h4>Image with Text Generator</h4>
                        <p>Will return a random cat saying :text.</p>
                        <NavLink
                          to="/pet-generator/cat/image-text-generator"
                          className="home-ctn"
                        >
                          Generate it!
                        </NavLink>
                      </div>
                    </div>
                  </section>

                  <section className="home-explore">
                    <div className="home-explore-content">
                      <h1>Generate Gifs: Unleash the Feline Fantasy!</h1>
                      <div className="home-line"></div>
                      <p>Will return a random cat gif.</p>
                      <NavLink
                        to="/pet-generator/cat/gif-generator"
                        className="home-ctn"
                      >
                        Generate it!
                      </NavLink>
                    </div>
                  </section>

                  <section className="home-tours">
                    <div className="home-row">
                      <div className="home-col home-content-col">
                        <h1>
                          Generate Custom Images: Cat-tastic Adventures Await!
                        </h1>
                        <div className="home-line"></div>
                        <p>
                          Will return a random cat depending on different texts,
                          tags, sizes, filters or image type that you want!
                        </p>
                        <NavLink
                          to="/pet-generator/cat/custom-image-generator"
                          className="home-ctn"
                        >
                          Generate it!
                        </NavLink>
                      </div>
                      <div className="home-col home-image-col">
                        <div className="home-image-gallery">
                          <img
                            src="https://cataas.com/cat/gif/says/Hello"
                            alt="Random cat"
                          />
                          <img
                            src="https://cataas.com/cat?filter=mono"
                            alt="Random cat"
                          />
                          <img src="https://cataas.com/cat" alt="Random cat" />
                          <img
                            src="https://cataas.com/cat/gif/says/Dogs under"
                            alt="Random cat"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </>
              ) : (
                // Cataas service is down
                <></>
              )}

              {/* Dogs */}
              <header>
                <div className="home-header-content">
                  <h2>
                    Embrace the Paw-sibilities: A Whisker Wonderland of Dogs at
                    Your Fingertips!
                  </h2>
                  <div className="home-line"></div>
                  <h1>DOG GENERATOR</h1>
                  <NavLink
                    to="/pet-generator/dog/image-generator"
                    className="home-ctn"
                  >
                    Generate it!
                  </NavLink>
                </div>
              </header>

              <section className="home-events">
                <div className="home-title">
                  <h1>
                    Unleash the Joy: Where Dogs Rule with Barks of Happiness!
                  </h1>
                  <div className="home-line"></div>
                </div>
                <div className="home-row">
                  <div className="home-col">
                    <img
                      src="https://random.dog/95427440-b1d9-489c-87eb-05ffccba89a0.png"
                      alt="Random dog"
                    />
                    <h4>Image Generator By Breed</h4>
                    <p>Will return a random dog depending on breed.</p>
                    <NavLink
                      to="/pet-generator/dog/image-generator-by-breed"
                      className="home-ctn"
                    >
                      Generate it!
                    </NavLink>
                  </div>
                  <div className="home-col">
                    <img
                      src="https://random.dog/dda2e1dc-5d96-46b9-a14d-3eee073339dc.jpg"
                      alt="Random dog"
                    />
                    <h4>Gif Generator</h4>
                    <p>Will return a random gif dog.</p>
                    <NavLink
                      to="/pet-generator/dog/gif-generator"
                      className="home-ctn"
                    >
                      Generate it!
                    </NavLink>
                  </div>
                </div>
              </section>

              <section
                className="home-explore"
                style={{
                  backgroundImage:
                    "url('https://random.dog/486cc9cd-f850-4639-983d-fe7531879573.gif')",
                }}
              >
                <div className="home-explore-content">
                  <h1>
                    Generate Videos: Fetching Adventures to Paw-some Playtime!
                  </h1>
                  <div className="home-line"></div>
                  <h2>Will return a random dog video.</h2>
                  <NavLink
                    to="/pet-generator/dog/video-generator"
                    className="home-ctn"
                  >
                    Generate it!
                  </NavLink>
                </div>
              </section>

              <section className="home-tours">
                <div className="home-row">
                  <div className="home-col home-content-col">
                    <h1>An Open Source Project! You are free to colaborate.</h1>
                    <div className="home-line"></div>
                    <p>
                      This is an open source project posted on GitHub using the
                      public APIs of{" "}
                      <a
                        href="https://random.dog/"
                        className="home-simple-links"
                      >
                        Random.dog
                      </a>
                      ,{" "}
                      <a
                        href="https://dog.ceo/dog-api/"
                        className="home-simple-links"
                      >
                        Dog Api
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://cataas.com/pet-generator/"
                        className="home-simple-links"
                      >
                        Cattas
                      </a>
                    </p>
                    <a
                      href="https://github.com/RafaGomezGuillen/pet-generator"
                      className="home-ctn"
                    >
                      Learn more
                    </a>
                  </div>
                  <div className="home-col home-image-col">
                    <div className="home-image-gallery">
                      <img
                        src="https://random.dog/271575bd-83e0-4595-8a4e-a756eb14457a.gif"
                        alt="Random dog"
                      />
                      <img
                        src="https://random.dog/6318c261-c01c-4faa-ad6f-816f477c769e.PNG"
                        alt="Random cat"
                      />
                      <img src="https://cataas.com/cat?" alt="Random cat" />
                      <img
                        src="https://cataas.com/cat/gif/says/You reached the bottom!"
                        alt="Random dog"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </>
          ) : (
            <div className="network-status">
              <h1>No internet connection!</h1>
              <p>Check your network or WiFi connection and try again.</p>
              <NavLink
                to="/pet-generator/pet-generator"
                className="home-ctn"
                onClick={handleReloadPage}
              >
                Restart <IonIcon md={refreshOutline}></IonIcon>
              </NavLink>
            </div>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default HomePage;