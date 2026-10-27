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
      { title: "Understand", body: "Learn the graphics pipeline and the role of shader programs." },
      { title: "Create", body: "Explore effects, interaction, and frontend integrations." },
      { title: "Compose", body: "See how layers of light, color, and texture become design." },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "What are Web Shaders?",
    description:
      "Small programs that run on the graphics processor to calculate positions, colors, and visual effects.",
    points: [
      { title: "Purpose", body: "Describe how graphics are drawn or transformed, often one vertex or pixel at a time." },
      { title: "Where they run", body: "Usually execute in parallel on a GPU through a browser graphics API." },
      { title: "What they produce", body: "Images, lighting, distortion, gradients, particles, and other real-time effects." },
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
          { title: "Real-time visuals", body: "Generate effects in response to time, data, and user input." },
          { title: "Flexible design", body: "Tune color, motion, and texture without exporting a video for every variation." },
          { title: "New interactions", body: "Make visual surfaces react to a pointer, touch, scroll, or application state." },
        ],
      },
      {
        title: "A practical design tool",
        points: [
          { title: "Brand moments", body: "Add distinctive motion to a hero, product page, or campaign." },
          { title: "Data display", body: "Use GPU calculations for visualizations and large sets of graphic elements." },
          { title: "Use with care", body: "Effects should support the message, remain performant, and never replace essential content." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "01 / Introduction to Web Shaders",
    title: "From plugin graphics\nto the open web",
    points: [
      { title: "Early web", body: "Rich interactive graphics often depended on plugins or platform-specific software." },
      { title: "WebGL arrives", body: "WebGL brought OpenGL ES-style GPU graphics to browser canvases and enabled wider experimentation." },
      { title: "A richer ecosystem", body: "Libraries, game engines, and creative-coding tools made browser graphics easier to build." },
      { title: "WebGPU era", body: "WebGPU introduces a modern API for graphics and general-purpose GPU computation." },
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
          { title: "Best for", body: "Interface states, layout transitions, transforms, and familiar UI motion." },
          { title: "How it works", body: "Animates browser properties such as opacity, position, and transform." },
          { title: "Easy to maintain", body: "Declarative, readable, and usually the right choice for ordinary interface animation." },
        ],
      },
      {
        title: "Shader effects",
        points: [
          { title: "Best for", body: "Pixel-level color, procedural textures, distortion, and complex visual fields." },
          { title: "How it works", body: "A GPU program calculates visual output across many points in parallel." },
          { title: "Choose deliberately", body: "Shaders add power but also require GPU support, testing, and fallback planning." },
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
        description: "Runs the application and prepares work for the graphics card.",
        points: [
          { title: "Manages", body: "Events, layout, application logic, and draw instructions." },
          { title: "Prepares", body: "Geometry, resources, and parameters for graphics work." },
          { title: "Excels at", body: "Flexible, sequential tasks and decision-making." },
        ],
      },
      {
        title: "GPU · the parallel processor",
        description: "Processes many similar graphics calculations at once.",
        points: [
          { title: "Transforms", body: "Many vertices into positions on screen." },
          { title: "Colors", body: "Calculates fragment colors for the rendered image." },
          { title: "Excels at", body: "Large batches of parallel operations, not every application task." },
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
          { title: "1 · Input", body: "The CPU submits vertices, resources, and render commands." },
          { title: "2 · Vertex stage", body: "A vertex shader transforms geometry into clip-space positions." },
          { title: "3 · Rasterization", body: "The GPU turns primitives into fragments that may become pixels." },
        ],
      },
      {
        title: "Shade & present",
        points: [
          { title: "4 · Fragment stage", body: "A fragment shader calculates color and other per-pixel values." },
          { title: "5 · Output", body: "Depth tests and blending combine results into a render target." },
          { title: "6 · Display", body: "The finished frame is presented through the browser canvas." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "02 / Architecture & technologies",
    title: "Three shader stages to know",
    points: [
      { title: "Vertex shader", body: "Processes vertex inputs and determines where geometry appears." },
      { title: "Fragment shader", body: "Calculates the color and other outputs for each rasterized fragment." },
      { title: "Compute shader", body: "Runs general-purpose parallel calculations, independent of the draw pipeline." },
      { title: "Different jobs", body: "A project may use one or several stages, depending on its visual and computational needs." },
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
          { title: "Mature", body: "The established browser API based on OpenGL ES." },
          { title: "Broad reach", body: "Supported across many browsers and devices." },
          { title: "Shader language", body: "Typically uses GLSL ES for programmable graphics stages." },
        ],
      },
      {
        title: "WebGPU",
        points: [
          { title: "Modern API", body: "Designed around current GPU architectures and explicit resource management." },
          { title: "Graphics & compute", body: "Supports rendering pipelines as well as compute workloads." },
          { title: "Shader language", body: "Uses WGSL and still requires checking browser and device support." },
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
          { title: "Common pairing", body: "Widely used with WebGL and OpenGL-style graphics pipelines." },
          { title: "Typed language", body: "Expresses shader stages using graphics-oriented types and functions." },
          { title: "In practice", body: "Many existing examples, engines, and tools build on GLSL." },
        ],
      },
      {
        title: "WGSL",
        points: [
          { title: "WebGPU language", body: "Designed to provide a secure, portable shader language for the web." },
          { title: "Explicit structure", body: "Declares resource bindings, entry points, and stage interfaces." },
          { title: "In practice", body: "Used when authoring WebGPU shaders, including vertex, fragment, and compute stages." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "02 / Architecture & technologies",
    title: "How WebGPU draws in a browser",
    points: [
      { title: "Request access", body: "JavaScript asks the browser for a GPU adapter and then a logical device." },
      { title: "Prepare resources", body: "Create buffers, textures, bind groups, shader modules, and a render pipeline." },
      { title: "Record commands", body: "Encode render or compute work in a command encoder and finish a command buffer." },
      { title: "Submit a frame", body: "Submit commands to the GPU queue and present the rendered canvas output." },
      { title: "Handle absence", body: "GPU access can be unavailable or lost, so provide graceful fallbacks and cleanup." },
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
          { title: "Entry point", body: "A stage-specific function marked for vertex, fragment, or compute work." },
          { title: "Attributes", body: "Per-vertex input such as positions, normals, or texture coordinates." },
          { title: "Resources", body: "Uniforms, buffers, and textures connect application data to shader code." },
        ],
      },
      {
        title: "Calculation & output",
        points: [
          { title: "Transform", body: "Apply coordinate and geometry operations to the inputs." },
          { title: "Evaluate", body: "Run math, sampling, and color operations for the current stage." },
          { title: "Return", body: "Write positions, colors, or computed data to the next stage or target." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "03 / Shader programming",
    title: "Coordinates, uniforms,\ncolors, and time",
    points: [
      { title: "Coordinates", body: "Position values describe where a vertex or fragment sits in a coordinate space." },
      { title: "Uniforms", body: "Shared parameters pass values such as resolution, elapsed time, and pointer position." },
      { title: "Colors", body: "Vectors represent color channels; alpha can describe transparency." },
      { title: "Time", body: "A changing time value lets the shader animate a shape, wave, or gradient." },
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
          { title: "Start with a position", body: "Use coordinates to locate the current vertex or fragment." },
          { title: "Apply a function", body: "Use math, noise, or a texture sample to derive a value." },
          { title: "Map to color", body: "Turn that value into color, opacity, or displacement." },
        ],
      },
      {
        title: "Refine the result",
        points: [
          { title: "Shape the response", body: "Thresholds, gradients, and easing alter how values transition." },
          { title: "Layer effects", body: "Combine generated output with blur, glass, grain, or blending." },
          { title: "Tune the cost", body: "Reduce samples and complexity when performance is more important than detail." },
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
          { title: "Pass time", body: "Update a time uniform so coordinates and color can change each frame." },
          { title: "Choose a rhythm", body: "Use a slow pulse or drift when motion should remain atmospheric." },
          { title: "Control updates", body: "Avoid unnecessary work and respect reduced-motion preferences." },
        ],
      },
      {
        title: "Respond",
        points: [
          { title: "Pointer position", body: "Pass normalized mouse or touch coordinates to the effect." },
          { title: "Distance fields", body: "Use distance from the pointer to create a ripple, spotlight, or distortion." },
          { title: "Connect UI state", body: "Change shader parameters when the application state or interaction changes." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "03 / Shader programming",
    title: "A tiny WGSL fragment shader",
    description: "This fragment stage returns one solid warm color for each fragment it shades.",
    code: `@fragment
fn fs() -> @location(0) vec4f {
  let warmOrange = vec3f(1.0, 0.38, 0.08);
  return vec4f(warmOrange, 1.0);
}`,
    points: [
      { title: "@fragment", body: "Marks this function as an entry point for the fragment stage." },
      { title: "vec3f", body: "Stores three floating-point color channels: red, green, and blue." },
      { title: "vec4f", body: "Adds alpha as the fourth channel; 1.0 means fully opaque." },
    ],
  },
  {
    layout: "columns",
    section: "04 / Integrations & framework support",
    title: "One idea, many frontend stacks",
    columns: [
      {
        title: "Component frameworks",
        points: [
          { title: "React", body: "Compose shader effects as components and connect props to application state." },
          { title: "Vue & Svelte", body: "Use framework integrations and bind reactive values to effect parameters." },
          { title: "Solid", body: "Use fine-grained reactive state to control shader components." },
        ],
      },
      {
        title: "JavaScript & canvas",
        points: [
          { title: "Plain JavaScript", body: "Use a canvas and the browser graphics API without a UI framework." },
          { title: "Shared concepts", body: "Canvas, GPU resources, shader programs, and render updates remain central." },
          { title: "Pick the fit", body: "Choose an integration that matches the app architecture and team experience." },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "04 / Integrations & framework support",
    title: "AI tools, CLI, and MCP",
    columns: [
      {
        title: "Cursor & AI-assisted work",
        points: [
          { title: "Scaffold", body: "Ask an assistant to explain integration steps or draft a small component." },
          { title: "Iterate", body: "Describe visual changes, then review and test the generated code." },
          { title: "Stay in control", body: "Verify APIs, performance, accessibility, and browser behavior yourself." },
        ],
      },
      {
        title: "Shaders tooling",
        points: [
          { title: "CLI", body: "Use the Shaders CLI workflow to bring components into a frontend project." },
          { title: "MCP", body: "An MCP integration can let compatible coding agents discover and work with shader resources." },
          { title: "Check access", body: "Available commands and library features may depend on the platform plan." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "04 / Integrations & framework support",
    title: "Bring a shader into a frontend",
    points: [
      { title: "1 · Install", body: "Add the chosen shader library or component package to the project." },
      { title: "2 · Compose", body: "Add the shader component to a page and configure its visual parameters." },
      { title: "3 · Size", body: "Give the canvas a deliberate container, responsive dimensions, and a clear stacking order." },
      { title: "4 · Connect", body: "Pass application state or pointer input only when the effect needs it." },
      { title: "5 · Fallback", body: "Keep content in HTML and provide a static or CSS background for unsupported devices." },
    ],
  },
  {
    layout: "full",
    section: "05 / Shaders.com platform",
    title: "A creative platform for shaders",
    description: "Shaders.com helps designers and developers discover, customize, compose, and use shader effects.",
    points: [
      { title: "Explore", body: "Browse a library of visual effects and component examples." },
      { title: "Customize", body: "Adjust parameters such as color, shape, intensity, and movement." },
      { title: "Compose", body: "Layer shader components and effects into a unified visual." },
      { title: "Use in projects", body: "Bring the generated or exported code into a frontend workflow." },
    ],
  },
  {
    layout: "columns",
    section: "05 / Shaders.com platform",
    title: "A library of visual building blocks",
    columns: [
      {
        title: "Organic & atmospheric",
        points: [
          { title: "Blob & Flower", body: "Soft organic shapes and radial forms for expressive backgrounds." },
          { title: "Aurora & Glow", body: "Atmospheric light, bloom, and flowing color." },
          { title: "MeshGradient", body: "Blended color fields with adjustable points and motion." },
        ],
      },
      {
        title: "Material & pattern",
        points: [
          { title: "Glass & Prism", body: "Refraction, highlights, and chromatic light splitting." },
          { title: "Grid & Halftone", body: "Structured lattices, dots, and print-inspired surfaces." },
          { title: "Noise & Voronoi", body: "Procedural grain, cells, and textured patterns." },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "05 / Shaders.com platform",
    title: "Edit, layer, and blend",
    columns: [
      {
        title: "Visual editor",
        points: [
          { title: "Preview", body: "See how an effect responds as you adjust its controls." },
          { title: "Tune", body: "Refine palette, intensity, speed, scale, and interaction." },
          { title: "Compare", body: "Try variations before settling on a direction for the site." },
        ],
      },
      {
        title: "Composition",
        points: [
          { title: "Order layers", body: "Place generators and effects in a deliberate sequence." },
          { title: "Blend", body: "Combine layers to mix color, texture, distortion, and lighting." },
          { title: "Keep hierarchy", body: "Use restraint so the shader supports rather than competes with content." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "05 / Shaders.com platform",
    title: "Export and share your work",
    points: [
      { title: "Export code", body: "Copy or export a composition in a format suited to the target project." },
      { title: "Integrate", body: "Install the required package and place the effect inside the intended component." },
      { title: "Keep it reproducible", body: "Record the parameters and dependencies used for the final look." },
      { title: "Share", body: "Use platform sharing options to show a composition or collaborate on a variation." },
    ],
  },
  {
    layout: "columns",
    section: "05 / Practical workflow",
    title: "Choose and customize with intent",
    columns: [
      {
        title: "Choose",
        points: [
          { title: "Start from a need", body: "Decide whether the design needs a hero backdrop, product accent, or interaction." },
          { title: "Match the tone", body: "Pick a shader whose color, motion, and material support the brand." },
          { title: "Protect readability", body: "Check contrast behind text and reserve calm areas for key information." },
        ],
      },
      {
        title: "Customize",
        points: [
          { title: "Tune the palette", body: "Use a small set of colors that coordinate with the rest of the interface." },
          { title: "Reduce motion", body: "Adjust speed and intensity so movement remains comfortable." },
          { title: "Test in context", body: "Preview the effect at its real size with actual content on top." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "05 / Practical workflow",
    title: "Build an interactive composition",
    points: [
      { title: "Choose a base", body: "Start with a gradient, shape, or texture that gives the composition its overall mood." },
      { title: "Add one focal layer", body: "Use a Blob, Flower, or light effect as a clear visual anchor." },
      { title: "Add supporting detail", body: "Introduce a subtle grid, grain, or glass layer without filling every empty space." },
      { title: "Connect interaction", body: "Use a pointer or application state to drive one meaningful response." },
      { title: "Polish", body: "Check contrast, responsive sizing, reduced motion, and GPU cost." },
    ],
  },
  {
    layout: "columns",
    section: "05 / Practical workflow",
    title: "Integrate the effect into a website",
    columns: [
      {
        title: "Implementation",
        points: [
          { title: "Place", body: "Position the shader behind the relevant content region, not over the whole page by default." },
          { title: "Constrain", body: "Use an intentional canvas size and avoid rendering hidden or oversized canvases." },
          { title: "Keep semantics", body: "Use real HTML for headings, buttons, and essential information." },
        ],
      },
      {
        title: "Validation",
        points: [
          { title: "Test devices", body: "Check browser support, GPU availability, and lower-powered hardware." },
          { title: "Provide fallback", body: "Retain a CSS color or image if the shader cannot initialize." },
          { title: "Measure", body: "Watch frame rate, battery use, and page responsiveness." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "05 / Live demonstration",
    title: "Live-demo walkthrough",
    description: "Use this slide as a guide while demonstrating the Shaders.com platform in a browser.",
    points: [
      { title: "Browse", body: "Open the shader library and choose an effect such as Blob, Glass, or MeshGradient." },
      { title: "Explore controls", body: "Change colors, size, movement, and intensity to understand each parameter." },
      { title: "Compose", body: "Add a complementary layer and tune its order and blend." },
      { title: "Preview interaction", body: "Try the available pointer or animation controls and watch the effect respond." },
      { title: "Export", body: "Copy the result into a frontend project and test it behind real page content." },
    ],
  },
  {
    layout: "columns",
    section: "06 / Challenges, future & conclusions",
    title: "Performance and compatibility",
    columns: [
      {
        title: "Performance",
        points: [
          { title: "Count the work", body: "Large canvases, complex layers, and expensive sampling increase GPU cost." },
          { title: "Limit updates", body: "Avoid rendering when nothing changes and keep animation work purposeful." },
          { title: "Test on hardware", body: "Performance varies across integrated GPUs, phones, and desktop graphics cards." },
        ],
      },
      {
        title: "Compatibility",
        points: [
          { title: "API support", body: "WebGL and WebGPU availability differ between browsers and devices." },
          { title: "Handle failure", body: "Initialization can fail even when a browser exposes a graphics API." },
          { title: "Fallback", body: "Provide a CSS or static visual that keeps the page complete without GPU rendering." },
        ],
      },
    ],
  },
  {
    layout: "columns",
    section: "06 / Challenges, future & conclusions",
    title: "Accessibility, limits, and what's next",
    columns: [
      {
        title: "People first",
        points: [
          { title: "Readable content", body: "Keep text as HTML with sufficient contrast over the background." },
          { title: "Motion preferences", body: "Respect reduced-motion settings and avoid distracting or flashing effects." },
          { title: "Usable controls", body: "Keep navigation keyboard-accessible and provide a non-shader fallback." },
        ],
      },
      {
        title: "Evolving technology",
        points: [
          { title: "WebGPU limits", body: "Support and capabilities continue to vary as browsers and devices evolve." },
          { title: "Platform limits", body: "Some Shaders.com tools or library features may have plan or integration requirements." },
          { title: "Future", body: "Expect better tooling, wider GPU access, and richer real-time web experiences." },
        ],
      },
    ],
  },
  {
    layout: "full",
    section: "06 / Conclusions",
    title: "The web is a canvas.",
    description:
      "Shaders turn GPU math into expressive, interactive visuals—and modern tools make them easier to bring into everyday frontend work.",
    points: [
      { title: "Understand the pipeline", body: "The CPU prepares the work; the GPU processes graphics in parallel." },
      { title: "Start with a purpose", body: "Choose an effect that supports the content and the experience." },
      { title: "Make it usable", body: "Optimize, test across devices, and keep an accessible fallback." },
      { title: "Keep experimenting", body: "Explore, compose, and customize effects with Shaders.com." },
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
