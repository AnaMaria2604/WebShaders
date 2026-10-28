export type TechnologyLogo = {
  name: string;
  icon: string;
};

export type SlidePoint = {
  title: string;
  body: string;
};

export type FullSlide = {
  layout: "full";
  section: string;
  title: string;
  description?: string;
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
    section: "A visual introduction",
    title: "Introduction to\nWeb Shaders",
    description:
      "A guided tour of GPU-powered graphics: how shaders work, where they fit, and what they make possible on the web.",
    cover: true,
    points: [
      {
        title: "Understand",
        body: "Learn the graphics pipeline and the role of shader programs.",
      },
      {
        title: "Create",
        body: "Explore effects, interaction, and frontend integrations.",
      },
      {
        title: "Compose",
        body: "See how layers of light, color, and texture become design.",
      },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "What are Web Shaders?",
    description:
      "Small programs that run on the graphics processor to calculate positions, colors, and visual effects.",
    points: [
      {
        title: "Purpose",
        body: "Describe how graphics are drawn or transformed, often one vertex or pixel at a time.",
      },
      {
        title: "Where they run",
        body: "Usually execute in parallel on a GPU through a browser graphics API.",
      },
      {
        title: "What they produce",
        body: "Images, lighting, distortion, gradients, particles, and other real-time effects.",
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
            body: "Generate effects in response to time, data, and user input.",
          },
          {
            title: "Flexible design",
            body: "Tune color, motion, and texture without exporting a video for every variation.",
          },
          {
            title: "New interactions",
            body: "Make visual surfaces react to a pointer, touch, scroll, or application state.",
          },
        ],
      },
      {
        title: "A practical design tool",
        points: [
          {
            title: "Brand moments",
            body: "Add distinctive motion to a hero, product page, or campaign.",
          },
          {
            title: "Data display",
            body: "Use GPU calculations for visualizations and large sets of graphic elements.",
          },
          {
            title: "Use with care",
            body: "Effects should support the message, remain performant, and never replace essential content.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "From plugin graphics\nto the open web",
    points: [
      {
        title: "Early web",
        body: "Rich interactive graphics often depended on plugins or platform-specific software.",
      },
      {
        title: "WebGL arrives",
        body: "WebGL brought OpenGL ES-style GPU graphics to browser canvases and enabled wider experimentation.",
      },
      {
        title: "A richer ecosystem",
        body: "Libraries, game engines, and creative-coding tools made browser graphics easier to build.",
      },
      {
        title: "WebGPU era",
        body: "WebGPU introduces a modern API for graphics and general-purpose GPU computation.",
      },
    ],
  },
  {
    layout: "columns",
    section: "01 / Introduction to Web Shaders",
    title: "Shaders and CSS: different tools",
    columns: [
      {
        title: "CSS animation",
        points: [
          {
            title: "Best for",
            body: "Interface states, layout transitions, transforms, and familiar UI motion.",
          },
          {
            title: "How it works",
            body: "Animates browser properties such as opacity, position, and transform.",
          },
          {
            title: "Easy to maintain",
            body: "Declarative, readable, and usually the right choice for ordinary interface animation.",
          },
        ],
      },
      {
        title: "Shader effects",
        points: [
          {
            title: "Best for",
            body: "Pixel-level color, procedural textures, distortion, and complex visual fields.",
          },
          {
            title: "How it works",
            body: "A GPU program calculates visual output across many points in parallel.",
          },
          {
            title: "Choose deliberately",
            body: "Shaders add power but also require GPU support, testing, and fallback planning.",
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
            title: "Manages",
            body: "Events, layout, application logic, and draw instructions.",
          },
          {
            title: "Prepares",
            body: "Geometry, resources, and parameters for graphics work.",
          },
          {
            title: "Excels at",
            body: "Flexible, sequential tasks and decision-making.",
          },
        ],
      },
      {
        title: "GPU · the parallel processor",
        description: "Processes many similar graphics calculations at once.",
        points: [
          {
            title: "Transforms",
            body: "Many vertices into positions on screen.",
          },
          {
            title: "Colors",
            body: "Calculates fragment colors for the rendered image.",
          },
          {
            title: "Excels at",
            body: "Large batches of parallel operations, not every application task.",
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
            body: "The CPU submits vertices, resources, and render commands.",
          },
          {
            title: "2 · Vertex stage",
            body: "A vertex shader transforms geometry into clip-space positions.",
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
            body: "A fragment shader calculates color and other per-pixel values.",
          },
          {
            title: "5 · Output",
            body: "Depth tests and blending combine results into a render target.",
          },
          {
            title: "6 · Display",
            body: "The finished frame is presented through the browser canvas.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "02 / Architecture & technologies",
    title: "Three shader stages to know",
    points: [
      {
        title: "Vertex shader",
        body: "Processes vertex inputs and determines where geometry appears.",
      },
      {
        title: "Fragment shader",
        body: "Calculates the color and other outputs for each rasterized fragment.",
      },
      {
        title: "Compute shader",
        body: "Runs general-purpose parallel calculations, independent of the draw pipeline.",
      },
      {
        title: "Different jobs",
        body: "A project may use one or several stages, depending on its visual and computational needs.",
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
            title: "Mature",
            body: "The established browser API based on OpenGL ES.",
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
            title: "Modern API",
            body: "Designed around current GPU architectures and explicit resource management.",
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
    layout: "columns",
    section: "02 / Architecture & technologies",
    title: "GLSL and WGSL",
    columns: [
      {
        title: "GLSL",
        points: [
          {
            title: "Common pairing",
            body: "Widely used with WebGL and OpenGL-style graphics pipelines.",
          },
          {
            title: "Typed language",
            body: "Expresses shader stages using graphics-oriented types and functions.",
          },
          {
            title: "In practice",
            body: "Many existing examples, engines, and tools build on GLSL.",
          },
        ],
      },
      {
        title: "WGSL",
        points: [
          {
            title: "WebGPU language",
            body: "Designed to provide a secure, portable shader language for the web.",
          },
          {
            title: "Explicit structure",
            body: "Declares resource bindings, entry points, and stage interfaces.",
          },
          {
            title: "In practice",
            body: "Used when authoring WebGPU shaders, including vertex, fragment, and compute stages.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "02 / Architecture & technologies",
    title: "How WebGPU draws in a browser",
    points: [
      {
        title: "Request access",
        body: "JavaScript asks the browser for a GPU adapter and then a logical device.",
      },
      {
        title: "Prepare resources",
        body: "Create buffers, textures, bind groups, shader modules, and a render pipeline.",
      },
      {
        title: "Record commands",
        body: "Encode render or compute work in a command encoder and finish a command buffer.",
      },
      {
        title: "Submit a frame",
        body: "Submit commands to the GPU queue and present the rendered canvas output.",
      },
      {
        title: "Handle absence",
        body: "GPU access can be unavailable or lost, so provide graceful fallbacks and cleanup.",
      },
    ],
  },
  {
    layout: "columns",
    section: "03 / Shader programming",
    title: "Anatomy of a shader program",
    columns: [
      {
        title: "Inputs & interface",
        points: [
          {
            title: "Entry point",
            body: "A stage-specific function marked for vertex, fragment, or compute work.",
          },
          {
            title: "Attributes",
            body: "Per-vertex input such as positions, normals, or texture coordinates.",
          },
          {
            title: "Resources",
            body: "Uniforms, buffers, and textures connect application data to shader code.",
          },
        ],
      },
      {
        title: "Calculation & output",
        points: [
          {
            title: "Transform",
            body: "Apply coordinate and geometry operations to the inputs.",
          },
          {
            title: "Evaluate",
            body: "Run math, sampling, and color operations for the current stage.",
          },
          {
            title: "Return",
            body: "Write positions, colors, or computed data to the next stage or target.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "03 / Shader programming",
    title: "Coordinates, uniforms,\ncolors, and time",
    points: [
      {
        title: "Coordinates",
        body: "Position values describe where a vertex or fragment sits in a coordinate space.",
      },
      {
        title: "Uniforms",
        body: "Shared parameters pass values such as resolution, elapsed time, and pointer position.",
      },
      {
        title: "Colors",
        body: "Vectors represent color channels; alpha can describe transparency.",
      },
      {
        title: "Time",
        body: "A changing time value lets the shader animate a shape, wave, or gradient.",
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
            body: "Use coordinates to locate the current vertex or fragment.",
          },
          {
            title: "Apply a function",
            body: "Use math, noise, or a texture sample to derive a value.",
          },
          {
            title: "Map to color",
            body: "Turn that value into color, opacity, or displacement.",
          },
        ],
      },
      {
        title: "Refine the result",
        points: [
          {
            title: "Shape the response",
            body: "Thresholds, gradients, and easing alter how values transition.",
          },
          {
            title: "Layer effects",
            body: "Combine generated output with blur, glass, grain, or blending.",
          },
          {
            title: "Tune the cost",
            body: "Reduce samples and complexity when performance is more important than detail.",
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
            body: "Use a slow pulse or drift when motion should remain atmospheric.",
          },
          {
            title: "Control updates",
            body: "Avoid unnecessary work and respect reduced-motion preferences.",
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
            body: "Use distance from the pointer to create a ripple, spotlight, or distortion.",
          },
          {
            title: "Connect UI state",
            body: "Change shader parameters when the application state or interaction changes.",
          },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "03 / Shader programming",
    title: "A tiny WGSL fragment shader",
    description:
      "This fragment stage returns one solid warm color for each fragment it shades.",
    code: `@fragment
fn fs() -> @location(0) vec4f {
  let warmOrange = vec3f(1.0, 0.38, 0.08);
  return vec4f(warmOrange, 1.0);
}`,
    points: [
      {
        title: "@fragment",
        body: "Marks this function as an entry point for the fragment stage.",
      },
      {
        title: "vec3f",
        body: "Stores three floating-point color channels: red, green, and blue.",
      },
      {
        title: "vec4f",
        body: "Adds alpha as the fourth channel; 1.0 means fully opaque.",
      },
    ],
  },

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
        body: "Control colors, size, and animation through code.",
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
        body: "Developers can ask AI to change colors, movement, or shader parameters.",
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
        body: "Change properties like color, size, speed, and animation.",
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
            body: "Make visual effects respond to mouse movement, scrolling, or user actions.",
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
            body: "Create realistic materials, lighting, and visual effects for 3D scenes.",
          },
          {
            title: "Games",
            body: "Generate effects such as water, fire, particles, and environmental lighting.",
          },
          {
            title: "Digital art & installations",
            body: "Create interactive visual artworks that respond to sound, movement, or user input.",
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
      label: "Official website — shaders.com",
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
        body: "Try different effects, combine ideas, and create something unique.",
      },
    ],
  },

  {
    layout: "full",
    section: "05 / Shaders.com Platform",
    title: "Live Demonstration",
    description:
      "Creating a shader in the visual editor, exporting it, and modifying the code in VS Code.",
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
        body: "Open the shader library and choose an effect such as Blob, Glass, or MeshGradient.",
      },
      {
        title: "Explore controls",
        body: "Change colors, size, movement, and intensity to understand each parameter.",
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
            body: "WebGPU needs a compatible browser, graphics card, and driver.",
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
        body: "AI can help developers write, edit, and improve shader code more quickly.",
      },
      {
        title: "Beyond graphics",
        body: "WebGPU can also speed up simulations, data processing, and some AI tasks.",
      },
    ],
  },
  {
    layout: "full",
    section: "06 / Conclusions",
    title: "Key takeaways & conclusions",
    description:
      "Web shaders make websites more interactive, and tools like Shaders.com make visual effects easier to create.",
    points: [
      {
        title: "Web shaders",
        body: "Use the GPU to create animated colors, shapes, and interactive visual effects.",
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
        body: "Shaders should look good, run smoothly, and remain accessible to users.",
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
