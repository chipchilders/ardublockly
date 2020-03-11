'use strict';

goog.provide('Blockly.Arduino.custom_sensors');

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

  Blockly.Arduino['ir_obstacle_pin_setup'] = function(block) {
    var value_ir_obstacle_sensor_pin = this.getFieldValue('ir_obstacle_sensor_pin');
    Blockly.Arduino.definitions_["ir_obstacle_sensor_pin"] = "#define ir_obstacle_sensor_pin " + value_ir_obstacle_sensor_pin;
    Blockly.Arduino.setups_["ir_obstacle_pin_setup"] = 
        "pinMode(ir_obstacle_sensor_pin,INPUT);\n";
    return '';
  };

Blockly.Arduino['IsObstacle'] = function(block) {
    var code = "";
    Blockly.Arduino.userFunctions_['IsObstacle'] = "bool IsObstacle() {\n" +
        "  int val;\n" +
        "  val = digitalRead (ir_obstacle_sensor_pin) ;\n" +
        "  if (val == HIGH){\n" +
        "    return false;\n" +
        "  } else {\n" +
        "    return true;\n" +
        "  }\n" +
        "}\n";
    code = "IsObstacle()";

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['lidar_setup'] = function(block) {
    Blockly.Arduino.includes_['lidar_setup'] = '#include <Wire.h>'
    Blockly.Arduino.variables_["lidar_setup"] = 
      "unsigned char ok_flag;\n" +
      "unsigned char fail_flag;\n" +
      "unsigned short lenth_val = 0;\n" +
      "unsigned char i2c_rx_buf[16];\n" +
      "unsigned char dirsend_flag=0;\n";
    Blockly.Arduino.setups_["lidar_setup"] = "Wire.begin();";
    Blockly.Arduino.userFunctions_['lidar_setup'] =
        "void SensorRead(unsigned char addr,unsigned char* datbuf,unsigned int cnt) \n" +
        "{\n" +
        "unsigned short result=0;\n" +
        "// step 1: instruct sensor to read echoes\n" +
        "Wire.beginTransmission(82); // transmit to device #82 (0x52)\n" +
        "// the address specified in the datasheet is 164 (0xa4)\n" +
        "// but i2c adressing uses the high 7 bits so it's 82\n" +
        "Wire.write(byte(addr));      // sets distance data address (addr)\n" +
        "Wire.endTransmission();      // stop transmitting\n" +
        "// step 2: wait for readings to happen\n" +
        "delay(1);                   // datasheet suggests at least 30uS\n" +
        "// step 3: request reading from sensor\n" +
        "Wire.requestFrom(82, cnt);    // request cnt bytes from slave device #82 (0x52)\n" +
        "// step 5: receive reading from sensor\n" +
        "if (cnt <= Wire.available()) { // if two bytes were received\n" +
        "      *datbuf++ = Wire.read();  // receive high byte (overwrites previous reading)\n" +
        "      *datbuf++ = Wire.read(); // receive low byte as lower 8 bits\n" +
        "}\n" +
        "}\n" +
        "\n" +
        "int ReadDistance(){\n" +
        "SensorRead(0x00,i2c_rx_buf,2);\n" +
        "lenth_val=i2c_rx_buf[0];\n" +
        "lenth_val=lenth_val<<8;\n" +
        "lenth_val|=i2c_rx_buf[1];\n" +
        "delay(100); \n" +
        "return lenth_val;\n" +
        "}\n";
    return '';
  };

  Blockly.Arduino['lidar_get_mm'] = function(block) {
    var code = "";
    code = "ReadDistance()";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino['lidar_get_cm'] = function(block) {
    var code = "";
    code = "round(ReadDistance()/10)";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino['orientation_sensor_setup'] = function(block) {
    Blockly.Arduino.includes_['orientation_sensor_setup'] = '#include <Adafruit_Sensor.h> \n #include <Adafruit_BNO055.h>'
    Blockly.Arduino.variables_["orientation_sensor_setup"] = "Adafruit_BNO055 bno = Adafruit_BNO055(55);\n";
    Blockly.Arduino.setups_["orientation_sensor_setup"] = "bno.begin(); \n delay(1000); \n";
    Blockly.Arduino.userFunctions_['orientation_sensor_setup'] =
        "float GetOrientation(char axis) {\n" +
        "  sensors_event_t event;\n" +
        "  bno.getEvent(&event);\n" +
        "  switch (axis) {\n" +
        "    case 'X':\n" +
        "      return event.orientation.x;\n" +
        "      break;\n" +
        "    case 'Y':\n" +
        "      return event.orientation.y;\n" +
        "      break;\n" +
        "    case 'Z':\n" +
        "      return event.orientation.z;\n" +
        "      break;\n" +
        "    default:\n" +
        "      return 0;\n" +
        "      break;\n" +
        "  }\n" + 
        "}\n";
    return '';
  };

  Blockly.Arduino['orientation_sensor_x'] = function(block) {
    var code = "";
    code = "GetOrientation('X')";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino['orientation_sensor_y'] = function(block) {
    var code = "";
    code = "GetOrientation('Y')";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino['orientation_sensor_z'] = function(block) {
    var code = "";
    code = "GetOrientation('Z')";
    return [code, Blockly.Arduino.ORDER_ATOMIC];
  };

  Blockly.Arduino['ultrasonic_sensor_pin_setup'] = function(block) { // 4 5  2 3
    var sensorName = block.getFieldValue('ultrasonic_sensor_name');
    var value_trigger_pin = this.getFieldValue('ultrasonic_sensor_trigger_pin');
    var value_echo_pin = this.getFieldValue('ultrasonic_sensor_echo_pin');
    var value_max_distance = this.getFieldValue('max_distance');
    Blockly.Arduino.includes_['setup_ping'] = '#include <NewPing.h>'
    Blockly.Arduino.definitions_["ultrasonic_sensor_pin_setup" + sensorName] = 
      "#define TRIGGER_PIN" + sensorName + " " + value_trigger_pin + "\n" + 
      "#define ECHO_PIN" + sensorName + " " + value_echo_pin;
    Blockly.Arduino.definitions_["max_distance" + sensorName] = "#define MAX_DISTANCE" + sensorName + " " + value_max_distance;
    Blockly.Arduino.variables_["ultrasonic_sensor_pin_setup" + sensorName] = 
        "NewPing sonar" + sensorName + "(TRIGGER_PIN" + sensorName + ", ECHO_PIN" + sensorName + ", MAX_DISTANCE" + sensorName + ");";
    return '';
  };

  Blockly.Arduino['ultrasonic_sensor_get_distance'] = function(block) {
    var sensorName = 'sonar' + block.getFieldValue('ultrasonic_sensor_name');
    var code = "";
    Blockly.Arduino.userFunctions_['ultrasonic_sensor_get_distance'] = "int UltrasonicDistanceCM(NewPing sensorName) {\n" +
        "  int distance = sensorName.ping_cm();\n" +
        "  delay(10);\n" +
        "  if (distance == 0) distance = 1000;\n" +
        "  return distance;\n" +
        "}";
    code = "UltrasonicDistanceCM(" + sensorName + ")";

    return [code, Blockly.Arduino.ORDER_ATOMIC];
};