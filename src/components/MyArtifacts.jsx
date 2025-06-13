

import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaInfoCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router";
// import { Helmet } from "react-helmet"; // optional

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);

  // Fetch artifacts for logged-in user
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/artifact/${user.email}`)

        .then((res) => res.json())
        .then((data) => setArtifacts(data));
    }
  }, [user]);

  //  Delete artifact
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action is permanent and cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/artifacts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setArtifacts((prev) => prev.filter((a) => a._id !== id));
              Swal.fire("Deleted!", "Your artifact has been deleted.", "success");
            }
          });
      }
    });
  };

  //  Empty state
  if (artifacts.length === 0) {
    return (
      <>
        {/* <Helmet>
          <title>My Artifacts</title>
        </Helmet> */}
        <p className="text-center w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-12 text-lg">
          You haven’t added any artifacts yet. Start by creating one to showcase your hobbies!
        </p>
        
      </>
    );
  }

  return (
    <>
      {/* <Helmet>
        <title>My Artifacts</title>
      </Helmet> */}

      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 overflow-x-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          My Artifacts
        </h2>

        <div className="shadow-2xl rounded-2xl overflow-hidden ring-1 ring-gray-100 dark:ring-gray-800">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gradient-to-r from-purple-200 via-pink-200 to-red-200 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
              <tr>
                {[
                  "No.",
                  "Artifact Name",
                  "Type",
                  "createdAt",
                  "discoveredAt",
                  "discoveredBy",
                  "Photo",
                  "Action",
                ].map((title) => (
                  <th
                    key={title}
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wider whitespace-nowrap"
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className=" dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {artifacts.map((artifact, index) => (
                <tr
                  key={artifact._id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                  <td className="px-6 py-4 font-medium whitespace-nowrap">
                    {artifact.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{artifact.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{artifact.createdAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{artifact.discoveredAt}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{artifact.discoveredBy}</td>
                  <td className="px-6 py-4">
                    {artifact.imageUrl ? (
                      <img
                        src={artifact.imageUrl}
                        alt={artifact.artifactName}
                        className="w-14 h-14 object-cover rounded-lg shadow-md"
                      />
                    ) : (
                      <span className="text-sm text-gray-400 italic">No image</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center space-x-4">
                      <Link
                        to={`/details-artifact/${artifact._id}`}
                        aria-label="See more info"
                      >
                        <FaInfoCircle className="text-indigo-500 hover:text-indigo-700" size={18} />
                      </Link>

                      <Link
                        to={`/updateArtifact/${artifact._id}`}
                        aria-label="Edit Artifact"
                      >
                        <FaEdit className="text-green-500 hover:text-green-700" size={18} />
                      </Link>

                      <button
                        onClick={() => handleDelete(artifact._id)}
                        aria-label="Delete Artifact"
                      >
                        <MdDelete className="text-red-500 hover:text-red-700" size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
};

export default MyArtifacts;
