import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RateLimiter } from './lib/rate-limiter'; // adjust path as needed


// Initialize rate limiter
const rateLimiter = new RateLimiter({
  windowSize: 60 * 1000,  // 60 seconds in ms
  maxRequests: 3,
});

export function middleware(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 'unknown';

  if (rateLimiter.limit(ip)) {
    return new NextResponse('Too many requests', { status: 429 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
