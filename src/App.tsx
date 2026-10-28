import { useCallback, useEffect, useRef, useState } from "react";
import {
  Aurora,
  Blob,
  Chrome,
  ConcentricSpin,
  CursorRipples,
  DotGrid,
  FilmGrain,
  Flower,
  FloatingParticles,
  FractalNoise,
  Glass,
  GlassTiles,
  Glow,
  Grid,
  HexGrid,
  Halftone,
  LensFlare,
  MeshGradient,
  Plasma,
  Prism,
  Shader,
  Voronoi,
  Watercolor,
  FlowingGradient,
} from "shaders/react";
import { slides } from "./slides";
import ShaderEffect from "./ShaderEffect";

const shaderShowcases = [
  { title: "Molten petals", family: "ORGANIC / LIGHT", components: ["Blob", "Glow", "FloatingParticles", "DotGrid", "LensFlare"] },
  { title: "Pigment field", family: "GRADIENT / GLASS", components: ["MeshGradient", "GlassTiles", "Prism", "LensFlare"] },
  { title: "Liquid orbit", family: "FLOW / DISTORTION", components: ["FlowingGradient", "ConcentricSpin", "CursorRipples", "Grid"] },
  { title: "Solar bloom", family: "SHAPE / HALO", components: ["Flower", "Glow", "DotGrid", "LensFlare", "Grid"] },
  { title: "Amber aurora", family: "LIGHT / ATMOSPHERE", components: ["Aurora", "FloatingParticles", "LensFlare"] },
  { title: "Printed mineral", family: "NOISE / PAPER", components: ["FractalNoise", "Watercolor", "FilmGrain", "Voronoi"] },
  { title: "Chromatic lattice", family: "GRID / COLOR", components: ["MeshGradient", "Grid", "HexGrid"] },
  { title: "Cellular glass", family: "VORONOI / REFRACTION", components: ["Voronoi", "GlassTiles", "CursorRipples", "Grid", "LensFlare"] },
  { title: "Prism garden", family: "GLASS / REFLECTION", components: ["MeshGradient", "Blob", "Glass", "Prism", "LensFlare", "Grid"] },
  { title: "Particle bloom", family: "PARTICLES / MOTION", components: ["MeshGradient", "FloatingParticles", "DotGrid", "Prism", "HexGrid"] },
  { title: "Liquid metal", family: "CHROME / LIGHT", components: ["Chrome", "LensFlare", "FloatingParticles", "Prism", "Grid"] },
  { title: "Screen print", family: "HALFTONE / INK", components: ["MeshGradient", "Halftone", "FilmGrain", "Grid", "DotGrid"] },
  { title: "Solar plasma", family: "ENERGY / SHAPE", components: ["Plasma", "Flower", "Glow", "FloatingParticles", "Prism", "HexGrid"] },
];

function ShaderScene({ index }: { index: number }) {
  switch (index) {
    case 0:
      return (
        <Glow intensity={0.38} threshold={0.72} size={22}>
          <>
            <Blob center={{ x: 0.28, y: 0.38 }} colorA="#ff972b" colorB="#ffe35d" highlightColor="#fff4b0" highlightIntensity={0} size={0.56} deformation={0.66} softness={0.76} speed={0.12} seed={4} />
            <Blob center={{ x: 0.73, y: 0.62 }} colorA="#f44353" colorB="#ff9a34" highlightColor="#ffe17a" highlightIntensity={0} size={0.58} deformation={0.62} softness={0.76} speed={0.1} seed={17} />
            <FloatingParticles count={180} speed={0.08} angle={68} randomness={0.48} twinkle={0.5} particleSize={1.5} softness={0.24} particleColor="#fff4cf" />
            <DotGrid color="#fff4cf" density={16} dotSize={0.1} offset={0.5} speed={0.03} twinkle={0.25} opacity={0.24} />
          </>
        </Glow>
      );
    case 1:
      return (
        <GlassTiles intensity={0.68} tileCount={6} rotation={12} roundness={0.34}>
          <Prism position={{ x: 0.22, y: 0.15 }} splitPosition={{ x: 0.58, y: 0.52 }} intensity={0.48} spread={0.42} softness={0.45} speed={0.035}>
            <MeshGradient colorA="#31c7bd" colorB="#5d64e8" stops={[{ color: "#3bcdb5", position: 0 }, { color: "#7777f6", position: 0.5 }, { color: "#ff9457", position: 1 }]} count={4} smoothness={2.2} swirl={0.35} drift={0.28} speed={0.22} seed={3} />
          </Prism>
          <LensFlare lightPosition={{ x: 0.68, y: 0.3 }} intensity={0.16} haloIntensity={0.24} starburstIntensity={0.1} />
        </GlassTiles>
      );
    case 2:
      return (
        <ConcentricSpin intensity={7} rings={5} smoothness={0.1} seed={4} speed={0.05} speedRandomness={0.16} edges="mirror">
          <FlowingGradient colorA="#81e4b7" colorB="#24a8af" colorC="#f6df82" colorD="#3f7de1" speed={0.22} distortion={0.38} seed={8} />
          <CursorRipples intensity={3} decay={9} radius={0.28} chromaticSplit={0.14} edges="mirror" />
          <Grid color="#e5fff2" cells={10} thickness={0.4} softness={0.28} rotation={-18} opacity={0.28} />
        </ConcentricSpin>
      );
    case 3:
      return (
        <>
          <Glow intensity={0.34} threshold={0.68} size={26}>
            <Flower center={{ x: 0.5, y: 0.5 }} color="#f2644c" radius={0.56} sides={8} innerRatio={0.48} rotation={18} softness={0.22} />
          </Glow>
          <DotGrid color="#fff4cf" density={15} dotSize={0.12} offset={0.5} speed={0.04} twinkle={0.24} opacity={0.32} />
          <LensFlare lightPosition={{ x: 0.5, y: 0.34 }} intensity={0.12} haloIntensity={0.22} starburstIntensity={0.12} />
          <Grid color="#fff2d6" cells={13} thickness={0.3} softness={0.3} rotation={45} opacity={0.2} />
        </>
      );
    case 4:
      return (
        <>
          <Aurora colorA="#54d6ad" colorB="#f2eb96" colorC="#658cff" colorSpace="oklab" balance={48} intensity={58} curtainCount={2} speed={0.2} waviness={55} height={100} seed={6} />
          <FloatingParticles count={280} speed={0.08} angle={90} randomness={0.38} twinkle={0.65} particleSize={1.5} softness={0.28} particleColor="#fff5c9" />
          <LensFlare lightPosition={{ x: 0.52, y: 0.22 }} intensity={0.12} haloIntensity={0.28} starburstIntensity={0.08} />
        </>
      );
    case 5:
      return (
        <Watercolor radius={3} bleed={0.7} strength={0.72} paper={0.4} paperColor="#f9f2df">
          <FilmGrain strength={0.12} bias={1.5} animated={false}>
            <FractalNoise colorA="#efbc7c" colorB="#735cbd" stops={[{ color: "#eed1a1", position: 0 }, { color: "#d89092", position: 0.55 }, { color: "#6d72ad", position: 1 }]} octaves={5} detail={2.1} contrast={0.42} speed={0.08} angle={22} seed={11} colorSpace="oklab" />
          </FilmGrain>
          <Voronoi colorA="#e2bb9a" colorB="#8074af" colorBorder="#f7e8d0" scale={8} speed={0.04} seed={12} edgeIntensity={0.18} edgeSoftness={0.3} opacity={0.16} />
        </Watercolor>
      );
    case 6:
      return (
        <>
          <MeshGradient colorA="#80bd95" colorB="#4b6f9d" stops={[{ color: "#eacb72", position: 0 }, { color: "#7bb49a", position: 0.45 }, { color: "#617db4", position: 1 }]} count={4} smoothness={2.4} speed={0.18} seed={13} />
          <Grid color="#f7edc9" cells={10} thickness={0.62} softness={0.18} rotation={24} opacity={0.42} />
          <HexGrid colorA="#6687ad" colorB="#e8f4c9" cells={8} thickness={0.36} rotation={15} softness={0.3} variation={0.12} opacity={0.28} />
        </>
      );
    case 7:
      return (
        <GlassTiles intensity={0.9} tileCount={8} rotation={-9} roundness={0.22}>
          <Voronoi colorA="#e9a546" colorB="#4568c6" colorBorder="#c9f4f0" stops={[{ color: "#f4c462", position: 0 }, { color: "#ec7366", position: 0.48 }, { color: "#6878cb", position: 1 }]} scale={6} speed={0.16} seed={5} edgeIntensity={0.32} edgeSoftness={0.16} colorSpace="oklab" />
          <CursorRipples intensity={3} decay={10} radius={0.24} chromaticSplit={0.1} edges="mirror" />
          <Grid color="#e3ffff" cells={8} thickness={0.32} softness={0.32} rotation={-12} opacity={0.3} />
          <LensFlare lightPosition={{ x: 0.27, y: 0.22 }} intensity={0.12} haloIntensity={0.22} starburstIntensity={0.06} />
        </GlassTiles>
      );
    case 8:
      return (
        <>
          <Glass blur={4} tintColor="#c6d6ff" tintIntensity={0.14} edgeSoftness={0.28} refraction={0.7} highlight={0.15}>
            <>
              <MeshGradient colorA="#f8b86b" colorB="#5265cd" stops={[{ color: "#f0bf74", position: 0 }, { color: "#dd6c86", position: 0.5 }, { color: "#596fc9", position: 1 }]} count={4} smoothness={2.5} swirl={0.4} speed={0.2} seed={18} />
              <Blob center={{ x: 0.72, y: 0.48 }} colorA="#c7edeb" colorB="#9b75dc" highlightIntensity={0} size={0.54} deformation={0.62} softness={0.78} speed={0.12} seed={22} />
              <Grid color="#ffffff" cells={8} thickness={0.34} softness={0.32} rotation={33} opacity={0.24} />
            </>
          </Glass>
          <Prism position={{ x: 0.8, y: 0.18 }} splitPosition={{ x: 0.52, y: 0.56 }} intensity={0.4} spread={0.4} softness={0.5} opacity={0.48} />
          <LensFlare lightPosition={{ x: 0.28, y: 0.24 }} intensity={0.14} haloIntensity={0.28} starburstIntensity={0.1} />
        </>
      );
    case 9:
      return (
        <>
          <MeshGradient colorA="#253e72" colorB="#2d9eae" stops={[{ color: "#f3a555", position: 0 }, { color: "#dd6f76", position: 0.45 }, { color: "#315884", position: 1 }]} count={4} smoothness={2.8} speed={0.14} seed={25} />
          <FloatingParticles count={320} speed={0.12} angle={74} randomness={0.58} twinkle={0.65} particleSize={1.7} softness={0.28} shape="dot" particleColor="#fff3c2" cursorStrength={0.16} />
          <Prism position={{ x: 0.18, y: 0.2 }} splitPosition={{ x: 0.56, y: 0.47 }} intensity={0.32} spread={0.3} softness={0.58} opacity={0.44} />
          <HexGrid colorA="#315884" colorB="#d7eff2" cells={10} thickness={0.3} rotation={22} softness={0.3} variation={0.15} opacity={0.28} />
        </>
      );
    case 10:
      return (
        <>
          <Prism position={{ x: 0.22, y: 0.2 }} splitPosition={{ x: 0.57, y: 0.52 }} intensity={0.34} spread={0.34} softness={0.56}>
            <Chrome tint="#ffe2a3" warmColor="#ff7a43" coolColor="#566c9f" scale={1.2} rotation={22} softness={0.48} spectral={0.48} />
          </Prism>
          <LensFlare lightPosition={{ x: 0.3, y: 0.31 }} intensity={0.16} haloIntensity={0.26} starburstIntensity={0.18} streakIntensity={0.1} />
          <FloatingParticles count={180} speed={0.06} angle={84} randomness={0.3} twinkle={0.5} particleSize={1.2} softness={0.22} particleColor="#fff0c1" />
          <Grid color="#eaf0ff" cells={11} thickness={0.32} softness={0.4} rotation={-27} opacity={0.28} />
        </>
      );
    case 11:
      return (
        <Halftone paperColor="#f6f0dc" cyanColor="#13a9a0" magentaColor="#d33d7c" yellowColor="#f0be36" blackColor="#322b58" frequency={90} misprint={0.15}>
          <FilmGrain strength={0.1} bias={1.3}>
            <MeshGradient colorA="#f2c65f" colorB="#da4777" stops={[{ color: "#f6ca52", position: 0 }, { color: "#ed6a53", position: 0.48 }, { color: "#4b5e9d", position: 1 }]} count={4} speed={0.26} seed={24} />
          </FilmGrain>
          <Grid color="#faf0db" cells={10} thickness={0.28} softness={0.35} rotation={45} opacity={0.28} />
          <DotGrid color="#322b58" density={16} dotSize={0.14} offset={0.5} opacity={0.2} />
        </Halftone>
      );
    default:
      return (
        <>
          <Plasma colorA="#ffb52e" colorB="#ed4838" colorSpace="oklab" density={2} speed={0.22} intensity={1.05} warp={0.4} contrast={0.95} balance={53} />
          <Glow intensity={0.3} threshold={0.82} size={27}>
            <Prism position={{ x: 0.15, y: 0.25 }} splitPosition={{ x: 0.56, y: 0.52 }} intensity={0.48} spread={0.42} softness={0.44}>
              <Flower center={{ x: 0.53, y: 0.48 }} color="#fff0ab" radius={0.3} sides={7} innerRatio={0.37} rotation={14} softness={0.24} />
            </Prism>
          </Glow>
          <FloatingParticles count={240} speed={0.08} angle={89} randomness={0.45} twinkle={0.6} particleSize={1.4} softness={0.26} particleColor="#fff1bc" />
          <HexGrid colorA="#e84c49" colorB="#ffe5a0" cells={9} thickness={0.32} variation={0.16} opacity={0.28} />
        </>
      );
  }
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return direction === "left" ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M19 12H5m0 0 7 7m-7-7 7-7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m0 0-7-7m7 7-7 7" />
    </svg>
  );
}

function FullscreenIcon({ active }: { active: boolean }) {
  return active ? (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 3v5H3m13-5v5h5M3 16h5v5m13-5h-5v5" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5" />
    </svg>
  );
}

function SlidePoints({ points }: { points: { title: string; body: string }[] }) {
  return (
    <ul className="point-list">
      {points.map((point) => (
        <li className="point" key={point.title}>
          <span className="point-mark" aria-hidden="true" />
          <div>
            <h3>{point.title}</h3>
            <p>{point.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [isPresentation, setIsPresentation] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const presentationRef = useRef<HTMLElement>(null);
  const activeSlide = slides[activeIndex];
  const shaderIndex = activeIndex % shaderShowcases.length;
  const showcase = shaderShowcases[shaderIndex];
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === slides.length - 1;
  const hasFloatingLayers = [0, 2, 4, 6, 8, 10, 12].includes(shaderIndex);

  const goTo = useCallback((index: number) => {
    setActiveIndex(Math.max(0, Math.min(slides.length - 1, index)));
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrevious = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const openPresentation = useCallback(() => {
    setActiveIndex(0);
    setIsPresentation(true);
  }, []);

  const goToHome = useCallback(async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }

    setIsPresentation(false);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      await presentationRef.current?.requestFullscreen();
      return;
    }

    await document.exitFullscreen();
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isPresentation) {
        return;
      }

      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (
          target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName) ||
          (target.tagName === "BUTTON" && event.key === " ")
        )
      ) {
        return;
      }

      if (["ArrowRight", "PageDown", " "].includes(event.key)) {
        event.preventDefault();
        goNext();
      } else if (["ArrowLeft", "PageUp"].includes(event.key)) {
        event.preventDefault();
        goPrevious();
      } else if (event.key === "Home") {
        goTo(0);
      } else if (event.key === "End") {
        goTo(slides.length - 1);
      } else if (event.key.toLowerCase() === "f") {
        void toggleFullscreen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrevious, goTo, isPresentation, toggleFullscreen]);

  return isPresentation ? (
    <main className="stage" data-effect={activeIndex}>
      <section
        className={`presentation${isFullscreen ? " is-fullscreen" : ""}`}
        ref={presentationRef}
        aria-label="Web Shaders presentation"
      >
        <div className={`slide-art${activeIndex === 26 ? " demo-slide" : ""}`} data-effect={shaderIndex} aria-hidden="true">
          {activeIndex === 26 ? (
            <ShaderEffect />
          ) : (
            <Shader className="ambient-shader">
              <ShaderScene index={shaderIndex} />
            </Shader>
          )}
        </div>
        <header className="topbar">
          <button
            className="home-button"
            type="button"
            onClick={() => void goToHome()}
            aria-label="Back to main page"
            title="Back to main page"
          >
            <ArrowIcon direction="left" />
            <span>Home</span>
          </button>
          <p className="deck-label">{activeIndex === 26 ? "LIVE DEMO" : showcase.family}</p>
          <button
            className="icon-button fullscreen-button"
            type="button"
            onClick={() => void toggleFullscreen()}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
            title={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <FullscreenIcon active={isFullscreen} />
          </button>
        </header>

        <div className="slide-area" aria-live="polite" aria-atomic="true">
          {hasFloatingLayers && activeIndex !== 26 && (
            <div className="art-flow" data-effect={shaderIndex} aria-hidden="true">
              <span className="flow-orb flow-orb-one" />
              <span className="flow-orb flow-orb-two" />
              <span className="flow-prism" />
            </div>
          )}
          {activeIndex !== 26 && (
          <article
            className={`slide slide-${activeSlide.layout}${activeSlide.layout === "full" && activeSlide.cover ? " slide-cover" : ""}${activeSlide.layout === "full" && activeSlide.centered ? " slide-centered" : ""}`}
            key={activeIndex}
          >
            <div className="slide-copy">
              <div className="slide-heading">
                <p className="eyebrow"><span />{activeSlide.section}</p>
                <h1>{activeSlide.title.split("\n").map((line, index) => (
                  <span key={line}>{index > 0 && <br />}{line}</span>
                ))}</h1>
                {activeSlide.layout === "full" && activeSlide.description && (
                  <p className="slide-description">{activeSlide.description}</p>
                )}
                <p className="shader-credit">
                  <span>SHADER LAYERS</span>
                  {showcase.components.join(" · ")}
                </p>
              </div>

              {activeSlide.layout === "columns" ? (
                <div className="columns-grid">
                  {activeSlide.columns.map((column, index) => (
                    <section className="content-column" key={column.title}>
                      <div className="column-heading">
                        <span className="column-index">0{index + 1}</span>
                        <div>
                          <h2>{column.title}</h2>
                          {column.description && <p>{column.description}</p>}
                        </div>
                      </div>
                      <SlidePoints points={column.points} />
                    </section>
                  ))}
                </div>
              ) : (
                <>
                  {activeSlide.code && (
                    <pre className="code-sample"><code>{activeSlide.code}</code></pre>
                  )}
                  {activeSlide.points && (
                    <SlidePoints points={activeSlide.points} />
                  )}
                </>
              )}

              {activeSlide.layout === "full" && activeSlide.cover && (
                <a className="cover-link" href="https://shaders.com/" target="_blank" rel="noreferrer">
                  Explore Shaders.com <ArrowIcon direction="right" />
                </a>
              )}
              {activeSlide.layout === "full" && activeSlide.action && (
                <a
                  className="landing-button landing-button-primary slide-action"
                  href={activeSlide.action.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{activeSlide.action.label}</span>
                  <ArrowIcon direction="right" />
                </a>
              )}
            </div>

          </article>
          )}
        </div>

        <footer className="controls">
          <div className="slide-count" aria-label={`Slide ${activeIndex + 1} of ${slides.length}`}>
            <span className="current-count">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="count-divider">/</span>
            <span>{String(slides.length).padStart(2, "0")}</span>
          </div>
          <div className="progress-track" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${((activeIndex + 1) / slides.length) * 100}%` }} />
          </div>
          <div className="navigation">
            <button
              className="nav-button previous-button"
              type="button"
              onClick={goPrevious}
              disabled={isFirst}
              aria-label="Go to previous slide"
            >
              <ArrowIcon direction="left" /><span>Previous</span>
            </button>
            <button
              className="nav-button next-button"
              type="button"
              onClick={goNext}
              disabled={isLast}
              aria-label="Go to next slide"
            >
              <span>Next</span><ArrowIcon direction="right" />
            </button>
          </div>
        </footer>
      </section>

      <p className="keyboard-hint"><kbd>←</kbd><kbd>→</kbd> to navigate <span>·</span> <kbd>F</kbd> fullscreen</p>
    </main>
  ) : (
    <main className="landing-page">
      <div className="landing-art" aria-hidden="true">
        <Shader className="landing-shader">
          <ShaderScene index={0} />
        </Shader>
        <span className="landing-orb landing-orb-one" />
        <span className="landing-orb landing-orb-two" />
        <span className="landing-grid" />
      </div>
      <div className="landing-frame">
        <header className="landing-header">
        </header>
        <section className="landing-content" aria-labelledby="project-title">
          <p className="landing-kicker"><span /> GPU GRAPHICS · CREATIVE CODE · THE WEB</p>
          <h1 id="project-title">Web<span>Shaders</span></h1>
          <p className="landing-description">
            Explore the ideas, tools, and visual possibilities behind real-time shader art on the web.
          </p>
          <div className="landing-team">
            <span className="landing-team-label">PRESENTED BY</span>
            <p>Ursache Ana-Maria <span>·</span> Agheorghiesei Ioana-Miruna</p>
          </div>
          <div className="landing-actions">
            <button className="landing-button landing-button-primary" type="button" onClick={openPresentation}>
              <span>Explore the presentation</span>
              <ArrowIcon direction="right" />
            </button>
            <a
              className="landing-button landing-button-secondary"
              href="https://www.youtube.com/watch?v=pXCkIrZ2g6w"
              target="_blank"
              rel="noreferrer"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24">
                <path d="M21.2 7.3a2.8 2.8 0 0 0-2-2C17.5 4.8 12 4.8 12 4.8s-5.5 0-7.2.5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.3 12c0 1.6.2 3.2.5 4.7a2.8 2.8 0 0 0 2 2c1.7.5 7.2.5 7.2.5s5.5 0 7.2-.5a2.8 2.8 0 0 0 2-2c.3-1.5.5-3.1.5-4.7s-.2-3.2-.5-4.7Z" />
                <path d="m10 15.5 5-3.5-5-3.5v7Z" />
              </svg>
              <span>Watch on YouTube</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
