import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonInput,
  InputChangeEventDetail,
  IonButton,
} from "@ionic/react";
import { Cat } from "../../../api/cat/cat";

const CatGifGenerator: React.FC = () => {
  const [catUrls, setCatUrls] = useState<string[]>([]);
  const [numGifs, setNumGifs] = useState(2);
  const [generatedGif, setGeneratedGif] = useState(2);

  const handleNumGifsChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = event.detail.value || "";
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setNumGifs(parsedValue);
    }
  };

  const generateCatUrls = () => {
    const promises = Array.from({ length: numGifs }, () => Cat.getRandomGif());
    Promise.all(promises)
      .then((responses) => {
        const urls = responses.map((r) => r.data.id);
        setCatUrls(urls);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    generateCatUrls();
  }, [generatedGif]);

  const handleSubmit = () => {
    generateCatUrls();
    setGeneratedGif(numGifs);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Gif Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="cat-gif-generator">
          <div className="cat-generator-input">
            <IonInput
              label="Number of gifs:"
              type="number"
              labelPlacement="floating"
              fill="outline"
              placeholder="Number between 1 and 10"
              min={1}
              max={10}
              value={numGifs.toString()}
              onIonInput={handleNumGifsChange}
            ></IonInput>
            <br />
            <IonButton onClick={handleSubmit}>Generate Gif</IonButton>
          </div>

          {catUrls.length < 11 && catUrls.length > 0 && (
            <div className="cat-generator-img-container">
              {catUrls.map((url, index) => (
                <div key={index} className="cat-generator-img">
                  <img
                    key={index}
                    src={"https://cataas.com/cat/gif?" + url}
                    alt="Random cat"
                  />
                  <a href={"https://cataas.com/cat/gif?" + url} target="_blank">
                    Download it!
                  </a>
                </div>
              ))}
            </div>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default CatGifGenerator;
