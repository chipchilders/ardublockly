'use strict';

goog.provide('Blockly.Arduino.ping_sensor');

goog.require('Blockly.Arduino');

//    Blockly.Arduino.includes_[] = 'libraries code';
//    Blockly.Arduino.definitions_[] = 'instance';
//    Blockly.Arduino.userFunctions_[] = 'functions';

Blockly.Arduino['ping_sensor_pin_setup'] = function(block) {
    var value_ping_pin = this.getFieldValue('ping_pin');
    var value_max_distance = this.getFieldValue('max_distance');
    Blockly.Arduino.includes_['setup_ping'] = '#include <NewPing.h>'
    Blockly.Arduino.definitions_["ping_pin"] = "#define PING_PIN " + value_ping_pin;
    Blockly.Arduino.definitions_["max_distance"] = "#define MAX_DISTANCE " + value_max_distance;
    Blockly.Arduino.variables_["setup_ping"] = 
        "NewPing sonar(PING_PIN, PING_PIN, MAX_DISTANCE);";
    return '';
  };


Blockly.Arduino['Ping'] = function(block) {
    var code = "";
    Blockly.Arduino.userFunctions_['ping_getdistance'] = "int PingCM() {\n" +
        "  int distance = sonar.ping_cm();\n" +
        "  delay(10);\n" +
        "  return distance;\n" +
        "}";
    code = "PingCM()";

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};
