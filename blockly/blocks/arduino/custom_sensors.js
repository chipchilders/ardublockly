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

goog.provide('Blockly.Blocks.custom_sensors');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

Blockly.Blocks['ping_sensor_pin_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of ping sensor PINs");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput("ping_pin")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Trigger PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("7", Blockly.Arduino.pinDigitalValidator), "ping_pin");
	  this.appendDummyInput("max_distance")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Max Distance (in centimeters)")
		  .appendField(new Blockly.FieldNumber("200"), "max_distance");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(180);
	  this.setTooltip('Used to setup an ultrasonic range sensor. Set each PIN correctly to match the wiring of the device.');
	  this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	}
  };


Blockly.Blocks['Ping'] = {
	init: function() {
		this.appendDummyInput("Ping")
			.appendField("Get distance to closest obstacle in centimeters")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will tell the rover to start moving forward at the specified speed.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
};

Blockly.Blocks['ir_obstacle_pin_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of IR obstacle avoidance sensor");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput("ir_obstacle_sensor_pin")
		  .setAlign(Blockly.ALIGN_RIGHT)
		  .appendField("Sensor PIN (Digital)")
		  .appendField(new Blockly.FieldTextInput("4", Blockly.Arduino.pinDigitalValidator), "ir_obstacle_sensor_pin");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(180);
	  this.setTooltip('Used to setup an IR obstacle sensor.');
	  this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	}
  };

  Blockly.Blocks['IsObstacle'] = {
	init: function() {
		this.appendDummyInput("Is Obstacle")
			.appendField("Is there an obstacle?")
		this.setInputsInline(false);
		this.setOutput(true, "Boolean");
		this.setColour(180);
		this.setTooltip('This block will be true if there is an obstacle and false if not.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
};

Blockly.Blocks['lidar_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of LIDAR distance sensor");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput()
	    .appendField("LIDAR must be wired into A4 and A5 for i2c communication.");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(180);
	  this.setTooltip('Used to setup an IR obstacle sensor.');
	  this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	}
  };

  Blockly.Blocks['lidar_get_cm'] = {
	init: function() {
		this.appendDummyInput("LIDAR - Get distance in cm")
			.appendField("Get distance to closest obstacle in centimeters")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will tell the rover to start moving forward at the specified speed.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
  };

  Blockly.Blocks['lidar_get_mm'] = {
	init: function() {
		this.appendDummyInput("LIDAR - Get distance in mm")
			.appendField("Get distance to closest obstacle in millimeters")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will tell the rover to start moving forward at the specified speed.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
  };

  Blockly.Blocks['orientation_sensor_setup'] = {
	init: function() {
	  this.appendDummyInput()
		  .appendField("Setup of Adafruit orientation sensor");
	  this.appendDummyInput()
		  .appendField(" ");
	  this.appendDummyInput()
	    .appendField("Sensor must be wired into A4 and A5 for i2c communication.");
	  this.setInputsInline(false);
	  this.setPreviousStatement(false);
	  this.setNextStatement(false);
	  this.setColour(180);
	  this.setTooltip('Used to setup an Adafruit orientation sensor.');
	  this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	}
  };

  Blockly.Blocks['orientation_sensor_x'] = {
	init: function() {
		this.appendDummyInput("X Degrees - Orientation Sensor")
			.appendField("Get X orientation in degrees")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will return the X degree orientation of the orientation sensor.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
  };

  Blockly.Blocks['orientation_sensor_y'] = {
	init: function() {
		this.appendDummyInput("Y Degrees - Orientation Sensor")
			.appendField("Get Y orientation in degrees")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will return the Y degree orientation of the orientation sensor.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
  };

  Blockly.Blocks['orientation_sensor_z'] = {
	init: function() {
		this.appendDummyInput("Z Degrees - Orientation Sensor")
			.appendField("Get Z orientation in degrees")
		this.setInputsInline(false);
		this.setOutput(true, "Number");
		this.setColour(180);
		this.setTooltip('This block will return the Z degree orientation of the orientation sensor.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
  };