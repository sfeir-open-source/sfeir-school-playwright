import { deleteCookie, getCookie, setCookie } from 'hono/cookie';
import { useHonoContext } from './context.js';
import type { Context } from 'hono';

const COOKIE_NAME = 'token';

export interface TokenInfo {
  email: string;
  firstname: string;
  lastname: string;
  expire: Date;
}

function encodeToken(tokenInfo: TokenInfo): string {
  return Buffer.from(JSON.stringify({ ...tokenInfo, expire: tokenInfo.expire.toISOString() })).toString('base64');
}
function decodeToken(token: string): TokenInfo {
  const parsed = JSON.parse(Buffer.from(token, 'base64').toString('utf-8'));
  return { ...parsed, expire: new Date(parsed.expire) };
}

export function setAuthCookie(context: Context, email: string, firstname: string, lastname: string) {
  const expire = new Date();
  if (expire.getMinutes() < 50) {
    expire.setMinutes(expire.getMinutes() + 10);
  } else {
    expire.setHours(expire.getHours() + 1);
    expire.setMinutes(expire.getMinutes() + 10 - 60);
  }
  setCookie(context, COOKIE_NAME, encodeToken({ email, firstname, lastname, expire }));
}

export function useAuthInfo() {
  const context = useHonoContext();
  const authCookie = getCookie(context, COOKIE_NAME);
  if (authCookie) {
    const tokenInfo = decodeToken(authCookie);
    if (tokenInfo.expire.getTime() > Date.now()) {
      return tokenInfo;
    } else {
      deleteCookie(context, COOKIE_NAME);
      return undefined;
    }
  } else {
    return undefined;
  }
}
