import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        <h4>{props.phonetic}</h4>
      </div>
    );
  } else {
    return null;
  }
}
