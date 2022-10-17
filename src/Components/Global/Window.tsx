import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./Window.scss";

interface Props {
  label: string;
  children: React.ReactNode;
  size: string;
  isAnimated?: boolean;
  dismissed?: boolean;
}

const Window: React.FC<Props> = ({
  label,
  children,
  size,
  dismissed = false,
  isAnimated = false,
}) => {
  // Spring animation code
  const fnSmall = (): any => ({
    transform: `translate(-50%, -50%)`,
    from: {
      transform: `translate(-300%, -50%)`,
    },
    config: {
      duration: 400,
    },
  });
  const fnMedium = (): any => ({
    transform: `translate(-50%, -50%)`,
    from: {
      transform: `translate(-300%, -50%)`,
    },
    config: {
      duration: 400,
    },
  });
  const fnLarge = (): any => ({
    transform: `translate(-50%, -50%)`,
    from: {
      transform: `translate(-300%, -50%)`,
    },
    config: {
      duration: 400,
    },
  });

  const fnSmallDismiss = (): any => ({
    transform: `translate(300%, -50%)`,
    from: {
      transform: `translate(-50%, -50%)`,
    },
    config: {
      duration: 400,
    },
  });
  const fnMediumDismiss = (): any => ({
    transform: `translate(300%, -50%)`,
    from: {
      transform: `translate(-50%, -50%)`,
    },
    config: {
      duration: 500,
    },
  });
  const fnLargeDismiss = (): any => ({
    transform: `translate(300%, -50%)`,
    from: {
      transform: `translate(-50%, -50%)`,
    },
    config: {
      duration: 600,
    },
  });

  const springFn = (): any => {
    if (size === "small-window" && isAnimated && !dismissed) {
      return fnSmall();
    } else if (size === "medium-window" && isAnimated && !dismissed) {
      return fnMedium();
    } else if (size === "large-window" && isAnimated && !dismissed) {
      return fnLarge();
    } else if (size === "large-window" && isAnimated && dismissed) {
      return fnLargeDismiss();
    } else if (size === "medium-window" && isAnimated && dismissed) {
      return fnMediumDismiss();
    } else if (size === "small-window" && isAnimated && dismissed) {
      return fnSmallDismiss();
    } else {
      return null;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [spring, setSpring] = useState<any>(useSpring(springFn()));

  return (
    <animated.div style={{ ...spring }} className={size}>
      <div className="inner-border">
        <div className="document-bar">
          <div className="line-container">
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
          </div>
          <div className="header-title">{label}</div>
          <div className="line-container">
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
            <div className="header-line" />
          </div>
        </div>
        <div className="inner-inner-border">{children}</div>
      </div>
    </animated.div>
  );
};

export default Window;
