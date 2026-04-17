export const cGraphicsMastery = {
  id: "c-graphics",
  title: "C Graphics: Engineering High-Performance Renderers",
  modules: [
    {
      title: "Module 1: The Graphics Pipeline & SDL2 Initialization",
      lessons: [
        {
          title: "Architecture of a Graphics Application",
          content: `
            <p>A graphics application is a high-speed loop. We deconstruct the <strong>Rendering Pipeline</strong>: Application -> Geometry Processing -> Rasterization -> Pixel Processing. You will learn why we avoid standard console I/O and instead interface with the <strong>Video RAM (VRAM)</strong> via the SDL2 abstraction layer. We'll analyze the <strong>VSync (Vertical Synchronization)</strong> mechanic and how it prevents 'Screen Tearing' by aligning the buffer swap with the monitor's refresh rate.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-blue-400 border border-zinc-800">
              /* Professional SDL2 Boilerplate Implementation */<br/>
              #include &lt;SDL2/SDL.h&gt;<br/>
              #include &lt;stdio.h&gt;<br/><br/>
              typedef struct {<br/>
              &nbsp;&nbsp;SDL_Window *window;<br/>
              &nbsp;&nbsp;SDL_Renderer *renderer;<br/>
              &nbsp;&nbsp;int is_running;<br/>
              } GameState;<br/><br/>
              int init_graphics(GameState *state) {<br/>
              &nbsp;&nbsp;if (SDL_Init(SDL_INIT_VIDEO) != 0) return 0;<br/>
              &nbsp;&nbsp;state->window = SDL_CreateWindow("C-Graphics Engine", <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;800, 600, 0);<br/>
              &nbsp;&nbsp;state->renderer = SDL_CreateRenderer(state->window, -1, <br/>
              &nbsp;&nbsp;&nbsp;&nbsp;SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);<br/>
              &nbsp;&nbsp;return (state->window && state->renderer);<br/>
              }
            </div>
          `
        }
      ]
    },
    {
      title: "Module 2: Memory-Level Pixel Manipulation",
      lessons: [
        {
          title: "The Framebuffer: Raw Pointer Access",
          content: `
            <p>To be a pro, you don't use <code>SDL_RenderDrawPoint</code>. It's too slow. We master <strong>Direct Texture Access</strong>. You will learn to lock a texture, retrieve a <code>void*</code> pointer to the raw pixels, and calculate the memory offset for any $(x, y)$ coordinate using the formula: $index = y \times pitch + x \times 4$. This is the foundation of building your own software rasterizer.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-green-400 border border-zinc-800">
              /* Manipulating Raw Pixels in VRAM */<br/>
              uint32_t* pixels;<br/>
              int pitch;<br/>
              SDL_LockTexture(texture, NULL, (void**)&pixels, &pitch);<br/><br/>
              for(int y = 0; y < height; y++) {<br/>
              &nbsp;&nbsp;for(int x = 0; x < width; x++) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;uint32_t color = 0xFFFF0000; // Bright Red (ARGB8888)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;pixels[y * (pitch / 4) + x] = color;<br/>
              &nbsp;&nbsp;}<br/>
              }<br/>
              SDL_UnlockTexture(texture);
            </div>
          `
        }
      ]
    },
    {
      title: "Module 3: Computational Geometry & Rasterization",
      lessons: [
        {
          title: "Bresenham's Line Algorithm",
          content: `
            <p>How do you draw a line when you only have square pixels? We implement <strong>Bresenham's Algorithm</strong>. This is a masterpiece of computer science that uses only <strong>Integer Arithmetic</strong> (no floats, no division) to determine which pixels best approximate a straight line. You will learn about the <strong>Error Accumulator</strong> and how it decides whether to increment the Y-axis at each X-step.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-yellow-300 border border-zinc-800">
              void draw_line(int x0, int y0, int x1, int y1, uint32_t color) {<br/>
              &nbsp;&nbsp;int dx = abs(x1 - x0), sx = x0 < x1 ? 1 : -1;<br/>
              &nbsp;&nbsp;int dy = -abs(y1 - y0), sy = y0 < y1 ? 1 : -1;<br/>
              &nbsp;&nbsp;int err = dx + dy, e2;<br/><br/>
              &nbsp;&nbsp;while(1) {<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;put_pixel(x0, y0, color);<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (x0 == x1 && y0 == y1) break;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;e2 = 2 * err;<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (e2 >= dy) { err += dy; x0 += sx; }<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;if (e2 <= dx) { err += dx; y0 += sy; }<br/>
              &nbsp;&nbsp;}<br/>
              }
            </div>
          `
        },
        {
          title: "Triangle Rasterization & Barycentric Coordinates",
          content: `
            <p>Triangles are the atoms of 3D graphics. We learn to fill them. You will explore <strong>Edge Functions</strong> and <strong>Barycentric Coordinates</strong>. This math allows us to determine if a pixel is inside a triangle and, more importantly, how to interpolate colors and textures across its surface. We'll implement a <strong>Scanline Filler</strong> that breaks the triangle into two halves (flat-top and flat-bottom) for optimized rendering.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: 2D Transformations & Matrix Math",
      lessons: [
        {
          title: "Linear Algebra for Graphics",
          content: `
            <p>Graphics is just math in disguise. We introduce <strong>Affine Transformations</strong>. You will learn to use <strong>Rotation Matrices</strong> and <strong>Translation Vectors</strong>. We'll explain why we use <strong>Homogeneous Coordinates</strong> (3x3 matrices for 2D) to allow translation (moving) to be represented as a multiplication, enabling us to combine rotation, scaling, and movement into a single "Transformation Matrix."</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-purple-400 border border-zinc-800">
              /* 2D Rotation Formula */<br/>
              new_x = x * cos(theta) - y * sin(theta);<br/>
              new_y = x * sin(theta) + y * cos(theta);
            </div>
          `
        }
      ]
    },
    {
      title: "Module 5: Sprite Engineering & Blitting",
      lessons: [
        {
          title: "Bit-Block Transfer (Blitting)",
          content: `
            <p>We move from lines to images. You will learn <strong>SDL_Surface</strong> vs <strong>SDL_Texture</strong>. We cover the <strong>Source and Destination Rectangles</strong> pattern. You'll learn how to implement <strong>Sprite Sheets</strong>, where a single large image contains 50 frames of animation, and you use UV-offsetting to "crop" and render only the specific frame needed for the current animation cycle.</p>
          `
        },
        {
          title: "Alpha Blending & Color Keying",
          content: `
            <p>How do we handle transparency? We analyze <strong>Alpha Compositing</strong> using the formula: $Result = Source \times Alpha + Dest \times (1 - Alpha)$. You'll learn to implement <strong>Color Keying</strong> (the old-school 'Chroma Key' where a specific pink/green color is treated as transparent) and modern 8-bit Alpha Channel blending for smooth, anti-aliased edges.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Advanced Techniques - Particle Systems & Shaders",
      lessons: [
        {
          title: "Particle Physics Engines",
          content: `
            <p>We build a smoke/fire system. You will learn about <strong>Life-cycles</strong> and <strong>Velocity Integration</strong>. We'll manage an array of 1,000 "Particle" structs, each with its own position, gravity, and fade-out timer. We'll use <strong>Additive Blending</strong> (adding pixel values together) to make the particles "glow" when they overlap, creating realistic fire effects.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Final Lab - The Retro Arcade Engine",
      lessons: [
        {
          title: "Capstone Implementation",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-indigo-900 via-zinc-900 to-black rounded-[4rem] border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Monitor size={60} className="text-cyan-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6">Graphics Engine Architect</h2>
              <p class="text-indigo-200 mb-16 max-w-2xl mx-auto text-xl font-light">
                You have mastered the art of drawing to the silicon. From Bresenham's logic to raw 
                VRAM manipulation and Matrix transformations, the screen is your canvas.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center">
                  <a href="/lab?courseId=c-graphics" class="bg-cyan-500 text-white px-12 py-6 rounded-3xl font-black uppercase tracking-widest hover:bg-white hover:text-indigo-900 transition-all">
                    BOOT GRAPHICS LAB
                  </a>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};