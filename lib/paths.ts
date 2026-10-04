export function ackPath(pathname = '/') {
  return pathname.startsWith('/') ? pathname : `/${pathname}`;
}
