'use strict';

goog.provide('Blockly.Arduino.rover_control');

goog.require('Blockly.Arduino');

//    Blockly.Arduino.includes_[] = 'libraries code';
//    Blockly.Arduino.definitions_[] = 'instance';
//    Blockly.Arduino.userFunctions_[] = 'functions';

Blockly.Arduino['wheel_pin_setup'] = function(block) {
    var value_speed_pin_left = this.getFieldValue('speed_pin_left');
    var value_control_1_left = this.getFieldValue('control_1_left');
    var value_control_2_left = this.getFieldValue('control_2_left');
    var value_speed_pin_right = this.getFieldValue('speed_pin_right');
    var value_control_1_right = this.getFieldValue('control_1_right');
    var value_control_2_right = this.getFieldValue('control_2_right');
    Blockly.Arduino.definitions_["control_1_left"] = "#define control_1_left " + value_control_1_left;
    Blockly.Arduino.definitions_["control_2_left"] = "#define control_2_left " + value_control_2_left;
    Blockly.Arduino.definitions_["control_1_right"] = "#define control_1_right " + value_control_1_right;
    Blockly.Arduino.definitions_["control_2_right"] = "#define control_2_right " + value_control_2_right;
    Blockly.Arduino.definitions_["speed_pin_left"] = "#define speed_pin_left " + value_speed_pin_left;
    Blockly.Arduino.definitions_["speed_pin_right"] = "#define speed_pin_right " + value_speed_pin_right;
    Blockly.Arduino.setups_["setup_rover"] = 
        "pinMode(control_1_left,OUTPUT);\n" +
        "pinMode(control_2_left,OUTPUT);\n" +
        "pinMode(speed_pin_left,OUTPUT);\n" +
        "pinMode(control_1_right,OUTPUT);\n" +
        "pinMode(control_2_right,OUTPUT);\n" +
        "pinMode(speed_pin_right,OUTPUT);\n";
    return '';
  };

Blockly.Arduino['Forward'] = function(block) {
    var number_speed = this.getFieldValue('speed');
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_forward'] = "void Forward(int motorSpeed) {\n" +
        "  digitalWrite(control_1_left,LOW);\n" +
        "  digitalWrite(control_2_left,HIGH);\n" +
        "  digitalWrite(control_1_right,LOW);\n" +
        "  digitalWrite(control_2_right,HIGH);\n" +
        "  analogWrite(speed_pin_left, motorSpeed);\n" +
        "  analogWrite(speed_pin_right, motorSpeed);\n" +
        "}";
    code = "Forward(" + number_speed + ");\n";

    return code;
};

Blockly.Arduino['Backward'] = function(block) {
    var number_speed = this.getFieldValue('speed');
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_backward'] = "void Backward(int motorSpeed) {\n" +
        "  digitalWrite(control_1_left,HIGH);\n" +
        "  digitalWrite(control_2_left,LOW);\n" +
        "  digitalWrite(control_1_right,HIGH);\n" +
        "  digitalWrite(control_2_right,LOW);\n" +
        "  analogWrite(speed_pin_left, motorSpeed);\n" +
        "  analogWrite(speed_pin_right, motorSpeed);\n" +
        "}";
    code = "Backward(" + number_speed + ");\n";

    return code;
};

Blockly.Arduino['TurnRight'] = function(block) {
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_turnright'] = "void TurnRight() {\n" +
        "  digitalWrite(control_1_left,LOW);\n" +
        "  digitalWrite(control_2_left,HIGH);\n" +
        "  digitalWrite(control_1_right,HIGH);\n" +
        "  digitalWrite(control_2_right,LOW);\n" +
        "  analogWrite(speed_pin_left, 200);\n" +
        "  analogWrite(speed_pin_right, 200);\n" +
        "}";
    code = "TurnRight();\n";

    return code;
};

Blockly.Arduino['TurnLeftFor'] = function(block) {
    var turn_time = this.getFieldValue('seconds');
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_turnleft'] = "void TurnLeft() {\n" +
        "  digitalWrite(control_1_left,HIGH);\n" +
        "  digitalWrite(control_2_left,LOW);\n" +
        "  digitalWrite(control_1_right,LOW);\n" +
        "  digitalWrite(control_2_right,HIGH);\n" +
        "  analogWrite(speed_pin_left, 200);\n" +
        "  analogWrite(speed_pin_right, 200);\n" +
        "}";
    code = "TurnLeft();\n";

    return code;
};

Blockly.Arduino['TurnRightFor'] = function(block) {
    var turn_time = this.getFieldValue('seconds');
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_turnrightfor'] = "void TurnRightFor(int turn_time) {\n" +
        "  digitalWrite(control_1_left,LOW);\n" +
        "  digitalWrite(control_2_left,HIGH);\n" +
        "  digitalWrite(control_1_right,HIGH);\n" +
        "  digitalWrite(control_2_right,LOW);\n" +
        "  analogWrite(speed_pin_left, 200);\n" +
        "  analogWrite(speed_pin_right, 200);\n" +
        "  delay(turn_time*1000);\n" +
        "  analogWrite(speed_pin_left, 0);\n" +
        "  analogWrite(speed_pin_right, 0);\n" +
        "}";
    code = "TurnRightFor(" + turn_time + ");\n";

    return code;
};

Blockly.Arduino['TurnLeftFor'] = function(block) {
    var turn_time = this.getFieldValue('seconds');
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_turnleftfor'] = "void TurnLeftFor(int turn_time) {\n" +
        "  digitalWrite(control_1_left,HIGH);\n" +
        "  digitalWrite(control_2_left,LOW);\n" +
        "  digitalWrite(control_1_right,LOW);\n" +
        "  digitalWrite(control_2_right,HIGH);\n" +
        "  analogWrite(speed_pin_left, 200);\n" +
        "  analogWrite(speed_pin_right, 200);\n" +
        "  delay(turn_time*1000);\n" +
        "  analogWrite(speed_pin_left, 0);\n" +
        "  analogWrite(speed_pin_right, 0);\n" +
        "}";
    code = "TurnLeftFor(" + turn_time + ");\n";

    return code;
};

Blockly.Arduino['Stop'] = function(block) {
    var code = "";
    Blockly.Arduino.userFunctions_['define_rover_stop'] = "void Stop() {\n" +
        "  analogWrite(speed_pin_left, LOW);\n" +
        "  analogWrite(speed_pin_right, LOW);\n" +
        "  delay(500);\n" +
        "}";
    code = "Stop();\n";

    return code;
  };