import baseUrl from "@/apiRoute";
import axios from "axios";
import Link from "next/link";
import React from "react";

async function File() {
  let data: any = await fetch(`${baseUrl}/files`, { next: { revalidate: 1 } });
  data = await data.json();
  console.log(data);
  data = data?.files;
  return (
    <>
      <div className="container mx-auto">
        {data?.map((file: any) => {
          return (
            <>
              <Link
                href={`/file/${file?.id}`}
                className="inline-flex my-2 items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 w-full hover:bg-gray-100 "
              >
                <span className="w-full">{file?.originalname}</span>
                <svg
                  className="w-4 h-4 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
}

export default File;
