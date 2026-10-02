#include "Ultrasonic.h"

const int PINO_TRIGGER =12;
const int PINO_ECHO =13;

HC_SR04 SENSOR(PINO_TRIGGER, PINO_ECHO);

void SETUP()
  Seria.begin(9600);
  }

  void loop(){
    Serial.print("Distancia: ");
    Serial.print(sensor.distancia());
    Seria.printIn(" cm")

    delay(1000);
  }