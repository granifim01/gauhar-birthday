(() => {
  "use strict";

  const LETTER = `Моя Гаухар,

сегодня день, когда мир стал красивее — потому что в нём появилась ты.

Ты — улыбка среди цветов, тишина в очках вечером и сила в серебре традиций. Раньше ты была Кенесбекова. Теперь — Далабаева. А для меня всегда — дом.

С днём рождения. Я люблю тебя.`;

  const REASONS = [
    { title: "Твоя улыбка", text: "Она делает любой день светлее — даже если за окном серо." },
    { title: "Твой ум", text: "С тобой интересно говорить обо всём: от жизни до самых странных идей." },
    { title: "Твоя мягкость", text: "Рядом с тобой я становлюсь спокойнее и смелее одновременно." },
    { title: "Твоя сила", text: "Ты умеешь держать мир — и всё равно остаёшься нежной." },
    { title: "Твой стиль", text: "Шляпа, очки, украшения — ты всегда выглядишь как история." },
    { title: "Мы", text: "Потому что «мы» — самое любимое слово, которое я знаю." },
  ];

  const QUIZ = [
    {
      q: "Что я чувствую, когда смотрю на тебя?",
      options: ["Спокойствие и восторг сразу", "Только голод", "Желание спорить", "Ничего особенного"],
      correct: 0,
      ok: "Именно. Ты — мой любимый парадокс.",
      bad: "Почти… но сердце знает ответ.",
    },
    {
      q: "Какой кадр из этих «самый ты» для меня?",
      options: ["Среди розовых цветов", "Только селфи без шляпы", "Случайный скриншот", "Фото без тебя"],
      correct: 0,
      ok: "Да. Цветы рядом с тобой всегда проигрывают.",
      bad: "Ну почти — но цветы всё же ближе к правде.",
    },
    {
      q: "Что я хочу на твой день рождения больше всего?",
      options: ["Чтобы ты улыбалась", "Новый телевизор себе", "Тишину без тебя", "Список дел"],
      correct: 0,
      ok: "Правильно. Твоя радость — лучший подарок.",
      bad: "Эх… попробуй ещё раз сердцем.",
    },
    {
      q: "Сколько раз я могу сказать «я тебя люблю»?",
      options: ["Бесконечно", "Раз в год", "Только в переписке", "Никогда"],
      correct: 0,
      ok: "Бесконечно. И этого всё равно мало.",
      bad: "Неверный ответ. Любовь не заканчивается.",
    },
  ];

  const TEASES = [
    "Ой, кнопка убежала…",
    "Не сегодня 💅",
    "Попробуй ещё раз — если поймаешь",
    "Эта кнопка знает правду",
    "Да? Серьёзно? 😄",
    "Кажется, вселенная против",
    "Лучше нажми «Нет»",
    "Я слишком быстрая для «Да»",
  ];

  /* ---------- helpers ---------- */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ---------- petals ---------- */
  function spawnPetals() {
    const wrap = $("#petals");
    if (!wrap || prefersReducedMotion()) return;
    for (let i = 0; i < 14; i++) {
      const p = document.createElement("span");
      p.className = "petal";
      p.style.left = `${Math.random() * 100}%`;
      p.style.animationDuration = `${8 + Math.random() * 10}s`;
      p.style.animationDelay = `${Math.random() * 8}s`;
      p.style.width = `${8 + Math.random() * 10}px`;
      p.style.height = `${12 + Math.random() * 14}px`;
      p.style.opacity = String(0.25 + Math.random() * 0.4);
      wrap.appendChild(p);
    }
  }

  /* ---------- reveal on scroll ---------- */
  function setupReveals() {
    const nodes = $$(".reveal");
    if (!("IntersectionObserver" in window) || prefersReducedMotion()) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
    );
    nodes.forEach((n) => io.observe(n));
  }

  /* ---------- typewriter ---------- */
  function typeLetter() {
    const el = $("#typewriter");
    if (!el) return;
    let i = 0;
    const speed = prefersReducedMotion() ? 0 : 28;

    function tick() {
      if (speed === 0) {
        el.textContent = LETTER;
        el.classList.add("is-done");
        return;
      }
      el.textContent = LETTER.slice(0, i);
      i += 1;
      if (i <= LETTER.length) {
        window.setTimeout(tick, speed + (LETTER[i - 1] === "\n" ? 180 : 0));
      } else {
        el.classList.add("is-done");
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          tick();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
  }

  /* ---------- reasons ---------- */
  function setupReasons() {
    const grid = $("#reasonsGrid");
    if (!grid) return;
    REASONS.forEach((r, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reason reveal";
      btn.innerHTML = `
        <span class="reason__front">
          <span class="reason__label">Причина ${idx + 1}</span>
          <span class="reason__title">${r.title}</span>
        </span>
        <span class="reason__back">
          <span class="reason__text">${r.text}</span>
        </span>`;
      btn.addEventListener("click", () => btn.classList.toggle("is-open"));
      grid.appendChild(btn);
    });
  }

  /* ---------- scratch card ---------- */
  function setupScratch() {
    const canvas = $("#scratchCanvas");
    const wrap = canvas?.parentElement;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    let revealed = false;
    let drawing = false;

    function resize() {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      paintCover(rect.width, rect.height);
    }

    function paintCover(w, h) {
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "#b8c5bc");
      g.addColorStop(0.5, "#9aaba0");
      g.addColorStop(1, "#87998e");
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "rgba(255,255,255,0.35)";
      for (let i = 0; i < 40; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * w, Math.random() * h, Math.random() * 3 + 0.5, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = "rgba(20,32,26,0.55)";
      ctx.font = "600 16px Manrope, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("Сотри здесь пальцем", w / 2, h / 2);
    }

    function pos(e) {
      const rect = canvas.getBoundingClientRect();
      const t = e.touches ? e.touches[0] : e;
      return { x: t.clientX - rect.left, y: t.clientY - rect.top };
    }

    function scratchAt(x, y) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();
    }

    function checkReveal() {
      if (revealed) return;
      const { width, height } = canvas;
      const data = ctx.getImageData(0, 0, width, height).data;
      let clear = 0;
      const step = 16;
      for (let i = 3; i < data.length; i += 4 * step) {
        if (data[i] < 40) clear += 1;
      }
      const total = data.length / (4 * step);
      if (clear / total > 0.48) {
        revealed = true;
        canvas.style.transition = "opacity 0.45s ease";
        canvas.style.opacity = "0";
        window.setTimeout(() => {
          canvas.style.pointerEvents = "none";
        }, 450);
      }
    }

    function start(e) {
      drawing = true;
      const p = pos(e);
      scratchAt(p.x, p.y);
      e.preventDefault();
    }
    function move(e) {
      if (!drawing) return;
      const p = pos(e);
      scratchAt(p.x, p.y);
      e.preventDefault();
    }
    function end() {
      if (!drawing) return;
      drawing = false;
      checkReveal();
    }

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);
    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    canvas.addEventListener("touchend", end);

    resize();
    window.addEventListener("resize", resize);
  }

  /* ---------- quiz ---------- */
  function setupQuiz() {
    const qEl = $("#quizQuestion");
    const optEl = $("#quizOptions");
    const progress = $("#quizProgress");
    const feedback = $("#quizFeedback");
    if (!qEl || !optEl) return;

    let idx = 0;
    let locked = false;

    function render() {
      locked = false;
      const item = QUIZ[idx];
      progress.textContent = `${idx + 1} / ${QUIZ.length}`;
      qEl.textContent = item.q;
      feedback.hidden = true;
      optEl.innerHTML = "";
      item.options.forEach((label, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "quiz__opt";
        b.textContent = label;
        b.addEventListener("click", () => {
          if (locked) return;
          locked = true;
          const ok = i === item.correct;
          b.classList.add(ok ? "is-correct" : "is-wrong");
          if (!ok) {
            const right = optEl.children[item.correct];
            if (right) right.classList.add("is-correct");
          }
          feedback.hidden = false;
          feedback.textContent = ok ? item.ok : item.bad;
          window.setTimeout(() => {
            idx = (idx + 1) % QUIZ.length;
            render();
          }, ok ? 1100 : 1400);
        });
        optEl.appendChild(b);
      });
    }

    render();
  }

  /* ---------- runaway YES / divorce ---------- */
  function setupDivorce() {
    const stage = $("#divorceStage");
    const yes = $("#yesBtn");
    const no = $("#noBtn");
    const tease = $("#divorceTease");
    const win = $("#divorceWin");
    if (!stage || !yes || !no) return;

    let moves = 0;

    function placeYes(x, y) {
      yes.style.left = `${x}px`;
      yes.style.top = `${y}px`;
    }

    function centerButtons() {
      const rect = stage.getBoundingClientRect();
      const yw = yes.offsetWidth;
      const yh = yes.offsetHeight;
      const nw = no.offsetWidth;
      placeYes(rect.width / 2 - yw - 18, rect.height / 2 - yh / 2 - 12);
      no.style.marginLeft = `${yw * 0.15}px`;
    }

    function flee(clientX, clientY) {
      const rect = stage.getBoundingClientRect();
      const pad = 8;
      const bw = yes.offsetWidth;
      const bh = yes.offsetHeight;
      const maxX = Math.max(pad, rect.width - bw - pad);
      const maxY = Math.max(pad, rect.height - bh - pad - 28);

      let x = Math.random() * maxX;
      let y = Math.random() * maxY;

      // push away from pointer if too close
      const lx = clientX - rect.left;
      const ly = clientY - rect.top;
      const cx = x + bw / 2;
      const cy = y + bh / 2;
      const dist = Math.hypot(cx - lx, cy - ly);
      if (dist < 90) {
        x = Math.min(maxX, Math.max(pad, x + (cx - lx) * 1.4));
        y = Math.min(maxY, Math.max(pad, y + (cy - ly) * 1.4));
      }

      placeYes(x, y);
      moves += 1;
      if (tease) tease.textContent = TEASES[moves % TEASES.length];
      if (navigator.vibrate) navigator.vibrate(12);
    }

    function onApproach(e) {
      const t = e.touches ? e.touches[0] : e;
      const rect = yes.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dist = Math.hypot(t.clientX - cx, t.clientY - cy);
      if (dist < 72) flee(t.clientX, t.clientY);
    }

    yes.addEventListener("mouseenter", (e) => flee(e.clientX, e.clientY));
    yes.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      flee(e.clientX, e.clientY);
    });
    stage.addEventListener("mousemove", onApproach);
    stage.addEventListener("touchmove", onApproach, { passive: true });

    // also dodge direct click attempts
    yes.addEventListener("click", (e) => {
      e.preventDefault();
      flee(e.clientX, e.clientY);
    });

    no.addEventListener("click", () => {
      stage.hidden = true;
      if (win) win.hidden = false;
      burstConfetti();
      if (navigator.vibrate) navigator.vibrate([20, 40, 20]);
      window.setTimeout(() => {
        $("#finale")?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      }, 900);
    });

    centerButtons();
    window.addEventListener("resize", centerButtons);
  }

  /* ---------- confetti ---------- */
  function burstConfetti() {
    const canvas = $("#confetti");
    if (!canvas || prefersReducedMotion()) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const colors = ["#c2186a", "#e84a8a", "#c9a66b", "#2f5a45", "#f7fbf8"];
    const parts = Array.from({ length: 120 }, () => ({
      x: Math.random() * window.innerWidth,
      y: -20 - Math.random() * 80,
      r: 3 + Math.random() * 5,
      vx: -2 + Math.random() * 4,
      vy: 2 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: -0.2 + Math.random() * 0.4,
      color: colors[(Math.random() * colors.length) | 0],
      life: 90 + Math.random() * 40,
    }));

    let frame = 0;
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      parts.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05;
        p.rot += p.vr;
        p.life -= 1;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.life / 100);
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
        ctx.restore();
      });
      frame += 1;
      if (frame < 160) requestAnimationFrame(draw);
      else ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
    requestAnimationFrame(draw);
  }

  /* ---------- gate / enter ---------- */
  function setupGate() {
    const gate = $("#gate");
    const app = $("#app");
    const btn = $("#enterBtn");
    if (!gate || !app || !btn) return;

    btn.addEventListener("click", () => {
      gate.classList.add("is-gone");
      app.hidden = false;
      app.classList.remove("is-locked");
      document.body.style.overflow = "";
      window.setTimeout(() => {
        gate.remove();
      }, 750);
      // kick reveals that might already be in view
      requestAnimationFrame(() => {
        $$(".hero .reveal").forEach((n, i) => {
          window.setTimeout(() => n.classList.add("is-in"), 120 + i * 90);
        });
      });
    });
  }

  function setupReplay() {
    $("#replayBtn")?.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" });
    });
  }

  /* ---------- boot ---------- */
  document.body.style.overflow = "hidden";
  spawnPetals();
  setupGate();
  setupReasons();
  setupReveals();
  typeLetter();
  setupScratch();
  setupQuiz();
  setupDivorce();
  setupReplay();
})();
