import '../style/App.css';
import HYPERPOP from "../pictures/HYPERPOP.mp3"
import React, { useState } from 'react';

export function Music() {
    return (
        <div>
          <audio src={HYPERPOP} controls />
        </div>
      );
  };

export default Music;