import Users from "../models/Users";
import Events from "../models/Events";

const models = {
    Users,
  Events,
  };
  async function main() {
    for (const i in models) {
      console.log(i);
  
      await models[i].sync({ alter: true });
    }
    process.exit(0);
  }
  
  main().catch(console.error);