"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.inc = _this.inc.bind(_this);
        _this.dec = _this.dec.bind(_this);
        _this.clr = _this.clr.bind(_this);

        _this.state = {
            counter: 0
        };
        return _this;
    }

    _createClass(App, [{
        key: "inc",
        value: function inc() {
            this.setState(function (prevState) {
                return { counter: prevState.counter + 1 };
            });
        }
    }, {
        key: "dec",
        value: function dec() {
            if (this.state.counter > 0) this.setState(function (prevState) {
                return { counter: prevState.counter - 1 };
            });
        }
    }, {
        key: "clr",
        value: function clr() {
            this.setState(function () {
                return { counter: 0 };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "App" },
                React.createElement(
                    "h1",
                    null,
                    "Counter: ",
                    this.state.counter
                ),
                React.createElement(
                    "button",
                    { onClick: this.inc },
                    " + "
                ),
                React.createElement(
                    "button",
                    { disabled: this.state.counter === 0, onClick: this.dec },
                    " - "
                ),
                React.createElement(
                    "button",
                    { disabled: this.state.counter === 0, onClick: this.clr },
                    " C "
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
