"use client";
import React from "react";
import Moment, { type MomentProps } from "react-moment";

const Date: React.FC<MomentProps> = (props) => {
  return <Moment {...props} />;
};

export default Date;
