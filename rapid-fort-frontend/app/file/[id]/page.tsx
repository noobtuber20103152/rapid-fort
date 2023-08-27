import baseUrl from "@/apiRoute";
import Display from "@/components/display";
import axios from "axios";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
export default async function Home({ params }: any) {
  const { id } = params;
  let data = (await axios.get(`${baseUrl}/files/${id}`))?.data?.file;
  var myDate = new Date(data?.timestamp?.seconds * 1000);
  var formatedTime = myDate?.toJSON();
  return (
    <>
      <div className="container md:px-0  px-2 mx-auto mt-6">
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col-6" className="px-6 py-3">
                  Properties
                </th>
                <th scope="col-6" className="px-6 py-3">
                  value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  File Name
                </th>
                <td className="px-6 py-4">{data?.originalname}</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  File Size
                </th>
                <td className="px-6 py-4">{data?.size} Bytes</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Upload Date
                </th>
                <td className="px-6 py-4">{formatedTime?.slice(0, 10)}</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  File Type
                </th>
                <td className="px-6 py-4">{data?.type}</td>
              </tr>
              <tr className="bg-white border-b">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  File Link
                </th>
                <td className="px-6 py-4">
                  <a
                    target="_blank"
                    href={data?.downloadURL}
                    className="text-blue-600"
                  >
                    Link
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <Display data={data}/>
      </div>
    </>
  );
}
