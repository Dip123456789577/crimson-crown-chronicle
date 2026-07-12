/// <reference types="vite/client" />

declare module "@tanstack/react-start/plugin/vite" {
  import { TanStackStartViteInputConfig } from "@tanstack/start-plugin-core/vite";
  import { PluginOption } from "vite";
  export function tanstackStart(
    options?: TanStackStartViteInputConfig & {
      rsc?: {
        enabled?: boolean;
      };
    },
  ): Array<PluginOption>;
}
