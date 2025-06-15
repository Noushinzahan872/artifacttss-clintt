




// AddArtifactForm.jsx
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import { Helmet } from 'react-helmet';

const AddArtifactForm = () => {
  const { user } = useContext(AuthContext);

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
//   const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setForm(prev => ({
        ...prev,
        adderName: user.displayName || '',
        adderEmail: user.email || ''
      }));
    }
  }, [user]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setLoading(true);

    const payload = { ...form, likes: 0 };
    
  console.log('Submitting artifact payload:', payload);

    fetch('http://localhost:3000/artifacts', {
      method: 'POST',
      headers:
       { 'content-type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: 'Artifact added successfully!',
            icon: 'success',
            draggable: true
          });
          setForm(prev => ({
            ...prev,
            name: '',
            imageUrl: '',
            type: 'Tools',
            context: '',
            description: '',
            createdAt: '',
            discoveredAt: '',
            discoveredBy: '',
            presentLocation: ''
          }));
        } else {
          Swal.fire({
            title: 'Something went wrong',
            icon: 'error',
            draggable: true
          });
        }
      })
      .catch(err => {
        console.error('Fetch error:', err);
        Swal.fire({
          title: 'Network error',
          text: 'Unable to add artifact.',
          icon: 'error',
          draggable: true
        });
      })
    //   .finally(() => setLoading(false));
  };

  if (!user) return <p>Loading user…</p>;

  return (
    <>
    <Helmet>
      <title>Add Artifacts</title>
    </Helmet>
    <div className="min-h-screen flex items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className=" shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
      >
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-lg">
          Add Artifacts
        </h2>

        {/* Name & Image URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="">Artifact Name</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="e.g. Rosetta Stone"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="">Image URL</span>
            <input
              name="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={handleChange}
              required
              placeholder="https://example.com/artifact.jpg"
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Type */}
        <label className="block">
          <span className="">Type</span>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
          >
            {['Tools','Weapons','Documents','Writings','Jelwery','Other'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </label>

        {/* Context & Description */}
        <label className="block">
          <span className="">Historical Context</span>
          <textarea
            name="context"
            rows="3"
            value={form.context}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
          />
        </label>
        <label className="block">
          <span className="">Short Description</span>
          <textarea
            name="description"
            rows="2"
            value={form.description}
            onChange={handleChange}
            className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
          />
        </label>

        {/* CreatedAt & DiscoveredAt */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="">Created At</span>
            <input
              name="createdAt"
              placeholder="e.g. 100 BC"
              value={form.createdAt}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="">Discovered At</span>
            <input
              name="discoveredAt"
              placeholder="e.g. 1799"
              value={form.discoveredAt}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Discovered By & Present Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="">Discovered By</span>
            <input
              name="discoveredBy"
              value={form.discoveredBy}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
          <label className="block">
            <span className="">Present Location</span>
            <input
              name="presentLocation"
              value={form.presentLocation}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
            />
          </label>
        </div>

        {/* Read‑only User Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label className="block">
            <span className="">Your Name</span>
            <input
              name="adderName"
              type="text"
              value={form.adderName}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </label>
          <label className="block">
            <span className="">Your Email</span>
            <input
              name="adderEmail"
              type="email"
              value={form.adderEmail}
              readOnly
              className="mt-1 w-full px-4 py-2 border rounded-md"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-600 focus:ring-2 focus:ring-pink-600"
        >
          Add Artifact
        </button>
      </form>
    </div>
    </>
  );
};

export default AddArtifactForm;












// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../contexts/AuthProvider';


// const AddArtifactForm = () => {
//   const { user } = useContext(AuthContext);

//   const [form, setForm] = useState({
//     name: '',
//     imageUrl: '',
//     type: 'Tools',
//     context: '',
//     description: '',
//     createdAt: '',
//     discoveredAt: '',
//     discoveredBy: '',
//     presentLocation: '',
//     adderName: '',
//     adderEmail: ''
//   });

//   useEffect(() => {
//     if (user) {
//       setForm(prev => ({
//         ...prev,
//         adderName: user.displayName || '',
//         adderEmail: user.email || ''
//       }));
//     }
//   }, [user]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log('Form submission:', form);
//     // এখানে পরে fetch/POST যুক্ত করতে পারবেন
//   };

//   if (!user) return <p>Loading user…</p>;

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-gray-800">Add Artifact</h2>

//         {/* Artifact Name & Image URL */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <label className="block">
//             <span className="text-gray-700">Artifact Name</span>
//             <input
//               name="name"
//               value={form.name}
//               onChange={handleChange}
//               required
//               placeholder="e.g. Rosetta Stone"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Image URL</span>
//             <input
//               name="imageUrl"
//               type="url"
//               value={form.imageUrl}
//               onChange={handleChange}
//               required
//               placeholder="https://example.com/artifact.jpg"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//         </div>

//         {/* Type Dropdown */}
//         <label className="block">
//           <span className="text-gray-700">Type</span>
//           <select
//             name="type"
//             value={form.type}
//             onChange={handleChange}
//             className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//           >
//             {['Tools', 'Weapons', 'Documents', 'Writings', 'Other'].map(t => (
//               <option key={t} value={t}>{t}</option>
//             ))}
//           </select>
//         </label>

//         {/* Context & Description */}
//         <label className="block">
//           <span className="text-gray-700">Historical Context</span>
//           <textarea
//             name="context"
//             rows="3"
//             value={form.context}
//             onChange={handleChange}
//             className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//           />
//         </label>
//         <label className="block">
//           <span className="text-gray-700">Short Description</span>
//           <textarea
//             name="description"
//             rows="2"
//             value={form.description}
//             onChange={handleChange}
//             className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//           />
//         </label>

//         {/* CreatedAt & DiscoveredAt */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <label className="block">
//             <span className="text-gray-700">Created At</span>
//             <input
//               name="createdAt"
//               value={form.createdAt}
//               onChange={handleChange}
//               placeholder="e.g. 100 BC"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Discovered At</span>
//             <input
//               name="discoveredAt"
//               value={form.discoveredAt}
//               onChange={handleChange}
//               placeholder="e.g. 1799"
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//         </div>

//         {/* Discovered By & Present Location */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <label className="block">
//             <span className="text-gray-700">Discovered By</span>
//             <input
//               name="discoveredBy"
//               value={form.discoveredBy}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Present Location</span>
//             <input
//               name="presentLocation"
//               value={form.presentLocation}
//               onChange={handleChange}
//               className="mt-1 w-full px-4 py-2 border rounded-md focus:ring-indigo-500"
//             />
//           </label>
//         </div>

//         {/* Read‑only User Info */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//           <label className="block">
//             <span className="text-gray-700">Your Name</span>
//             <input
//               type="text"
//               name="adderName"
//               value={form.adderName}
//               readOnly
//               className="mt-1 w-full px-4 py-2 border bg-gray-100 rounded-md"
//             />
//           </label>
//           <label className="block">
//             <span className="text-gray-700">Your Email</span>
//             <input
//               type="email"
//               name="adderEmail"
//               value={form.adderEmail}
//               readOnly
//               className="mt-1 w-full px-4 py-2 border bg-gray-100 rounded-md"
//             />
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-pink-600 text-white font-semibold rounded-md hover:bg-pink-600 focus:ring-2 focus:ring-pink-600"
//         >
//           Add Artifact
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddArtifactForm;








