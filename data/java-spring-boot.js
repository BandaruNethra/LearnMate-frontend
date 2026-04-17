export const javaSpringBoot = {
  id: "java-spring-boot",
  title: "Advanced Spring Boot",
  modules: [
    {
      title: "Module 1: Core Framework Architecture",
      lessons: [
        {
          title: "Inversion of Control (IoC) & The Bean Factory",
          content: `
            <p>At the very foundation of Spring Boot is the <strong>IoC Container</strong>. In traditional Java, you manage object lifecycles manually using the <code>new</code> keyword, creating tight coupling. Spring reverses this. The <code>ApplicationContext</code> acts as the central engine that instantiates, configures, and manages your objects, known as <strong>Beans</strong>.</p>
            <div style="background: #f0fdf4; padding: 30px; border-radius: 25px; border-left: 8px solid #22c55e; margin: 25px 0; line-height: 1.8;">
              <strong>The High-Level Concept:</strong> Think of the IoC container as a master chef. You provide the recipe (your classes and annotations), and the chef prepares the meal (your running application), delivering the right ingredients (dependencies) exactly when they are needed.
            </div>
            <p>By delegating object creation to Spring, your code becomes modular. This allows for seamless unit testing and the ability to swap implementations (like changing a Mock Email Service for a Real Email Service) purely through configuration, without touching the business logic.</p>
          `
        },
        {
          title: "Dependency Injection (DI) Strategies",
          content: `
            <p>Dependency Injection is the specialized pattern used to implement IoC. In Spring Boot, there are three primary ways to inject dependencies: Field, Setter, and Constructor injection. While Field injection is common in tutorials, <strong>Constructor Injection</strong> is the gold standard for production applications.</p>
            <p>Using Constructor injection ensures that your beans are never in an "incomplete" state. It makes dependencies explicit and allows for the use of <code>final</code> keywords, guaranteeing immutability. This is vital for thread safety in high-concurrency Spring environments.</p>
            <pre><code>@Service
public class OrderService {
    private final PaymentClient paymentClient;

    // The preferred way: Constructor Injection
    public OrderService(PaymentClient paymentClient) {
        this.paymentClient = paymentClient;
    }
}</code></pre>
          `
        },
        {
          title: "The Bean Lifecycle & Post-Processors",
          content: `
            <p>Every Spring Bean goes through a sophisticated lifecycle. It starts with <strong>Instantiation</strong>, followed by <strong>Populating Properties</strong>, and then a series of <strong>Initialization</strong> phases. Understanding this is key to debugging "Circular Dependency" errors and performance bottlenecks.</p>
            <p>Spring provides hooks like <code>@PostConstruct</code> and <code>@PreDestroy</code>. However, the real power lies in <strong>BeanPostProcessors</strong>. These are internal Spring mechanisms that can intercept bean creation to wrap them in Proxies. This is exactly how Spring adds "Magic" functionality like Caching or Security to your methods without you writing a single line of extra code.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Autoconfiguration & Starters",
      lessons: [
        {
          title: "The Mystery of @SpringBootApplication",
          content: `
            <p>The <code>@SpringBootApplication</code> annotation is actually a "Meta-Annotation" that combines three powerful features: <code>@Configuration</code>, <code>@EnableAutoConfiguration</code>, and <code>@ComponentScan</code>. It tells Spring to start looking for beans and to begin the autoconfiguration process based on the JAR files it finds in your classpath.</p>
          `
        },
        {
          title: "Conditional Annotations",
          content: `
            <p>How does Spring Boot know to configure a H2 database if it's there, but switch to MySQL if that's available? It uses <strong>Conditional Annotations</strong> like <code>@ConditionalOnClass</code> and <code>@ConditionalOnProperty</code>. This allows the framework to be "intelligent," configuring only what is absolutely necessary for your specific environment.</p>
          `
        },
        {
          title: "Creating Custom Starters",
          content: `
            <p>For large enterprises, we often create "Internal Starters." This allows multiple teams to share common configurations (like a unified Logging or Security setup) by simply adding a single Maven/Gradle dependency. This promotes "Don't Repeat Yourself" (DRY) principles across the entire company.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: RESTful Web Services",
      lessons: [
        {
          title: "Controller & Content Negotiation",
          content: `
            <p>Spring MVC turns Java objects into JSON or XML through a process called <strong>Content Negotiation</strong>. By using <code>@RestController</code>, you tell Spring that every return value from your methods should be written directly into the HTTP Response Body.</p>
            <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=1000" style="width: 100%; border-radius: 2.5rem; margin: 30px 0;" />
          `
        },
        {
          title: "Path Variables & Request Params",
          content: `
            <p>Learn to design clean, RESTful URLs. We explore the difference between <code>@PathVariable</code> (used for identifying resources) and <code>@RequestParam</code> (used for filtering or sorting data). Designing these correctly is the hallmark of a senior backend developer.</p>
          `
        },
        {
          title: "ResponseEntity & Status Codes",
          content: `
            <p>A professional API must speak the language of HTTP. Instead of returning raw objects, we use <code>ResponseEntity</code> to control the Status Code, Headers, and Body. We'll cover when to use 201 (Created), 204 (No Content), and 409 (Conflict).</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Global Exception Management",
      lessons: [
        {
          title: "The @ControllerAdvice Pattern",
          content: `
            <p>Stop using try-catch blocks in your controllers! This lesson teaches you to centralize all error handling. By using <strong>@ControllerAdvice</strong>, you can catch any exception thrown anywhere in your app and return a consistent JSON error structure to your frontend.</p>
          `
        },
        {
          title: "Custom Exception Hierarchies",
          content: `
            <p>We'll build a custom hierarchy of RuntimeExceptions (e.g., <code>ResourceNotFoundException</code>, <code>UnauthorizedActionException</code>) to make our business logic expressive and our error messages precise.</p>
          `
        },
        {
          title: "Validation & Error Responses",
          content: `
            <p>Using the <code>@Valid</code> annotation and <strong>Hibernate Validator</strong>, we can automatically validate user input. If a user sends a negative price or a blank username, Spring will automatically catch this and return a 400 Bad Request with a list of specific validation errors.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Data Persistence with JPA & Hibernate",
      lessons: [
        {
          title: "The Entity Lifecycle",
          content: `
            <p>Hibernate manages objects in four states: Transient, Managed, Detached, and Removed. Understanding these states is vital to preventing the "LazyInitializationException" that haunts many junior developers.</p>
          `
        },
        {
          title: "Derived Query Methods",
          content: `
            <p>Spring Data JPA allows you to write database queries just by naming Java methods! <code>findByEmailContainingIgnoreCase</code> tells Spring exactly how to build the SQL. It’s incredibly powerful for 80% of your database needs.</p>
          `
        },
        {
          title: "Paging & Sorting",
          content: `
            <p>Never return a million rows from your database. This lesson covers the <code>Pageable</code> and <code>Sort</code> interfaces, allowing your API to handle massive datasets efficiently through pagination.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Transaction Management",
      lessons: [
        {
          title: "The @Transactional Proxy",
          content: `
            <p>Deep dive into how Spring wraps your classes in a proxy to manage DB connections. We'll explore <strong>Propagation</strong> (e.g., REQUIRED vs REQUIRES_NEW) and why calling a transactional method from within the same class often fails to start a transaction.</p>
          `
        },
        {
          title: "Isolation Levels",
          content: `
            <p>Learn about database isolation: READ_COMMITTED, REPEATABLE_READ, and SERIALIZABLE. We'll discuss "Dirty Reads" and "Phantom Reads" and how to choose the right balance between performance and data integrity.</p>
          `
        },
        {
          title: "Rollback Rules",
          content: `
            <p>By default, Spring only rolls back on <strong>RuntimeExceptions</strong>. We'll learn how to configure <code>rollbackFor</code> to handle Checked Exceptions and ensure your business data never ends up in a "Half-Finished" state.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Spring Security & JWT",
      lessons: [
        {
          title: "The Security Filter Chain",
          content: `
            <p>Security is a series of filters. We'll trace a request through the <code>UsernamePasswordAuthenticationFilter</code> all the way to the <code>AuthorizationFilter</code>, understanding how Spring decides who is allowed in.</p>
          `
        },
        {
          title: "Stateless Auth with JWT",
          content: `
            <p>In modern Microservices, we don't store sessions on the server. We use <strong>JSON Web Tokens</strong>. This lesson explains how to generate, sign, and validate tokens using the <code>jjwt</code> library.</p>
          `
        },
        {
          title: "Method-Level Security",
          content: `
            <p>Use <code>@PreAuthorize("hasRole('ADMIN')")</code> to protect specific service methods. This ensures that even if a hacker bypasses your web layer, your critical business logic remains protected.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: Microservices & Cloud Native",
      lessons: [
        {
          title: "Service Discovery with Eureka",
          content: `
            <p>In a cloud environment, IP addresses change constantly. <strong>Netflix Eureka</strong> allows your services to find each other by name (e.g., "PAYMENT-SERVICE") instead of hardcoded IPs.</p>
          `
        },
        {
          title: "API Gateway & Routing",
          content: `
            <p>Use <strong>Spring Cloud Gateway</strong> as the single entry point for your entire system. It handles rate-limiting, cross-origin requests (CORS), and security at the "Front Door" of your architecture.</p>
          `
        },
        {
          title: "Resilience with Resilience4j",
          content: `
            <p>What if the Payment Service is down? Use <strong>Circuit Breakers</strong> to prevent your entire system from crashing. We'll implement "Fallback" methods to provide a graceful degraded experience to the user.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Observability & Monitoring",
      lessons: [
        {
          title: "Spring Boot Actuator",
          content: `
            <p>An app in production is a "Black Box" without <strong>Actuator</strong>. We'll enable endpoints like <code>/health</code> and <code>/metrics</code> to monitor CPU, Memory, and Database connections in real-time.</p>
          `
        },
        {
          title: "Distributed Tracing with Micrometer",
          content: `
            <p>When a request travels through 10 different microservices, how do you find where it slowed down? <strong>Distributed Tracing</strong> adds a unique TraceID to every request, allowing you to visualize the entire journey.</p>
          `
        },
        {
          title: "Log Management",
          content: `
            <p>Structured logging with <strong>Logback</strong>. We'll configure JSON logs that can be easily parsed by ELK Stack (Elasticsearch, Logstash, Kibana) for professional-grade searching.</p>
          `
        }
      ]
    },
    {
      title: "Module 10: Lab & Certification",
      lessons: [
        {
          title: "Final Assessment",
          type: "lab",
          content: `
            <div class="text-center py-20 bg-indigo-600 rounded-3xl shadow-2xl shadow-indigo-200">
              <h2 class="text-4xl font-black text-white mb-6">Congratulations!</h2>
              <p class="text-indigo-100 mb-12 max-w-sm mx-auto">You've mastered the complex world of Spring Boot and Microservices. Now prove it in the final lab.</p>
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