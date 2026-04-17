export const embeddedTitan = {
  id: "embedded-c",
  title: "Embedded Systems: The Bare-Metal Titan Masterclass",
  description: "A 10-Module deep dive into Silicon Orchestration, RTOS Internals, and Hardware-Software Co-Design.",
  modules: [
    {
      title: "Module 1: Silicon Foundations & The Boot Process",
      lessons: [
        {
          title: "The Reset Sequence: From Power-On to main()",
          content: `
            <p>What happens in the first microsecond of power? We analyze the <strong>Hardware Reset Vector</strong>. You will learn how the CPU fetches the initial <strong>Stack Pointer (MSP)</strong> and the <strong>Reset Handler</strong> address from the first two entries of the vector table. We'll deconstruct the <code>startup.s</code> assembly file to understand the <strong>Copy Loop</strong> (moving initialized data from Flash to RAM) and the <strong>Zero Loop</strong> (initializing the BSS segment). You will learn why calling <code>main()</code> is actually the final step of a complex architectural setup.</p>
            <div class="bg-black p-6 rounded-2xl my-6 font-mono text-xs text-blue-400 border border-slate-800">
              /* The Vector Table in C */<br/>
              __attribute__ ((section(".isr_vector")))<br/>
              const uint32_t vector_table[] = {<br/>
              &nbsp;&nbsp;(uint32_t)&_estack,&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 0: Initial Stack Pointer<br/>
              &nbsp;&nbsp;(uint32_t)Reset_Handler,&nbsp;&nbsp;// 1: Reset Vector<br/>
              &nbsp;&nbsp;(uint32_t)NMI_Handler,&nbsp;&nbsp;&nbsp;&nbsp;// 2: Non-Maskable Interrupt<br/>
              };
            </div>
          `
        },
        {
          title: "Linker Scripts: Memory Geometry Definition",
          content: `
            <p>The Linker Script (<code>.ld</code>) is the blueprint of your chip. We dive into <strong>Memory Region Aliasing</strong>. You will learn how to define the boundaries of <strong>FLASH</strong>, <strong>SRAM</strong>, and <strong>CCM (Core Coupled Memory)</strong>. We explore the <code>SECTIONS</code> command to place code in specific physical locations, such as putting performance-critical ISRs in RAM instead of Flash to eliminate wait-states. You'll master the <strong>Location Counter (.)</strong> and how to calculate the <strong>Load Address (LMA)</strong> vs. the <strong>Virtual Address (VMA)</strong>.</p>
          `
        },
        {
          title: "Clock Trees & Phase-Locked Loops (PLL)",
          content: `
            <p>Silicon is a rhythmic engine. We analyze the <strong>Clock Tree</strong> architecture. You will learn how to configure the <strong>HSE (High-Speed External)</strong> crystal and use <strong>PLLs</strong> to multiply a 12MHz crystal up to 200MHz+. We cover <strong>Bus Prescalers</strong> (AHB, APB1, APB2) and why high-speed peripherals must be synchronized with slower bus clocks to prevent data corruption. You'll calculate the 'Wait States' required for Flash access when the CPU frequency exceeds the Flash's maximum read speed.</p>
          `
        }
      ]
    },
    {
      title: "Module 2: Advanced C for Hardware Control",
      lessons: [
        {
          title: "The 'Volatile' Contract & Optimization Barriers",
          content: `
            <p>We move beyond basic <code>volatile</code>. You will learn about <strong>Memory Barriers (__DMB, __DSB, __ISB)</strong>. In modern pipelined CPUs, the hardware may reorder instructions; we explore how to force the CPU to finish all memory writes before starting the next operation. This is critical for <strong>DMA setup</strong> and <strong>Multicore synchronization</strong>. We'll also cover <strong>Optimization Levels (-O2, -O3, -Os)</strong> and how they can 'break' hardware loops if the compiler doesn't realize a memory address is mapped to a peripheral.</p>
          `
        },
        {
          title: "Struct Packing & Pointer Aliasing Hazards",
          content: `
            <p>CPU alignment is the difference between a fast system and a crashing one. We master <strong>Strict Aliasing Rules</strong> and <strong>Type-Punned Pointers</strong>. You will learn how to use <code>__attribute__((packed, aligned(4)))</code> to ensure your C structures exactly match the hardware register map. We'll discuss the <strong>LDR/STR alignment requirements</strong> of the ARM Cortex-M architecture and why unaligned 32-bit access can trigger a <strong>UsageFault</strong> exception.</p>
          `
        },
        {
          title: "Inline Assembly: The Escapist's Tool",
          content: `
            <p>Sometimes C is too slow or too high-level. We master <strong>Inline Assembly (asm)</strong>. You will learn the syntax for <strong>Input, Output, and Clobber lists</strong>. We'll write assembly snippets for atomic bit-set/clear and for accessing special CPU registers like the <strong>CONTROL</strong> register or the <strong>Base Priority Mask (BASEPRI)</strong>, which are inaccessible through standard C syntax.</p>
          `
        }
      ]
    },
    {
      title: "Module 3: Interrupts, Exceptions, and Fault Handling",
      lessons: [
        {
          title: "NVIC Architecture & Priority Grouping",
          content: `
            <p>The <strong>Nested Vectored Interrupt Controller (NVIC)</strong> is the brain of system responsiveness. We analyze <strong>Preemption vs. Subpriority</strong>. You will learn how to configure the NVIC so that a high-priority "Motor Control" interrupt can preempt a lower-priority "UART" interrupt. We'll cover the <strong>Tail-Chaining</strong> optimization, where the hardware skips the 'Pop/Push' cycle if another interrupt is pending, reducing latency from 12 cycles to just 6.</p>
          `
        },
        {
          title: "Exception Entry/Exit: The Hardware Stack Frame",
          content: `
            <p>What actually happens inside the silicon when an interrupt fires? We deconstruct the <strong>Hardware Stacking</strong> process. You will learn the 8 registers (R0-R3, R12, LR, PC, xPSR) that are automatically pushed onto the stack. We'll analyze the <strong>EXC_RETURN</strong> value—a "magic" value loaded into the Link Register that tells the CPU how to return to Thread mode and which stack pointer to use.</p>
          `
        },
        {
          title: "HardFault Debugging: Forensics on the Stack",
          content: `
            <p>When the CPU "crashes," it triggers a <strong>HardFault</strong>. We learn to become a <strong>Forensic Engineer</strong>. You will learn how to write a custom HardFault_Handler in assembly that extracts the PC (Program Counter) and the instruction that caused the crash. We'll explore the <strong>Configurable Fault Status Registers (CFSR)</strong> to diagnose "Divide by Zero," "Unaligned Access," or "Bus Error" (accessing invalid memory addresses).</p>
          `
        }
      ]
    },
    {
      title: "Module 4: High-Performance Peripherals (DMA & ADC)",
      lessons: [
        {
          title: "DMA Orchestration: Zero-CPU Data Movement",
          content: `
            <p>The <strong>Direct Memory Access (DMA)</strong> controller is a co-processor. We master <strong>Peripheral-to-Memory</strong> and <strong>Memory-to-Memory</strong> transfers. You will learn about <strong>Burst Transfers</strong>, <strong>FIFO thresholds</strong>, and <strong>Circular Buffer Mode</strong>. We'll implement a driver that captures 100,000 ADC samples per second and stores them in RAM without the CPU executing a single line of code during the transfer.</p>
          `
        },
        {
          title: "ADC Physics: Sampling, Aliasing, and Impedance",
          content: `
            <p>Analog meets Digital. We analyze <strong>Successive Approximation Register (SAR)</strong> ADCs. You will learn about <strong>Sampling Time</strong> vs. <strong>Conversion Time</strong>. We'll discuss the <strong>Nyquist-Shannon Theorem</strong>—why you must sample at 2x the highest frequency of your signal—and how to calculate the <strong>Input Impedance</strong> requirements to ensure the signal isn't "loaded down" by the ADC's internal sampling capacitor.</p>
          `
        },
        {
          title: "DAC & PWM: Generating Analog Signals",
          content: `
            <p>We turn bits into voltage. We explore <strong>Pulse Width Modulation (PWM)</strong> for motor control and LED dimming. You will learn to calculate <strong>Carrier Frequency</strong> and <strong>Duty Cycle Resolution</strong>. We'll also cover the <strong>Digital-to-Analog Converter (DAC)</strong> and how to use DMA to feed a Sine-Wave lookup table into the DAC to generate precise AC waveforms at kilohertz frequencies.</p>
          `
        }
      ]
    },
    {
      title: "Module 5: Communication Buses (SPI, I2C, CAN)",
      lessons: [
        {
          title: "I2C: The Open-Drain Multi-Master Bus",
          content: `
            <p>I2C is electrically unique due to <strong>Open-Drain lines and Pull-up resistors</strong>. We analyze <strong>Clock Stretching</strong> and <strong>Arbitration</strong>. You will learn why I2C is limited by bus capacitance and how to debug the common "Bus Busy" hang-up. We'll implement a state-machine-based I2C driver that handles multi-byte reads from sensors like accelerometers or temperature probes.</p>
          `
        },
        {
          title: "SPI: Multi-Slave Architectures & Daisy Chaining",
          content: `
            <p>SPI is built for speed. We master <strong>Chip Select (CS)</strong> management. You will learn the difference between <strong>Standard SPI</strong>, <strong>Dual SPI</strong>, and <strong>Quad SPI (QSPI)</strong> for interfacing with high-speed external memory. We'll implement a "Daisy Chain" configuration where multiple chips are controlled via a single SPI bus, minimizing the number of GPIO pins required for large-scale sensor arrays.</p>
          `
        },
        {
          title: "CAN Bus: Differential Signaling & Fault Tolerance",
          content: `
            <p>The <strong>Controller Area Network (CAN)</strong> is the backbone of automotive and industrial systems. We analyze <strong>Differential Pairs</strong> (CAN High/Low) and <strong>Bit Stuffing</strong>. You will learn how the CAN hardware handles <strong>Identifier-based Filtering</strong> and <strong>Automatic Retransmission</strong> on collision. We'll build a node that communicates on a shared bus, handling priority-based messaging where the lowest ID always wins the arbitration.</p>
          `
        }
      ]
    },
    {
      title: "Module 6: RTOS Internals - Building a Scheduler",
      lessons: [
        {
          title: "Thread Control Blocks (TCB) & Stack Allocation",
          content: `
            <p>How does an OS "own" a task? We build a <strong>Thread Control Block</strong>. You will learn how to allocate a private memory stack for every task. We explore the <strong>Stack Initialization</strong>—how we manually "fake" a hardware interrupt stack frame so that when the scheduler starts, the CPU 'returns' into the task's starting function as if it were resuming from an interrupt.</p>
          `
        },
        {
          title: "The PendSV Handler: The Heart of the Switch",
          content: `
            <p>The <strong>PendSV (Pending Service Call)</strong> is the lowest priority interrupt used for <strong>Context Switching</strong>. You will learn why we use PendSV instead of SysTick to perform the switch (to avoid interrupting other ISRs). We'll write the naked assembly code to push R4-R11 (the software-saved registers), swap the stack pointers, and pop the new task's registers.</p>
          `
        },
        {
          title: "Real-Time Scheduling: Rate Monotonic Analysis (RMA)",
          content: `
            <p>A "Real-Time" system isn't just fast; it's <strong>Deterministic</strong>. We master <strong>RMA</strong>. You will learn how to calculate if a set of tasks can meet their deadlines using the formula $U = \sum (C_i / T_i) \le n(2^{1/n} - 1)$. We'll discuss <strong>Preemptive vs. Cooperative</strong> scheduling and why the **Idle Task** is essential for power management and system telemetry.</p>
          `
        }
      ]
    },
    {
      title: "Module 7: Digital Signal Processing (DSP) on MCUs",
      lessons: [
        {
          title: "Fixed-Point Math vs. Floating Point (FPU)",
          content: `
            <p>Many low-cost MCUs lack an <strong>FPU</strong>. We master <strong>Q-format Fixed-Point arithmetic</strong>. You will learn how to represent decimals using integers and bit-shifts (e.g., Q15 format). We'll explore the <strong>CMSIS-DSP library</strong> and how to use <strong>SIMD (Single Instruction Multiple Data)</strong> instructions to perform two 16-bit additions in a single CPU cycle.</p>
          `
        },
        {
          title: "Digital Filters: Implementing FIR and IIR",
          content: `
            <p>We turn code into a radio. We deconstruct the <strong>Finite Impulse Response (FIR)</strong> filter. You will learn the "Multiply-Accumulate" (MAC) operation and how to use a <strong>Circular Buffer</strong> for the filter's delay line. We'll implement a <strong>Low-Pass Filter</strong> to clean up noisy sensor data and analyze the trade-offs between filter "order" (sharpness) and "latency" (delay).</p>
          `
        },
        {
          title: "Fast Fourier Transform (FFT) on the Edge",
          content: `
            <p>We move from the Time Domain to the <strong>Frequency Domain</strong>. You will learn the <strong>Radix-2 Decimation-in-Time</strong> algorithm. We'll implement an FFT to detect specific frequencies in an audio signal (like a whistle or a glass break). We cover <strong>Windowing functions</strong> (Hamming, Hann) to prevent spectral leakage at the edges of the sample buffer.</p>
          `
        }
      ]
    },
    {
      title: "Module 8: Security, Bootloaders, and OTA Updates",
      lessons: [
        {
          title: "Secure Boot & TrustZone Architecture",
          content: `
            <p>We protect the firmware. We explore <strong>TrustZone-M</strong>, which partitions the CPU into <strong>Secure</strong> and <strong>Non-Secure</strong> states. You will learn how to use <strong>Cryptographic Engines</strong> (AES, SHA-256) to verify the digital signature of a firmware image before allowing the CPU to boot it, preventing hackers from running malicious code on your device.</p>
          `
        },
        {
          title: "Custom Bootloader Design: Self-Programming Flash",
          content: `
            <p>An embedded system must update itself. We build a <strong>Dual-Bank Bootloader</strong>. You will learn how to write to Flash memory while code is running, the dangers of <strong>Flash Sector Erasing</strong>, and how to implement a <strong>Golden Image</strong> fallback so that if an update fails midway (due to power loss), the device doesn't become a "Brick."</p>
          `
        },
        {
          title: "Over-the-Air (OTA) Protocol Design",
          content: `
            <p>Updating via Wi-Fi or Bluetooth requires a robust protocol. We design a <strong>Chunked-Transfer</strong> system with CRC-32 verification. You will learn how to handle packet loss and how to use <strong>Delta-Updates</strong> (sending only the binary difference between versions) to minimize the data sent over slow wireless links.</p>
          `
        }
      ]
    },
    {
      title: "Module 9: Power Engineering & Energy Profiling",
      lessons: [
        {
          title: "Micro-amp Auditing: Finding the Leak",
          content: `
            <p>A "Sleep" mode is useless if a GPIO pin is floating. We learn <strong>Hardware Forensics</strong>. You will learn why an unconfigured input pin can consume 50uA due to oscillation. We'll cover <strong>Pull-up/Pull-down logic</strong> and how to place all peripherals in their lowest power state. We'll use a <strong>Power Profiler</strong> to see the "Current Spikes" during radio transmission vs. CPU processing.</p>
          `
        },
        {
          title: "Battery Chemistry & Fuel Gauging",
          content: `
            <p>Not all batteries are equal. We analyze <strong>LiPo vs. LiFePO4 vs. Alkaline</strong> discharge curves. You will learn how to use a <strong>Fuel Gauge IC</strong> (via I2C) to track the "State of Charge" (SoC) and "State of Health" (SoH), and how to implement a <strong>Brown-out Reset (BOR)</strong> to safely shut down the system before the battery voltage drops to a level that corrupts the Flash memory.</p>
          `
        }
      ]
    },
    {
      title: "Module 10: Final Lab - The Industrial IoT Gateway",
      lessons: [
        {
          title: "The Titan Capstone",
          type: "lab",
          content: `
            <div class="text-center py-40 bg-gradient-to-br from-slate-900 via-blue-900 to-black rounded-[5rem] shadow-4xl border border-white/10">
              <div class="mb-12 inline-block p-8 bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 animate-pulse">
                <ShieldAlert size={80} className="text-blue-400" />
              </div>
              <h2 class="text-8xl font-black text-white mb-8 tracking-tighter italic">Titan Architect</h2>
              <p class="text-blue-200 mb-20 max-w-3xl mx-auto text-2xl font-light leading-relaxed">
                You have reached the summit of Embedded Engineering. You don't just write code; 
                you orchestrate silicon, electricity, and time. Your journey from Reset Vector to 
                RTOS Scheduler is complete.
              </p>
              <div class="flex flex-col md:flex-row gap-8 justify-center items-center">
                  <a href="/lab?courseId=embedded-titan" class="group bg-blue-500 text-white px-20 py-8 rounded-[2rem] font-black tracking-[0.2em] uppercase text-xl hover:bg-white hover:text-blue-900 transition-all shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                    START THE TITAN LAB
                  </a>
                  <div className="text-left border-l-2 border-white/20 pl-8 text-white">
                    <p className="font-bold uppercase text-sm tracking-[0.3em] opacity-60">Status</p>
                    <p className="font-black text-2xl uppercase">System God Mode Enabled</p>
                  </div>
              </div>
            </div>
          `
        }
      ]
    }
  ]
};