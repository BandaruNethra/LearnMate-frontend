export const LAB_DATA_BANK = {
  "java-testing": {
    title: "Java Testing & QA Masterclass",
    questions: [
      { q: "In JUnit 5, which annotation is used to run a method once before all test methods in a class?", a: ["@BeforeEach", "@BeforeAll", "@Initialize"], correct: "@BeforeAll", level: "Medium" },
      { q: "What is the primary difference between a 'Mock' and a 'Spy' in Mockito?", a: ["Mocks use real logic by default", "Spies wrap real objects, Mocks are complete stubs", "There is no difference"], correct: "Spies wrap real objects, Mocks are complete stubs", level: "Hard" },
      { q: "Which tool is used specifically for 'Mutation Testing' in the Java ecosystem?", a: ["JUnit Platform", "PITest", "JaCoCo"], correct: "PITest", level: "Hard" },
      { q: "What does 'Context Slicing' with @WebMvcTest achieve in Spring Boot?", a: ["Loads the entire ApplicationContext", "Loads only the web layer (Controllers/Filters)", "Loads only the Database layer"], correct: "Loads only the web layer (Controllers/Filters)", level: "Medium" },
      { q: "Which assertion is used to ensure multiple assertions run even if the first one fails?", a: ["assertEquals()", "assertAll()", "assertThat()"], correct: "assertAll()", level: "Medium" },
      { q: "What is a 'Flaky Test'?", a: ["A test that always fails", "A test that passes/fails inconsistently", "A test with no assertions"], correct: "A test that passes/fails inconsistently", level: "Easy" },
      { q: "Why is Testcontainers preferred over H2 for integration testing?", a: ["It is faster", "It runs a real Docker instance of your production DB", "It requires no configuration"], correct: "It runs a real Docker instance of your production DB", level: "Medium" },
      { q: "In BDD, what does the 'Gherkin' language define?", a: ["The Java implementation", "Business scenarios in plain English", "The Database schema"], correct: "Business scenarios in plain English", level: "Easy" },
      { q: "What is the default lifecycle of a JUnit 5 test class?", a: ["PER_CLASS", "PER_METHOD", "SINGLETON"], correct: "PER_METHOD", level: "Hard" },
      { q: "Which Mockito method verifies that a dependency was NEVER called?", a: ["verify(mock, zero())", "verify(mock, never())", "verifyNoInteractions()"], correct: "verify(mock, never())", level: "Medium" },
      { q: "What does JaCoCo measure?", a: ["Execution Speed", "Code Coverage", "Memory Leaks"], correct: "Code Coverage", level: "Easy" },
      { q: "What is the 'Testing Pyramid' suggesting?", a: ["More UI tests than Unit tests", "More Unit tests than UI tests", "Equal distribution"], correct: "More Unit tests than UI tests", level: "Medium" },
      { q: "How do you test a private method in modern Java testing?", a: ["Change it to public", "You don't; test it via public entry points", "Use Reflection API"], correct: "You don't; test it via public entry points", level: "Hard" },
      { q: "What is 'Red-Green-Refactor'?", a: ["A UI design pattern", "The TDD cycle", "A Git branching strategy"], correct: "The TDD cycle", level: "Easy" },
      { q: "Which annotation allows running the same test with different inputs?", a: ["@RepeatedTest", "@ParameterizedTest", "@DataTest"], correct: "@ParameterizedTest", level: "Medium" }
    ],
    project: {
      title: "The Bulletproof Banking API",
      desc: "Develop a Spring Boot service for bank transfers. You must implement TDD, 90% Line Coverage, and use Testcontainers for the Database layer.",
      requirements: ["JUnit 5", "Mockito", "Testcontainers", "PITest Report"]
    }
  },
  "python-beginners": {
    title: "Python Foundation Architect",
    questions: [
      { q: "What is the Global Interpreter Lock (GIL)?", a: ["A tool for thread safety", "A mutex allowing only one thread to execute bytecode", "A memory compression algorithm"], correct: "A mutex allowing only one thread to execute bytecode", level: "Hard" },
      { q: "Which of these is an 'Immutable' type in Python?", a: ["List", "Dictionary", "Tuple"], correct: "Tuple", level: "Medium" },
      { q: "How does Python handle memory for objects with zero references?", a: ["Manual free()", "Reference Counting & Garbage Collection", "It doesn't; memory is freed on exit"], correct: "Reference Counting & Garbage Collection", level: "Medium" },
      { q: "What is the difference between 'is' and '=='?", a: ["'is' checks identity, '==' checks value", "'is' checks value, '==' checks identity", "They are identical"], correct: "'is' checks identity, '==' checks value", level: "Hard" },
      { q: "What is a 'List Comprehension'?", a: ["A way to compress files", "A concise syntax for creating lists", "A memory debugging tool"], correct: "A concise syntax for creating lists", level: "Easy" },
      { q: "Which keyword allows a function to return a 'Generator'?", a: ["produce", "yield", "emit"], correct: "yield", level: "Medium" },
      { q: "What is 'EAFP' in Python culture?", a: ["Everything As Fast as Possible", "Easier to Ask Forgiveness than Permission", "End All Functional Programs"], correct: "Easier to Ask Forgiveness than Permission", level: "Medium" },
      { q: "Which module is used for Object Serialization?", a: ["json", "pickle", "serialize"], correct: "pickle", level: "Medium" },
      { q: "What is the 'LEGB' rule?", a: ["Legal Encoding Guide", "Scope resolution: Local, Enclosing, Global, Built-in", "A loop optimization rule"], correct: "Scope resolution: Local, Enclosing, Global, Built-in", level: "Hard" },
      { q: "What does the 'with' statement manage?", a: ["Loops", "Context Managers (Resource cleanup)", "Exception hierarchies"], correct: "Context Managers (Resource cleanup)", level: "Medium" },
      { q: "How do you create a virtual environment in Python 3?", a: ["python -m venv env", "pip install env", "virtualenv start"], correct: "python -m venv env", level: "Easy" },
      { q: "Which collection type provides O(1) average time complexity for lookups?", a: ["List", "Set", "Tuple"], correct: "Set", level: "Hard" },
      { q: "What is the purpose of __init__.py?", a: ["Initializes the OS", "Treats a directory as a package", "Deletes temporary files"], correct: "Treats a directory as a package", level: "Medium" },
      { q: "What is a 'Decorator' in Python?", a: ["A GUI element", "A function that modifies another function", "A code styler"], correct: "A function that modifies another function", level: "Hard" },
      { q: "What is the result of 0.1 + 0.2 == 0.3?", a: ["True", "False", "Error"], correct: "False", level: "Hard" }
    ],
    project: {
      title: "Real-time Log Analyzer",
      desc: "Create a Python script that processes a massive log file using Generators. Extract IP frequencies using a Dictionary and output a JSON report.",
      requirements: ["Generators", "Regex", "Pathlib", "Error Handling"]
    }
  },
  "c-101": {
    title: "C Programming: System Architect",
    questions: [
      { q: "Where is an uninitialized global variable stored in the memory map?", a: ["Stack", "BSS Segment", "Data Segment"], correct: "BSS Segment", level: "Medium" },
      { q: "What is the result of adding 1 to an int pointer (int *p) at address 0x1000 (assume 4-byte int)?", a: ["0x1001", "0x1004", "0x1008"], correct: "0x1004", level: "Hard" },
      { q: "Which stage of compilation handles the replacement of #define macros?", a: ["Compiler", "Assembler", "Preprocessor"], correct: "Preprocessor", level: "Easy" },
      { q: "What happens if you try to free() the same memory pointer twice?", a: ["Memory leak", "Double free vulnerability/crash", "Nothing happens"], correct: "Double free vulnerability/crash", level: "Medium" },
      { q: "What is the size of a union that contains a char[10] and an int?", a: ["10 bytes", "14 bytes", "Depends on padding, but at least 10"], correct: "10 bytes", level: "Medium" },
      { q: "Which function is used to change the size of an already allocated memory block on the heap?", a: ["malloc()", "realloc()", "calloc()"], correct: "realloc()", level: "Easy" },
      { q: "What is a 'Dangling Pointer'?", a: ["A pointer that is NULL", "A pointer to a memory location that was freed", "A pointer that hasn't been initialized"], correct: "A pointer to a memory location that was freed", level: "Medium" },
      { q: "What does the 'static' keyword do when applied to a global variable?", a: ["Makes it constant", "Limits its scope to the current file", "Moves it to the stack"], correct: "Limits its scope to the current file", level: "Hard" },
      { q: "Which operator is used to access structure members through a pointer?", a: [".", "->", "&"], correct: "->", level: "Easy" },
      { q: "What is the purpose of the 'void*' pointer in C?", a: ["It points to nothing", "It is a generic pointer that can point to any data type", "It is used for mathematical voids"], correct: "It is a generic pointer that can point to any data type", level: "Medium" },
      { q: "What is the binary result of (5 << 1)?", a: ["10", "2.5", "6"], correct: "10", level: "Medium" },
      { q: "Which header file is required for using the exit() function?", a: ["stdio.h", "stdlib.h", "string.h"], correct: "stdlib.h", level: "Easy" },
      { q: "What is 'Little-Endian' architecture?", a: ["MSB is stored at the lowest address", "LSB is stored at the lowest address", "Data is stored alphabetically"], correct: "LSB is stored at the lowest address", level: "Hard" },
      { q: "What does the 'extern' keyword signify?", a: ["Variable is stored in external RAM", "Variable is defined in another translation unit", "Variable is a hardware register"], correct: "Variable is defined in another translation unit", level: "Medium" },
      { q: "How do you determine the size of a data type in bytes during compile time?", a: ["sizeof()", "lengthof()", "memsize()"], correct: "sizeof()", level: "Easy" }
    ],
    project: {
      title: "Custom Shell Memory Manager",
      desc: "Build a manual memory allocator (my_malloc) using a large static char array. Implement a linked list to track free and allocated blocks.",
      requirements: ["Pointer Arithmetic", "Structs", "Static Memory", "First-fit algorithm"]
    }
  },

  "embedded-c": {
    title: "Embedded Systems Bare-Metal Architect",
    questions: [
      { q: "What does the 'volatile' keyword prevent the compiler from doing?", a: ["Changing the variable", "Caching the variable in a CPU register", "Moving the variable to the stack"], correct: "Caching the variable in a CPU register", level: "Hard" },
      { q: "Which register is typically used to enable a peripheral's clock in ARM Cortex-M?", a: ["GPIO_MODER", "RCC_AHBENR", "NVIC_ISER"], correct: "RCC_AHBENR", level: "Hard" },
      { q: "What is 'Interrupt Latency'?", a: ["The time an interrupt takes to finish", "The delay between a hardware signal and ISR execution", "The time between two interrupts"], correct: "The delay between a hardware signal and ISR execution", level: "Medium" },
      { q: "Which serial protocol uses only two wires (SDA and SCL)?", a: ["SPI", "I2C", "UART"], correct: "I2C", level: "Easy" },
      { q: "In an RTOS, what happens during a 'Context Switch'?", a: ["The CPU frequency changes", "The CPU saves registers of one task and loads another", "The hardware resets"], correct: "The CPU saves registers of one task and loads another", level: "Hard" },
      { q: "What is 'Watchdog Timer' used for?", a: ["Timing the execution of code", "Resetting the MCU if the code hangs", "Measuring power consumption"], correct: "Resetting the MCU if the code hangs", level: "Medium" },
      { q: "Which SPI signal is used to select a specific slave device?", a: ["MOSI", "SCLK", "SS/CS"], correct: "SS/CS", level: "Easy" },
      { q: "What is 'Priority Inversion' in an RTOS?", a: ["High priority task waits for a low priority task holding a mutex", "Tasks are sorted by ID", "Low priority tasks are deleted"], correct: "High priority task waits for a low priority task holding a mutex", level: "Hard" },
      { q: "What is the purpose of the 'Linker Script' (.ld file)?", a: ["Compiles the code", "Defines the memory layout of the chip (Flash/RAM boundaries)", "Links the debugger to the PC"], correct: "Defines the memory layout of the chip (Flash/RAM boundaries)", level: "Medium" },
      { q: "What is 'DMA' (Direct Memory Access) used for?", a: ["Increasing CPU clock speed", "Moving data between peripherals and RAM without CPU help", "Storing passwords"], correct: "Moving data between peripherals and RAM without CPU help", level: "Medium" },
      { q: "Which interrupt has the highest priority and cannot be disabled?", a: ["SysTick", "NMI (Non-Maskable Interrupt)", "HardFault"], correct: "NMI (Non-Maskable Interrupt)", level: "Hard" },
      { q: "What does 'Atomic Operation' mean in embedded context?", a: ["An operation that uses nuclear power", "An operation that cannot be interrupted", "A very small line of code"], correct: "An operation that cannot be interrupted", level: "Medium" },
      { q: "What is the standard voltage for 'Logic High' in most modern MCUs?", a: ["5.0V", "3.3V", "12V"], correct: "3.3V", level: "Easy" },
      { q: "Which register allows 'Single-Cycle' bit manipulation in ARM GPIO?", a: ["ODR", "BSRR", "IDR"], correct: "BSRR", level: "Hard" },
      { q: "What is a 'JTAG' used for?", a: ["Programming and Debugging hardware", "Cooling the CPU", "Connecting to Wi-Fi"], correct: "Programming and Debugging hardware", level: "Easy" }
    ],
    project: {
      title: "Self-Driving Interrupt Controller",
      desc: "Implement a UART driver that uses an Interrupt-driven Ring Buffer. Ensure thread safety between the ISR and the main loop using critical sections.",
      requirements: ["NVIC configuration", "Volatile buffers", "Atomic flags", "Baud rate calculation"]
    }
  },

  "c-graphics": {
    title: "Graphics Engine Architect",
    questions: [
      { q: "What is 'Double Buffering' used for in graphics?", a: ["Drawing two images at once", "Preventing screen tearing/flicker", "Increasing resolution"], correct: "Preventing screen tearing/flicker", level: "Medium" },
      { q: "Which algorithm is most efficient for drawing a line using only integer math?", a: ["DDA Algorithm", "Bresenham's Algorithm", "Euler's Method"], correct: "Bresenham's Algorithm", level: "Medium" },
      { q: "What is the purpose of a 'Z-Buffer'?", a: ["Storing colors", "Storing depth information for 3D occlusion", "Caching textures"], correct: "Storing depth information for 3D occlusion", level: "Hard" },
      { q: "In ARGB8888 format, how many bits are allocated to the Alpha channel?", a: ["4", "8", "16"], correct: "8", level: "Easy" },
      { q: "What is 'Backface Culling'?", a: ["Deleting old textures", "Not rendering triangles that face away from the camera", "Smoothing jagged edges"], correct: "Not rendering triangles that face away from the camera", level: "Medium" },
      { q: "What does 'VSync' synchronize the frame rate with?", a: ["The CPU clock", "The monitor's refresh rate", "The internet speed"], correct: "The monitor's refresh rate", level: "Easy" },
      { q: "Which coordinate system is used to project 3D space onto a 2D screen?", a: ["Homogeneous Coordinates", "Polar Coordinates", "Cartesian 2D"], correct: "Homogeneous Coordinates", level: "Hard" },
      { q: "What is a 'Sprite Sheet'?", a: ["A list of colors", "A single image containing multiple animation frames", "A mathematical formula for circles"], correct: "A single image containing multiple animation frames", level: "Easy" },
      { q: "What is 'Alpha Blending'?", a: ["Mixing two colors based on transparency", "Making an image brighter", "Converting 3D to 2D"], correct: "Mixing two colors based on transparency", level: "Medium" },
      { q: "How do you calculate the memory offset of a pixel at (x, y) in a 1D array?", a: ["y + x", "y * width + x", "x * height + y"], correct: "y * width + x", level: "Medium" },
      { q: "What is 'Barycentric Coordinates' used for?", a: ["Moving the camera", "Interpolating values (like color) inside a triangle", "Rotating 3D cubes"], correct: "Interpolating values (like color) inside a triangle", level: "Hard" },
      { q: "What is the 'Painter's Algorithm'?", a: ["Drawing objects from back to front", "Using a brush tool", "Automatically coloring shapes"], correct: "Drawing objects from back to front", level: "Easy" },
      { q: "What does 'Bit-Banging' mean in a graphics context?", a: ["Hacking a GPU", "Manually controlling I/O pins to simulate a protocol", "Optimizing bitwise operations"], correct: "Manually controlling I/O pins to simulate a protocol", level: "Medium" },
      { q: "What is an 'Affine Transformation'?", a: ["A transformation that preserves collinearity and ratios of distances", "A transformation that changes the color", "A compression algorithm"], correct: "A transformation that preserves collinearity and ratios of distances", level: "Hard" },
      { q: "Which SDL2 function is used to push the backbuffer to the screen?", a: ["SDL_RenderClear", "SDL_RenderPresent", "SDL_UpdateWindow"], correct: "SDL_RenderPresent", level: "Easy" }
    ],
    project: {
      title: "Starfield Warp Engine",
      desc: "Create a software-rendered starfield simulation. Implement 3D to 2D perspective projection, variable star speeds, and alpha-faded trails.",
      requirements: ["Perspective Projection", "Struct arrays", "Delta-time animation", "Pixel-level manipulation"]
    }
  },
  "python-data-science": {
    title: "Python for Data Science: Industrial Architect",
    questions: [
      { q: "What is 'Vectorization' in NumPy?", a: ["Converting code to vectors", "Replacing loops with optimized C-level array operations", "Drawing 2D plots"], correct: "Replacing loops with optimized C-level array operations", level: "Medium" },
      { q: "Which Pandas method combines DataFrames based on a shared key?", a: ["concat()", "merge()", "append()"], correct: "merge()", level: "Easy" },
      { q: "What is the 'Bias-Variance Tradeoff'?", a: ["Balancing underfitting and overfitting", "Speed vs Memory", "Cleaning vs Analyzing"], correct: "Balancing underfitting and overfitting", level: "Hard" },
      { q: "In Matplotlib, what does 'plt.subplots()' return?", a: ["Colors", "Figure and array of Axes objects", "A PNG image"], correct: "Figure and array of Axes objects", level: "Medium" },
      { q: "What is 'Standardization' in feature scaling?", a: ["Removing columns", "Centering data around mean 0 with unit variance", "Increasing resolution"], correct: "Centering data around mean 0 with unit variance", level: "Medium" },
      { q: "Which library is optimized for handling datasets larger than RAM?", a: ["Pandas", "Dask", "Matplotlib"], correct: "Dask", level: "Hard" },
      { q: "What is the difference between 'Series' and 'DataFrame'?", a: ["Series is 1D, DataFrame is 2D", "Series is for text, DataFrame for numbers", "They are identical"], correct: "Series is 1D, DataFrame is 2D", level: "Easy" },
      { q: "What is 'Broadcasting' in NumPy?", a: ["Networking", "Arithmetic between arrays of different shapes", "Streaming data"], correct: "Arithmetic between arrays of different shapes", level: "Hard" },
      { q: "Which function calculates the correlation between columns in Pandas?", a: ["df.corr()", "df.relation()", "df.calculate()"], correct: "df.corr()", level: "Easy" },
      { q: "What is 'Exploratory Data Analysis' (EDA)?", a: ["The final deployment", "The process of analyzing datasets to summarize main characteristics", "Encryption"], correct: "The process of analyzing datasets to summarize main characteristics", level: "Medium" },
      { q: "What does 'NaN' stand for in a dataset?", a: ["Not a Number", "New and Normal", "Numerical Analysis Node"], correct: "Not a Number", level: "Easy" },
      { q: "How do you handle categorical data for machine learning?", a: ["One-Hot Encoding", "Deleting the data", "Multiplying by zero"], correct: "One-Hot Encoding", level: "Medium" },
      { q: "What is 'p-value' used for in statistics?", a: ["Pricing", "Determining statistical significance", "Programming"], correct: "Determining statistical significance", level: "Hard" },
      { q: "Which tool is standard for interactive data storytelling?", a: ["Jupyter Notebooks", "Notepad", "Excel"], correct: "Jupyter Notebooks", level: "Easy" },
      { q: "What is 'Data Wrangling'?", a: ["Cleaning and transforming raw data into a usable format", "Hacking", "Compressing files"], correct: "Cleaning and transforming raw data into a usable format", level: "Medium" }
    ],
    project: { title: "Global Health Insights", desc: "Process a massive dataset to find correlations between GDP and Life Expectancy.", requirements: ["Dask", "Seaborn", "Correlation Matrices"] }
  },

  "python-ai": {
    title: "AI & Deep Learning Engineer",
    questions: [
      { q: "What is an 'Activation Function'?", a: ["Stops the program", "Introduces non-linearity into the network", "Stores data"], correct: "Introduces non-linearity into the network", level: "Medium" },
      { q: "What does 'Gradient Descent' minimize?", a: ["Loss Function", "CPU usage", "Number of layers"], correct: "Loss Function", level: "Easy" },
      { q: "What is 'Tokenization' in NLP?", a: ["Paying", "Breaking text into smaller units like words/subwords", "Encryption"], correct: "Breaking text into smaller units like words/subwords", level: "Easy" },
      { q: "What is a 'Transformer' architecture?", a: ["Electrical device", "Attention-based sequence processing model", "Compression tool"], correct: "Attention-based sequence processing model", level: "Hard" },
      { q: "What is 'Transfer Learning'?", a: ["Moving code", "Using pre-trained models on new tasks", "Teaching students"], correct: "Using pre-trained models on new tasks", level: "Medium" },
      { q: "What is 'Backpropagation'?", a: ["Calculating gradients to update weights", "Printing data", "Reverse engineering"], correct: "Calculating gradients to update weights", level: "Hard" },
      { q: "In CNNs, what is a 'Kernel/Filter' used for?", a: ["Filtering users", "Feature extraction from images", "Cleaning RAM"], correct: "Feature extraction from images", level: "Medium" },
      { q: "What is 'Overfitting'?", a: ["Training too fast", "Model performs well on training data but poorly on test data", "Model is too small"], correct: "Model performs well on training data but poorly on test data", level: "Easy" },
      { q: "What is the 'Softmax' function used for?", a: ["Normalizing outputs into a probability distribution", "Hardening code", "Deleting layers"], correct: "Normalizing outputs into a probability distribution", level: "Medium" },
      { q: "What is 'Reinforcement Learning'?", a: ["Learning through trial and reward", "Memorizing text", "Static analysis"], correct: "Learning through trial and reward", level: "Hard" },
      { q: "Which library is maintained by Google for AI?", a: ["PyTorch", "TensorFlow", "Scikit-Learn"], correct: "TensorFlow", level: "Easy" },
      { q: "What is a 'Generative Adversarial Network' (GAN)?", a: ["Two networks competing to create data", "A firewall", "A fast loop"], correct: "Two networks competing to create data", level: "Hard" },
      { q: "What is 'Epoch' in training?", a: ["One pass over the full dataset", "A time format", "A type of layer"], correct: "One pass over the full dataset", level: "Easy" },
      { q: "What is 'Dropout' in neural networks?", a: ["Stopping school", "Randomly disabling neurons to prevent overfitting", "A power outage"], correct: "Randomly disabling neurons to prevent overfitting", level: "Medium" },
      { q: "What is 'Hyperparameter Tuning'?", a: ["Adjusting hardware", "Optimizing parameters like Learning Rate", "Writing documentation"], correct: "Optimizing parameters like Learning Rate", level: "Medium" }
    ],
    project: { title: "Neural Vision Classifier", desc: "Build a CNN to classify medical images with 95%+ precision.", requirements: ["PyTorch", "Data Augmentation", "ResNet"] }
  },

  "react-mastery": {
    title: "React Mastery: Component Architect",
    questions: [
      { q: "What is the 'Virtual DOM'?", a: ["3D UI", "In-memory representation of the real DOM", "Browser plugin"], correct: "In-memory representation of the real DOM", level: "Medium" },
      { q: "Which hook handles side effects?", a: ["useState", "useEffect", "useContext"], correct: "useEffect", level: "Easy" },
      { q: "What is 'Reconciliation'?", a: ["Merging branches", "Syncing Virtual DOM with Real DOM", "Debugging"], correct: "Syncing Virtual DOM with Real DOM", level: "Hard" },
      { q: "What happens if you update state directly?", a: ["UI re-renders", "No re-render detected", "Crashes"], correct: "No re-render detected", level: "Medium" },
      { q: "What is the purpose of 'useMemo'?", a: ["Local storage", "Memoizing expensive calculations", "Internet speed"], correct: "Memoizing expensive calculations", level: "Medium" },
      { q: "How do you pass data through the component tree without props?", a: ["Context API", "Redux only", "Static variables"], correct: "Context API", level: "Medium" },
      { q: "What is a 'Higher-Order Component' (HOC)?", a: ["A large component", "A function that takes a component and returns a new one", "A component with many props"], correct: "A function that takes a component and returns a new one", level: "Hard" },
      { q: "What is the 'Ref' attribute used for?", a: ["Direct DOM access", "State management", "Styling"], correct: "Direct DOM access", level: "Medium" },
      { q: "What is 'React.memo'?", a: ["A hook", "A higher-order component for memoizing functional components", "A storage tool"], correct: "A higher-order component for memoizing functional components", level: "Hard" },
      { q: "What are 'Keys' used for in lists?", a: ["Security", "Helping React identify which items changed", "Styling"], correct: "Helping React identify which items changed", level: "Easy" },
      { q: "What is 'Fragment' (<>)?", a: ["A broken component", "A way to group children without adding extra DOM nodes", "A CSS rule"], correct: "A way to group children without adding extra DOM nodes", level: "Easy" },
      { q: "Which hook provides access to the DOM element in functional components?", a: ["useRef", "useEffect", "useDom"], correct: "useRef", level: "Medium" },
      { q: "What is 'Hydration'?", a: ["Drinking water", "Attaching event listeners to server-side HTML", "Cleaning code"], correct: "Attaching event listeners to server-side HTML", level: "Hard" },
      { q: "What is 'Strict Mode'?", a: ["A tool for highlighting potential problems", "A CSS compiler", "A security firewall"], correct: "A tool for highlighting potential problems", level: "Medium" },
      { q: "What is 'Prop Drilling'?", a: ["A good practice", "Passing data through many levels of components", "A database tool"], correct: "Passing data through many levels of components", level: "Easy" }
    ],
    project: { title: "Atomic Design Dashboard", desc: "Build a complex SaaS dashboard using Atomic Design and custom hooks.", requirements: ["Custom Hooks", "Context API", "Portals"] }
  },

  "nextjs-fullstack": {
    title: "Next.js Fullstack Titan",
    questions: [
      { q: "What is 'Server-Side Rendering' (SSR)?", a: ["Client rendering", "Generating HTML on every request", "Caching static files"], correct: "Generating HTML on every request", level: "Medium" },
      { q: "What is the 'App Router'?", a: ["Mobile library", "New structure using Server Components", "Database manager"], correct: "New structure using Server Components", level: "Hard" },
      { q: "What is 'ISR'?", a: ["Updating static pages without full rebuild", "Deleting files", "Git speed"], correct: "Updating static pages without full rebuild", level: "Hard" },
      { q: "How do you create an API route in App Router?", a: ["api.js", "route.ts inside an api/ folder", "Express"], correct: "route.ts inside an api/ folder", level: "Medium" },
      { q: "What are 'Server Actions'?", a: ["Client functions", "Server-side functions called from client", "Bot scripts"], correct: "Server-side functions called from client", level: "Hard" },
      { q: "What is the purpose of 'next/image'?", a: ["Uploading photos", "Automatic image optimization", "A filter"], correct: "Automatic image optimization", level: "Easy" },
      { q: "Which file is used for custom layouts in App Router?", a: ["layout.js", "index.js", "app.js"], correct: "layout.js", level: "Easy" },
      { q: "What is 'Static Site Generation' (SSG)?", a: ["Dynamic rendering", "Pre-rendering pages at build time", "Real-time updates"], correct: "Pre-rendering pages at build time", level: "Medium" },
      { q: "What does 'use client' directive do?", a: ["Connects to internet", "Marks a component to be rendered on the client", "Speeds up CPU"], correct: "Marks a component to be rendered on the client", level: "Medium" },
      { q: "How do you handle SEO in Next.js?", a: ["Metadata API", "Using <h1> only", "External plugins only"], correct: "Metadata API", level: "Medium" },
      { q: "What is 'Middleware' in Next.js?", a: ["A CSS tool", "Code that runs before a request is completed", "A database"], correct: "Code that runs before a request is completed", level: "Hard" },
      { q: "What is the 'Link' component used for?", a: ["External sites only", "Client-side navigation between routes", "Downloading files"], correct: "Client-side navigation between routes", level: "Easy" },
      { q: "What is 'Parallel Routing'?", a: ["Two websites in one", "Rendering multiple pages in the same layout simultaneously", "Downloading code"], correct: "Rendering multiple pages in the same layout simultaneously", level: "Hard" },
      { q: "What is 'Streaming' in Next.js?", a: ["Twitch integration", "Progressively rendering UI fragments", "Video playback"], correct: "Progressively rendering UI fragments", level: "Medium" },
      { q: "What is 'Prisma' often used for in Next.js?", a: ["Styling", "ORM for database management", "Authentication"], correct: "ORM for database management", level: "Medium" }
    ],
    project: { title: "Next-Commerce Hub", desc: "Create a full store with Stripe, SSR, and Server Actions.", requirements: ["Prisma", "Stripe", "Auth.js"] }
  },

  "modern-css": {
    title: "Modern CSS & Tailwind Pro",
    questions: [
      { q: "What is 'Utility-First'?", a: ["Pre-built components", "Low-level classes for custom designs", "Icons"], correct: "Low-level classes for custom designs", level: "Easy" },
      { q: "How do you handle responsive design?", a: ["Media queries", "Prefixes like sm:, md:", "JS plugin"], correct: "Prefixes like sm:, md:", level: "Easy" },
      { q: "What is 'PurgeCSS'?", a: ["Removing unused CSS", "Database cleaning", "Formatting"], correct: "Removing unused CSS", level: "Medium" },
      { q: "What is the 'JIT' engine?", a: ["Animation timer", "Compiler generating CSS on-demand", "Deployment tool"], correct: "Compiler generating CSS on-demand", level: "Hard" },
      { q: "How do you apply styles to hover?", a: ["hover { ... }", "hover:bg-blue-500", "onHover"], correct: "hover:bg-blue-500", level: "Easy" },
      { q: "What are 'Arbitrary Values' in Tailwind?", a: ["Random numbers", "Bracket syntax like top-[117px]", "Undefined variables"], correct: "Bracket syntax like top-[117px]", level: "Medium" },
      { q: "Which class is used for 'Flexbox' layout?", a: ["display: flex", "flex", "box-flex"], correct: "flex", level: "Easy" },
      { q: "What is 'tailwind.config.js' for?", a: ["Browser history", "Customizing themes and plugins", "Storing passwords"], correct: "Customizing themes and plugins", level: "Medium" },
      { q: "How do you create a 'Dark Mode' variant?", a: ["dark:text-white", "mode-dark", "black-white"], correct: "dark:text-white", level: "Medium" },
      { q: "What is 'Group Hover'?", a: ["Hovering multiple mice", "Styling a child based on parent hover", "A CSS error"], correct: "Styling a child based on parent hover", level: "Hard" },
      { q: "Which utility centers an element with auto margins?", a: ["m-auto", "mx-auto", "center"], correct: "mx-auto", level: "Easy" },
      { q: "What does 'aspect-video' do?", a: ["Plays a video", "Sets the aspect ratio to 16:9", "Changes colors"], correct: "Sets the aspect ratio to 16:9", level: "Medium" },
      { q: "How do you extend the default spacing scale?", a: ["Using !important", "Adding values to 'theme.extend.spacing'", "Writing a new CSS file"], correct: "Adding values to 'theme.extend.spacing'", level: "Hard" },
      { q: "What is '@apply' directive used for?", a: ["Applying for jobs", "Inlining Tailwind classes into custom CSS", "Updating software"], correct: "Inlining Tailwind classes into custom CSS", level: "Medium" },
      { q: "What is the 'container' class for?", a: ["Storing data", "Fixing an element's width to the current breakpoint", "Drawing boxes"], correct: "Fixing an element's width to the current breakpoint", level: "Easy" }
    ],
    project: { title: "Glassmorphism UI Kit", desc: "Develop an accessible UI component library with custom Tailwind config.", requirements: ["Arbitrary Values", "Grid", "Themes"] }
  },

  "javascript-pro": {
    title: "JavaScript: Professional Engine",
    questions: [
      { q: "What is 'The Event Loop'?", a: ["Loop 100 times", "Mechanism coordinating execution and events", "Recursion"], correct: "Mechanism coordinating execution and events", level: "Hard" },
      { q: "What is 'Hoisting'?", a: ["Moving PC", "Lifting declarations to the top of scope", "Deleting code"], correct: "Lifting declarations to the top of scope", level: "Medium" },
      { q: "What is a 'Promise'?", a: ["Constant variable", "Object representing eventual completion/failure", "Contract"], correct: "Object representing eventual completion/failure", level: "Easy" },
      { q: "What is 'Prototypal Inheritance'?", a: ["Copying classes", "Objects inheriting directly from objects", "Template usage"], correct: "Objects inheriting directly from objects", level: "Hard" },
      { q: "What is 'Temporal Dead Zone'?", a: ["Chrome bug", "Period between block and initialization", "Time-out"], correct: "Period between block and initialization", level: "Hard" },
      { q: "What is a 'Closure'?", a: ["Closing the tab", "Function bundled with its lexical environment", "Loop end"], correct: "Function bundled with its lexical environment", level: "Medium" },
      { q: "What is the difference between '==' and '==='?", a: ["Value vs Value+Type", "Identity vs Value", "No difference"], correct: "Value vs Value+Type", level: "Easy" },
      { q: "What is 'Memoization'?", a: ["Memorizing code", "Caching function results based on inputs", "Writing notes"], correct: "Caching function results based on inputs", level: "Medium" },
      { q: "What are 'Generators' in JS?", a: ["Electricity tools", "Functions that can be exited and later re-entered", "Random numbers"], correct: "Functions that can be exited and later re-entered", level: "Hard" },
      { q: "What is 'Currying'?", a: ["A spice", "Transforming a function with multiple args into a sequence of nested functions", "Fast execution"], correct: "Transforming a function with multiple args into a sequence of nested functions", level: "Hard" },
      { q: "What is 'Strict Mode' ('use strict')?", a: ["Makes JS faster", "Forces better error handling and prevents unsafe actions", "Encrypts code"], correct: "Forces better error handling and prevents unsafe actions", level: "Medium" },
      { q: "What is the 'this' keyword?", a: ["A static reference", "Context of the current execution", "The previous variable"], correct: "Context of the current execution", level: "Medium" },
      { q: "What is an 'IIFE'?", a: ["A data format", "Immediately Invoked Function Expression", "A loop type"], correct: "Immediately Invoked Function Expression", level: "Medium" },
      { q: "What does 'Object.freeze()' do?", a: ["Crashes the PC", "Prevents any changes to an object", "Saves it to disk"], correct: "Prevents any changes to an object", level: "Easy" },
      { q: "What is 'Map' vs 'Object'?", a: ["Maps allow any key type; Objects are mainly strings/symbols", "Maps are slower", "They are the same"], correct: "Maps allow any key type; Objects are mainly strings/symbols", level: "Hard" }
    ],
    project: { title: "Observable State Engine", desc: "Write a reactive state management library from scratch using Proxies.", requirements: ["Proxies", "Closures", "Observers"] }
  },
  "python-fastapi": {
    title: "Python FastAPI: High-Performance Backend",
    questions: [
      { q: "What is 'Pydantic' used for in FastAPI?", a: ["Database migrations", "Data validation and settings management using Python type hints", "Web server configuration"], correct: "Data validation and settings management using Python type hints", level: "Easy" },
      { q: "What is 'Asynchronous Server Gateway Interface' (ASGI)?", a: ["A synchronous database driver", "The spiritual successor to WSGI, supporting async Python apps", "A frontend framework"], correct: "The spiritual successor to WSGI, supporting async Python apps", level: "Medium" },
      { q: "How do you define an optional query parameter in a FastAPI path operation?", a: ["Using a default value of None", "Using the @optional decorator", "It is optional by default"], correct: "Using a default value of None", level: "Easy" },
      { q: "What is 'Dependency Injection' in FastAPI?", a: ["Injecting viruses into the code", "A system to share logic (like DB sessions) across different routes", "Installing packages via pip"], correct: "A system to share logic (like DB sessions) across different routes", level: "Medium" },
      { q: "Which tool is commonly used to run FastAPI applications in production?", a: ["Uvicorn/Gunicorn", "Node.js", "Python Shell"], correct: "Uvicorn/Gunicorn", level: "Easy" },
      { q: "What are 'Background Tasks' in FastAPI used for?", a: ["Mining crypto", "Operations that happen after returning a response (e.g., sending emails)", "Running the main server"], correct: "Operations that happen after returning a response (e.g., sending emails)", level: "Medium" },
      { q: "How does FastAPI generate its interactive API documentation (Swagger)?", a: ["Manual XML files", "Automatically via OpenAPI specifications", "It doesn't have docs"], correct: "Automatically via OpenAPI specifications", level: "Easy" },
      { q: "What is the purpose of 'Starlette' in the context of FastAPI?", a: ["It is the underlying web toolkit that handles routing and pub/sub", "It's a CSS library", "It's a database"], correct: "It is the underlying web toolkit that handles routing and pub/sub", level: "Hard" },
      { q: "What does the 'yield' keyword do in a FastAPI Dependency?", a: ["Ends the process", "Allows setup and teardown logic (e.g., closing a DB connection)", "Increases speed"], correct: "Allows setup and teardown logic (e.g., closing a DB connection)", level: "Hard" },
      { q: "How do you handle 'CORS' (Cross-Origin Resource Sharing) in FastAPI?", a: ["Using CORSMiddleware", "It's handled by the browser automatically", "Disable the internet"], correct: "Using CORSMiddleware", level: "Medium" },
      { q: "What is 'Path()', 'Query()', and 'Body()' in FastAPI?", a: ["HTML tags", "Functions to add metadata and validation to parameters", "Variable types"], correct: "Functions to add metadata and validation to parameters", level: "Medium" },
      { q: "What is the benefit of using 'async def' over 'def' for route handlers?", a: ["It's always faster", "It allows non-blocking I/O operations", "It makes the code shorter"], correct: "It allows non-blocking I/O operations", level: "Medium" },
      { q: "What is a 'Websocket' in FastAPI?", a: ["A lightbulb", "A persistent connection for full-duplex communication", "A type of URL"], correct: "A persistent connection for full-duplex communication", level: "Medium" },
      { q: "How do you secure a FastAPI endpoint with OAuth2?", a: ["Using OAuth2PasswordBearer", "Using a simple 'if' statement", "Encryption via zip files"], correct: "Using OAuth2PasswordBearer", level: "Hard" },
      { q: "What is 'Response Model' parameter used for?", a: ["Designing UI", "Filtering and documenting the output data", "Input validation"], correct: "Filtering and documenting the output data", level: "Medium" }
    ],
    project: { title: "Real-time Analytics Engine", desc: "Build a FastAPI backend that ingest data via WebSockets and validates it using Pydantic V2.", requirements: ["Async/Await", "Uvicorn", "Pydantic Models"] }
  },

  "java-android": {
    title: "Java Android: Mobile System Architect",
    questions: [
      { q: "What is an 'Activity' in Android?", a: ["A background service", "A single screen with a user interface", "A database table"], correct: "A single screen with a user interface", level: "Easy" },
      { q: "What is the 'AndroidManifest.xml' file for?", a: ["Styling the app", "Declaring components, permissions, and app metadata", "Storing Java code"], correct: "Declaring components, permissions, and app metadata", level: "Easy" },
      { q: "What is 'Intent' in Android?", a: ["A messaging object used to request an action from another component", "A loop", "A design pattern"], correct: "A messaging object used to request an action from another component", level: "Medium" },
      { q: "Which lifecycle method is called when an activity is no longer visible?", a: ["onPause()", "onStop()", "onDestroy()"], correct: "onStop()", level: "Medium" },
      { q: "What is 'RecyclerView' used for?", a: ["Displaying large sets of data efficiently by recycling views", "Circular loops", "Sorting files"], correct: "Displaying large sets of data efficiently by recycling views", level: "Easy" },
      { q: "What is 'View Binding'?", a: ["Glueing the phone screen", "A feature that allows you to more easily write code that interacts with views", "A type of CSS"], correct: "A feature that allows you to more easily write code that interacts with views", level: "Medium" },
      { q: "What is a 'Fragment'?", a: ["A piece of an activity's UI", "A broken code block", "A database query"], correct: "A piece of an activity's UI", level: "Medium" },
      { q: "What is the purpose of the 'Context' object?", a: ["Global information about an application environment", "A text editor", "User's contact list"], correct: "Global information about an application environment", level: "Hard" },
      { q: "Which component is best for running long operations in the background?", a: ["Activity", "Service", "Broadcast Receiver"], correct: "Service", level: "Medium" },
      { q: "What is 'Retrofit' commonly used for?", a: ["Image editing", "Type-safe HTTP client for Android and Java", "Database migrations"], correct: "Type-safe HTTP client for Android and Java", level: "Easy" },
      { q: "What is 'Room' in Android development?", a: ["A physical space", "An abstraction layer over SQLite", "A UI layout"], correct: "An abstraction layer over SQLite", level: "Medium" },
      { q: "What is the 'Main Thread' (UI Thread) restriction?", a: ["No networking or heavy disk I/O", "No Java math", "No variables"], correct: "No networking or heavy disk I/O", level: "Hard" },
      { q: "What is 'Dependency Injection' with Dagger/Hilt used for?", a: ["Adding new features", "Managing object lifecycles and decoupling components", "Speeding up Wi-Fi"], correct: "Managing object lifecycles and decoupling components", level: "Hard" },
      { q: "What is a 'Content Provider'?", a: ["A YouTube clone", "A component that manages access to a structured set of data", "A cloud server"], correct: "A component that manages access to a structured set of data", level: "Hard" },
      { q: "What is 'Jetpack Compose'?", a: ["A jet engine", "A modern declarative UI toolkit", "A testing tool"], correct: "A modern declarative UI toolkit", level: "Medium" }
    ],
    project: { title: "Secure Photo Vault", desc: "Build an Android app that uses Room for storage and Biometric Auth for security.", requirements: ["Room DB", "ViewModel", "LiveData"] }
  },

  "java-fundamentals": {
    title: "Java Fundamentals: Core Engine",
    questions: [
      { q: "What is the 'JVM'?", a: ["Java Variable Manager", "Java Virtual Machine", "Just Variable Memory"], correct: "Java Virtual Machine", level: "Easy" },
      { q: "What is the difference between 'JDK' and 'JRE'?", a: ["JDK includes dev tools; JRE is just for running apps", "JRE is for developers; JDK is for users", "They are the same"], correct: "JDK includes dev tools; JRE is just for running apps", level: "Easy" },
      { q: "What does 'Static' mean in Java?", a: ["The variable changes often", "The member belongs to the class rather than an instance", "The code is broken"], correct: "The member belongs to the class rather than an instance", level: "Medium" },
      { q: "What is 'Polymorphism'?", a: ["Many forms: ability of an object to take on many forms", "Deleting code", "A type of loop"], correct: "Many forms: ability of an object to take on many forms", level: "Medium" },
      { q: "Which collection allows duplicate elements?", a: ["Set", "List", "Map"], correct: "List", level: "Easy" },
      { q: "What is the 'Final' keyword used for on a class?", a: ["Makes the class private", "Prevents the class from being subclassed (inherited)", "Ends the program"], correct: "Prevents the class from being subclassed (inherited)", level: "Medium" },
      { q: "What is 'Abstract Class' vs 'Interface' (Pre-Java 8)?", a: ["Abstract can have state; Interface only constants/methods", "Interface has state; Abstract doesn't", "No difference"], correct: "Abstract can have state; Interface only constants/methods", level: "Hard" },
      { q: "What is 'Garbage Collection'?", a: ["Deleting old files", "Automatic memory management that reclaims unused heap memory", "Cleaning the keyboard"], correct: "Automatic memory management that reclaims unused heap memory", level: "Medium" },
      { q: "What is a 'Checked Exception'?", a: ["A runtime error", "An exception that must be either caught or declared in a throws clause", "A logical error"], correct: "An exception that must be either caught or declared in a throws clause", level: "Hard" },
      { q: "What is 'Autoboxing'?", a: ["Automatic conversion between primitives and their wrapper classes", "Robotic boxing", "Boxing code in a UI"], correct: "Automatic conversion between primitives and their wrapper classes", level: "Medium" },
      { q: "Which class is the superclass of all classes in Java?", a: ["String", "Object", "Main"], correct: "Object", level: "Easy" },
      { q: "What is the purpose of 'Generics'?", a: ["Writing general code", "Ensuring type safety at compile time", "Lowering file size"], correct: "Ensuring type safety at compile time", level: "Medium" },
      { q: "What does the 'volatile' keyword do in Java?", a: ["Prevents variable modification", "Ensures variable changes are visible across threads", "Speeds up loops"], correct: "Ensures variable changes are visible across threads", level: "Hard" },
      { q: "What is 'Reflection' in Java?", a: ["Mirroring code", "Examining or modifying the runtime behavior of applications", "Debugging"], correct: "Examining or modifying the runtime behavior of applications", level: "Hard" },
      { q: "What is 'Stream API' used for?", a: ["Video streaming", "Functional-style operations on sequences of elements", "Networking"], correct: "Functional-style operations on sequences of elements", level: "Medium" }
    ],
    project: { title: "Banking Core System", desc: "Build a CLI banking system using OOP, Generics, and Exception handling.", requirements: ["Inheritance", "Generics", "Custom Exceptions"] }
  },

  "java-spring-boot": {
    title: "Spring Boot: Enterprise Architect",
    questions: [
      { q: "What is 'Inversion of Control' (IoC)?", a: ["The user controlling the app", "The framework managing the lifecycle and dependencies of objects", "A UI pattern"], correct: "The framework managing the lifecycle and dependencies of objects", level: "Hard" },
      { q: "Which annotation marks a class as a Spring-managed bean?", a: ["@Bean", "@Component", "@Controller"], correct: "@Component", level: "Easy" },
      { q: "What is '@SpringBootApplication' composed of?", a: ["@Configuration, @EnableAutoConfiguration, @ComponentScan", "@MVC, @Data, @Boot", "@Web, @DB, @Auth"], correct: "@Configuration, @EnableAutoConfiguration, @ComponentScan", level: "Medium" },
      { q: "How do you define a REST endpoint that handles GET requests?", a: ["@PostRequest", "@GetMapping", "@Fetch"], correct: "@GetMapping", level: "Easy" },
      { q: "What is 'Spring Data JPA'?", a: ["A database", "A framework that simplifies data access using the Repository pattern", "A CSS tool"], correct: "A framework that simplifies data access using the Repository pattern", level: "Medium" },
      { q: "What is 'Actuator' in Spring Boot?", a: ["A motor", "Features to monitor and manage your application in production", "A testing tool"], correct: "Features to monitor and manage your application in production", level: "Medium" },
      { q: "What is the purpose of 'application.properties'?", a: ["Storing Java code", "Externalizing configuration (DB URLs, ports, etc.)", "Styling"], correct: "Externalizing configuration (DB URLs, ports, etc.)", level: "Easy" },
      { q: "What is '@Autowired' used for?", a: ["Automatic driving", "Injecting a dependency automatically", "Connecting to Wi-Fi"], correct: "Injecting a dependency automatically", level: "Medium" },
      { q: "What is 'Spring Security'?", a: ["A firewall hardware", "A framework providing authentication and authorization", "An antivirus"], correct: "A framework providing authentication and authorization", level: "Medium" },
      { q: "What is a 'Profile' in Spring Boot?", a: ["User's bio", "A way to segregate parts of your app configuration for different environments", "A social media feature"], correct: "A way to segregate parts of your app configuration for different environments", level: "Medium" },
      { q: "What is '@RestController'?", a: ["A controller that takes a break", "A combination of @Controller and @ResponseBody", "A database controller"], correct: "@RestController", level: "Easy" },
      { q: "How do you handle global exceptions in Spring Boot?", a: ["@ControllerAdvice", "@ErrorHandle", "try-catch in every method"], correct: "@ControllerAdvice", level: "Hard" },
      { q: "What is 'Lombok'?", a: ["A city", "A library that reduces boilerplate code (Getters/Setters)", "A database"], correct: "A library that reduces boilerplate code (Getters/Setters)", level: "Easy" },
      { q: "What is 'Dependency Scope' in Maven/Spring?", a: ["Determines when a dependency is available (compile, runtime, test)", "Size of the file", "Security level"], correct: "Determines when a dependency is available (compile, runtime, test)", level: "Medium" },
      { q: "What is 'Thymeleaf'?", a: ["A spice", "A modern server-side Java template engine for web", "A logging tool"], correct: "A modern server-side Java template engine for web", level: "Medium" }
    ],
    project: { title: "Microservices Gateway", desc: "Build a Spring Boot microservice with JWT Security and Postgres integration.", requirements: ["Spring Security", "JPA", "JWT"] }
  },

  "java-dsa": {
    title: "Java DSA: Algorithmic Master",
    questions: [
      { q: "What is the time complexity of searching in a HashMap (average case)?", a: ["O(n)", "O(1)", "O(log n)"], correct: "O(1)", level: "Easy" },
      { q: "Which data structure follows LIFO (Last In First Out)?", a: ["Queue", "Stack", "LinkedList"], correct: "Stack", level: "Easy" },
      { q: "What is the worst-case time complexity of QuickSort?", a: ["O(n log n)", "O(n^2)", "O(n)"], correct: "O(n^2)", level: "Medium" },
      { q: "What is a 'Binary Search Tree' (BST)?", a: ["A tree with 3 nodes", "A tree where left < parent and right > parent", "A tree for binary files"], correct: "A tree where left < parent and right > parent", level: "Medium" },
      { q: "How do you find a cycle in a Linked List?", a: ["Binary search", "Floyd's Cycle-Finding Algorithm (Two Pointers)", "Sorting"], correct: "Floyd's Cycle-Finding Algorithm (Two Pointers)", level: "Hard" },
      { q: "What is 'Dynamic Programming'?", a: ["Coding fast", "Solving complex problems by breaking them into simpler subproblems and storing results", "Using dynamic variables"], correct: "Solving complex problems by breaking them into simpler subproblems and storing results", level: "Hard" },
      { q: "What is the time complexity of Merge Sort?", a: ["O(n^2)", "O(n log n)", "O(log n)"], correct: "O(n log n)", level: "Medium" },
      { q: "What is a 'Priority Queue' internally implemented with usually?", a: ["Array", "Heap", "Stack"], correct: "Heap", level: "Medium" },
      { q: "What is the 'Big O' notation for space complexity of a recursive Fibonacci function?", a: ["O(1)", "O(n)", "O(2^n)"], correct: "O(n)", level: "Hard" },
      { q: "What is a 'Graph'?", a: ["A drawing", "A collection of nodes and edges", "A type of database"], correct: "A collection of nodes and edges", level: "Easy" },
      { q: "What is 'Dijkstra's Algorithm' used for?", a: ["Sorting", "Finding the shortest path in a weighted graph", "Compressing data"], correct: "Finding the shortest path in a weighted graph", level: "Hard" },
      { q: "What is 'Memoization'?", a: ["Taking notes", "Caching the results of expensive function calls", "Memory management"], correct: "Caching the results of expensive function calls", level: "Medium" },
      { q: "What is a 'Trie' data structure used for?", a: ["Storing numbers", "Efficient prefix-based string searching", "Image processing"], correct: "Efficient prefix-based string searching", level: "Hard" },
      { q: "What is 'Breadth-First Search' (BFS)?", a: ["Searching deep into a tree", "Searching level by level", "Searching for bread"], correct: "Searching level by level", level: "Easy" },
      { q: "What is the 'Stable Sorting'?", a: ["Sorting on a farm", "A sort that preserves the relative order of equal elements", "A sort that doesn't crash"], correct: "A sort that preserves the relative order of equal elements", level: "Medium" }
    ],
    project: { title: "Network Path Optimizer", desc: "Build a Java tool that finds the fastest route between two points in a weighted graph.", requirements: ["Dijkstra", "Adjacency List", "Generics"] }
  },

  "java-big-data": {
    title: "Java Big Data: Data Architect",
    questions: [
      { q: "What is 'Hadoop MapReduce'?", a: ["A type of SQL", "A framework for processing large datasets in parallel across a cluster", "A compression tool"], correct: "A framework for processing large datasets in parallel across a cluster", level: "Medium" },
      { q: "What is 'Apache Spark'?", a: ["A lighter for servers", "A multi-language engine for executing data engineering and data science on single-node or clusters", "A database"], correct: "A multi-language engine for executing data engineering and data science on single-node or clusters", level: "Easy" },
      { q: "What is 'HDFS'?", a: ["Hadoop Distributed File System", "High Data File Storage", "Hard Drive File System"], correct: "Hadoop Distributed File System", level: "Easy" },
      { q: "What is an 'RDD' in Spark?", a: ["Real Digital Data", "Resilient Distributed Dataset", "Remote Data Driver"], correct: "Resilient Distributed Dataset", level: "Hard" },
      { q: "What is 'Apache Kafka' used for?", a: ["Writing books", "Distributed event streaming platform", "Storing static images"], correct: "Distributed event streaming platform", level: "Medium" },
      { q: "What is 'NoSQL'?", a: ["No SQL allowed", "Non-tabular databases (Not Only SQL)", "Slow SQL"], correct: "Non-tabular databases (Not Only SQL)", level: "Easy" },
      { q: "What is 'Hive' used for?", a: ["Beekeeping", "Data warehouse software that provides SQL-like interface to Hadoop", "Web hosting"], correct: "Data warehouse software that provides SQL-like interface to Hadoop", level: "Medium" },
      { q: "What is 'Zookeeper'?", a: ["A literal zoo", "A centralized service for maintaining configuration information and naming", "A security guard"], correct: "A centralized service for maintaining configuration information and naming", level: "Hard" },
      { q: "What is 'In-Memory Processing' in Spark?", a: ["Processing data in RAM instead of disk for speed", "Using a lot of brains", "A type of cache"], correct: "Processing data in RAM instead of disk for speed", level: "Medium" },
      { q: "What is 'ETL'?", a: ["Extract, Transform, Load", "Execute, Test, Launch", "Extra Task Logic"], correct: "Extract, Transform, Load", level: "Easy" },
      { q: "What is 'Sharding' in Big Data?", a: ["Breaking code", "Horizontal partitioning of data across multiple servers", "Encryption"], correct: "Horizontal partitioning of data across multiple servers", level: "Hard" },
      { q: "What is 'Apache Flink'?", a: ["A light switch", "A framework for distributed stream processing", "A database wrapper"], correct: "A framework for distributed stream processing", level: "Hard" },
      { q: "What is 'Data Skew'?", a: ["Incorrect data", "When data is not distributed evenly across a cluster", "A math error"], correct: "When data is not distributed evenly across a cluster", level: "Medium" },
      { q: "What is 'Parquet'?", a: ["A type of flooring", "A columnar storage file format", "A data algorithm"], correct: "A columnar storage file format", level: "Medium" },
      { q: "What is 'YARN' in Hadoop?", a: ["Thread for sewing", "Yet Another Resource Negotiator (Cluster manager)", "A search engine"], correct: "Yet Another Resource Negotiator (Cluster manager)", level: "Medium" }
    ],
    project: { title: "Petabyte Log Parser", desc: "Build a Spark job that analyzes petabytes of server logs to detect security threats.", requirements: ["Spark Streaming", "HDFS", "Kafka"] }
  }

};