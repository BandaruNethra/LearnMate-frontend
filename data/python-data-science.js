export const pythonDataScience = {
  id: "python-ds",
  title: "Python for Data Science: Advanced Architect",
  modules: [
    {
      title: "Module 1: Hardware-Aware Computing & NumPy Internals",
      lessons: [
        {
          title: "The Memory Hierarchy and Data Locality",
          content: `
            <p>To master Data Science, you must understand the hardware. Python is slow because it is a 'pointer-heavy' language, leading to <strong>Cache Misses</strong>. We explore the CPU cache hierarchy (L1, L2, L3) and why <strong>Contiguous Memory Allocation</strong> in NumPy is the secret to performance. You will learn about the <strong>Stride Trick</strong>—how NumPy uses metadata to represent a multi-dimensional array as a flat block of memory, allowing for O(1) reshaping and slicing without actually moving a single bit in the RAM.</p>
          `
        },
        {
          title: "SIMD Vectorization & AVX-512",
          content: `
            <p>Modern CPUs can perform <strong>Single Instruction, Multiple Data (SIMD)</strong> operations. When you run <code>a + b</code> on two NumPy arrays, you aren't running a loop; you are invoking specialized CPU instructions like <strong>AVX-512</strong>. We will analyze the computational graph of a vectorized operation and compare it to a standard Python generator. We'll also discuss the role of <strong>Intel MKL (Math Kernel Library)</strong> and <strong>OpenBLAS</strong> in accelerating these operations behind the scenes.</p>
          `
        },
        {
          title: "UFuncs: Generalized Universal Functions",
          content: `
            <p>We move beyond basic arithmetic to <strong>GUFuncs (Generalized Universal Functions)</strong>. You will learn how to write custom C-speed functions in Python using <code>np.frompyfunc</code> and <code>np.vectorize</code> (and why the latter is actually a trap). We explore <strong>Type Signature Dispatching</strong>—how NumPy decides which specialized C code to run based on whether your data is <code>int64</code>, <code>float32</code>, or <code>complex128</code>.</p>
          `
        },
        {
          title: "Advanced Slicing: The Ellipsis and NewAxis",
          content: `
            <p>Professional data manipulation requires mastering the <strong>Ellipsis (...)</strong> and <strong>np.newaxis</strong>. We will practice manipulating 4D tensors (common in Deep Learning). You will learn how to use <code>np.expand_dims</code> to align dimensions for broadcasting and how to use <strong>Fancy Indexing</strong> combined with <strong>Boolean Masks</strong> to perform complex surgery on datasets with millions of entries without creating memory-intensive copies.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: The Pandas Block Manager & Memory Optimization",
      lessons: [
        {
          title: "Inside the Block Manager",
          content: `
            <p>Pandas is often criticized for its memory usage. We dive into the <strong>Block Manager</strong>—the internal engine that groups columns by their <code>dtype</code>. You will learn why adding a single string to a numeric DataFrame can trigger a <strong>Consolidation Event</strong>, doubling your memory usage. We will study the <code>Object</code> dtype and why it is the "Memory Killer" of Data Science, teaching you how to force Pandas into using lean, primitive-backed structures.</p>
          `
        },
        {
          title: "Categorical Encoding & Sparse Data",
          content: `
            <p>When dealing with repetitive strings (like 'Country' or 'Gender'), standard strings are a waste of space. We master <strong>pd.Categorical</strong>. You will learn how it maps strings to integers internally, reducing memory footprints by up to 90%. We also explore <strong>SparseDataFrames</strong> for datasets that are 99% zeros, allowing you to process matrices that would otherwise crash a standard workstation.</p>
          `
        },
        {
          title: "The MultiIndex: Data Cubes in 2D",
          content: `
            <p>The <strong>Hierarchical Index (MultiIndex)</strong> is the most underutilized tool in Pandas. It allows for <strong>Pivot/Unpivot</strong> operations that mimic an OLAP Cube. We will master <code>stack()</code> and <code>unstack()</code>, learning how to move levels of an index to columns and back. This is essential for handling time-series data where you have multiple readings (e.g., Temperature, Humidity) for multiple sensors over time.</p>
          `
        },
        {
          title: "Method Chaining & The Pipe Pattern",
          content: `
            <p>Writing 'Clean' Pandas code means avoiding intermediate variables. We adopt <strong>Method Chaining</strong> using the <code>.pipe()</code> and <code>.assign()</code> methods. This creates a readable 'Data Pipeline' where the flow of transformation is clear. We will learn how to write custom pipeline functions that take a DataFrame and return a transformed version, enabling a functional programming style in data engineering.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: High-Performance I/O & Big Data Formats",
      lessons: [
        {
          title: "Parquet vs. Feather vs. SQL",
          content: `
            <p>CSV is for humans; <strong>Parquet</strong> is for machines. We dive into <strong>Columnar Storage</strong>. You will learn why Parquet's <strong>Predicate Pushdown</strong> allows you to skip reading 90% of a file by only loading the columns you need. We'll compare this with <strong>Feather</strong> (designed for ultra-fast disk-to-RAM transfer) and <strong>HDF5</strong> (for hierarchical scientific data). We'll also look at the <strong>Apache Arrow</strong> memory format—the future of cross-language data exchange.</p>
          `
        },
        {
          title: "Out-of-Core Processing with Dask",
          content: `
            <p>What if your data is 100GB but your RAM is 16GB? We introduce <strong>Out-of-Core Computing</strong>. We explore the <code>chunksize</code> parameter in Pandas and then scale up to <strong>Dask</strong>. You will learn how Dask creates a <strong>Task Graph</strong>, breaking a massive operation into small chunks that fit in memory, executing them in parallel across all your CPU cores.</p>
          `
        },
        {
          title: "Fast Parsing with ujson and orjson",
          content: `
            <p>Standard <code>json</code> is a bottleneck. We look at <strong>orjson</strong>, the fastest JSON library for Python, which handles Datetimes and NumPy arrays natively. We will learn how to use <strong>MessagePack</strong> for binary serialization of data, reducing the size of API payloads and increasing the speed of microservice communication in a data-heavy architecture.</p>
          `
        },
        {
          title: "Database Connectivity & SQLAlchemy 2.0",
          content: `
            <p>We move beyond simple SQL queries to <strong>SQLAlchemy 2.0</strong> and its integration with Pandas. You will learn about <strong>Connection Pooling</strong> and how to use <code>pd.read_sql</code> with execution parameters to stream millions of rows without overwhelming the application memory. We'll also cover <strong>UPSERT</strong> logic—how to update existing records in a database while inserting new ones using Pandas and SQL logic combined.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Advanced Statistical Inference",
      lessons: [
        {
          title: "Bayesian vs. Frequentist Probability",
          content: `
            <p>We tackle the philosophical divide in Statistics. You will learn the <strong>Frequentist</strong> approach (p-values, confidence intervals) and then the <strong>Bayesian</strong> approach (Prior, Likelihood, Posterior). We use <code>scipy.stats</code> to model <strong>Bayes' Theorem</strong>, showing how our 'Belief' about data should update as we collect more evidence. This is the foundation of modern Machine Learning and A/B testing.</p>
          `
        },
        {
          title: "Monte Carlo Simulations",
          content: `
            <p>Sometimes math is too hard, so we simulate. <strong>Monte Carlo</strong> methods involve running thousands of random experiments to find a probability distribution. We will build a <strong>Financial Risk Model</strong> (Value at Risk) using NumPy's random generators. You will learn how to use the <strong>Law of Large Numbers</strong> to guarantee that your simulation results converge on the true mathematical answer.</p>
          `
        },
        {
          title: "Non-Parametric Tests: Bootstrapping",
          content: `
            <p>What if your data isn't 'Normal'? We use <strong>Bootstrapping</strong>—resampling our own data with replacement to estimate the distribution of a statistic. We'll also cover the <strong>Mann-Whitney U test</strong> and <strong>Kruskal-Wallis</strong>, teaching you how to perform rigorous scientific comparisons when the assumptions of a standard T-test are violated.</p>
          `
        },
        {
          title: "Statistical Power & Effect Size",
          content: `
            <p>A p-value tells you if a result is 'real,' but <strong>Effect Size (Cohen's d)</strong> tells you if it 'matters.' We will learn to perform <strong>Power Analysis</strong> to determine exactly how much data you need to collect before starting an experiment to ensure your results are statistically valid, preventing the common mistake of 'p-hacking'.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Time-Series Architecture & Signal Processing",
      lessons: [
        {
          title: "Stationarity and Autocorrelation",
          content: `
            <p>Time-series data is special because the order matters. We learn about <strong>Stationarity</strong> (constant mean and variance) and why it's a requirement for most models. We use the <strong>Augmented Dickey-Fuller (ADF)</strong> test to check for unit roots. We'll also master <strong>ACF (Autocorrelation Function)</strong> and <strong>PACF</strong> plots to find hidden patterns in seasonal data, like stock prices or electricity demand.</p>
          `
        },
        {
          title: "Decomposition: Trend, Seasonality, and Noise",
          content: `
            <p>Every time-series is a combination of <strong>Trend</strong> (long-term move), <strong>Seasonality</strong> (repeating patterns), and <strong>Residuals</strong> (random noise). We will use the <code>statsmodels</code> library to perform <strong>STL Decomposition</strong>. You will learn how to 'De-seasonalize' a dataset to see the underlying growth of a business without being distracted by holiday spikes.</p>
          `
        },
        {
          title: "Exponential Smoothing (Holt-Winters)",
          content: `
            <p>We move beyond moving averages to <strong>Exponential Smoothing</strong>. Unlike standard averages, Holt-Winters gives more weight to recent data points and can model both trend and seasonality. We will implement a <strong>Triple Exponential Smoothing</strong> model to predict future demand, learning how to tune the alpha, beta, and gamma hyper-parameters for maximum accuracy.</p>
          `
        },
        {
          title: "Fourier Transforms: Frequency Domain",
          content: `
            <p>Sometimes the best way to see a pattern is to look at <strong>Frequency</strong> rather than <strong>Time</strong>. We introduce the <strong>Fast Fourier Transform (FFT)</strong>. You will learn how to take a noisy signal and decompose it into its constituent sine waves. This is used in everything from cleaning sensor data to analyzing audio signals and identifying periodic mechanical failures in industrial IoT.</p>
          `
        }
      ]
    },
    {
       title: "Module 6: Dimensionality Reduction & Manifold Learning",
       lessons: [
         {
           title: "The Math of PCA (Eigenvectors)",
           content: `
             <p>Principal Component Analysis is often used but rarely understood. We break down the <strong>Covariance Matrix</strong> and the calculation of <strong>Eigenvectors and Eigenvalues</strong>. You will learn how PCA 'rotates' the coordinate system of your data to align with the axes of maximum variance. We will build a PCA model from scratch using only NumPy's <code>linalg.eig</code> to truly understand the projection of high-dimensional space into 2D.</p>
           `
         },
         {
           title: "t-SNE vs. UMAP: Visualizing Clusters",
           content: `
             <p>PCA is linear, but data is often non-linear. We introduce <strong>t-Distributed Stochastic Neighbor Embedding (t-SNE)</strong> and <strong>UMAP</strong>. You will learn how these algorithms preserve the 'local neighborhood' of data points. We'll discuss why UMAP is usually preferred for large datasets due to its speed and better preservation of global structure compared to t-SNE.</p>
           `
         },
         {
           title: "SVD: Latent Semantic Analysis",
           content: `
             <p><strong>Singular Value Decomposition (SVD)</strong> is the "Swiss Army Knife" of Data Science. We apply it to text data to perform <strong>Latent Semantic Analysis (LSA)</strong>. You will learn how SVD can group words with similar meanings together even if they are different strings, forming the basis of early recommendation engines and search algorithms.</p>
           `
         },
         {
           title: "Feature Selection: Mutual Information",
           content: `
             <p>Having too many features is a curse. We move beyond correlation to <strong>Mutual Information (MI)</strong>. MI measures how much information one variable tells us about another, capturing non-linear relationships that Correlation misses. We will use <code>SelectKBest</code> with MI to prune our datasets, keeping only the most 'Informative' features for our Machine Learning models.</p>
           `
         }
       ]
    },
    {
      title: "Module 7: Data Visualization Engineering",
      lessons: [
        {
          title: "The Matplotlib Artist Layer",
          content: `
            <p>To create truly custom visualizations, you must go deeper than <code>plt.plot()</code>. We explore the <strong>Artist Layer</strong>. Everything on a plot (lines, text, rectangles) is an Artist. You will learn how to create a <strong>Collection</strong> of artists to draw thousands of data points efficiently. We also cover <strong>Blitting</strong>—a technique to only redraw the parts of a plot that have changed, enabling high-performance real-time animations.</p>
          `
        },
        {
          title: "Color Theory & Perceptual Uniformity",
          content: `
            <p>Choosing colors isn't just about 'looking good'. We dive into <strong>Perceptually Uniform Colormaps</strong> like <code>viridis</code> and <code>magma</code>. You will learn why the 'Rainbow' colormap is dangerous and can create false patterns in the human eye. We will study the <strong>Colorblindness</strong> impact on data design and how to use luminance to ensure your charts are readable in grayscale.</p>
          `
        },
        {
          title: "Plotly Dash: Building Data Apps",
          content: `
            <p>Static charts are for reports; <strong>Dashboards</strong> are for decisions. We introduce <strong>Plotly Dash</strong>. You will learn the <strong>Callback Architecture</strong>—how to trigger a Python function when a user moves a slider on a web page. We'll build a live-updating dashboard that connects to a simulated data stream, teaching you how to deploy it as a standalone web application.</p>
          `
        },
        {
          title: "Geospatial Viz with Folium and Geopandas",
          content: `
            <p>Data often has a location. We combine <strong>Geopandas</strong> (Pandas with geometry support) and <strong>Folium</strong> (Leaflet.js for Python). You will learn about <strong>Coordinate Reference Systems (CRS)</strong> and why confusing WGS84 with UTM can put your data points in the wrong ocean. We will build a <strong>Choropleth Map</strong> that visualizes regional data patterns across a global map.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: Advanced Exploratory Data Analysis (EDA)",
      lessons: [
        {
          title: "Multivariate Analysis: Interaction Effects",
          content: `
            <p>Standard EDA looks at one or two columns. Advanced EDA looks for <strong>Interactions</strong>. Does the effect of variable A depend on variable B? We use <strong>Factor Plots</strong> and <strong>PairGrids</strong> to see high-dimensional interactions. You will learn how to use <strong>Partial Dependence Plots</strong> to isolate the influence of a single feature in a complex system.</p>
          `
        },
        {
          title: "Missingness Mechanism: MCAR, MAR, MNAR",
          content: `
            <p>Not all missing data is equal. Is it <strong>Missing Completely at Random (MCAR)</strong> or is there a pattern? We use <strong>Missingno</strong> to visualize the 'Skeleton' of our data. You will learn why deleting rows with missing data (Listwise Deletion) is often scientifically biased and how to diagnose the mechanism of missingness before attempting imputation.</p>
          `
        },
        {
          title: "Data Leakage: The Silent Killer",
          content: `
            <p>Data Leakage happens when information from the 'Future' or the 'Target' leaks into your training data. We'll learn to spot <strong>Target Leakage</strong> and <strong>Train-Test Contamination</strong>. We'll implement a strict 'Temporal Split' for time-series data to ensure our models are actually predictive and not just memorizing the past.</p>
          `
        },
        {
          title: "Profiling and Automated EDA",
          content: `
            <p>For massive datasets, manual EDA is too slow. We look at <strong>YData-Profiling</strong> and <strong>SweetViz</strong>. These tools generate 30-page HTML reports on a dataset in seconds. You will learn how to read these automated reports to identify duplicate rows, high-cardinality features, and skewness instantly, allowing you to focus your time on the actual Feature Engineering.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Final Lab & Master Certification",
      lessons: [
        {
          title: "The Great Data Challenge",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 rounded-[4rem] shadow-3xl">
              <div class="mb-10 inline-block p-6 bg-white/10 backdrop-blur-xl rounded-full border border-white/20">
                <Trophy size={60} className="text-yellow-400" />
              </div>
              <h2 class="text-6xl font-black text-white mb-6 tracking-tighter">Chief Data Architect</h2>
              <p class="text-blue-100 mb-16 max-w-2xl mx-auto text-xl font-medium leading-relaxed opacity-90">
                You have scaled the summit of Python Data Science. From SIMD vectorization to Bayesian inference 
                and high-performance I/O, you now possess the technical arsenal of a senior data lead.
              </p>
              <div class="flex flex-col md:flex-row gap-6 justify-center items-center">
                  <a href="/lab?courseId=python-ds" class="group bg-yellow-400 text-indigo-900 px-12 py-6 rounded-3xl font-black tracking-widest uppercase text-lg hover:bg-white hover:scale-110 transition-all shadow-[0_20px_50px_rgba(234,179,8,0.3)]">
                    ENTER FINAL LAB
                  </a>
                  <div className="text-left border-l border-white/20 pl-6">
                    <p className="text-white font-bold uppercase text-xs tracking-widest opacity-60">Certification Level</p>
                    <p className="text-white font-black text-lg">Level 09 Mastery</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};