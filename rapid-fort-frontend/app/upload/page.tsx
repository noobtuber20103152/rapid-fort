"use client";
import React, { useState } from "react";
import axios from "axios";
import baseUrl from "@/apiRoute";

function Page() {
  const [file, setFile] = useState<any>();
  const upload = () => {
    const formData = new FormData();
    formData.append("file", file);
    axios
      .post(`${baseUrl}/upload`, formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((er) => console.log(er));
  };
  return (
    <div>
      <input type="file" onChange={(e: any) => setFile(e.target.files[0])} />
      <button type="button" onClick={upload}>
        Upload
      </button>
    </div>
  );
}

export default Page;
