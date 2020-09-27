import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './LowerHeader.css';

export default function LowerHeader( { category } ) {
  return (
    <div className="lowerHeader">
        <p>{category}</p>
        <ExpandMoreIcon fontSize="small" className="lowerHeader__icon"/>
    </div>
  )
}