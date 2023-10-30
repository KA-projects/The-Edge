'use client'

import React from 'react'
import { StoriesPackageType } from '../../types';

const Test = ({storyPackage}:StoriesPackageType) => {
    console.log(storyPackage);
    
  return (
    <div>Test</div>
  )
}

export default Test