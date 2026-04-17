export const reactMastery = {
  id: "react-mastery",
  title: "React Mastery: Advanced Systems Architecture",
  modules: [
    {
      title: "Module 1: The Fiber Engine & Concurrent Rendering",
      lessons: [
        {
          title: "The Fiber Data Structure: Linked List Reconciler",
          content: `
            <p>React 18+ is powered by **Fiber**, a virtual stack frame designed for concurrency. Unlike a standard recursive tree traversal, Fiber treats every component as a "Unit of Work" in a singly-linked list. This allows the <strong>Work Loop</strong> to yield to the main thread every 5ms, ensuring high-priority tasks (like user typing) aren't blocked by massive UI renders. We will deconstruct the <code>FiberNode</code> object, specifically focusing on the <code>return</code>, <code>child</code>, and <code>sibling</code> pointers that allow React to traverse the tree without using the call stack.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-blue-300 border border-slate-800">
              // The internal Fiber unit of work<br/>
              interface Fiber {<br/>
              &nbsp;&nbsp;tag: WorkTag; // Type of component<br/>
              &nbsp;&nbsp;key: null | string;<br/>
              &nbsp;&nbsp;stateNode: any; // The actual DOM element<br/>
              &nbsp;&nbsp;return: Fiber | null; // Parent<br/>
              &nbsp;&nbsp;child: Fiber | null; // First child<br/>
              &nbsp;&nbsp;sibling: Fiber | null; // Next sibling<br/>
              &nbsp;&nbsp;alternate: Fiber | null; // The "Work-in-Progress" vs "Current" tree<br/>
              }
            </div>
            <p>We explore <strong>Double Buffering</strong>: how React maintains a "Current" tree (visible to the user) and a "Work-in-Progress" tree (being calculated in memory). Once the calculation is complete, React simply swaps the pointers—making the update instantaneous and atomic.</p>
          `
        },
        {
          title: "Scheduler Lanes: Priority-Based Updates",
          content: `
            <p>Not all updates are created equal. React uses a system called <strong>Lanes</strong> to categorize task priority. We examine the 31-bit integer bitmask used to represent these priorities. You will learn how "Sync" lanes handle discrete events (clicks) while "Transition" lanes handle background data fetches. We will analyze how the <strong>Scheduler</strong> re-orders these tasks, even "starving" low-priority updates if high-priority ones keep coming, ensuring the 60FPS "Smooth UI" target is always prioritized.</p>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-50">
              [IMAGE: Diagram showing React's Priority Lanes: Sync -> Discrete -> Continuous -> Default -> Idle]
            </div>
          `
        },
        {
          title: "Reconciliation Heuristics & Component Identity",
          content: `
            <p>React's diffing algorithm is $O(n)$ because it makes two bold assumptions: 1. Different element types produce different trees. 2. <strong>Keys</strong> provide a stable identity. We will prove why using <code>Math.random()</code> as a key forces a full unmount and remount of the entire subtree, destroying state and performance. We will also look at <strong>Referential Equality</strong>—how <code>Object.is()</code> is used at the core of the <code>memo</code> wrapper to decide if a re-render is necessary.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Hooks Deep Dive - State & Effect Lifecycle",
      lessons: [
        {
          title: "The Hook Dispatcher: Global State Pointers",
          content: `
            <p>Hooks are not magic; they are stored in a persistent array (effectively a linked list) on the Fiber node. We explore the <strong>Hooks Dispatcher</strong>. When you call <code>useState</code>, React looks at the current pointer in that list to retrieve the data. You will learn why hooks cannot be conditional: if the number of hook calls changes, the pointer-to-data mapping is corrupted. We will trace the <strong>update queue</strong> logic, seeing how multiple <code>setState</code> calls are batched and applied in a single pass to minimize DOM churn.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-green-300 border border-slate-800">
              // How useState works internally<br/>
              function dispatchSetState(fiber, queue, action) {<br/>
              &nbsp;&nbsp;const update = { action, next: null };<br/>
              &nbsp;&nbsp;enqueueUpdate(queue, update);<br/>
              &nbsp;&nbsp;scheduleUpdateOnFiber(fiber); // Triggers the Scheduler<br/>
              }
            </div>
          `
        },
        {
          title: "Effect Synchronization & The Clean-up Phase",
          content: `
            <p><code>useEffect</code> is a synchronization tool, not a lifecycle method. We master the <strong>Dependency Array</strong>. We look at the "Stale Closure" problem—where an effect captures variables from a previous render. You will learn to architect effects using the <strong>Clean-up Pattern</strong> to prevent memory leaks in WebSockets, Event Listeners, and Intersection Observers. We'll also cover <code>useLayoutEffect</code> and why it is essential for measuring DOM nodes before the browser repaints to prevent "flicker."</p>
          `
        },
        {
          title: "useSyncExternalStore: Preventing State Tearing",
          content: `
            <p>In a concurrent world, an external store (like a browser API or Redux) might change <em>while</em> React is rendering. This causes <strong>Tearing</strong> (half the UI shows old data, half shows new). We learn to use <code>useSyncExternalStore</code> to bridge external mutable sources into React's immutable rendering loop. We will build a custom "Network Status" store that is concurrent-safe across all React 18+ features.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Next.js 15 App Router & Server Components",
      lessons: [
        {
          title: "RSC: The Serialized Payload Architecture",
          content: `
            <p>Next.js 15 <strong>Server Components (RSC)</strong> do not return HTML; they return a specialized <strong>JSON-like payload</strong> that describes the UI tree. This allows the client to merge server-side content with existing client-side state without a full page reload. We will analyze the <code>.rsc</code> network requests, looking at how components are "streamed" to the browser. You will learn why "Client Components" are actually "Hydrated Components" and how the <code>'use client'</code> directive acts as a boundary for the bundler.</p>
             <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-900">
              [IMAGE: Flowchart: Request -> Next.js Server -> Database -> RSC Payload -> Client Side Reconciliation]
            </div>
          `
        },
        {
          title: "Server Actions: Proxied RPC Mutations",
          content: `
            <p>Server Actions are essentially **Remote Procedure Calls (RPC)**. When you define <code>'use server'</code>, Next.js generates a hidden API endpoint for you. We cover the security implications: how to protect actions with <strong>middleware</strong> and <strong>CSRF tokens</strong> (automatically handled by Next.js). We will implement a <strong>Multi-Step Form</strong> that uses Server Actions and <code>useFormState</code> to handle validation errors without ever writing a <code>fetch()</code> call on the frontend.</p>
          `
        },
        {
          title: "Partial Prerendering (PPR) & Dynamic I/O",
          content: `
            <p>Next.js 15 introduces <strong>Partial Prerendering</strong>. This combines the speed of static sites with the power of dynamic apps. We will learn how to wrap dynamic components in <code>Suspense</code> boundaries. Next.js will pre-render the static "Shell" at build time and only "hole-punch" the dynamic content at request time. We'll explore the <strong>Request Store</strong> and how <code>cookies()</code> or <code>headers()</code> calls automatically opt a route into dynamic rendering.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-yellow-300 border border-slate-800">
              // Example of a PPR-ready component<br/>
              export default function Page() {<br/>
              &nbsp;&nbsp;return (<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;main&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;StaticHeader /&gt; // Pre-rendered<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;Suspense fallback={&lt;Skeleton /&gt;}&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;DynamicCart /&gt; // Streamed at runtime<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Suspense&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;/main&gt;<br/>
              &nbsp;&nbsp;);<br/>
              }
            </div>
          `
        }
      ]
    },
    {
      title: "Module 4: Advanced Performance & Hydration",
      lessons: [
        {
          title: "Hydration Mismatches & The 'Third Render'",
          content: `
            <p>Hydration is the process of mapping event listeners to the pre-rendered HTML. A <strong>Hydration Mismatch</strong> occurs if the server-rendered HTML doesn't match the first client-side render (e.g., using <code>new Date()</code>). We'll learn to debug the "Text content did not match" error and implement the <strong>two-pass rendering</strong> pattern using <code>useEffect</code> to ensure server-client consistency in dynamic apps.</p>
          `
        },
        {
          title: "Code Splitting: Selective Hydration with Suspense",
          content: `
            <p>We analyze <strong>Selective Hydration</strong>. React can start hydrating parts of the page before the entire bundle has even finished downloading. We will use <code>React.lazy</code> and <code>Suspense</code> to break our application into small, manageable chunks. You will learn how to use <strong>Prefetching</strong> in Next.js 15 to download code for the "Next Page" in the background when a link enters the viewport, making page transitions feel instantaneous.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Architectural Patterns for Design Systems",
      lessons: [
        {
          title: "Compound Components & Context Providers",
          content: `
            <p>For complex UI like Modals or Select menus, we avoid "Prop Drilling" using the <strong>Compound Component Pattern</strong>. We will build a <code>&lt;Menu /&gt;</code> system where <code>&lt;Menu.Item /&gt;</code> automatically knows its active state through a shared <code>Context</code>. This allows for a declarative API that is easy for other developers to read and extend without bloating the parent component's prop list.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-purple-300 border border-slate-800">
              &lt;Tabs defaultValue="home"&gt;<br/>
              &nbsp;&nbsp;&lt;Tabs.List&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;Tabs.Trigger value="home"&gt;Home&lt;/Tabs.Trigger&gt;<br/>
              &nbsp;&nbsp;&lt;/Tabs.List&gt;<br/>
              &nbsp;&nbsp;&lt;Tabs.Content value="home"&gt;Welcome!&lt;/Tabs.Content&gt;<br/>
              &lt;/Tabs&gt;
            </div>
          `
        },
        {
          title: "Polymorphism & The 'as' Prop in TypeScript",
          content: `
            <p>We build a "Bulletproof" Design System. You will learn to use <strong>TypeScript Generics</strong> to create Polymorphic components. For instance, a <code>&lt;Text /&gt;</code> component that can be rendered as an <code>&lt;h1&gt;</code>, <code>&lt;p&gt;</code>, or <code>&lt;span&gt;</code>, while maintaining perfect type-safety for the specific HTML attributes of each tag. We will master the <code>ComponentPropsWithRef</code> utility type to ensure our components correctly forward <code>ref</code> pointers to the underlying DOM.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Final Lab - Building a High-Scale Dashboard",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-indigo-950 via-blue-900 to-black rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <LayoutDashboard size={60} className="text-cyan-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">React Master Architect</h2>
              <p class="text-blue-200 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have journeyed through the inner workings of the Fiber Engine and the cutting-edge patterns 
                of Next.js 15. You are now prepared to lead front-end architecture at an enterprise scale.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=react-mastery" class="group bg-blue-600 text-white px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white hover:text-blue-900 transition-all shadow-[0_20px_50px_rgba(37,99,235,0.4)]">
                    ENTER FINAL LAB
                  </a>
                  <div className="text-left border-l border-white/20 pl-6 text-white">
                    <p className="font-bold uppercase text-xs tracking-widest opacity-60">Architect Level</p>
                    <p className="font-black text-lg">Senior Principal Engineer</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};