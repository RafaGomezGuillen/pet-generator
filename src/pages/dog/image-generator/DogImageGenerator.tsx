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
import { Dog } from "../../../api/dog/dog";
import "../DogStyles.css";

const DogImageGenerator: React.FC = () => {
  const [dogUrls, setDogUrls] = useState<string[]>([]);
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

  const generateDogUrls = () => {
    const promises = Array.from({ length: numImages }, () =>
      Dog.getRandomDog()
    );
    Promise.all(promises)
      .then((responses) => {
        const urls = responses.map((r) => r.data.message as string);
        setDogUrls(urls);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    generateDogUrls();
  }, [generatedImage]);

  const handleSubmit = () => {
    generateDogUrls();
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

        <IonContent fullscreen class="dog-image-generator">
          <div className="dog-generator-input">
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

          {dogUrls.length < 11 && dogUrls.length > 0 && (
            <div className="dog-generator-img-container">
              {dogUrls.map((url, index) => (
                <>
                  <img key={index} src={url} alt="Random dog" />
                  <a href={url} target="_blanck">
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

export default DogImageGenerator;