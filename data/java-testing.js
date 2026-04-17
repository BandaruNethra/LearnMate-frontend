export const javaTesting = {
  id: "java-testing",
  title: "Java Testing Masterclass",
  modules: [
    {
      title: "Module 1: Professional Testing Strategy",
      lessons: [
        {
          title: "The Testing Pyramid & Economic Reality",
          content: `
            <p>In modern software engineering, we follow the <strong>Testing Pyramid</strong>. At the base, we have <strong>Unit Tests</strong> (hundreds of them), in the middle are <strong>Integration Tests</strong>, and at the peak are <strong>UI/E2E Tests</strong>. The reason for this shape is simple: Return on Investment (ROI). Unit tests are lightning-fast to run and cheap to maintain, while UI tests are "flaky" and slow. If your pyramid is upside down (lots of UI tests, few unit tests), your build process will eventually grind to a halt due to maintenance overhead.</p>
            <div style="background: #f0fdf4; padding: 35px; border-radius: 25px; border-left: 10px solid #22c55e; margin: 30px 0; line-height: 1.9;">
              <h4 style="color: #166534; margin-top:0; font-size: 22px;">The Economic Cost of Failure</h4>
              <p>Finding a bug during development costs roughly $10 in developer time. Finding that same bug in production can cost thousands in lost revenue, database recovery, and brand damage. Testing is not a "chore"; it is an insurance policy for your career and your company. By automating these checks, you free yourself from the fear of breaking existing features when you add new code. High-performing teams deploy multiple times a day because they trust their automated safety net.</p>
            </div>
            <p>As a Java developer, your goal is "High Confidence Deployment." You want to hit the deploy button and go to sleep peacefully, knowing your test suite has verified every critical path of your business logic. This requires a cultural shift from 'writing code' to 'engineering systems' that prove their own correctness through rigorous mathematical and logical verification.</p>
          `
        },
        {
          title: "Black Box vs. White Box Methodologies",
          content: `
            <p><strong>White Box Testing</strong> (Structural Testing) involves knowing the internal code structure. You write tests to cover every <code>if-else</code> branch, every switch case, and every loop boundary. You are testing the implementation itself. <strong>Black Box Testing</strong> (Functional Testing) ignores the code and focuses entirely on inputs and outputs—testing the requirements rather than the specific lines of Java. It ensures the software does what the customer asked for, regardless of how it's written.</p>
            <p>A senior engineer uses a hybrid approach. We use White Box techniques to ensure 100% path coverage in complex algorithms where logic errors are common, and Black Box techniques at the service level to ensure that the "User Story" is fulfilled. We also utilize <strong>Gray Box Testing</strong> during integration, where we have partial knowledge of the internals (like the database schema) but interact with the system through its public API endpoints.</p>
          `
        },
        {
          title: "The Concept of Test Flakiness",
          content: `
            <p>A "Flaky Test" is a test that provides inconsistent results—passing sometimes and failing others without any change to the code. This is the silent killer of productivity. Flakiness usually stems from shared state, reliance on system time, or network latency. In Java, this often happens when multiple tests share a static variable or an in-memory database without properly resetting it in <code>@AfterEach</code>.</p>
            <p>To battle flakiness, tests must be <strong>Deterministic</strong>. Given the same input, they must produce the exact same output every single time. We utilize tools like <code>Awaitility</code> for testing asynchronous code, ensuring we wait for a condition to be met rather than using <code>Thread.sleep()</code>, which is the leading cause of brittle and slow test suites.</p>
          `
        },
        {
          title: "Measuring Quality: Code Coverage Metrics",
          content: `
            <p>Code Coverage is a metric that shows which lines of your code were executed during your tests. Tools like <strong>JaCoCo</strong> generate reports showing Line Coverage, Branch Coverage, and Complexity Coverage. While 100% coverage sounds impressive, it can be misleading. You can have high coverage with poor assertions that don't actually verify the logic.</p>
            <p>Focus on <strong>Branch Coverage</strong>. If you have an <code>if</code> statement, you need two tests: one where the condition is true and one where it is false. This is far more valuable than simply running the line. In a professional CI/CD pipeline, we set "Quality Gates"—if the branch coverage drops below a certain threshold (e.g., 85%), the build fails and the code cannot be merged.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: JUnit 5 (Jupiter) Framework Architecture",
      lessons: [
        {
          title: "Jupiter, Vintage, and the Platform",
          content: `
            <p>JUnit 5 is not a single library; it is a modular platform. <strong>JUnit Platform</strong> serves as the foundation for launching testing frameworks on the JVM. <strong>JUnit Jupiter</strong> is the new programming model with modern annotations, and <strong>JUnit Vintage</strong> provides backward compatibility for JUnit 3 and 4. This separation allows IDEs and build tools to interact with multiple versions of JUnit simultaneously.</p>
            <p>This modularity is why JUnit 5 is so much more powerful than its predecessors. It allows for advanced features like dynamic tests and custom test engines. As a developer, you primarily interact with Jupiter, but understanding the underlying platform helps when configuring complex build environments in Maven or Gradle where multiple testing libraries might coexist.</p>
          `
        },
        {
          title: "Deep Dive into Annotations",
          content: `
            <p>Annotations in JUnit 5 control the lifecycle of your test class. <code>@BeforeEach</code> and <code>@AfterEach</code> run before and after every single test method, while <code>@BeforeAll</code> and <code>@AfterAll</code> run once per class (and must be static by default). Using these correctly is essential for maintaining <strong>Test Isolation</strong>.</p>
            <pre><code>class OrderServiceTest {
    @BeforeAll
    static void initGlobal() {
        // Setup expensive resources like a Mock Web Server
    }

    @BeforeEach
    void initEach() {
        // Fresh instance of service to avoid state leakage
        service = new OrderService();
    }
}</code></pre>
          `
        },
        {
          title: "Assertions & The assertAll Power-Move",
          content: `
            <p>Assertions are the soul of the test. While <code>assertEquals(expected, actual)</code> is the bread and butter, JUnit 5's <code>assertAll()</code> is a game-changer. It allows for "Grouped Assertions" where all assertions are executed even if one fails. This prevents the "First-Failure-Stop" problem, giving you a comprehensive view of all errors in a complex object comparison.</p>
            <p>By using <code>assertAll</code>, you can verify multiple fields of a returned User object—username, email, and ID—in one go. If the email and ID are wrong, you see both failures in the console, rather than fixing the email, running the test again, and then discovering the ID was also wrong. This drastically speeds up the debugging cycle.</p>
          `
        },
        {
          title: "Tagging, Filtering, and Conditional Execution",
          content: `
            <p>Not all tests should run all the time. <code>@Tag("Smoke")</code> or <code>@Tag("Slow")</code> allows you to filter tests during your build. You can run only "Smoke" tests on every commit, while running "Slow" integration tests only during the nightly build. Furthermore, <code>@EnabledOnOs</code> or <code>@EnabledIfSystemProperty</code> allows you to skip tests that only work on Linux or specific Java versions, preventing false negatives in diverse environments.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Advanced Mocking with Mockito",
      lessons: [
        {
          title: "The Art of Stubbing & Behavioral Verification",
          content: `
            <p>Mockito is the industry-standard mocking framework for Java. It uses <strong>Dynamic Proxies</strong> to create "fake" versions of your dependencies. <strong>Stubbing</strong> is the act of defining how a mock should respond to a call (e.g., <code>when(repo.find()).thenReturn(data)</code>). <strong>Verification</strong> is checking that a specific method was actually called (e.g., <code>verify(emailService).send()</code>).</p>
            <p>The key to professional mocking is to only mock your "Neighbors"—the classes directly adjacent to the one you are testing. Never mock the class under test (the SUT). Over-mocking leads to "Brittle Tests" that break every time you refactor your internal code, even if the behavior remains the same. Focus on testing the interaction contract between components.</p>
          `
        },
        {
          title: "Deep Stubbing vs. Argument Captors",
          content: `
            <p>Sometimes you need to inspect the exact object passed to a dependency. <code>ArgumentCaptor&lt;T&gt;</code> allows you to "catch" the argument and perform detailed assertions on its internal state. This is much more robust than simple equality checks, especially for complex objects generated inside the service layer.</p>
            <pre><code>ArgumentCaptor&lt;User&gt; captor = ArgumentCaptor.forClass(User.class);
verify(userRepo).save(captor.capture());

User captured = captor.getValue();
assertEquals("expected@mail.com", captured.getEmail());
assertTrue(captured.isActive());</code></pre>
          `
        },
        {
          title: "Spying: When to Use Partial Mocks",
          content: `
            <p>The <code>@Spy</code> annotation creates a partial mock. It wraps a real instance of an object and delegates calls to it unless you explicitly stub a specific method. This is a powerful tool for legacy code where you want to test a class but need to "mute" one troublesome method (like a network call) while letting the rest of the real logic execute.</p>
          `
        },
        {
          title: "BDDMockito: Natural Language Tests",
          content: `
            <p>Mockito provides a <code>BDDMockito</code> wrapper that follows the <strong>Given-When-Then</strong> semantic. Instead of <code>when(...).thenReturn(...)</code>, you use <code>given(...).willReturn(...)</code>. This small syntactic change makes your tests read like a narrative, which significantly improves readability for other developers and aligns the code with Behavior Driven Development principles.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Data-Driven & Parameterized Testing",
      lessons: [
        {
          title: "The Power of ValueSource & EnumSource",
          content: `
            <p>A single test method should often be run with multiple inputs. <code>@ValueSource</code> allows you to pass an array of literals (Strings, ints, doubles) to your test. <code>@EnumSource</code> is even more powerful, automatically running the test for every value in a specific Java Enum, ensuring that your logic handles every possible state of a business process.</p>
          `
        },
        {
          title: "CSV Sources for Complex Data Rows",
          content: `
            <p>When you need to pass multiple parameters (e.g., input and expected output), <code>@CsvSource</code> is the answer. It allows you to define rows of data in a comma-separated format directly above your test method. This is perfect for testing calculators, validators, or mapping logic where you need to verify dozens of variations in a compact, readable table.</p>
            <pre><code>@ParameterizedTest
@CsvSource({
    "10, 20, 30",
    "0, 5, 5",
    "-1, -1, -2"
})
void testAdd(int a, int b, int expected) {
    assertEquals(expected, calc.add(a, b));
}</code></pre>
          `
        },
        {
          title: "MethodSource: Dynamic Data Generation",
          content: `
            <p>For the most complex scenarios, <code>@MethodSource</code> allows you to point to a static Java method that returns a <code>Stream</code> of Arguments. This allows you to programmatically generate test data, load it from a JSON file, or even fetch it from a database. This is the ultimate level of flexibility for data-driven testing in enterprise Java applications.</p>
          `
        },
        {
          title: "Argument Converters & Aggregators",
          content: `
            <p>JUnit 5 can automatically convert CSV strings into complex Java objects using <code>ArgumentConverter</code>. If you have a row like "John, Doe, 25", you can use an <code>@AggregateWith</code> annotation to automatically transform that row into a <code>User</code> object before it even enters your test method, keeping your test code clean and focused on assertions.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Integration Testing & Spring Context Slicing",
      lessons: [
        {
          title: "@SpringBootTest vs. Specialized Slices",
          content: `
            <p>Using <code>@SpringBootTest</code> starts the entire application, which is slow and heavy. Spring Boot provides <strong>Context Slicing</strong> to load only what you need. <code>@DataJpaTest</code> only starts the database layer; <code>@WebMvcTest</code> only starts the web layer. This "Partial Context" approach gives you the benefits of integration testing with the speed of unit testing.</p>
            <div style="background: #eff6ff; padding: 25px; border-radius: 20px; border: 1px solid #bfdbfe; margin: 25px 0;">
              <strong>Architect's Note:</strong> Slicing is the key to a fast CI/CD pipeline. By only loading the necessary Beans, you can reduce your test execution time from 5 minutes down to 30 seconds, enabling faster feedback loops for the development team.
            </div>
          `
        },
        {
          title: "MockMvc: Testing REST Controllers Safely",
          content: `
            <p><code>MockMvc</code> allows you to simulate HTTP requests to your controllers without starting a real web server. You can verify JSON responses using <code>jsonPath</code>, check HTTP status codes, and even verify that specific headers are present. It is the definitive way to test your API contract without the overhead of network ports and sockets.</p>
          `
        },
        {
          title: "The @MockBean & @SpyBean Annotations",
          content: `
            <p>Inside a Spring integration test, you often need to mock one specific service while keeping the rest of the app real. <code>@MockBean</code> replaces an existing Bean in the Spring Context with a Mockito mock. This allows you to test your "Database-to-Controller" flow while mocking the external "Payment Gateway" that you don't want to hit during tests.</p>
          `
        },
        {
          title: "Profiles & application-test.properties",
          content: `
            <p>Never run tests against your production database. By using <code>@ActiveProfiles("test")</code>, you can tell Spring to load configuration from <code>application-test.properties</code>. This allows you to use different database URLs, API keys, and logging levels for your test environment, ensuring total environmental separation.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Database Persistence & Testcontainers",
      lessons: [
        {
          title: "The Fallacy of In-Memory Databases (H2)",
          content: `
            <p>While H2 is fast, it is not a perfect clone of PostgreSQL or MySQL. It lacks specific features like JSONB columns, window functions, or exact locking behaviors. A test that passes on H2 might fail on Postgres due to a syntax difference. This is why senior engineers moving toward "Container-First" testing strategies.</p>
          `
        },
        {
          title: "Dockerizing Your Tests with Testcontainers",
          content: `
            <p><strong>Testcontainers</strong> is a Java library that manages Docker containers for your tests. It will automatically download a PostgreSQL image, start it, provide your Spring app with the random port number, and then destroy the container once the tests finish. This ensures that your integration tests are 100% realistic and identical to production.</p>
          `
        },
        {
          title: "Database Riders & Initial State",
          content: `
            <p>To test database logic, you need data. <strong>DBRider</strong> allows you to use <code>@DataSet</code> to load XML or JSON files into your database before a test runs. This provides a "Known Good State," allowing you to verify complex SQL queries or reporting logic without manually writing 50 <code>INSERT</code> statements in every test.</p>
          `
        },
        {
          title: "Transactional Testing & Rollback",
          content: `
            <p>By default, Spring integration tests wrap every test in a transaction and <strong>roll it back</strong> at the end. This is a brilliant feature that keeps your database clean for the next test. However, you must be careful—if your code uses <code>REQUIRES_NEW</code> or manual commits, the rollback might not work as expected, leading to state leakage.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Behavioral Testing (BDD) & Cucumber",
      lessons: [
        {
          title: "Gherkin: The Language of Business",
          content: `
            <p>Gherkin is a human-readable language used to define test scenarios. It uses keywords like <strong>Feature, Scenario, Given, When, and Then</strong>. This allows Product Owners to write the requirements in a way that is literally executable by the Java test suite, creating a single source of truth for the entire company.</p>
          `
        },
        {
          title: "Step Definitions: Bridging English to Java",
          content: `
            <p>Step Definitions are Java methods annotated with Gherkin keywords. Using Regular Expressions or Cucumber Expressions, you map a line like "Given a user with 50 dollars" to a Java method that actually creates a user in the database. This "Glue Code" is what turns plain English into a powerful automated test suite.</p>
          `
        },
        {
          title: "The Power of Data Tables",
          content: `
            <p>Cucumber allows you to pass tables of data into your steps. Instead of writing five scenarios for five different users, you can use a <strong>Scenario Outline</strong> with an "Examples" table. This keeps your Gherkin files dry and allows you to test massive amounts of business permutations in a highly readable format.</p>
          `
        },
        {
          title: "Living Documentation & Reporting",
          content: `
            <p>When you run Cucumber, it generates a beautiful HTML report. This report isn't just for developers; it shows which business requirements are met and which are failing. It acts as "Living Documentation" that is always up-to-date, unlike a static Word document that gathers dust in a shared folder.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: Performance & Mutation Testing",
      lessons: [
        {
          title: "PITest: Testing the Quality of Your Tests",
          content: `
            <p>Code Coverage tells you what code was run; <strong>Mutation Testing</strong> tells you if your tests actually caught any bugs. PITest creates "Mutants" by changing your code (e.g., flipping a <code>+</code> to a <code>-</code>). If your tests still pass, the mutant "Survived," meaning your test suite is weak. If the tests fail, the mutant was "Killed," proving your tests are high quality.</p>
          `
        },
        {
          title: "Benchmarking with JMH",
          content: `
            <p>The **Java Microbenchmark Harness (JMH)** is the official tool for measuring the performance of small pieces of Java code. It handles the complexities of the JVM (like JIT compilation and warm-up cycles) to give you accurate nanosecond-level measurements of your algorithms, preventing performance regressions in critical sections of your app.</p>
          `
        },
        {
          title: "Load Testing with Gatling Java SDK",
          content: `
            <p>Gatling is a powerful load-testing tool. With its new Java SDK, you can write load tests in pure Java. You can simulate thousands of concurrent users, define "Ramp-up" periods, and verify that your system remains responsive under extreme pressure, ensuring your architecture can handle the next big traffic spike.</p>
          `
        },
        {
          title: "Static Analysis with SonarQube",
          content: `
            <p>While not a "test" in the traditional sense, Static Analysis scans your code for "Smells" and "Vulnerabilities" without running it. It catches issues like hardcoded passwords, potential NullPointerExceptions, and cognitive complexity. Integrating SonarQube with your JUnit suite provides a 360-degree view of software quality.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Lab & Final Certification",
      lessons: [
        {
          title: "Final Assessment",
          type: "lab",
          content: `
            <div class="text-center py-24 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-3xl shadow-2xl">
              <h2 class="text-5xl font-black text-white mb-8">The Quality Architect</h2>
              <p class="text-emerald-50 mb-14 max-w-xl mx-auto text-lg leading-relaxed">
                You have journeyed from basic assertions to Docker-based integration tests and Mutation analysis. 
                Your skills now match the top 1% of Java engineers. Complete the final challenge to claim your title.
              </p>
              <div class="flex flex-col gap-6 max-w-sm mx-auto">
                  <a href="/lab-center" class="bg-white text-teal-700 py-6 rounded-2xl font-black tracking-widest uppercase text-base hover:scale-105 transition-all shadow-xl">
                    Launch Final Lab & Quiz
                  </a>
                  <p class="text-emerald-200 text-sm italic">Estimated time: 45 minutes</p>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};