import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  connections: number[];
}

interface CodeLine {
  x: number;
  y: number;
  text: string;
  opacity: number;
  speed: number;
  delay: number;
}

interface CircuitNode {
  x: number;
  y: number;
  connections: { x: number; y: number }[];
  pulseOffset: number;
}

export const TechBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    let codeLines: CodeLine[] = [];
    let circuitNodes: CircuitNode[] = [];

    const codeSnippets = [
      "const build = () => success;",
      "async function automate() {",
      "  return await Promise.all([",
      "import { innovation } from 'future';",
      "export default Solutions;",
      "if (problem) solve(it);",
      "const api = new RestAPI();",
      "npm run deploy --prod",
      "git push origin main",
      "docker compose up -d",
      "SELECT * FROM solutions;",
      "function optimize(code) {",
      "  return code.refactor();",
      "}",
      "<Component {...props} />",
      "useEffect(() => {}, []);",
      "const [state, setState] =",
      "await fetch('/api/data');",
      "module.exports = config;",
      "yarn build && yarn start",
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
      initCodeLines();
      initCircuits();
    };

    const initParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.2,
          connections: [],
        });
      }
    };

    const initCodeLines = () => {
      codeLines = [];
      const count = Math.floor(canvas.width / 200);
      for (let i = 0; i < count; i++) {
        codeLines.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          opacity: 0,
          speed: Math.random() * 0.3 + 0.1,
          delay: Math.random() * 200,
        });
      }
    };

    const initCircuits = () => {
      circuitNodes = [];
      const gridSize = 150;
      const cols = Math.ceil(canvas.width / gridSize);
      const rows = Math.ceil(canvas.height / gridSize);

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (Math.random() > 0.7) {
            const x = i * gridSize + Math.random() * 50 - 25;
            const y = j * gridSize + Math.random() * 50 - 25;
            const connections: { x: number; y: number }[] = [];

            // Create 1-3 connections
            const numConnections = Math.floor(Math.random() * 3) + 1;
            for (let k = 0; k < numConnections; k++) {
              const angle = Math.random() * Math.PI * 2;
              const distance = Math.random() * 100 + 50;
              connections.push({
                x: x + Math.cos(angle) * distance,
                y: y + Math.sin(angle) * distance,
              });
            }

            circuitNodes.push({
              x,
              y,
              connections,
              pulseOffset: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    let frame = 0;

    const drawParticles = () => {
      const connectionDistance = 120;

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 89%, 48%, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.3;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(199, 89%, 48%, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
    };

    const drawCodeLines = () => {
      ctx.font = "12px 'JetBrains Mono', 'Fira Code', monospace";

      codeLines.forEach((line) => {
        if (frame > line.delay) {
          // Fade in and out cycle
          const cycleLength = 400;
          const cyclePosition = ((frame - line.delay) * line.speed) % cycleLength;

          if (cyclePosition < 100) {
            line.opacity = cyclePosition / 100;
          } else if (cyclePosition > 300) {
            line.opacity = (cycleLength - cyclePosition) / 100;
          } else {
            line.opacity = 1;
          }

          // Move upward slowly
          line.y -= line.speed * 0.5;
          if (line.y < -20) {
            line.y = canvas.height + 20;
            line.x = Math.random() * canvas.width;
            line.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
          }

          ctx.fillStyle = `hsla(199, 89%, 48%, ${line.opacity * 0.15})`;
          ctx.fillText(line.text, line.x, line.y);
        }
      });
    };

    const drawCircuits = () => {
      const time = frame * 0.02;

      circuitNodes.forEach((node) => {
        const pulse = Math.sin(time + node.pulseOffset) * 0.5 + 0.5;

        // Draw connections with flowing effect
        node.connections.forEach((conn) => {
          const gradient = ctx.createLinearGradient(node.x, node.y, conn.x, conn.y);
          const flowPosition = (time + node.pulseOffset) % 1;

          gradient.addColorStop(0, `hsla(199, 89%, 48%, 0.05)`);
          gradient.addColorStop(Math.max(0, flowPosition - 0.1), `hsla(199, 89%, 48%, 0.05)`);
          gradient.addColorStop(flowPosition, `hsla(199, 89%, 48%, 0.3)`);
          gradient.addColorStop(Math.min(1, flowPosition + 0.1), `hsla(199, 89%, 48%, 0.05)`);
          gradient.addColorStop(1, `hsla(199, 89%, 48%, 0.05)`);

          ctx.beginPath();
          ctx.moveTo(node.x, node.y);

          // Create angular circuit path
          const midX = (node.x + conn.x) / 2;
          if (Math.abs(node.x - conn.x) > Math.abs(node.y - conn.y)) {
            ctx.lineTo(midX, node.y);
            ctx.lineTo(midX, conn.y);
          } else {
            const midY = (node.y + conn.y) / 2;
            ctx.lineTo(node.x, midY);
            ctx.lineTo(conn.x, midY);
          }
          ctx.lineTo(conn.x, conn.y);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Draw endpoint node
          ctx.beginPath();
          ctx.arc(conn.x, conn.y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(199, 89%, 48%, ${0.2 + pulse * 0.2})`;
          ctx.fill();
        });

        // Draw main node with pulse
        ctx.beginPath();
        ctx.arc(node.x, node.y, 3 + pulse * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 89%, 48%, ${0.3 + pulse * 0.3})`;
        ctx.fill();

        // Glow effect
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8 + pulse * 4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(199, 89%, 48%, ${0.05 + pulse * 0.05})`;
        ctx.fill();
      });
    };

    const drawBinaryRain = () => {
      const cols = Math.floor(canvas.width / 30);
      ctx.font = "10px monospace";

      for (let i = 0; i < cols; i++) {
        const x = i * 30;
        const y = ((frame * 0.5 + i * 50) % (canvas.height + 100)) - 50;
        const char = Math.random() > 0.5 ? "1" : "0";
        const opacity = 0.05 + Math.sin(frame * 0.01 + i) * 0.03;

        ctx.fillStyle = `hsla(199, 89%, 48%, ${opacity})`;
        ctx.fillText(char, x, y);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw layers
      drawBinaryRain();
      drawCircuits();
      drawCodeLines();
      drawParticles();

      frame++;
      animationId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8 }}
    />
  );
};
