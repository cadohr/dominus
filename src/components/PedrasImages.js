import React from "react";

import BrancoBranco from "../assets/pedras/branco-branco.svg";
import AsBranco from "../assets/pedras/as-branco.svg";
import AsAs from "../assets/pedras/as-as.svg";
import DuqueBranco from "../assets/pedras/duque-branco.svg";
import DuqueAs from "../assets/pedras/duque-as.svg";
import DuqueDuque from "../assets/pedras/duque-duque.svg";
import TernoBranco from "../assets/pedras/terno-branco.svg";
import TernoAs from "../assets/pedras/terno-as.svg";
import TernoDuque from "../assets/pedras/terno-duque.svg";
import TernoTerno from "../assets/pedras/terno-terno.svg";
import QuadraBranco from "../assets/pedras/quadra-branco.svg";
import QuadraAs from "../assets/pedras/quadra-as.svg";
import QuadraDuque from "../assets/pedras/quadra-duque.svg";
import QuadraTerno from "../assets/pedras/quadra-terno.svg";
import QuadraQuadra from "../assets/pedras/quadra-quadra.svg";
import QuinaBranco from "../assets/pedras/quina-branco.svg";
import QuinaAs from "../assets/pedras/quina-as.svg";
import QuinaDuque from "../assets/pedras/quina-duque.svg";
import QuinaTerno from "../assets/pedras/quina-terno.svg";
import QuinaQuadra from "../assets/pedras/quina-quadra.svg";
import QuinaQuina from "../assets/pedras/quina-quina.svg";
import SenaBranco from "../assets/pedras/sena-branco.svg";
import SenaAs from "../assets/pedras/sena-as.svg";
import SenaDuque from "../assets/pedras/sena-duque.svg";
import SenaTerno from "../assets/pedras/sena-terno.svg";
import SenaQuadra from "../assets/pedras/sena-quadra.svg";
import SenaQuina from "../assets/pedras/sena-quina.svg";
import SenaSena from "../assets/pedras/sena-sena.svg";

const width = 140;
const height = 95;

export default function PedrasImages(props) {
  switch (props.name) {
    case "BrancoBranco":
      return <BrancoBranco width={width} height={height} />;

    case "AsBranco":
      return <AsBranco width={width} height={height} />;

    case "AsAs":
      return <AsAs width={width} height={height} />;

    case "DuqueBranco":
      return <DuqueBranco width={width} height={height} />;

    case "DuqueAs":
      return <DuqueAs width={width} height={height} />;

    case "DuqueDuque":
      return <DuqueDuque width={width} height={height} />;

    case "TernoBranco":
      return <TernoBranco width={width} height={height} />;

    case "TernoBranco":
      return <TernoBranco width={width} height={height} />;

    case "TernoAs":
      return <TernoAs width={width} height={height} />;

    case "TernoDuque":
      return <TernoDuque width={width} height={height} />;

    case "TernoTerno":
      return <TernoTerno width={width} height={height} />;

    case "QuadraBranco":
      return <QuadraBranco width={width} height={height} />;

    case "QuadraAs":
      return <QuadraAs width={width} height={height} />;

    case "QuadraDuque":
      return <QuadraDuque width={width} height={height} />;

    case "QuadraTerno":
      return <QuadraTerno width={width} height={height} />;

    case "QuadraQuadra":
      return <QuadraQuadra width={width} height={height} />;

    case "QuinaBranco":
      return <QuinaBranco width={width} height={height} />;

    case "QuinaAs":
      return <QuinaAs width={width} height={height} />;

    case "QuinaDuque":
      return <QuinaDuque width={width} height={height} />;

    case "QuinaTerno":
      return <QuinaTerno width={width} height={height} />;

    case "QuinaQuadra":
      return <QuinaQuadra width={width} height={height} />;

    case "QuinaQuina":
      return <QuinaQuina width={width} height={height} />;

    case "SenaBranco":
      return <SenaBranco width={width} height={height} />;

    case "SenaAs":
      return <SenaAs width={width} height={height} />;

    case "SenaDuque":
      return <SenaDuque width={width} height={height} />;

    case "SenaTerno":
      return <SenaTerno width={width} height={height} />;

    case "SenaQuadra":
      return <SenaQuadra width={width} height={height} />;

    case "SenaQuina":
      return <SenaQuina width={width} height={height} />;

    case "SenaSena":
      return <SenaSena width={width} height={height} />;

    default:
      return <AsAs width={width} height={height} />;
  }
}
