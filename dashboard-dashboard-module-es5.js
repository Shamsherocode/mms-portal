(function () {
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
    /***/
    "H/d9":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function HD9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<style>\n\n.search-input {\n    margin-bottom: 10px;\n    margin-top: 10px;\n}\n.search-input .form-control{\nmargin:10px 0px;\n}\n\n.search-input .card-title{\npadding:10px 0px;\nmargin:0px;\n}\n.align-center{\ntext-align:center;\n}\n.no-padding{\npadding:0px;\n}\n.search-input span{\npadding:20px 10px;\nmargin:0px;\nfloat: left;\nwidth:100%;\ntext-align:center;\n}\n\n.search-input .btn{\npadding-left:8px;\npadding-right:8px;\n}\n.search-input span.fa-calendar{\n    padding: 12px 10px 8px 0px!important;\n    margin: 10px 0px;\n    background: rgba(222, 222, 222, 0.3);\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\n.tbody{\n  cursor: pointer;\n}\n  </style>\n\n<div class=\"main-content\">\n  <div class=\"row\">\n      <div class=\"col-md-9\">\n      \n        <div class=\"card\">\n        <form #f1=\"ngForm\" novalidate (ngSubmit)=\"memberSearchSubmit(f1.value)\">\n              <div class=\"input-group no-border search-input\">\n                  <div class=\"col-md-2\"> \n                  <h4 class=\"card-title\" >MEMBER<br>SEARCH</h4>\n                  </div>\n                  \n                  <div class=\"col-md-3\">\n                  <div class=\"row no-padding\">\n                  <div class=\"col-md-8 no-padding\">\n                  <input [ngModel]=\"memberSearch.lastname\" autocomplete=\"off\" #lastname=\"ngModel\" name=\"lastname\"  id=\"lastname\"  type=\"text\" value=\"\" maxlength=\"50\" placeholder=\"Last Name\" class=\"form-control\">\n                  </div>\n                  <div class=\"col-md-4 no-padding\">\n                  <span>AND</span>\n                  </div>\n                  </div>\n                  \n                  </div>\n                  \n                  <div class=\"col-md-3\">\n                  <div class=\"row no-padding\">\n                  <div class=\"col-md-8 no-padding\">\n                  \n                  <div class=\"form-group\">\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t  <input (click)=\"dob.toggle()\" autocomplete=\"off\"  class=\"form-control\" placeholder=\"Date Of Birth\" name=\"dobView\" [ngModel]=\"memberSearch.dobView\">\n\t\t\t\t\t  <input style=\"display:none\" (ngModelChange)=\"updatedobView()\" [startDate]=\"memberSearch.startDate\" (click)=\"dob.toggle()\"  class=\"form-control datepicker\" placeholder=\"Date Of Birth\"\n\t\t\t\t\t\t\t name=\"dob\" [ngModel]=\"memberSearch.dob\" ngbDatepicker #dob=\"ngbDatepicker\" id=\"dob\">\n\t\t\t\t\t  <div class=\"input-group-append\">\n\t\t\t\t\t\t<span class=\"fa fa-calendar\" (click)=\"dob.toggle()\"></span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t  </div>\n  \n                  </div>\n                  <div class=\"col-md-4 no-padding\">\n                  <span>OR</span>\n                  </div>\n                  </div>\n                  \n                  </div>\n                  \n                  <div class=\"col-md-2\"> \n                  <input [ngModel]=\"memberSearch.id\"   #id=\"ngModel\" name=\"id\" type=\"number\"  id=\"id\" oninput=\"javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);\"\n     maxlength=\"10\" placeholder=\"Member ID\" class=\"form-control\">\n                  </div>\n                  \n                  \n                  <div class=\"col-md-2\">\n                  <button type=\"submit\" class=\" btn btn-warning pull-left\">Search</button>\n                  <!-- <button type=\"button\" class=\" btn btn-warning pull-right\" (click)=\"resetMemberSearch(f1)\">Reset</button> -->\n                  </div>\n                  \n              </div>\n              <p [hidden]=\"!message\" class=\"text-danger align-center\">{{message}}</p>\n       \n\t\t</form>\n\t\t \n\t\t\n\t\t      <div [hidden]=\"!showMembersTable\" class=\"card-body\">\n                    <table id=\"memberTable\"  class=\"table-hover table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n\t\t\t\t\t\t<thead>\n\t\t\t\t\t\t\t<tr class=\"headerTable\">\n\t\t\t\t\t\t\t    <th>Name</th>\n                  <th>Type</th>\n                  <th>ID</th>\n                  <th>Group</th>\n                  <th>DOB</th>\n                  <th>City</th>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t</thead>\n\n\t\t\t\t\t</table>\n              </div>\n          \n          \n          </div>\n          \n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">PAYMENT HISTORY</h4>\n            </div> \n              <div class=\"card-body\">\n                    <table id=\"paymentTable\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                            <thead>\n                              <tr>\n                                <th>{{ paymentsTable.headerRow[0] }}</th>\n                                <th>{{ paymentsTable.headerRow[1] }}</th>\n                                <th>{{ paymentsTable.headerRow[2] }}</th>\n                                <th>{{ paymentsTable.headerRow[3] }}</th>\n                                <th>{{ paymentsTable.headerRow[4] }}</th>\n                              </tr>\n                            </thead>\n                            <tbody>\n                              <tr *ngFor=\"let row of paymentsTable.dataRows\" class=\"tbodyTable\">\n                                  <td (click)=\"redirectPage()\">{{row[0]}}</td>\n                                  <td (click)=\"redirectPage()\">{{row[1]}}</td>\n                                  <td (click)=\"redirectPage()\">{{row[2]}}</td>\n                                  <td (click)=\"redirectPage()\">{{row[3]}}</td>\n                                  <td (click)=\"redirectPage()\">{{row[4]}}</td>\n                              </tr>\n                          </tbody>\n                      </table>\n              </div>\n              <!-- end content-->\n          </div>\n          <!--  end card  -->\n\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">LOCATIONS</h4>\n            </div>\n              <div class=\"card-body\">\n                    <table id=\"locationTable\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                          <thead>\n                            <tr>\n                              <th>{{ locationsTable.headerRow[0] }}</th>\n                              <th>{{ locationsTable.headerRow[1] }}</th>\n                              <th>{{ locationsTable.headerRow[2] }}</th>\n                              <th>{{ locationsTable.headerRow[3] }}</th>\n                            </tr>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let row of locationsTable.dataRows\" class=\"tbodyTable\">\n                                <td>{{row[0]}}</td>\n                                <td>{{row[1]}}</td>\n                                <td>{{row[2]}}</td>\n                                <td>{{row[3]}}</td>\n                            </tr>\n                        </tbody>\n                      </table>\n              </div>\n              <!-- end content-->\n          </div>\n\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h4 class=\"card-title\">DOCTORS</h4>\n            </div>\n              <div class=\"card-body\">\n                    <table id=\"doctorTable\" class=\"table table-striped table-bordered\" cellspacing=\"0\" width=\"100%\">\n                          <thead>\n                              <tr>\n                                <th>{{ doctorsTable.headerRow[0] }}</th>\n                                <th>{{ doctorsTable.headerRow[1] }}</th>\n                                <th>{{ doctorsTable.headerRow[2] }}</th>\n                                <th>{{ doctorsTable.headerRow[3] }}</th>\n                                <th>{{ doctorsTable.headerRow[4] }}</th>\n                              </tr>\n                          </thead>\n                          <tbody>\n                              <tr *ngFor=\"let row of doctorsTable.dataRows\" class=\"tbodyTable\">\n                                  <td>{{row[0]}}</td>\n                                  <td>{{row[1]}}</td>\n                                  <td>{{row[2]}}</td>\n                                  <td>{{row[3]}}</td>\n                                  <td>{{row[4]}}</td>\n                              </tr>\n                          </tbody>\n                      </table>\n              </div>\n              <!-- end content-->\n          </div>\n\n      </div>\n      <!-- end col-md-12 -->\n\n      <div class=\"col-md-3\">\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"background-color: #3D5A80;\">\n            <h4 class=\"card-title\" style=\"color: white;\">Announcements</h4>\n          </div>\n          <div class=\"card-body\">\n            <p>Announcements Content 1</p>\n          </div>\n        </div>\n      \n        <div class=\"card\">\n          <div class=\"card-header\" style=\"background-color: #3D5A80;\">\n            <h4 class=\"card-title\" style=\"color: white;\">Tutorials</h4>\n          </div>\n          <div class=\"card-body\">\n            <p>Tutorials Content 1</p>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\" style=\"background-color: #3D5A80;\">\n            <h4 class=\"card-title\" style=\"color: white;\">Social Media</h4>\n          </div>\n          <div class=\"card-body\">\n            <p>Social Media Content 1</p>\n          </div>\n        </div>\n      \n      \n      \n      </div>\n  </div>\n  <!-- end row -->\n</div>\n";
      /***/
    },

    /***/
    "I3w1":
    /*!************************************************!*\
      !*** ./src/app/dashboard/dashboard.routing.ts ***!
      \************************************************/

    /*! exports provided: DashboardRoutes */

    /***/
    function I3w1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardRoutes", function () {
        return DashboardRoutes;
      });
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard.component */
      "QX6l");
      /* harmony import */


      var _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./doctors/widgets.component */
      "slp9");

      var DashboardRoutes = [{
        path: '',
        children: [{
          path: 'provider',
          component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"]
        }]
      }, {
        path: '',
        children: [{
          path: 'provider/details/:id',
          component: _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_1__["WidgetsComponent"]
        }]
      }];
      /***/
    },

    /***/
    "QX6l":
    /*!**************************************************!*\
      !*** ./src/app/dashboard/dashboard.component.ts ***!
      \**************************************************/

    /*! exports provided: DashboardComponent */

    /***/
    function QX6l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
        return DashboardComponent;
      });
      /* harmony import */


      var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "H/d9");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/api.service */
      "H+bZ");
      /* harmony import */


      var app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/services/auth.service */
      "lGQG");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./doctors/widgets.component */
      "slp9");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var __metadata = undefined && undefined.__metadata || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
      };

      var DashboardComponent = /*#__PURE__*/function () {
        function DashboardComponent(router, formBuilder, api, datepipe, auth, data) {
          _classCallCheck(this, DashboardComponent);

          this.router = router;
          this.formBuilder = formBuilder;
          this.api = api;
          this.datepipe = datepipe;
          this.auth = auth;
          this.data = data;
          this.message = '';
          this.showMembersTable = false;
          this.showMembersTable = false;
          var MemberSearchForms = JSON.parse(localStorage.getItem('MemberSearchForms'));

          if (MemberSearchForms) {
            this.memberSearch = {
              lastname: MemberSearchForms.lastname,
              dob: MemberSearchForms.dob,
              id: MemberSearchForms.id,
              dobView: MemberSearchForms.dobView,
              startDate: MemberSearchForms.startDate
            };
            setTimeout(function () {
              $('#memberTable').DataTable().draw();
            }, 500);
          } else {
            this.memberSearch = {
              lastname: '',
              dob: '',
              id: '',
              dobView: '',
              startDate: ''
            };
          }
        }

        _createClass(DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.paymentsTable = {
              headerRow: ['patient name', 'payment id', 'date of service', 'status', 'amount'],
              dataRows: [['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1102', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1103', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1104', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1105', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1106', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1107', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1108', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1109', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Due', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Paid', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Peter Parker', '1101', '10-feb-2022', 'Paid', '120$'], ['Ted Strange', '1101', '10-feb-2022', 'Due', '120$'], ['Sam Parker', '1101', '10-feb-2022', 'Paid', '120$']]
            };
            this.doctorsTable = {
              headerRow: ['name', 'department', 'mobile no', 'email', 'avaliable'],
              dataRows: [['Peter Parker', 'Eye', '+17451258741', 'peter@vcdcare.org', 'Yes'], ['Ted Strange, O.D.', 'Medicine', '+17451254141', 'peter@vcdcare.org', 'Yes'], ['Sam Parker, O.D.', 'Surgery', '+174512542141', 'peter@vcdcare.org', 'Yes'], ['Ransom Strange, O.D.', 'Neurology', '+17453258741', 'peter@vcdcare.org', 'No'], ['John Parker, O.D.', 'Cardiology', '+17451258981', 'peter@vcdcare.org', 'Yes'], ['Vin Strange, O.D.', 'Medicine', '+17451258721', 'peter@vcdcare.org', 'No'], ['Tom Parker, O.D.', 'Neurology', '+17451258796', 'peter@vcdcare.org', 'Yes'], ['Feddy Strange, O.D.', 'Cardiology', '+17451252041', 'peter@vcdcare.org', 'Yes'], ['Kat Parker, O.D.', 'Surgery', '+17451258691', 'peter@vcdcare.org', 'Yes'], ['Sujain Strange, O.D.', 'Gynaecology', '+17451258741', 'peter@vcdcare.org', 'No'], ['Feddy Strange, O.D.', 'Eye', '+17451258741', 'peter@vcdcare.org', 'Yes'], ['Kat Parker, O.D.', 'Gynaecology', '+17451258741', 'peter@vcdcare.org', 'Yes'], ['Sujain Strange, O.D.', 'Eye', '+17451258741', 'peter@vcdcare.org', 'No']]
            };
            this.locationsTable = {
              headerRow: ['name', 'city', 'zip code', 'state'],
              dataRows: [['Peter Parker', 'Juneau', '99950', 'Alaska [AK]'], ['Ted Strange', 'Phoenix', '86556', 'Arizona [AZ]'], ['Sam Parker', 'Juneau', '99950', 'Alaska [AK]'], ['Ransom Strange', 'Phoenix', '86556', 'Arizona [AZ]'], ['John Parker', 'Sacramento', '96162', 'California [CA]'], ['Vin Strange', 'Phoenix', '86556', 'Arizona [AZ]'], ['Tom Parker', 'Sacramento', '96162', 'California [CA]'], ['Feddy Strange', 'Phoenix', '86556', 'Arizona [AZ]'], ['Kat Parker', 'Phoenix', '86556', 'Arizona [AZ]'], ['Sujain Strange', 'Sacramento', '96162', 'California [CA]'], ['Feddy Strange', 'Phoenix', '86556', 'Arizona [AZ]'], ['Kat Parker', 'Sacramento', '96162', 'California [CA]'], ['Sujain Strange', 'Juneau', '99950', 'Alaska [AK]']]
            };
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            $('#paymentTable').DataTable({
              language: {
                infoFiltered: ''
              },
              lengthMenu: [5, 10, 25, 50]
            });
            $('#doctorTable').DataTable({
              language: {
                infoFiltered: ''
              },
              lengthMenu: [5, 10, 25, 50]
            });
            $('#locationTable').DataTable({
              language: {
                infoFiltered: ''
              },
              lengthMenu: [5, 10, 25, 50]
            });
          }
        }, {
          key: "getID",
          value: function getID(data) {
            return data;
          }
        }, {
          key: "redirectPage",
          value: function redirectPage() {
            this.router.navigateByUrl('/payment-details');
          }
        }]);

        return DashboardComponent;
      }();

      DashboardComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }, {
          type: app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponent"]
        }];
      };

      DashboardComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        providers: [_doctors_widgets_component__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponent"]],
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_7__["WidgetsComponent"]])], DashboardComponent);
      /***/
    },

    /***/
    "TDBs":
    /*!***********************************************!*\
      !*** ./src/app/dashboard/dashboard.module.ts ***!
      \***********************************************/

    /*! exports provided: DashboardModule */

    /***/
    function TDBs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
        return DashboardModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./doctors/widgets.component */
      "slp9");
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      "1kSV");
      /* harmony import */


      var _agm_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @agm/core */
      "pxUr");
      /* harmony import */


      var _dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./dashboard.component */
      "QX6l");
      /* harmony import */


      var _dashboard_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard.routing */
      "I3w1");

      var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      };

      var DashboardModule = /*#__PURE__*/_createClass(function DashboardModule() {
        _classCallCheck(this, DashboardModule);
      });

      DashboardModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_8__["DashboardRoutes"]), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _agm_core__WEBPACK_IMPORTED_MODULE_6__["AgmCoreModule"].forRoot({
          apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
        })],
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _doctors_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"]],
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
      })], DashboardModule);
      /***/
    },

    /***/
    "mrSG":
    /*!*****************************************!*\
      !*** ./node_modules/tslib/tslib.es6.js ***!
      \*****************************************/

    /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

    /***/
    function mrSG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__extends", function () {
        return __extends;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__assign", function () {
        return _assign;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__rest", function () {
        return __rest;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__decorate", function () {
        return __decorate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__param", function () {
        return __param;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__metadata", function () {
        return __metadata;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
        return __awaiter;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__generator", function () {
        return __generator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
        return __createBinding;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
        return __exportStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__values", function () {
        return __values;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__read", function () {
        return __read;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spread", function () {
        return __spread;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
        return __spreadArrays;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__await", function () {
        return __await;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
        return __asyncGenerator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
        return __asyncDelegator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
        return __asyncValues;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
        return __makeTemplateObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importStar", function () {
        return __importStar;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
        return __importDefault;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
        return __classPrivateFieldGet;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
        return __classPrivateFieldSet;
      });
      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation.
      
      Permission to use, copy, modify, and/or distribute this software for any
      purpose with or without fee is hereby granted.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
      REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
      AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
      INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
      LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
      OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
      PERFORMANCE OF THIS SOFTWARE.
      ***************************************************************************** */

      /* global Reflect, Promise */


      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };

      function __rest(s, e) {
        var t = {};

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        }

        if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        }
        return t;
      }

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
      }

      function __param(paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      }

      function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
      }

      function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      }

      function __generator(thisArg, body) {
        var _ = {
          label: 0,
          sent: function sent() {
            if (t[0] & 1) throw t[1];
            return t[1];
          },
          trys: [],
          ops: []
        },
            f,
            y,
            t,
            g;
        return g = {
          next: verb(0),
          "throw": verb(1),
          "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
          return this;
        }), g;

        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }

        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");

          while (_) {
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
              if (y = 0, t) op = [op[0] & 2, t.value];

              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;

                case 4:
                  _.label++;
                  return {
                    value: op[1],
                    done: false
                  };

                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;

                case 7:
                  op = _.ops.pop();

                  _.trys.pop();

                  continue;

                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }

                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }

                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }

                  if (t && _.label < t[2]) {
                    _.label = t[2];

                    _.ops.push(op);

                    break;
                  }

                  if (t[2]) _.ops.pop();

                  _.trys.pop();

                  continue;
              }

              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          }

          if (op[0] & 5) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: true
          };
        }
      }

      function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      }

      function __exportStar(m, exports) {
        for (var p in m) {
          if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
            m = s && o[s],
            i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
          next: function next() {
            if (o && i >= o.length) o = void 0;
            return {
              value: o && o[i++],
              done: !o
            };
          }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }

      function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
            r,
            ar = [],
            e;

        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
            ar.push(r.value);
          }
        } catch (error) {
          e = {
            error: error
          };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }

        return ar;
      }

      function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++) {
          ar = ar.concat(__read(arguments[i]));
        }

        return ar;
      }

      function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
          s += arguments[i].length;
        }

        for (var r = Array(s), k = 0, i = 0; i < il; i++) {
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
            r[k] = a[j];
          }
        }

        return r;
      }

      ;

      function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
      }

      function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
            i,
            q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i;

        function verb(n) {
          if (g[n]) i[n] = function (v) {
            return new Promise(function (a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
        }

        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }

        function step(r) {
          r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }

        function fulfill(value) {
          resume("next", value);
        }

        function reject(value) {
          resume("throw", value);
        }

        function settle(f, v) {
          if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
      }

      function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function () {
          return this;
        }, i;

        function verb(n, f) {
          i[n] = o[n] ? function (v) {
            return (p = !p) ? {
              value: __await(o[n](v)),
              done: n === "return"
            } : f ? f(v) : v;
          } : f;
        }
      }

      function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
            i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
          return this;
        }, i);

        function verb(n) {
          i[n] = o[n] && function (v) {
            return new Promise(function (resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }

        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v) {
            resolve({
              value: v,
              done: d
            });
          }, reject);
        }
      }

      function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", {
            value: raw
          });
        } else {
          cooked.raw = raw;
        }

        return cooked;
      }

      ;

      function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) {
          if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      }

      function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
          "default": mod
        };
      }

      function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }

        return privateMap.get(receiver);
      }

      function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }

        privateMap.set(receiver, value);
        return value;
      }
      /***/

    },

    /***/
    "pxUr":
    /*!******************************************************************!*\
      !*** ./node_modules/@agm/core/__ivy_ngcc__/fesm2015/agm-core.js ***!
      \******************************************************************/

    /*! exports provided: AgmBicyclingLayer, AgmCircle, AgmCoreModule, AgmDataLayer, AgmFitBounds, AgmGeocoder, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer, CircleManager, ControlPosition, DataLayerManager, FitBoundsAccessor, GeocoderLocationType, GeocoderStatus, GoogleMapsAPIWrapper, GoogleMapsScriptProtocol, InfoWindowManager, KmlLayerManager, LAZY_MAPS_API_CONFIG, LayerManager, LazyMapsAPILoader, MapTypeId, MapsAPILoader, MarkerManager, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScaleControlStyle, ZoomControlStyle, ??a, ??b, ??c, ??d, ??e */

    /***/
    function pxUr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmBicyclingLayer", function () {
        return AgmBicyclingLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmCircle", function () {
        return AgmCircle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmCoreModule", function () {
        return AgmCoreModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmDataLayer", function () {
        return AgmDataLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmFitBounds", function () {
        return AgmFitBounds;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmGeocoder", function () {
        return AgmGeocoder;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmInfoWindow", function () {
        return AgmInfoWindow;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmKmlLayer", function () {
        return AgmKmlLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmMap", function () {
        return AgmMap;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmMarker", function () {
        return AgmMarker;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolygon", function () {
        return AgmPolygon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolyline", function () {
        return AgmPolyline;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolylineIcon", function () {
        return AgmPolylineIcon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmPolylinePoint", function () {
        return AgmPolylinePoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmRectangle", function () {
        return AgmRectangle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AgmTransitLayer", function () {
        return AgmTransitLayer;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CircleManager", function () {
        return CircleManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ControlPosition", function () {
        return ControlPosition;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataLayerManager", function () {
        return DataLayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FitBoundsAccessor", function () {
        return FitBoundsAccessor;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeocoderLocationType", function () {
        return GeocoderLocationType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeocoderStatus", function () {
        return GeocoderStatus;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapsAPIWrapper", function () {
        return GoogleMapsAPIWrapper;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GoogleMapsScriptProtocol", function () {
        return GoogleMapsScriptProtocol;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InfoWindowManager", function () {
        return InfoWindowManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KmlLayerManager", function () {
        return KmlLayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LAZY_MAPS_API_CONFIG", function () {
        return LAZY_MAPS_API_CONFIG;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LayerManager", function () {
        return LayerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LazyMapsAPILoader", function () {
        return LazyMapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapTypeId", function () {
        return MapTypeId;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MapsAPILoader", function () {
        return MapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarkerManager", function () {
        return MarkerManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NoOpMapsAPILoader", function () {
        return NoOpMapsAPILoader;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolygonManager", function () {
        return PolygonManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PolylineManager", function () {
        return PolylineManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RectangleManager", function () {
        return RectangleManager;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScaleControlStyle", function () {
        return ScaleControlStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ZoomControlStyle", function () {
        return ZoomControlStyle;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??a", function () {
        return FitBoundsService;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??b", function () {
        return coreDirectives;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??c", function () {
        return WindowRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??d", function () {
        return DocumentRef;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "??e", function () {
        return BROWSER_GLOBALS_PROVIDERS;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = ["*"];

      var MapsAPILoader = /*#__PURE__*/_createClass(function MapsAPILoader() {
        _classCallCheck(this, MapsAPILoader);
      });

      MapsAPILoader.??fac = function MapsAPILoader_Factory(t) {
        return new (t || MapsAPILoader)();
      };

      MapsAPILoader.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: MapsAPILoader,
        factory: function factory(t) {
          return MapsAPILoader.??fac(t);
        }
      });
      /**
       * Wrapper class that handles the communication with the Google Maps Javascript
       * API v3
       */

      var GoogleMapsAPIWrapper = /*#__PURE__*/function () {
        function GoogleMapsAPIWrapper(_loader, _zone) {
          var _this = this;

          _classCallCheck(this, GoogleMapsAPIWrapper);

          this._loader = _loader;
          this._zone = _zone;
          this._map = new Promise(function (resolve) {
            _this._mapResolver = resolve;
          });
        }

        _createClass(GoogleMapsAPIWrapper, [{
          key: "createMap",
          value: function createMap(el, mapOptions) {
            var _this2 = this;

            return this._zone.runOutsideAngular(function () {
              return _this2._loader.load().then(function () {
                var map = new google.maps.Map(el, mapOptions);

                _this2._mapResolver(map);

                return;
              });
            });
          }
        }, {
          key: "setMapOptions",
          value: function setMapOptions(options) {
            var _this3 = this;

            return this._zone.runOutsideAngular(function () {
              _this3._map.then(function (m) {
                m.setOptions(options);
              });
            });
          }
          /**
           * Creates a google map marker with the map context
           */

        }, {
          key: "createMarker",
          value: function createMarker() {
            var _this4 = this;

            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var addToMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
            return this._zone.runOutsideAngular(function () {
              return _this4._map.then(function (map) {
                if (addToMap) {
                  options.map = map;
                }

                return new google.maps.Marker(options);
              });
            });
          }
        }, {
          key: "createInfoWindow",
          value: function createInfoWindow(options) {
            var _this5 = this;

            return this._zone.runOutsideAngular(function () {
              return _this5._map.then(function () {
                return new google.maps.InfoWindow(options);
              });
            });
          }
          /**
           * Creates a google.map.Circle for the current map.
           */

        }, {
          key: "createCircle",
          value: function createCircle(options) {
            var _this6 = this;

            return this._zone.runOutsideAngular(function () {
              return _this6._map.then(function (map) {
                if (typeof options.strokePosition === 'string') {
                  options.strokePosition = google.maps.StrokePosition[options.strokePosition];
                }

                options.map = map;
                return new google.maps.Circle(options);
              });
            });
          }
          /**
           * Creates a google.map.Rectangle for the current map.
           */

        }, {
          key: "createRectangle",
          value: function createRectangle(options) {
            var _this7 = this;

            return this._zone.runOutsideAngular(function () {
              return _this7._map.then(function (map) {
                options.map = map;
                return new google.maps.Rectangle(options);
              });
            });
          }
        }, {
          key: "createPolyline",
          value: function createPolyline(options) {
            var _this8 = this;

            return this._zone.runOutsideAngular(function () {
              return _this8.getNativeMap().then(function (map) {
                var line = new google.maps.Polyline(options);
                line.setMap(map);
                return line;
              });
            });
          }
        }, {
          key: "createPolygon",
          value: function createPolygon(options) {
            var _this9 = this;

            return this._zone.runOutsideAngular(function () {
              return _this9.getNativeMap().then(function (map) {
                var polygon = new google.maps.Polygon(options);
                polygon.setMap(map);
                return polygon;
              });
            });
          }
          /**
           * Creates a new google.map.Data layer for the current map
           */

        }, {
          key: "createDataLayer",
          value: function createDataLayer(options) {
            var _this10 = this;

            return this._zone.runOutsideAngular(function () {
              return _this10._map.then(function (m) {
                var data = new google.maps.Data(options);
                data.setMap(m);
                return data;
              });
            });
          }
          /**
           * Creates a TransitLayer instance for a map
           * @param {TransitLayerOptions} options - used for setting layer options
           * @returns {Promise<TransitLayer>} a new transit layer object
           */

        }, {
          key: "createTransitLayer",
          value: function createTransitLayer(options) {
            var _this11 = this;

            return this._zone.runOutsideAngular(function () {
              return _this11._map.then(function (map) {
                var newLayer = new google.maps.TransitLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
              });
            });
          }
          /**
           * Creates a BicyclingLayer instance for a map
           * @param {BicyclingLayerOptions} options - used for setting layer options
           * @returns {Promise<BicyclingLayer>} a new bicycling layer object
           */

        }, {
          key: "createBicyclingLayer",
          value: function createBicyclingLayer(options) {
            var _this12 = this;

            return this._zone.runOutsideAngular(function () {
              return _this12._map.then(function (map) {
                var newLayer = new google.maps.BicyclingLayer();
                newLayer.setMap(options.visible ? map : null);
                return newLayer;
              });
            });
          }
          /**
           * Determines if given coordinates are insite a Polygon path.
           */

        }, {
          key: "containsLocation",
          value: function containsLocation(latLng, polygon) {
            return google.maps.geometry.poly.containsLocation(latLng, polygon);
          }
        }, {
          key: "subscribeToMapEvent",
          value: function subscribeToMapEvent(eventName) {
            var _this13 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this13._map.then(function (m) {
                m.addListener(eventName, function (arg) {
                  _this13._zone.run(function () {
                    return observer.next(arg);
                  });
                });
              });
            });
          }
        }, {
          key: "clearInstanceListeners",
          value: function clearInstanceListeners() {
            var _this14 = this;

            return this._zone.runOutsideAngular(function () {
              _this14._map.then(function (map) {
                google.maps.event.clearInstanceListeners(map);
              });
            });
          }
        }, {
          key: "setCenter",
          value: function setCenter(latLng) {
            var _this15 = this;

            return this._zone.runOutsideAngular(function () {
              return _this15._map.then(function (map) {
                return map.setCenter(latLng);
              });
            });
          }
        }, {
          key: "getZoom",
          value: function getZoom() {
            var _this16 = this;

            return this._zone.runOutsideAngular(function () {
              return _this16._map.then(function (map) {
                return map.getZoom();
              });
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds() {
            var _this17 = this;

            return this._zone.runOutsideAngular(function () {
              return _this17._map.then(function (map) {
                return map.getBounds();
              });
            });
          }
        }, {
          key: "getMapTypeId",
          value: function getMapTypeId() {
            var _this18 = this;

            return this._zone.runOutsideAngular(function () {
              return _this18._map.then(function (map) {
                return map.getMapTypeId();
              });
            });
          }
        }, {
          key: "setZoom",
          value: function setZoom(zoom) {
            var _this19 = this;

            return this._zone.runOutsideAngular(function () {
              return _this19._map.then(function (map) {
                return map.setZoom(zoom);
              });
            });
          }
        }, {
          key: "getCenter",
          value: function getCenter() {
            var _this20 = this;

            return this._zone.runOutsideAngular(function () {
              return _this20._map.then(function (map) {
                return map.getCenter();
              });
            });
          }
        }, {
          key: "panTo",
          value: function panTo(latLng) {
            var _this21 = this;

            return this._zone.runOutsideAngular(function () {
              return _this21._map.then(function (map) {
                return map.panTo(latLng);
              });
            });
          }
        }, {
          key: "panBy",
          value: function panBy(x, y) {
            var _this22 = this;

            return this._zone.runOutsideAngular(function () {
              return _this22._map.then(function (map) {
                return map.panBy(x, y);
              });
            });
          }
        }, {
          key: "fitBounds",
          value: function fitBounds(latLng, padding) {
            var _this23 = this;

            return this._zone.runOutsideAngular(function () {
              return _this23._map.then(function (map) {
                return map.fitBounds(latLng, padding);
              });
            });
          }
        }, {
          key: "panToBounds",
          value: function panToBounds(latLng, padding) {
            var _this24 = this;

            return this._zone.runOutsideAngular(function () {
              return _this24._map.then(function (map) {
                return map.panToBounds(latLng, padding);
              });
            });
          }
          /**
           * Returns the native Google Maps Map instance. Be careful when using this instance directly.
           */

        }, {
          key: "getNativeMap",
          value: function getNativeMap() {
            return this._map;
          }
          /**
           * Triggers the given event name on the map instance.
           */

        }, {
          key: "triggerMapEvent",
          value: function triggerMapEvent(eventName) {
            return this._map.then(function (m) {
              return google.maps.event.trigger(m, eventName);
            });
          }
        }]);

        return GoogleMapsAPIWrapper;
      }();

      GoogleMapsAPIWrapper.??fac = function GoogleMapsAPIWrapper_Factory(t) {
        return new (t || GoogleMapsAPIWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](MapsAPILoader), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      GoogleMapsAPIWrapper.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: GoogleMapsAPIWrapper,
        factory: function factory(t) {
          return GoogleMapsAPIWrapper.??fac(t);
        }
      });

      GoogleMapsAPIWrapper.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      GoogleMapsAPIWrapper = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], GoogleMapsAPIWrapper);
      /**
       * This class manages Transit and Bicycling Layers for a Google Map instance.
       */

      var LayerManager = /*#__PURE__*/function () {
        function LayerManager(_wrapper) {
          _classCallCheck(this, LayerManager);

          this._wrapper = _wrapper;
          this._layers = new Map();
        }
        /**
         * Adds a transit layer to a map instance.
         * @param {AgmTransitLayer} layer - a TransitLayer object
         * @param {TransitLayerOptions} options - TransitLayerOptions options
         * @returns void
         */


        _createClass(LayerManager, [{
          key: "addTransitLayer",
          value: function addTransitLayer(layer, options) {
            var newLayer = this._wrapper.createTransitLayer(options);

            this._layers.set(layer, newLayer);
          }
          /**
           * Adds a bicycling layer to a map instance.
           * @param {AgmBicyclingLayer} layer - a bicycling layer object
           * @param {BicyclingLayerOptions} options - BicyclingLayer options
           * @returns void
           */

        }, {
          key: "addBicyclingLayer",
          value: function addBicyclingLayer(layer, options) {
            var newLayer = this._wrapper.createBicyclingLayer(options);

            this._layers.set(layer, newLayer);
          }
          /**
           * Deletes a map layer
           * @param {AgmTransitLayer|AgmBicyclingLayer} layer - the layer to delete
           * @returns  Promise<void>
           */

        }, {
          key: "deleteLayer",
          value: function deleteLayer(layer) {
            var _this25 = this;

            return this._layers.get(layer).then(function (currentLayer) {
              currentLayer.setMap(null);

              _this25._layers["delete"](layer);
            });
          }
          /**
           * Hide/Show a google map layer
           * @param { AgmTransitLayer|AgmBicyclingLayer} layer - the layer to hide/show
           * @param {TransitLayerOptions|BicyclingLayerOptions} options - used to set visibility of the layer
           * @returns Promise<void>
           */

        }, {
          key: "toggleLayerVisibility",
          value: function toggleLayerVisibility(layer, options) {
            var _this26 = this;

            return this._layers.get(layer).then(function (currentLayer) {
              if (!options.visible) {
                currentLayer.setMap(null);
                return;
              } else {
                return _this26._wrapper.getNativeMap().then(function (map) {
                  currentLayer.setMap(map);
                });
              }
            });
          }
        }]);

        return LayerManager;
      }();

      LayerManager.??fac = function LayerManager_Factory(t) {
        return new (t || LayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper));
      };

      LayerManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: LayerManager,
        factory: function factory(t) {
          return LayerManager.??fac(t);
        }
      });

      LayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }];
      };

      LayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper])], LayerManager);
      var layerId = 0;
      /*
       * This directive adds a bicycling layer to a google map instance
       * <agm-bicycling-layer [visible]="true|false"> <agm-bicycling-layer>
       * */

      var AgmBicyclingLayer = /*#__PURE__*/function () {
        function AgmBicyclingLayer(_manager) {
          _classCallCheck(this, AgmBicyclingLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId++).toString();
          /**
           * Hide/show bicycling layer
           */

          this.visible = true;
        }

        _createClass(AgmBicyclingLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addBicyclingLayer(this, {
              visible: this.visible
            });

            this._addedToManager = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            if (changes['visible'] != null) {
              this._manager.toggleLayerVisibility(this, {
                visible: changes['visible'].currentValue
              });
            }
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmBicyclingLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteLayer(this);
          }
        }]);

        return AgmBicyclingLayer;
      }();

      AgmBicyclingLayer.??fac = function AgmBicyclingLayer_Factory(t) {
        return new (t || AgmBicyclingLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](LayerManager));
      };

      AgmBicyclingLayer.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmBicyclingLayer,
        selectors: [["agm-bicycling-layer"]],
        inputs: {
          visible: "visible"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      AgmBicyclingLayer.ctorParameters = function () {
        return [{
          type: LayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmBicyclingLayer.prototype, "visible", void 0);
      AgmBicyclingLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmBicyclingLayer);

      var CircleManager = /*#__PURE__*/function () {
        function CircleManager(_apiWrapper, _zone) {
          _classCallCheck(this, CircleManager);

          this._apiWrapper = _apiWrapper;
          this._zone = _zone;
          this._circles = new Map();
        }

        _createClass(CircleManager, [{
          key: "addCircle",
          value: function addCircle(circle) {
            this._circles.set(circle, this._apiWrapper.createCircle({
              center: {
                lat: circle.latitude,
                lng: circle.longitude
              },
              clickable: circle.clickable,
              draggable: circle.draggable,
              editable: circle.editable,
              fillColor: circle.fillColor,
              fillOpacity: circle.fillOpacity,
              radius: circle.radius,
              strokeColor: circle.strokeColor,
              strokeOpacity: circle.strokeOpacity,
              strokePosition: circle.strokePosition,
              strokeWeight: circle.strokeWeight,
              visible: circle.visible,
              zIndex: circle.zIndex
            }));
          }
          /**
           * Removes the given circle from the map.
           */

        }, {
          key: "removeCircle",
          value: function removeCircle(circle) {
            var _this27 = this;

            return this._circles.get(circle).then(function (c) {
              c.setMap(null);

              _this27._circles["delete"](circle);
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(circle, options) {
            return this._circles.get(circle).then(function (c) {
              if (typeof options.strokePosition === 'string') {
                options.strokePosition = google.maps.StrokePosition[options.strokePosition];
              }

              c.setOptions(options);
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getBounds();
            });
          }
        }, {
          key: "getCenter",
          value: function getCenter(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getCenter();
            });
          }
        }, {
          key: "getRadius",
          value: function getRadius(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.getRadius();
            });
          }
        }, {
          key: "setCenter",
          value: function setCenter(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setCenter({
                lat: circle.latitude,
                lng: circle.longitude
              });
            });
          }
        }, {
          key: "setEditable",
          value: function setEditable(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setEditable(circle.editable);
            });
          }
        }, {
          key: "setDraggable",
          value: function setDraggable(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setDraggable(circle.draggable);
            });
          }
        }, {
          key: "setVisible",
          value: function setVisible(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setVisible(circle.visible);
            });
          }
        }, {
          key: "setRadius",
          value: function setRadius(circle) {
            return this._circles.get(circle).then(function (c) {
              return c.setRadius(circle.radius);
            });
          }
        }, {
          key: "getNativeCircle",
          value: function getNativeCircle(circle) {
            return this._circles.get(circle);
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, circle) {
            var _this28 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              var listener = null;

              _this28._circles.get(circle).then(function (c) {
                listener = c.addListener(eventName, function (e) {
                  return _this28._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });

              return function () {
                if (listener !== null) {
                  listener.remove();
                }
              };
            });
          }
        }]);

        return CircleManager;
      }();

      CircleManager.??fac = function CircleManager_Factory(t) {
        return new (t || CircleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      CircleManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: CircleManager,
        factory: function factory(t) {
          return CircleManager.??fac(t);
        }
      });

      CircleManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      CircleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CircleManager);
      var AgmCircle_1;

      var AgmCircle = AgmCircle_1 = /*#__PURE__*/function () {
        function AgmCircle(_manager) {
          _classCallCheck(this, AgmCircle);

          this._manager = _manager;
          /**
           * Indicates whether this Circle handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this circle over the map. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this circle by dragging the control points shown at
           * the center and around the circumference of the circle. Defaults to false.
           */

          this.editable = false;
          /**
           * The radius in meters on the Earth's surface.
           */

          this.radius = 0;
          /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */

          this.strokePosition = 'CENTER';
          /**
           * The stroke width in pixels.
           */

          this.strokeWeight = 0;
          /**
           * Whether this circle is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the circle's center is changed.
           */

          this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the circle.
           */

          this.circleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the circle.
           */

          this.circleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the circle.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the circle.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the circle.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the circle.
           */

          this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the circle.
           */

          this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on circle mouseout.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on circle mouseover.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mouseup event is fired on the circle.
           */

          this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the circle's radius is changed.
           */

          this.radiusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the circle is right-clicked on.
           */

          this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._circleAddedToManager = false;
          this._eventSubscriptions = [];
        }
        /** @internal */


        _createClass(AgmCircle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._manager.addCircle(this);

            this._circleAddedToManager = true;

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._circleAddedToManager) {
              return;
            }

            if (changes['latitude'] || changes['longitude']) {
              this._manager.setCenter(this);
            }

            if (changes['editable']) {
              this._manager.setEditable(this);
            }

            if (changes['draggable']) {
              this._manager.setDraggable(this);
            }

            if (changes['visible']) {
              this._manager.setVisible(this);
            }

            if (changes['radius']) {
              this._manager.setRadius(this);
            }

            this._updateCircleOptionsChanges(changes);
          }
        }, {
          key: "_updateCircleOptionsChanges",
          value: function _updateCircleOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmCircle_1._mapOptions.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            if (optionKeys.length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this29 = this;

            var events = new Map();
            events.set('center_changed', this.centerChange);
            events.set('click', this.circleClick);
            events.set('dblclick', this.circleDblClick);
            events.set('drag', this.drag);
            events.set('dragend', this.dragEnd);
            events.set('dragstart', this.dragStart);
            events.set('mousedown', this.mouseDown);
            events.set('mousemove', this.mouseMove);
            events.set('mouseout', this.mouseOut);
            events.set('mouseover', this.mouseOver);
            events.set('mouseup', this.mouseUp);
            events.set('radius_changed', this.radiusChange);
            events.set('rightclick', this.rightClick);
            events.forEach(function (eventEmitter, eventName) {
              _this29._eventSubscriptions.push(_this29._manager.createEventObservable(eventName, _this29).subscribe(function (value) {
                switch (eventName) {
                  case 'radius_changed':
                    _this29._manager.getRadius(_this29).then(function (radius) {
                      return eventEmitter.emit(radius);
                    });

                    break;

                  case 'center_changed':
                    _this29._manager.getCenter(_this29).then(function (center) {
                      return eventEmitter.emit({
                        lat: center.lat(),
                        lng: center.lng()
                      });
                    });

                    break;

                  default:
                    eventEmitter.emit({
                      coords: {
                        lat: value.latLng.lat(),
                        lng: value.latLng.lng()
                      }
                    });
                }
              }));
            });
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventSubscriptions.forEach(function (s) {
              s.unsubscribe();
            });

            this._eventSubscriptions = null;

            this._manager.removeCircle(this);
          }
          /**
           * Gets the LatLngBounds of this Circle.
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            return this._manager.getBounds(this);
          }
        }, {
          key: "getCenter",
          value: function getCenter() {
            return this._manager.getCenter(this);
          }
        }]);

        return AgmCircle;
      }();

      AgmCircle.??fac = function AgmCircle_Factory(t) {
        return new (t || AgmCircle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](CircleManager));
      };

      AgmCircle.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmCircle,
        selectors: [["agm-circle"]],
        inputs: {
          clickable: "clickable",
          draggable: ["circleDraggable", "draggable"],
          editable: "editable",
          radius: "radius",
          strokePosition: "strokePosition",
          strokeWeight: "strokeWeight",
          visible: "visible",
          latitude: "latitude",
          longitude: "longitude",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          zIndex: "zIndex"
        },
        outputs: {
          centerChange: "centerChange",
          circleClick: "circleClick",
          circleDblClick: "circleDblClick",
          drag: "drag",
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          mouseDown: "mouseDown",
          mouseMove: "mouseMove",
          mouseOut: "mouseOut",
          mouseOver: "mouseOver",
          mouseUp: "mouseUp",
          radiusChange: "radiusChange",
          rightClick: "rightClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmCircle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

      AgmCircle.ctorParameters = function () {
        return [{
          type: CircleManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('circleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "radius", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmCircle.prototype, "strokePosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmCircle.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmCircle.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "centerChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "circleDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "mouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "radiusChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmCircle.prototype, "rightClick", void 0);
      AgmCircle = AgmCircle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [CircleManager])], AgmCircle);
      /**
       * Manages all Data Layers for a Google Map instance.
       */

      var DataLayerManager = /*#__PURE__*/function () {
        function DataLayerManager(_wrapper, _zone) {
          _classCallCheck(this, DataLayerManager);

          this._wrapper = _wrapper;
          this._zone = _zone;
          this._layers = new Map();
        }
        /**
         * Adds a new Data Layer to the map.
         */


        _createClass(DataLayerManager, [{
          key: "addDataLayer",
          value: function addDataLayer(layer) {
            var _this30 = this;

            var newLayer = this._wrapper.createDataLayer({
              style: layer.style
            }).then(function (d) {
              if (layer.geoJson) {
                _this30.getDataFeatures(d, layer.geoJson).then(function (features) {
                  return d.features = features;
                });
              }

              return d;
            });

            this._layers.set(layer, newLayer);
          }
        }, {
          key: "deleteDataLayer",
          value: function deleteDataLayer(layer) {
            var _this31 = this;

            this._layers.get(layer).then(function (l) {
              l.setMap(null);

              _this31._layers["delete"](layer);
            });
          }
        }, {
          key: "updateGeoJson",
          value: function updateGeoJson(layer, geoJson) {
            var _this32 = this;

            this._layers.get(layer).then(function (l) {
              l.forEach(function (feature) {
                l.remove(feature);
                var index = l.features.indexOf(feature, 0);

                if (index > -1) {
                  l.features.splice(index, 1);
                }
              });

              _this32.getDataFeatures(l, geoJson).then(function (features) {
                return l.features = features;
              });
            });
          }
        }, {
          key: "setDataOptions",
          value: function setDataOptions(layer, options) {
            this._layers.get(layer).then(function (l) {
              l.setControlPosition(options.controlPosition);
              l.setControls(options.controls);
              l.setDrawingMode(options.drawingMode);
              l.setStyle(options.style);
            });
          }
          /**
           * Creates a Google Maps event listener for the given DataLayer as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, layer) {
            var _this33 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this33._layers.get(layer).then(function (d) {
                d.addListener(eventName, function (e) {
                  return _this33._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
          /**
           * Extract features from a geoJson using google.maps Data Class
           * @param d : google.maps.Data class instance
           * @param geoJson : url or geojson object
           */

        }, {
          key: "getDataFeatures",
          value: function getDataFeatures(d, geoJson) {
            return new Promise(function (resolve, reject) {
              if (typeof geoJson === 'object') {
                try {
                  var features = d.addGeoJson(geoJson);
                  resolve(features);
                } catch (e) {
                  reject(e);
                }
              } else if (typeof geoJson === 'string') {
                d.loadGeoJson(geoJson, null, resolve);
              } else {
                reject("Impossible to extract features from geoJson: wrong argument type");
              }
            });
          }
        }]);

        return DataLayerManager;
      }();

      DataLayerManager.??fac = function DataLayerManager_Factory(t) {
        return new (t || DataLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      DataLayerManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: DataLayerManager,
        factory: function factory(t) {
          return DataLayerManager.??fac(t);
        }
      });

      DataLayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      DataLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], DataLayerManager);
      var AgmDataLayer_1;
      var layerId$1 = 0;
      /**
       * AgmDataLayer enables the user to add data layers to the map.
       *
       * ### Example
       * ```typescript
       * import { Component } from 'angular2/core';
       * import { AgmMap, AgmDataLayer } from
       * 'angular-google-maps/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  directives: [AgmMap, AgmDataLayer],
       *  styles: [`
       *    .agm-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       * 	  <agm-data-layer [geoJson]="geoJsonObject" (layerClick)="clicked($event)" [style]="styleFunc">
       * 	  </agm-data-layer>
       * </agm-map>
       *  `
       * })
       * export class MyMapCmp {
       *   lat: number = -25.274449;
       *   lng: number = 133.775060;
       *   zoom: number = 5;
       *
       * clicked(clickEvent) {
       *    console.log(clickEvent);
       *  }
       *
       *  styleFunc(feature) {
       *    return ({
       *      clickable: false,
       *      fillColor: feature.getProperty('color'),
       *      strokeWeight: 1
       *    });
       *  }
       *
       *  geoJsonObject: Object = {
       *    "type": "FeatureCollection",
       *    "features": [
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "G",
       *          "color": "blue",
       *          "rank": "7",
       *          "ascii": "71"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [123.61, -22.14], [122.38, -21.73], [121.06, -21.69], [119.66, -22.22], [119.00, -23.40],
       *              [118.65, -24.76], [118.43, -26.07], [118.78, -27.56], [119.22, -28.57], [120.23, -29.49],
       *              [121.77, -29.87], [123.57, -29.64], [124.45, -29.03], [124.71, -27.95], [124.80, -26.70],
       *              [124.80, -25.60], [123.61, -25.64], [122.56, -25.64], [121.72, -25.72], [121.81, -26.62],
       *              [121.86, -26.98], [122.60, -26.90], [123.57, -27.05], [123.57, -27.68], [123.35, -28.18],
       *              [122.51, -28.38], [121.77, -28.26], [121.02, -27.91], [120.49, -27.21], [120.14, -26.50],
       *              [120.10, -25.64], [120.27, -24.52], [120.67, -23.68], [121.72, -23.32], [122.43, -23.48],
       *              [123.04, -24.04], [124.54, -24.28], [124.58, -23.20], [123.61, -22.14]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "o",
       *          "color": "red",
       *          "rank": "15",
       *          "ascii": "111"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [128.84, -25.76], [128.18, -25.60], [127.96, -25.52], [127.88, -25.52], [127.70, -25.60],
       *              [127.26, -25.79], [126.60, -26.11], [126.16, -26.78], [126.12, -27.68], [126.21, -28.42],
       *              [126.69, -29.49], [127.74, -29.80], [128.80, -29.72], [129.41, -29.03], [129.72, -27.95],
       *              [129.68, -27.21], [129.33, -26.23], [128.84, -25.76]
       *            ],
       *            [
       *              [128.45, -27.44], [128.32, -26.94], [127.70, -26.82], [127.35, -27.05], [127.17, -27.80],
       *              [127.57, -28.22], [128.10, -28.42], [128.49, -27.80], [128.45, -27.44]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "o",
       *          "color": "yellow",
       *          "rank": "15",
       *          "ascii": "111"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [131.87, -25.76], [131.35, -26.07], [130.95, -26.78], [130.82, -27.64], [130.86, -28.53],
       *              [131.26, -29.22], [131.92, -29.76], [132.45, -29.87], [133.06, -29.76], [133.72, -29.34],
       *              [134.07, -28.80], [134.20, -27.91], [134.07, -27.21], [133.81, -26.31], [133.37, -25.83],
       *              [132.71, -25.64], [131.87, -25.76]
       *            ],
       *            [
       *              [133.15, -27.17], [132.71, -26.86], [132.09, -26.90], [131.74, -27.56], [131.79, -28.26],
       *              [132.36, -28.45], [132.93, -28.34], [133.15, -27.76], [133.15, -27.17]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "g",
       *          "color": "blue",
       *          "rank": "7",
       *          "ascii": "103"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [138.12, -25.04], [136.84, -25.16], [135.96, -25.36], [135.26, -25.99], [135, -26.90],
       *              [135.04, -27.91], [135.26, -28.88], [136.05, -29.45], [137.02, -29.49], [137.81, -29.49],
       *              [137.94, -29.99], [137.90, -31.20], [137.85, -32.24], [136.88, -32.69], [136.45, -32.36],
       *              [136.27, -31.80], [134.95, -31.84], [135.17, -32.99], [135.52, -33.43], [136.14, -33.76],
       *              [137.06, -33.83], [138.12, -33.65], [138.86, -33.21], [139.30, -32.28], [139.30, -31.24],
       *              [139.30, -30.14], [139.21, -28.96], [139.17, -28.22], [139.08, -27.41], [139.08, -26.47],
       *              [138.99, -25.40], [138.73, -25.00], [138.12, -25.04]
       *            ],
       *            [
       *              [137.50, -26.54], [136.97, -26.47], [136.49, -26.58], [136.31, -27.13], [136.31, -27.72],
       *              [136.58, -27.99], [137.50, -28.03], [137.68, -27.68], [137.59, -26.78], [137.50, -26.54]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "l",
       *          "color": "green",
       *          "rank": "12",
       *          "ascii": "108"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [140.14, -21.04], [140.31, -29.42], [141.67, -29.49], [141.59, -20.92], [140.14, -21.04]
       *            ]
       *          ]
       *        }
       *      },
       *      {
       *        "type": "Feature",
       *        "properties": {
       *          "letter": "e",
       *          "color": "red",
       *          "rank": "5",
       *          "ascii": "101"
       *        },
       *        "geometry": {
       *          "type": "Polygon",
       *          "coordinates": [
       *            [
       *              [144.14, -27.41], [145.67, -27.52], [146.86, -27.09], [146.82, -25.64], [146.25, -25.04],
       *              [145.45, -24.68], [144.66, -24.60], [144.09, -24.76], [143.43, -25.08], [142.99, -25.40],
       *              [142.64, -26.03], [142.64, -27.05], [142.64, -28.26], [143.30, -29.11], [144.18, -29.57],
       *              [145.41, -29.64], [146.46, -29.19], [146.64, -28.72], [146.82, -28.14], [144.84, -28.42],
       *              [144.31, -28.26], [144.14, -27.41]
       *            ],
       *            [
       *              [144.18, -26.39], [144.53, -26.58], [145.19, -26.62], [145.72, -26.35], [145.81, -25.91],
       *              [145.41, -25.68], [144.97, -25.68], [144.49, -25.64], [144, -25.99], [144.18, -26.39]
       *            ]
       *          ]
       *        }
       *      }
       *    ]
       *  };
       * }
       * ```
       */

      var AgmDataLayer = AgmDataLayer_1 = /*#__PURE__*/function () {
        function AgmDataLayer(_manager) {
          _classCallCheck(this, AgmDataLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$1++).toString();
          this._subscriptions = [];
          /**
           * This event is fired when a feature in the layer is clicked.
           */

          this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * The geoJson to be displayed
           */

          this.geoJson = null;
        }

        _createClass(AgmDataLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addDataLayer(this);

            this._addedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this34 = this;

            var listeners = [{
              name: 'click',
              handler: function handler(ev) {
                return _this34.layerClick.emit(ev);
              }
            }];
            listeners.forEach(function (obj) {
              var os = _this34._manager.createEventObservable(obj.name, _this34).subscribe(obj.handler);

              _this34._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmDataLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteDataLayer(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var _this35 = this;

            if (!this._addedToManager) {
              return;
            }

            var geoJsonChange = changes['geoJson'];

            if (geoJsonChange) {
              this._manager.updateGeoJson(this, geoJsonChange.currentValue);
            }

            var dataOptions = {};

            AgmDataLayer_1._dataOptionsAttributes.forEach(function (k) {
              return dataOptions[k] = changes.hasOwnProperty(k) ? changes[k].currentValue : _this35[k];
            });

            this._manager.setDataOptions(this, dataOptions);
          }
        }]);

        return AgmDataLayer;
      }();

      AgmDataLayer.??fac = function AgmDataLayer_Factory(t) {
        return new (t || AgmDataLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](DataLayerManager));
      };

      AgmDataLayer.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmDataLayer,
        selectors: [["agm-data-layer"]],
        inputs: {
          geoJson: "geoJson",
          style: "style"
        },
        outputs: {
          layerClick: "layerClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmDataLayer._dataOptionsAttributes = ['style'];

      AgmDataLayer.ctorParameters = function () {
        return [{
          type: DataLayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmDataLayer.prototype, "layerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmDataLayer.prototype, "geoJson", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function)], AgmDataLayer.prototype, "style", void 0);
      AgmDataLayer = AgmDataLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [DataLayerManager])], AgmDataLayer);
      /**
       * Class to implement when you what to be able to make it work with the auto fit bounds feature
       * of AGM.
       */

      var FitBoundsAccessor = /*#__PURE__*/_createClass(function FitBoundsAccessor() {
        _classCallCheck(this, FitBoundsAccessor);
      });
      /**
       * The FitBoundsService is responsible for computing the bounds of the a single map.
       */


      var FitBoundsService = /*#__PURE__*/function () {
        function FitBoundsService(loader) {
          var _this36 = this;

          _classCallCheck(this, FitBoundsService);

          this._boundsChangeSampleTime$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](200);
          this._includeInBounds$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new Map());
          this.bounds$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(loader.load()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function () {
            return _this36._includeInBounds$;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["sample"])(this._boundsChangeSampleTime$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (time) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(0, time);
          }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (includeInBounds) {
            return _this36._generateBounds(includeInBounds);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["shareReplay"])(1));
        }

        _createClass(FitBoundsService, [{
          key: "_generateBounds",
          value: function _generateBounds(includeInBounds) {
            var bounds = new google.maps.LatLngBounds();
            includeInBounds.forEach(function (b) {
              return bounds.extend(b);
            });
            return bounds;
          }
        }, {
          key: "addToBounds",
          value: function addToBounds(latLng) {
            var id = this._createIdentifier(latLng);

            if (this._includeInBounds$.value.has(id)) {
              return;
            }

            var map = this._includeInBounds$.value;
            map.set(id, latLng);

            this._includeInBounds$.next(map);
          }
        }, {
          key: "removeFromBounds",
          value: function removeFromBounds(latLng) {
            var map = this._includeInBounds$.value;
            map["delete"](this._createIdentifier(latLng));

            this._includeInBounds$.next(map);
          }
        }, {
          key: "changeFitBoundsChangeSampleTime",
          value: function changeFitBoundsChangeSampleTime(timeMs) {
            this._boundsChangeSampleTime$.next(timeMs);
          }
        }, {
          key: "getBounds$",
          value: function getBounds$() {
            return this.bounds$;
          }
        }, {
          key: "_createIdentifier",
          value: function _createIdentifier(latLng) {
            return "".concat(latLng.lat, "+").concat(latLng.lng);
          }
        }]);

        return FitBoundsService;
      }();

      FitBoundsService.??fac = function FitBoundsService_Factory(t) {
        return new (t || FitBoundsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](MapsAPILoader));
      };

      FitBoundsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: FitBoundsService,
        factory: function factory(t) {
          return FitBoundsService.??fac(t);
        }
      });

      FitBoundsService.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }];
      };

      FitBoundsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], FitBoundsService);
      /**
       * Adds the given directive to the auto fit bounds feature when the value is true.
       * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
       * @example
       * <agm-marker [agmFitBounds]="true"></agm-marker>
       */

      var AgmFitBounds = /*#__PURE__*/function () {
        function AgmFitBounds(_fitBoundsAccessor, _fitBoundsService) {
          _classCallCheck(this, AgmFitBounds);

          this._fitBoundsAccessor = _fitBoundsAccessor;
          this._fitBoundsService = _fitBoundsService;
          /**
           * If the value is true, the element gets added to the bounds of the map.
           * Default: true.
           */

          this.agmFitBounds = true;
          this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          this._latestFitBoundsDetails = null;
        }
        /**
         * @internal
         */


        _createClass(AgmFitBounds, [{
          key: "ngOnChanges",
          value: function ngOnChanges() {
            this._updateBounds();
          }
          /**
           * @internal
           */

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this37 = this;

            this._fitBoundsAccessor.getFitBoundsDetails$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(function (x, y) {
              return x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed$)).subscribe(function (details) {
              return _this37._updateBounds(details);
            });
          }
          /*
           Either the location changed, or visible status changed.
           Possible state changes are
           invisible -> visible
           visible -> invisible
           visible -> visible (new location)
          */

        }, {
          key: "_updateBounds",
          value: function _updateBounds(newFitBoundsDetails) {
            // either visibility will change, or location, so remove the old one anyway
            if (this._latestFitBoundsDetails) {
              this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng); // don't set latestFitBoundsDetails to null, because we can toggle visibility from
              // true -> false -> true, in which case we still need old value cached here

            }

            if (newFitBoundsDetails) {
              this._latestFitBoundsDetails = newFitBoundsDetails;
            }

            if (!this._latestFitBoundsDetails) {
              return;
            }

            if (this.agmFitBounds === true) {
              this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
            }
          }
          /**
           * @internal
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._destroyed$.next();

            this._destroyed$.complete();

            if (this._latestFitBoundsDetails !== null) {
              this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
            }
          }
        }]);

        return AgmFitBounds;
      }();

      AgmFitBounds.??fac = function AgmFitBounds_Factory(t) {
        return new (t || AgmFitBounds)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](FitBoundsAccessor, 2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](FitBoundsService));
      };

      AgmFitBounds.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmFitBounds,
        selectors: [["", "agmFitBounds", ""]],
        inputs: {
          agmFitBounds: "agmFitBounds"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      AgmFitBounds.ctorParameters = function () {
        return [{
          type: FitBoundsAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: FitBoundsService
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmFitBounds.prototype, "agmFitBounds", void 0);
      AgmFitBounds = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [FitBoundsAccessor, FitBoundsService])], AgmFitBounds);

      var MarkerManager = /*#__PURE__*/function () {
        function MarkerManager(_mapsWrapper, _zone) {
          _classCallCheck(this, MarkerManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._markers = new Map();
        }

        _createClass(MarkerManager, [{
          key: "convertAnimation",
          value: function convertAnimation(uiAnim) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!(uiAnim === null)) {
                        _context.next = 4;
                        break;
                      }

                      return _context.abrupt("return", null);

                    case 4:
                      return _context.abrupt("return", this._mapsWrapper.getNativeMap().then(function () {
                        return google.maps.Animation[uiAnim];
                      }));

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteMarker",
          value: function deleteMarker(marker) {
            var _this38 = this;

            var m = this._markers.get(marker);

            if (m == null) {
              // marker already deleted
              return Promise.resolve();
            }

            return m.then(function (m) {
              return _this38._zone.run(function () {
                m.setMap(null);

                _this38._markers["delete"](marker);
              });
            });
          }
        }, {
          key: "updateMarkerPosition",
          value: function updateMarkerPosition(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setPosition({
                lat: marker.latitude,
                lng: marker.longitude
              });
            });
          }
        }, {
          key: "updateTitle",
          value: function updateTitle(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setTitle(marker.title);
            });
          }
        }, {
          key: "updateLabel",
          value: function updateLabel(marker) {
            return this._markers.get(marker).then(function (m) {
              m.setLabel(marker.label);
            });
          }
        }, {
          key: "updateDraggable",
          value: function updateDraggable(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setDraggable(marker.draggable);
            });
          }
        }, {
          key: "updateIcon",
          value: function updateIcon(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setIcon(marker.iconUrl);
            });
          }
        }, {
          key: "updateOpacity",
          value: function updateOpacity(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setOpacity(marker.opacity);
            });
          }
        }, {
          key: "updateVisible",
          value: function updateVisible(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setVisible(marker.visible);
            });
          }
        }, {
          key: "updateZIndex",
          value: function updateZIndex(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setZIndex(marker.zIndex);
            });
          }
        }, {
          key: "updateClickable",
          value: function updateClickable(marker) {
            return this._markers.get(marker).then(function (m) {
              return m.setClickable(marker.clickable);
            });
          }
        }, {
          key: "updateAnimation",
          value: function updateAnimation(marker) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var m;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._markers.get(marker);

                    case 2:
                      m = _context2.sent;
                      _context2.t0 = m;
                      _context2.next = 6;
                      return this.convertAnimation(marker.animation);

                    case 6:
                      _context2.t1 = _context2.sent;

                      _context2.t0.setAnimation.call(_context2.t0, _context2.t1);

                    case 8:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addMarker",
          value: function addMarker(marker) {
            var _this39 = this;

            var markerPromise = new Promise(function (resolve) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this39, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.t0 = this._mapsWrapper;
                        _context3.t1 = {
                          lat: marker.latitude,
                          lng: marker.longitude
                        };
                        _context3.t2 = marker.label;
                        _context3.t3 = marker.draggable;
                        _context3.t4 = marker.iconUrl;
                        _context3.t5 = marker.opacity;
                        _context3.t6 = marker.visible;
                        _context3.t7 = marker.zIndex;
                        _context3.t8 = marker.title;
                        _context3.t9 = marker.clickable;
                        _context3.next = 12;
                        return this.convertAnimation(marker.animation);

                      case 12:
                        _context3.t10 = _context3.sent;
                        _context3.t11 = {
                          position: _context3.t1,
                          label: _context3.t2,
                          draggable: _context3.t3,
                          icon: _context3.t4,
                          opacity: _context3.t5,
                          visible: _context3.t6,
                          zIndex: _context3.t7,
                          title: _context3.t8,
                          clickable: _context3.t9,
                          animation: _context3.t10
                        };
                        return _context3.abrupt("return", _context3.t0.createMarker.call(_context3.t0, _context3.t11).then(resolve));

                      case 15:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, this);
              }));
            });

            this._markers.set(marker, markerPromise);
          }
        }, {
          key: "getNativeMarker",
          value: function getNativeMarker(marker) {
            return this._markers.get(marker);
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, marker) {
            var _this40 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this40._markers.get(marker).then(function (m) {
                m.addListener(eventName, function (e) {
                  return _this40._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return MarkerManager;
      }();

      MarkerManager.??fac = function MarkerManager_Factory(t) {
        return new (t || MarkerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      MarkerManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: MarkerManager,
        factory: function factory(t) {
          return MarkerManager.??fac(t);
        }
      });

      MarkerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      MarkerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], MarkerManager);

      var InfoWindowManager = /*#__PURE__*/function () {
        function InfoWindowManager(_mapsWrapper, _zone, _markerManager) {
          _classCallCheck(this, InfoWindowManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._markerManager = _markerManager;
          this._infoWindows = new Map();
        }

        _createClass(InfoWindowManager, [{
          key: "deleteInfoWindow",
          value: function deleteInfoWindow(infoWindow) {
            var _this41 = this;

            var iWindow = this._infoWindows.get(infoWindow);

            if (iWindow == null) {
              // info window already deleted
              return Promise.resolve();
            }

            return iWindow.then(function (i) {
              return _this41._zone.run(function () {
                i.close();

                _this41._infoWindows["delete"](infoWindow);
              });
            });
          }
        }, {
          key: "setPosition",
          value: function setPosition(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setPosition({
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
              });
            });
          }
        }, {
          key: "setZIndex",
          value: function setZIndex(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setZIndex(infoWindow.zIndex);
            });
          }
        }, {
          key: "open",
          value: function open(infoWindow) {
            var _this42 = this;

            return this._infoWindows.get(infoWindow).then(function (w) {
              if (infoWindow.hostMarker != null) {
                return _this42._markerManager.getNativeMarker(infoWindow.hostMarker).then(function (marker) {
                  return _this42._mapsWrapper.getNativeMap().then(function (map) {
                    return w.open(map, marker);
                  });
                });
              }

              return _this42._mapsWrapper.getNativeMap().then(function (map) {
                return w.open(map);
              });
            });
          }
        }, {
          key: "close",
          value: function close(infoWindow) {
            return this._infoWindows.get(infoWindow).then(function (w) {
              return w.close();
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(infoWindow, options) {
            return this._infoWindows.get(infoWindow).then(function (i) {
              return i.setOptions(options);
            });
          }
        }, {
          key: "addInfoWindow",
          value: function addInfoWindow(infoWindow) {
            var options = {
              content: infoWindow.content,
              maxWidth: infoWindow.maxWidth,
              zIndex: infoWindow.zIndex,
              disableAutoPan: infoWindow.disableAutoPan
            };

            if (typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number') {
              options.position = {
                lat: infoWindow.latitude,
                lng: infoWindow.longitude
              };
            }

            var infoWindowPromise = this._mapsWrapper.createInfoWindow(options);

            this._infoWindows.set(infoWindow, infoWindowPromise);
          }
          /**
           * Creates a Google Maps event listener for the given InfoWindow as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, infoWindow) {
            var _this43 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this43._infoWindows.get(infoWindow).then(function (i) {
                i.addListener(eventName, function (e) {
                  return _this43._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return InfoWindowManager;
      }();

      InfoWindowManager.??fac = function InfoWindowManager_Factory(t) {
        return new (t || InfoWindowManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](MarkerManager));
      };

      InfoWindowManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: InfoWindowManager,
        factory: function factory(t) {
          return InfoWindowManager.??fac(t);
        }
      });

      InfoWindowManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: MarkerManager
        }];
      };

      InfoWindowManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], MarkerManager])], InfoWindowManager);
      var AgmInfoWindow_1;
      var infoWindowId = 0;
      /**
       * AgmInfoWindow renders a info window inside a {@link AgmMarker} or standalone.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
       *        <agm-info-window [disableAutoPan]="true">
       *          Hi, this is the content of the <strong>info window</strong>
       *        </agm-info-window>
       *      </agm-marker>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmInfoWindow = AgmInfoWindow_1 = /*#__PURE__*/function () {
        function AgmInfoWindow(_infoWindowManager, _el) {
          _classCallCheck(this, AgmInfoWindow);

          this._infoWindowManager = _infoWindowManager;
          this._el = _el;
          /**
           * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
           */

          this.isOpen = false;
          /**
           * Emits an event when the info window is closed.
           */

          this.infoWindowClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._infoWindowAddedToManager = false;
          this._id = (infoWindowId++).toString();
        }

        _createClass(AgmInfoWindow, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.content = this._el.nativeElement.querySelector('.agm-info-window-content');

            this._infoWindowManager.addInfoWindow(this);

            this._infoWindowAddedToManager = true;

            this._updateOpenState();

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._infoWindowAddedToManager) {
              return;
            }

            if ((changes['latitude'] || changes['longitude']) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
              this._infoWindowManager.setPosition(this);
            }

            if (changes['zIndex']) {
              this._infoWindowManager.setZIndex(this);
            }

            if (changes['isOpen']) {
              this._updateOpenState();
            }

            this._setInfoWindowOptions(changes);
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this44 = this;

            this._infoWindowManager.createEventObservable('closeclick', this).subscribe(function () {
              _this44.isOpen = false;

              _this44.infoWindowClose.emit();
            });
          }
        }, {
          key: "_updateOpenState",
          value: function _updateOpenState() {
            this.isOpen ? this.open() : this.close();
          }
        }, {
          key: "_setInfoWindowOptions",
          value: function _setInfoWindowOptions(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmInfoWindow_1._infoWindowOptionsInputs.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            this._infoWindowManager.setOptions(this, options);
          }
          /**
           * Opens the info window.
           */

        }, {
          key: "open",
          value: function open() {
            return this._infoWindowManager.open(this);
          }
          /**
           * Closes the info window.
           */

        }, {
          key: "close",
          value: function close() {
            var _this45 = this;

            return this._infoWindowManager.close(this).then(function () {
              _this45.infoWindowClose.emit();
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return 'AgmInfoWindow-' + this._id.toString();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._infoWindowManager.deleteInfoWindow(this);
          }
        }]);

        return AgmInfoWindow;
      }();

      AgmInfoWindow.??fac = function AgmInfoWindow_Factory(t) {
        return new (t || AgmInfoWindow)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](InfoWindowManager), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
      };

      AgmInfoWindow.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AgmInfoWindow,
        selectors: [["agm-info-window"]],
        inputs: {
          isOpen: "isOpen",
          latitude: "latitude",
          longitude: "longitude",
          disableAutoPan: "disableAutoPan",
          zIndex: "zIndex",
          maxWidth: "maxWidth"
        },
        outputs: {
          infoWindowClose: "infoWindowClose"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 2,
        vars: 0,
        consts: [[1, "agm-info-window-content"]],
        template: function AgmInfoWindow_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        encapsulation: 2
      });
      AgmInfoWindow._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];

      AgmInfoWindow.ctorParameters = function () {
        return [{
          type: InfoWindowManager
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmInfoWindow.prototype, "disableAutoPan", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmInfoWindow.prototype, "maxWidth", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmInfoWindow.prototype, "isOpen", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmInfoWindow.prototype, "infoWindowClose", void 0);
      AgmInfoWindow = AgmInfoWindow_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [InfoWindowManager, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])], AgmInfoWindow);
      /**
       * Manages all KML Layers for a Google Map instance.
       */

      var KmlLayerManager = /*#__PURE__*/function () {
        function KmlLayerManager(_wrapper, _zone) {
          _classCallCheck(this, KmlLayerManager);

          this._wrapper = _wrapper;
          this._zone = _zone;
          this._layers = new Map();
        }
        /**
         * Adds a new KML Layer to the map.
         */


        _createClass(KmlLayerManager, [{
          key: "addKmlLayer",
          value: function addKmlLayer(layer) {
            var newLayer = this._wrapper.getNativeMap().then(function (m) {
              return new google.maps.KmlLayer({
                clickable: layer.clickable,
                map: m,
                preserveViewport: layer.preserveViewport,
                screenOverlays: layer.screenOverlays,
                suppressInfoWindows: layer.suppressInfoWindows,
                url: layer.url,
                zIndex: layer.zIndex
              });
            });

            this._layers.set(layer, newLayer);
          }
        }, {
          key: "setOptions",
          value: function setOptions(layer, options) {
            this._layers.get(layer).then(function (l) {
              return l.setOptions(options);
            });
          }
        }, {
          key: "deleteKmlLayer",
          value: function deleteKmlLayer(layer) {
            var _this46 = this;

            this._layers.get(layer).then(function (l) {
              l.setMap(null);

              _this46._layers["delete"](layer);
            });
          }
          /**
           * Creates a Google Maps event listener for the given KmlLayer as an Observable
           */

        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, layer) {
            var _this47 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this47._layers.get(layer).then(function (m) {
                m.addListener(eventName, function (e) {
                  return _this47._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }]);

        return KmlLayerManager;
      }();

      KmlLayerManager.??fac = function KmlLayerManager_Factory(t) {
        return new (t || KmlLayerManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      KmlLayerManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: KmlLayerManager,
        factory: function factory(t) {
          return KmlLayerManager.??fac(t);
        }
      });

      KmlLayerManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      KmlLayerManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], KmlLayerManager);
      var AgmKmlLayer_1;
      var layerId$2 = 0;

      var AgmKmlLayer = AgmKmlLayer_1 = /*#__PURE__*/function () {
        function AgmKmlLayer(_manager) {
          _classCallCheck(this, AgmKmlLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$2++).toString();
          this._subscriptions = [];
          /**
           * If true, the layer receives mouse events. Default value is true.
           */

          this.clickable = true;
          /**
           * By default, the input map is centered and zoomed to the bounding box of the contents of the
           * layer.
           * If this option is set to true, the viewport is left unchanged, unless the map's center and zoom
           * were never set.
           */

          this.preserveViewport = false;
          /**
           * Whether to render the screen overlays. Default true.
           */

          this.screenOverlays = true;
          /**
           * Suppress the rendering of info windows when layer features are clicked.
           */

          this.suppressInfoWindows = false;
          /**
           * The URL of the KML document to display.
           */

          this.url = null;
          /**
           * The z-index of the layer.
           */

          this.zIndex = null;
          /**
           * This event is fired when a feature in the layer is clicked.
           */

          this.layerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the KML layers default viewport has changed.
           */

          this.defaultViewportChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the KML layer has finished loading.
           * At this point it is safe to read the status property to determine if the layer loaded
           * successfully.
           */

          this.statusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AgmKmlLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addKmlLayer(this);

            this._addedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            this._updatePolygonOptions(changes);
          }
        }, {
          key: "_updatePolygonOptions",
          value: function _updatePolygonOptions(changes) {
            var options = Object.keys(changes).filter(function (k) {
              return AgmKmlLayer_1._kmlLayerOptions.indexOf(k) !== -1;
            }).reduce(function (obj, k) {
              obj[k] = changes[k].currentValue;
              return obj;
            }, {});

            if (Object.keys(options).length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this48 = this;

            var listeners = [{
              name: 'click',
              handler: function handler(ev) {
                return _this48.layerClick.emit(ev);
              }
            }, {
              name: 'defaultviewport_changed',
              handler: function handler() {
                return _this48.defaultViewportChange.emit();
              }
            }, {
              name: 'status_changed',
              handler: function handler() {
                return _this48.statusChange.emit();
              }
            }];
            listeners.forEach(function (obj) {
              var os = _this48._manager.createEventObservable(obj.name, _this48).subscribe(obj.handler);

              _this48._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmKmlLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteKmlLayer(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmKmlLayer;
      }();

      AgmKmlLayer.??fac = function AgmKmlLayer_Factory(t) {
        return new (t || AgmKmlLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](KmlLayerManager));
      };

      AgmKmlLayer.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmKmlLayer,
        selectors: [["agm-kml-layer"]],
        inputs: {
          clickable: "clickable",
          preserveViewport: "preserveViewport",
          screenOverlays: "screenOverlays",
          suppressInfoWindows: "suppressInfoWindows",
          url: "url",
          zIndex: "zIndex"
        },
        outputs: {
          layerClick: "layerClick",
          defaultViewportChange: "defaultViewportChange",
          statusChange: "statusChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmKmlLayer._kmlLayerOptions = ['clickable', 'preserveViewport', 'screenOverlays', 'suppressInfoWindows', 'url', 'zIndex'];

      AgmKmlLayer.ctorParameters = function () {
        return [{
          type: KmlLayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "preserveViewport", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "screenOverlays", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmKmlLayer.prototype, "suppressInfoWindows", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmKmlLayer.prototype, "url", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmKmlLayer.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "layerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "defaultViewportChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmKmlLayer.prototype, "statusChange", void 0);
      AgmKmlLayer = AgmKmlLayer_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [KmlLayerManager])], AgmKmlLayer);

      function createMVCEventObservable(array) {
        var eventNames = ['insert_at', 'remove_at', 'set_at'];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])(function (handler) {
          return eventNames.map(function (evName) {
            return array.addListener(evName, function (index, previous) {
              return handler.apply(array, [{
                'newArr': array.getArray(),
                evName: evName,
                index: index,
                previous: previous
              }]);
            });
          });
        }, function (_handler, evListeners) {
          return evListeners.forEach(function (evListener) {
            return evListener.remove();
          });
        });
      }

      var MvcArrayMock = /*#__PURE__*/function () {
        function MvcArrayMock() {
          _classCallCheck(this, MvcArrayMock);

          this.vals = [];
          this.listeners = {
            'remove_at': [],
            'insert_at': [],
            'set_at': []
          };
        }

        _createClass(MvcArrayMock, [{
          key: "clear",
          value: function clear() {
            for (var i = this.vals.length - 1; i >= 0; i--) {
              this.removeAt(i);
            }
          }
        }, {
          key: "getArray",
          value: function getArray() {
            return _toConsumableArray(this.vals);
          }
        }, {
          key: "getAt",
          value: function getAt(i) {
            return this.vals[i];
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.vals.length;
          }
        }, {
          key: "insertAt",
          value: function insertAt(i, elem) {
            this.vals.splice(i, 0, elem);
            this.listeners.insert_at.map(function (listener) {
              return listener(i);
            });
          }
        }, {
          key: "pop",
          value: function pop() {
            var _this49 = this;

            var deleted = this.vals.pop();
            this.listeners.remove_at.map(function (listener) {
              return listener(_this49.vals.length, deleted);
            });
            return deleted;
          }
        }, {
          key: "push",
          value: function push(elem) {
            var _this50 = this;

            this.vals.push(elem);
            this.listeners.insert_at.map(function (listener) {
              return listener(_this50.vals.length - 1);
            });
            return this.vals.length;
          }
        }, {
          key: "removeAt",
          value: function removeAt(i) {
            var deleted = this.vals.splice(i, 1)[0];
            this.listeners.remove_at.map(function (listener) {
              return listener(i, deleted);
            });
            return deleted;
          }
        }, {
          key: "setAt",
          value: function setAt(i, elem) {
            var deleted = this.vals[i];
            this.vals[i] = elem;
            this.listeners.set_at.map(function (listener) {
              return listener(i, deleted);
            });
          }
        }, {
          key: "forEach",
          value: function forEach(callback) {
            this.vals.forEach(callback);
          }
        }, {
          key: "addListener",
          value: function addListener(eventName, handler) {
            var listenerArr = this.listeners[eventName];
            listenerArr.push(handler);
            return {
              remove: function remove() {
                listenerArr.splice(listenerArr.indexOf(handler), 1);
              }
            };
          }
        }]);

        return MvcArrayMock;
      }();

      var PolygonManager = /*#__PURE__*/function () {
        function PolygonManager(_mapsWrapper, _zone) {
          _classCallCheck(this, PolygonManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._polygons = new Map();
        }

        _createClass(PolygonManager, [{
          key: "addPolygon",
          value: function addPolygon(path) {
            var polygonPromise = this._mapsWrapper.createPolygon({
              clickable: path.clickable,
              draggable: path.draggable,
              editable: path.editable,
              fillColor: path.fillColor,
              fillOpacity: path.fillOpacity,
              geodesic: path.geodesic,
              paths: path.paths,
              strokeColor: path.strokeColor,
              strokeOpacity: path.strokeOpacity,
              strokeWeight: path.strokeWeight,
              visible: path.visible,
              zIndex: path.zIndex
            });

            this._polygons.set(path, polygonPromise);
          }
        }, {
          key: "updatePolygon",
          value: function updatePolygon(polygon) {
            var _this51 = this;

            var m = this._polygons.get(polygon);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this51._zone.run(function () {
                l.setPaths(polygon.paths);
              });
            });
          }
        }, {
          key: "setPolygonOptions",
          value: function setPolygonOptions(path, options) {
            return this._polygons.get(path).then(function (l) {
              l.setOptions(options);
            });
          }
        }, {
          key: "deletePolygon",
          value: function deletePolygon(paths) {
            var _this52 = this;

            var m = this._polygons.get(paths);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this52._zone.run(function () {
                l.setMap(null);

                _this52._polygons["delete"](paths);
              });
            });
          }
        }, {
          key: "getPath",
          value: function getPath(polygon) {
            return this._polygons.get(polygon).then(function (polygon) {
              return polygon.getPath().getArray();
            });
          }
        }, {
          key: "getPaths",
          value: function getPaths(polygon) {
            return this._polygons.get(polygon).then(function (polygon) {
              return polygon.getPaths().getArray().map(function (p) {
                return p.getArray();
              });
            });
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, path) {
            var _this53 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this53._polygons.get(path).then(function (l) {
                l.addListener(eventName, function (e) {
                  return _this53._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }, {
          key: "createPathEventObservable",
          value: function createPathEventObservable(agmPolygon) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var polygon, paths, pathsChanges$;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this._polygons.get(agmPolygon);

                    case 2:
                      polygon = _context4.sent;
                      paths = polygon.getPaths();
                      pathsChanges$ = createMVCEventObservable(paths);
                      return _context4.abrupt("return", pathsChanges$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                        newArr: paths.getArray()
                      }), // in order to subscribe to them all
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (parentMVEvent) {
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"]).apply(void 0, _toConsumableArray( // rest parameter
                        parentMVEvent.newArr.map(function (chMVC, index) {
                          return createMVCEventObservable(chMVC).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (chMVCEvent) {
                            return {
                              parentMVEvent: parentMVEvent,
                              chMVCEvent: chMVCEvent,
                              pathIndex: index
                            };
                          }));
                        }))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
                          parentMVEvent: parentMVEvent,
                          chMVCEvent: null,
                          pathIndex: null
                        }));
                      }), // start the merged ob with an event signinifing change to parent
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), // skip the manually added event
                      Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_ref) {
                        var parentMVEvent = _ref.parentMVEvent,
                            chMVCEvent = _ref.chMVCEvent,
                            pathIndex = _ref.pathIndex;
                        var retVal;

                        if (!chMVCEvent) {
                          retVal = {
                            newArr: parentMVEvent.newArr.map(function (subArr) {
                              return subArr.getArray().map(function (latLng) {
                                return latLng.toJSON();
                              });
                            }),
                            eventName: parentMVEvent.evName,
                            index: parentMVEvent.index
                          };

                          if (parentMVEvent.previous) {
                            retVal.previous = parentMVEvent.previous.getArray();
                          }
                        } else {
                          retVal = {
                            newArr: parentMVEvent.newArr.map(function (subArr) {
                              return subArr.getArray().map(function (latLng) {
                                return latLng.toJSON();
                              });
                            }),
                            pathIndex: pathIndex,
                            eventName: chMVCEvent.evName,
                            index: chMVCEvent.index
                          };

                          if (chMVCEvent.previous) {
                            retVal.previous = chMVCEvent.previous;
                          }
                        }

                        return retVal;
                      })));

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return PolygonManager;
      }();

      PolygonManager.??fac = function PolygonManager_Factory(t) {
        return new (t || PolygonManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      PolygonManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: PolygonManager,
        factory: function factory(t) {
          return PolygonManager.??fac(t);
        }
      });

      PolygonManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      PolygonManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolygonManager);
      var PolylineManager_1;

      var PolylineManager = PolylineManager_1 = /*#__PURE__*/function () {
        function PolylineManager(_mapsWrapper, _zone) {
          _classCallCheck(this, PolylineManager);

          this._mapsWrapper = _mapsWrapper;
          this._zone = _zone;
          this._polylines = new Map();
        }

        _createClass(PolylineManager, [{
          key: "addPolyline",
          value: function addPolyline(line) {
            var _this54 = this;

            var polylinePromise = this._mapsWrapper.getNativeMap().then(function () {
              return [PolylineManager_1._convertPoints(line), PolylineManager_1._convertIcons(line)];
            }).then(function (_ref2) {
              var _ref3 = _slicedToArray(_ref2, 2),
                  path = _ref3[0],
                  icons = _ref3[1];

              return _this54._mapsWrapper.createPolyline({
                clickable: line.clickable,
                draggable: line.draggable,
                editable: line.editable,
                geodesic: line.geodesic,
                strokeColor: line.strokeColor,
                strokeOpacity: line.strokeOpacity,
                strokeWeight: line.strokeWeight,
                visible: line.visible,
                zIndex: line.zIndex,
                path: path,
                icons: icons
              });
            });

            this._polylines.set(line, polylinePromise);
          }
        }, {
          key: "updatePolylinePoints",
          value: function updatePolylinePoints(line) {
            var _this55 = this;

            var path = PolylineManager_1._convertPoints(line);

            var m = this._polylines.get(line);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this55._zone.run(function () {
                l.setPath(path);
              });
            });
          }
        }, {
          key: "updateIconSequences",
          value: function updateIconSequences(line) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this56 = this;

              var icons, m;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this._mapsWrapper.getNativeMap();

                    case 2:
                      icons = PolylineManager_1._convertIcons(line);
                      m = this._polylines.get(line);

                      if (!(m == null)) {
                        _context5.next = 6;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 6:
                      return _context5.abrupt("return", m.then(function (l) {
                        return _this56._zone.run(function () {
                          return l.setOptions({
                            icons: icons
                          });
                        });
                      }));

                    case 7:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "setPolylineOptions",
          value: function setPolylineOptions(line, options) {
            return this._polylines.get(line).then(function (l) {
              l.setOptions(options);
            });
          }
        }, {
          key: "deletePolyline",
          value: function deletePolyline(line) {
            var _this57 = this;

            var m = this._polylines.get(line);

            if (m == null) {
              return Promise.resolve();
            }

            return m.then(function (l) {
              return _this57._zone.run(function () {
                l.setMap(null);

                _this57._polylines["delete"](line);
              });
            });
          }
        }, {
          key: "getMVCPath",
          value: function getMVCPath(agmPolyline) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var polyline;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this._polylines.get(agmPolyline);

                    case 2:
                      polyline = _context6.sent;
                      return _context6.abrupt("return", polyline.getPath());

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "getPath",
          value: function getPath(agmPolyline) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.getMVCPath(agmPolyline);

                    case 2:
                      return _context7.abrupt("return", _context7.sent.getArray());

                    case 3:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, line) {
            var _this58 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
              _this58._polylines.get(line).then(function (l) {
                l.addListener(eventName, function (e) {
                  return _this58._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });
            });
          }
        }, {
          key: "createPathEventObservable",
          value: function createPathEventObservable(line) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var mvcPath;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.getMVCPath(line);

                    case 2:
                      mvcPath = _context8.sent;
                      return _context8.abrupt("return", createMVCEventObservable(mvcPath));

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }], [{
          key: "_convertPoints",
          value: function _convertPoints(line) {
            var path = line._getPoints().map(function (point) {
              return {
                lat: point.latitude,
                lng: point.longitude
              };
            });

            return path;
          }
        }, {
          key: "_convertPath",
          value: function _convertPath(path) {
            var symbolPath = google.maps.SymbolPath[path];

            if (typeof symbolPath === 'number') {
              return symbolPath;
            } else {
              return path;
            }
          }
        }, {
          key: "_convertIcons",
          value: function _convertIcons(line) {
            var icons = line._getIcons().map(function (agmIcon) {
              return {
                fixedRotation: agmIcon.fixedRotation,
                offset: agmIcon.offset,
                repeat: agmIcon.repeat,
                icon: {
                  anchor: new google.maps.Point(agmIcon.anchorX, agmIcon.anchorY),
                  fillColor: agmIcon.fillColor,
                  fillOpacity: agmIcon.fillOpacity,
                  path: PolylineManager_1._convertPath(agmIcon.path),
                  rotation: agmIcon.rotation,
                  scale: agmIcon.scale,
                  strokeColor: agmIcon.strokeColor,
                  strokeOpacity: agmIcon.strokeOpacity,
                  strokeWeight: agmIcon.strokeWeight
                }
              };
            }); // prune undefineds;


            icons.forEach(function (icon) {
              Object.entries(icon).forEach(function (_ref4) {
                var _ref5 = _slicedToArray(_ref4, 2),
                    key = _ref5[0],
                    val = _ref5[1];

                if (typeof val === 'undefined') {
                  delete icon[key];
                }
              });

              if (typeof icon.icon.anchor.x === 'undefined' || typeof icon.icon.anchor.y === 'undefined') {
                delete icon.icon.anchor;
              }
            });
            return icons;
          }
        }]);

        return PolylineManager;
      }();

      PolylineManager.??fac = function PolylineManager_Factory(t) {
        return new (t || PolylineManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      PolylineManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: PolylineManager,
        factory: function factory(t) {
          return PolylineManager.??fac(t);
        }
      });

      PolylineManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      PolylineManager = PolylineManager_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], PolylineManager);

      var RectangleManager = /*#__PURE__*/function () {
        function RectangleManager(_apiWrapper, _zone) {
          _classCallCheck(this, RectangleManager);

          this._apiWrapper = _apiWrapper;
          this._zone = _zone;
          this._rectangles = new Map();
        }

        _createClass(RectangleManager, [{
          key: "addRectangle",
          value: function addRectangle(rectangle) {
            this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
              bounds: {
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
              },
              clickable: rectangle.clickable,
              draggable: rectangle.draggable,
              editable: rectangle.editable,
              fillColor: rectangle.fillColor,
              fillOpacity: rectangle.fillOpacity,
              strokeColor: rectangle.strokeColor,
              strokeOpacity: rectangle.strokeOpacity,
              strokePosition: rectangle.strokePosition,
              strokeWeight: rectangle.strokeWeight,
              visible: rectangle.visible,
              zIndex: rectangle.zIndex
            }));
          }
          /**
           * Removes the given rectangle from the map.
           */

        }, {
          key: "removeRectangle",
          value: function removeRectangle(rectangle) {
            var _this59 = this;

            return this._rectangles.get(rectangle).then(function (r) {
              r.setMap(null);

              _this59._rectangles["delete"](rectangle);
            });
          }
        }, {
          key: "setOptions",
          value: function setOptions(rectangle, options) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setOptions(options);
            });
          }
        }, {
          key: "getBounds",
          value: function getBounds(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.getBounds();
            });
          }
        }, {
          key: "setBounds",
          value: function setBounds(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setBounds({
                north: rectangle.north,
                east: rectangle.east,
                south: rectangle.south,
                west: rectangle.west
              });
            });
          }
        }, {
          key: "setEditable",
          value: function setEditable(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setEditable(rectangle.editable);
            });
          }
        }, {
          key: "setDraggable",
          value: function setDraggable(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setDraggable(rectangle.draggable);
            });
          }
        }, {
          key: "setVisible",
          value: function setVisible(rectangle) {
            return this._rectangles.get(rectangle).then(function (r) {
              return r.setVisible(rectangle.visible);
            });
          }
        }, {
          key: "createEventObservable",
          value: function createEventObservable(eventName, rectangle) {
            var _this60 = this;

            return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
              var listener = null;

              _this60._rectangles.get(rectangle).then(function (r) {
                listener = r.addListener(eventName, function (e) {
                  return _this60._zone.run(function () {
                    return observer.next(e);
                  });
                });
              });

              return function () {
                if (listener !== null) {
                  listener.remove();
                }
              };
            });
          }
        }]);

        return RectangleManager;
      }();

      RectangleManager.??fac = function RectangleManager_Factory(t) {
        return new (t || RectangleManager)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      RectangleManager.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: RectangleManager,
        factory: function factory(t) {
          return RectangleManager.??fac(t);
        }
      });

      RectangleManager.ctorParameters = function () {
        return [{
          type: GoogleMapsAPIWrapper
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      RectangleManager = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [GoogleMapsAPIWrapper, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], RectangleManager);
      var AgmMap_1;
      /**
       * AgmMap renders a Google Map.
       * **Important note**: To be able see a map in the browser, you have to define a height for the
       * element `agm-map`.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    agm-map {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmMap = AgmMap_1 = /*#__PURE__*/function () {
        function AgmMap(_elem, _mapsWrapper, _platformId, _fitBoundsService, _zone) {
          _classCallCheck(this, AgmMap);

          this._elem = _elem;
          this._mapsWrapper = _mapsWrapper;
          this._platformId = _platformId;
          this._fitBoundsService = _fitBoundsService;
          this._zone = _zone;
          /**
           * The longitude that defines the center of the map.
           */

          this.longitude = 0;
          /**
           * The latitude that defines the center of the map.
           */

          this.latitude = 0;
          /**
           * The zoom level of the map. The default zoom level is 8.
           */

          this.zoom = 8;
          /**
           * Enables/disables if map is draggable.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = true;
          /**
           * Enables/disables zoom and center on double click. Enabled by default.
           */

          this.disableDoubleClickZoom = false;
          /**
           * Enables/disables all default UI of the Google map. Please note: When the map is created, this
           * value cannot get updated.
           */

          this.disableDefaultUI = false;
          /**
           * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
           */

          this.scrollwheel = true;
          /**
           * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
           * enabled by default.
           */

          this.keyboardShortcuts = true;
          /**
           * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
           * modes, these styles will only apply to labels and geometry.
           */

          this.styles = [];
          /**
           * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
           * used to
           * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
           */

          this.usePanning = false;
          /**
           * Sets the viewport to contain the given bounds.
           * If this option to `true`, the bounds get automatically computed from all elements that use the {@link AgmFitBounds} directive.
           */

          this.fitBounds = false;
          /**
           * The initial enabled/disabled state of the Scale control. This is disabled by default.
           */

          this.scaleControl = false;
          /**
           * The initial enabled/disabled state of the Map type control.
           */

          this.mapTypeControl = false;
          /**
           * The initial enabled/disabled state of the Pan control.
           */

          this.panControl = false;
          /**
           * The initial enabled/disabled state of the Rotate control.
           */

          this.rotateControl = false;
          /**
           * The initial enabled/disabled state of the Fullscreen control.
           */

          this.fullscreenControl = false;
          /**
           * The map mapTypeId. Defaults to 'roadmap'.
           */

          this.mapTypeId = 'roadmap';
          /**
           * When false, map icons are not clickable. A map icon represents a point of interest,
           * also known as a POI. By default map icons are clickable.
           */

          this.clickableIcons = true;
          /**
           * A map icon represents a point of interest, also known as a POI.
           * When map icons are clickable by default, an info window is displayed.
           * When this property is set to false, the info window will not be shown but the click event
           * will still fire
           */

          this.showDefaultInfoWindow = true;
          /**
           * This setting controls how gestures on the map are handled.
           * Allowed values:
           * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
           * - 'greedy'      (All touch gestures pan or zoom the map.)
           * - 'none'        (The map cannot be panned or zoomed by user gestures.)
           * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
           */

          this.gestureHandling = 'auto';
          /**
           * Controls the automatic switching behavior for the angle of incidence of
           * the map. The only allowed values are 0 and 45. The value 0 causes the map
           * to always use a 0?? overhead view regardless of the zoom level and
           * viewport. The value 45 causes the tilt angle to automatically switch to
           * 45 whenever 45?? imagery is available for the current zoom level and
           * viewport, and switch back to 0 whenever 45?? imagery is not available
           * (this is the default behavior). 45?? imagery is only available for
           * satellite and hybrid map types, within some locations, and at some zoom
           * levels. Note: getTilt returns the current tilt angle, not the value
           * specified by this option. Because getTilt and this option refer to
           * different things, do not bind() the tilt property; doing so may yield
           * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
           */

          this.tilt = 0;
          this._observableSubscriptions = [];
          /**
           * This event emitter gets emitted when the user clicks on the map (but not when they click on a
           * marker or infoWindow).
           */

          this.mapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user right-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */

          this.mapRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user double-clicks on the map (but not when they click
           * on a marker or infoWindow).
           */

          this.mapDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter is fired when the map center changes.
           */

          this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the viewport bounds have changed.
           */

          this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the mapTypeId property changes.
           */

          this.mapTypeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the map becomes idle after panning or zooming.
           */

          this.idle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the zoom level has changed.
           */

          this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the google map is fully initialized.
           * You get the google.maps.Map instance as a result of this EventEmitter.
           */

          this.mapReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the visible tiles have finished loading.
           */

          this.tilesLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }
        /** @internal */


        _createClass(AgmMap, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformServer"])(this._platformId)) {
              // The code is running on the server, do nothing
              return;
            } // todo: this should be solved with a new component and a viewChild decorator


            var container = this._elem.nativeElement.querySelector('.agm-map-container-inner');

            this._initMapInstance(container);
          }
        }, {
          key: "_initMapInstance",
          value: function _initMapInstance(el) {
            var _this61 = this;

            this._mapsWrapper.createMap(el, {
              center: {
                lat: this.latitude || 0,
                lng: this.longitude || 0
              },
              zoom: this.zoom,
              minZoom: this.minZoom,
              maxZoom: this.maxZoom,
              controlSize: this.controlSize,
              disableDefaultUI: this.disableDefaultUI,
              disableDoubleClickZoom: this.disableDoubleClickZoom,
              scrollwheel: this.scrollwheel,
              backgroundColor: this.backgroundColor,
              draggable: this.draggable,
              draggableCursor: this.draggableCursor,
              draggingCursor: this.draggingCursor,
              keyboardShortcuts: this.keyboardShortcuts,
              styles: this.styles,
              zoomControl: this.zoomControl,
              zoomControlOptions: this.zoomControlOptions,
              streetViewControl: this.streetViewControl,
              streetViewControlOptions: this.streetViewControlOptions,
              scaleControl: this.scaleControl,
              scaleControlOptions: this.scaleControlOptions,
              mapTypeControl: this.mapTypeControl,
              mapTypeControlOptions: this.mapTypeControlOptions,
              panControl: this.panControl,
              panControlOptions: this.panControlOptions,
              rotateControl: this.rotateControl,
              rotateControlOptions: this.rotateControlOptions,
              fullscreenControl: this.fullscreenControl,
              fullscreenControlOptions: this.fullscreenControlOptions,
              mapTypeId: this.mapTypeId,
              clickableIcons: this.clickableIcons,
              gestureHandling: this.gestureHandling,
              tilt: this.tilt,
              restriction: this.restriction
            }).then(function () {
              return _this61._mapsWrapper.getNativeMap();
            }).then(function (map) {
              return _this61.mapReady.emit(map);
            }); // register event listeners


            this._handleMapCenterChange();

            this._handleMapZoomChange();

            this._handleMapMouseEvents();

            this._handleBoundsChange();

            this._handleMapTypeIdChange();

            this._handleTilesLoadedEvent();

            this._handleIdleEvent();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // unsubscribe all registered observable subscriptions
            this._observableSubscriptions.forEach(function (s) {
              return s.unsubscribe();
            }); // remove all listeners from the map instance


            this._mapsWrapper.clearInstanceListeners();

            if (this._fitBoundsSubscription) {
              this._fitBoundsSubscription.unsubscribe();
            }
          }
          /* @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._updateMapOptionsChanges(changes);

            this._updatePosition(changes);
          }
        }, {
          key: "_updateMapOptionsChanges",
          value: function _updateMapOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmMap_1._mapOptionsAttributes.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            this._mapsWrapper.setMapOptions(options);
          }
          /**
           * Triggers a resize event on the google map instance.
           * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
           * Returns a promise that gets resolved after the event was triggered.
           */

        }, {
          key: "triggerResize",
          value: function triggerResize() {
            var _this62 = this;

            var recenter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
            // Note: When we would trigger the resize event and show the map in the same turn (which is a
            // common case for triggering a resize event), then the resize event would not
            // work (to show the map), so we trigger the event in a timeout.
            return new Promise(function (resolve) {
              setTimeout(function () {
                return _this62._mapsWrapper.triggerMapEvent('resize').then(function () {
                  if (recenter) {
                    _this62.fitBounds != null ? _this62._fitBounds() : _this62._setCenter();
                  }

                  resolve();
                });
              });
            });
          }
        }, {
          key: "_updatePosition",
          value: function _updatePosition(changes) {
            if (changes['latitude'] == null && changes['longitude'] == null && !changes['fitBounds']) {
              // no position update needed
              return;
            } // we prefer fitBounds in changes


            if ('fitBounds' in changes) {
              this._fitBounds();

              return;
            }

            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
              return;
            }

            this._setCenter();
          }
        }, {
          key: "_setCenter",
          value: function _setCenter() {
            var newCenter = {
              lat: this.latitude,
              lng: this.longitude
            };

            if (this.usePanning) {
              this._mapsWrapper.panTo(newCenter);
            } else {
              this._mapsWrapper.setCenter(newCenter);
            }
          }
        }, {
          key: "_fitBounds",
          value: function _fitBounds() {
            switch (this.fitBounds) {
              case true:
                this._subscribeToFitBoundsUpdates();

                break;

              case false:
                if (this._fitBoundsSubscription) {
                  this._fitBoundsSubscription.unsubscribe();
                }

                break;

              default:
                this._updateBounds(this.fitBounds, this.fitBoundsPadding);

            }
          }
        }, {
          key: "_subscribeToFitBoundsUpdates",
          value: function _subscribeToFitBoundsUpdates() {
            var _this63 = this;

            this._zone.runOutsideAngular(function () {
              _this63._fitBoundsSubscription = _this63._fitBoundsService.getBounds$().subscribe(function (b) {
                _this63._zone.run(function () {
                  return _this63._updateBounds(b, _this63.fitBoundsPadding);
                });
              });
            });
          }
        }, {
          key: "_updateBounds",
          value: function _updateBounds(bounds, padding) {
            if (!bounds) {
              return;
            }

            if (this._isLatLngBoundsLiteral(bounds) && typeof google !== 'undefined' && google && google.maps && google.maps.LatLngBounds) {
              var newBounds = new google.maps.LatLngBounds();
              newBounds.union(bounds);
              bounds = newBounds;
            }

            if (this.usePanning) {
              this._mapsWrapper.panToBounds(bounds, padding);

              return;
            }

            this._mapsWrapper.fitBounds(bounds, padding);
          }
        }, {
          key: "_isLatLngBoundsLiteral",
          value: function _isLatLngBoundsLiteral(bounds) {
            return bounds != null && bounds.extend === undefined;
          }
        }, {
          key: "_handleMapCenterChange",
          value: function _handleMapCenterChange() {
            var _this64 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(function () {
              _this64._mapsWrapper.getCenter().then(function (center) {
                _this64.latitude = center.lat();
                _this64.longitude = center.lng();

                _this64.centerChange.emit({
                  lat: _this64.latitude,
                  lng: _this64.longitude
                });
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleBoundsChange",
          value: function _handleBoundsChange() {
            var _this65 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(function () {
              _this65._mapsWrapper.getBounds().then(function (bounds) {
                _this65.boundsChange.emit(bounds);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapTypeIdChange",
          value: function _handleMapTypeIdChange() {
            var _this66 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(function () {
              _this66._mapsWrapper.getMapTypeId().then(function (mapTypeId) {
                _this66.mapTypeIdChange.emit(mapTypeId);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapZoomChange",
          value: function _handleMapZoomChange() {
            var _this67 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(function () {
              _this67._mapsWrapper.getZoom().then(function (z) {
                _this67.zoom = z;

                _this67.zoomChange.emit(z);
              });
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleIdleEvent",
          value: function _handleIdleEvent() {
            var _this68 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(function () {
              _this68.idle.emit(void 0);
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleTilesLoadedEvent",
          value: function _handleTilesLoadedEvent() {
            var _this69 = this;

            var s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(function () {
              return _this69.tilesLoaded.emit(void 0);
            });

            this._observableSubscriptions.push(s);
          }
        }, {
          key: "_handleMapMouseEvents",
          value: function _handleMapMouseEvents() {
            var _this70 = this;

            var events = [{
              name: 'click',
              emitter: this.mapClick
            }, {
              name: 'rightclick',
              emitter: this.mapRightClick
            }, {
              name: 'dblclick',
              emitter: this.mapDblClick
            }];
            events.forEach(function (e) {
              var s = _this70._mapsWrapper.subscribeToMapEvent(e.name).subscribe(function (event) {
                var value = {
                  coords: {
                    lat: event.latLng.lat(),
                    lng: event.latLng.lng()
                  },
                  placeId: event.placeId
                }; // the placeId will be undefined in case the event was not an IconMouseEvent (google types)

                if (value.placeId && !_this70.showDefaultInfoWindow) {
                  event.stop();
                }

                e.emitter.emit(value);
              });

              _this70._observableSubscriptions.push(s);
            });
          }
        }]);

        return AgmMap;
      }();

      AgmMap.??fac = function AgmMap_Factory(t) {
        return new (t || AgmMap)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](GoogleMapsAPIWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](FitBoundsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      };

      AgmMap.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: AgmMap,
        selectors: [["agm-map"]],
        hostVars: 2,
        hostBindings: function AgmMap_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????classProp"]("sebm-google-map-container", true);
          }
        },
        inputs: {
          longitude: "longitude",
          latitude: "latitude",
          zoom: "zoom",
          draggable: ["mapDraggable", "draggable"],
          disableDoubleClickZoom: "disableDoubleClickZoom",
          disableDefaultUI: "disableDefaultUI",
          scrollwheel: "scrollwheel",
          keyboardShortcuts: "keyboardShortcuts",
          styles: "styles",
          usePanning: "usePanning",
          fitBounds: "fitBounds",
          scaleControl: "scaleControl",
          mapTypeControl: "mapTypeControl",
          panControl: "panControl",
          rotateControl: "rotateControl",
          fullscreenControl: "fullscreenControl",
          mapTypeId: "mapTypeId",
          clickableIcons: "clickableIcons",
          showDefaultInfoWindow: "showDefaultInfoWindow",
          gestureHandling: "gestureHandling",
          tilt: "tilt",
          minZoom: "minZoom",
          maxZoom: "maxZoom",
          controlSize: "controlSize",
          backgroundColor: "backgroundColor",
          draggableCursor: "draggableCursor",
          draggingCursor: "draggingCursor",
          zoomControl: "zoomControl",
          zoomControlOptions: "zoomControlOptions",
          streetViewControl: "streetViewControl",
          streetViewControlOptions: "streetViewControlOptions",
          fitBoundsPadding: "fitBoundsPadding",
          scaleControlOptions: "scaleControlOptions",
          mapTypeControlOptions: "mapTypeControlOptions",
          panControlOptions: "panControlOptions",
          rotateControlOptions: "rotateControlOptions",
          fullscreenControlOptions: "fullscreenControlOptions",
          restriction: "restriction"
        },
        outputs: {
          mapClick: "mapClick",
          mapRightClick: "mapRightClick",
          mapDblClick: "mapDblClick",
          centerChange: "centerChange",
          boundsChange: "boundsChange",
          mapTypeIdChange: "mapTypeIdChange",
          idle: "idle",
          zoomChange: "zoomChange",
          mapReady: "mapReady",
          tilesLoaded: "tilesLoaded"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]],
        ngContentSelectors: _c0,
        decls: 3,
        vars: 0,
        consts: [[1, "agm-map-container-inner", "sebm-google-map-container-inner"], [1, "agm-map-content"]],
        template: function AgmMap_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????projection"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }
        },
        styles: [".agm-map-container-inner[_ngcontent-%COMP%] {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content[_ngcontent-%COMP%] {\n      display:none;\n    }"]
      });
      /**
       * Map option attributes that can change over time
       */

      AgmMap._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt', 'restriction'];

      AgmMap.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: GoogleMapsAPIWrapper
        }, {
          type: Object,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
          }]
        }, {
          type: FitBoundsService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "minZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "maxZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMap.prototype, "controlSize", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mapDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDoubleClickZoom", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "disableDefaultUI", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scrollwheel", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "backgroundColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggableCursor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "draggingCursor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "keyboardShortcuts", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "zoomControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "zoomControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmMap.prototype, "styles", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "usePanning", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmMap.prototype, "streetViewControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "streetViewControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBounds", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fitBoundsPadding", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "scaleControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "mapTypeControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "panControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "rotateControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "fullscreenControlOptions", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "mapTypeId", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "clickableIcons", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "showDefaultInfoWindow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMap.prototype, "gestureHandling", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "tilt", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMap.prototype, "restriction", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "centerChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "boundsChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapTypeIdChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "idle", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "zoomChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "mapReady", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMap.prototype, "tilesLoaded", void 0);
      AgmMap = AgmMap_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], GoogleMapsAPIWrapper, Object, FitBoundsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], AgmMap);
      var AgmMarker_1;
      var markerId = 0;
      /**
       * AgmMarker renders a map marker inside a {@link AgmMap}.
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
       *      </agm-marker>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmMarker = AgmMarker_1 = /*#__PURE__*/function () {
        function AgmMarker(_markerManager) {
          _classCallCheck(this, AgmMarker);

          this._markerManager = _markerManager;
          /**
           * If true, the marker can be dragged. Default value is false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If true, the marker is visible
           */

          this.visible = true;
          /**
           * Whether to automatically open the child info window when the marker is clicked.
           */

          this.openInfoWindow = true;
          /**
           * The marker's opacity between 0.0 and 1.0.
           */

          this.opacity = 1;
          /**
           * All markers are displayed on the map in order of their zIndex, with higher values displaying in
           * front of markers with lower values. By default, markers are displayed according to their
           * vertical position on screen, with lower markers appearing in front of markers further up the
           * screen.
           */

          this.zIndex = 1;
          /**
           * If true, the marker can be clicked. Default value is true.
           */
          // tslint:disable-next-line:no-input-rename

          this.clickable = true;
          /**
           * This event is fired when the marker's animation property changes.
           *
           * @memberof AgmMarker
           */

          this.animationChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the marker.
           */

          this.markerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks twice on the marker.
           */

          this.markerDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user rightclicks on the marker.
           */

          this.markerRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the marker.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the marker.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the marker.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user mouses over the marker.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user mouses outside the marker.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /** @internal */

          this.infoWindow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
          this._markerAddedToManger = false;
          this._observableSubscriptions = [];
          this._fitBoundsDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
          this._id = (markerId++).toString();
        }
        /* @internal */


        _createClass(AgmMarker, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this71 = this;

            this.handleInfoWindowUpdate();
            this.infoWindow.changes.subscribe(function () {
              return _this71.handleInfoWindowUpdate();
            });
          }
        }, {
          key: "handleInfoWindowUpdate",
          value: function handleInfoWindowUpdate() {
            var _this72 = this;

            if (this.infoWindow.length > 1) {
              throw new Error('Expected no more than one info window.');
            }

            this.infoWindow.forEach(function (marker) {
              marker.hostMarker = _this72;
            });
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (typeof this.latitude === 'string') {
              this.latitude = Number(this.latitude);
            }

            if (typeof this.longitude === 'string') {
              this.longitude = Number(this.longitude);
            }

            if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
              return;
            }

            if (!this._markerAddedToManger) {
              this._markerManager.addMarker(this);

              this._updateFitBoundsDetails();

              this._markerAddedToManger = true;

              this._addEventListeners();

              return;
            }

            if (changes['latitude'] || changes['longitude']) {
              this._markerManager.updateMarkerPosition(this);

              this._updateFitBoundsDetails();
            }

            if (changes['title']) {
              this._markerManager.updateTitle(this);
            }

            if (changes['label']) {
              this._markerManager.updateLabel(this);
            }

            if (changes['draggable']) {
              this._markerManager.updateDraggable(this);
            }

            if (changes['iconUrl']) {
              this._markerManager.updateIcon(this);
            }

            if (changes['opacity']) {
              this._markerManager.updateOpacity(this);
            }

            if (changes['visible']) {
              this._markerManager.updateVisible(this);
            }

            if (changes['zIndex']) {
              this._markerManager.updateZIndex(this);
            }

            if (changes['clickable']) {
              this._markerManager.updateClickable(this);
            }

            if (changes['animation']) {
              this._markerManager.updateAnimation(this);
            }
          }
          /** @internal */

        }, {
          key: "getFitBoundsDetails$",
          value: function getFitBoundsDetails$() {
            return this._fitBoundsDetails$.asObservable();
          }
        }, {
          key: "_updateFitBoundsDetails",
          value: function _updateFitBoundsDetails() {
            this._fitBoundsDetails$.next({
              latLng: {
                lat: this.latitude,
                lng: this.longitude
              }
            });
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this73 = this;

            var cs = this._markerManager.createEventObservable('click', this).subscribe(function () {
              if (_this73.openInfoWindow) {
                _this73.infoWindow.forEach(function (infoWindow) {
                  return infoWindow.open();
                });
              }

              _this73.markerClick.emit(_this73);
            });

            this._observableSubscriptions.push(cs);

            var dcs = this._markerManager.createEventObservable('dblclick', this).subscribe(function () {
              _this73.markerDblClick.emit(null);
            });

            this._observableSubscriptions.push(dcs);

            var rc = this._markerManager.createEventObservable('rightclick', this).subscribe(function () {
              _this73.markerRightClick.emit(null);
            });

            this._observableSubscriptions.push(rc);

            var ds = this._markerManager.createEventObservable('dragstart', this).subscribe(function (e) {
              _this73.dragStart.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(ds);

            var d = this._markerManager.createEventObservable('drag', this).subscribe(function (e) {
              _this73.drag.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(d);

            var de = this._markerManager.createEventObservable('dragend', this).subscribe(function (e) {
              _this73.dragEnd.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(de);

            var mover = this._markerManager.createEventObservable('mouseover', this).subscribe(function (e) {
              _this73.mouseOver.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(mover);

            var mout = this._markerManager.createEventObservable('mouseout', this).subscribe(function (e) {
              _this73.mouseOut.emit({
                coords: {
                  lat: e.latLng.lat(),
                  lng: e.latLng.lng()
                }
              });
            });

            this._observableSubscriptions.push(mout);

            var anChng = this._markerManager.createEventObservable('animation_changed', this).subscribe(function () {
              _this73.animationChange.emit(_this73.animation);
            });

            this._observableSubscriptions.push(anChng);
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return 'AgmMarker-' + this._id.toString();
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._markerManager.deleteMarker(this); // unsubscribe all registered observable subscriptions


            this._observableSubscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmMarker;
      }();

      AgmMarker.??fac = function AgmMarker_Factory(t) {
        return new (t || AgmMarker)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](MarkerManager));
      };

      AgmMarker.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmMarker,
        selectors: [["agm-marker"]],
        contentQueries: function AgmMarker_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, AgmInfoWindow, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.infoWindow = _t);
          }
        },
        inputs: {
          latitude: "latitude",
          longitude: "longitude",
          title: "title",
          label: "label",
          draggable: ["markerDraggable", "draggable"],
          iconUrl: "iconUrl",
          openInfoWindow: "openInfoWindow",
          opacity: "opacity",
          visible: "visible",
          zIndex: "zIndex",
          animation: "animation",
          clickable: ["markerClickable", "clickable"]
        },
        outputs: {
          markerClick: "markerClick",
          dragStart: "dragStart",
          drag: "drag",
          dragEnd: "dragEnd",
          mouseOver: "mouseOver",
          mouseOut: "mouseOut",
          animationChange: "animationChange",
          markerDblClick: "markerDblClick",
          markerRightClick: "markerRightClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: FitBoundsAccessor,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return AgmMarker_1;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      AgmMarker.ctorParameters = function () {
        return [{
          type: MarkerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmMarker.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "title", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "label", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "iconUrl", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "openInfoWindow", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "opacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('markerClickable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmMarker.prototype, "animation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmMarker.prototype, "animationChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "markerRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmMarker.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmInfoWindow), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmMarker.prototype, "infoWindow", void 0);
      AgmMarker = AgmMarker_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MarkerManager])], AgmMarker);
      var AgmPolygon_1;
      /**
       * AgmPolygon renders a polygon on a {@link AgmMap}
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    agm-map {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polygon [paths]="paths">
       *      </agm-polygon>
       *    </agm-map>
       *  `
       * })
       * export class MyMapCmp {
       *   lat: number = 0;
       *   lng: number = 0;
       *   zoom: number = 10;
       *   paths: Array<LatLngLiteral> = [
       *     { lat: 0,  lng: 10 },
       *     { lat: 0,  lng: 20 },
       *     { lat: 10, lng: 20 },
       *     { lat: 10, lng: 10 },
       *     { lat: 0,  lng: 10 }
       *   ]
       *   // Nesting paths will create a hole where they overlap;
       *   nestedPaths: Array<Array<LatLngLiteral>> = [[
       *     { lat: 0,  lng: 10 },
       *     { lat: 0,  lng: 20 },
       *     { lat: 10, lng: 20 },
       *     { lat: 10, lng: 10 },
       *     { lat: 0,  lng: 10 }
       *   ], [
       *     { lat: 0, lng: 15 },
       *     { lat: 0, lng: 20 },
       *     { lat: 5, lng: 20 },
       *     { lat: 5, lng: 15 },
       *     { lat: 0, lng: 15 }
       *   ]]
       * }
       * ```
       */

      var AgmPolygon = AgmPolygon_1 = /*#__PURE__*/function () {
        function AgmPolygon(_polygonManager) {
          _classCallCheck(this, AgmPolygon);

          this._polygonManager = _polygonManager;
          /**
           * Indicates whether this Polygon handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this shape over the map. The geodesic
           * property defines the mode of dragging. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this shape by dragging the control
           * points shown at the vertices and on each segment. Defaults to false.
           */

          this.editable = false;
          /**
           * When true, edges of the polygon are interpreted as geodesic and will
           * follow the curvature of the Earth. When false, edges of the polygon are
           * rendered as straight lines in screen space. Note that the shape of a
           * geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */

          this.geodesic = false;
          /**
           * The ordered sequence of coordinates that designates a closed loop.
           * Unlike polylines, a polygon may consist of one or more paths.
           *  As a result, the paths property may specify one or more arrays of
           * LatLng coordinates. Paths are closed automatically; do not repeat the
           * first vertex of the path as the last vertex. Simple polygons may be
           * defined using a single array of LatLngs. More complex polygons may
           * specify an array of arrays. Any simple arrays are converted into Arrays.
           * Inserting or removing LatLngs from the Array will automatically update
           * the polygon on the map.
           */

          this.paths = [];
          /**
           * This event is fired when the DOM click event is fired on the Polygon.
           */

          this.polyClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM dblclick event is fired on the Polygon.
           */

          this.polyDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the polygon.
           */

          this.polyDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the polygon.
           */

          this.polyDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the polygon.
           */

          this.polyDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the Polygon.
           */

          this.polyMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the Polygon.
           */

          this.polyMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polygon mouseout.
           */

          this.polyMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polygon mouseover.
           */

          this.polyMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired whe the DOM mouseup event is fired on the Polygon
           */

          this.polyMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the Polygon is right-clicked on.
           */

          this.polyRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired after Polygon first path changes.
           */

          this.polyPathsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._polygonAddedToManager = false;
          this._subscriptions = [];
        }
        /** @internal */


        _createClass(AgmPolygon, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            if (!this._polygonAddedToManager) {
              this._init();
            }
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._polygonAddedToManager) {
              this._init();

              return;
            }

            this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
          }
        }, {
          key: "_init",
          value: function _init() {
            this._polygonManager.addPolygon(this);

            this._polygonAddedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this74 = this;

            var handlers = [{
              name: 'click',
              handler: function handler(ev) {
                return _this74.polyClick.emit(ev);
              }
            }, {
              name: 'dblclick',
              handler: function handler(ev) {
                return _this74.polyDblClick.emit(ev);
              }
            }, {
              name: 'drag',
              handler: function handler(ev) {
                return _this74.polyDrag.emit(ev);
              }
            }, {
              name: 'dragend',
              handler: function handler(ev) {
                return _this74.polyDragEnd.emit(ev);
              }
            }, {
              name: 'dragstart',
              handler: function handler(ev) {
                return _this74.polyDragStart.emit(ev);
              }
            }, {
              name: 'mousedown',
              handler: function handler(ev) {
                return _this74.polyMouseDown.emit(ev);
              }
            }, {
              name: 'mousemove',
              handler: function handler(ev) {
                return _this74.polyMouseMove.emit(ev);
              }
            }, {
              name: 'mouseout',
              handler: function handler(ev) {
                return _this74.polyMouseOut.emit(ev);
              }
            }, {
              name: 'mouseover',
              handler: function handler(ev) {
                return _this74.polyMouseOver.emit(ev);
              }
            }, {
              name: 'mouseup',
              handler: function handler(ev) {
                return _this74.polyMouseUp.emit(ev);
              }
            }, {
              name: 'rightclick',
              handler: function handler(ev) {
                return _this74.polyRightClick.emit(ev);
              }
            }];
            handlers.forEach(function (obj) {
              var os = _this74._polygonManager.createEventObservable(obj.name, _this74).subscribe(obj.handler);

              _this74._subscriptions.push(os);
            });

            this._polygonManager.createPathEventObservable(this).then(function (paths$) {
              var os = paths$.subscribe(function (pathEvent) {
                return _this74.polyPathsChange.emit(pathEvent);
              });

              _this74._subscriptions.push(os);
            });
          }
        }, {
          key: "_updatePolygonOptions",
          value: function _updatePolygonOptions(changes) {
            return Object.keys(changes).filter(function (k) {
              return AgmPolygon_1._polygonOptionsAttributes.indexOf(k) !== -1;
            }).reduce(function (obj, k) {
              obj[k] = changes[k].currentValue;
              return obj;
            }, {});
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._polygonManager.deletePolygon(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }, {
          key: "getPath",
          value: function getPath() {
            return this._polygonManager.getPath(this);
          }
        }, {
          key: "getPaths",
          value: function getPaths() {
            return this._polygonManager.getPaths(this);
          }
        }]);

        return AgmPolygon;
      }();

      AgmPolygon.??fac = function AgmPolygon_Factory(t) {
        return new (t || AgmPolygon)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](PolygonManager));
      };

      AgmPolygon.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmPolygon,
        selectors: [["agm-polygon"]],
        inputs: {
          clickable: "clickable",
          draggable: ["polyDraggable", "draggable"],
          editable: "editable",
          geodesic: "geodesic",
          paths: "paths",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight",
          visible: "visible",
          zIndex: "zIndex"
        },
        outputs: {
          polyClick: "polyClick",
          polyDblClick: "polyDblClick",
          polyDrag: "polyDrag",
          polyDragEnd: "polyDragEnd",
          polyDragStart: "polyDragStart",
          polyMouseDown: "polyMouseDown",
          polyMouseMove: "polyMouseMove",
          polyMouseOut: "polyMouseOut",
          polyMouseOver: "polyMouseOver",
          polyMouseUp: "polyMouseUp",
          polyRightClick: "polyRightClick",
          polyPathsChange: "polyPathsChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmPolygon._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];

      AgmPolygon.ctorParameters = function () {
        return [{
          type: PolygonManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polyDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "geodesic", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], AgmPolygon.prototype, "paths", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolygon.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolygon.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolygon.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDrag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyDragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyMouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolygon.prototype, "polyRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolygon.prototype, "polyPathsChange", void 0);
      AgmPolygon = AgmPolygon_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolygonManager])], AgmPolygon);
      /**
       * AgmPolylineIcon enables to add polyline sequences to add arrows, circle,
       * or custom icons either along the entire line, or in a specific part of it.
       * See https://developers.google.com/maps/documentation/javascript/shapes#polyline_customize
       *
       * ### Example
       * ```html
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polyline>
       *          <agm-icon-sequence [fixedRotation]="true" [path]="'FORWARD_OPEN_ARROW'">
       *          </agm-icon-sequence>
       *      </agm-polyline>
       *    </agm-map>
       * ```
       *
       * @export
       * @class AgmPolylineIcon
       */

      var AgmPolylineIcon = /*#__PURE__*/function () {
        function AgmPolylineIcon() {
          _classCallCheck(this, AgmPolylineIcon);
        }

        _createClass(AgmPolylineIcon, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.path == null) {
              throw new Error('Icon Sequence path is required');
            }
          }
        }]);

        return AgmPolylineIcon;
      }();

      AgmPolylineIcon.??fac = function AgmPolylineIcon_Factory(t) {
        return new (t || AgmPolylineIcon)();
      };

      AgmPolylineIcon.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmPolylineIcon,
        selectors: [["agm-icon-sequence"]],
        inputs: {
          fixedRotation: "fixedRotation",
          offset: "offset",
          repeat: "repeat",
          anchorX: "anchorX",
          anchorY: "anchorY",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          path: "path",
          rotation: "rotation",
          scale: "scale",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight"
        }
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], AgmPolylineIcon.prototype, "fixedRotation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "offset", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "repeat", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorX", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "anchorY", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "path", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "rotation", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "scale", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolylineIcon.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylineIcon.prototype, "strokeWeight", void 0);
      var AgmPolylinePoint_1;
      /**
       * AgmPolylinePoint represents one element of a polyline within a  {@link
       * AgmPolyline}
       */

      var AgmPolylinePoint = AgmPolylinePoint_1 = /*#__PURE__*/function () {
        function AgmPolylinePoint() {
          _classCallCheck(this, AgmPolylinePoint);

          /**
           * This event emitter gets emitted when the position of the point changed.
           */
          this.positionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        }

        _createClass(AgmPolylinePoint, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes['latitude'] || changes['longitude']) {
              var position = {
                lat: changes['latitude'] ? changes['latitude'].currentValue : this.latitude,
                lng: changes['longitude'] ? changes['longitude'].currentValue : this.longitude
              };
              this.positionChanged.emit(position);
            }
          }
          /** @internal */

        }, {
          key: "getFitBoundsDetails$",
          value: function getFitBoundsDetails$() {
            return this.positionChanged.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])({
              lat: this.latitude,
              lng: this.longitude
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (position) {
              return {
                latLng: position
              };
            }));
          }
        }]);

        return AgmPolylinePoint;
      }();

      AgmPolylinePoint.??fac = function AgmPolylinePoint_Factory(t) {
        return new (t || AgmPolylinePoint)();
      };

      AgmPolylinePoint.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmPolylinePoint,
        selectors: [["agm-polyline-point"]],
        inputs: {
          latitude: "latitude",
          longitude: "longitude"
        },
        outputs: {
          positionChanged: "positionChanged"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????ProvidersFeature"]([{
          provide: FitBoundsAccessor,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
            return AgmPolylinePoint_1;
          })
        }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "latitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolylinePoint.prototype, "longitude", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolylinePoint.prototype, "positionChanged", void 0);
      AgmPolylinePoint = AgmPolylinePoint_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], AgmPolylinePoint);
      var AgmPolyline_1;
      var polylineId = 0;
      /**
       * AgmPolyline renders a polyline on a {@link AgmMap}
       *
       * ### Example
       * ```typescript
       * import { Component } from '@angular/core';
       *
       * @Component({
       *  selector: 'my-map-cmp',
       *  styles: [`
       *    .agm-map-container {
       *      height: 300px;
       *    }
       * `],
       *  template: `
       *    <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
       *      <agm-polyline>
       *          <agm-polyline-point [latitude]="latA" [longitude]="lngA">
       *          </agm-polyline-point>
       *          <agm-polyline-point [latitude]="latB" [longitude]="lngB">
       *          </agm-polyline-point>
       *      </agm-polyline>
       *    </agm-map>
       *  `
       * })
       * ```
       */

      var AgmPolyline = AgmPolyline_1 = /*#__PURE__*/function () {
        function AgmPolyline(_polylineManager) {
          _classCallCheck(this, AgmPolyline);

          this._polylineManager = _polylineManager;
          /**
           * Indicates whether this Polyline handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this shape over the map. The geodesic property defines the
           * mode of dragging. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this shape by dragging the control points shown at the
           * vertices and on each segment. Defaults to false.
           */

          this.editable = false;
          /**
           * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
           * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
           * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
           * are maintained relative to the surface of the earth. Defaults to false.
           */

          this.geodesic = false;
          /**
           * Whether this polyline is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the DOM click event is fired on the Polyline.
           */

          this.lineClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM dblclick event is fired on the Polyline.
           */

          this.lineDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the polyline.
           */

          this.lineDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the polyline.
           */

          this.lineDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the polyline.
           */

          this.lineDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the Polyline.
           */

          this.lineMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the Polyline.
           */

          this.lineMouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polyline mouseout.
           */

          this.lineMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on Polyline mouseover.
           */

          this.lineMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired whe the DOM mouseup event is fired on the Polyline
           */

          this.lineMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the Polyline is right-clicked on.
           */

          this.lineRightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired after Polyline's path changes.
           */

          this.polyPathChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._polylineAddedToManager = false;
          this._subscriptions = [];
          this._id = (polylineId++).toString();
        }
        /** @internal */


        _createClass(AgmPolyline, [{
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this75 = this;

            if (this.points.length) {
              this.points.forEach(function (point) {
                var s = point.positionChanged.subscribe(function () {
                  _this75._polylineManager.updatePolylinePoints(_this75);
                });

                _this75._subscriptions.push(s);
              });
            }

            if (!this._polylineAddedToManager) {
              this._init();
            }

            var pointSub = this.points.changes.subscribe(function () {
              return _this75._polylineManager.updatePolylinePoints(_this75);
            });

            this._subscriptions.push(pointSub);

            this._polylineManager.updatePolylinePoints(this);

            var iconSub = this.iconSequences.changes.subscribe(function () {
              return _this75._polylineManager.updateIconSequences(_this75);
            });

            this._subscriptions.push(iconSub);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._polylineAddedToManager) {
              this._init();

              return;
            }

            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmPolyline_1._polylineOptionsAttributes.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              return options[k] = changes[k].currentValue;
            });

            this._polylineManager.setPolylineOptions(this, options);
          }
        }, {
          key: "getPath",
          value: function getPath() {
            return this._polylineManager.getPath(this);
          }
        }, {
          key: "_init",
          value: function _init() {
            this._polylineManager.addPolyline(this);

            this._polylineAddedToManager = true;

            this._addEventListeners();
          }
        }, {
          key: "_addEventListeners",
          value: function _addEventListeners() {
            var _this76 = this;

            var handlers = [{
              name: 'click',
              handler: function handler(ev) {
                return _this76.lineClick.emit(ev);
              }
            }, {
              name: 'dblclick',
              handler: function handler(ev) {
                return _this76.lineDblClick.emit(ev);
              }
            }, {
              name: 'drag',
              handler: function handler(ev) {
                return _this76.lineDrag.emit(ev);
              }
            }, {
              name: 'dragend',
              handler: function handler(ev) {
                return _this76.lineDragEnd.emit(ev);
              }
            }, {
              name: 'dragstart',
              handler: function handler(ev) {
                return _this76.lineDragStart.emit(ev);
              }
            }, {
              name: 'mousedown',
              handler: function handler(ev) {
                return _this76.lineMouseDown.emit(ev);
              }
            }, {
              name: 'mousemove',
              handler: function handler(ev) {
                return _this76.lineMouseMove.emit(ev);
              }
            }, {
              name: 'mouseout',
              handler: function handler(ev) {
                return _this76.lineMouseOut.emit(ev);
              }
            }, {
              name: 'mouseover',
              handler: function handler(ev) {
                return _this76.lineMouseOver.emit(ev);
              }
            }, {
              name: 'mouseup',
              handler: function handler(ev) {
                return _this76.lineMouseUp.emit(ev);
              }
            }, {
              name: 'rightclick',
              handler: function handler(ev) {
                return _this76.lineRightClick.emit(ev);
              }
            }];
            handlers.forEach(function (obj) {
              var os = _this76._polylineManager.createEventObservable(obj.name, _this76).subscribe(obj.handler);

              _this76._subscriptions.push(os);
            });

            this._polylineManager.createPathEventObservable(this).then(function (ob$) {
              var os = ob$.subscribe(function (pathEvent) {
                return _this76.polyPathChange.emit(pathEvent);
              });

              _this76._subscriptions.push(os);
            });
          }
          /** @internal */

        }, {
          key: "_getPoints",
          value: function _getPoints() {
            if (this.points) {
              return this.points.toArray();
            }

            return [];
          }
        }, {
          key: "_getIcons",
          value: function _getIcons() {
            if (this.iconSequences) {
              return this.iconSequences.toArray();
            }

            return [];
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._polylineManager.deletePolyline(this); // unsubscribe all registered observable subscriptions


            this._subscriptions.forEach(function (s) {
              return s.unsubscribe();
            });
          }
        }]);

        return AgmPolyline;
      }();

      AgmPolyline.??fac = function AgmPolyline_Factory(t) {
        return new (t || AgmPolyline)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](PolylineManager));
      };

      AgmPolyline.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmPolyline,
        selectors: [["agm-polyline"]],
        contentQueries: function AgmPolyline_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, AgmPolylinePoint, false);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????contentQuery"](dirIndex, AgmPolylineIcon, false);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.points = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????loadQuery"]()) && (ctx.iconSequences = _t);
          }
        },
        inputs: {
          clickable: "clickable",
          draggable: ["polylineDraggable", "draggable"],
          editable: "editable",
          geodesic: "geodesic",
          visible: "visible",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight",
          zIndex: "zIndex"
        },
        outputs: {
          lineClick: "lineClick",
          lineDblClick: "lineDblClick",
          lineDrag: "lineDrag",
          lineDragEnd: "lineDragEnd",
          lineDragStart: "lineDragStart",
          lineMouseDown: "lineMouseDown",
          lineMouseMove: "lineMouseMove",
          lineMouseOut: "lineMouseOut",
          lineMouseOver: "lineMouseOver",
          lineMouseUp: "lineMouseUp",
          lineRightClick: "lineRightClick",
          polyPathChange: "polyPathChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmPolyline._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex'];

      AgmPolyline.ctorParameters = function () {
        return [{
          type: PolylineManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('polylineDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "geodesic", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmPolyline.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmPolyline.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDrag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineDragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineMouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmPolyline.prototype, "lineRightClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmPolyline.prototype, "polyPathChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylinePoint), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "points", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AgmPolylineIcon), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], AgmPolyline.prototype, "iconSequences", void 0);
      AgmPolyline = AgmPolyline_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [PolylineManager])], AgmPolyline);
      var AgmRectangle_1;

      var AgmRectangle = AgmRectangle_1 = /*#__PURE__*/function () {
        function AgmRectangle(_manager) {
          _classCallCheck(this, AgmRectangle);

          this._manager = _manager;
          /**
           * Indicates whether this Rectangle handles mouse events. Defaults to true.
           */

          this.clickable = true;
          /**
           * If set to true, the user can drag this rectangle over the map. Defaults to false.
           */
          // tslint:disable-next-line:no-input-rename

          this.draggable = false;
          /**
           * If set to true, the user can edit this rectangle by dragging the control points shown at
           * the center and around the circumference of the rectangle. Defaults to false.
           */

          this.editable = false;
          /**
           * The stroke position. Defaults to CENTER.
           * This property is not supported on Internet Explorer 8 and earlier.
           */

          this.strokePosition = 'CENTER';
          /**
           * The stroke width in pixels.
           */

          this.strokeWeight = 0;
          /**
           * Whether this rectangle is visible on the map. Defaults to true.
           */

          this.visible = true;
          /**
           * This event is fired when the rectangle's is changed.
           */

          this.boundsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */

          this.rectangleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event emitter gets emitted when the user clicks on the rectangle.
           */

          this.rectangleDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is repeatedly fired while the user drags the rectangle.
           */

          this.drag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user stops dragging the rectangle.
           */

          this.dragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the user starts dragging the rectangle.
           */

          this.dragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousedown event is fired on the rectangle.
           */

          this.mouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mousemove event is fired on the rectangle.
           */

          this.mouseMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on rectangle mouseout.
           */

          this.mouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired on rectangle mouseover.
           */

          this.mouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the DOM mouseup event is fired on the rectangle.
           */

          this.mouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          /**
           * This event is fired when the rectangle is right-clicked on.
           */

          this.rightClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this._rectangleAddedToManager = false;
          this._eventSubscriptions = [];
        }
        /** @internal */


        _createClass(AgmRectangle, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._manager.addRectangle(this);

            this._rectangleAddedToManager = true;

            this._registerEventListeners();
          }
          /** @internal */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._rectangleAddedToManager) {
              return;
            }

            if (changes['north'] || changes['east'] || changes['south'] || changes['west']) {
              this._manager.setBounds(this);
            }

            if (changes['editable']) {
              this._manager.setEditable(this);
            }

            if (changes['draggable']) {
              this._manager.setDraggable(this);
            }

            if (changes['visible']) {
              this._manager.setVisible(this);
            }

            this._updateRectangleOptionsChanges(changes);
          }
        }, {
          key: "_updateRectangleOptionsChanges",
          value: function _updateRectangleOptionsChanges(changes) {
            var options = {};
            var optionKeys = Object.keys(changes).filter(function (k) {
              return AgmRectangle_1._mapOptions.indexOf(k) !== -1;
            });
            optionKeys.forEach(function (k) {
              options[k] = changes[k].currentValue;
            });

            if (optionKeys.length > 0) {
              this._manager.setOptions(this, options);
            }
          }
        }, {
          key: "_registerEventListeners",
          value: function _registerEventListeners() {
            var _this77 = this;

            var events = new Map();
            events.set('bounds_changed', this.boundsChange);
            events.set('click', this.rectangleClick);
            events.set('dblclick', this.rectangleDblClick);
            events.set('drag', this.drag);
            events.set('dragend', this.dragEnd);
            events.set('dragStart', this.dragStart);
            events.set('mousedown', this.mouseDown);
            events.set('mousemove', this.mouseMove);
            events.set('mouseout', this.mouseOut);
            events.set('mouseover', this.mouseOver);
            events.set('mouseup', this.mouseUp);
            events.set('rightclick', this.rightClick);
            events.forEach(function (eventEmitter, eventName) {
              _this77._eventSubscriptions.push(_this77._manager.createEventObservable(eventName, _this77).subscribe(function (value) {
                switch (eventName) {
                  case 'bounds_changed':
                    _this77._manager.getBounds(_this77).then(function (bounds) {
                      return eventEmitter.emit({
                        north: bounds.getNorthEast().lat(),
                        east: bounds.getNorthEast().lng(),
                        south: bounds.getSouthWest().lat(),
                        west: bounds.getSouthWest().lng()
                      });
                    });

                    break;

                  default:
                    eventEmitter.emit({
                      coords: {
                        lat: value.latLng.lat(),
                        lng: value.latLng.lng()
                      }
                    });
                }
              }));
            });
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._eventSubscriptions.forEach(function (s) {
              s.unsubscribe();
            });

            this._eventSubscriptions = null;

            this._manager.removeRectangle(this);
          }
          /**
           * Gets the LatLngBounds of this Rectangle.
           */

        }, {
          key: "getBounds",
          value: function getBounds() {
            return this._manager.getBounds(this);
          }
        }]);

        return AgmRectangle;
      }();

      AgmRectangle.??fac = function AgmRectangle_Factory(t) {
        return new (t || AgmRectangle)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](RectangleManager));
      };

      AgmRectangle.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmRectangle,
        selectors: [["agm-rectangle"]],
        inputs: {
          clickable: "clickable",
          draggable: ["rectangleDraggable", "draggable"],
          editable: "editable",
          strokePosition: "strokePosition",
          strokeWeight: "strokeWeight",
          visible: "visible",
          north: "north",
          east: "east",
          south: "south",
          west: "west",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          zIndex: "zIndex"
        },
        outputs: {
          boundsChange: "boundsChange",
          rectangleClick: "rectangleClick",
          rectangleDblClick: "rectangleDblClick",
          drag: "drag",
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          mouseDown: "mouseDown",
          mouseMove: "mouseMove",
          mouseOut: "mouseOut",
          mouseOver: "mouseOver",
          mouseUp: "mouseUp",
          rightClick: "rightClick"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });
      AgmRectangle._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];

      AgmRectangle.ctorParameters = function () {
        return [{
          type: RectangleManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "north", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "east", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "south", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "west", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "clickable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('rectangleDraggable'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "draggable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "editable", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "fillColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "fillOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokeColor", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "strokeOpacity", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], AgmRectangle.prototype, "strokePosition", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "strokeWeight", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmRectangle.prototype, "visible", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], AgmRectangle.prototype, "zIndex", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "boundsChange", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rectangleDblClick", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "drag", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragEnd", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "dragStart", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseDown", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseMove", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOut", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseOver", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "mouseUp", void 0);
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])], AgmRectangle.prototype, "rightClick", void 0);
      AgmRectangle = AgmRectangle_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [RectangleManager])], AgmRectangle);
      var layerId$3 = 0;
      /*
       * This directive adds a transit layer to a google map instance
       * <agm-transit-layer [visible]="true|false"> <agm-transit-layer>
       * */

      var AgmTransitLayer = /*#__PURE__*/function () {
        function AgmTransitLayer(_manager) {
          _classCallCheck(this, AgmTransitLayer);

          this._manager = _manager;
          this._addedToManager = false;
          this._id = (layerId$3++).toString();
          /**
           * Hide/show transit layer
           */

          this.visible = true;
        }

        _createClass(AgmTransitLayer, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this._addedToManager) {
              return;
            }

            this._manager.addTransitLayer(this, {
              visible: this.visible
            });

            this._addedToManager = true;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._addedToManager) {
              return;
            }

            if (changes['visible'] != null) {
              this._manager.toggleLayerVisibility(this, {
                visible: changes['visible'].currentValue
              });
            }
          }
          /** @internal */

        }, {
          key: "id",
          value: function id() {
            return this._id;
          }
          /** @internal */

        }, {
          key: "toString",
          value: function toString() {
            return "AgmTransitLayer-".concat(this._id.toString());
          }
          /** @internal */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._manager.deleteLayer(this);
          }
        }]);

        return AgmTransitLayer;
      }();

      AgmTransitLayer.??fac = function AgmTransitLayer_Factory(t) {
        return new (t || AgmTransitLayer)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](LayerManager));
      };

      AgmTransitLayer.??dir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineDirective"]({
        type: AgmTransitLayer,
        selectors: [["agm-transit-layer"]],
        inputs: {
          visible: "visible"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["????NgOnChangesFeature"]]
      });

      AgmTransitLayer.ctorParameters = function () {
        return [{
          type: LayerManager
        }];
      };

      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], AgmTransitLayer.prototype, "visible", void 0);
      AgmTransitLayer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [LayerManager])], AgmTransitLayer);
      var google$1;
      var SymbolPath;

      (function (SymbolPath) {
        SymbolPath[SymbolPath["BACKWARD_CLOSED_ARROW"] = 3] = "BACKWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["BACKWARD_OPEN_ARROW"] = 4] = "BACKWARD_OPEN_ARROW";
        SymbolPath[SymbolPath["CIRCLE"] = 0] = "CIRCLE";
        SymbolPath[SymbolPath["FORWARD_CLOSED_ARROW"] = 1] = "FORWARD_CLOSED_ARROW";
        SymbolPath[SymbolPath["FORWARD_OPEN_ARROW"] = 2] = "FORWARD_OPEN_ARROW";
      })(SymbolPath || (SymbolPath = {}));
      /**
       * Identifiers used to specify the placement of controls on the map. Controls are
       * positioned relative to other controls in the same layout position. Controls that
       * are added first are positioned closer to the edge of the map.
       */


      var ControlPosition;

      (function (ControlPosition) {
        ControlPosition[ControlPosition["RIGHT_BOTTOM"] = 0] = "RIGHT_BOTTOM";
        ControlPosition[ControlPosition["TOP_LEFT"] = 1] = "TOP_LEFT";
        ControlPosition[ControlPosition["TOP_CENTER"] = 2] = "TOP_CENTER";
        ControlPosition[ControlPosition["TOP_RIGHT"] = 3] = "TOP_RIGHT";
        ControlPosition[ControlPosition["LEFT_CENTER"] = 4] = "LEFT_CENTER";
        ControlPosition[ControlPosition["LEFT_TOP"] = 5] = "LEFT_TOP";
        ControlPosition[ControlPosition["LEFT_BOTTOM"] = 6] = "LEFT_BOTTOM";
        ControlPosition[ControlPosition["RIGHT_TOP"] = 7] = "RIGHT_TOP";
        ControlPosition[ControlPosition["RIGHT_CENTER"] = 8] = "RIGHT_CENTER";
        ControlPosition[ControlPosition["BOTTOM_RIGHT"] = 9] = "BOTTOM_RIGHT";
        ControlPosition[ControlPosition["BOTTOM_LEFT"] = 10] = "BOTTOM_LEFT";
        ControlPosition[ControlPosition["BOTTOM_CENTER"] = 11] = "BOTTOM_CENTER";
      })(ControlPosition || (ControlPosition = {}));

      var MapTypeId;

      (function (MapTypeId) {
        /** This map type displays a transparent layer of major streets on satellite images. */
        MapTypeId[MapTypeId["HYBRID"] = 0] = "HYBRID";
        /** This map type displays a normal street map. */

        MapTypeId[MapTypeId["ROADMAP"] = 1] = "ROADMAP";
        /** This map type displays satellite images. */

        MapTypeId[MapTypeId["SATELLITE"] = 2] = "SATELLITE";
        /** This map type displays maps with physical features such as terrain and vegetation. */

        MapTypeId[MapTypeId["TERRAIN"] = 3] = "TERRAIN";
      })(MapTypeId || (MapTypeId = {}));

      var MapTypeControlStyle;

      (function (MapTypeControlStyle) {
        MapTypeControlStyle[MapTypeControlStyle["DEFAULT"] = 0] = "DEFAULT";
        MapTypeControlStyle[MapTypeControlStyle["DROPDOWN_MENU"] = 2] = "DROPDOWN_MENU";
        MapTypeControlStyle[MapTypeControlStyle["HORIZONTAL_BAR"] = 1] = "HORIZONTAL_BAR";
      })(MapTypeControlStyle || (MapTypeControlStyle = {}));

      var ScaleControlStyle;

      (function (ScaleControlStyle) {
        ScaleControlStyle[ScaleControlStyle["DEFAULT"] = 0] = "DEFAULT";
      })(ScaleControlStyle || (ScaleControlStyle = {}));

      var ZoomControlStyle;

      (function (ZoomControlStyle) {
        ZoomControlStyle[ZoomControlStyle["DEFAULT"] = 0] = "DEFAULT";
        ZoomControlStyle[ZoomControlStyle["LARGE"] = 1] = "LARGE";
        ZoomControlStyle[ZoomControlStyle["SMALL"] = 2] = "SMALL";
      })(ZoomControlStyle || (ZoomControlStyle = {}));

      var GeocoderLocationType;

      (function (GeocoderLocationType) {
        GeocoderLocationType["APPROXIMATE"] = "APPROXIMATE";
        GeocoderLocationType["GEOMETRIC_CENTER"] = "GEOMETRIC_CENTER";
        GeocoderLocationType["RANGE_INTERPOLATED"] = "RANGE_INTERPOLATED";
        GeocoderLocationType["ROOFTOP"] = "ROOFTOP";
      })(GeocoderLocationType || (GeocoderLocationType = {}));

      var GeocoderStatus;

      (function (GeocoderStatus) {
        GeocoderStatus["ERROR"] = "ERROR";
        GeocoderStatus["INVALID_REQUEST"] = "INVALID_REQUEST";
        GeocoderStatus["OK"] = "OK";
        GeocoderStatus["OVER_QUERY_LIMIT"] = "OVER_QUERY_LIMIT";
        GeocoderStatus["REQUEST_DENIED"] = "REQUEST_DENIED";
        GeocoderStatus["UNKNOWN_ERROR"] = "UNKNOWN_ERROR";
        GeocoderStatus["ZERO_RESULTS"] = "ZERO_RESULTS";
      })(GeocoderStatus || (GeocoderStatus = {}));

      var AgmGeocoder = /*#__PURE__*/function () {
        function AgmGeocoder(loader) {
          var _this78 = this;

          _classCallCheck(this, AgmGeocoder);

          var connectableGeocoder$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (subscriber) {
            loader.load().then(function () {
              return subscriber.next();
            });
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            return _this78._createGeocoder();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["multicast"])(new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1)));
          connectableGeocoder$.connect(); // ignore the subscription
          // since we will remain subscribed till application exits

          this.geocoder$ = connectableGeocoder$;
        }

        _createClass(AgmGeocoder, [{
          key: "geocode",
          value: function geocode(request) {
            var _this79 = this;

            return this.geocoder$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (geocoder) {
              return _this79._getGoogleResults(geocoder, request);
            }));
          }
        }, {
          key: "_getGoogleResults",
          value: function _getGoogleResults(geocoder, request) {
            var geocodeObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["bindCallback"])(geocoder.geocode);
            return geocodeObservable(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (_ref6) {
              var _ref7 = _slicedToArray(_ref6, 2),
                  results = _ref7[0],
                  status = _ref7[1];

              if (status === GeocoderStatus.OK) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(results);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(status);
            }));
          }
        }, {
          key: "_createGeocoder",
          value: function _createGeocoder() {
            return new google.maps.Geocoder();
          }
        }]);

        return AgmGeocoder;
      }();

      AgmGeocoder.??fac = function AgmGeocoder_Factory(t) {
        return new (t || AgmGeocoder)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](MapsAPILoader));
      };

      AgmGeocoder.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: AgmGeocoder,
        factory: function factory(t) {
          return AgmGeocoder.??fac(t);
        },
        providedIn: 'root'
      });

      AgmGeocoder.ctorParameters = function () {
        return [{
          type: MapsAPILoader
        }];
      };

      AgmGeocoder.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"])({
        factory: function AgmGeocoder_Factory() {
          return new AgmGeocoder(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"])(MapsAPILoader));
        },
        token: AgmGeocoder,
        providedIn: "root"
      });
      AgmGeocoder = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [MapsAPILoader])], AgmGeocoder);

      var WindowRef = /*#__PURE__*/function () {
        function WindowRef() {
          _classCallCheck(this, WindowRef);
        }

        _createClass(WindowRef, [{
          key: "getNativeWindow",
          value: function getNativeWindow() {
            return window;
          }
        }]);

        return WindowRef;
      }();

      var DocumentRef = /*#__PURE__*/function () {
        function DocumentRef() {
          _classCallCheck(this, DocumentRef);
        }

        _createClass(DocumentRef, [{
          key: "getNativeDocument",
          value: function getNativeDocument() {
            return document;
          }
        }]);

        return DocumentRef;
      }();

      var BROWSER_GLOBALS_PROVIDERS = [WindowRef, DocumentRef];
      var GoogleMapsScriptProtocol;

      (function (GoogleMapsScriptProtocol) {
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
        GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
      })(GoogleMapsScriptProtocol || (GoogleMapsScriptProtocol = {}));
      /**
       * Token for the config of the LazyMapsAPILoader. Please provide an object of type {@link
       * LazyMapsAPILoaderConfig}.
       */


      var LAZY_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('angular-google-maps LAZY_MAPS_API_CONFIG');

      var LazyMapsAPILoader = /*#__PURE__*/function (_MapsAPILoader) {
        _inherits(LazyMapsAPILoader, _MapsAPILoader);

        var _super = _createSuper(LazyMapsAPILoader);

        function LazyMapsAPILoader() {
          var _this80;

          var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var w = arguments.length > 1 ? arguments[1] : undefined;
          var d = arguments.length > 2 ? arguments[2] : undefined;
          var localeId = arguments.length > 3 ? arguments[3] : undefined;

          _classCallCheck(this, LazyMapsAPILoader);

          _this80 = _super.call(this);
          _this80.localeId = localeId;
          _this80._SCRIPT_ID = 'agmGoogleMapsApiScript';
          _this80.callbackName = "agmLazyMapsAPILoader";
          _this80._config = config || {};
          _this80._windowRef = w;
          _this80._documentRef = d;
          return _this80;
        }

        _createClass(LazyMapsAPILoader, [{
          key: "load",
          value: function load() {
            var window = this._windowRef.getNativeWindow();

            if (window.google && window.google.maps) {
              // Google maps already loaded on the page.
              return Promise.resolve();
            }

            if (this._scriptLoadingPromise) {
              return this._scriptLoadingPromise;
            } // this can happen in HMR situations or Stackblitz.io editors.


            var scriptOnPage = this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);

            if (scriptOnPage) {
              this._assignScriptLoadingPromise(scriptOnPage);

              return this._scriptLoadingPromise;
            }

            var script = this._documentRef.getNativeDocument().createElement('script');

            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.id = this._SCRIPT_ID;
            script.src = this._getScriptSrc(this.callbackName);

            this._assignScriptLoadingPromise(script);

            this._documentRef.getNativeDocument().body.appendChild(script);

            return this._scriptLoadingPromise;
          }
        }, {
          key: "_assignScriptLoadingPromise",
          value: function _assignScriptLoadingPromise(scriptElem) {
            var _this81 = this;

            this._scriptLoadingPromise = new Promise(function (resolve, reject) {
              _this81._windowRef.getNativeWindow()[_this81.callbackName] = function () {
                resolve();
              };

              scriptElem.onerror = function (error) {
                reject(error);
              };
            });
          }
        }, {
          key: "_getScriptSrc",
          value: function _getScriptSrc(callbackName) {
            var protocolType = this._config && this._config.protocol || GoogleMapsScriptProtocol.HTTPS;
            var protocol;

            switch (protocolType) {
              case GoogleMapsScriptProtocol.AUTO:
                protocol = '';
                break;

              case GoogleMapsScriptProtocol.HTTP:
                protocol = 'http:';
                break;

              case GoogleMapsScriptProtocol.HTTPS:
                protocol = 'https:';
                break;
            }

            var hostAndPath = this._config.hostAndPath || 'maps.googleapis.com/maps/api/js';
            var queryParams = {
              v: this._config.apiVersion || 'quarterly',
              callback: callbackName,
              key: this._config.apiKey,
              client: this._config.clientId,
              channel: this._config.channel,
              libraries: this._config.libraries,
              region: this._config.region,
              language: this._config.language || this.localeId !== 'en-US' ? this.localeId : null
            };
            var params = Object.keys(queryParams).filter(function (k) {
              return queryParams[k] != null;
            }).filter(function (k) {
              // remove empty arrays
              return !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0;
            }).map(function (k) {
              // join arrays as comma seperated strings
              var i = queryParams[k];

              if (Array.isArray(i)) {
                return {
                  key: k,
                  value: i.join(',')
                };
              }

              return {
                key: k,
                value: queryParams[k]
              };
            }).map(function (entry) {
              return "".concat(entry.key, "=").concat(entry.value);
            }).join('&');
            return "".concat(protocol, "//").concat(hostAndPath, "?").concat(params);
          }
        }]);

        return LazyMapsAPILoader;
      }(MapsAPILoader);

      LazyMapsAPILoader.??fac = function LazyMapsAPILoader_Factory(t) {
        return new (t || LazyMapsAPILoader)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](LAZY_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](DocumentRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]));
      };

      LazyMapsAPILoader.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: LazyMapsAPILoader,
        factory: function factory(t) {
          return LazyMapsAPILoader.??fac(t);
        }
      });

      LazyMapsAPILoader.ctorParameters = function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [LAZY_MAPS_API_CONFIG]
          }]
        }, {
          type: WindowRef
        }, {
          type: DocumentRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
          }]
        }];
      };

      LazyMapsAPILoader = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(LAZY_MAPS_API_CONFIG)), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, WindowRef, DocumentRef, String])], LazyMapsAPILoader);
      /**
       * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
       * Tag.
       * It's important that the Google Maps API script gets loaded first on the page.
       */

      var NoOpMapsAPILoader = /*#__PURE__*/function () {
        function NoOpMapsAPILoader() {
          _classCallCheck(this, NoOpMapsAPILoader);
        }

        _createClass(NoOpMapsAPILoader, [{
          key: "load",
          value: function load() {
            if (!window.google || !window.google.maps) {
              throw new Error('Google Maps API not loaded on page. Make sure window.google.maps is available!');
            }

            return Promise.resolve();
          }
        }]);

        return NoOpMapsAPILoader;
      }(); // exported map types


      var AgmCoreModule_1;
      /**
       * @internal
       */

      function coreDirectives() {
        return [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer];
      }
      /**
       * The angular-google-maps core module. Contains all Directives/Services/Pipes
       * of the core module. Please use `AgmCoreModule.forRoot()` in your app module.
       */


      var AgmCoreModule = AgmCoreModule_1 = /*#__PURE__*/function () {
        function AgmCoreModule() {
          _classCallCheck(this, AgmCoreModule);
        }

        _createClass(AgmCoreModule, null, [{
          key: "forRoot",
          value:
          /**
           * Please use this method when you register the module at the root level.
           */
          function forRoot(lazyMapsAPILoaderConfig) {
            return {
              ngModule: AgmCoreModule_1,
              providers: [].concat(BROWSER_GLOBALS_PROVIDERS, [{
                provide: MapsAPILoader,
                useClass: LazyMapsAPILoader
              }, {
                provide: LAZY_MAPS_API_CONFIG,
                useValue: lazyMapsAPILoaderConfig
              }])
            };
          }
        }]);

        return AgmCoreModule;
      }();

      AgmCoreModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: AgmCoreModule
      });
      AgmCoreModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        factory: function AgmCoreModule_Factory(t) {
          return new (t || AgmCoreModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MapsAPILoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](GoogleMapsAPIWrapper, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: MapsAPILoader
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LayerManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmBicyclingLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-bicycling-layer'
          }]
        }], function () {
          return [{
            type: LayerManager
          }];
        }, {
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](CircleManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmCircle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-circle'
          }]
        }], function () {
          return [{
            type: CircleManager
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['circleDraggable']
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          radius: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          circleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          circleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          radiusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](DataLayerManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmDataLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-data-layer'
          }]
        }], function () {
          return [{
            type: DataLayerManager
          }];
        }, {
          layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          geoJson: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](FitBoundsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: MapsAPILoader
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmFitBounds, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[agmFitBounds]'
          }]
        }], function () {
          return [{
            type: FitBoundsAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
            }]
          }, {
            type: FitBoundsService
          }];
        }, {
          agmFitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](MarkerManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](InfoWindowManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }, {
            type: MarkerManager
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmInfoWindow, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'agm-info-window',
            template: "<div class='agm-info-window-content'>\n      <ng-content></ng-content>\n    </div>\n  "
          }]
        }], function () {
          return [{
            type: InfoWindowManager
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }];
        }, {
          isOpen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          infoWindowClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disableAutoPan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](KmlLayerManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmKmlLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-kml-layer'
          }]
        }], function () {
          return [{
            type: KmlLayerManager
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          preserveViewport: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          screenOverlays: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          suppressInfoWindows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          layerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          defaultViewportChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          statusChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PolygonManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](PolylineManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RectangleManager, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: GoogleMapsAPIWrapper
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmMap, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'agm-map',
            providers: [CircleManager, DataLayerManager, DataLayerManager, FitBoundsService, GoogleMapsAPIWrapper, InfoWindowManager, KmlLayerManager, LayerManager, MarkerManager, PolygonManager, PolylineManager, RectangleManager],
            host: {
              // todo: deprecated - we will remove it with the next version
              '[class.sebm-google-map-container]': 'true'
            },
            template: "\n              <div class='agm-map-container-inner sebm-google-map-container-inner'></div>\n              <div class='agm-map-content'>\n                <ng-content></ng-content>\n              </div>\n  ",
            styles: ["\n    .agm-map-container-inner {\n      width: inherit;\n      height: inherit;\n    }\n    .agm-map-content {\n      display:none;\n    }\n  "]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
          }, {
            type: GoogleMapsAPIWrapper
          }, {
            type: Object,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"]]
            }]
          }, {
            type: FitBoundsService
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
          }];
        }, {
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['mapDraggable']
          }],
          disableDoubleClickZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          disableDefaultUI: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scrollwheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          keyboardShortcuts: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          usePanning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fitBounds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scaleControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          mapTypeControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          panControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rotateControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fullscreenControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          mapTypeId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          clickableIcons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          showDefaultInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          gestureHandling: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          tilt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          mapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mapRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mapDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          centerChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mapTypeIdChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          idle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mapReady: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          tilesLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          minZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          maxZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          controlSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggableCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggingCursor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zoomControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zoomControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          streetViewControl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          streetViewControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fitBoundsPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scaleControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          mapTypeControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          panControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rotateControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fullscreenControlOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          restriction: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmMarker, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-marker',
            providers: [{
              provide: FitBoundsAccessor,
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return AgmMarker_1;
              })
            }],
            inputs: ['latitude', 'longitude', 'title', 'label', 'draggable: markerDraggable', 'iconUrl', 'openInfoWindow', 'opacity', 'visible', 'zIndex', 'animation'],
            outputs: ['markerClick', 'dragStart', 'drag', 'dragEnd', 'mouseOver', 'mouseOut']
          }]
        }], function () {
          return [{
            type: MarkerManager
          }];
        }, {
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerDraggable']
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          openInfoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['markerClickable']
          }],
          animationChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          markerClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          markerDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          markerRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          infoWindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmInfoWindow]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          iconUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          animation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmPolygon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-polygon'
          }]
        }], function () {
          return [{
            type: PolygonManager
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polyDraggable']
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          paths: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          polyClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyPathsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmPolylineIcon, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-polyline agm-icon-sequence'
          }]
        }], null, {
          fixedRotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          offset: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          repeat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          anchorX: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          anchorY: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          path: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          rotation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          scale: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmPolylinePoint, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-polyline-point',
            providers: [{
              provide: FitBoundsAccessor,
              useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
                return AgmPolylinePoint_1;
              })
            }]
          }]
        }], function () {
          return [];
        }, {
          positionChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          latitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          longitude: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmPolyline, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-polyline'
          }]
        }], function () {
          return [{
            type: PolylineManager
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['polylineDraggable']
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          geodesic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          lineClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineDragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineDragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineMouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineMouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          lineRightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          polyPathChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          points: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylinePoint]
          }],
          iconSequences: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
            args: [AgmPolylineIcon]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmRectangle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-rectangle'
          }]
        }], function () {
          return [{
            type: RectangleManager
          }];
        }, {
          clickable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          draggable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['rectangleDraggable']
          }],
          editable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokePosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeWeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          boundsChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rectangleClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rectangleDblClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          drag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          dragStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOut: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseOver: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          mouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          rightClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          north: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          east: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          south: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          west: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          fillOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          strokeOpacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          zIndex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmTransitLayer, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: 'agm-transit-layer'
          }]
        }], function () {
          return [{
            type: LayerManager
          }];
        }, {
          visible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmGeocoder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: MapsAPILoader
          }];
        }, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](LazyMapsAPILoader, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
        }], function () {
          return [{
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [LAZY_MAPS_API_CONFIG]
            }]
          }, {
            type: WindowRef
          }, {
            type: DocumentRef
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"]]
            }]
          }];
        }, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AgmCoreModule, {
          declarations: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer],
          exports: [AgmBicyclingLayer, AgmCircle, AgmDataLayer, AgmFitBounds, AgmInfoWindow, AgmKmlLayer, AgmMap, AgmMarker, AgmPolygon, AgmPolyline, AgmPolylineIcon, AgmPolylinePoint, AgmRectangle, AgmTransitLayer]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AgmCoreModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: coreDirectives(),
            exports: coreDirectives()
          }]
        }], null, null);
      })(); // main modules

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=agm-core.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map