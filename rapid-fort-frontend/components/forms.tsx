"use client";
import Card from "@/components/card";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import Badge from "./badge";
import baseUrl from "@/apiRoute";
export default function Form() {
  const [file, setFile] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const upload = () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("filename", file);
    setLoading(true);
    axios
      .post(`${baseUrl}/upload`, formData)
      .then((res) => {
        toast.success("File upload successfully!!");
        console.log(res);
        setFile(null);
        setData(res.data);
        console.log(data);
        console.log(data?.filename);
        setLoading(false);
      })
      .catch((er) => console.log(er));
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="container mx-auto my-10 md:px-0 px-4">
        <h1 className="text-3xl font-semibold my-4">
          Upload your file and get details
        </h1>
        <div className=" items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 "
          >
            {file ? (
              <>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="checkmark"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 52 52"
                  >
                    <circle
                      className="checkmark__circle"
                      cx="26"
                      cy="26"
                      r="25"
                      fill="none"
                    />
                    <path
                      className="checkmark__check"
                      fill="none"
                      d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    />
                  </svg>
                  <p className="mb-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">
                      click on submit button to get information about file
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              </>
            )}
            {!file && (
              <input
                name="profileImage"
                onChange={(e: any) => setFile(e.target.files[0])}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            )}
          </label>
          {!loading && (
            <button
              onClick={upload}
              type="submit"
              className="bg-transparent mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Upload
            </button>
          )}
          {loading && (
            <button
              type="button"
              className="bg-transparent mt-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 flex-row items-center justify-center hover:border-transparent rounded"
              disabled
            >
              <AiOutlineLoading className="animate-spin inline mr-2 " />
              Uploading...
            </button>
          )}
        </div>
      </div>

      <div className="container mx-auto my-10 md:px-0 px-4">
        {loading && (
          <div className="border border-blue-300 shadow rounded-md p-4 w-full  mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* {data?.filename} */}
      <div className="container mx-auto">
        <h1 className="text-2xl font-medium">
          Previous uploaded files, click to get details.
        </h1>
        {data?.originalname && (
          <>
            {" "}
            <Link
              href={`/file/${data?.id}`}
              className="inline-flex my-2 items-center justify-center p-5 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 w-full hover:bg-gray-100 "
            >
              <span className="w-full">
                {data?.originalname} <Badge />{" "}
              </span>
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
            </Link>{" "}
          </>
        )}
      </div>
    </>
  );
}
