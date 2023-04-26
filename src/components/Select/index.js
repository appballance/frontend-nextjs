import React from "react";

import ReactSelect from "react-select";
import Select from "react-select";

import * as S from "./styles";
const options3 = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export const SelectComponent = ({ label, options, ...restProps }) => (
  <S.SelectContent>
    {label && <S.Label>{label}</S.Label>}
    <ReactSelect options={options} {...restProps} />
  </S.SelectContent>
);
