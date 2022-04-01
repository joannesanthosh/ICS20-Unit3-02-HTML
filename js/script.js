// Copyright (c) 2022 Joanne Santhosh All rights reserved
//
// Created by: Joanne Santhosh
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates the volume of a pyramid.
 */
function calculate() {
  // input
  const lengthOfPyramid = parseInt(document.getElementById('length-of-pyramid').value)
  const widthOfPyramid = parseInt(document.getElementById('width-of-pyramid').value)
  const heightOfPyramid = parseInt(document.getElementById('height-of-pyramid').value)

  // process
  const volume = ((lengthOfPyramid * widthOfPyramid * heightOfPyramid) / 3) 

  // output
  document.getElementById('volume').innerHTML = '<p>The volume of the pyramid is: ' + volume + ' cm³</p>'
  }
