// middleware.ts (create this file in your root directory)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  
  console.log('User Agent:', userAgent) // Debug log
  
  // List of specific social media crawlers to block
  const socialCrawlers = [
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'skypeuripreview',
    'discordbot',
    'slackbot',
    'facebookbot',
    'meta-external-agent',
    'instagrambot'
  ]
  
  // More precise detection - only block if user agent contains these specific strings
  const isSocialCrawler = socialCrawlers.some(crawler => 
    userAgent.includes(crawler)
  )
  
  // Additional check: exclude normal browsers
  const isBrowser = userAgent.includes('mozilla') || 
                   userAgent.includes('chrome') || 
                   userAgent.includes('safari') || 
                   userAgent.includes('firefox') || 
                   userAgent.includes('edge')
  
  // Only block if it's a social crawler AND not a regular browser
  if (isSocialCrawler && !isBrowser) {
    console.log('Blocking social crawler:', userAgent) // Debug log
    return new NextResponse('Not Found', { 
      status: 404,
      headers: {
        'x-robots-tag': 'noindex, nofollow, noarchive, nosnippet, noimageindex'
      }
    })
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}