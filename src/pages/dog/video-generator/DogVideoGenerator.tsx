import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
} from "@ionic/react";
import { Dog } from "../../../api/dog/dog";

const DogVideoGenerator: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState<string | null>(
    "https://random.dog/01289c3d-5668-45b9-8c32-42eb9135e04c.mp4"
  );

  const generateRandomDogVideo = () => {
    Dog.getAllDogs()
      .then((response) => {
        const fileNames = response.data as string[];
        const filteredFileNames = fileNames.filter((fileName) => {
          const extension = fileName.split(".").pop()?.toLowerCase() || "";
          return extension === "mp4";
        });
        const randomIndex = Math.floor(
          Math.random() * filteredFileNames.length
        );
        const randomVideoUrl = `https://random.dog/${filteredFileNames[randomIndex]}`;
        setVideoUrl(randomVideoUrl);
      })
      .catch((e) => {
        console.error(e);
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
            <IonTitle>Video Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="dog-video-generator">
          {videoUrl && (
            <div className="dog-generator-img-container">
              <video src={videoUrl} controls autoPlay></video>
              <div className="dog-generator-img-container-button">
                <IonButton onClick={generateRandomDogVideo}>
                  Generate Video
                </IonButton>
              </div>
            </div>
          )}
        </IonContent>
      </IonPage>
    </>
  );
};

export default DogVideoGenerator;