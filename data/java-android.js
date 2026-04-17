export const javaAndroid = {
  id: "java-android",
  title: "Java Android Dev",
  modules: [
    {
      title: "Module 1: Android System Architecture & Internals",
      lessons: [
        {
          title: "The Linux Kernel & Hardware Abstraction Layer",
          content: `
            <p>Android is not a standalone operating system in the traditional sense; it is a sophisticated, multi-layered software stack built on top of the <strong>Linux Kernel</strong>. This kernel layer acts as the primary hardware abstraction, managing low-level drivers for the camera, display, Wi-Fi, and flash memory. It provides the essential security between the application and the hardware, ensuring that one app cannot crash the entire device or access hardware it isn't permitted to use.</p>
            
            <div style="background: #f0fdf4; padding: 30px; border-radius: 25px; border-left: 8px solid #22c55e; margin: 25px 0; line-height: 1.8;">
              <h4 style="color: #166534; margin-top:0; font-size: 20px;">The HAL (Hardware Abstraction Layer)</h4>
              <p>Directly above the kernel lies the HAL. The HAL provides standard interfaces that expose device hardware capabilities to the higher-level Java API framework. When you write Java code to take a photo, you don't need to know the specific brand of the camera sensor. The HAL translates your generic Java command into a specific instruction for that hardware.</p>
            </div>

            <p>As a professional Java developer, your code interacts with the <strong>Java API Framework</strong>. This layer provides the building blocks for your app, such as the Window Manager, Resource Manager, and Notification Manager. Understanding this "Sandboxed" environment is critical because it explains why apps need permissions and why they cannot simply access the file system of another application.</p>
            
            <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=1000" style="width: 100%; border-radius: 2.5rem; margin: 30px 0; shadow: 0 25px 50px -12px rgba(0,0,0,0.5);" />
          `
        },
        {
          title: "ART: The Android Runtime & DEX Bytecode",
          content: `
            <p>In standard desktop Java, code is compiled into Bytecode and run on a JVM. However, Android is different. It uses the <strong>ART (Android Runtime)</strong>. When you build your project, your <code>.java</code> files are compiled into <code>.class</code> files, which are then transformed into <code>.dex</code> (Dalvik Executable) files. This format is highly compressed and optimized for devices with limited memory and battery power.</p>
            
            <h3>Ahead-of-Time (AOT) Compilation</h3>
            <p>ART introduced AOT compilation to solve the performance issues of early Android versions. When a user installs your app, ART pre-compiles the DEX files into machine code. This results in significantly faster app startup times and reduced CPU usage, which directly translates to better battery life. This is why some apps take a moment longer to "Install"—they are being optimized for that specific phone's processor.</p>
            
            <div style="background: #eff6ff; padding: 25px; border-radius: 20px; border: 1px solid #bfdbfe; margin: 25px 0;">
              <p><strong>Pro Tip:</strong> Memory management in ART is sophisticated. It uses a concurrent Garbage Collector that pauses the app for mere microseconds. To help ART, Java developers should avoid creating unnecessary short-lived objects inside "onDraw" or "onBind" methods to prevent "Memory Churn."</p>
            </div>

            <pre><code>// Compilation Flow in Android:
// 1. Java Source Code (.java)
// 2. Java Compiler -> Java Bytecode (.class)
// 3. DEX Tool -> Dalvik Bytecode (.dex)
// 4. ART (on device) -> Machine Code (.oat)</code></pre>
          `
        },
        {
          title: "The Manifest: The App's Identity & Security",
          content: `
            <p>Every Android app must have an <code>AndroidManifest.xml</code> file at its root. Think of this as the "Blueprint" or "ID Card" of your application. The Android system cannot start any component of your app (Activity, Service, or Receiver) unless it is explicitly declared here. If you create a new Java Activity but forget to add it to the Manifest, your app will crash with an <code>ActivityNotFoundException</code> the moment you try to open that screen.</p>
            
            <p>The Manifest also handles the <strong>Security Model</strong> of your app. In modern Android, you must declare your intent to use sensitive features like the Internet, Camera, or Contacts here. Beyond security, it also specifies the <strong>Hardware Requirements</strong>; for example, if your app requires a Gyroscope to work, you declare it in the Manifest so that the Google Play Store won't allow users without a gyroscope to install your app, preventing negative reviews from frustrated users.</p>

            <pre><code>&lt;!-- Example of a Robust Manifest Entry --&gt;
&lt;manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.learnmate.android"&gt;

    &lt;uses-permission android:name="android.permission.INTERNET" /&gt;
    &lt;uses-permission android:name="android.permission.CAMERA" /&gt;

    &lt;application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.LearnMate"&gt;
        
        &lt;activity android:name=".MainActivity"
            android:exported="true"&gt;
            &lt;intent-filter&gt;
                &lt;action android:name="android.intent.action.MAIN" /&gt;
                &lt;category android:name="android.intent.category.LAUNCHER" /&gt;
            &lt;/intent-filter&gt;
        &lt;/activity&gt;
    &lt;/application&gt;
&lt;/manifest&gt;</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 2: The Activity Lifecycle Deep Dive",
      lessons: [
        {
          title: "Foreground, Background, and Visibility States",
          content: `
            <p>Understanding the Lifecycle is the defining trait of an expert Android engineer. An Activity is not just "Open" or "Closed." It exists in a spectrum of visibility. <code>onResume()</code> is called when the user can interact with the screen, while <code>onPause()</code> is called when a dialog or a transparent activity partially covers your screen. During <code>onPause()</code>, your animations should stop to save battery, but the user can still see your app.</p>
            
            <p>When the user navigates away to another app, your activity moves to the <strong>Stopped State</strong> (<code>onStop()</code>). In this state, the activity is still in memory, but it is no longer visible. If the system runs low on RAM, it will kill your stopped activity without warning. This is why you must save the UI state in <code>onSaveInstanceState()</code> to ensure that when the user returns, they don't find a blank form after filling out 20 fields.</p>
            
            <div style="background: #fff1f2; padding: 25px; border-radius: 20px; border: 1px solid #fecdd3; color: #9f1239; margin: 25px 0;">
              <strong>The Golden Rule:</strong> Never perform heavy "Cleanup" (like closing a large database) in <code>onPause()</code>. This method must be incredibly fast because the next activity cannot start until your current <code>onPause()</code> finishes. Always use <code>onStop()</code> for heavy resource release.
            </div>
          `
        },
        {
          title: "Managing Configuration Changes & Rotation",
          content: `
            <p>Did you know that rotating your phone actually <strong>destroys and recreates</strong> your Activity from scratch? This is known as a "Configuration Change." By default, any variable you have stored in your Java class will be reset to null when the screen rotates. This is one of the most common sources of bugs in Android development.</p>
            
            <p>To prevent data loss, we use a <code>Bundle</code> to save data. When the activity is being destroyed, <code>onSaveInstanceState(Bundle outState)</code> is triggered. You can put strings, integers, or serializable objects into this bundle. When the activity restarts, that same bundle is passed back to <code>onCreate(Bundle savedInstanceState)</code>, allowing you to restore the UI state seamlessly.</p>

            <pre><code>@Override
protected void onSaveInstanceState(Bundle outState) {
    // Save the current score or user input
    outState.putInt("current_score", score);
    outState.putString("user_comment", editText.getText().toString());
    super.onSaveInstanceState(outState);
}

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    
    if (savedInstanceState != null) {
        score = savedInstanceState.getInt("current_score");
        String savedComment = savedInstanceState.getString("user_comment");
        // Update UI with restored values
    }
}</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 3: Advanced UI with ConstraintLayout",
      lessons: [
        {
          title: "Building Flat, High-Performance Hierarchies",
          content: `
            <p>In the early days of Android, we used nested <code>LinearLayouts</code> to align items. However, every "Nest" adds a layer of calculation for the CPU. <strong>ConstraintLayout</strong> was invented to allow for a <strong>Flat View Hierarchy</strong>. It allows you to build complex screens where every element is positioned relative to its neighbor or the parent container using "Anchors."</p>
            
            <p>This approach is significantly faster to render. On a screen with 50 elements, a flat ConstraintLayout might render in 8ms, whereas a nested layout might take 20ms. In the world of 120Hz displays, those milliseconds are the difference between a smooth app and a laggy experience.</p>
            
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1000" style="width: 100%; border-radius: 2.5rem; margin: 30px 0;" />
          `
        },
        {
          title: "The Art of Guidelines and Responsive Design",
          content: `
            <p>ConstraintLayout offers tools that traditional layouts cannot match. <strong>Guidelines</strong> are invisible lines (horizontal or vertical) that act as anchor points. You can set a guideline at exactly 25% of the screen width. Then, you can attach your images to that guideline. If you ever want to change the layout, you just move the guideline, and every element attached to it moves automatically.</p>
            
            <p><strong>Ratios</strong> are another powerful feature. You can tell a view to always maintain a 16:9 aspect ratio, regardless of the screen size. This ensures that your video player or hero image looks perfect on both a small budget phone and a massive foldable device.</p>

            <pre><code>&lt;!-- XML Example of a Guideline and Aspect Ratio --&gt;
&lt;androidx.constraintlayout.widget.Guideline
    android:id="@+id/guideline_left"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    app:layout_constraintGuide_percent="0.1" /&gt;

&lt;ImageView
    android:layout_width="0dp"
    android:layout_height="0dp"
    app:layout_constraintDimensionRatio="H,16:9"
    app:layout_constraintStart_toStartOf="@id/guideline_left"
    app:layout_constraintEnd_toEndOf="parent" /&gt;</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 4: Threading & The Main Thread Rule",
      lessons: [
        {
          title: "The UI Thread & Application Not Responding (ANR)",
          content: `
            <p>Android is a single-threaded system by default. The <strong>Main Thread</strong> (also known as the UI Thread) is responsible for everything the user sees. It handles clicks, draws animations, and renders text. If you perform a heavy task—like downloading a large file or processing a complex image—on this thread, the UI cannot draw, and the app appears "frozen."</p>
            
            <p>After 5 seconds of the Main Thread being blocked, the system displays the <strong>Application Not Responding (ANR)</strong> dialog. Users hate this and will often uninstall an app immediately after seeing it. To prevent this, all I/O operations (Networking, Database, File reading) must be moved to a <strong>Worker Thread</strong>.</p>
            
            <div style="background: #fdf2f2; padding: 25px; border-radius: 20px; border-left: 6px solid #ef4444; margin: 25px 0;">
              <strong>The Rule of Two:</strong> 1. Never block the Main Thread. 2. Never touch a UI View from a Worker Thread.
            </div>
          `
        },
        {
          title: "Modern Concurrency: ExecutorService & Handlers",
          content: `
            <p>In modern Java Android, we use the <code>ExecutorService</code> to manage a pool of threads. Instead of creating a new thread for every task (which consumes significant CPU), we submit tasks to a pool of reusable workers. To communicate the results back to the UI, we use the <strong>Handler</strong> class tied to the <code>MainLooper</code>.</p>
            
            <p>A Handler acts as a bridge. The worker thread performs the heavy math, and when it is finished, it "posts" a message to the Handler. The Handler then waits for a free millisecond on the Main Thread to update the text or images safely without causing a <code>CalledFromWrongThreadException</code>.</p>

            <pre><code>// Professional Threading Implementation in Java
ExecutorService executor = Executors.newFixedThreadPool(4);
Handler mainHandler = new Handler(Looper.getMainLooper());

executor.execute(() -> {
    // 1. Heavy Network/DB Work here
    String data = fetchDataFromServer();

    // 2. Safely Update UI
    mainHandler.post(() -> {
        textView.setText(data);
        progressBar.setVisibility(View.GONE);
    });
});</code></pre>
          `
        }
      ]
    },
    {
      title: "Module 5: Room Database & The Repository Pattern",
      lessons: [
        {
          title: "Modern Persistence with Room ORM",
          content: `
            <p>For high-quality apps, storing data locally is mandatory for offline functionality. While Android uses SQLite as its engine, writing raw SQL strings in Java is error-prone. <strong>Room</strong> is a modern abstraction layer that provides <strong>compile-time verification</strong> of SQL queries. If you misspell a table name in your Java code, the app won't even compile, catching bugs before they reach the user.</p>
            
            <p>Room uses Java Annotations (<code>@Entity</code>, <code>@Dao</code>, <code>@Database</code>) to define your data structures. This "Object-Relational Mapping" allows you to treat your database rows as simple Java Objects, making the code much more readable and maintainable for large engineering teams.</p>
          `
        },
        {
          title: "Architecture: Separating UI from Data",
          content: `
            <p>A professional app follows the <strong>Separation of Concerns</strong> principle. Your Activity should not know where the data comes from; it should only know how to display it. We use the <strong>Repository Pattern</strong> to achieve this. The Repository acts as a "Single Source of Truth."</p>
            
            <p>The Repository decides whether to fetch data from the cloud using Retrofit or load it from the local Room database. By abstracting this logic, you can swap out your database or your API without changing a single line of code in your UI activities. This architecture is the industry standard for scalable, testable Android applications.</p>

            <pre><code>@Dao
public interface UserDao {
    @Query("SELECT * FROM users WHERE id = :userId")
    LiveData&lt;User&gt; getUserById(int userId);

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    void insertUser(User user);
}</code></pre>
          `
        }
      ]
    },
    {
      title: "6. Lab & Certification",
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