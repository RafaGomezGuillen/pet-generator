import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonItem,
  IonSelect,
  IonSelectOption,
  IonButton,
} from "@ionic/react";
import { Dog, DogData } from "../../../api/dog/dog";

const DogImageGeneratorByBreed: React.FC = () => {
  const [dogBreeds, setDogBreeds] = useState<string[]>([]);
  const [searchValue] = useState("");
  const [results, setResults] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState("affenpinscher");
  const [dogImageUrl, setDogImageUrl] = useState<string | null>(null);

  useEffect(() => {
    Dog.getAllBreeds()
      .then((allBreeds) => {
        setDogBreeds(allBreeds);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  useEffect(() => {
    setResults(
      dogBreeds.filter((breed) =>
        breed.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }, [searchValue, dogBreeds]);

  useEffect(() => {
    Dog.getRandomDogByBreed(selectedBreed)
      .then((response: DogData) => {
        setDogImageUrl(response.message);
      })
      .catch((e) => {
        console.error(e);
        setDogImageUrl(null);
      });
  }, [selectedBreed]);

  const handleSubmit = () => {
    Dog.getRandomDogByBreed(selectedBreed)
      .then((response: DogData) => {
        setDogImageUrl(response.message);
      })
      .catch((e) => {
        console.error(e);
        setDogImageUrl(null);
      });
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Image Generator By Breed</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="dog-breed-generator">
          <div className="dog-generator-input">
            <IonItem>
              <IonSelect
                label="Breeds"
                labelPlacement="fixed"
                placeholder="Choose your breed"
                value={selectedBreed}
                onIonChange={(event) => setSelectedBreed(event.detail.value)}
              >
                {results.map((result, index) => (
                  <IonSelectOption key={index} value={result}>
                    {result}
                  </IonSelectOption>
                ))}
              </IonSelect>
            </IonItem>
            <br />
            <IonButton onClick={handleSubmit}>
              Generate Image by breed
            </IonButton>
          </div>

          <div className="dog-generator-img-container">
            {dogImageUrl && (
              <>
                <img src={dogImageUrl} alt="Random Dog" />
                <a href={dogImageUrl} target="_blanck">
                  Download it!
                </a>
              </>
            )}
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default DogImageGeneratorByBreed;
