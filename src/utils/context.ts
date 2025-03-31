import { createContext } from "react";
import {TwitterContextType} from "./types";


export const TwitterContext = createContext<TwitterContextType | null>(null);