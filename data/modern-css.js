export const modernCss = {
  id: "modern-css",
  title: "Modern CSS & Tailwind: Visual Systems Engineering",
  modules: [
    {
      title: "Module 1: Layout Physics - Beyond Flexbox & Grid",
      lessons: [
        {
          title: "The Box Model 2.0: Logical Properties",
          content: `
            <p>Traditional CSS uses physical properties (left, right, top, bottom). In modern architecture, we switch to <strong>Logical Properties</strong> (inline, block, start, end). You will learn how these properties automatically adapt to writing modes (LTR vs RTL) without changing a single line of code. This is the foundation of <strong>Internationalization (i18n)</strong> in design systems. We'll explore why <code>padding-inline-start</code> is superior to <code>padding-left</code> and how it affects the rendering of multi-language interfaces.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-indigo-300 border border-slate-800">
              /* Logical Property mapping in Tailwind */<br/>
              .ps-4 { padding-inline-start: 1rem; }<br/>
              .ms-2 { margin-inline-start: 0.5rem; }<br/>
              .border-be { border-block-end-width: 1px; }
            </div>
          `
        },
        {
          title: "Intrinsic vs Extrinsic Sizing",
          content: `
            <p>CSS becomes "brittle" when you use fixed widths. We explore <strong>Intrinsic Sizing</strong> using <code>min-content</code>, <code>max-content</code>, and <code>fit-content</code>. You will learn the "Look-ahead" logic the browser uses to calculate the size of an element based on its children before any layout is finalized. We'll use Tailwind's <code>w-fit</code> and <code>max-w-prose</code> to create layouts that are "content-aware," ensuring text never becomes too wide for comfortable reading (the 45-75 character rule).</p>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-50">
              [IMAGE: Diagram comparing Extrinsic (fixed) vs Intrinsic (content-based) layout containers]
            </div>
          `
        },
        {
          title: "Grid Area Orchestration",
          content: `
            <p>Tailwind's Grid utilities are powerful, but <strong>Named Grid Areas</strong> are the secret to complex layouts. We analyze how to define a grid template and use <code>grid-area</code> to move elements across the page purely via CSS without touching the HTML order (Source Order Independence). You will learn how to build a <strong>Holy Grail Layout</strong> using <code>grid-template-areas</code> that rearranges itself for mobile using a single media query.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Design Tokens & Tailwind Configuration",
      lessons: [
        {
          title: "The Tailwind Engine: JIT & Design Tokens",
          content: `
            <p>We deconstruct the <strong>Just-In-Time (JIT)</strong> compiler. You will learn how Tailwind parses your HTML files to generate only the CSS you actually use. We'll dive into the <code>tailwind.config.js</code> file to create a <strong>Design Token System</strong>. We'll define custom color scales using <strong>OKLCH</strong> (the new standard for perceptually uniform colors) and learn how to extend the theme with spacing variables, custom fonts, and screen breakpoints that align with your brand guidelines.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-green-300 border border-slate-800">
              module.exports = {<br/>
              &nbsp;&nbsp;theme: {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;extend: {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;brand: 'oklch(65% 0.15 250)', // Perceptual blue<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;spacing: {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'128': '32rem',<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;}<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
          `
        },
        {
          title: "Arbitrary Values & Square Bracket Notation",
          content: `
            <p>Tailwind isn't just a set of predefined classes; it's a dynamic language. We explore <strong>Arbitrary Values</strong> <code>top-[117px]</code> and <strong>Arbitrary Properties</strong> <code>[mask-type:luminance]</code>. You will learn when to use these for "one-off" layouts and when to move them into the config file for reuse. We'll also cover <strong>Arbitrary Variants</strong>, allowing you to target deep child elements like <code>[&_p]:mt-4</code> directly from the parent class list.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Advanced Visual Effects & GPU Acceleration",
      lessons: [
        {
          title: "Compositing & The Stacking Context",
          content: `
            <p>Why do some elements appear above others despite <code>z-index</code>? We analyze the <strong>Stacking Context</strong>. You will learn how properties like <code>opacity</code>, <code>transform</code>, and <code>filter</code> create new layers in the browser. We explore <strong>Mix-Blend-Modes</strong> (multiply, screen, overlay) and how to use Tailwind's <code>isolate</code> class to prevent background effects from "leaking" into parent containers.</p>
            <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-900">
              [IMAGE: 3D exploded view of CSS layers and Stacking Contexts]
            </div>
          `
        },
        {
          title: "Hardware Acceleration: Transforms and Opacity",
          content: `
            <p>Browser performance is determined by the <strong>Rendering Pipeline</strong>: Layout -> Paint -> Composite. We explore why animating <code>margin</code> causes layout shifts (CPU heavy) while animating <code>transform: translate</code> is handled by the <strong>GPU</strong>. You will learn to use <code>will-change-transform</code> to pre-allocate memory for animations, ensuring a buttery-smooth 120Hz experience on modern mobile devices.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-yellow-400 border border-slate-800">
              /* Tailwind Performance Optimization */<br/>
              .hover-card { @apply transition-transform duration-300; }<br/>
              .hover-card:hover { transform: translate3d(0, -10px, 0); }
            </div>
          `
        },
        {
          title: "The Glassmorphism & Backdrop Filter Engine",
          content: `
            <p>Modern UI relies on <strong>Backdrop Filters</strong>. We master the glassmorphism effect. You will learn how to combine <code>bg-white/10</code>, <code>backdrop-blur-md</code>, and <code>border-white/20</code> to create high-end interfaces. We'll discuss the performance cost of blurs and how to optimize them using <strong>Content-Visibility</strong> to prevent the browser from rendering off-screen filtered elements.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Responsive 2.0 - Container Queries",
      lessons: [
        {
          title: "The Death of Media Queries: @container",
          content: `
            <p>Media queries look at the "Viewport," but <strong>Container Queries</strong> look at the parent's width. This is the biggest shift in CSS history. You will learn how to build a <code>Card</code> component that changes layout based on whether it is in a wide sidebar or a narrow main column. We'll use Tailwind's <code>@container</code> plugin to implement this, allowing for truly modular UI that is "context-aware."</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-pink-300 border border-slate-800">
              &lt;div class="@container"&gt;<br/>
              &nbsp;&nbsp;&lt;div class="grid grid-cols-1 @lg:grid-cols-3"&gt;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;&lt;!-- Changes layout based on PARENT width --&gt;<br/>
              &nbsp;&nbsp;&lt;/div&gt;<br/>
              &lt;/div&gt;
            </div>
          `
        },
        {
          title: "Fluid Typography with clamp()",
          content: `
            <p>Stop using dozens of media queries for font sizes. We master the <code>clamp()</code> function: <code>clamp(min, preferred, max)</code>. You will learn how to create <strong>Fluid Typography</strong> that scales linearly between screen sizes. We'll integrate this into Tailwind's utility system to create a single <code>text-fluid</code> class that handles all responsive resizing automatically.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: CSS Architecture & The Cascade",
      lessons: [
        {
          title: "CSS Cascade Layers: @layer",
          content: `
            <p>Managing specificity in large apps is a nightmare. We introduce <strong>Cascade Layers (@layer)</strong>. You will learn how to organize CSS into <code>base</code>, <code>components</code>, and <code>utilities</code> layers. This allows you to guarantee that your custom components always override base styles, and utility classes always override components, regardless of when they are loaded. This is the ultimate tool for preventing <code>!important</code> wars.</p>
          `
        },
        {
          title: "The CUBE CSS Methodology",
          content: `
            <p>We combine Tailwind with <strong>CUBE CSS</strong> (Composition, Utility, Block, Exception). You will learn why "Utility-First" doesn't mean "Utility-Only." We'll build <strong>Compositional Layouts</strong> (like a flexible stack or a switcher) using raw CSS for high-level structure and Tailwind for the granular styling details. This hybrid approach is how large-scale enterprise applications maintain clean, scalable stylesheets.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-blue-300 border border-slate-800">
              /* Composition layer example */<br/>
              .stack > * + * { margin-block-start: var(--space, 1rem); }
            </div>
          `
        }
      ]
    },
    {
      title: "Module 6: Animations & Interactions",
      lessons: [
        {
          title: "Keyframe Orchestration",
          content: `
            <p>We move beyond simple transitions to <strong>Multi-step Keyframe Animations</strong>. You will learn to define custom animations in <code>tailwind.config.js</code> using the <code>keyframes</code> and <code>animation</code> keys. We'll explore the <strong>Stagger Effect</strong>—using CSS variables to delay the animation of each item in a list to create an "Entry Flow" that feels organic and premium.</p>
          `
        },
        {
          title: "View Transitions API",
          content: `
            <p>The <strong>View Transitions API</strong> allows for app-like page transitions on the web. We will learn how to use the <code>view-transition-name</code> property to "morph" an image from a list view into a full-page hero view. We'll discuss how this interacts with Single Page Apps (SPAs) and how Tailwind's utility classes can style the "Old" and "New" snapshots of the page during the transition.</p>
             <div class="border-2 border-dashed border-slate-700 p-10 rounded-3xl text-center text-slate-500 my-6 bg-slate-900">
              [IMAGE: Visual breakdown of the View Transition 'Capture -> Morph -> Reveal' cycle]
            </div>
          `
        }
      ]
    },
    {
      title: "Module 7: Final Lab - Building a Design System",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-black rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Palette size={60} className="text-pink-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">Visual Systems Architect</h2>
              <p class="text-indigo-100 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have mastered the modern web's visual engine. From GPU-accelerated transforms to 
                Cascade Layers and Fluid Design Systems, you are now a CSS Master.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=modern-css" class="group bg-pink-500 text-white px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white hover:text-indigo-900 transition-all shadow-2xl">
                    LAUNCH DESIGN LAB
                  </a>
                  <div className="text-left border-l border-white/20 pl-6 text-white">
                    <p className="font-bold uppercase text-xs tracking-widest opacity-60">Architect Level</p>
                    <p className="font-black text-lg">Senior Design Engineer</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};