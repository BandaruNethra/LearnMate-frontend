export const nextjsFullstack = {
  id: "nextjs-fullstack",
  title: "Next.js 15 & The Full-Stack Frontier",
  modules: [
    {
      title: "Module 1: Rendering Orchestration & The Edge Runtime",
      lessons: [
        {
          title: "Static, Dynamic, and Streaming: The Hydra of Rendering",
          content: `
            <p>Next.js 15 is no longer a "frontend" framework; it is an <strong>Isomorphic Orchestrator</strong>. We break down the four pillars of rendering: <strong>Static Site Generation (SSG)</strong>, <strong>Server-Side Rendering (SSR)</strong>, <strong>Incremental Static Regeneration (ISR)</strong>, and the new <strong>Partial Prerendering (PPR)</strong>. You will learn how the Next.js server decides between the <strong>Node.js Runtime</strong> (for heavy processing) and the <strong>Edge Runtime</strong> (for ultra-low latency). We will analyze the <code>cache: 'force-cache'</code> vs <code>revalidate</code> headers and how they interact with the Global CDN to serve content at the speed of light.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-blue-400 border border-slate-800">
              // Controlling the Rendering Behavior in Next.js 15<br/>
              export const dynamic = 'force-dynamic'; // Opt-out of static<br/>
              export const revalidate = 3600; // ISR: Revalidate every hour<br/><br/>
              async function getData() {<br/>
              &nbsp;&nbsp;const res = await fetch('https://api.example.com', { next: { tags: ['products'] } });<br/>
              &nbsp;&nbsp;return res.json();<br/>
              }
            </div>
          `
        },
        {
          title: "The App Router & React Server Components (RSC)",
          content: `
            <p>We deconstruct the <strong>RSC Payload</strong>. Unlike traditional hydration where the browser downloads the entire JS bundle, RSCs allow the server to stream a serialized UI tree. You will learn how to handle the <strong>Client-Server Serialization Gap</strong>: why you cannot pass functions as props from a Server Component to a Client Component. We'll explore <strong>Slot and Parallel Routing</strong> (<code>@folder</code>) and <strong>Intercepting Routes</strong> (<code>(..)folder</code>), enabling complex Instagram-style modals that maintain a unique URL and shared state.</p>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-50">
              [IMAGE: Diagram of the 'Diamond Problem' in RSC: Shared state between bifurcated Server/Client trees]
            </div>
          `
        }
      ]
    },
    {
      title: "Module 2: Distributed State & Server Actions",
      lessons: [
        {
          title: "Server Actions: The Death of the API Layer",
          content: `
            <p>Next.js 15 Server Actions are <strong>End-to-End Type-Safe RPCs</strong>. We move away from <code>axios</code> and <code>fetch('/api/...')</code>. You will learn to use the <code>'use server'</code> directive at the function level. We'll explore <strong>Optimistic Updates</strong>: using the <code>useOptimistic</code> hook to update the UI instantly (at 0ms latency) while the server processes the mutation in the background. We will also master <strong>Revalidation</strong>—using <code>revalidatePath</code> and <code>revalidateTag</code> to purge the Data Cache and trigger a silent background update of the UI.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-green-400 border border-slate-800">
              // Server Action with Database Transaction<br/>
              export async function createInvoice(formData: FormData) {<br/>
              &nbsp;&nbsp;'use server';<br/>
              &nbsp;&nbsp;const rawFormData = Object.fromEntries(formData);<br/>
              &nbsp;&nbsp;await db.transaction(async (tx) => {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;await tx.insert(invoices).values(rawFormData);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;await tx.update(accounts).set({ balance: ... });<br/>
              &nbsp;&nbsp;});<br/>
              &nbsp;&nbsp;revalidatePath('/dashboard/invoices');<br/>
              }
            </div>
          `
        },
        {
          title: "Form States & Error Boundaries",
          content: `
            <p>Handling "Loading" and "Error" states in a full-stack environment is non-trivial. We introduce <code>useFormState</code> and <code>useFormStatus</code>. You will learn to build a <strong>Resilient Form Component</strong> that handles server-side validation errors (via Zod), network timeouts, and pending states without a single line of <code>useState</code>. We'll also cover <strong>Nested Error Boundaries</strong>—how the <code>error.js</code> file provides a "safety net" for the UI while allowing users to "Try Again" without refreshing the page.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Database Architectures for the Edge",
      lessons: [
        {
          title: "Drizzle ORM & TypeScript-First Schema",
          content: `
            <p>In the Next.js ecosystem, <strong>Drizzle ORM</strong> has overtaken Prisma for performance-critical apps due to its <strong>zero-overhead</strong> and SQL-like syntax. We'll design a <strong>Relational Schema</strong> for a multi-tenant SaaS. You will learn about <strong>Prepared Statements</strong> and why they are essential for preventing SQL injection in a Server Action environment. We'll also explore the <strong>Drizzle Kit</strong> for managing migrations in a serverless-friendly way.</p>
             <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-orange-400 border border-slate-800">
              // Drizzle Schema for Next.js<br/>
              export const users = pgTable('users', {<br/>
              &nbsp;&nbsp;id: serial('id').primaryKey(),<br/>
              &nbsp;&nbsp;email: varchar('email', { length: 255 }).unique().notNull(),<br/>
              &nbsp;&nbsp;createdAt: timestamp('created_at').defaultNow(),<br/>
              });
            </div>
          `
        },
        {
          title: "Connection Pooling & Serverless Databases",
          content: `
            <p>Serverless functions (AWS Lambda/Vercel Functions) scale horizontally, which can quickly exhaust database connection limits. We explore <strong>Connection Pooling</strong> using <strong>PgBouncer</strong> or <strong>Neon's HTTP Driver</strong>. You will learn the "Zombie Connection" problem and how to architect your Next.js app to use a single persistent pool in the Node.js runtime while using ephemeral HTTP connections at the Edge.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Authentication & Security Patterns",
      lessons: [
        {
          title: "NextAuth (Auth.js) & The Session Provider",
          content: `
            <p>We implement a robust <strong>OAuth2 and Passwordless</strong> system using <strong>Auth.js</strong>. You will learn the <strong>JWT Strategy</strong> vs. the <strong>Database Strategy</strong>. We'll explore <strong>Callback Logic</strong>: how to augment the session object with custom user roles (Admin/Member) and how to protect your Server Actions using the <code>auth()</code> check to ensure that no mutation is ever executed without a valid session token.</p>
             <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-900">
              [IMAGE: The Auth.js Flow: Provider -> Callback -> JWT Signing -> Set-Cookie -> Middleware Check]
            </div>
          `
        },
        {
          title: "Middleware & Route Protection",
          content: `
            <p>Next.js <code>middleware.ts</code> runs before every request, even for static assets. We master <strong>Edge-compatible Middleware</strong>. You will learn to write "Matcher" logic to protect entire segments of your app (e.g., <code>/admin/*</code>). We'll also cover <strong>Bot Protection</strong> and <strong>Geolocation-based Redirects</strong>, showing how to customize the user's experience based on their <code>x-vercel-ip-country</code> header.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Real-time & Background Processing",
      lessons: [
        {
          title: "Streaming UI with AI SDK",
          content: `
            <p>Next.js is the premier platform for <strong>Generative AI</strong>. We introduce the <strong>Vercel AI SDK</strong>. You will learn to stream text responses from OpenAI/Anthropic directly into your UI using <strong>Server-Sent Events (SSE)</strong>. We'll implement <code>useChat</code>, covering the architecture of "streaming tokens" where the UI updates as each word is generated, providing that premium ChatGPT-like experience.</p>
          `
        },
        {
          title: "Task Queues & Inngest",
          content: `
            <p>Serverless functions have a maximum execution time (usually 10-60s). What about long-running tasks like video processing or bulk emails? We explore <strong>Inngest</strong>—a serverless queue that uses <strong>Durable Functions</strong>. You will learn how to trigger a background job from a Server Action and track its progress across multiple retries, all while staying within the serverless resource limits.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Final Lab - Building a Global SaaS",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-slate-900 via-zinc-900 to-black rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Globe size={60} className="text-blue-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">Full-Stack Systems Architect</h2>
              <p class="text-zinc-400 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have crossed the finish line. From RSC payload serialization to Edge-native database pooling 
                and distributed authentication, you now hold the keys to the modern web.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=nextjs-fullstack" class="group bg-blue-600 text-white px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white hover:text-black transition-all shadow-2xl shadow-blue-500/20">
                    ENTER THE FORGE
                  </a>
                  <div className="text-left border-l border-white/20 pl-6 text-white">
                    <p className="font-bold uppercase text-xs tracking-widest opacity-60">Architect Level</p>
                    <p className="font-black text-lg">Senior Full-Stack Engineer</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};