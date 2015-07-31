'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var modalClass = {
  position: 'fixed',
  'font-family': 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  'z-index': 99999,
  opacity: 0,
  transition: 'opacity 400ms ease-in',
  opacity: 1,
  'pointer-events': 'auto'
};

exports.modalClass = modalClass;
var containerClass = {
  width: '400px',
  position: 'relative',
  margin: '10% auto',
  padding: '5px 20px 13px 20px',
  background: '#fff'
};

exports.containerClass = containerClass;
var closeClass = {
  background: '#606061',
  color: '#FFFFFF',
  'line-height': '25px',
  position: 'absolute',
  right: '-12px',
  'text-align': 'center',
  top: '-10px',
  width: '24px',
  'text-decoration': 'none',
  'font-weight': 'bold',
  borderRadius: '12px',
  boxDhadow: '1px 1px 3px #000',
  cursor: 'pointer'
};

exports.closeClass = closeClass;

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this);
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this);
  }

  _createClass(Modal, [{
    key: 'hideOnOuterClick',
    value: function hideOnOuterClick(event) {
      if (!this.props.closeOnOuterClick) return;
      if (event.target.dataset.modal) this.props.onClose(event);
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.props.show) return null;
      var modal = modalClass;
      var container = containerClass;

      if (this.props.className) {
        modal = null;
        container = null;
      }

      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { style: modal, onClick: this.hideOnOuterClick, 'data-modal': "true" }),
        _react2['default'].createElement(
          'div',
          { style: container },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
})(_react2['default'].Component);

exports['default'] = Modal;