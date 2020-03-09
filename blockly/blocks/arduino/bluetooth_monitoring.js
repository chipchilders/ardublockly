/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Fred Lin.
 * https://github.com/gasolin/BlocklyDuino
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

goog.provide('Blockly.Blocks.bluetooth_monitoring');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['bluetooth_module_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of bluetooth communication module PINs");
	  this.appendDummyInput()
		  .appendField(" ");
		  this.appendDummyInput()
		  .appendField("DON'T FORGET TO ADD RESISTORS");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput("bluetooth_pin_rx")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("RX PIN (Digital) - Connect to TX of Bluetooth module")
		  .appendField(new Blockly.FieldTextInput("5", Blockly.Arduino.pinDigitalValidator), "bluetooth_pin_rx");
	  this.appendDummyInput("bluetooth_pin_tx")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("TX PIN (Digital) - Connect to RX of Bluetooth module")
		  .appendField(new Blockly.FieldTextInput("6", Blockly.Arduino.pinDigitalValidator), "bluetooth_pin_tx");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(120);
	  this.setTooltip('Used to setup serial communication over bluetooth device, using the SoftwareSerial library.');
	  this.setHelpUrl('https://www.arduino.cc/reference/en/');
	}
  };

  Blockly.Blocks['bluetooth_print'] = {
	/**
	 * Block for creating a write to serial com function.
	 * @this Blockly.Block
	 */
	init: function() {
	  this.setHelpUrl('http://www.arduino.cc/en/Serial/Print');
	  this.setColour(120);
	  this.appendValueInput('CONTENT');
	  this.appendDummyInput()
		  .appendField(new Blockly.FieldCheckbox('TRUE'), 'NEW_LINE')
		  .appendField(Blockly.Msg.ARD_SERIAL_PRINT_NEWLINE);
	  this.setInputsInline(true);
	  this.setPreviousStatement(true, null);
	  this.setNextStatement(true, null);
	  this.setTooltip("Send a message via bluetooth module.");
	}
  };