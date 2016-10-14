webpackJsonp([3],{

/***/ 926:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _index = __webpack_require__(179);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _index3 = __webpack_require__(184);
	
	var _index4 = _interopRequireDefault(_index3);
	
	var _react2 = __webpack_require__(15);
	
	var React = _interopRequireWildcard(_react2);
	
	var _index5 = __webpack_require__(185);
	
	var _index6 = _interopRequireDefault(_index5);
	
	var _createClass = function () {
	    function defineProperties(target, props) {
	        for (var i = 0; i < props.length; i++) {
	            var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	        }
	    }return function (Constructor, protoProps, staticProps) {
	        if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	    };
	}();
	
	var _reactBootstrap = __webpack_require__(670);
	
	var _duck = __webpack_require__(927);
	
	var _reactRedux = __webpack_require__(395);
	
	function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	        return obj;
	    } else {
	        var newObj = {};if (obj != null) {
	            for (var key in obj) {
	                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	            }
	        }newObj.default = obj;return newObj;
	    }
	}
	
	function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	    }
	}
	
	function _possibleConstructorReturn(self, call) {
	    if (!self) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var _components = {
	    DataSetPage: {
	        displayName: 'DataSetPage'
	    }
	};
	
	var _UsersJiaojiaoReposCbioportalFrontendNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	    filename: '/Users/jiaojiao/repos/cbioportal-frontend/src/pages/datasetView/DataSetPage.jsx',
	    components: _components,
	    locals: [module],
	    imports: [React.default]
	});
	
	var _UsersJiaojiaoReposCbioportalFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	    filename: '/Users/jiaojiao/repos/cbioportal-frontend/src/pages/datasetView/DataSetPage.jsx',
	    components: _components,
	    locals: [],
	    imports: [React.default, _index2.default]
	});
	
	function _wrapComponent(id) {
	    return function (Component) {
	        return _UsersJiaojiaoReposCbioportalFrontendNode_modulesReactTransformHmrLibIndexJs2(_UsersJiaojiaoReposCbioportalFrontendNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	    };
	}
	
	var DataSetPage = _wrapComponent('DataSetPage')(function (_React$Component) {
	    _inherits(DataSetPage, _React$Component);
	
	    function DataSetPage() {
	        _classCallCheck(this, DataSetPage);
	
	        return _possibleConstructorReturn(this, (DataSetPage.__proto__ || Object.getPrototypeOf(DataSetPage)).apply(this, arguments));
	    }
	
	    _createClass(DataSetPage, [{
	        key: 'render',
	        value: function render() {
	            var rows = [];
	            this.props.datasets.forEach(function (item) {
	                rows.push(React.createElement('tr', null, React.createElement('td', null, item.get('name')), React.createElement('td', null, item.get('reference')), React.createElement('td', null, item.get('all')), React.createElement('td', null, item.get('sequenced')), React.createElement('td', null, item.get('cna')), React.createElement('td', null, item.get('tumor_RNA_seq')), React.createElement('td', null, item.get('tumor_RNA_microarray')), React.createElement('td', null, item.get('tumor_miRNA')), React.createElement('td', null, item.get('methylation')), React.createElement('td', null, item.get('RPPA')), React.createElement('td', null, item.get('complete'))));
	            });
	
	            return React.createElement(_reactBootstrap.Table, { striped: true }, React.createElement('thead', null, React.createElement('tr', null, React.createElement('th', null, 'Name'), React.createElement('th', null, 'reference'), React.createElement('th', null, 'all'), React.createElement('th', null, 'sequenced'), React.createElement('th', null, 'CNA'), React.createElement('th', null, 'tumor_RNA_seq'), React.createElement('th', null, 'tumor_RNA_microarray'), React.createElement('th', null, 'tumor_miRNA'), React.createElement('th', null, 'methylation'), React.createElement('th', null, 'RPPA'), React.createElement('th', null, 'complete'))), React.createElement('tbody', null, rows));
	
	            //return <a href="https://github.com/cBioPortal/datahub/blob/master/public/paac_jhu_2014.tar.gz" download>Download file</a>
	        }
	    }]);
	
	    return DataSetPage;
	}(React.Component));
	
	exports.default = DataSetPage;
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(178)(module)))

/***/ },

/***/ 927:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mapStateToProps = exports.actionCreators = undefined;
	exports.default = reducer;
	exports.loadDatasetsInfo = loadDatasetsInfo;
	
	var _immutable = __webpack_require__(647);
	
	var _immutable2 = _interopRequireDefault(_immutable);
	
	var _getDatasetsInfo = __webpack_require__(928);
	
	var _getDatasetsInfo2 = _interopRequireDefault(_getDatasetsInfo);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Reducer
	/**
	 * Created by jiaojiao on 10/14/16.
	 */
	function reducer() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	    switch (action.type) {
	        // do reducer stuff
	
	        case actionTypes.FETCH:
	
	            switch (action.meta.status) {
	
	                case 'fetching':
	
	                    return state.set('status', 'fetching');
	
	                case 'success':
	
	                    return state.withMutations(function (state) {
	                        state.set('status', 'complete');
	                        state.set('datasets', _immutable2.default.List(action.payload.datasets));
	                    });
	
	                case 'error':
	
	                    return state.set('status', 'error');
	
	                default:
	
	                    return state;
	
	            }
	
	    }
	};
	
	function loadDatasetsInfo() {
	    // this is a thunk
	    return function (dispatch) {
	        (0, _getDatasetsInfo2.default)().then(function (data) {
	            dispatch({
	                type: actionTypes.FETCH,
	                meta: { status: 'success' },
	                payload: data
	            });
	        });
	
	        dispatch({
	            type: actionTypes.FETCH,
	            meta: { status: 'fetching' }
	        });
	    };
	};
	
	var actionCreators = exports.actionCreators = {
	    loadDatasetsInfo: loadDatasetsInfo
	};
	
	var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state) {
	    return {
	        datasets: state.get('datasetView').get('datasets')
	    };
	};

/***/ },

/***/ 928:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDatasetsInfo;
	
	var _mockData = __webpack_require__(929);
	
	var _mockData2 = _interopRequireDefault(_mockData);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getDatasetsInfo() {
	  return _mockData2.default.studies;
	} /**
	   * Created by jiaojiao on 10/14/16.
	   */

/***/ },

/***/ 929:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var mockData = exports.mockData = {
	    studies: [{
	        'name': 'Acinar Cell Carcinoma of the Pancreas (Johns Hopkins, J Pathol 2014)',
	        'link': 'https://github.com/cBioPortal/datahub/blob/master/public/ov_tcga.tar.gz',
	        'reference': 'Jial et al. J Pathol 2014',
	        'all': '256',
	        'sequenced': '210',
	        'cna': '10',
	        'tumor_RNA_seq': '34',
	        'tumor_RNA_microarray': '4',
	        'tumor_miRNA': '10',
	        'methylation': '12',
	        'RPPA': '78',
	        'complete': '200'
	    }, {
	        'name': 'Bladder Cancer (MSKCC, JCO 2013)',
	        'link': 'https://github.com/cBioPortal/datahub/blob/master/public/ov_tcga.tar.gz',
	        'reference': 'Iyer et al. JCO 2013',
	        'all': '754',
	        'sequenced': '544',
	        'cna': '41',
	        'tumor_RNA_seq': '412',
	        'tumor_RNA_microarray': '57',
	        'tumor_miRNA': '88',
	        'methylation': '45',
	        'RPPA': '54',
	        'complete': '78'
	    }, {
	        'name': 'Cholangiocarcinoma (TCGA, Provisional)',
	        'link': 'https://github.com/cBioPortal/datahub/blob/master/public/ov_tcga.tar.gz',
	        'reference': 'Pereira et al. Nat Commun 2016',
	        'all': '564',
	        'sequenced': '45',
	        'cna': '56',
	        'tumor_RNA_seq': '23',
	        'tumor_RNA_microarray': '23',
	        'tumor_miRNA': '21',
	        'methylation': '45',
	        'RPPA': '56',
	        'complete': '78'
	    }, {
	        'name': 'Lung Squamous Cell Carcinoma (TCGA, Provisional)',
	        'link': 'https://github.com/cBioPortal/datahub/blob/master/public/ov_tcga.tar.gz',
	        'reference': 'Li et al, Clin Cancer Res 2015',
	        'all': '542',
	        'sequenced': '45',
	        'cna': '235',
	        'tumor_RNA_seq': '78',
	        'tumor_RNA_microarray': '98',
	        'tumor_miRNA': '78',
	        'methylation': '45',
	        'RPPA': '57',
	        'complete': '39'
	    }, {
	        'name': 'Melanoma (Broad/Dana Farber, Nature 2012)',
	        'link': 'https://github.com/cBioPortal/datahub/blob/master/public/ov_tcga.tar.gz',
	        'reference': 'Agrawal et al. Science 2011',
	        'all': '366',
	        'sequenced': '56',
	        'cna': '45',
	        'tumor_RNA_seq': '87',
	        'tumor_RNA_microarray': '98',
	        'tumor_miRNA': '53',
	        'methylation': '37',
	        'RPPA': '91',
	        'complete': '300'
	    }]
	};

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGF0YXNldFZpZXcvRGF0YVNldFBhZ2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kYXRhc2V0Vmlldy9kdWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kYXRhc2V0Vmlldy9nZXREYXRhc2V0c0luZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RhdGFzZXRWaWV3L2xpYi9tb2NrRGF0YS5qcyJdLCJuYW1lcyI6WyJyZWR1Y2VyIiwibG9hZERhdGFzZXRzSW5mbyIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFjdGlvblR5cGVzIiwiRkVUQ0giLCJtZXRhIiwic3RhdHVzIiwic2V0Iiwid2l0aE11dGF0aW9ucyIsIkxpc3QiLCJwYXlsb2FkIiwiZGF0YXNldHMiLCJkaXNwYXRjaCIsInRoZW4iLCJkYXRhIiwiYWN0aW9uQ3JlYXRvcnMiLCJtYXBTdGF0ZVRvUHJvcHMiLCJnZXQiLCJnZXREYXRhc2V0c0luZm8iLCJzdHVkaWVzIiwibW9ja0RhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDWjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUhZOzs7Ozs7O2VBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQWVKO2lCQUFNLE9BQ047a0JBQUssTUFBTSxTQUFTLFFBQVEsVUFBQyxNQUN6QjtzQkFBSyxLQUNELDBCQUNBLGdDQUFLLFdBQUssSUFDVixvQ0FBSyxXQUFLLElBQ1YseUNBQUssV0FBSyxJQUNWLG1DQUFLLFdBQUssSUFDVix5Q0FBSyxXQUFLLElBQ1YsbUNBQUssV0FBSyxJQUNWLDZDQUFLLFdBQUssSUFDVixvREFBSyxXQUFLLElBQ1YsMkNBQUssV0FBSyxJQUNWLDJDQUFLLFdBQUssSUFDVixvQ0FBSyxXQUFLLElBR2pCO0FB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QWZLLEVBNkJMO0FBQ0ksaUJBQVEsd0NBRFo7QUFFSSxpQkFBUSx5RUFGWjtBQUdJLHNCQUFhLGdDQUhqQjtBQUlJLGdCQUFPLEtBSlg7QUFLSSxzQkFBYSxJQUxqQjtBQU1JLGdCQUFPLElBTlg7QUFPSSwwQkFBaUIsSUFQckI7QUFRSSxpQ0FBd0IsSUFSNUI7QUFTSSx3QkFBZSxJQVRuQjtBQVVJLHdCQUFlLElBVm5CO0FBV0ksaUJBQVEsSUFYWjtBQVlJLHFCQUFZO0FBWmhCLE1BN0JLLEVBMkNMO0FBQ0ksaUJBQVEsa0RBRFo7QUFFSSxpQkFBUSx5RUFGWjtBQUdJLHNCQUFhLGdDQUhqQjtBQUlJLGdCQUFPLEtBSlg7QUFLSSxzQkFBYSxJQUxqQjtBQU1JLGdCQUFPLEtBTlg7QUFPSSwwQkFBaUIsSUFQckI7QUFRSSxpQ0FBd0IsSUFSNUI7QUFTSSx3QkFBZSxJQVRuQjtBQVVJLHdCQUFlLElBVm5CO0FBV0ksaUJBQVEsSUFYWjtBQVlJLHFCQUFZO0FBWmhCLE1BM0NLLEVBeURMO0FBQ0ksaUJBQVEsMkNBRFo7QUFFSSxpQkFBUSx5RUFGWjtBQUdJLHNCQUFhLDZCQUhqQjtBQUlJLGdCQUFPLEtBSlg7QUFLSSxzQkFBYSxJQUxqQjtBQU1JLGdCQUFPLElBTlg7QUFPSSwwQkFBaUIsSUFQckI7QUFRSSxpQ0FBd0IsSUFSNUI7QUFTSSx3QkFBZSxJQVRuQjtBQVVJLHdCQUFlLElBVm5CO0FBV0ksaUJBQVEsSUFYWjtBQVlJLHFCQUFZO0FBWmhCLE1BekRLO0FBRFcsRUFBakIsQyIsImZpbGUiOiJyZWFjdGFwcC9qcy8zLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBhY3Rpb25DcmVhdG9ycywgbWFwU3RhdGVUb1Byb3BzIH0gZnJvbSAnLi9kdWNrJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbnRlcmZhY2UgRGF0YVNldFBhZ2VQcm9wc1xue1xufVxuXG5pbnRlcmZhY2UgRGF0YVNldFBhZ2VTdGF0ZVxue1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVNldFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8RGF0YVNldFBhZ2VQcm9wcywgRGF0YVNldFBhZ2VTdGF0ZT5cbntcbiAgICByZW5kZXIoKVxuICAgIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BzLmRhdGFzZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJvd3MucHVzaChcbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmdldCgnbmFtZScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmdldCgncmVmZXJlbmNlJyl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZ2V0KCdhbGwnKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5nZXQoJ3NlcXVlbmNlZCcpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmdldCgnY25hJyl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZ2V0KCd0dW1vcl9STkFfc2VxJyl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZ2V0KCd0dW1vcl9STkFfbWljcm9hcnJheScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPHRkPntpdGVtLmdldCgndHVtb3JfbWlSTkEnKX08L3RkPlxuICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5nZXQoJ21ldGh5bGF0aW9uJyl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZ2V0KCdSUFBBJyl9PC90ZD5cbiAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZ2V0KCdjb21wbGV0ZScpfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxUYWJsZSBzdHJpcGVkPlxuICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5OYW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5yZWZlcmVuY2U8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmFsbDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+c2VxdWVuY2VkPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5DTkE8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnR1bW9yX1JOQV9zZXE8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPnR1bW9yX1JOQV9taWNyb2FycmF5PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD50dW1vcl9taVJOQTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGg+bWV0aHlsYXRpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlJQUEE8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoPmNvbXBsZXRlPC90aD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd3N9XG4gICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG5cbiAgICAgICAgICAgICAgICA8L1RhYmxlPjtcblxuICAgICAgICAgICAgLy9yZXR1cm4gPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jQmlvUG9ydGFsL2RhdGFodWIvYmxvYi9tYXN0ZXIvcHVibGljL3BhYWNfamh1XzIwMTQudGFyLmd6XCIgZG93bmxvYWQ+RG93bmxvYWQgZmlsZTwvYT5cbiAgICB9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnZXMvZGF0YXNldFZpZXcvRGF0YVNldFBhZ2UuanN4XG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGppYW9qaWFvIG9uIDEwLzE0LzE2LlxuICovXG5pbXBvcnQgSW1tdXRhYmxlIGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgZ2V0RGF0YXNldHNJbmZvIGZyb20gJy4vZ2V0RGF0YXNldHNJbmZvJztcblxuLy8gUmVkdWNlclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pIHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIC8vIGRvIHJlZHVjZXIgc3R1ZmZcblxuICAgICAgICBjYXNlIGFjdGlvblR5cGVzLkZFVENIOlxuXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi5tZXRhLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnZmV0Y2hpbmcnOlxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5zZXQoJ3N0YXR1cycsICdmZXRjaGluZycpO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnc3VjY2Vzcyc6XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLndpdGhNdXRhdGlvbnMoKHN0YXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldCgnc3RhdHVzJywgJ2NvbXBsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnNldCgnZGF0YXNldHMnLCBJbW11dGFibGUuTGlzdChhY3Rpb24ucGF5bG9hZC5kYXRhc2V0cykpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgY2FzZSAnZXJyb3InOlxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuc2V0KCdzdGF0dXMnLCAnZXJyb3InKTtcblxuICAgICAgICBkZWZhdWx0OlxuXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG5cbiAgICB9XG5cbn1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkRGF0YXNldHNJbmZvKCkge1xuICAgIC8vIHRoaXMgaXMgYSB0aHVua1xuICAgIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICAgICAgZ2V0RGF0YXNldHNJbmZvKCkudGhlbihcbiAgICAgICAgICAgIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuRkVUQ0gsXG4gICAgICAgICAgICAgICAgbWV0YTogeyBzdGF0dXM6ICdzdWNjZXNzJyB9LFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGEsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogYWN0aW9uVHlwZXMuRkVUQ0gsXG4gICAgICAgICAgICBtZXRhOiB7IHN0YXR1czogJ2ZldGNoaW5nJyB9LFxuICAgICAgICB9KTtcbiAgICB9O1xufTtcblxuXG5leHBvcnQgY29uc3QgYWN0aW9uQ3JlYXRvcnMgPSB7XG4gICAgbG9hZERhdGFzZXRzSW5mb1xufTtcblxuZXhwb3J0IGNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IGZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRhdGFzZXRzOiBzdGF0ZS5nZXQoJ2RhdGFzZXRWaWV3JykuZ2V0KCdkYXRhc2V0cycpXG4gICAgfTtcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYWdlcy9kYXRhc2V0Vmlldy9kdWNrLmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGppYW9qaWFvIG9uIDEwLzE0LzE2LlxuICovXG5pbXBvcnQgbW9ja0RhdGEgZnJvbSAnLi9saWIvbW9ja0RhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXREYXRhc2V0c0luZm8oKSB7XG4gICAgcmV0dXJuIG1vY2tEYXRhLnN0dWRpZXM7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnZXMvZGF0YXNldFZpZXcvZ2V0RGF0YXNldHNJbmZvLmpzXG4gKiovIiwiZXhwb3J0IGNvbnN0IG1vY2tEYXRhID0ge1xuICAgIHN0dWRpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgJ25hbWUnOiAnQWNpbmFyIENlbGwgQ2FyY2lub21hIG9mIHRoZSBQYW5jcmVhcyAoSm9obnMgSG9wa2lucywgSiBQYXRob2wgMjAxNCknLFxuICAgICAgICAgICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2NCaW9Qb3J0YWwvZGF0YWh1Yi9ibG9iL21hc3Rlci9wdWJsaWMvb3ZfdGNnYS50YXIuZ3onLFxuICAgICAgICAgICAgJ3JlZmVyZW5jZSc6ICdKaWFsIGV0IGFsLiBKIFBhdGhvbCAyMDE0JyxcbiAgICAgICAgICAgICdhbGwnOiAnMjU2JyxcbiAgICAgICAgICAgICdzZXF1ZW5jZWQnOiAnMjEwJyxcbiAgICAgICAgICAgICdjbmEnOiAnMTAnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9zZXEnOiAnMzQnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9taWNyb2FycmF5JzogJzQnLFxuICAgICAgICAgICAgJ3R1bW9yX21pUk5BJzogJzEwJyxcbiAgICAgICAgICAgICdtZXRoeWxhdGlvbic6ICcxMicsXG4gICAgICAgICAgICAnUlBQQSc6ICc3OCcsXG4gICAgICAgICAgICAnY29tcGxldGUnOiAnMjAwJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAnbmFtZSc6ICdCbGFkZGVyIENhbmNlciAoTVNLQ0MsIEpDTyAyMDEzKScsXG4gICAgICAgICAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vY0Jpb1BvcnRhbC9kYXRhaHViL2Jsb2IvbWFzdGVyL3B1YmxpYy9vdl90Y2dhLnRhci5neicsXG4gICAgICAgICAgICAncmVmZXJlbmNlJzogJ0l5ZXIgZXQgYWwuIEpDTyAyMDEzJyxcbiAgICAgICAgICAgICdhbGwnOiAnNzU0JyxcbiAgICAgICAgICAgICdzZXF1ZW5jZWQnOiAnNTQ0JyxcbiAgICAgICAgICAgICdjbmEnOiAnNDEnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9zZXEnOiAnNDEyJyxcbiAgICAgICAgICAgICd0dW1vcl9STkFfbWljcm9hcnJheSc6ICc1NycsXG4gICAgICAgICAgICAndHVtb3JfbWlSTkEnOiAnODgnLFxuICAgICAgICAgICAgJ21ldGh5bGF0aW9uJzogJzQ1JyxcbiAgICAgICAgICAgICdSUFBBJzogJzU0JyxcbiAgICAgICAgICAgICdjb21wbGV0ZSc6ICc3OCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ25hbWUnOiAnQ2hvbGFuZ2lvY2FyY2lub21hIChUQ0dBLCBQcm92aXNpb25hbCknLFxuICAgICAgICAgICAgJ2xpbmsnOiAnaHR0cHM6Ly9naXRodWIuY29tL2NCaW9Qb3J0YWwvZGF0YWh1Yi9ibG9iL21hc3Rlci9wdWJsaWMvb3ZfdGNnYS50YXIuZ3onLFxuICAgICAgICAgICAgJ3JlZmVyZW5jZSc6ICdQZXJlaXJhIGV0IGFsLiBOYXQgQ29tbXVuIDIwMTYnLFxuICAgICAgICAgICAgJ2FsbCc6ICc1NjQnLFxuICAgICAgICAgICAgJ3NlcXVlbmNlZCc6ICc0NScsXG4gICAgICAgICAgICAnY25hJzogJzU2JyxcbiAgICAgICAgICAgICd0dW1vcl9STkFfc2VxJzogJzIzJyxcbiAgICAgICAgICAgICd0dW1vcl9STkFfbWljcm9hcnJheSc6ICcyMycsXG4gICAgICAgICAgICAndHVtb3JfbWlSTkEnOiAnMjEnLFxuICAgICAgICAgICAgJ21ldGh5bGF0aW9uJzogJzQ1JyxcbiAgICAgICAgICAgICdSUFBBJzogJzU2JyxcbiAgICAgICAgICAgICdjb21wbGV0ZSc6ICc3OCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgJ25hbWUnOiAnTHVuZyBTcXVhbW91cyBDZWxsIENhcmNpbm9tYSAoVENHQSwgUHJvdmlzaW9uYWwpJyxcbiAgICAgICAgICAgICdsaW5rJzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jQmlvUG9ydGFsL2RhdGFodWIvYmxvYi9tYXN0ZXIvcHVibGljL292X3RjZ2EudGFyLmd6JyxcbiAgICAgICAgICAgICdyZWZlcmVuY2UnOiAnTGkgZXQgYWwsIENsaW4gQ2FuY2VyIFJlcyAyMDE1JyxcbiAgICAgICAgICAgICdhbGwnOiAnNTQyJyxcbiAgICAgICAgICAgICdzZXF1ZW5jZWQnOiAnNDUnLFxuICAgICAgICAgICAgJ2NuYSc6ICcyMzUnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9zZXEnOiAnNzgnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9taWNyb2FycmF5JzogJzk4JyxcbiAgICAgICAgICAgICd0dW1vcl9taVJOQSc6ICc3OCcsXG4gICAgICAgICAgICAnbWV0aHlsYXRpb24nOiAnNDUnLFxuICAgICAgICAgICAgJ1JQUEEnOiAnNTcnLFxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogJzM5J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICAnbmFtZSc6ICdNZWxhbm9tYSAoQnJvYWQvRGFuYSBGYXJiZXIsIE5hdHVyZSAyMDEyKScsXG4gICAgICAgICAgICAnbGluayc6ICdodHRwczovL2dpdGh1Yi5jb20vY0Jpb1BvcnRhbC9kYXRhaHViL2Jsb2IvbWFzdGVyL3B1YmxpYy9vdl90Y2dhLnRhci5neicsXG4gICAgICAgICAgICAncmVmZXJlbmNlJzogJ0FncmF3YWwgZXQgYWwuIFNjaWVuY2UgMjAxMScsXG4gICAgICAgICAgICAnYWxsJzogJzM2NicsXG4gICAgICAgICAgICAnc2VxdWVuY2VkJzogJzU2JyxcbiAgICAgICAgICAgICdjbmEnOiAnNDUnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9zZXEnOiAnODcnLFxuICAgICAgICAgICAgJ3R1bW9yX1JOQV9taWNyb2FycmF5JzogJzk4JyxcbiAgICAgICAgICAgICd0dW1vcl9taVJOQSc6ICc1MycsXG4gICAgICAgICAgICAnbWV0aHlsYXRpb24nOiAnMzcnLFxuICAgICAgICAgICAgJ1JQUEEnOiAnOTEnLFxuICAgICAgICAgICAgJ2NvbXBsZXRlJzogJzMwMCdcbiAgICAgICAgfSxcbiAgICBdXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcGFnZXMvZGF0YXNldFZpZXcvbGliL21vY2tEYXRhLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==