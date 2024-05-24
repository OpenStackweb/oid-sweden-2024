import React, { cloneElement } from "react";
import PropTypes from "prop-types";

const cardStyle = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f0f0f0"
};

const innerContainerStyle = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1
};

const contentStyle = {
  flexGrow: 1,
  maxHeight: 280,
  overflow: "hidden"
};

const textStyle = {
  margin: 15
};

const pStyle = {
  marginBottom: 0
};

const SpeakerCard = ({ name, role, children, ...props }) => {
  const childrenWithProps = React.Children.map(children, child =>
    cloneElement(child, { ...props })
  );
  return (
    <div style={cardStyle}>
      <div style={innerContainerStyle}>
        <div style={contentStyle}>{childrenWithProps}</div>
        <div style={textStyle}>
          <p style={pStyle}>
            <b>{name}</b><br/>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

SpeakerCard.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  children: PropTypes.node
};

export default SpeakerCard;
