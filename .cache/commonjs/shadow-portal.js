"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports.ShadowPortal = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

const ShadowPortal = ({
  children,
  identifier
}) => {
  const mountNode = React.useRef(null);
  const portalNode = React.useRef(null);
  const shadowNode = React.useRef(null);
  const [, forceUpdate] = React.useState();
  React.useLayoutEffect(() => {
    const ownerDocument = mountNode.current.ownerDocument;
    portalNode.current = ownerDocument.createElement(identifier);
    shadowNode.current = portalNode.current.attachShadow({
      mode: `open`
    });
    ownerDocument.body.appendChild(portalNode.current);
    forceUpdate({});
    return () => {
      if (portalNode.current && portalNode.current.ownerDocument) {
        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
      }
    };
  }, []);
  return shadowNode.current ? /*#__PURE__*/(0, _reactDom.createPortal)(children, shadowNode.current) : /*#__PURE__*/React.createElement("span", {
    ref: mountNode
  });
};

exports.ShadowPortal = ShadowPortal;