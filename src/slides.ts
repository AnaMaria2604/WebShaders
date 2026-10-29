export type TechnologyLogo = {
  name: string;
  icon: string;
};

export type SlidePoint = {
  title: string;
  body?: string;
  subpoints?: {
    title: string;
    body: string;
  }[];
  links?: {
    label: string;
    href: string;
  }[];
};

export type FullSlide = {
  layout: "full";
  section: string;
  title: string;
  description?: string;
  descriptionEmphasis?: string;
  points?: SlidePoint[];
  technologies?: TechnologyLogo[];
  code?: string;
  cover?: boolean;
  centered?: boolean;
  action?: {
    label: string;
    href: string;
  };
};

export type ColumnsSlide = {
  layout: "columns";
  section: string;
  title: string;
  description?: string;
  descriptionEmphasis?: string;
  columns: {
    title: string;
    description?: string;
    points: SlidePoint[];
  }[];
};

export type Slide = FullSlide | ColumnsSlide;

export const slides: Slide[] = [
  {
    layout: "full",
    section: "Presentation roadmap",
    title: "Chapters & topics",
    description:
      "From shader fundamentals to Shaders.com workflows, here is the path through the presentation.",
    points: [
      {
        title: "01 · Introduction to Web Shaders and to 'Shaders' as a tool",
        body: "Foundations, purpose, evolution and how shaders compare with CSS animation.",
      },
      {
        title: "02 · Architecture & Technologies",
        body: "CPU and GPU roles, the rendering pipeline, WebGL and WebGPU.",
      },
      {
        title: "03 · Shader Programming",
        body: "How shaders receive data, use coordinates, colors and time, calculate visual effects and respond to animation or pointer input.",
      },
      {
        title: "04 · Integrations & Framework Support",
        body: "Frontend frameworks, AI-assisted development and integration.",
      },
      {
        title: "05 · Shaders.com & Practical Workflows",
        body: "Platform features, effects, customization, composition and a live-demo guide.",
      },
      {
        title: "06 · Challenges, Future & Conclusions",
        body: "Performance, compatibility, accessibility, limitations, future and takeaways.",
      },
    ],
  },
  {
    layout: "columns",
    section: "01 / Introduction to Web Shaders",
    title: "What are Web Shaders?",
    description:
      "Small, high-performance computer programs that run directly on your computer's graphics card (GPU) to render 2D and 3D graphics, animations and visual effects in a web browser.",
    columns: [
      {
        title: "Purpose & output",
        points: [
          {
            title: "Purpose",
            body: "Describe how graphics are drawn or transformed, often one vertex or pixel at a time.",
          },
          {
            title: "What they produce",
            body: "Images, lighting, distortion, gradients, particles and other real-time effects.",
          },
        ],
      },
      {
        title: "Where they're used",
        points: [
          {
            title: "UI design",
            body: "Interactive gradients, glass effects, textures and liquid motion.",
          },
          {
            title: "Gaming & 3D scenes",
            body: "Materials, lighting, environmental effects and post-processing.",
          },
          {
            title: "Data & math visualization",
            body: "Procedural patterns, wave simulations and ray-marched shapes.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "What is 'Shaders' as a tool?",
    description:
      "Build effects visually, in code or with tools. Every route ends with the same GPU-effect components in your codebase.",
    points: [
      {
        title: "Write code or ask an agent",
        body: "Install the shaders package and build components directly with the quickstart that is provided or connect Claude Code, Cursor or another agent to install and edit effects.",
      },
      {
        title: "No learning curve for graphics programming",
        body: "You don't need pre-existing graphics-programming experience. CSS layout or arranging layers in Figma is a useful starting model.",
      },
      {
        title: "Design visually",
        body: "Use sliders, color pickers and live preview, then export code for your framework.",
      },
      {
        title: "Components that render live",
        body: "Use GPU effect components with React, Vue, Svelte, Solid, JavaScript or Framer. They render in the browser with WebGPU.",
      },
      {
        title: "CLI or Framer",
        body: "The CLI installs components in your project and keeps them in sync with the editor. In Framer, use the Shaders plugin to place effects directly on the design canvas without setting up an npm project or writing integration code.",
      },
      {
        title: "Open source vs. free to use",
        body: "The engine and components are MIT-licensed. The design editor is free to use, including projects and code export, but is not open source.",
      },
    ],
  },
  {
    layout: "columns",
    section: "01 / Introduction to Web Shaders",
    title: "Why shaders matter on the web",
    columns: [
      {
        title: "Expressive interfaces",
        points: [
          {
            title: "Real-time visuals",
            body: "Generate effects in response to time, data and user input.",
          },
          {
            title: "Flexible design",
            body: "Tune color, motion and texture without exporting a video for every variation.",
          },
          {
            title: "New interactions",
            body: "Make visual surfaces react to a pointer, touch, scroll or application state.",
          },
        ],
      },
      {
        title: "Performance & visual reach",
        points: [
          {
            title: "Parallel processing",
            body: "The GPU handles many graphics calculations in parallel, leaving the CPU more room for application logic.",
          },
          {
            title: "Cinema-like visual effects",
            body: "Create dynamic lighting, realistic shadows, motion blur, water refractions and custom particles such as smoke, fire or dust.",
          },
          {
            title: "Instant accessibility",
            body: "Share rich, game-like visuals through a webpage, without asking visitors to install a separate app or browser plugin.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "How web graphics evolved",
    description:
      "The web moved from graphics that needed extra software to tools built into the browser.",
    points: [
      {
        title: "Before browser graphics",
        body: "Websites relied on add-ons or separate software for advanced visuals. Visitors had to install them and they did not work everywhere.",
      },
      {
        title: "WebGL brings the GPU to the browser",
        body: "WebGL let a webpage draw GPU-powered graphics inside a canvas, without a separate plugin. Developers could create 3D scenes and visual effects, but had to work with low-level graphics code.",
      },
      {
        title: "Libraries make graphics easier to use",
        body: "Tools built on top of WebGL handle some of the complex setup. This made it easier to create and reuse effects in websites and apps.",
      },
      {
        title: "WebGPU is the newer option",
        body: "WebGPU is a newer browser API for graphics and other GPU calculations. It gives developers more modern tools, though support still depends on the browser and device.",
      },
    ],
  },
  {
    layout: "columns",
    section: "01 / Introduction to Web Shaders",
    title: "CSS and shaders: different tools",
    columns: [
      {
        title: "CSS animation",
        points: [
          {
            title: "Best for interface states, layout transitions, transforms and familiar UI motion.",
            // body: "Interface states, layout transitions, transforms and familiar UI motion.",
          },
          {
            title: "How it works",
            body: "Animates browser properties such as opacity, position and transform.",
          },
          {
            title: "Easy to maintain",
            body: "Declarative, readable and usually the right choice for ordinary interface animation.",
          },
        ],
      },
      {
        title: "Shader effects",
        points: [
          {
            title: "Best for pixel-level color, procedural textures, distortion and complex visual fields.",
          },
          {
            title: "How it works",
            body: "A GPU program calculates visual output across many points in parallel.",
          },
          {
            title: "Choose deliberately",
            body: "Shaders add power but also require GPU support, testing and fallback planning.",
          },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "02 / Architecture & technologies",
    title: "CPU and GPU: a creative partnership",
    columns: [
      {
        title: "CPU · the coordinator",
        description:
          "Runs the application and prepares work for the graphics card.",
        points: [
          {
            title: "Managests events, layout, application logic and draw instructions.",
          },
          {
            title: "Prepares geometry, resources and parameters for graphics work.",
          },
          {
            title: "Excels at flexible, sequential tasks and decision-making.",
          },
        ],
      },
      {
        title: "GPU · the parallel processor",
        description: "Processes many similar graphics calculations at once.",
        points: [
          {
            title: "Transforms many vertices into positions on screen.",
          },
          {
            title: "Colors calculates fragment colors for the rendered image.",
          },
          {
            title: "Excels at large batches of parallel operations, not every application task.",
          },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "02 / Architecture & technologies",
    title: "The graphics rendering pipeline",
    columns: [
      {
        title: "Prepare & position",
        points: [
          {
            title: "1 · Input",
            body: "The CPU submits vertices, resources and render commands.",
          },
          {
            title: "2 · Vertex stage",
            body: "The vertex shader uses the camera view to work out where each point should appear(clip-space points). " +
              "Then the GPU clips points outside the view before mapping the rest onto the screen.",
          },
          {
            title: "3 · Rasterization",
            body: "The GPU turns primitives into fragments that may become pixels.",
          },
        ],
      },
      {
        title: "Shade & present",
        points: [
          {
            title: "4 · Fragment stage",
            body: "For each fragment (a candidate pixel), the fragment shader calculates its color and may also set depth or transparency.",
          },
          {
            title: "5 · Output",
            body: "Depth testing decides which surfaces are in front; blending mixes colors, such as a transparent layer over a background. The results are drawn into an image called a render target.",
          },
          {
            title: "6 · Display",
            body: "The browser displays the finished render target in the canvas. For animation, this process repeats to produce each new frame.",
          },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "02 / Architecture & technologies",
    title: "WebGL and WebGPU",
    columns: [
      {
        title: "WebGL",
        points: [
          {
            title: "What it is?",
            body: "WebGL (Web Graphics Library) is a JavaScript API that lets you render high-performance," +
              " interactive 2D and 3D graphics directly inside a web browser using the HTML5 <canvas> element.",
          },
          {
            title: "Broad reach",
            body: "Supported across many browsers and devices.",
          },
          {
            title: "Shader language",
            body: "Typically uses GLSL ES for programmable graphics stages.",
          },
        ],
      },
      {
        title: "WebGPU",
        points: [
          {
            title: "What it is?",
            body: "WebGPU is a modern, low-level browser and cross-platform graphics API designed to replace WebGL. " +
              "It gives developers direct access to a device's GPU for 3D rendering and parallel computations.",
          },
          {
            title: "Graphics & compute",
            body: "Supports rendering pipelines as well as compute workloads.",
          },
          {
            title: "Shader language",
            body: "Uses WGSL and still requires checking browser and device support.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "03 / Shader programming",
    title: "Important shader concepts",
    points: [
      {
        title: "Coordinates",
        body: "Position values describe where a vertex or fragment sits in a coordinate space.",
      },
      {
        title: "Uniforms",
        body: "Shared parameters pass values such as resolution, elapsed time and pointer position.",
      },
      {
        title: "Colors",
        body: "Vectors represent color channels; alpha can describe transparency.",
      },
      {
        title: "Time",
        body: "A changing time value lets the shader animate a shape, wave or gradient.",
      },
    ],
  },
  {
    layout: "columns",
    section: "03 / Shader programming",
    title: "How a shader creates an effect",
    columns: [
      {
        title: "Build a visual field",
        points: [
          {
            title: "Start with a position",
            body: "For each vertex or fragment, the shader receives coordinates that identify its place on the shape or screen. Those coordinates can also act like a grid for patterns.",
          },
          {
            title: "Apply a function",
            body: "The shader applies calculations to the coordinates-for example, distance from a point can make a circular ripple, while noise can create irregular clouds or stone-like texture.",
          },
          {
            title: "Map to color",
            body: "The calculated value is mapped to a color or transparency.",
          },
        ],
      },
      {
        title: "Refine the result",
        points: [
          {
            title: "Shape the response",
            body: "Use thresholds to create a sharp edge or a gradient to make a soft transition-for example, fading a glow smoothly into the background.",
          },
          {
            title: "Layer effects",
            body: "Combine the result with other visual treatments, such as blur, glass distortion or grain, to build a more complex look.",
          },
          {
            title: "Tune the cost",
            body: "Every extra calculation or texture lookup adds GPU work. Reduce repeated samples or simplify the math if the effect runs slowly on target devices.",
          },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "03 / Shader programming",
    title: "Animation and pointer interaction",
    columns: [
      {
        title: "Animate",
        points: [
          {
            title: "Pass time",
            body: "Update a time uniform so coordinates and color can change each frame.",
          },
          {
            title: "Choose a rhythm",
            body: "For gentle background motion, slowly brighten and dim a glow or move a gradient across the screen.",
          },
          {
            title: "Control updates",
            body: "Redraw only when the image needs to change. If a visitor has Reduce Motion enabled in their device settings, keep animations still or make them gentler.",
          },
        ],
      },
      {
        title: "Respond",
        points: [
          {
            title: "Pointer position",
            body: "Pass normalized mouse or touch coordinates to the effect.",
          },
          {
            title: "Distance fields",
            body: "Use distance from the pointer to create a ripple, spotlight or distortion.",
          },
          {
            title: "Connect UI state",
            body: "Change shader parameters when the application state or interaction changes.",
          },
        ],
      },
    ],
  },
  ///////////////
  {
    layout: "full",
    section: "04 / Integrations & framework support",
    title: "Framework & technology support",

    technologies: [
      {
        name: "React",
        icon: "https://cdn.simpleicons.org/react/61DAFB",
      },
      {
        name: "Vue",
        icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D",
      },
      {
        name: "Svelte",
        icon: "https://cdn.simpleicons.org/svelte/FF3E00",
      },
      {
        name: "Solid",
        icon: "https://cdn.simpleicons.org/solid/446B9E",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.simpleicons.org/javascript/F7DF1E",
      },
    ],

    points: [
      {
        title: "Reusable components",
        body: "Add shader effects to existing frontend projects.",
      },
      {
        title: "Dynamic customization",
        body: "Control colors, size and animation through code.",
      },
    ],
  },

  {
    layout: "full",
    section: "04 / Integrations & framework support",
    title: "AI-assisted development",
    points: [
      {
        title: "AI assistance",
        body: "Tools like Cursor can help developers write and understand shader code.",
      },
      {
        title: "Code generation",
        body: "AI can suggest components and code based on written instructions.",
      },
      {
        title: "Customization",
        body: "Developers can ask AI to change colors, movement or shader parameters.",
      },
      {
        title: "Testing",
        body: "Generated code still needs to be checked for errors and performance.",
      },
    ],
  },
  {
    layout: "full",
    section: "04 / Integrations & framework support",
    title: "Using shaders in frontend projects",
    points: [
      {
        title: "1 · Install",
        body: "Add the required shader library or package to the project.",
      },
      {
        title: "2 · Import",
        body: "Import a shader component into the website, such as Blob in React.",
      },
      {
        title: "3 · Customize",
        body: "Change properties like color, size, speed and animation.",
      },
      {
        title: "4 · Test",
        body: "Check how the shader looks and performs on different devices.",
      },
    ],
  },
  {
    layout: "columns",
    section: "04 / Integrations & framework support",
    title: "Real-World Use Cases",
    columns: [
      {
        title: "Websites & User Interfaces",
        points: [
          {
            title: "Animated backgrounds",
            body: "Create moving gradients and visual effects for website backgrounds.",
          },
          {
            title: "Interactive elements",
            body: "Make visual effects respond to mouse movement, scrolling or user actions.",
          },
          {
            title: "Product presentation",
            body: "Use dynamic lighting and materials to make products more engaging.",
          },
        ],
      },
      {
        title: "Creative & Interactive Experiences",
        points: [
          {
            title: "3D experiences",
            body: "Create realistic materials, lighting and visual effects for 3D scenes.",
          },
          {
            title: "Games",
            body: "Generate effects such as water, fire, particles and environmental lighting.",
          },
          {
            title: "Digital art & installations",
            body: "Create interactive visual artworks that respond to sound, movement or user input.",
          },
        ],
      },
    ],
  },

  {
    layout: "full",
    section: "05 / Shaders.com Platform",
    title: "Introducing Shaders.com",
    points: [
      {
        title: "Visual platform",
        body: "Create and customize shader effects through an interactive interface.",
      },
      {
        title: "Live preview",
        body: "See changes in real time while adjusting shader parameters.",
      },
      {
        title: "Ready-to-use components",
        body: "Explore prebuilt shader effects that can be adapted to different projects.",
      },
      {
        title: "Frontend integration",
        body: "Use shader effects in modern web applications.",
      },
    ],
    action: {
      label: "Official website - shaders.com",
      href: "https://shaders.com",
    },
  },

  {
    layout: "full",
    section: "05 / Shaders.com Platform",
    title: "From Visual Editor to Code",
    points: [
      {
        title: "Create",
        body: "Choose a shader and customize its appearance in the visual editor.",
      },
      {
        title: "Export",
        body: "Generate code for the customized shader.",
      },
      {
        title: "Integrate",
        body: "Add the code to a frontend project and modify it when needed.",
      },
      {
        title: "Experiment & Explore",
        body: "Try different effects, combine ideas and create something unique.",
      },
    ],
  },

  {
    layout: "full",
    section: "05 / Shaders.com Platform",
    title: "Live Demonstration",
    description:
      "Creating a shader in the visual editor, exporting it and modifying the code in VS Code.",
    action: {
      label: "Watch on YouTube",
      href: "https://youtu.be/5jOBhrfeboQ",
    },
  },

  {
    layout: "full",
    section: "05 / Live demonstration",
    title: "Live-demo walkthrough",
    description:
      "Use this slide as a guide while demonstrating the Shaders.com platform in a browser.",
    points: [
      {
        title: "Browse",
        body: "Open the shader library and choose an effect such as Blob, Glass or MeshGradient.",
      },
      {
        title: "Explore controls",
        body: "Change colors, size, movement and intensity to understand each parameter.",
      },
      {
        title: "Compose",
        body: "Add a complementary layer and tune its order and blend.",
      },
      {
        title: "Preview interaction",
        body: "Try the available pointer or animation controls and watch the effect respond.",
      },
      {
        title: "Export",
        body: "Copy the result into a frontend project and test it behind real page content.",
      },
    ],
  },
  {
    layout: "full",
    section: "06 / Challenges, future & conclusions",
    title: "Performance & optimization",
    points: [
      {
        title: "GPU usage",
        body: "Complex shaders use more GPU power, especially when several effects run together.",
      },
      {
        title: "Frame rate (FPS)",
        body: "Large effects and high resolutions can lower FPS and make animations less smooth.",
      },
      {
        title: "Optimization",
        body: "Using fewer layers and simpler calculations can make shaders run faster.",
      },
      {
        title: "Visual quality",
        body: "Developers should create attractive effects without slowing down the website.",
      },
    ],
  },
  {
    layout: "columns",
    section: "06 / Challenges, future & conclusions",
    title: "Browser & device compatibility",
    columns: [
      {
        title: "WebGL",
        points: [
          {
            title: "Browser support",
            body: "WebGL works in most modern browsers and on many older devices.",
          },
          {
            title: "Alternative",
            body: "A WebGL version can replace a WebGPU effect if developers provide one.",
          },
        ],
      },
      {
        title: "WebGPU",
        points: [
          {
            title: "Browser support",
            body: "WebGPU offers newer features, but it does not work on every browser or system.",
          },
          {
            title: "Hardware",
            body: "Some older graphics cards and devices cannot run WebGPU effects.",
          },
          {
            title: "Fallback",
            body: "A static image or CSS effect can appear when GPU effects are unavailable.",
          },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "06 / Challenges, future & conclusions",
    title: "Accessibility & current limitations",
    columns: [
      {
        title: "Accessibility & usability",
        points: [
          {
            title: "Motion sensitivity",
            body: "Fast or constant animations can make some users feel uncomfortable.",
          },
          {
            title: "Reduced motion",
            body: "Websites should allow users to reduce or disable animations.",
          },
          {
            title: "Readability",
            body: "Moving backgrounds should not make text or buttons hard to see.",
          },
        ],
      },
      {
        title: "WebGPU & Shaders.com limitations",
        points: [
          {
            title: "WebGPU support",
            body: "WebGPU needs a compatible browser, graphics card and driver.",
          },
          {
            title: "Shaders.com",
            body: "Ready-made effects are easy to use, but offer less control than custom code.",
          },
          {
            title: "Custom effects",
            body: "Creating a very specific effect may still require writing shader code.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "06 / Challenges, future & conclusions",
    title: "Future of web shaders & WebGPU",
    points: [
      {
        title: "Wider support",
        body: "More browsers and devices are expected to support WebGPU in the future.",
      },
      {
        title: "Better graphics",
        body: "Developers will be able to create richer 3D scenes and interactive effects.",
      },
      {
        title: "AI tools",
        body: "AI can help developers write, edit and improve shader code more quickly.",
      },
      {
        title: "Beyond graphics",
        body: "WebGPU can also speed up simulations, data processing and some AI tasks.",
      },
    ],
  },
  {
    layout: "full",
    section: "06 / Conclusions",
    title: "Key takeaways & conclusions",
    description:
      "Web shaders make websites more interactive and tools like Shaders.com make visual effects easier to create.",
    points: [
      {
        title: "Web shaders",
        body: "Use the GPU to create animated colors, shapes and interactive visual effects.",
      },
      {
        title: "WebGL & WebGPU",
        body: "Both run graphics in the browser, but they have different features and support.",
      },
      {
        title: "Shaders.com",
        body: "Lets developers customize effects visually and add them to frontend projects.",
      },
      {
        title: "Good design",
        body: "Shaders should look good, run smoothly and remain accessible to users.",
      },
    ],
  },
  {
    layout: "full",
    section: "Thank you",
    title: "Thank you for\nyour attention!",
    centered: true,
    description:
      "We hope this presentation inspired you to explore the creative possibilities of web shaders.",
    action: {
      label: "Bloopers: watch on YouTube",
      href: "https://www.youtube.com/watch?v=pXCkIrZ2g6w",
    },
  },
];
