'use strict';

goog.provide('Blockly.Arduino.bluetooth_monitoring');

goog.require('Blockly.Arduino');

//    Blockly.Arduino.includes_[] = 'libraries code';
//    Blockly.Arduino.definitions_[] = 'instance';
//    Blockly.Arduino.userFunctions_[] = 'functions';

Blockly.Arduino['bluetooth_module_setup'] = function(block) {
    var value_bluetooth_pin_rx = this.getFieldValue('bluetooth_pin_rx');
    var value_bluetooth_pin_tx = this.getFieldValue('bluetooth_pin_tx');
    Blockly.Arduino.includes_['setup_bluetooth'] = '#include <SoftwareSerial.h>'
    Blockly.Arduino.definitions_["bluetooth_pin_rx"] = "#define bluetooth_pin_rx " + value_bluetooth_pin_rx;
    Blockly.Arduino.definitions_["bluetooth_pin_tx"] = "#define bluetooth_pin_tx " + value_bluetooth_pin_tx;
    Blockly.Arduino.variables_["setup_bluetooth"] = 
        "SoftwareSerial myBluetoothSerial(bluetooth_pin_rx, bluetooth_pin_tx); // RX, TX";
        Blockly.Arduino.addSetup('setup_bluetooth', "myBluetoothSerial.begin(9600);", true);
    return '';
  };

Blockly.Arduino['bluetooth_print'] = function(block) {
    var content = Blockly.Arduino.valueToCode(
        block, 'CONTENT', Blockly.Arduino.ORDER_ATOMIC) || '0';
    var checkbox_name = (block.getFieldValue('NEW_LINE') == 'TRUE');
  
    if (checkbox_name) {
      var code = 'myBluetoothSerial.println(String(millis()) + String(" ") + String(' + content + '));\n';
    } else {
      var code = 'myBluetoothSerial.print(' + content + ');\n';
    }
    return code;
  };