// middleware.ts (create this file in your root directory)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  
  // List of social media crawlers to block or return minimal content
  const socialCrawlers = [
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'skypeuripreview',
    'discordbot',
    'slackbot',
    'applebot'
  ]
  
  // Check if request is from a social media crawler
  const isSocialCrawler = socialCrawlers.some(crawler => 
    userAgent.includes(crawler)
  )
  
  if (isSocialCrawler) {
    // Option 1: Return 404 to block crawlers completely
    // return new NextResponse('Not Found', { status: 404 })
    
    // Option 2: Return minimal HTML without metadata
    const minimalHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Youssef Elsabawy</title>
          <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        </head>
        <body>
          <p>Content not available for preview</p>
        </body>
      </html>
    `
    
    return new NextResponse(minimalHTML, {
      status: 200,
      headers: {
        'content-type': 'text/html',
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