import React from "react";

import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";
import {
  mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp,
} from "ionicons/icons";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./Menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

export default function Menu() {
  const location = useLocation();
  const { t } = useTranslation("", { keyPrefix: "menu" });

  const appPages: AppPage[] = [
    {
      title: t("projects"),
      url: "/page/Projects",
      iosIcon: mailOutline,
      mdIcon: mailSharp,
    },
    {
      title: t("about"),
      url: "/page/About",
      iosIcon: paperPlaneOutline,
      mdIcon: paperPlaneSharp,
    },
  ];

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>{t("header")}</IonListHeader>
          <IonNote>{t("welcome")}</IonNote>
          {appPages.map((appPage) => (
            <IonMenuToggle key={appPage.title} autoHide={false}>
              <IonItem className={location.pathname === appPage.url ? "selected" : ""} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
}
