export const javascriptPro = {
  id: "javascript-pro",
  title: "JavaScript Pro: Mastering the V8 Engine & High-Performance Patterns",
  modules: [
    {
      title: "Module 1: The V8 Execution Pipeline & JIT Compilation",
      lessons: [
        {
          title: "From Ignition to TurboFan: How JS Becomes Machine Code",
          content: `
            <p>JavaScript is an interpreted language, yet it runs at near-native speeds. We dive into the <strong>V8 Pipeline</strong>. You will learn about <strong>Ignition</strong>, the interpreter that generates bytecode from the AST (Abstract Syntax Tree), and <strong>TurboFan</strong>, the optimizing compiler. We'll explore <strong>Speculative Optimization</strong>: how V8 tracks "Hot" functions and compiles them into optimized machine code based on the types it has seen. You will learn the concept of <strong>Deoptimization (Deopt)</strong>—what happens when your code suddenly changes types (e.g., passing a string to a function that previously only saw numbers), forcing the engine to "bail out" back to bytecode.</p>
            <div class="bg-slate-900 p-6 rounded-2xl my-6 font-mono text-xs text-orange-300 border border-slate-700">
              // Monomorphic vs. Polymorphic performance<br/>
              function add(a, b) { return a + b; }<br/><br/>
              add(1, 2); // Optimized for integers (Monomorphic)<br/>
              add("a", "b"); // Type change! Forces Deoptimization (Polymorphic)
            </div>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6">
              [IMAGE: Flowchart of V8 Pipeline: Parser -> Ignition (Bytecode) -> Sparkplug -> Maglev -> TurboFan (Machine Code)]
            </div>
          `
        },
        {
          title: "Hidden Classes & Inline Caching (IC)",
          content: `
            <p>JavaScript objects are dynamic, but V8 treats them as static structs using <strong>Hidden Classes (Shapes)</strong>. We explore how adding properties to an object in a different order creates different hidden classes, breaking <strong>Inline Caching</strong>. You will learn to write "Engine-Friendly" code by initializing all properties in the constructor, ensuring your objects share the same internal Shape and allowing V8 to skip expensive hash-map lookups for property access.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Advanced Memory Management & GC Internals",
      lessons: [
        {
          title: "The Orinoco Garbage Collector: Generational Theory",
          content: `
            <p>Memory management in JS is automatic, but not "free." We analyze the <strong>Generational Hypothesis</strong>: the idea that most objects die young. You will learn about the <strong>New Space (Young Generation)</strong> and the <strong>Old Space (Tenured Generation)</strong>. We'll cover <strong>Scavenging</strong> (for fast cleanup of short-lived objects) and <strong>Major GC (Mark-Sweep-Compact)</strong>. We'll specifically look at <strong>Incremental Marking</strong>—how V8 breaks the "Stop-the-World" pause into tiny millisecond chunks to prevent UI jank during heavy memory cleanup.</p>
            <div class="bg-slate-900 p-6 rounded-2xl my-6 font-mono text-xs text-green-300 border border-slate-700">
              // Identifying a Memory Leak in a Closure<br/>
              function createLeak() {<br/>
              &nbsp;&nbsp;const hugeData = new Array(1000000).fill('💀');<br/>
              &nbsp;&nbsp;return () => console.log(hugeData.length);<br/>
              } // hugeData is trapped in the closure scope and cannot be GC'd
            </div>
          `
        },
        {
          title: "Weak References & Manual Memory Control",
          content: `
            <p>Sometimes you need to hold a reference to an object without preventing its garbage collection. We master <code>WeakMap</code>, <code>WeakSet</code>, and the new <strong>FinalizationRegistry</strong>. You will learn how to use these tools to build caches that "self-clean" when memory pressure is high, and how to use <code>WeakRef</code> to monitor object lifecycle without creating memory leaks in large-scale applications.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: The Event Loop & Task Scheduling 2026",
      lessons: [
        {
          title: "Macrotasks, Microtasks, and the Render Queue",
          content: `
            <p>The Event Loop is often misunderstood. We dive into the <strong>Task Queue (Macrotasks)</strong> and the <strong>Microtask Queue</strong>. You will learn why <code>Promise.then()</code> always executes before <code>setTimeout(0)</code>. We explore the <strong>Render Pipeline</strong>: how the browser tries to fit your code execution into the 16.6ms window of a 60Hz frame. We'll look at the <strong>Task Attribution API</strong> (new in 2026) to track which specific async task is causing long-frame blocking.</p>
             <div class="bg-slate-900 p-6 rounded-2xl my-6 font-mono text-xs text-blue-300 border border-slate-700">
              // The Execution Order Test<br/>
              setTimeout(() => console.log("Macro"), 0);<br/>
              Promise.resolve().then(() => console.log("Micro"));<br/>
              requestAnimationFrame(() => console.log("Render"));<br/>
              // Expected: Micro -> Render -> Macro
            </div>
          `
        },
        {
          title: "Cooperative Scheduling with scheduler.yield()",
          content: `
            <p>In 2026, we no longer block the main thread for heavy math. We introduce <strong>Cooperative Scheduling</strong>. You will learn how to use <code>await scheduler.yield()</code> to break up long-running loops, giving the browser a chance to handle clicks and scrolls mid-calculation. We'll compare this to <code>requestIdleCallback</code> and discuss when to offload work to <strong>Web Workers</strong> using Comlink for seamless multi-threaded communication.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Metaprogramming & Functional Mastery",
      lessons: [
        {
          title: "Proxy & Reflect: The Trap Architecture",
          content: `
            <p>Metaprogramming allows you to redefine the fundamental operations of the language. We master the <strong>Proxy API</strong>. You will learn to use "Traps" (get, set, has, deleteProperty) to build reactive state systems (like Vue 3's core) or to create "Revocable Proxies" for secure API access. We'll pair this with <strong>Reflect</strong> to ensure that our proxies maintain the default behavior of the objects they wrap, avoiding the "this" context bugs common in naive proxy implementations.</p>
          `
        },
        {
          title: "Functional Programming: Currying, Monads, and Pipes",
          content: `
            <p>We move beyond simple functions into <strong>Functional Composition</strong>. You will learn <strong>Currying</strong> (transforming a function with multiple arguments into a sequence of functions) and <strong>Partial Application</strong>. We explore the <strong>Pipe Operator (<code>|></code>)</strong>—a proposal being finalized in 2026—and how it cleans up nested function calls into a readable linear flow. We'll also touch on <strong>Monadic Error Handling</strong> as an alternative to try/catch blocks.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Performance Profiling & Scaling",
      lessons: [
        {
          title: "Chrome DevTools: The Memory Profiler",
          content: `
            <p>You can't optimize what you can't measure. We master <strong>Heap Snapshots</strong>. You will learn to read "Comparison Views" to find out exactly which objects were created between two points in time. We'll use the <strong>Allocation Timelines</strong> to identify "Memory Churn"—objects being created and destroyed so fast they trigger frequent, stutter-inducing GC cycles.</p>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-900">
              [IMAGE: Screenshot of Chrome DevTools Memory Tab: Retained Size vs Shallow Size explained]
            </div>
          `
        },
        {
          title: "WebAssembly (Wasm) Interop",
          content: `
            <p>When JS isn't fast enough, we use <strong>WebAssembly</strong>. You will learn how to compile C++/Rust logic into <code>.wasm</code> modules and call them from JavaScript. We'll explore <strong>SharedArrayBuffer</strong> and <strong>Atomics</strong>—the low-level tools that allow JS and Wasm to share memory and synchronize work without race conditions, enabling high-performance video editing and 3D rendering directly in the browser.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Final Lab - The High-Frequency Engine",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-yellow-600 via-amber-800 to-black rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Cpu size={60} className="text-yellow-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">JavaScript Systems Engineer</h2>
              <p class="text-amber-100 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have mastered the language at the silicon level. From V8 hidden classes and GC generations 
                to cooperative scheduling and Wasm interop, you are now a top 1% engineer.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=js-pro" class="group bg-yellow-500 text-black px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white transition-all shadow-2xl">
                    COMMENCE FINAL BUILD
                  </a>
                  <div className="text-left border-l border-white/20 pl-6 text-white">
                    <p className="font-bold uppercase text-xs tracking-widest opacity-60">Mastery Level</p>
                    <p className="font-black text-lg">Senior V8 Specialist</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};