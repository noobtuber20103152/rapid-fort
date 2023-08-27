"use client";
import "react-pdf/dist/Page/AnnotationLayer.css";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function Display(props: any) {
  let data = props.data;
  return (
    <>
      <div className="my-5 shadow-lg ">
        <object
          className="border "
          width="100%"
          height="600"
          data={data.downloadURL}
          type="application/pdf"
        >
          {" "}
        </object>
      </div>
    </>
  );
}

export default Display;
