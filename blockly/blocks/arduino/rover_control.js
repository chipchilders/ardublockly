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

goog.provide('Blockly.Blocks.rover_control');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['wheel_pin_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of rover control PINs");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput()
	  	  .appendField("Left Side:");
	  this.appendDummyInput("speed_pin_left")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Speed Control PIN (PWM)")
		  .appendField(new Blockly.FieldTextInput("9", Blockly.Arduino.pinPWMValidator), "speed_pin_left");
	  this.appendDummyInput("control_1_left")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("First Control PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("8", Blockly.Arduino.pinDigitalValidator), "control_1_left");
	  this.appendDummyInput("control_2_left")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Second Control PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("11", Blockly.Arduino.pinDigitalValidator), "control_2_left");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput()
		  .appendField("Right Side:");
	  this.appendDummyInput("speed_pin_right")
		  .appendField("Speed Control PIN (PWM)")
		  .appendField(new Blockly.FieldTextInput("10", Blockly.Arduino.pinPWMValidator), "speed_pin_right");
	  this.appendDummyInput("control_1_right")
		  .appendField("First Control PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("12", Blockly.Arduino.pinDigitalValidator), "control_1_right");
	  this.appendDummyInput("control_2_right")
		  .appendField("Second Control PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("13", Blockly.Arduino.pinDigitalValidator), "control_2_right");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(120);
	  this.setTooltip('Used to setup the Rover Control functionality. Set each PIN correctly to match the motor shield.');
	  this.setHelpUrl('https://www.arduino.cc/reference/en/');
	}
  };

Blockly.Blocks['Forward'] = {
	init: function() {
		this.appendDummyInput("Speed")
			.appendField("Move forward with speed:")
			.appendField(new Blockly.FieldNumber("100"), "speed");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(120);
		this.setTooltip('This block will till the rover to start moving forward at the specified speed.');
		this.setHelpUrl('https://www.arduino.cc/reference/en/');
	  }
};

Blockly.Blocks['Backward'] = {
	init: function() {
		this.appendDummyInput("Speed")
			.appendField("Move backward with speed:")
			.appendField(new Blockly.FieldNumber("100"), "speed");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(120);
		this.setTooltip('This block will till the rover to start moving backwards at the specified speed.');
		this.setHelpUrl('https://www.arduino.cc/reference/en/');
	  }
};

Blockly.Blocks['TurnRight'] = {
	init: function() {
		this.appendDummyInput("Seconds")
			.appendField("Turn right for")
			.appendField(new Blockly.FieldNumber("1"), "seconds")
			.appendField("seconds");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip('This block will till the rover to turn to the right for the specified number of seconds.');
		this.setHelpUrl('https://www.arduino.cc/reference/en/');
	  }
};

Blockly.Blocks['TurnLeft'] = {
	init: function() {
		this.appendDummyInput("Seconds")
			.appendField("Turn left for")
			.appendField(new Blockly.FieldNumber("1"), "seconds")
			.appendField("seconds");
		this.setInputsInline(false);
		this.setPreviousStatement(true);
		this.setNextStatement(true);
		this.setColour(60);
		this.setTooltip('This block will till the rover to turn to the right for the specified number of seconds.');
		this.setHelpUrl('https://www.arduino.cc/reference/en/');
	  }
};

Blockly.Blocks['Stop'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Stop");
	  this.setInputsInline(true);
	  this.setPreviousStatement(true);
	  this.setNextStatement(true);
	  this.setColour(0);
	  this.setTooltip('this blocks helps to...');
	  this.setHelpUrl('https://www.arduino.cc/reference/en/');
	}
  };