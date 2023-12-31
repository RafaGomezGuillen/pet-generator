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
  IonPicker,
  IonItem,
  IonModal,
  IonLabel,
} from "@ionic/react";

const CatCustomImageGenerator: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedTime, setGeneratedTime] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  // Text
  const [inputText, setInputText] = useState("");
  const [generatedText, setGeneratedText] = useState("");

  const handleInputChange = (event: CustomEvent<InputChangeEventDetail>) => {
    const value = event.detail.value || "";
    setInputText(value);
  };

  // Custom properties
  const [selectedSize, setSelectedSize] = useState("");
  const [generatedSize, setGeneratedSize] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [generatedFilter, setGeneratedFilter] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [generatedType, setGeneratedType] = useState("");

  const handlePickerSelect = (value: any) => {
    setSelectedSize(value.size.value);
    setSelectedFilter(value.filter.value);
    setSelectedType(value.type.value);
  };

  // Submit button
  const handleSubmit = () => {
    setGeneratedText(inputText === "" ? "" : `/says/${inputText}`);
    setGeneratedSize(selectedSize);
    setGeneratedFilter(selectedFilter);
    setGeneratedType(selectedType);
    const newGeneratedTime = new Date().getTime();
    setGeneratedTime(newGeneratedTime);
    setIsLoading(true);
  };

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Custom Image Generator</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen class="cat-custom-generator">
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

            <IonButton id="open-picker" color="primary">
              Custom properties
            </IonButton>
            <IonPicker
              trigger="open-picker"
              columns={[
                {
                  name: "size",
                  options: [
                    {
                      text: "Original",
                      value: "square",
                    },
                    {
                      text: "Medium",
                      value: "medium",
                    },
                    {
                      text: "Small",
                      value: "small",
                    },
                    {
                      text: "Tiny",
                      value: "xsmall",
                    },
                  ],
                },
                {
                  name: "filter",
                  options: [
                    {
                      text: "Default",
                      value: "",
                    },
                    {
                      text: "Mono",
                      value: "mono",
                    },
                    {
                      text: "Negative",
                      value: "negate",
                    },
                  ],
                },
                {
                  name: "type",
                  options: [
                    {
                      text: "Image",
                      value: "",
                    },
                    {
                      text: "Gif",
                      value: "/gif",
                    },
                  ],
                },
              ]}
              buttons={[
                {
                  text: "Cancel",
                  role: "cancel",
                },
                {
                  text: "Confirm",
                  handler: handlePickerSelect,
                  role: "confirm",
                },
              ]}
            ></IonPicker>

            <br />
            <br />
            <IonButton onClick={handleSubmit}>Generate Image</IonButton>
          </div>
          <div className="cat-generator-img-container">
            {isLoading && <p>Loading...</p>}
            <img
              src={`https://cataas.com/cat${generatedType}${generatedText}?filter=${generatedFilter}&type=${generatedSize}&timestamp=${generatedTime}`}
              alt="Image does not exists."
              onLoad={() => setIsLoading(false)}
            />

            <a
              href={`https://cataas.com/cat${generatedType}${generatedText}?filter=${generatedFilter}&type=${generatedSize}&timestamp=${generatedTime}`}
            >
              Download it!
            </a>

            <IonButton
              expand="block"
              onClick={() => setIsOpen(true)}
              className="cat-custom-generator-selected-input-btn"
              color="warning"
            >
              Selected inputs
            </IonButton>
            <IonModal isOpen={isOpen}>
              <IonHeader>
                <IonToolbar>
                  <IonTitle>Selected inputs</IonTitle>
                  <IonButtons slot="end">
                    <IonButton onClick={() => setIsOpen(false)}>
                      Close
                    </IonButton>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent>
                <IonItem>
                  <IonLabel>
                    <h2>Text</h2>
                    <p>{generatedText}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Size</h2>
                    <p>{generatedSize}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Filter</h2>
                    <p>{generatedFilter}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Type</h2>
                    <p>{selectedType !== "" ? selectedType : "image"}</p>
                  </IonLabel>
                </IonItem>
              </IonContent>
            </IonModal>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};

export default CatCustomImageGenerator;
