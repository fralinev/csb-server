const allowedOrigins = require("./allowedOrigins");

// const corsOptions = {
//   origin: (origin: string, callback: any) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback(new Error("not allowed by cors"));
//     }
//   },
// };
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

module.exports = corsOptions;
export {};
