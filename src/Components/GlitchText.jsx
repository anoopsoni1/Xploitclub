import React, { useEffect, useRef } from 'react';

// Helper function to extract text content from React children
const extractText = (children) => {
  // Handle null, undefined, boolean values
  if (children == null || children === undefined || children === false || children === true) {
    return '';
  }
  
  // Handle primitive types
  if (typeof children === 'string' || typeof children === 'number') {
    return String(children);
  }
  
  // Handle arrays
  if (Array.isArray(children)) {
    return children.map(child => extractText(child)).join('');
  }
  
  // Handle React elements
  if (React.isValidElement(children)) {
    // Handle <br /> tags as newlines
    if (children.type === 'br') {
      return '\n';
    }
    // Handle React Fragments
    if (children.type === React.Fragment || children.type === Symbol.for('react.fragment')) {
      if (children.props && children.props.children) {
        return extractText(children.props.children);
      }
      return '';
    }
    // Recursively extract text from children
    if (children.props && children.props.children) {
      return extractText(children.props.children);
    }
    return '';
  }
  
  // Handle any other object types - return empty string to avoid [object Object]
  if (typeof children === 'object') {
    return '';
  }
  
  return '';
};

const FuzzyText = ({
  children,
  fontSize = 'clamp(2rem, 10vw, 10rem)',
  fontWeight = 900,
  fontFamily = 'inherit',
  color = '#fff',
  enableHover = true,
  baseIntensity = 0.18,
  hoverIntensity = 0.5,
  fuzzRange = 30,
  fps = 60,
  direction = 'horizontal',
  transitionDuration = 0,
  clickEffect = false,
  glitchMode = false,
  glitchInterval = 2000,
  glitchDuration = 200,
  gradient = null,
  letterSpacing = 0,
  className = ''
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    let isCancelled = false;
    let glitchTimeoutId;
    let glitchEndTimeoutId;
    let clickTimeoutId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const init = async () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const computedFontFamily =
        fontFamily === 'inherit' ? window.getComputedStyle(canvas).fontFamily || 'sans-serif' : fontFamily;

      const fontSizeStr = typeof fontSize === 'number' ? `${fontSize}px` : fontSize;
      const fontString = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;

      try {
        await document.fonts.load(fontString);
      } catch {
        await document.fonts.ready;
      }
      if (isCancelled) return;

      let numericFontSize;
      if (typeof fontSize === 'number') {
        numericFontSize = fontSize;
      } else {
        const temp = document.createElement('span');
        temp.style.fontSize = fontSize;
        document.body.appendChild(temp);
        const computedSize = window.getComputedStyle(temp).fontSize;
        numericFontSize = parseFloat(computedSize);
        document.body.removeChild(temp);
      }

      const text = extractText(children);
      const lines = text.split('\n');

      const offscreen = document.createElement('canvas');
      const offCtx = offscreen.getContext('2d');
      if (!offCtx) return;

      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';

      // Calculate dimensions for all lines
      let maxWidth = 0;
      const lineMetrics = [];
      const lineHeight = numericFontSize * 1.2; // Line height multiplier
      
      for (const line of lines) {
        let lineWidth = 0;
        let actualLeft = 0;
        let actualAscent = numericFontSize;
        let actualDescent = numericFontSize * 0.2;
        let boundingWidth = 0;
        let boundingHeight = numericFontSize * 1.2;

        if (line.trim() !== '') {
          if (letterSpacing !== 0) {
            for (const char of line) {
              lineWidth += offCtx.measureText(char).width + letterSpacing;
            }
            lineWidth -= letterSpacing;
          } else {
            lineWidth = offCtx.measureText(line).width;
          }

          const metrics = offCtx.measureText(line);
          actualLeft = metrics.actualBoundingBoxLeft ?? 0;
          const actualRight = letterSpacing !== 0 ? lineWidth : (metrics.actualBoundingBoxRight ?? metrics.width);
          actualAscent = metrics.actualBoundingBoxAscent ?? numericFontSize;
          actualDescent = metrics.actualBoundingBoxDescent ?? numericFontSize * 0.2;

          boundingWidth = Math.ceil(letterSpacing !== 0 ? lineWidth : actualLeft + actualRight);
          boundingHeight = Math.ceil(actualAscent + actualDescent);
        }

        lineMetrics.push({
          text: line,
          width: boundingWidth,
          height: boundingHeight,
          ascent: actualAscent,
          left: actualLeft,
          fullWidth: lineWidth
        });

        maxWidth = Math.max(maxWidth, boundingWidth);
      }

      const actualAscent = lineMetrics[0]?.ascent ?? numericFontSize;
      const firstLine = lineMetrics[0];
      const actualDescent = (firstLine?.height != null && firstLine?.ascent != null)
        ? firstLine.height - firstLine.ascent
        : numericFontSize * 0.2;
      const textBoundingWidth = maxWidth;
      const tightHeight = lines.length > 1 
        ? (lineHeight * lines.length) 
        : Math.ceil(actualAscent + actualDescent);

      const extraWidthBuffer = 10;
      const offscreenWidth = textBoundingWidth + extraWidthBuffer;

      offscreen.width = offscreenWidth;
      offscreen.height = tightHeight;

      const xOffset = extraWidthBuffer / 2;
      offCtx.font = `${fontWeight} ${fontSizeStr} ${computedFontFamily}`;
      offCtx.textBaseline = 'alphabetic';

      if (gradient && Array.isArray(gradient) && gradient.length >= 2) {
        const grad = offCtx.createLinearGradient(0, 0, offscreenWidth, 0);
        gradient.forEach((c, i) => grad.addColorStop(i / (gradient.length - 1), c));
        offCtx.fillStyle = grad;
      } else {
        offCtx.fillStyle = color;
      }

      // Render each line
      lines.forEach((line, index) => {
        if (line.trim() === '') return; // Skip empty lines but they still take up space
        
        const metrics = lineMetrics[index];
        const yPos = actualAscent + (index * lineHeight);
        
        if (letterSpacing !== 0) {
          let xPos = xOffset;
          for (const char of line) {
            offCtx.fillText(char, xPos, yPos);
            xPos += offCtx.measureText(char).width + letterSpacing;
          }
        } else {
          offCtx.fillText(line, xOffset - metrics.left, yPos);
        }
      });

      const horizontalMargin = fuzzRange + 20;
      const verticalMargin = direction === 'vertical' || direction === 'both' ? fuzzRange + 10 : 0;
      canvas.width = offscreenWidth + horizontalMargin * 2;
      canvas.height = tightHeight + verticalMargin * 2;
      ctx.translate(horizontalMargin, verticalMargin);

      const interactiveLeft = horizontalMargin + xOffset;
      const interactiveTop = verticalMargin;
      const interactiveRight = interactiveLeft + textBoundingWidth;
      const interactiveBottom = interactiveTop + tightHeight;

      let isHovering = false;
      let isClicking = false;
      let isGlitching = false;
      let currentIntensity = baseIntensity;
      let targetIntensity = baseIntensity;
      let lastFrameTime = 0;
      const frameDuration = 1000 / fps;

      const startGlitchLoop = () => {
        if (!glitchMode || isCancelled) return;
        glitchTimeoutId = setTimeout(() => {
          if (isCancelled) return;
          isGlitching = true;
          glitchEndTimeoutId = setTimeout(() => {
            isGlitching = false;
            startGlitchLoop();
          }, glitchDuration);
        }, glitchInterval);
      };

      if (glitchMode) startGlitchLoop();

      const run = timestamp => {
        if (isCancelled) return;

        if (timestamp - lastFrameTime < frameDuration) {
          animationFrameId = window.requestAnimationFrame(run);
          return;
        }
        lastFrameTime = timestamp;

        ctx.clearRect(
          -fuzzRange - 20,
          -fuzzRange - 10,
          offscreenWidth + 2 * (fuzzRange + 20),
          tightHeight + 2 * (fuzzRange + 10)
        );

        if (isClicking) {
          targetIntensity = 1;
        } else if (isGlitching) {
          targetIntensity = 1;
        } else if (isHovering) {
          targetIntensity = hoverIntensity;
        } else {
          targetIntensity = baseIntensity;
        }

        if (transitionDuration > 0) {
          const step = 1 / (transitionDuration / frameDuration);
          if (currentIntensity < targetIntensity) {
            currentIntensity = Math.min(currentIntensity + step, targetIntensity);
          } else if (currentIntensity > targetIntensity) {
            currentIntensity = Math.max(currentIntensity - step, targetIntensity);
          }
        } else {
          currentIntensity = targetIntensity;
        }

        for (let j = 0; j < tightHeight; j++) {
          let dx = 0,
            dy = 0;
          if (direction === 'horizontal' || direction === 'both') {
            dx = Math.floor(currentIntensity * (Math.random() - 0.5) * fuzzRange);
          }
          if (direction === 'vertical' || direction === 'both') {
            dy = Math.floor(currentIntensity * (Math.random() - 0.5) * fuzzRange * 0.5);
          }
          ctx.drawImage(offscreen, 0, j, offscreenWidth, 1, dx, j + dy, offscreenWidth, 1);
        }
        animationFrameId = window.requestAnimationFrame(run);
      };

      animationFrameId = window.requestAnimationFrame(run);

      const isInsideTextArea = (x, y) => {
        return x >= interactiveLeft && x <= interactiveRight && y >= interactiveTop && y <= interactiveBottom;
      };

      const handleMouseMove = e => {
        if (!enableHover) return;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleMouseLeave = () => {
        isHovering = false;
      };

      const handleClick = () => {
        if (!clickEffect) return;
        isClicking = true;
        clearTimeout(clickTimeoutId);
        clickTimeoutId = setTimeout(() => {
          isClicking = false;
        }, 150);
      };

      const handleTouchMove = e => {
        if (!enableHover) return;
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        isHovering = isInsideTextArea(x, y);
      };

      const handleTouchEnd = () => {
        isHovering = false;
      };

      if (enableHover) {
        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        canvas.addEventListener('touchmove', handleTouchMove, { passive: false });
        canvas.addEventListener('touchend', handleTouchEnd);
      }

      if (clickEffect) {
        canvas.addEventListener('click', handleClick);
      }

      const cleanup = () => {
        window.cancelAnimationFrame(animationFrameId);
        clearTimeout(glitchTimeoutId);
        clearTimeout(glitchEndTimeoutId);
        clearTimeout(clickTimeoutId);
        if (enableHover) {
          canvas.removeEventListener('mousemove', handleMouseMove);
          canvas.removeEventListener('mouseleave', handleMouseLeave);
          canvas.removeEventListener('touchmove', handleTouchMove);
          canvas.removeEventListener('touchend', handleTouchEnd);
        }
        if (clickEffect) {
          canvas.removeEventListener('click', handleClick);
        }
      };

      canvas.cleanupFuzzyText = cleanup;
    };

    init();

    return () => {
      isCancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      clearTimeout(glitchTimeoutId);
      clearTimeout(glitchEndTimeoutId);
      clearTimeout(clickTimeoutId);
      if (canvas && canvas.cleanupFuzzyText) {
        canvas.cleanupFuzzyText();
      }
    };
  }, [
    children,
    fontSize,
    fontWeight,
    fontFamily,
    color,
    enableHover,
    baseIntensity,
    hoverIntensity,
    fuzzRange,
    fps,
    direction,
    transitionDuration,
    clickEffect,
    glitchMode,
    glitchInterval,
    glitchDuration,
    gradient,
    letterSpacing
  ]);

  return <canvas ref={canvasRef} className={className} />;
};

export default FuzzyText;
