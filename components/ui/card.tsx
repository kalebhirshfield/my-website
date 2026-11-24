"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

const cardStyles =
  "relative overflow-hidden rounded-xl border border-border/80 bg-card/80 text-card-foreground shadow-[0_10px_30px_-18px_rgba(0,0,0,0.9)] backdrop-blur-md transition-all duration-200 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary/40 before:to-transparent";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({
  className,
  onClick,
  onKeyDown,
  style,
  tabIndex,
  children,
  ...props
}, ref) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const expandedCardRef = React.useRef<HTMLDivElement>(null);
  const dialogRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const closeTimeoutRef = React.useRef<number | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const [origin, setOrigin] = React.useState({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const finishClose = React.useCallback(() => {
    if (closeTimeoutRef.current !== null) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(false);
    setIsExpanded(false);
    setIsClosing(false);
    window.requestAnimationFrame(() => cardRef.current?.focus());
  }, []);

  const closeCard = React.useCallback(() => {
    if (!isOpen || isClosing) return;

    resetParallax();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finishClose();
      return;
    }

    setIsClosing(true);
    setIsExpanded(false);
    closeTimeoutRef.current = window.setTimeout(finishClose, 500);
  }, [finishClose, isClosing, isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeCard();
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [closeCard, isOpen]);

  React.useEffect(
    () => () => {
      if (closeTimeoutRef.current !== null) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    },
    []
  );

  const openCard = React.useCallback(() => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    setOrigin({
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
      centerX: (window.innerWidth - rect.width) / 2,
      centerY: (window.innerHeight - rect.height) / 2,
    });
    setIsExpanded(false);
    setIsClosing(false);
    setIsOpen(true);
    window.requestAnimationFrame(() => {
      setIsExpanded(true);
      closeButtonRef.current?.focus();
    });
  }, []);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || isOpen) return;

    if (
      event.target instanceof Element &&
      event.target.closest(
        "a, button, input, textarea, select, [contenteditable='true']"
      )
    ) {
      return;
    }

    openCard();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event);
    if (
      event.defaultPrevented ||
      event.target !== event.currentTarget ||
      (event.key !== "Enter" && event.key !== " ")
    ) {
      return;
    }

    event.preventDefault();
    if (!isOpen) openCard();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const card = expandedCardRef.current;
    card?.style.setProperty("--card-tilt-x", `${y * 8}deg`);
    card?.style.setProperty("--card-tilt-y", `${-x * 8}deg`);
    card?.style.setProperty("--card-move-x", `${-x * 10}px`);
    card?.style.setProperty("--card-move-y", `${-y * 10}px`);
  };

  const resetParallax = () => {
    const card = expandedCardRef.current;
    card?.style.setProperty("--card-tilt-x", "0deg");
    card?.style.setProperty("--card-tilt-y", "0deg");
    card?.style.setProperty("--card-move-x", "0px");
    card?.style.setProperty("--card-move-y", "0px");
  };

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (
      isClosing &&
      event.target === event.currentTarget &&
      event.propertyName === "transform"
    ) {
      finishClose();
    }
  };

  const setCardRef = (node: HTMLDivElement | null) => {
    cardRef.current = node;
    if (typeof ref === "function") ref(node);
    else if (ref) ref.current = node;
  };

  const expandedCard = isOpen && isMounted
    ? createPortal(
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded card"
          className="pointer-events-none fixed inset-0 z-50"
        >
          <div
            aria-hidden="true"
            className={cn(
              "card-expand-backdrop absolute inset-0 pointer-events-auto bg-background/70 backdrop-blur-sm",
              isExpanded ? "opacity-100" : "opacity-0"
            )}
            onClick={closeCard}
          />
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close expanded card"
            className="pointer-events-auto fixed right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-lg border border-border/80 bg-secondary/60 text-muted-foreground transition hover:-translate-y-0.5 hover:border-primary/50 hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            onClick={closeCard}
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <div
            className="card-expand-origin pointer-events-auto absolute left-0 top-0"
            style={{
              width: origin.width,
              height: origin.height,
              transform: `translate3d(${isExpanded ? origin.centerX : origin.left}px, ${isExpanded ? origin.centerY : origin.top}px, 0)`,
            }}
            onTransitionEnd={handleTransitionEnd}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetParallax}
          >
            <div
              ref={expandedCardRef}
              className={cn(
                cardStyles,
                "card-parallax-panel h-full w-full",
                className
              )}
              style={style}
              {...props}
            >
              {children}
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

  return (
    <>
      {isOpen ? (
        <div
          aria-hidden="true"
          className="pointer-events-none"
          style={{ width: origin.width, height: origin.height }}
        />
      ) : (
        <div
          ref={setCardRef}
          className={cn(
            cardStyles,
            "cursor-pointer hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_16px_34px_-18px_rgba(0,0,0,0.95)]",
            className
          )}
          {...props}
          style={style}
          aria-expanded={false}
          aria-haspopup="dialog"
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          tabIndex={tabIndex ?? 0}
        >
          {children}
        </div>
      )}
      {expandedCard}
    </>
  );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
