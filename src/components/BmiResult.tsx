import React from "react";
import { IonRow, IonCol, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonItemDivider } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Body Mass Index (BMI) Calculator</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent className="ion-text-center">
            <h1>{props.result.toFixed(2)}</h1>
            <IonItemDivider color="primary">
            </IonItemDivider>
            <p>>=25.0 is overweight</p>
            <p>18.5 - 24.9 is good</p>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};

export default BmiResult;
