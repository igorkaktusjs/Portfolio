import { createContext } from "react";
import clients from "./clients";

const ClientsContext = createContext(clients);

export default ClientsContext;