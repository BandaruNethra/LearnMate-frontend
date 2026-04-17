export const fastapiPro = {
  id: "python-fastapi",
  title: "FastAPI Masterclass: Building High-Performance Microservices",
  modules: [
    {
      title: "Module 1: Asynchronous Foundations & Event Loop Mastery",
      lessons: [
        {
          title: "The Python ASGI Ecosystem: Beyond WSGI",
          content: `
            <p>To understand FastAPI, you must understand <strong>ASGI (Asynchronous Server Gateway Interface)</strong>. Unlike traditional WSGI (Django/Flask) which is synchronous and blocking, ASGI allows for concurrent connections using Python's <code>asyncio</code>. We explore the <strong>Uvicorn</strong> and <strong>Gunicorn</strong> relationship—why we use Uvicorn as the worker and Gunicorn as the process manager in production. You will learn how the <strong>Event Loop</strong> handles I/O-bound tasks by "yielding" control, allowing a single CPU thread to manage thousands of open socket connections simultaneously.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-cyan-300">
              # Running a production-grade worker<br/>
              gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app
            </div>
            <div class="border-2 border-dashed border-slate-700 p-8 rounded-xl text-center text-slate-500 my-4">
              [IMAGE: Diagram comparing WSGI Thread-per-Request vs ASGI Event-Loop concurrency]
            </div>
          `
        },
        {
          title: "The Async/Await Contract: Coroutines and Futures",
          content: `
            <p>We dive into the mechanics of <code>async def</code>. You will learn the "Cardinal Sin" of FastAPI: performing a blocking CPU-bound operation (like <code>time.sleep</code> or heavy math) inside an <code>async</code> function, which freezes the entire server. We explore the <strong>Thread Pool Executor</strong>—how FastAPI automatically detects <code>def</code> (sync) routes and runs them in a separate thread pool to prevent blocking the main event loop, and why you should always prefer <code>await</code> for database calls and external APIs.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-green-300">
              import asyncio<br/><br/>
              @app.get("/compute")<br/>
              async def get_data():<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;data = await database.fetch_all("SELECT * FROM users")<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return data
            </div>
          `
        }
      ]
    },
    {
      title: "Module 2: Pydantic V2 & Data Modeling Excellence",
      lessons: [
        {
          title: "The Pydantic Engine: Type Safety as a Feature",
          content: `
            <p>FastAPI uses <strong>Pydantic V2</strong> (rewritten in Rust) for data validation. We move beyond basic types to <strong>Annotated Types</strong> and <strong>Custom Validators</strong>. You will learn how to use <code>Field</code> to enforce regex patterns, minimum values, and metadata for OpenAPI documentation. We'll explore the <strong>Serialization Pipeline</strong>—how Pydantic converts Python objects to JSON and vice-versa with zero-copy performance, and how to use <code>ConfigDict</code> to strictly control extra fields in your request bodies.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-orange-300">
              from pydantic import BaseModel, EmailStr, Field<br/><br/>
              class UserCreate(BaseModel):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;email: EmailStr<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;age: int = Field(gt=18, lt=100)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;model_config = {"extra": "forbid"}
            </div>
            <div class="border-2 border-dashed border-slate-700 p-8 rounded-xl text-center text-slate-500 my-4">
              [IMAGE: Flowchart of a Request entering Pydantic validation -> Parsing -> Error Generation]
            </div>
          `
        },
        {
          title: "Response Models & Data Filtering",
          content: `
            <p>One of the most important security practices in API design is <strong>Response Modeling</strong>. You should never return your database model directly to the client (to avoid leaking hashed passwords or internal IDs). We learn to use <code>response_model</code> to filter outgoing data. We'll also cover <strong>Polymorphic Models</strong> (using <code>Union</code> and <code>Discriminator</code>) to handle APIs that return different data structures based on a specific type field.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Dependency Injection & Clean Architecture",
      lessons: [
        {
          title: "The DI Container: Decoupling Logic from Routes",
          content: `
            <p>FastAPI's <strong>Dependency Injection (DI)</strong> system is its most powerful architectural tool. We move away from global variables and "singleton" patterns. You will learn how to use <code>Depends()</code> to inject database sessions, configuration objects, and authentication logic. We'll explore <strong>Sub-dependencies</strong>—how one dependency can require another, creating a tree of logic that FastAPI resolves automatically before your path operation even runs.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-purple-300">
              async def get_db():<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;db = DatabaseSession()<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;try: yield db<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;finally: await db.close()<br/><br/>
              @app.get("/")<br/>
              def read(db: Session = Depends(get_db)): ...
            </div>
          `
        },
        {
          title: "Lifespan Events & Resource Management",
          content: `
            <p>Managing resources like database connection pools or ML models requires careful setup. We replace the deprecated <code>on_startup</code> events with <strong>Lifespan Context Managers</strong>. You will learn how to use <code>yield</code> within a lifespan function to perform setup logic (like connecting to Redis) and teardown logic (closing connections) when the server stops, ensuring no memory leaks or hanging connections occur in your production environment.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Enterprise Security & OAuth2",
      lessons: [
        {
          title: "JWT Architecture: Bearer Tokens & Hashing",
          content: `
            <p>We build a production-grade <strong>OAuth2 with Password flow</strong>. You will learn the difference between <strong>Authentication</strong> (Who are you?) and <strong>Authorization</strong> (What can you do?). We'll implement <strong>JWT (JSON Web Tokens)</strong> using <code>PyJWT</code> or <code>python-jose</code>, covering the importance of 'Secret Keys', 'Algorithm selection (HS256 vs RS256)', and 'Expiration (exp) claims'. You'll also learn how to securely hash passwords using <strong>Passlib</strong> and <strong>Bcrypt</strong>.</p>
             <div class="border-2 border-dashed border-slate-700 p-8 rounded-xl text-center text-slate-500 my-4">
              [IMAGE: The JWT Life Cycle: Login -> Token Issued -> Client Stores -> Header Injection -> Server Verification]
            </div>
          `
        },
        {
          title: "Scoped Authorization & Middleware",
          content: `
            <p>For complex applications, "logged in" isn't enough. We implement <strong>OAuth2 Scopes</strong>. You will learn how to restrict specific routes to users with 'admin:read' or 'user:write' permissions. We also cover <strong>CORS (Cross-Origin Resource Sharing)</strong>—how to configure your backend to allow requests only from specific trusted front-end domains, preventing CSRF attacks and unauthorized API consumption.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Background Tasks & System Resilience",
      lessons: [
        {
          title: "Fire-and-Forget: BackgroundTasks Class",
          content: `
            <p>Sometimes you need to perform a task (like sending an email or generating a PDF) after returning a 200 OK response. We explore the <code>BackgroundTasks</code> class. You will learn how FastAPI executes these tasks <em>after</em> the response is sent, so the user doesn't wait. We'll discuss the limitations: why internal background tasks are fine for small jobs but why you need a dedicated worker (like Celery) for long-running or mission-critical jobs.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-yellow-300">
              from fastapi import BackgroundTasks<br/><br/>
              def send_email(email: str): ...<br/><br/>
              @app.post("/signup")<br/>
              async def signup(email: str, tasks: BackgroundTasks):<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;tasks.add_task(send_email, email)<br/>
              &nbsp;&nbsp;&nbsp;&nbsp;return {"msg": "Welcome!"}
            </div>
          `
        },
        {
          title: "Advanced Middleware & Performance Profiling",
          content: `
            <p>Middleware allows you to intercept every request and response. We'll build a <strong>Timing Middleware</strong> to log the execution time of every endpoint. You will learn how to use <strong>Prometheus Instrumentation</strong> to export real-time metrics from your FastAPI app, allowing you to build dashboards in Grafana that show your API's request-per-second, error rates, and 99th percentile latency.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Database Persistence & ORM Advanced Patterns",
      lessons: [
        {
          title: "SQLAlchemy 2.0 & The Async Engine",
          content: `
            <p>We master <strong>SQLAlchemy 2.0</strong>, the gold standard for Python ORMs. You will learn the <strong>Declarative Mapping</strong> style and how to use the <code>AsyncSession</code>. We'll cover <strong>Relationship Loading</strong>: the difference between <code>selectinload</code> (efficient for 1-to-many) and <code>joinedload</code> (efficient for many-to-1). You'll learn to write raw SQL for complex queries while maintaining Pydantic compatibility for the results.</p>
          `
        },
        {
          title: "Database Migrations with Alembic",
          content: `
            <p>In production, you never manually update your database schema. We introduce <strong>Alembic</strong>. You will learn how to "Autogenerate" migration scripts by comparing your SQLAlchemy models to the actual database state. We cover <strong>Upgrading and Rolling Back</strong> versions, and how to integrate migrations into a CI/CD pipeline so your database schema stays in sync with your code automatically.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-pink-300">
              # Creating a new migration<br/>
              alembic revision --autogenerate -m "Add user bio column"<br/>
              # Applying the migration<br/>
              alembic upgrade head
            </div>
          `
        }
      ]
    },
    {
      title: "Module 7: Testing & Deployment Strategies",
      lessons: [
        {
          title: "Pytest & The TestClient Architecture",
          content: `
            <p>A mission-critical API must have 100% test coverage. We use <strong>Pytest</strong> and <code>httpx.AsyncClient</code>. You will learn how to use <strong>Dependency Overrides</strong> to swap your production database with a temporary <strong>SQLite (in-memory)</strong> or <strong>Docker-Postgres</strong> database during tests. We'll write integration tests that simulate a full user login flow and perform assertions on the response JSON structure.</p>
          `
        },
        {
          title: "Dockerization & Multi-Stage Builds",
          content: `
            <p>We wrap our FastAPI app in a production-ready <strong>Docker Container</strong>. You will learn <strong>Multi-Stage Builds</strong>—how to use a heavy image for building dependencies and a slim image (like <code>python:3.12-slim</code>) for the final runtime, reducing your image size from 1GB to 150MB. We'll also cover <strong>Docker Compose</strong> for local development, spinning up the API, Postgres, and Redis with a single command.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-blue-300">
              # Optimized Dockerfile snippet<br/>
              FROM python:3.12-slim as base<br/>
              COPY requirements.txt .<br/>
              RUN pip install --no-cache-dir -r requirements.txt<br/>
              COPY . .<br/>
              CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]
            </div>
          `
        }
      ]
    },
    {
      title: "Module 8: Final Lab - Building a Scalable SaaS Backend",
      lessons: [
        {
          title: "Capstone Project",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 rounded-[4rem] shadow-3xl border border-white/10">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <ShieldCheck size={60} className="text-emerald-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">FastAPI Systems Architect</h2>
              <p class="text-emerald-100 mb-16 max-w-2xl mx-auto text-xl font-light leading-relaxed">
                You have mastered the modern Python backend stack. From Async event loops to OAuth2 security 
                and Pydantic V2 validation, you can now architect enterprise-grade APIs that scale.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=python-fastapi" class="group bg-emerald-500 text-white px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white hover:text-emerald-900 transition-all shadow-2xl">
                    START FINAL PROJECT
                  </a>
                  <div className="text-left border-l border-white/20 pl-6">
                    <p className="text-white font-bold uppercase text-xs tracking-widest opacity-60">Architect Level</p>
                    <p className="text-white font-black text-lg">Senior Backend Engineer</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};