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
  const [selectedFit, setSelectedFit] = useState("");
  const [generatedFit, setGeneratedFit] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [generatedPosition, setGeneratedPosition] = useState("");

  const handlePickerSelect = (value: any) => {
    setSelectedSize(value.size.value);
    setSelectedFilter(value.filter.value);
    setSelectedType(value.type.value);
    setSelectedFit(value.fit.value);
    setSelectedPosition(value.position.value);
  };

  // Submit button
  const handleSubmit = () => {
    setGeneratedText(inputText === "" ? "" : `/says/${inputText}?`);
    setGeneratedSize(selectedSize);
    setGeneratedFilter(selectedFilter);
    setGeneratedType(selectedType);
    setGeneratedFit(selectedFit);
    setGeneratedPosition(selectedPosition);
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
                      value: "type=square&",
                    },
                    {
                      text: "Medium",
                      value: "type=medium&",
                    },
                    {
                      text: "Small",
                      value: "type=small&",
                    },
                    {
                      text: "Tiny",
                      value: "type=xsmall&",
                    },
                  ],
                },
                {
                  name: "filter",
                  options: [
                    {
                      text: "No filter",
                      value: "",
                    },
                    {
                      text: "Mono",
                      value: "filter=mono&",
                    },
                    {
                      text: "Negative",
                      value: "filter=negate&",
                    },
                    {
                      text: "Custom",
                      value: "filter=custom&",
                    },
                  ],
                },
                {
                  name: "type",
                  options: [
                    {
                      text: "Image",
                      value: "?",
                    },
                    {
                      text: "Gif",
                      value: "/gif?",
                    },
                  ],
                },
                {
                  name: "fit",
                  options: [
                    {
                      text: "No fit",
                      value: "",
                    },
                    {
                      text: "Cover",
                      value: "fit=cover&",
                    },
                    {
                      text: "Fill",
                      value: "fit=fill&",
                    },
                    {
                      text: "Inside",
                      value: "fit=inside&",
                    },
                    {
                      text: "Outside",
                      value: "fit=outside&",
                    },
                  ],
                },
                {
                  name: "position",
                  options: [
                    {
                      text: "Center",
                      value: "position=center",
                    },
                    {
                      text: "Top",
                      value: "position=top",
                    },
                    {
                      text: "Right top",
                      value: "position=right top",
                    },
                    {
                      text: "Right",
                      value: "position=right",
                    },
                    {
                      text: "Right bottom",
                      value: "position=right bottom",
                    },
                    {
                      text: "Bottom",
                      value: "position=bottom",
                    },
                    {
                      text: "Left bottom",
                      value: "position=left bottom",
                    },
                    {
                      text: "Left",
                      value: "position=left",
                    },
                    {
                      text: "Left top",
                      value: "position=left top",
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
            {isLoading && <p>Loading image...</p>}

            {generatedText === "" ? (
              <>
                <img
                  src={`https://cataas.com/cat${generatedType}${generatedSize}${generatedFilter}${generatedFit}${generatedPosition}`}
                  alt="Image does not exists."
                  onLoad={() => setIsLoading(false)}
                />

                <a
                  href={`https://cataas.com/cat${generatedType}${generatedSize}${generatedFilter}${generatedFit}${generatedPosition}`}
                >
                  Download it!
                </a>
              </>
            ) : (
              <>
                <img
                  src={`https://cataas.com/cat${generatedType.replace(
                    "?",
                    ""
                  )}${generatedText}${generatedSize}${generatedFilter}${generatedFit}${generatedPosition}`}
                  alt="Image does not exists."
                  onLoad={() => setIsLoading(false)}
                />

                <a
                  href={`https://cataas.com/cat${generatedType.replace(
                    "?",
                    ""
                  )}${generatedText}${generatedSize}${generatedFilter}${generatedFit}${generatedPosition}`}
                >
                  Download it!
                </a>
              </>
            )}

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
                    <p>{selectedType !== "" ? generatedType : "Image"}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Fit</h2>
                    <p>{selectedFit !== "" ? generatedFit : "No fit"}</p>
                  </IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>
                    <h2>Position</h2>
                    <p>{generatedPosition}</p>
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
