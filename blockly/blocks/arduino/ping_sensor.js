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

goog.provide('Blockly.Blocks.ping_sensor');

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
		this.setTooltip('This block will till the rover to start moving forward at the specified speed.');
		this.setHelpUrl('https://bitbucket.org/teckel12/arduino-new-ping/wiki/Home');
	  }
};
