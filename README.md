# WebShaders

## What this project is

WebShaders is a browser-based, PowerPoint-style presentation about Web Shaders and the Shaders.com platform. The project itself is the presentation: it is a React web application, not a `.pptx` file or a separate shader editor. Its landing page introduces the project and its team, then lets visitors open the slide deck or the [accompanying YouTube video](https://www.youtube.com/watch?v=pXCkIrZ2g6w).

The presentation also demonstrates selected functionality and visual effects from the Shaders framework. Its slide backgrounds compose React shader components such as Blob, Flower, Glass, MeshGradient, Aurora, Halftone, Grid, Prism, particles and gradients. The interface keeps slide text as HTML above the shader artwork.

The app contains 26 slides total, including the chapter roadmap and thank-you slide. The main page also links to a separate presentation/demo details screen. The final slide includes a link to the YouTube bloopers video. It cycles through 13 shader compositions across the deck; it does not create a unique shader composition for every slide. A CSS artwork fallback keeps the background visible when WebGPU is unavailable. Actual shader rendering depends on browser, operating system, device and GPU support.

## Team

- Ursache Ana-Maria
- Agheorghiesei Ioana-Miruna

## Presentation contents

The main page's **Details about the presentation and demo** button opens a simple details screen. Slide 1 is the roadmap listing all six chapters. The deck then follows the requested subject areas:

1. **Introduction to Web Shaders** - definition and purpose; what Shaders offers as a tool, including its component library, visual editor, framework and AI/CLI/Framer routes and licensing distinction; importance and use cases in web development; evolution from plugin-based graphics through WebGL to WebGPU; and shader effects compared with CSS animation. (Slides 2–6)
2. **Architecture & Technologies** - CPU and GPU roles, the rendering pipeline and WebGL and WebGPU. (Slides 7–9)
3. **Shader Programming** - shader concepts; coordinates, uniforms, colors and time; how calculations create effects; and animation and pointer interaction. (Slides 10–12)
4. **Integrations & Framework Support** - React, Vue, Svelte, Solid and JavaScript; Cursor and AI-assisted development; and steps for integrating a shader into a frontend. (Slides 13–16)
5. **Shaders.com & Practical Workflows** - platform overview and effect library; visual editing, customization, export and sharing; a live-demonstration video; and a walkthrough guide. (Slides 17–20)
6. **Challenges, Future & Conclusions** - performance, compatibility, fallbacks, accessibility, usability, current limitations, future direction and takeaways. (Slides 21–25)
7. **Closing** - thank-you message and a YouTube bloopers link. (Slide 26)

The deck is an educational overview. The framework and platform slides explain integration paths and concepts; the application itself is implemented in React and does not provide separate Vue, Svelte, Solid, CLI or MCP implementations.

## Run it locally

Install [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/) (the current LTS release is recommended), then run these commands in a terminal:

```bash
git clone https://github.com/AnaMaria2604/WebShaders.git
cd WebShaders
npm install
npm run dev
```

Open the local URL printed by Vite, usually **http://localhost:5173/**. If that port is in use, use the alternative URL Vite prints. To stop the development server, press **Ctrl+C** in the terminal.

For a production build and local preview:

```bash
npm run build
npm run preview
```

Open the preview URL printed by Vite.

## Using the presentation

- Select **Explore the presentation** on the landing page to open the deck.
- Use **Previous** and **Next** or the left/right arrow keys, to move between slides.
- `Page Up` and `Page Down` also navigate. `Home` and `End` jump to the first and last slides.
- Select the fullscreen icon or press `F` to enter fullscreen. Press `Esc` to leave fullscreen.
- Select **Home** in the presentation header to return to the landing page. This also exits fullscreen.
- The **Watch on YouTube** landing-page button opens the linked video in a new tab.

## Editing slides and shader scenes

Edit slide text in [`src/slides.ts`](./src/slides.ts). The deck uses two layouts:

- **Full width:** `{ layout: "full", section, title, description?, points?, action? }`
- **Two columns:** `{ layout: "columns", section, title, description?, columns: [{ title, description?, points }, { title, description?, points }] }`

Each point is `{ title, body? }`; use optional `subpoints` for nested bullet items or `links` for related links. A full-width slide may also include `code` for a code sample or an `action` with a `label` and `href` for a linked button. Keep two column objects on a columns slide. The array order determines slide order and the displayed slide count.

The shader scenes and their **SHADER LAYERS** credit labels are in [`src/App.tsx`](./src/App.tsx). The credit labels should be kept in sync with the components rendered by `ShaderScene`. CSS backgrounds and the drifting accent shapes are styled in [`src/styles.css`](./src/styles.css).

## Implementation and compatibility notes

- Built with React, TypeScript, Vite and the [`shaders`](https://www.npmjs.com/package/shaders) package (`shaders/react`).
- The app uses the Shaders React components in its presentation and landing-page artwork; the slide text, navigation, fullscreen control and layout are normal React/HTML/CSS.
- The 13 component compositions are reused in order across the 26 slides. The separate shader-credit line identifies the composition assigned to the current slide.
- WebGPU support varies across browsers and devices. When the shader canvas cannot render, CSS artwork provides a fallback background; shader visuals themselves may not appear in that environment.
- The deck discusses performance, accessibility and fallbacks, but it does not guarantee a particular frame rate or WebGPU availability.
