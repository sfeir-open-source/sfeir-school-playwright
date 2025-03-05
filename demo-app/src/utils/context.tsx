import type { Context } from 'hono';
import { createContext, useContext, type PropsWithChildren } from 'hono/jsx';

const HonoContext = createContext<Context>(undefined!);

export function ProvideHonoContext({ context, children }: PropsWithChildren<{ context: Context }>) {
  return <HonoContext.Provider value={context}>{children}</HonoContext.Provider>;
}

export function useHonoContext() {
  return useContext(HonoContext);
}
