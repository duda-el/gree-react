// import React from "react";

// const ModelNameFilter = ({ products, onModelChange }) => {
//   // Extract unique model names from products
//   const models = products.reduce((acc, product) => {
//     if (!acc.includes(product.model_name)) {
//       acc.push(product.model_name);
//     }
//     return acc;
//   }, []);

//   return (
//     <div style={{ fontFamily: "tkt" }}>
//       <h3 className="text-lg font-bold mb-2">მოდელის ფილტრი</h3>
//       {/* Checkbox list for selecting models */}
//       {models.map((model) => (
//         <div className="mb-2" key={model}>
//           <label className="flex items-center">
//             <input
//               type="checkbox"
//               className="mr-2"
//               onChange={() => onModelChange(model)}
//             />
//             {model}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ModelNameFilter;
