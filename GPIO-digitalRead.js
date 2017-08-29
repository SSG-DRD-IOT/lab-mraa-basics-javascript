/*
 * Author: Dan Yocom <dan.yocom@intel.com>
 * Copyright (c) 2014 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

"use strict";

////////////////////////////////////////////////////////////////////////////////
// ISTV Block
// First, load the MRAA library
////////////////////////////////////////////////////////////////////////////////
const mraa = require('mraa'); //require mraa
// end ISTV block

////////////////////////////////////////////////////////////////////////////////
// ISTV Block
// Then create a MRAA GPIO object on pin 6 and declare it with the IN direction.
// This is a pin we can read data IN from.
////////////////////////////////////////////////////////////////////////////////
let pin = new mraa.Gpio(6); //setup digital read on pin 6
pin.dir(mraa.DIR_IN); //set the gpio direction to input
// end ISTV block

////////////////////////////////////////////////////////////////////////////////
// ISTV Block
// Now create a function that reads in the current pin value and prints it to
// the console
////////////////////////////////////////////////////////////////////////////////
function periodicActivity() {
    let value = pin.read(); //read the digital value of the pin
    console.log('Gpio value is ' + value); //write the read value out to the console
}
// end ISTV block

////////////////////////////////////////////////////////////////////////////////
// ISTV Block
// and use the setInterval function to call it each second.
////////////////////////////////////////////////////////////////////////////////
setInterval(periodicActivity, 1000); //call the indicated function every 1 second (1000 milliseconds)
// end ISTV block
