export const pythonBeginners = {
  id: "python-beginners",
  title: "Python for Beginners",
  modules: [
    {
      title: "Module 1: CPython Architecture & The Global Lock",
      lessons: [
        {
          title: "The CPython Execution Pipeline",
          content: `
            <p>Python is not a purely interpreted language; it is a bytecode-compiled language. When you execute a script, the <strong>CPython</strong> (the standard implementation written in C) goes through a multi-stage pipeline. First, the <strong>Lexer</strong> breaks code into tokens. Second, the <strong>Parser</strong> creates an Abstract Syntax Tree (AST). Third, the compiler generates <strong>Bytecode</strong> (those <code>.pyc</code> files you see in <code>__pycache__</code>). Finally, the <strong>Python Virtual Machine (PVM)</strong> executes the bytecode. Understanding this explains why Python is slower than C++ but faster to write—it abstracts the machine-level complexity through these intermediate layers.</p>
            <div style="background: #f0f9ff; padding: 40px; border-radius: 30px; border-left: 12px solid #0284c7; margin: 30px 0; line-height: 2;">
              <h4 style="color: #0c4a6e; margin-top:0; font-size: 24px;">The Global Interpreter Lock (GIL)</h4>
              <p>One of the most controversial aspects of Python is the <strong>GIL</strong>. It is a mutex that protects access to Python objects, preventing multiple native threads from executing Python bytecodes at once. This is why standard Python threads aren't great for CPU-bound tasks but excel at I/O-bound tasks. While beginners don't need to fix the GIL, knowing it exists helps you understand why <code>multiprocessing</code> is often preferred over <code>threading</code> in high-performance Python architectures.</p>
            </div>
          `
        },
        {
          title: "Memory Management & Reference Counting",
          content: `
            <p>Python manages memory through two primary mechanisms: <strong>Reference Counting</strong> and <strong>Generational Garbage Collection</strong>. Every object in Python has a 'Reference Count'—the number of variables or containers currently pointing to it. When this count reaches zero, Python immediately deallocates the memory. However, this cannot handle 'Circular References' (where two objects point to each other). For that, Python uses a secondary Garbage Collector that periodically scans the heap for isolated groups of objects, ensuring your application doesn't suffer from memory leaks.</p>
          `
        },
        {
          title: "The Python Zen (PEP 20)",
          content: `
            <p>Python code is governed by a specific aesthetic called 'The Zen of Python.' Accessible via <code>import this</code>, these 19 principles (like 'Explicit is better than implicit' and 'Flat is better than nested') define the <strong>Pythonic</strong> way of coding. Following these principles ensures that your code remains readable for millions of developers. We will focus on writing code that avoids 'clever tricks' in favor of clear, maintainable logic that follows the standard conventions used in massive enterprise codebases.</p>
          `
        },
        {
          title: "Virtual Environments & PEP 621",
          content: `
            <p>In professional development, you never use the 'System Python.' Instead, you use <strong>Virtual Environments (venv)</strong> to isolate project dependencies. This prevents the 'Dependency Hell' where Project A requires Version 1 of a library and Project B requires Version 2. We will also touch upon modern standards like <strong>pyproject.toml</strong>, which centralizes project metadata and build requirements, replacing older files like <code>requirements.txt</code> and <code>setup.py</code> for a cleaner developer experience.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Dynamic Objects & Memory Models",
      lessons: [
        {
          title: "The Internal ID & Object Mutability",
          content: `
            <p>Every single thing in Python—including numbers and functions—is an <strong>Object</strong>. Every object has an ID (its memory address), a Type, and a Value. We must distinguish between <strong>Mutable</strong> (Lists, Sets, Dicts) and <strong>Immutable</strong> (Ints, Strings, Tuples) objects. When you modify an immutable object, Python isn't changing it; it's creating a new object and moving the variable pointer. This is why string concatenation in a loop can be O(n²) and extremely slow unless you use <code>str.join()</code>.</p>
          `
        },
        {
          title: "String Interning & Optimization",
          content: `
            <p>To save memory, Python uses a technique called <strong>String Interning</strong>. Small strings and specific literals are stored only once in memory. If you create two variables with the value 'hello', they often point to the exact same memory address. This allows Python to perform very fast identity checks using the <code>is</code> operator. However, this only applies to specific cases, and for value comparison, you must always use <code>==</code>.</p>
          `
        },
        {
          title: "Numeric Arbitrary Precision",
          content: `
            <p>Unlike languages like Java where an <code>int</code> is limited to 32 or 64 bits, Python integers have <strong>Arbitrary Precision</strong>. This means they can grow as large as your computer's RAM allows. You can calculate <code>2 ** 1000</code> without any overflow errors. Floats, however, follow the IEEE 754 standard for double precision, which can lead to 'Floating Point Drift'—we'll learn why <code>0.1 + 0.2</code> doesn't exactly equal <code>0.3</code> and how to use the <code>decimal</code> module to fix it.</p>
          `
        },
        {
          title: "Unicode & Byte Encoding",
          content: `
            <p>Since Python 3, all strings are <strong>UTF-8 encoded Unicode</strong>. This allows Python to handle every language and emoji on Earth natively. We will explore the difference between <code>str</code> (human-readable text) and <code>bytes</code> (raw binary data). Understanding the 'Encode-Decode' cycle is vital when working with network sockets, file systems, or web APIs where data must be converted into binary format for transmission.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Control Flow & Iterator Protocol",
      lessons: [
        {
          title: "Truthiness & Logical Short-Circuiting",
          content: `
            <p>Python evaluates the 'Truthiness' of objects. Empty collections, <code>None</code>, and <code>0</code> are Falsy, while everything else is Truthy. Python also uses <strong>Short-Circuit Evaluation</strong>. In an <code>and</code> expression, if the first part is false, the second part is never even looked at. This is a common performance optimization and a safety feature that prevents errors when checking if an object exists before accessing its attributes.</p>
          `
        },
        {
          title: "The Under-the-Hood for Loop",
          content: `
            <p>A Python <code>for</code> loop is not a 'counter' loop; it is a <strong>Stream Processor</strong>. It calls <code>iter()</code> on a collection to get an <strong>Iterator</strong>, then repeatedly calls <code>next()</code> until it catches a <code>StopIteration</code> exception. This protocol is the backbone of Python's data processing. We will learn how to tap into this by creating our own iterators, allowing us to process data that is too large to fit into memory.</p>
          `
        },
        {
          title: "Comprehensive Range & Enumerate",
          content: `
            <p>The <code>range()</code> function is an immutable sequence type, not a list. It generates numbers lazily, using only O(1) space regardless of whether you want 10 numbers or 10 billion. We will combine this with <code>enumerate()</code>, which provides a counter while iterating, avoiding the 'Un-Pythonic' pattern of manually managing index variables (<code>i += 1</code>), which is a major source of bugs in other languages.</p>
          `
        },
        {
          title: "Walrus Operator & Assignment Flow",
          content: `
            <p>The <strong>Walrus Operator (:=)</strong>, introduced in PEP 572, allows you to assign values within an expression. This is particularly transformative for <code>while</code> loops and <code>if</code> statements where you want to capture a value and immediately test it. For example, reading a chunk from a file: <code>while (chunk := file.read(1024)):</code>. This reduces code repetition and ensures that the variable is scoped appropriately.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Data Structures & Hashing",
      lessons: [
        {
          title: "Lists: Over-allocation & Time Complexity",
          content: `
            <p>Python Lists are actually <strong>Dynamic Arrays</strong>. To make appending fast (O(1) amortized), Python 'over-allocates' memory. If you have 4 items, it might reserve space for 8. When you hit item 9, it copies everything to a new, larger block of memory. We will analyze why <code>list.pop()</code> from the end is O(1) but <code>list.pop(0)</code> is O(n), and when you should use a <code>collections.deque</code> instead for high-performance queues.</p>
          `
        },
        {
          title: "Dictionaries: Hash Table Collisions",
          content: `
            <p>The Dictionary is the most optimized part of Python. It uses a <strong>Hash Table</strong> to provide O(1) average lookups. We will explore how Python handles 'Hash Collisions' using Open Addressing. We'll also discuss why dictionary keys MUST be <strong>Hashable</strong> (immutable). You can't use a list as a dictionary key because its hash could change if the list is modified, which would break the internal lookup mechanism of the Hash Table.</p>
          `
        },
        {
          title: "Set Theory & Optimization",
          content: `
            <p>Sets in Python use the same hashing logic as dictionaries but without the values. This makes 'Membership Testing' (<code>if item in my_set</code>) incredibly fast. We will compare the performance of checking presence in a list of 10 million items (O(n) - slow) vs. a set of 10 million items (O(1) - instant). This knowledge is crucial for writing code that doesn't slow down as data grows.</p>
          `
        },
        {
          title: "Tuples vs. NamedTuples",
          content: `
            <p>Tuples are immutable lists, making them safer for data that shouldn't change. However, accessing data by index (<code>data[2]</code>) can be confusing. We will introduce <code>collections.namedtuple</code>, which allows you to access elements by name (<code>data.price</code>) while still maintaining the memory efficiency and immutability of a standard tuple. This is a best practice for passing data between functions.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Functional Paradigms",
      lessons: [
        {
          title: "First-Class Functions & Scoping",
          content: `
            <p>In Python, functions are objects. You can pass them as arguments, return them from other functions, and store them in lists. We will explore the <strong>LEGB Scoping Rule</strong> (Local, Enclosing, Global, Built-in) and how <strong>Closures</strong> allow a function to retain access to variables from its parent scope even after the parent has finished executing. This is the foundation for creating Decorators and Factories.</p>
          `
        },
        {
          title: "List & Dict Comprehensions",
          content: `
            <p>Comprehensions are the 'Pythonic' alternative to loops. They are not just 'syntactic sugar'; they are often faster because the iteration happens at the C-level inside CPython. We will master nested comprehensions and conditional filtering, but we'll also discuss the 'Readability Limit'—when a comprehension becomes so complex that it should be converted back into a standard loop for the sake of your teammates.</p>
          `
        },
        {
          title: "Map, Filter, and the Lambda",
          content: `
            <p>While comprehensions are preferred, <code>map()</code> and <code>filter()</code> are essential in functional programming and when using multi-processing. We will pair these with <strong>Lambda Functions</strong> (anonymous, one-line functions). You will learn that while Lambdas are convenient, they should never be used for complex logic, as they lack a name and a docstring, making them harder to debug in stack traces.</p>
          `
        },
        {
          title: "Generator Functions & Yield",
          content: `
            <p>A generator is a function that uses the <code>yield</code> keyword. Instead of returning a value and exiting, it 'pauses' and returns a value, keeping its state for the next call. This allows for <strong>Lazy Evaluation</strong>. You can iterate over a generator that produces an infinite sequence of numbers without ever running out of memory. This is the gold standard for processing large logs or streaming data from a database.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Error Architecture & Resilience",
      lessons: [
        {
          title: "EAFP vs. LBYL",
          content: `
            <p>Python follows the <strong>EAFP</strong> (Easier to Ask for Forgiveness than Permission) philosophy. Instead of checking if a file exists (LBYL - Look Before You Leap), you try to open it and catch the exception if it fails. We'll discuss why EAFP is more 'Pythonic' and how it avoids 'Race Conditions' where a file might be deleted in the microsecond between you checking for it and you opening it.</p>
          `
        },
        {
          title: "Custom Exception Hierarchies",
          content: `
            <p>For enterprise apps, <code>ValueError</code> isn't enough. We will learn to create <strong>Custom Exceptions</strong> by inheriting from the base <code>Exception</code> class. This allows you to catch very specific business errors (e.g., <code>InsufficientBalanceError</code>) separately from system errors. This makes your 'Try-Except' blocks surgical and prevents you from accidentally catching and hiding unrelated bugs.</p>
          `
        },
        {
          title: "The Finally & Else Clauses",
          content: `
            <p>Most beginners know <code>try</code> and <code>except</code>, but few use <code>else</code> and <code>finally</code>. The <code>else</code> block runs <strong>only if no exception occurred</strong>, allowing you to separate the 'dangerous' code from the 'success' logic. The <code>finally</code> block runs <strong>no matter what</strong>, making it the perfect place for cleanup tasks like closing database connections or releasing file handles.</p>
          `
        },
        {
          title: "Context Managers & 'with' Blocks",
          content: `
            <p>The <code>with</code> statement is a formalization of the <code>try-finally</code> pattern. It uses the <strong>Context Management Protocol</strong> (<code>__enter__</code> and <code>__exit__</code>). We will learn how to create our own context managers using the <code>@contextmanager</code> decorator, allowing us to create clean APIs for things like temporary database transactions or automated performance timers.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Advanced File I/O & Serialization",
      lessons: [
        {
          title: "Buffered I/O & Encoding",
          content: `
            <p>When you open a file, Python uses a <strong>Buffer</strong> to minimize expensive system calls to the hard drive. We will explore how to tune this buffer and the importance of specifying an <code>encoding='utf-8'</code>. Failing to specify encoding is a leading cause of 'UnicodeDecodeError' when moving code between Windows (UTF-16/CP1252) and Linux (UTF-8).</p>
          `
        },
        {
          title: "JSON Serialization & Deep Schemas",
          content: `
            <p>JSON is the standard for data exchange. We'll go beyond <code>json.load()</code> and look at the <code>default</code> and <code>cls</code> parameters in the <code>json</code> module. This allows you to serialize complex Python objects (like Datetimes or Custom Classes) that aren't supported by standard JSON by providing a custom 'Encoder' function.</p>
          `
        },
        {
          title: "Binary I/O & The Pickle Module",
          content: `
            <p>Sometimes you need to save an actual Python object, not just its text representation. <strong>Pickle</strong> allows for 'Object Serialization.' We'll discuss its power for saving machine learning models or game states, but we'll also issue a <strong>Critical Security Warning</strong>: never 'unpickle' data from an untrusted source, as it can execute arbitrary malicious code on your system.</p>
          `
        },
        {
          title: "Pathlib: Object-Oriented Filesystems",
          content: `
            <p>Modern Python uses the <code>pathlib</code> module instead of <code>os.path</code>. Pathlib treats paths as objects, allowing for intuitive syntax like <code>path / 'subdir' / 'file.txt'</code>. It handles backslashes vs. forward slashes automatically, making your file-handling code work perfectly on both Windows and Mac/Linux without any extra effort.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: The Standard Library Power-User",
      lessons: [
        {
          title: "The Collections Module",
          content: `
            <p>Standard lists and dicts aren't always enough. We will explore <code>defaultdict</code> (which eliminates KeyErrors), <code>Counter</code> (for rapid frequency analysis), and <code>OrderedDict</code>. Mastering these specialized containers allows you to write in one line of code what would take ten lines using standard structures.</p>
          `
        },
        {
          title: "Regular Expressions (re module)",
          content: `
            <p>Regex is a language within a language for pattern matching. We will learn how to use <code>re.compile()</code> for performance, the difference between <code>search()</code> and <code>match()</code>, and how to use 'Capture Groups' to extract specific pieces of data from massive blobs of unformatted text (like log files or scraped HTML).</p>
          `
        },
        {
          title: "Datetime: Timezone Hell",
          content: `
            <p>Handling time is notoriously difficult. We'll learn why you should always use <strong>Aware Datetimes</strong> (datetimes with a timezone) rather than 'Naive' ones. We'll use the <code>zoneinfo</code> module (introduced in Python 3.9) to handle daylight savings time and UTC conversions, ensuring your app doesn't break twice a year when the clocks change.</p>
          `
        },
        {
          title: "The Itertools & Functools Libraries",
          content: `
            <p>These are the 'Power Tools' of Python. <code>itertools</code> provides memory-efficient looping tools like <code>chain</code> and <code>product</code>, while <code>functools</code> provides <code>lru_cache</code> for instant memoization (caching function results) and <code>partial</code> for creating specialized versions of existing functions.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Code Quality & Testing",
      lessons: [
        {
          title: "Unit Testing with Pytest",
          content: `
            <p>Professional Python uses <strong>Pytest</strong>. We'll learn the 'AAA' pattern: Arrange, Act, and Assert. We'll explore how to use <strong>Fixtures</strong> to provide consistent test data and why Pytest's simple <code>assert</code> statement is superior to the old-school <code>unittest</code> class-based approach, making your tests easier to write and read.</p>
          `
        },
        {
          title: "Docstrings & Automated Documentation",
          content: `
            <p>We'll master <strong>PEP 257</strong> docstring conventions. You'll learn the difference between the Google, NumPy, and Sphinx styles. Good docstrings aren't just for humans; they are used by tools like <strong>pdoc</strong> or <strong>MkDocs</strong> to automatically generate professional HTML documentation websites for your projects.</p>
          `
        },
        {
          title: "Static Analysis with Flake8 & Black",
          content: `
            <p>Code style is not subjective in Python—it's <strong>PEP 8</strong>. We'll use <strong>Black</strong> (the 'uncompromising' code formatter) to automatically format our code and <strong>Flake8</strong> to catch logical errors like unused imports or undefined variables. This ensures your code looks identical to code written at Google or Netflix.</p>
          `
        },
        {
          title: "Type Hinting & Mypy",
          content: `
            <p>While Python is dynamic, <strong>Type Hints</strong> (PEP 484) are now standard in large projects. By annotating functions (e.g., <code>def add(x: int, y: int) -> int:</code>), you allow the <strong>Mypy</strong> static type checker to find bugs before you ever run the code. This gives you the safety of a compiled language with the speed of Python.</p>
          `
        }
      ]
    },
    {
      title: "Module 10: Lab & Final Certification",
      lessons: [
        {
          title: "Final Assessment",
          type: "lab",
          content: `
            <div class="text-center py-24 bg-gradient-to-br from-yellow-500 to-blue-600 rounded-3xl shadow-2xl">
              <h2 class="text-6xl font-black text-white mb-8">Python Master Architect</h2>
              <p class="text-white opacity-90 mb-14 max-w-2xl mx-auto text-xl leading-relaxed">
                You have completed the most rigorous Python foundation course available. 
                From the internals of CPython to the nuances of asynchronous logic and memory models, 
                you are now ready to build production-grade software.
              </p>
              <div class="flex flex-col gap-6 max-w-sm mx-auto">
                  <a href="/lab-center" class="bg-white text-blue-700 py-6 rounded-2xl font-black tracking-widest uppercase text-base hover:scale-110 transition-all shadow-xl">
                    Final Graduation Lab
                  </a>
                  <p class="text-white text-sm font-bold tracking-tighter uppercase opacity-75">10 Modules Mastered • Certification Awaits</p>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};