"use client"

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const client = new QueryClient();

const Provdiers = ({ children }: PropsWithChildren<{}> ) => { 
  return <QueryClientProvider client={client}> {children} </QueryClientProvider>
}
export default Provdiers;