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

const DogGifGenerator: React.FC = () => {
  const [dogUrls, setDogUrls] = useState<string[]>([]);
  const [numGifs, setnumGifs] = useState(2);
  const [generatedGif, setGeneratedGif] = useState(2);

  const handlenumGifsChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = event.detail.value || "";
    const parsedValue = parseInt(value, 10);

    if (!isNaN(parsedValue) && parsedValue >= 1 && parsedValue <= 10) {
      setnumGifs(parsedValue);
    }
  };

  const generateDogUrls = (numGifs: number) => {
    Dog.getAllDogs()
      .then((response) => {
        const fileNames = response.data as string[];
        const shuffledFileNames = shuffleArray(fileNames);

        const urls = shuffledFileNames
          .filter((fileName) => {
            const extension = fileName.split(".").pop()?.toLowerCase() || "";
            return extension === "gif";
          })
          .slice(0, numGifs)
          .map((fileName) => `https://random.dog/${fileName}`);

        setDogUrls(urls);
      })
      .catch((e) => {
        console.error(e);
      });
  };

  useEffect(() => {
    generateDogUrls(numGifs);
  }, [generatedGif]);

  const handleSubmit = () => {
    generateDogUrls(numGifs);
    setGeneratedGif(numGifs);
  };

  // Mix an array randomly
  const shuffleArray = (array: any[]) => {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
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

        <IonContent fullscreen class="dog-gif-generator">
          <div className="dog-generator-input">
            <IonInput
              label="Number of gifs:"
              type="number"
              labelPlacement="floating"
              fill="outline"
              placeholder="Number between 1 and 10"
              min={1}
              max={10}
              value={numGifs.toString()}
              onIonInput={handlenumGifsChange}
            ></IonInput>
            <br />
            <IonButton onClick={handleSubmit}>Generate Gif</IonButton>
          </div>

          {dogUrls.length > 0 && dogUrls.length < 11 && (
            <div className="dog-generator-img-container">
              {dogUrls.map((url, index) => (
                <>
                  <img key={index} src={url} alt="Random Gif" />
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

export default DogGifGenerator;
