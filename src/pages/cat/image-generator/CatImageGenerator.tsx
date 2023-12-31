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
import "../CatStyles.css";

const CatImageGenerator: React.FC = () => {
  const [catUrls, setCatUrls] = useState<string[]>([]);
  const [numImages, setNumImages] = useState(2);
  const [generatedImage, setGeneratedImage] = useState(2);

  const handleNumImagesChange = (
    event: CustomEvent<InputChangeEventDetail>
  ) => {
    const value = event.detail.value || "";
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setNumImages(parsedValue);
    }
  };

  const generateCatUrls = () => {
    const promises = Array.from({ length: numImages }, () =>
      Cat.getRandomCat()
    );
    Promise.all(promises)
      .then((responses) => {
        const urls = responses.map((r) => r.data._id);
        setCatUrls(urls);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    generateCatUrls();
  }, [generatedImage]);

  const handleSubmit = () => {
    generateCatUrls();
    setGeneratedImage(numImages);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Image Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="cat-image-generator">
          <div className="cat-generator-input">
            <IonInput
              label="Number of images:"
              type="number"
              labelPlacement="floating"
              fill="outline"
              placeholder="Number between 1 and 10"
              min={1}
              max={10}
              value={numImages.toString()}
              onIonInput={handleNumImagesChange}
            ></IonInput>
            <br />
            <IonButton onClick={handleSubmit}>Generate Image</IonButton>
          </div>

          {catUrls.length < 11 && catUrls.length > 0 && (
            <div className="cat-generator-img-container">
              {catUrls.map((url, index) => (
                <>
                  <img
                    key={index}
                    src={"https://cataas.com/cat?" + url}
                    alt="Random cat"
                  />
                  <a href={"https://cataas.com/cat?" + url} target="_blank">
                    Download it!
                  </a>
                </>
              ))}
            </div>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default CatImageGenerator;
