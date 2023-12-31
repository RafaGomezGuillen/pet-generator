import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  InputChangeEventDetail,
  IonInput,
  IonButton,
} from "@ionic/react";

const CatImageTextGenerator: React.FC = () => {
  const [inputText, setInputText] = useState("Default text");
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = event.detail.value || "";
    setInputText(value);
  };

  const handleSubmit = () => {
    if (inputText === "") {
      setGeneratedText("");
    } else {
      setGeneratedText("/says/" + inputText);
    }
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Image with Text Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="cat-image-text-generator">
          <div className="cat-generator-input">
            <IonInput
              label="Image text:"
              type="text"
              labelPlacement="floating"
              fill="outline"
              placeholder="Enter the text you want"
              value={inputText}
              onIonInput={handleInputChange}
            ></IonInput>
            <br />
            <IonButton onClick={handleSubmit}>Generate Image</IonButton>
          </div>
          <div className="cat-generator-img-container">
            <img
              src={`https://cataas.com/cat${generatedText}`}
              alt="Generated Cat"
            />
            <a href={`https://cataas.com/cat${generatedText}`}>Download it!</a>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CatImageTextGenerator;
