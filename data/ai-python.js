export const aiPython = {
  id: "ai-python",
  title: "AI & Deep Learning Architect: Platinum Edition",
  modules: [
    {
      title: "Module 1: Tensor Physics & High-Performance Compute",
      lessons: [
        {
          title: "Memory Strides & The Geometry of Tensors",
          content: `
            <p>At the architectural level, a Tensor is not a nested list; it is a <strong>view over a 1D memory storage</strong>. We explore the <code>stride</code> property: the number of steps in memory to move one index in a specific dimension. Understanding this allows for $O(1)$ operations like <code>transpose</code> and <code>permute</code>, which simply change metadata without copying data. This is crucial for GPU kernels that rely on coalesced memory access to maximize throughput during massive matrix multiplications.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-blue-300">
              # Efficiently viewing tensor memory layout<br/>
              import torch<br/>
              x = torch.randn(3, 4, 5)<br/>
              print(x.stride()) # Output showing memory jumps per dimension
            </div>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Diagram of a 3D Tensor mapped to a 1D Linear Memory block showing Stride Jumps]
            </div>
          `
        },
        {
          title: "Einstein Summation (Einsum) Mastery",
          content: `
            <p>Traditional tensor operations like <code>matmul</code>, <code>outer</code>, and <code>transpose</code> are often inefficient when combined. <strong>Einstein Summation (einsum)</strong> provides a declarative domain-specific language to perform these in a single optimized pass. By defining the input and output subscripts, you allow the underlying engine (like ATen in PyTorch) to minimize intermediate memory allocations and leverage specialized hardware instructions for multi-dimensional contractions.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-green-300">
              # Batch Matrix Multiplication: (B, I, J) x (B, J, K) -> (B, I, K)<br/>
              batch_mul = torch.einsum('bij,bjk->bik', A, B)
            </div>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Visual guide of Einstein Summation notation mapping indices to output dimensions]
            </div>
          `
        },
        {
          title: "Broadcasting & Dimension Alignment Physics",
          content: `
            <p>Broadcasting is the magic that allows operations between tensors of different shapes without replicating data. The rules are strict: dimensions must be equal or one must be 1, starting from the trailing dimension. We study <strong>Implicit vs. Explicit Expansion</strong>. You will learn how to use <code>None</code> indexing (or <code>unsqueeze</code>) to align a vector to a 4D tensor, enabling element-wise scaling across channels in a CNN without consuming extra VRAM.</p>
             <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-orange-300">
              # Adding a bias vector to a batch of images<br/>
              images = torch.randn(32, 3, 224, 224) # [N, C, H, W]<br/>
              bias = torch.randn(3) # [C]<br/>
              result = images + bias[None, :, None, None] # Aligning for broadcast
            </div>
          `
        },
        {
          title: "GPU Hardware: CUDA Kernels & Stream Sync",
          content: `
            <p>To scale AI, you must orchestrate hardware. We explore the <strong>Host-to-Device Bottleneck</strong>. Every time you call <code>.cuda()</code>, you trigger a PCIe transfer that can stall the CPU. We learn to use <strong>Non-Blocking Transfers</strong> and <strong>Pinned Memory</strong> to allow the CPU to prepare the next batch while the GPU is still crunching the current one. This 'pipeline parallelism' is the difference between training for a day or training for a week.</p>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Timeline chart showing CPU/GPU asynchronous execution and overlapping data transfers]
            </div>
          `
        }
      ]
    },
    {
      title: "Module 2: Gradient Flow & The Calculus of Learning",
      lessons: [
        {
          title: "The Vectorized Chain Rule & Jacobian Matrices",
          content: `
            <p>Backpropagation is essentially the application of the Chain Rule across a graph. In high-dimensional space, this involves the <strong>Jacobian Matrix</strong>, which represents all partial derivatives of a vector-valued function. We analyze how the gradient of the loss with respect to the input is calculated by multiplying the Jacobian of the layer by the incoming gradient vector. Mastering this math is vital for debugging "Dead Neurons" where the gradient signal drops to zero.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-pink-300">
              # Capturing gradients in the backward pass<br/>
              x = torch.randn(10, requires_grad=True)<br/>
              y = x.pow(2).sum()<br/>
              y.backward()<br/>
              print(x.grad) # The result of the Chain Rule
            </div>
          `
        },
        {
          title: "Autograd: Dynamic Computational Graphs",
          content: `
            <p>PyTorch uses a <strong>Define-by-Run</strong> approach. Every time an operation is performed, a node is added to a dynamic graph in real-time. We explore the <code>grad_fn</code> attribute, which points to the backward function for that specific operation. You will learn why this allows for complex logic like <strong>loops and conditionals</strong> inside your neural network, something that static graph frameworks (like early TensorFlow) struggled to implement efficiently.</p>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Graph diagram showing Forward nodes and their corresponding Backward gradient functions]
            </div>
          `
        },
        {
          title: "The Vanishing Gradient & Normalization Logic",
          content: `
            <p>As gradients travel backward through many layers, they are repeatedly multiplied. If the values are small (like in a Sigmoid tail), they disappear. We study the <strong>Vanishing Gradient Problem</strong> and its solution: <strong>Batch Normalization</strong>. By normalizing activations to have a mean of 0 and variance of 1, we ensure that signals remain in the "active" region of activation functions, allowing for the training of extremely deep architectures without signal degradation.</p>
            <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-yellow-300">
              # Implementing a Batch Norm layer for stability<br/>
              bn = torch.nn.BatchNorm2d(num_features=64)<br/>
              output = bn(input_tensor)
            </div>
          `
        },
        {
          title: "Hessians & Second-Order Optimization",
          content: `
            <p>While standard Gradient Descent uses the first derivative (Slope), advanced AI research looks at the <strong>Hessian (Second Derivative)</strong>. The Hessian tells us about the <strong>Curvature</strong> of the loss landscape. We explore why we don't use it in standard training (it's $O(N^2)$ in space) and how quasi-Newton methods like <strong>L-BFGS</strong> try to approximate it to find the global minimum in fewer steps than standard SGD.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Optimization Architectures & Schedulers",
      lessons: [
        {
          title: "Adam vs. AdamW: The Weight Decay Correction",
          content: `
            <p>Most developers use the Adam optimizer without realizing it had a fundamental flaw in its <strong>Weight Decay</strong> implementation. In the original Adam, L2 regularization was applied to the gradient instead of the weights, causing poor generalization. We dive into <strong>AdamW</strong>, which decouples weight decay from the gradient update. This small mathematical fix is the reason why almost every modern Large Language Model (LLM) is trained using AdamW today.</p>
             <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-cyan-300">
              # Proper weight decay with AdamW<br/>
              optimizer = torch.optim.AdamW(model.parameters(), lr=1e-3, weight_decay=1e-2)
            </div>
          `
        },
        {
          title: "The 1-Cycle Policy & Super-Convergence",
          content: `
            <p>The 1-Cycle Policy is an advanced learning rate schedule that enables <strong>Super-Convergence</strong>. It involves increasing the learning rate to a peak and then decreasing it to a very low value. This act of "pushing" the learning rate high helps the model avoid sharp, poor-generalizing minima, while the final decay allows the model to settle into a broad, stable minimum that performs better on unseen data.</p>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Plot of Learning Rate vs. Momentum in a 1-Cycle Schedule]
            </div>
          `
        },
        {
          title: "Gradient Clipping & Nan-Safety",
          content: `
            <p>In Recurrent Networks or Deep Transformers, gradients can "explode," reaching values so high they become <code>NaN</code> (Not a Number), destroying the model weights. We implement <strong>Gradient Norm Clipping</strong>. By scaling the entire gradient vector so its norm does not exceed a threshold, we ensure that the model never takes a step that is "too large," keeping the training process stable even in highly volatile loss landscapes.</p>
          `
        }
      ]
    },
    {
      title: "Module 4: Evolutionary Architectures: From CNNs to ViTs",
      lessons: [
        {
          title: "The Evolution of Residual Learning (ResNet)",
          content: `
            <p>Before ResNet, adding more layers increased the training error—a paradox. <strong>Residual Blocks</strong> solved this by adding "Skip Connections." These allow the gradient to flow through the "identity" path without being multiplied by layer weights. This breakthrough proved that it is easier for a network to learn a "Residual" (the difference between input and output) than to learn the full mapping from scratch. This is the cornerstone of all deep vision models.</p>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: Architectual diagram of a Residual Block with a shortcut connection]
            </div>
          `
        },
        {
          title: "Global Average Pooling & Feature Localization",
          content: `
            <p>Traditional CNNs used massive "Flatten" layers at the end, leading to millions of parameters and overfitting. Modern architectures use <strong>Global Average Pooling (GAP)</strong>. By taking the average of each feature map, we reduce the spatial dimensions to 1x1. This not only prevents overfitting but also creates a direct link between the feature maps and the output classes, allowing for techniques like <strong>CAM (Class Activation Mapping)</strong> to see exactly which pixels the AI is "looking at."</p>
          `
        },
        {
          title: "Vision Transformers (ViT): Images as Words",
          content: `
            <p>The newest frontier in Vision is the <strong>Vision Transformer (ViT)</strong>. Instead of convolutions, we break an image into $16 \times 16$ <strong>Patches</strong> and treat them as "Tokens" in a sentence. We apply <strong>Self-Attention</strong> to these patches, allowing every part of the image to communicate with every other part regardless of distance. This overcomes the "local bias" of CNNs and allows for models that scale much better with massive amounts of data.</p>
             <div class="bg-slate-900 p-4 rounded-xl my-4 font-mono text-sm text-purple-300">
              # Patchifying an image for a Vision Transformer<br/>
              patches = image.unfold(2, 16, 16).unfold(3, 16, 16)<br/>
              # Transforms [C, H, W] to a sequence of [Patch_Dim, Num_Patches]
            </div>
          `
        }
      ]
    },
    {
      title: "Module 5: Generative AI & The Transformer Core",
      lessons: [
        {
          title: "Self-Attention: The Q, K, V Mechanism",
          content: `
            <p>Self-Attention is the engine of GPT. It uses three vectors: <strong>Query (Q)</strong>, <strong>Key (K)</strong>, and <strong>Value (V)</strong>. The Query "asks" a question, the Key "matches" against it, and the Value "provides" the information. The result is a weighted sum where the weights are determined by the compatibility of Q and K. This allows the model to dynamically decide which words in a sentence are relevant to the current word, enabling the capture of long-range dependencies that were impossible with previous technologies.</p>
            <div class="border-2 border-dashed border-slate-300 p-8 rounded-xl text-center text-slate-400 my-4">
              [IMAGE: The Scaled Dot-Product Attention Flowchart]
            </div>
          `
        },
        {
          title: "Causal Masking & Auto-Regressive Decoding",
          content: `
            <p>How does GPT generate text without "cheating"? During training, we use a <strong>Causal Mask</strong>—a triangular matrix of negative infinity. This ensures that when the model is predicting the $5^{th}$ word, it cannot "see" the $6^{th}$ or $7^{th}$ word in the training data. This forces the model to learn the actual probability distribution of the next word given only the past context, which is the definition of <strong>Generative Pre-training</strong>.</p>
          `
        },
        {
          title: "Rotary Positional Embeddings (RoPE)",
          content: `
            <p>Transformers have no inherent sense of word order. Traditional models used absolute sine/cosine positions. Modern LLMs (like Llama) use <strong>Rotary Positional Embeddings (RoPE)</strong>. Instead of adding a vector, we "rotate" the Query and Key vectors in 2D space based on their position. This allows the attention mechanism to naturally understand the "relative" distance between words, which is much more effective for processing long documents.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: Capstone Lab - The GPT Architect",
      lessons: [
        {
          title: "Final Lab Phase",
          type: "lab",
          content: `
            <div class="text-center py-32 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 rounded-[4rem] shadow-3xl border border-white/10">
              <h2 class="text-6xl font-black text-white mb-6">Neural Systems Architect</h2>
              <p class="text-slate-300 mb-12 max-w-2xl mx-auto text-xl font-light">
                You have reached the pinnacle of AI-Python. You have mastered Tensor memory layouts, Backpropagation mechanics, 
                Optimization theory, and the Transformer revolution. You are now prepared to build the next generation of AI.
              </p>
              <a href="/lab?courseId=ai-python" class="inline-block bg-white text-indigo-950 px-16 py-6 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl shadow-indigo-500/50">
                LAUNCH CAPSTONE LAB
              </a>
            </div>
          `
        }
      ]
    }
  ]
};