export const cProgramming101 = {
  id: "c-101",
  title: "C Programming: Mastering the Hardware Interface",
  modules: [
    {
      title: "Module 1: Memory Architecture & The Compilation Pipeline",
      lessons: [
        {
          title: "The Four Stages of Compilation",
          content: `
            <p>C is not "run"; it is transformed. We deconstruct the path from source code to binary. You will learn the <strong>Preprocessing</strong> stage (handling #include and #define), the <strong>Compilation</strong> stage (turning C into Assembly), the <strong>Assembly</strong> stage (creating Object files), and the <strong>Linking</strong> stage (resolving symbols across multiple files). We will analyze the <strong>Executable and Linkable Format (ELF)</strong> and why the Linker is the most common place for "undefined reference" errors to occur in large-scale systems.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-blue-400 border border-zinc-800">
              // Investigating the preprocessor output<br/>
              gcc -E main.c -o main.i<br/>
              // Generating the Assembly code<br/>
              gcc -S main.c -o main.s
            </div>
            <div class="border-2 border-dashed border-zinc-700 p-10 rounded-3xl text-center text-zinc-500 my-6">
              [IMAGE: The Pipeline: main.c -> Preprocessor -> main.s -> Assembler -> main.o -> Linker -> a.out]
            </div>
          `
        },
        {
          title: "The Anatomy of RAM: Text, Data, BSS, and Stack",
          content: `
            <p>To write C is to manage RAM. We explore the <strong>Process Memory Map</strong>. You will learn about the <strong>Text Segment</strong> (where your code lives as read-only instructions), the <strong>Data Segment</strong> (initialized globals), the <strong>BSS</strong> (uninitialized globals), and the dynamic regions: <strong>The Stack</strong> and <strong>The Heap</strong>. We will discuss <strong>Buffer Overflows</strong> and how writing past an array boundary can overwrite the "Return Address" on the stack, leading to the most famous security vulnerabilities in computing history.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Data Types, Endianness, and Bit Manipulation",
      lessons: [
        {
          title: "Integer Physics & Overflow Mechanics",
          content: `
            <p>In C, types are just interpretations of bits. We look at <strong>Two's Complement</strong>—the mathematical system used to represent signed integers. You will learn why adding 1 to <code>2,147,483,647</code> results in <code>-2,147,483,648</code> (Integer Overflow). We'll also dive into <strong>Endianness</strong>: the difference between <strong>Big-Endian</strong> and <strong>Little-Endian</strong> storage. You will write a program to detect your CPU's byte order by inspecting a multi-byte integer through a single-byte char pointer.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-green-400 border border-zinc-800">
              unsigned int x = 1;<br/>
              char *c = (char*)&x;<br/>
              if (*c) printf("Little-Endian\\n");<br/>
              else printf("Big-Endian\\n");
            </div>
          `
        },
        {
          title: "Bitwise Logic: Masking and Shifting",
          content: `
            <p>High-performance C relies on bitwise operations. We master <code>AND (&)</code>, <code>OR (|)</code>, <code>XOR (^)</code>, and <code>Shifting (<<, >>)</code>. You will learn how to use <strong>Bit Masks</strong> to toggle specific bits in a hardware register, how to use XOR for high-speed value swapping without a temporary variable, and why <strong>Bit-Fields</strong> in <code>structs</code> are essential for memory-mapped I/O in embedded systems where every byte is precious.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Pointers - The Soul of C",
      lessons: [
        {
          title: "Pointer Arithmetic & Memory Addressing",
          content: `
            <p>A pointer is simply a variable that holds a <strong>Memory Address</strong>. We deconstruct the <code>*</code> (dereference) and <code>&</code> (address-of) operators. You will learn the "Secrets of Arithmetic": why <code>ptr + 1</code> moves the address by 4 bytes for an <code>int</code> but by 8 bytes for a <code>double</code>. We will prove that <code>array[i]</code> is mathematically identical to <code>*(array + i)</code>, and why arrays are essentially just "constant pointers" with a fixed memory offset.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-yellow-300 border border-zinc-800">
              int arr[5] = {10, 20, 30, 40, 50};<br/>
              int *p = arr;<br/>
              printf("%d", *(p + 2)); // Accesses 30 via pointer math
            </div>
            <div class="border-2 border-dashed border-zinc-700 p-10 rounded-3xl text-center text-zinc-500 my-6 bg-zinc-900">
              [IMAGE: Memory Visualization: Pointer 'p' holding hex address 0x7ffe and pointing to array data]
            </div>
          `
        },
        {
          title: "Double Pointers & Pointer-to-Pointer Logic",
          content: `
            <p>We move to <strong>Indirection Levels</strong>. You will learn about <code>char **argv</code>—the pointer to an array of pointers. We explore how to pass a pointer to a function by its address so the function can "reallocate" or change the original pointer's target. This is the key to building dynamic data structures like <strong>Linked Lists</strong> and <strong>Trees</strong>, where nodes are scattered across the heap and linked by addresses.</p>
          `
        },
        {
          title: "Function Pointers: Implementing Callbacks",
          content: `
            <p>Functions also live in memory. We learn to store the address of a function in a variable. You will learn the syntax: <code>void (*ptr)(int)</code>. This is the foundation of <strong>Polymorphism in C</strong>. We'll use function pointers to implement a generic <code>sort</code> function that can handle any data type by passing a custom comparison function, mimicking the behavior of high-level interfaces in a low-level language.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Dynamic Memory & The Heap",
      lessons: [
        {
          title: "Malloc, Calloc, and Realloc Mechanics",
          content: `
            <p>The Stack is limited; the Heap is vast. We master <strong>Manual Memory Management</strong>. You will learn the difference between <code>malloc</code> (raw allocation) and <code>calloc</code> (zero-initialized allocation). We'll explore <code>realloc</code> and the danger of "Dangling Pointers" if the heap manager moves your data to a new address. We will emphasize the <strong>Golden Rule</strong>: Every <code>malloc</code> must have a matching <code>free</code>, or you face the slow death of a Memory Leak.</p>
          `
        },
        {
          title: "The Void Pointer & Generic Memory Blocks",
          content: `
            <p>The <code>void*</code> is the "Generic Pointer" of C. It has no type and no size. You will learn how to use <code>void*</code> and <code>memcpy</code> to move raw blocks of bytes regardless of their data type. This is how <code>malloc</code> works internally—it returns a <code>void*</code> that you then "cast" to your desired type, giving you absolute power over the raw silicon.</p>
            <div class="bg-zinc-950 p-6 rounded-2xl my-6 font-mono text-xs text-orange-400 border border-zinc-800">
              void *data = malloc(1024);<br/>
              int *int_data = (int*)data; // Casting generic to specific
            </div>
          `
        }
      ]
    },
    {
      title: "Module 5: Structs, Unions, and Data Alignment",
      lessons: [
        {
          title: "Struct Padding & Memory Alignment",
          content: `
            <p>The CPU doesn't read one byte at a time; it reads in "words" (usually 4 or 8 bytes). You will learn about <strong>Structure Padding</strong>. We'll show how the order of variables in a <code>struct</code> can change its size from 8 bytes to 12 bytes because the compiler adds "invisible" bytes to align data with the CPU word boundaries. You will learn to use <code>__attribute__((packed))</code> for network protocols where padding must be eliminated.</p>
          `
        },
        {
          title: "Unions: Shared Memory Space",
          content: `
            <p>A <code>union</code> is a structure where all members share the same memory location. You will learn how to use unions to interpret the same 4 bytes as either an <code>int</code>, a <code>float</code>, or 4 <code>chars</code>. This is a powerful tool for <strong>Low-Level Optimization</strong> and hardware register mapping, allowing you to access individual bits or the whole word simultaneously.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: File I/O & System Calls",
      lessons: [
        {
          title: "Streams vs. File Descriptors",
          content: `
            <p>We differentiate between high-level <code>FILE*</code> (buffered) and low-level <strong>File Descriptors</strong> (unbuffered). You will learn how the <code>fopen</code>, <code>fread</code>, and <code>fwrite</code> functions interact with the Operating System's kernel. We will build a file-copying utility that uses a custom buffer size to demonstrate how disk I/O performance changes based on the number of system calls made.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Final Lab - Building a Custom Shell",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-zinc-900 via-slate-900 to-black rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Terminal size={60} className="text-zinc-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">System Architect: Level 1</h2>
              <p class="text-zinc-400 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have mastered the language of the machine. From pointer indirection to manual memory 
                orchestration and bitwise logic, you are now a C programmer.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=c-101" class="group bg-zinc-100 text-black px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white transition-all shadow-2xl">
                    INITIALIZE CAPSTONE
                  </a>
                  <div className="text-left border-l border-white/20 pl-6 text-white">
                    <p className="font-bold uppercase text-xs tracking-widest opacity-60">Architect Level</p>
                    <p className="font-black text-lg">Firmware & Systems Engineer</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};