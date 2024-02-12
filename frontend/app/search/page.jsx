"use client";

import SearchResultCard from "@components/SearchResultCard";
import { Input } from "@components/ui/input";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

function PDFTextSearchForm() {
  const [searchText, setSearchText] = useState("");
  const [file, setFile] = useState(null);

  const {
    mutate: postFile,
    data,
    isPending,
  } = useMutation({
    mutationFn: async ({ file, text }) => searchTextInPDF(text, file),
  });
  const handleFileChange = (event) => {
    setFile([...event.target.files]); // Set an array of files
  };
  // const handleFileChange = (event) => {
  //   setFile(event.target.files[0] || null);
  // };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postFile({ text: searchText, file }); // 'file' is now an array
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 mt-10">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold">PDF Text Search</h1>
          <p className="text-lg text-gray-600">
            Upload your PDF file and enter the text you want to search for.
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Search Text
          </label>
          <Input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter text to search"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload File
          </label>
          <Input
            type="file"
            multiple
            onChange={handleFileChange}
            required
            className="block w-full file:px-3 file:py-1 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-20 relative">
        {isPending && (
          <>
            <div
              className="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-blue-500 border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
              role="status"
            >
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                Loading...
              </span>
            </div>
          </>
        )}
        {data && (
          <h1 className="text-xl font-bold text-blue-600 mb-10">
            Totol result:{data && data.length}
          </h1>
        )}

        {Array.isArray(data) ? (
          data.map((result) => (
            <SearchResultCard
              key={result.instances}
              fileName={result.file_name}
              pageNumber={result.page_number}
              instances={result.instances}
              found={result.found}
            />
          ))
        ) : (
          <p className="text-2xl font-bold text-gray-300 text-center">
            {data && data.detail}
          </p>
        )}
      </div>
    </div>
  );
}
async function searchTextInPDF(searchText, files) {
  const formData = new FormData();
  formData.append("search_text", searchText);

  // Append each file to the form data
  for (let i = 0; i < files.length; i++) {
    formData.append(`files`, files[i], files[i].name);
  }

  try {
    const response = await axios.post(
      "https://pdf-search-hbmz.onrender.com/api/service/search-text",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data.result;
  } catch (error) {
    return error.response.data;
  }
}

// async function searchTextInPDF(searchText, filePath) {
//   const formData = new FormData();
//   formData.append("search_text", searchText);

//   formData.append("files", filePath, filePath.name);

//   try {
//     const response = await axios.post(
//       "https://pdf-search-hbmz.onrender.com/api/service/search-text",
//       formData,
//       {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     return response.data.result;
//   } catch (error) {
//     return error.response.data;
//   }
// }

export default PDFTextSearchForm;
