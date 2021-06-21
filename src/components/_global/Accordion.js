import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "react-spring";

const Accordion = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ref, bounds] = useMeasure();
  const spring = useSpring({
    height: isOpen ? bounds.height : 0,
  });

  return (
    <>
      <animated.div className="accordion" style={spring}>
        <div className="accordion__inner pb-2" ref={ref}>
          {children}
        </div>
      </animated.div>
      <button
        className="show-more"
        onClick={() => setIsOpen((isO) => !isO)}
        aria-expanded={isOpen}
      >
        Show {isOpen ? "less" : "more"}{" "}
        <span className={isOpen ? "rotated" : ""}></span>
      </button>
    </>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Accordion);
