import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Controller from './UserAuth/Controller';
import { AuthProvider } from "./UserAuth/AuthContext";


createRoot(document.getElementById("root")).render(
       <StrictMode>
        <AuthProvider>
        <Controller>
            
        </Controller>
        </AuthProvider>
        </StrictMode>
);