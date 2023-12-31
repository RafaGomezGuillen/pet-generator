import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from "@ionic/react";
import { useLocation } from "react-router-dom";
import {
  logoInstagram,
  logoGithub,
  logoLinkedin,
  cameraOutline,
  cameraSharp,
  homeOutline,
  homeSharp,
  cogOutline,
  cogSharp,
  textOutline,
  textSharp,
  videocamOutline,
  videocamSharp,
  pricetagOutline,
  pricetagSharp,
  radioButtonOnSharp,
  radioButtonOnOutline,
} from "ionicons/icons";
import "./Menu.css";

interface ContainerProps {
  networkStatusCataas: boolean;
}

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const Home: AppPage[] = [
  {
    title: "Home",
    url: "/pet-generator",
    iosIcon: homeOutline,
    mdIcon: homeSharp,
  },
];

const CatPages: AppPage[] = [
  {
    title: "Image generator",
    url: "/pet-generator/cat/image-generator",
    iosIcon: cameraOutline,
    mdIcon: cameraSharp,
  },
  {
    title: "Gif generator",
    url: "/pet-generator/cat/gif-generator",
    iosIcon: videocamOutline,
    mdIcon: videocamSharp,
  },
  {
    title: "Image with text generator",
    url: "/pet-generator/cat/image-text-generator",
    iosIcon: textOutline,
    mdIcon: textSharp,
  },
  {
    title: "Custom image generator",
    url: "/pet-generator/cat/custom-image-generator",
    iosIcon: cogOutline,
    mdIcon: cogSharp,
  },
];

const DogPages: AppPage[] = [
  {
    title: "Image generator",
    url: "/pet-generator/dog/image-generator",
    iosIcon: cameraOutline,
    mdIcon: cameraSharp,
  },
  {
    title: "Image generator by breed",
    url: "/pet-generator/dog/image-generator-by-breed",
    iosIcon: pricetagOutline,
    mdIcon: pricetagSharp,
  },
  {
    title: "Gif generator",
    url: "/pet-generator/dog/gif-generator",
    iosIcon: videocamOutline,
    mdIcon: videocamSharp,
  },
  {
    title: "Video generator",
    url: "/pet-generator/dog/video-generator",
    iosIcon: radioButtonOnOutline,
    mdIcon: radioButtonOnSharp,
  },
];

const SocialPages: AppPage[] = [
  {
    title: "Github",
    url: "https://github.com/RafaGomezGuillen",
    iosIcon: logoGithub,
    mdIcon: logoGithub,
  },
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/rafael-g%C3%B3mez-guill%C3%A9n/",
    iosIcon: logoLinkedin,
    mdIcon: logoLinkedin,
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/rafagomez.jpg/",
    iosIcon: logoInstagram,
    mdIcon: logoInstagram,
  },
];

const Menu: React.FC<ContainerProps> = ({ networkStatusCataas }) => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Home</IonListHeader>
          <br></br>
          {Home.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        {networkStatusCataas ? (
          <IonList id="inbox-list">
            <IonListHeader>Cats</IonListHeader>
            <br></br>
            {CatPages.map((appPage, index) => {
              return (
                <IonMenuToggle key={index} autoHide={false}>
                  <IonItem
                    className={
                      location.pathname === appPage.url ? "selected" : ""
                    }
                    routerLink={appPage.url}
                    routerDirection="none"
                    lines="none"
                    detail={false}
                  >
                    <IonIcon
                      aria-hidden="true"
                      slot="start"
                      ios={appPage.iosIcon}
                      md={appPage.mdIcon}
                    />
                    <IonLabel>{appPage.title}</IonLabel>
                  </IonItem>
                </IonMenuToggle>
              );
            })}
          </IonList>
        ) : (
          <></>
        )}

        <IonList id="inbox-list">
          <IonListHeader>Dogs</IonListHeader>
          <br></br>
          {DogPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id="inbox-list">
          <IonListHeader>Social media</IonListHeader>
          <br></br>
          {SocialPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  href={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    aria-hidden="true"
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
