import React from "react";
import { Document, Page, Text, View, Image } from "@react-pdf/renderer";
import "./DocuPDF.css";

const DocuPDF = () => {
  const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
  return (
    <Document>
      <Page
        size="A4"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Image
            src="/logo.jpg"
            alt="random image"
            style={{
              width: "50%",
            }}
          />
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
            }}
          >
            CAMILLE HUDSON ROBINSON
          </Text>
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
              padding: "10px",
            }}
          >
            Nacionalidad: Peruana
          </Text>
          <Text
            style={{
              color: "gray",
              fontStyle: "italic",
              fontSize: "10px",
              padding: "10px",
            }}
          >
            Resumen{" "}
          </Text>

          <Text style={{ textAlign: "justify", marginTop: "22px" }}>
            Psicóloga de la Universidad de Lima, con experiencia laboral en el
            área organizacional, desempeñando cargos relacionados a la
            capacitación y evaluación del personal de empresas mineras, y al
            desarrollo de proyectos para promover la seguridad y salud
            ocupacional.
          </Text>
        </View>
      </Page>
    </Document>
  );
};

export default DocuPDF;
