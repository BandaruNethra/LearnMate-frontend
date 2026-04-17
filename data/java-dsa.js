export const javaDSA = {
  id: "java-dsa",
  title: "Java DSA Masterclass",
  modules: [
    {
      title: "Module 1: Complexity Analysis & Big O",
      lessons: [
        {
          title: "Understanding Time Complexity",
          content: `
            <p>In the world of Big Data, an inefficient algorithm can take years to finish, while an efficient one takes seconds. <strong>Time Complexity</strong> is not about counting seconds; it's about counting the number of operations relative to the input size <em>(n)</em>. This is essential because hardware speeds vary, but the mathematical growth of an algorithm remains constant across all machines.</p>
            <div style="background: #f0fdf4; padding: 30px; border-radius: 25px; border-left: 8px solid #22c55e; margin: 25px 0; line-height: 1.8;">
              <h4 style="color: #166534; margin-top:0;">The Hierarchy of Growth</h4>
              <p>As <em>n</em> grows to infinity, the difference between O(n) and O(n²) becomes astronomical. For an input of 1 million items, an O(n) algorithm performs 1 million operations, while O(n²) performs 1 trillion. On a standard consumer CPU, the first takes milliseconds, while the second could take hours or even days to compute.</p>
            </div>
            <p>As a Java developer, you must visualize how your code scales. In professional environments, we often aim for O(log n) or O(n). Anything reaching O(n²) or O(2ⁿ) is considered a "Red Flag" during code reviews unless the input size is guaranteed to be extremely small.</p>
          `
        },
        {
          title: "Space Complexity & JVM Memory",
          content: `
            <p><strong>Space Complexity</strong> measures the total extra memory an algorithm uses relative to the input. In Java, this is heavily tied to the <strong>Heap</strong> and the <strong>Stack</strong>. When you create a new <code>int[] arr = new int[n]</code>, you are requesting a contiguous block of memory from the JVM Heap, resulting in O(n) space usage.</p>
            <p>Recursive algorithms often hide their space complexity in the <strong>Call Stack</strong>. Every time a method calls itself, the JVM pushes a new 'Stack Frame' containing local variables and return addresses. If your recursion goes 10,000 levels deep, you will likely hit a <code>StackOverflowError</code> even if your Heap has gigabytes of free room. This is why iterative solutions are often preferred in memory-constrained environments.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Arrays & Dynamic Lists",
      lessons: [
        {
          title: "The ArrayList Internal Mechanism",
          content: `
            <p>The <code>ArrayList</code> is arguably the most used data structure in Java, but few understand its "Resizing Strategy." It is a wrapper around a static array. When the array capacity is reached, Java doesn't just add one slot; it creates a <strong>completely new array</strong> (usually 1.5x the size of the original).</p>
            <p>This process involves <code>System.arraycopy()</code>, which is a native method that moves bits at high speed. While a single "resize" operation is O(n), it happens so infrequently that the <strong>Amortized Time Complexity</strong> for adding an element remains O(1). Understanding this helps you optimize performance by providing an initial capacity when you already know the approximate size of your data.</p>
            <pre><code>// Optimization: Pre-defining capacity to avoid resizing overhead
ArrayList&lt;String&gt; list = new ArrayList&lt;&gt;(10000); 
// This prevents multiple costly array copies as the list grows</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 3: Singly & Doubly Linked Lists",
      lessons: [
        {
          title: "Node-Based Memory Management",
          content: `
            <p>Unlike arrays, Linked Lists are not stored in contiguous memory. Each element is a <strong>Node</strong> object that lives somewhere in the JVM Heap. Each node holds a reference (a pointer) to the next node's memory address. This architecture allows Linked Lists to grow and shrink dynamically without ever needing to "resize" or copy the entire structure.</p>
            <p>However, this flexibility comes with a <strong>CPU Cache</strong> penalty. Because nodes are scattered across memory, the CPU cannot pre-fetch them into the cache as effectively as it does with arrays. In high-performance Java applications, you must weigh the O(1) insertion benefit of Linked Lists against the faster sequential access speeds of standard Arrays.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Stacks, Queues & Deques",
      lessons: [
        {
          title: "The Stack: Depth-First Processing",
          content: `
            <p>The Stack is a <strong>Last-In, First-Out (LIFO)</strong> structure that mimics a stack of physical objects. In Java, we rarely use the legacy <code>java.util.Stack</code> class; instead, we use <code>ArrayDeque</code> because it is faster and not synchronized. Stacks are the backbone of many fundamental algorithms, including expression parsing (like converting infix to postfix) and backtracking.</p>
            <p>In a real-world scenario, every time you hit "Undo" in a text editor or "Back" in a web browser, the system is popping the top element off a Stack. When you traverse a tree using Depth-First Search (DFS), the computer is implicitly using a stack (either the system call stack via recursion or a manual <code>Stack</code> object) to remember which nodes it hasn't visited yet.</p>
            <pre><code>Deque&lt;Integer&gt; stack = new ArrayDeque&lt;&gt;();
stack.push(10); // O(1)
stack.push(20);
int top = stack.pop(); // Returns 20, O(1)</code></pre>
          `
        },
        {
          title: "Queues: Breadth-First Processing",
          content: `
            <p>Queues follow the <strong>First-In, First-Out (FIFO)</strong> principle, much like a line of people waiting at a ticket counter. In Java, <code>LinkedList</code> implements the <code>Queue</code> interface, making it a common choice for this structure. Queues are essential for <strong>Breadth-First Search (BFS)</strong>, where you visit all neighbors at the current depth before moving deeper.</p>
            <p>Beyond graph theory, Queues are used in <strong>Producer-Consumer</strong> design patterns. Imagine a web server receiving 1,000 requests per second but only able to process 100. It places the incoming requests into a "Task Queue." This ensures that no request is lost and that they are processed in the exact order they arrived, maintaining fairness and system stability.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Recursion & Backtracking",
      lessons: [
        {
          title: "Mastering the Recursive Call Stack",
          content: `
            <p>Recursion is the art of solving a problem by breaking it into smaller versions of itself. Every recursive method must satisfy two conditions: the <strong>Base Case</strong> (the condition that stops the loop) and the <strong>Recursive Step</strong> (the logic that moves toward the base case). If your recursive step doesn't progress, you create an infinite loop that eventually crashes with a <code>StackOverflowError</code>.</p>
            <p>In Java, recursion is often cleaner to read but can be dangerous for deep trees. For example, calculating Fibonacci numbers using naive recursion has a complexity of <strong>O(2ⁿ)</strong> because it recalculates the same values thousands of times. Understanding how to visualize the "Recursion Tree" is the first step toward optimizing these algorithms using techniques like Memoization or Dynamic Programming.</p>
          `
        },
        {
          title: "Backtracking: State Space Search",
          content: `
            <p>Backtracking is a systematic way to iterate through all possible configurations of a search space. It is often called "Smart Brute Force." You build a solution piece by piece, and the moment you realize a specific path cannot lead to a valid solution, you "Backtrack" to the previous step and try a different branch.</p>
            <p>Common examples include solving Sudoku, the N-Queens problem, or generating all possible permutations of a string. In Java, this is usually implemented with a recursive function and a "visited" array or set. The key is to <strong>reset the state</strong> (un-mark the visited node) after the recursive call returns, allowing other branches of the tree to explore that same state.</p>
            <pre><code>private void backtrack(List&lt;Integer&gt; path, int[] nums) {
    if (path.size() == nums.length) {
        result.add(new ArrayList&lt;&gt;(path));
        return;
    }
    for (int i = 0; i &lt; nums.length; i++) {
        path.add(nums[i]); // Choose
        backtrack(path, nums); // Explore
        path.remove(path.size() - 1); // Un-choose (Backtrack)
    }
}</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 6: Hashing & The HashMap Internal",
      lessons: [
        {
          title: "The Magic of O(1) Lookups",
          content: `
            <p>How can we find a single item in a list of a billion in constant time? The answer is <strong>Hashing</strong>. A Hash Function takes a key (like a String) and converts it into an integer index. If the function is good, it distributes keys uniformly across an array. This allows us to jump directly to the memory location of our data without searching through other elements.</p>
            <p>However, no hash function is perfect. When two different keys produce the same index, we have a <strong>Collision</strong>. Java's <code>HashMap</code> handles this by using "Chaining." Each slot in the array (called a bucket) originally held a Linked List. If multiple keys landed there, they were simply added to the list. This meant that in the worst case, a HashMap could slow down to O(n) performance.</p>
          `
        },
        {
          title: "Java 8+ Optimization: Treeification",
          content: `
            <p>To combat the O(n) worst-case scenario mentioned above, Java 8 introduced <strong>Treeification</strong>. If a single bucket in a HashMap grows beyond 8 elements, Java automatically converts that Linked List into a <strong>Red-Black Tree</strong>. This changes the worst-case search time from O(n) to O(log n), making the HashMap significantly more resilient against "Hash Flooding" attacks and poorly written <code>hashCode()</code> methods.</p>
            <div style="background: #fff7ed; padding: 25px; border-radius: 20px; border: 1px solid #fed7aa; margin: 25px 0;">
              <strong>Senior Tip:</strong> Always override <code>equals()</code> and <code>hashCode()</code> together. If two objects are equal via <code>equals()</code>, they MUST return the same <code>hashCode()</code>. If they don't, your HashMap will fail to find keys that are clearly there, leading to impossible-to-find bugs.
            </div>
          `
        }
      ]
    },
    {
      title: "Module 7: Trees & Binary Search Trees (BST)",
      lessons: [
        {
          title: "Binary Search Tree Properties",
          content: `
            <p>A Binary Search Tree is a hierarchical structure where each node has at most two children. The defining rule is simple: for any given node, all values in the <strong>Left Subtree</strong> must be smaller, and all values in the <strong>Right Subtree</strong> must be larger. This property allows for searching, insertion, and deletion in O(log n) time, provided the tree remains balanced.</p>
            <p>BSTs are used in database indexing and file systems. When you search for a file on your computer, you aren't looking through every file one-by-one; you are likely traversing a B-Tree or a BST. However, if you insert sorted data (1, 2, 3, 4...) into a basic BST, it becomes a "Skewed Tree," which is just a fancy, expensive Linked List. This is why self-balancing trees like AVL or Red-Black trees are used in real-world libraries.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: Graph Theory & Traversals",
      lessons: [
        {
          title: "Representing Graphs: Matrix vs. List",
          content: `
            <p>Graphs are collections of nodes (vertices) and connections (edges). In Java, there are two main ways to store them. An <strong>Adjacency Matrix</strong> is a 2D array where <code>matrix[i][j] = 1</code> means a connection exists. This is fast for lookups but wastes massive amounts of memory for "Sparse" graphs (graphs with few connections).</p>
            <p>The <strong>Adjacency List</strong> is the industry standard. It uses an array of Lists (<code>ArrayList&lt;Integer&gt;[]</code>). Each index <em>i</em> contains a list of all nodes connected to <em>i</em>. This is much more memory-efficient and is the preferred structure for algorithms like BFS and DFS where we need to quickly iterate over all neighbors of a specific node.</p>
          `
        },
        {
          title: "BFS: Shortest Path in Unweighted Graphs",
          content: `
            <p>Breadth-First Search (BFS) explores a graph layer by layer. Starting at a source node, it visits all immediate neighbors, then all neighbors-of-neighbors. Because it explores every node at distance 1 before moving to distance 2, it is guaranteed to find the <strong>shortest path</strong> in an unweighted graph.</p>
            <p>BFS is used in social networks to find "Friends of Friends" or in GPS routing to find the fewest number of turns between two points. In Java, you implement BFS using a <code>Queue</code> and a <code>boolean[] visited</code> array to ensure you don't get stuck in an infinite loop if the graph contains a cycle.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Final Capstone & Lab",
      lessons: [
        {
          title: "Final Assessment",
          type: "lab",
          content: `
            <div class="text-center py-20 bg-indigo-600 rounded-3xl shadow-2xl shadow-indigo-200">
              <h2 class="text-4xl font-black text-white mb-6">Congratulations!</h2>
              <p class="text-indigo-100 mb-12 max-w-sm mx-auto">You've mastered the logic behind the world's most efficient software. Now prove it in the final assessment.</p>
              <div class="flex flex-col gap-4 max-w-xs mx-auto">
                  <a href="/lab-center" class="bg-white text-indigo-600 py-5 rounded-2xl font-black tracking-widest uppercase text-sm hover:scale-105 transition-all">Take Final Quiz</a>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};