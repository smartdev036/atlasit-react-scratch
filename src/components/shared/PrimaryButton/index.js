import './index.scss';
import React from 'react';

export default function PrimaryButton({children}) {
  return (
    <button className="primaryButton">
      {children}
    </button>
  )
}