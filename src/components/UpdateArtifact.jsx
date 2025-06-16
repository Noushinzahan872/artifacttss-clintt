import React, { useState, useEffect, useContext } from 'react';

import Swal from 'sweetalert2';
import { AuthContext } from '../contexts/AuthProvider';
import { useNavigate, useParams } from 'react-router';
import { Helmet } from 'react-helmet';


const UpdateArtifact = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const navigate = useNavigate();


  const [form, setForm] = useState({
    name: '',
    imageUrl: '',
    type: 'Tools',
    context: '',
    description: '',
    createdAt: '',
    discoveredAt: '',
    discoveredBy: '',
    presentLocation: '',
    adderName: '',
    adderEmail: ''
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing artifact by ID
  useEffect(() => {
    fetch(`https://artifacts-server-iota.vercel.app/artifacts/${id}`)
      .then(res => res.json())
      .then(data => {
        setForm(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load artifact:', err);
        setLoading(false);
        Swal.fire('Error', 'Unable to load artifact data', 'error');
      });
  }, [id]);


  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        userName: user.displayName || '',
        userEmail: user.email || ''
      }));
    }
  }, [user]);



  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    console.log("Submitting update with data:", form);

    fetch(`https://artifacts-server-iota.vercel.app/artifacts/${id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${user.accessToken}`
      },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire('Success', 'Artifact updated successfully!', 'success');
          navigate('/allArtifacts');
        } else {
          Swal.fire('Notice', 'No changes were made.', 'info');
        }
      })
      .catch(err => {
        console.error('Update failed:', err);
        Swal.fire('Error', 'Something went wrong while updating', 'error');
      });
  };

  if (loading) return <p className="text-center mt-10"><span className="loading loading-dots loading-xl"></span></p>;

  return (
    <>
      <Helmet>
        <title>Update Artifact</title>
      </Helmet>
      <div className="min-h-screen flex items-center justify-center p-6">
        <form
          onSubmit={handleSubmit}
          className=" shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
            Update Artifacts
          </h2>

          {/* Reuse the same form fields as in AddArtifactForm */}
          {/* Name & Image URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-500">Artifact Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-500">Image URL</span>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                required
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
          </div>

          {/* Type Dropdown */}
          <label className="block">
            <span className="text-gray-500">Type</span>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md"
            >
              {['Tools', 'Weapons', 'Documents', 'Writings', 'Other'].map(t => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </label>

          {/* Context & Description */}
          <label className="block">
            <span className="text-gray-500">Historical Context</span>
            <textarea
              name="context"
              rows="3"
              value={form.context}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </label>
          <label className="block">
            <span className="text-gray-500">Short Description</span>
            <textarea
              name="description"
              rows="2"
              value={form.description}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </label>

          {/* Created At & Discovered At */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-500">Created At</span>
              <input
                name="createdAt"
                value={form.createdAt}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-500">Discovered At</span>
              <input
                name="discoveredAt"
                value={form.discoveredAt}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
          </div>

          {/* Discovered By & Present Location */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-500">Discovered By</span>
              <input
                name="discoveredBy"
                value={form.discoveredBy}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-500">Present Location</span>
              <input
                name="presentLocation"
                value={form.presentLocation}
                onChange={handleChange}
                className="mt-1 w-full px-4 py-2 border rounded-md"
              />
            </label>
          </div>

          {/* User Info (readonly) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <label className="block">
              <span className="text-gray-500">Your Name</span>
              <input
                name="adderName"
                value={form.adderName}
                readOnly
                className="mt-1 w-full px-4 py-2 border  rounded-md"
              />
            </label>
            <label className="block">
              <span className="text-gray-500">Your Email</span>
              <input
                name="adderEmail"
                value={form.adderEmail}
                readOnly
                className="mt-1 w-full px-4 py-2 border  rounded-md"
              />
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-700"
          >
            Update Artifact
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateArtifact;
