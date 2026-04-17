export const javaFundamentals = {
  id: "java-fundamentals",
  title: "Java SE Professional Foundations",
  modules: [
    {
      title: "1. Core Architecture",
      lessons: [
    {
        title: "The Java Ecosystem",
        type: "text",
        content: `
            <p class="text-lg text-slate-600 mb-8 leading-relaxed">Java's power comes from its unique ability to run on any device. To understand how, we must look at the <b>Technical Foundation</b> of the language.</p>
            
            <div class="mb-10 p-8 bg-slate-900 rounded-[32px] shadow-2xl border-t-4 border-indigo-500">
            <h4 class="text-indigo-400 font-black uppercase tracking-[0.2em] text-[10px] mb-6 text-center">The Translation Process</h4>
            <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-center">
                <div class="flex-1">
                <div class="bg-white/10 p-4 rounded-2xl mb-2 text-white font-mono text-sm border border-white/5 font-bold">Main.java</div>
                <p class="text-[10px] text-slate-400 font-bold uppercase">Source Code</p>
                </div>
                <div class="text-indigo-500 font-black animate-pulse">→ COMPILER →</div>
                <div class="flex-1">
                <div class="bg-indigo-600 p-4 rounded-2xl mb-2 text-white font-mono text-sm shadow-lg font-bold">Main.class</div>
                <p class="text-[10px] text-slate-400 font-bold uppercase">Bytecode</p>
                </div>
                <div class="text-indigo-500 font-black">→ JVM →</div>
                <div class="flex-1">
                <div class="bg-emerald-500 p-4 rounded-2xl mb-2 text-white font-mono text-sm font-bold">Machine Code</div>
                <p class="text-[10px] text-slate-400 font-bold uppercase">Computer Language</p>
                </div>
            </div>
            <p class="mt-8 text-xs text-slate-400 text-center italic">"Write Once, Run Anywhere: The JVM translates Bytecode into the specific language of your computer's CPU."</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div class="p-6 bg-slate-50 border rounded-2xl">
                <h5 class="font-black text-xs text-indigo-600 uppercase mb-2">JDK</h5>
                <p class="text-xs text-slate-500 leading-relaxed"><b>Development Kit:</b> The toolkit containing the compiler (javac) and debugger.</p>
            </div>
            <div class="p-6 bg-slate-50 border rounded-2xl">
                <h5 class="font-black text-xs text-indigo-600 uppercase mb-2">JRE</h5>
                <p class="text-xs text-slate-500 leading-relaxed"><b>Runtime Environment:</b> The stage where your code performs. Includes libraries.</p>
            </div>
            <div class="p-6 bg-slate-50 border rounded-2xl">
                <h5 class="font-black text-xs text-indigo-600 uppercase mb-2">JVM</h5>
                <p class="text-xs text-slate-500 leading-relaxed"><b>Virtual Machine:</b> The actual 'engine' that runs the code in your memory.</p>
            </div>
            </div>
        `
        },
        {
          title: "Anatomy of a Class",
          type: "text",
          content: `
            <h3 class="text-2xl font-bold mb-4">Structure and Rules</h3>
            <p class="mb-6">In Java, everything starts with a <b>Class</b>. Think of a class as a blueprint for an object. For example, a "Car" class defines what a car is, but the actual "Ferrari" in your garage is the <b>Object</b>.</p>
            <div class="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-indigo-300 mb-8 shadow-xl">
                <span class="text-slate-500">// The class name must match the file name (Main.java)</span><br/>
                <span class="text-indigo-400">public class</span> Main {<br/>
                &nbsp;&nbsp;<span class="text-indigo-400">public static void</span> main(String[] args) {<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;System.out.println(<span class="text-emerald-400">"Hello LearnMate!"</span>);<br/>
                &nbsp;&nbsp;}<br/>
                }
            </div>
            <h4 class="font-bold mb-3">Key Rules:</h4>
            <ul class="list-disc pl-6 space-y-2 text-sm text-slate-600">
                <li>Classes always use <b>PascalCase</b> (e.g., MyFirstClass).</li>
                <li>Statements must end with a <b>semicolon (;)</b>.</li>
                <li>Java is <b>Case-Sensitive</b>: 'Main' and 'main' are different.</li>
            </ul>
          `
        },
        {
          title: "Main Method Deep Dive",
          type: "text",
          content: `
            <p class="mb-6">The entry point of any Java application is the <code class="text-indigo-600">main()</code> method. Let's break down that complex line of code:</p>
            <div class="space-y-4">
                <div class="flex gap-4 p-4 border-b">
                    <span class="font-bold text-indigo-600 w-24">public</span>
                    <span class="text-sm">Visible to the JVM, allowing it to execute the code from anywhere.</span>
                </div>
                <div class="flex gap-4 p-4 border-b">
                    <span class="font-bold text-indigo-600 w-24">static</span>
                    <span class="text-sm">Means the method belongs to the class itself, not an instance.</span>
                </div>
                <div class="flex gap-4 p-4 border-b">
                    <span class="font-bold text-indigo-600 w-24">void</span>
                    <span class="text-sm">This method performs an action but returns nothing.</span>
                </div>
            </div>
          `
        },
        {
          title: "Comments & Clean Code",
          type: "text",
          content: `
            <p class="mb-6">Code is read 10x more than it is written. Use comments to explain the "Why", not the "How".</p>
            <div class="bg-slate-50 p-6 rounded-2xl border font-mono text-sm text-slate-500 italic">
                // Single line comment for quick notes<br/><br/>
                /* Multi-line comment for <br/>
                &nbsp;&nbsp;&nbsp;complex logic or documentation */
            </div>
          `
        },
        {
          title: "Naming & Conventions",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Java Naming Standards</h3>
            <p class="mb-6">Consistency is key in professional development. Following these standards makes your code "Java-like".</p>
            <div class="grid grid-cols-2 gap-4 text-sm">
                <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl"><b>Classes:</b> PascalCase (StudentProfile)</div>
                <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl"><b>Methods:</b> camelCase (calculateGrade)</div>
                <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl"><b>Variables:</b> camelCase (studentAge)</div>
                <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl"><b>Constants:</b> UPPER_SNAKE (MAX_VAL)</div>
            </div>
          `
        }
      ]
    },
    {
      title: "2. The Data Boxes (Variables)",
      lessons: [
        {
          title: "What is a Variable?",
          type: "text",
          content: `
            <h2 class="text-2xl font-black mb-6">Storing Information</h2>
            <p class="mb-6 text-lg">Imagine you have different sized boxes in your room. You wouldn't put a tiny ring in a massive fridge box, right? In Java, we pick the box size <b>first</b>.</p>
            
            <div class="bg-indigo-900 rounded-2xl p-8 mb-8 text-indigo-100">
               <h4 class="font-bold text-white mb-4">The Golden Rule:</h4>
               <p class="italic">"Type then Name equals Value."</p>
               <div class="mt-4 p-4 bg-black/30 rounded-lg font-mono text-sm">
                  int age = 5; <br/>
                  String name = "Zoe";
               </div>
            </div>
            <p class="text-slate-600">Here, <b>int</b> is the box type (for whole numbers), <b>age</b> is the label on the box, and <b>5</b> is what's inside.</p>
          `
        },
        {
          title: "Whole Numbers (Integers)",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Meet the Integer Family</h3>
            <p class="mb-6">Java gives us 4 types of boxes for whole numbers. Why? To save memory!</p>
            <div class="space-y-4">
              <div class="flex items-center gap-4 p-4 border rounded-xl">
                <span class="w-20 font-black text-indigo-600">byte</span>
                <span class="text-sm text-slate-500">Tiny box. Only fits numbers from -128 to 127.</span>
              </div>
              <div class="flex items-center gap-4 p-4 border rounded-xl">
                <span class="w-20 font-black text-indigo-600">short</span>
                <span class="text-sm text-slate-500">Small box. Fits up to 32,767.</span>
              </div>
              <div class="flex items-center gap-4 p-4 border rounded-xl bg-indigo-50 border-indigo-200">
                <span class="w-20 font-black text-indigo-600">int</span>
                <span class="text-sm text-slate-700 font-bold">The Standard Box. Fits up to 2 Billion. Most common!</span>
              </div>
              <div class="flex items-center gap-4 p-4 border rounded-xl">
                <span class="w-20 font-black text-indigo-600">long</span>
                <span class="text-sm text-slate-500">Huge box. For planet-sized numbers. Needs an 'L' at the end (500L).</span>
              </div>
            </div>
          `
        },
        {
          title: "Decimals (Float & Double)",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Pointy Numbers</h3>
            <p class="mb-6">When you need a decimal point (like $19.99), you use <b>double</b>. It stands for "double precision."</p>
            <div class="bg-slate-900 p-6 rounded-2xl font-mono text-emerald-400 mb-6">
               double price = 19.99; <br/>
               float pi = 3.14f; <span class="text-slate-500">// float needs an 'f'!</span>
            </div>
            <p class="text-sm text-slate-500"><b>Note:</b> Always use <b>double</b> for money or science. It's much more accurate than float.</p>
          `
        },
        {
          title: "Booleans: The Light Switch",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">True or False?</h3>
            <p class="mb-6 text-lg">Computers are simple. Everything is either ON or OFF. A <b>boolean</b> is a variable that can only be <b>true</b> or <b>false</b>.</p>
            <div class="p-6 border-2 border-indigo-600 rounded-3xl flex items-center justify-between">
               <div>
                  <p class="font-bold">boolean isHappy = true;</p>
                  <p class="text-xs text-slate-400">It's like a tiny switch in the computer's brain.</p>
               </div>
               <div class="w-12 h-6 bg-indigo-600 rounded-full relative">
                  <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
               </div>
            </div>
          `
        },
        {
          title: "Characters & Strings",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Text and Letters</h3>
            <p class="mb-6">There is a big difference between a single letter and a sentence.</p>
            <ul class="space-y-4">
              <li class="p-4 bg-slate-50 rounded-lg"><b>char:</b> One single letter. Must use single quotes. <code class="text-indigo-600">'A'</code></li>
              <li class="p-4 bg-slate-50 rounded-lg"><b>String:</b> A whole sentence. Must use double quotes. <code class="text-indigo-600">"Hello LearnMate"</code></li>
            </ul>
            <p class="mt-4 text-xs text-red-500 font-bold">⚠️ Warning: String is a "Class", so it starts with a Capital S!</p>
          `
        }
      ]
    },
    {
      title: "3. Making Decisions (Logic)",
      lessons: [
        {
          title: "The 'If' Statement",
          type: "text",
          content: `
            <h2 class="text-2xl font-black mb-6 text-slate-900">Teaching the Computer to Think</h2>
            <p class="text-lg text-slate-600 mb-6">In the real world, you make decisions constantly: <i>"If I am hungry, I will eat. If it is cold, I will wear a jacket."</i> Java does the exact same thing using <b>Conditional Statements</b>.</p>
            
            <div class="bg-indigo-900 rounded-2xl p-8 mb-8 shadow-xl">
               <p class="text-indigo-200 font-mono mb-4">// Logic: If (Condition is True) { Do This }</p>
               <div class="p-6 bg-black/20 rounded-xl font-mono text-indigo-400">
                  <span class="text-orange-400">int</span> energy = <span class="text-amber-400">10</span>;<br/><br/>
                  <span class="text-orange-400">if</span> (energy < <span class="text-amber-400">20</span>) {<br/>
                  &nbsp;&nbsp;System.out.println(<span class="text-emerald-400">"Time for a nap!"</span>);<br/>
                  }
               </div>
            </div>
            <p class="text-slate-600 italic underline decoration-indigo-200 decoration-4">The code inside the curly braces <b>only</b> runs if the math inside the parentheses is true.</p>
          `
        },
        {
          title: "The Else-If Ladder",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Handling Multiple Choices</h3>
            <p class="mb-6">What if there are three options? We use <code class="text-indigo-600 font-bold">else if</code>. Imagine a traffic light:</p>
            <div class="bg-slate-900 rounded-2xl p-6 font-mono text-sm leading-relaxed mb-6">
               <span class="text-indigo-400">String</span> light = <span class="text-emerald-400">"Yellow"</span>;<br/><br/>
               <span class="text-indigo-400">if</span> (light == <span class="text-emerald-400">"Red"</span>) {<br/>
               &nbsp;&nbsp;System.out.println(<span class="text-red-400">"STOP"</span>);<br/>
               } <span class="text-indigo-400">else if</span> (light == <span class="text-emerald-400">"Yellow"</span>) {<br/>
               &nbsp;&nbsp;System.out.println(<span class="text-amber-400">"SLOW DOWN"</span>);<br/>
               } <span class="text-indigo-400">else</span> {<br/>
               &nbsp;&nbsp;System.out.println(<span class="text-emerald-400">"GO"</span>);<br/>
               }
            </div>
            <p class="text-slate-500 text-sm"><b>Pro Tip:</b> The "else" at the end is the safety net. If none of the other conditions match, the else block runs no matter what.</p>
          `
        },
        {
          title: "Comparison Operators",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">The Secret Symbols</h3>
            <p class="mb-6">To check conditions, you need special symbols. Here is the Cheat Sheet:</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div class="p-4 bg-slate-50 border rounded-xl flex justify-between">
                  <span class="font-bold text-indigo-600">==</span>
                  <span class="text-slate-500">Equal to</span>
               </div>
               <div class="p-4 bg-slate-50 border rounded-xl flex justify-between">
                  <span class="font-bold text-indigo-600">!=</span>
                  <span class="text-slate-500">Not Equal to</span>
               </div>
               <div class="p-4 bg-slate-50 border rounded-xl flex justify-between">
                  <span class="font-bold text-indigo-600">></span>
                  <span class="text-slate-500">Greater than</span>
               </div>
               <div class="p-4 bg-slate-50 border rounded-xl flex justify-between">
                  <span class="font-bold text-indigo-600"><</span>
                  <span class="text-slate-500">Less than</span>
               </div>
            </div>
            <p class="mt-6 text-red-500 text-xs font-black uppercase tracking-widest">⚠️ Avoid the Trap: Use == to compare, not =. One equals sign is for giving a value, two equals signs are for asking a question!</p>
          `
        },
        {
          title: "Logical AND (&&) & OR (||)",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Checking Two Things at Once</h3>
            <p class="mb-6">Sometimes you need <b>both</b> things to be true. For example: "I will go outside if it is sunny <b>AND</b> I have my shoes."</p>
            <div class="space-y-4">
               <div class="p-6 bg-indigo-50 border-l-4 border-indigo-500">
                  <h4 class="font-bold">The AND (&&) Symbol</h4>
                  <p class="text-sm">Both sides must be TRUE. <br/><code>(5 > 2 && 10 > 5)</code> → <b>TRUE</b></p>
               </div>
               <div class="p-6 bg-slate-50 border-l-4 border-slate-500">
                  <h4 class="font-bold">The OR (||) Symbol</h4>
                  <p class="text-sm">Only ONE side needs to be true. <br/><code>(5 > 10 || 10 > 5)</code> → <b>TRUE</b></p>
               </div>
            </div>
          `
        },
        {
          title: "The Switch Statement",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">The Multi-Way Branch</h3>
            <p class="mb-6">If you have 10 different colors to check, using 10 "if" statements is messy. Use a <b>Switch</b> instead. It's like an elevator—you pick a floor (case) and go straight there.</p>
            <div class="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-indigo-300">
               <span class="text-orange-400">switch</span>(day) {<br/>
               &nbsp;&nbsp;<span class="text-orange-400">case</span> 1: System.out.println("Monday"); <span class="text-orange-400">break</span>;<br/>
               &nbsp;&nbsp;<span class="text-orange-400">case</span> 2: System.out.println("Tuesday"); <span class="text-orange-400">break</span>;<br/>
               &nbsp;&nbsp;<span class="text-orange-400">default</span>: System.out.println("Other day");<br/>
               }
            </div>
          `
        }
      ]
    },
    {
      title: "4. The Blueprint (Objects)",
      lessons: [
        {
          title: "What is an Object?",
          type: "text",
          content: `
            <h2 class="text-2xl font-black mb-6">Thinking in Real Life</h2>
            <p class="text-lg text-slate-600 mb-6">Java is an <b>Object-Oriented</b> language. This means we try to make our code look like real-world things. An object has two things: <b>What it knows</b> (Variables) and <b>What it does</b> (Methods).</p>
            
            <div class="p-8 border-4 border-dashed border-slate-100 rounded-3xl text-center mb-8">
               <h4 class="font-black text-indigo-600 mb-4 uppercase tracking-tighter italic text-2xl">The "Car" Example</h4>
               <div class="grid grid-cols-2 gap-8 text-left">
                  <div class="p-4 bg-slate-50 rounded-xl">
                     <p class="font-bold text-xs uppercase text-slate-400">Knows (Attributes)</p>
                     <ul class="text-sm list-disc pl-4 mt-2"><li>Color</li><li>Max Speed</li><li>Fuel Level</li></ul>
                  </div>
                  <div class="p-4 bg-indigo-50 rounded-xl">
                     <p class="font-bold text-xs uppercase text-indigo-400">Does (Methods)</p>
                     <ul class="text-sm list-disc pl-4 mt-2"><li>Drive()</li><li>Brake()</li><li>Honk()</li></ul>
                  </div>
               </div>
            </div>
          `
        },
        {
          title: "Defining a Class",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Building the Blueprint</h3>
            <p class="mb-6">To make an object, you first need a <b>Class</b>. Remember: The Class is the blueprint, the Object is the actual house built from it.</p>
            <div class="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-indigo-300">
               <span class="text-orange-400">class</span> Dog {<br/>
               &nbsp;&nbsp;String name;<br/>
               &nbsp;&nbsp;int age;<br/><br/>
               &nbsp;&nbsp;<span class="text-orange-400">void</span> bark() {<br/>
               &nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Woof!");<br/>
               &nbsp;&nbsp;}<br/>
               }
            </div>
          `
        },
        {
          title: "Creating an Object",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Bringing it to Life</h3>
            <p class="mb-6">To actually "birth" an object into your computer's memory, we use the <code class="text-indigo-600 font-bold">new</code> keyword.</p>
            <div class="bg-indigo-50 border border-indigo-100 p-6 rounded-2xl mb-6">
               <p class="font-mono text-indigo-800 text-sm">Dog myDog = <span class="font-black">new</span> Dog();</p>
            </div>
            <p class="text-slate-600">This creates a new "Dog" object named <b>myDog</b>. You can now access its attributes using a dot <code>.</code> symbol.</p>
            <div class="bg-slate-100 p-4 rounded-lg font-mono text-xs mt-4">
               myDog.name = "Rex";<br/>
               myDog.bark(); // Output: Woof!
            </div>
          `
        },
        {
          title: "Constructors",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">The Setup Guy</h3>
            <p class="mb-6">A <b>Constructor</b> is a special method that runs automatically the very second an object is created. It's used to "setup" the object's data.</p>
            <div class="bg-slate-900 rounded-2xl p-6 font-mono text-sm text-amber-200">
               <span class="text-slate-500">// Constructor must match Class name</span><br/>
               <span class="text-orange-400">public</span> Dog(String dogName) {<br/>
               &nbsp;&nbsp;name = dogName;<br/>
               }
            </div>
          `
        },
        {
          title: "The 'this' Keyword",
          type: "text",
          content: `
            <h3 class="text-xl font-bold mb-4">Me, Myself, and I</h3>
            <p class="mb-6">In Java, <code class="text-indigo-600 font-bold">this</code> is a reference to the current object. It's like a person pointing to themselves and saying "Me."</p>
            <p class="text-slate-600 text-sm mb-6">We use it when the variable name in the constructor is the same as the class attribute.</p>
            <div class="bg-slate-50 p-6 rounded-2xl font-mono text-sm border">
               <span class="text-indigo-600">this</span>.age = age;
            </div>
          `
        }
      ]
    },
    {
        title: "5. Lab & Certification",
        lessons: [
          {
            title: "Final Assessment",
            type: "lab",
            content: `
              <div class="text-center py-20 bg-indigo-600 rounded-3xl shadow-2xl shadow-indigo-200">
                <h2 class="text-4xl font-black text-white mb-6">Congratulations!</h2>
                <p class="text-indigo-100 mb-12 max-w-sm mx-auto">You've mastered the basics. Now prove it in the final lab.</p>
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