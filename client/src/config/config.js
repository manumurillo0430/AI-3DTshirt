const config = {
  development: {
    backendUrl: "http://localhost:8080/dalle_image",
  },
  production: {
    backendUrl: "https://artai-3dtshirt-server.onrender.com/dalle_image",
  },
};

const env = process.env.NODE_ENV || "development";
const configEnv = config[env];

export default configEnv;
