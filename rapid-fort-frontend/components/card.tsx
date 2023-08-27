import React from "react";

function Card(props: any) {
  const data = props.data;

  return (
    <>
      <h1>{data?.originalname}</h1>
    </>
  );
}

export default Card;
