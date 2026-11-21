import { NextResponse, type NextRequest } from "next/server";

/**
 * Links divulgados como /VSL (ou qualquer variação de maiúsculas) caem na página /vsl.
 * Fica aqui e não em `redirects` do next.config porque lá a comparação ignora maiúsculas e entra em loop.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathname.toLowerCase() === "/vsl" && pathname !== "/vsl") {
    const url = request.nextUrl.clone();
    url.pathname = "/vsl";
    return NextResponse.redirect(url, 308);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/VSL", "/Vsl", "/vsl"],
};
