# Ionic React Scratchpad

* App to calculate the users Body Mass Index (BMI) using inputs of height and weight. Created using the [Ionic 5 framework](https://ionicframework.com/docs) with [React](https://reactjs.org/)].
* Initially Academind: Youtube video: [Ionic + React - Tutorial for Beginners 2020](https://www.youtube.com/watch?v=_03VKmdrxV8) code but with customisations to code and styling.

## Table of contents

* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info

* App created using Ionic CLI v5

## Screenshots

![screen print](./img/bmi.png)

## Technologies

* [Ionic v5.0.7](https://ionicframework.com/) framework
* [React v16.12.0](https://reactjs.org/) library

## Setup

* Load dependencies using `npm i`,
* To start the server on _localhost://8100_ type: 'ionic serve'

## Code Examples

* function to calculate BMI from user inputs for height & weight

```javascript
const calculateBMI = () => {
  const enteredWeight = weightInputRef.current!.value;
  const enteredHeight = heightInputRef.current!.value;

  if (
    !enteredHeight ||
    !enteredWeight ||
    +enteredHeight <= 0 ||
    +enteredWeight <= 0
  ) {
    setError("Please enter a valid number");
    return;
  }

  const weightConversionFactor = calcUnits === 'ftlbs' ? 2.20 : 1;
  const heightConversionFactor = calcUnits === 'ftlbs' ? 3.28 : 1;

  const weight = +enteredWeight / weightConversionFactor;
  const height = +enteredHeight / heightConversionFactor;

  setCalculatedBmi(weight / (height * height));
};
```

## Features

* N/A

## Status & To-do list

* Status: working. Very simple app. Minor error: result card does not disappear when reset button is pressed
* To-do: Fix reset and add functionality

## Inspiration

* Academind: Youtube video: [Ionic + React - Tutorial for Beginners 2020](https://www.youtube.com/watch?v=_03VKmdrxV8)

## Contact

Repo created by [ABateman](https://www.andrewbateman.org) - feel free to contact me!
