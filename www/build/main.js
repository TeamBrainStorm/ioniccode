webpackJsonp([17],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__performer_register_performer_register__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, userProvider, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.register = {};
    }
    RegisterPage.prototype.ionViewDidLoad = function () { };
    RegisterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe("register:failed", function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.message,
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    RegisterPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("register:failed");
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.register.password == this.register.confirmPassword) {
            if (this.register.password == "") {
                var alert_1 = this.alertCtrl.create({
                    title: "Warning!",
                    subTitle: "Password is empty!",
                    buttons: ["Dismiss"]
                });
                alert_1.present();
                return;
            }
            else {
                this.register.userType = "customer";
                this.userProvider.register(this.register).then(function (result) {
                    _this.navCtrl.pop();
                });
            }
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Warning!",
                subTitle: "Password is mismatch!",
                buttons: ["Dismiss"]
            });
            alert_2.present();
            return;
        }
    };
    RegisterPage.prototype.openPerformerRegisterPage = function () {
        this.navCtrl.pop();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__performer_register_performer_register__["a" /* PerformerRegisterPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-register",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: black">\n  <div style="text-align: center;">\n    <h1 style="color: rgb(255, 255, 255); font-size: 30px;">Create your\n      <b>DistrictGroove Account</b> for\n      <b>FREE.</b>\n    </h1>\n    <h1 style="color: rgb(255, 255, 255); font-size: 16px;">No credit card required.</h1>\n  </div>\n  <button ion-button class="round-white-back" (click)="openPerformerRegisterPage()">I\'m A Preformer</button>\n  <ion-input class="round-white-back" placeholder="First Name" type="text" style="height: 40px !important;" [(ngModel)]="register.firstName"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Last Name" type="text" style="height: 40px !important;" [(ngModel)]="register.lastName"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Email" type="email" style="height: 40px !important;" [(ngModel)]="register.email"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Mobile Number" type="number" style="height: 40px !important;" [(ngModel)]="register.contactNumber"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Password" type="password" style="height: 40px !important;" [(ngModel)]="register.password"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Confirm Password" type="password" style="height: 40px !important;" [(ngModel)]="register.confirmPassword"\n    required></ion-input>\n  <div>\n    <a href="#" onclick="window.open(\'\', \'_system\', \'location=yes\'); return false;" style="font-size:12px;">By creating an account, I agree to DistrictGroove\'s\n      <b>Terms of Service</b> and\n      <b>Privacy Policy</b>\n    </a>\n  </div>\n  <button ion-button class="round-white-back" (click)="doRegister()">Register Now!</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/register/register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ChatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatProvider = /** @class */ (function () {
    function ChatProvider(http) {
        this.http = http;
    }
    ChatProvider.prototype.getChats = function (userRole) {
        var id = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId");
        var ServiceObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Thread");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(ServiceObject);
        if (id) {
            if (userRole === "Customer") {
                query.equalTo("customerInfo.id", id);
            }
            else {
                query.equalTo("artistInfo.id", id);
            }
            query.descending("updatedAt");
        }
        return query.find({
            success: function (results) {
                this.chats = results;
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ChatProvider.prototype.isThreadExist = function (artistId) {
        var customerId = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId");
        var ServiceObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Thread");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(ServiceObject);
        if (customerId && artistId) {
            query.equalTo("customerInfo.id", customerId);
            query.equalTo("artistInfo.id", artistId);
        }
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ChatProvider.prototype.createChat = function (newMessage, chatId) {
        var Thread = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Thread");
        var thread = new Thread();
        thread.id = chatId;
        thread.set("lastMessage", newMessage);
        thread.set("isNewMessageArtist", true);
        thread.set("isArtistThreadDeleted", false);
        thread.set("messageFrom", "customer");
        return thread.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ChatProvider.prototype.createNewThread = function (artist, customerProfile) {
        var Thread = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Thread");
        var thread = new Thread();
        thread.set("lastMessage", "");
        thread.set("messages", []);
        thread.set("artistInfo", {
            id: artist.id,
            firstName: artist.attributes.firstName,
            lastName: artist.attributes.lastName,
            avatar: artist.attributes.avatar
        });
        thread.set("customerInfo", {
            id: customerProfile.id,
            firstName: customerProfile.get("firstName"),
            lastName: customerProfile.get("lastName"),
            avatar: customerProfile.get("avatar") || "assets/imgs/placeholder.png"
        });
        return thread.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (gameScore, error) {
                console.log(error);
                console.log(gameScore);
            }
        });
    };
    ChatProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChatProvider);
    return ChatProvider;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ArtistProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ArtistProvider = /** @class */ (function () {
    function ArtistProvider(http) {
        this.http = http;
    }
    ArtistProvider.prototype.getArtist = function (userLocation) {
        var artistObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Artist");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(artistObject);
        if (userLocation) {
            query.near("coordinates", userLocation);
        }
        query.limit(50);
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ArtistProvider.prototype.getReviewsById = function (id) {
        var ReviewObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Review");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(ReviewObject);
        if (id) {
            query.equalTo("artistInfo.id", id);
        }
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ArtistProvider.prototype.getServiceById = function (id) {
        var serviceObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Service");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(serviceObject);
        if (id) {
            query.equalTo("ownerId", id);
        }
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    ArtistProvider.prototype.getPortfolio = function (id) {
        var PortfolioObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Portfolio");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(PortfolioObject);
        if (id) {
            query.equalTo("ownerId", id);
            return query.find({
                success: function (results) {
                    console.log(results);
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    };
    ArtistProvider.prototype.addPortfolio = function (url, description, type, currentUser) {
        var Portfolio = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Portfolio");
        var portfolio = new Portfolio();
        portfolio.set("url", url);
        portfolio.set("description", description);
        portfolio.set("type", type);
        portfolio.set("ownerId", currentUser.id);
        portfolio.set("artistInfo", {
            name: currentUser.get("firstName") + " " + currentUser.get("lastName"),
            avatar: currentUser.get("avatar"),
            id: currentUser.id
        });
        var promise = new Promise(function (resolve, reject) {
            portfolio.save(null, {
                success: function (result) {
                    resolve(result);
                },
                error: function (gameScore, error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    ArtistProvider.prototype.addService = function (id, serviceName, description, price, duration) {
        var Service = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Service");
        var service = new Service();
        service.set("name", serviceName);
        service.set("description", description);
        service.set("price", parseInt(price));
        service.set("duration", parseInt(duration));
        service.set("ownerId", id);
        var promise = new Promise(function (resolve, reject) {
            service.save(null, {
                success: function (result) {
                    resolve(result);
                },
                error: function (gameScore, error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    ArtistProvider.prototype.removeService = function (item) {
        var promise = new Promise(function (resolve, reject) {
            item.destroy({
                success: function (myObject) {
                    resolve(myObject);
                },
                error: function (myObject, error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    ArtistProvider.prototype.removePortfolio = function (item) {
        var promise = new Promise(function (resolve, reject) {
            item.destroy({
                success: function (myObject) {
                    resolve(myObject);
                },
                error: function (myObject, error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    ArtistProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ArtistProvider);
    return ArtistProvider;
}());

//# sourceMappingURL=artist.js.map

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BookProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BookProvider = /** @class */ (function () {
    function BookProvider(http) {
        this.http = http;
    }
    BookProvider.prototype.book = function (bookInfo, customerProfile, datetimeValue) {
        var Booking = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Booking");
        var booking = new Booking();
        booking.set("artistInfo", bookInfo.artistProfile);
        booking.set("selectedServices", bookInfo.selectedService);
        booking.set("customerInfo", customerProfile);
        booking.set("paymentMode", "cash");
        booking.set("totalBill", bookInfo.totalBill);
        booking.set("schedule", datetimeValue);
        booking.set("status", "pending");
        return booking.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    BookProvider.prototype.getBookingsById = function (id) {
        var AppointmentObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Booking");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(AppointmentObject);
        query.descending("updatedAt");
        if (id) {
            query.equalTo("customerInfo.id", id);
        }
        query.limit(100);
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    BookProvider.prototype.getBookingsByPerformerId = function (id) {
        var AppointmentObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Booking");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(AppointmentObject);
        query.descending("updatedAt");
        if (id) {
            query.equalTo("artistInfo.id", id);
        }
        query.limit(100);
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    BookProvider.prototype.submitReview = function (reviewInfo) {
        var Review = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Review");
        var review = new Review();
        var customer = {
            avatar: reviewInfo.customerInfo.get("avatar"),
            firstName: reviewInfo.customerInfo.get("firstName"),
            id: reviewInfo.customerInfo.id,
            lastName: reviewInfo.customerInfo.get("lastName")
        };
        review.set("bookingId", reviewInfo.id);
        review.set("ratings", reviewInfo.ratings);
        review.set("description", reviewInfo.description);
        review.set("title", reviewInfo.title);
        review.set("customerInfo", customer);
        review.set("artistInfo", reviewInfo.artistInfo);
        return review.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    BookProvider.prototype.updateBooking = function (booking) {
        return booking.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    BookProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], BookProvider);
    return BookProvider;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, viewCtrl, userProvider, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.userProvider = userProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () { };
    ChangePasswordPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe("login:failed", function (err) {
            var alert = _this.alertCtrl.create({
                title: "Warning!",
                subTitle: "Please verify old password once again!",
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    ChangePasswordPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("login:failed");
    };
    ChangePasswordPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    ChangePasswordPage.prototype.update = function () {
        var _this = this;
        var this_ = this;
        if (this.oldPassword != "" && this.newPassword != "") {
            if (this.newPassword != this.confirmPassword) {
                var alert_1 = this.alertCtrl.create({
                    title: "Warning!",
                    subTitle: "Sorry confirm new password doesn't match. Please try Again.",
                    buttons: ["Dismiss"]
                });
                alert_1.present();
                return;
            }
            this.userProvider.checkPassword(this.oldPassword).then(function (user) {
                user.set("password", _this.newPassword);
                user.save().then(function (user) {
                    console.log(user);
                    var alert = this.alertCtrl.create({
                        title: "Password",
                        subTitle: "Password successfully updated.",
                        buttons: ["Dismiss"]
                    });
                    alert.present();
                    this_.cancel();
                }, function (error) {
                    console.log(error);
                });
            });
        }
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-change-password",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/change-password/change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>ChangePassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-input class="round-white-back" placeholder="Old Password" type="password" [(ngModel)]="oldPassword"></ion-input>\n  <ion-input class="round-white-back" placeholder="New Password" type="password" [(ngModel)]="newPassword"></ion-input>\n  <ion-input class="round-white-back" placeholder="Confirm Password" type="password" [(ngModel)]="confirmPassword"></ion-input>\n  <div style="display: flex">\n    <button ion-button (click)="cancel()" style="flex: 1">Cancel</button>\n    <button ion-button (click)="update()" style="flex: 1">Update</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/change-password/change-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_message_message__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = /** @class */ (function () {
    function ChatPage(navCtrl, navParams, messageProvider, chatProvider, userProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messageProvider = messageProvider;
        this.chatProvider = chatProvider;
        this.userProvider = userProvider;
        this.thread = navParams.get("item");
        console.log(this.thread);
        this.userProvider
            .getCurrentUser()
            .then(function (user) {
            _this.userRole = user.className;
            if (_this.userRole === "Customer") {
                _this.userId = _this.thread.attributes.customerInfo.id;
            }
            else if (_this.userRole === "Artist") {
                _this.userId = _this.thread.attributes.artistInfo.id;
            }
        })
            .catch(function (err) {
            console.log(err);
            _this.navCtrl.pop();
        });
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log(this.thread.id);
        this.messageProvider.getMessages(this.thread.id).then(function (results) {
            _this.messages = [];
            results.forEach(function (message) {
                _this.messages.push({
                    createdAt: message.attributes.createdAt,
                    createdDate: message.attributes.createdDate,
                    message: message.attributes.message,
                    threadId: message.attributes.threadId,
                    updatedAt: message.attributes.updatedAt,
                    userId: message.attributes.userId
                });
                _this.scrollToBottom();
            });
        });
    };
    ChatPage.prototype.sendMessage = function (newMessage) {
        var _this = this;
        if (newMessage.trim() == "") {
            return;
        }
        this.messageProvider
            .sendMessage(newMessage, this.thread.id, this.userId)
            .then(function (result) {
            _this.messages.push({
                createdAt: result.attributes.createdAt,
                createdDate: result.attributes.createdDate,
                message: result.attributes.message,
                threadId: result.attributes.threadId,
                updatedAt: result.attributes.updatedAt,
                userId: result.attributes.userId
            });
            _this.scrollToBottom();
            _this.createChat(newMessage, _this.thread.id);
        });
    };
    ChatPage.prototype.createChat = function (newMessage, chatId) {
        this.chatProvider.createChat(newMessage, chatId).then(function (result) {
            console.log(result);
        });
    };
    ChatPage.prototype.scrollToBottom = function (duration) {
        var _this = this;
        setTimeout(function () {
            if (_this != null && _this.content && _this.content != null) {
                // se já tiver carregado o this.content (não ser undefined)
                _this.content.scrollToBottom(duration || 300);
            }
        }, 50);
    };
    ChatPage.prototype.openArtist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], ChatPage.prototype, "content", void 0);
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-chat",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{thread.attributes.artistInfo.firstName}} {{thread.attributes.artistInfo.lastName}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list no-lines>\n    <message-box *ngFor="let message of messages" [message]="message" [photo]="thread.attributes.artistInfo.avatar" [isFromSender]="(message.userId == userId)">\n    </message-box>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-input placeholder="Write your message ..." [(ngModel)]="newMessage" style="color:#262626;padding:5px;padding-right:20%;height: 50px"></ion-input>\n  <button ion-button [disabled]=" ! newMessage" (click)="sendMessage(newMessage); newMessage = \'\' " style="position:absolute; right: 3%; padding:8px;top: 13%;border-radius: 50%;bottom: 15%; margin: 0; width: 39px; height: 39px;">\n    <ion-icon name="md-send"></ion-icon>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_message_message__["a" /* MessageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, userProvider, events, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.loginData = {};
        this.isLoginLoading = false;
    }
    LoginPage.prototype.ionViewDidLoad = function () { };
    LoginPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe("login:failed", function (err) {
            _this.isLoginLoading = false;
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.message,
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    LoginPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("login:failed");
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.loginData.userName && this.loginData.password) {
            this.isLoginLoading = true;
            this.userProvider.login(this.loginData).then(function (result) {
                _this.isLoginLoading = false;
                _this.navCtrl.pop();
            });
        }
    };
    LoginPage.prototype.forgotPassword = function () {
        var _this = this;
        if (this.loginData.userName == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Warning",
                subTitle: "Please input email address to reset password!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        this.userProvider.forgotPassword(this.loginData.userName).then(function (result) {
            var alert = _this.alertCtrl.create({
                title: "Password",
                subTitle: "Password reset request sent. Please check your email for further instructions.",
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    LoginPage.prototype.showRegisterForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: black">\n  <div style="text-align: center;">\n    <img src="assets/imgs/stroke.png" style="width: 60%;">\n  </div>\n  <ion-input class="round-white-back" placeholder="Email" type="email" [(ngModel)]="loginData.userName"></ion-input>\n  <ion-input class="round-white-back" placeholder="Password" type="password" [(ngModel)]="loginData.password"></ion-input>\n  <button ion-button class="round-white-back" (click)="doLogin()">Login</button>\n  <div *ngIf="isLoginLoading">\n    <ion-spinner icon="spiral"></ion-spinner>\n    <span>Logging in...</span>\n  </div>\n  <div style="text-align: center;" *ngIf="!isLoginLoading">\n    <ion-label style="color: white" (click)="forgotPassword()">\n      <b>Forgot your password?</b>\n    </ion-label>\n    <ion-label style="color: white" (click)="showRegisterForm()">\n      <b>Register Here</b>\n    </ion-label>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__inbox_inbox__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, actionSheetCtrl, camera, userPrivider, modalController, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.userPrivider = userPrivider;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.customerProfile = {};
        this.placeholder = "assets/imgs/placeholder.png";
        this.isLoading = false;
        this.profile = {};
        this.galleryOption = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            cameraDirection: 0,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.cameraOption = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            cameraDirection: 0,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.customerProfile = navParams.get("account");
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        this.profile.avatar = this.customerProfile.attributes.avatar;
        this.profile.firstName = this.customerProfile.attributes.firstName;
        this.profile.lastName = this.customerProfile.attributes.lastName;
        if (this.customerProfile.attributes.birthDate != null) {
            var date = new Date(this.customerProfile.attributes.birthDate);
            this.profile.birthDate = date.toISOString();
        }
        else {
            this.profile.birthDate = new Date().toISOString();
        }
        this.profile.gender = this.customerProfile.attributes.gender;
        this.profile.email = this.customerProfile.attributes.email;
        this.profile.contactNumber = this.customerProfile.attributes.contactNumber;
        this.profile.address = this.customerProfile.attributes.address;
        console.log(this.profile);
    };
    AccountPage.prototype.changePassword = function () {
        var changePasswordPage = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */]);
        changePasswordPage.present();
    };
    AccountPage.prototype.updateProfile = function () {
        var _this = this;
        this.customerProfile.set("firstName", this.profile.firstName);
        this.customerProfile.set("lastName", this.profile.lastName);
        this.customerProfile.set("email", this.profile.email);
        this.customerProfile.set("gender", this.profile.gender);
        this.customerProfile.set("contactNumber", this.profile.contactNumber);
        this.customerProfile.set("address", this.profile.address);
        this.customerProfile.set("birthDate", new Date(this.profile.birthDate));
        this.userPrivider.updateProfile(this.customerProfile).then(function (result) {
            var alert = _this.alertCtrl.create({
                title: "Account",
                subTitle: "Your account profile has been successfully updated.",
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    AccountPage.prototype.showUploadOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Take a picture",
                    icon: "camera",
                    handler: function () {
                        _this.takePicturefromCamera();
                    }
                },
                {
                    text: "From gallery",
                    icon: "images",
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    AccountPage.prototype.takePicture = function () {
        var _this = this;
        this.camera
            .getPicture(this.galleryOption)
            .then(function (imagePath) {
            return imagePath;
        })
            .then(function (imageBlob) {
            return _this.uploadPhoto(imageBlob);
        });
    };
    AccountPage.prototype.takePicturefromCamera = function () {
        var _this = this;
        this.camera
            .getPicture(this.cameraOption)
            .then(function (imagePath) {
            return imagePath;
        })
            .then(function (imageBlob) {
            return _this.uploadPhoto(imageBlob);
        });
    };
    AccountPage.prototype.uploadPhoto = function (file_path) {
        var _this = this;
        this.userPrivider.uploadFile(file_path).then(function (result) {
            _this.customerProfile.set("avatar", result._url);
            _this.profile.avatar = result._url;
            _this.userPrivider.updateProfile(_this.customerProfile).then(function (result) {
                var alert = _this.alertCtrl.create({
                    title: "Account",
                    subTitle: "Your profile image has been successfully updated.",
                    buttons: ["Dismiss"]
                });
                alert.present();
            });
        });
    };
    AccountPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__inbox_inbox__["a" /* InboxPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-account",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openChat()">\n        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background: #F2F2F2">\n  <div style="text-align: center; background: #424242; padding-top: 15px; border-bottom-color: #B3A5A5; border-bottom-width: 2px !important; border-bottom-style: dashed;">\n    <img src="{{profile.avatar || placeholder}}" (click)="showUploadOption()" style="width: 100px; border-radius: 50%; max-width: 100px; max-height: 100px; border-width: 3px; border-style: solid; border-color: white;"\n      class="blush-avatar">\n    <p *ngIf=" ! profile.avatar ">Tap on the picture to change avatar!</p>\n  </div>\n  <div *ngIf="isLoading" style="text-align: center; padding-top: 45%; padding-right: 10px; padding-left: 10px;">\n    <ion-spinner icon="spiral"></ion-spinner>\n    <br>\n    <span>{{loadingStatus}}</span>\n  </div>\n  <div *ngIf="!isLoading">\n    <div style="padding-top: 20px; text-align: center; font-family: RaleWay; background-color: #f4eae9;">\n      <b style="font-size: 23px;">My Profile</b>\n    </div>\n    <label style="padding-right: 5%;">\n      <ion-label color="primary" stacked>First Name</ion-label>\n      <ion-input class="white-input" placeholder="First Name" type="text" [(ngModel)]="profile.firstName"></ion-input>\n    </label>\n    <label style="padding-right: 5%;">\n      <ion-label color="primary" stacked>Last Name</ion-label>\n      <ion-input class="white-input" placeholder="Last Name" type="text" [(ngModel)]="profile.lastName"></ion-input>\n    </label>\n    <ion-item style="padding-left: 0px;">\n      <ion-label>Gender</ion-label>\n      <ion-select [(ngModel)]="profile.gender">\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item style="padding-left: 0px;">\n      <ion-label>Birthdate</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="profile.birthDate"></ion-datetime>\n    </ion-item>\n    <div style="text-align: center; font-family: RaleWay; padding: 10px;">\n      <b style="font-size: 23px;">Contact Information</b>\n    </div>\n    <label style="padding-right: 5%;">\n      <ion-label color="primary" stacked>Email</ion-label>\n      <ion-input class="white-input" type="email" placeholder="Email" [(ngModel)]="profile.email"></ion-input>\n    </label>\n    <label style="padding-right: 5%;">\n      <ion-label color="primary" stacked>Phone Number</ion-label>\n      <ion-input class="white-input" type="number" placeholder="Contact Number" [(ngModel)]="profile.contactNumber"></ion-input>\n    </label>\n    <label style="padding-right: 5%;">\n      <ion-label color="primary" stacked>Address</ion-label>\n      <ion-input class="white-input" type="text" placeholder="Address" [(ngModel)]="profile.address"></ion-input>\n    </label>\n    <div style="text-align: center; font-family: RaleWay; padding: 10px;">\n      <b style="font-size: 23px;">Account Credentials</b>\n    </div>\n    <label style="padding-bottom: 0px; border-bottom-color: #2C3E50; border-bottom-width: 2px !important; border-bottom-style: dashed; padding-right: 5%;">\n      <button ion-button class="round-white-back" style="background-color: #f1807a;color: white;" (click)="changePassword()">Change Password</button>\n      <br>\n    </label>\n    <label style="padding-bottom: 0px; padding-right: 5%;">\n      <button ion-button class="round-white-back" style="background-color: black;color: white;" (click)="updateProfile()">Update Account</button>\n      <br>\n    </label>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/account/account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.filter = {};
        this.mode = navParams.get("mode");
        this.filter = navParams.get("filter");
    }
    FilterPage.prototype.ionViewDidLoad = function () { };
    FilterPage.prototype.apply = function () {
        this.events.publish("filterAndSort", this.filter);
        this.navCtrl.pop();
    };
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-filter",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/filter/filter.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{mode}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label>DJ</ion-label>\n    <ion-checkbox [(ngModel)]="filter.Dj"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Band</ion-label>\n    <ion-checkbox [(ngModel)]="filter.Band"></ion-checkbox>\n  </ion-item>\n  <ion-item>\n    <ion-label>Artist</ion-label>\n    <ion-checkbox [(ngModel)]="filter.Artist"></ion-checkbox>\n  </ion-item>\n  <button ion-button color="dark" (click)="apply()" style="width: 100%;">Apply</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/filter/filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SortPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SortPage = /** @class */ (function () {
    function SortPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.filter = {};
        this.mode = navParams.get("mode");
        this.filter = navParams.get("filter");
    }
    SortPage.prototype.ionViewDidLoad = function () { };
    SortPage.prototype.apply = function () {
        this.events.publish("filterAndSort", this.filter);
        this.navCtrl.pop();
    };
    SortPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-sort",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/sort/sort.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{mode}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group [(ngModel)]="filter.sort">\n    <ion-item>\n      <ion-label>Distance</ion-label>\n      <ion-radio value="Distance"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Price : High to Low</ion-label>\n      <ion-radio value="highToLow"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Price : Low to High</ion-label>\n      <ion-radio value="lowToHigh"></ion-radio>\n    </ion-item>\n    <ion-item>\n      <ion-label>Rating</ion-label>\n      <ion-radio value="Rating"></ion-radio>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="dark" (click)="apply()" style="width: 100%;">Apply</button>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/sort/sort.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], SortPage);
    return SortPage;
}());

//# sourceMappingURL=sort.js.map

/***/ }),

/***/ 255:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_artist_artist__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_book__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_themeable_browser__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inbox_inbox__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the ArtistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ArtistPage = /** @class */ (function () {
    function ArtistPage(navCtrl, navParams, artistProvider, chatProvider, userProvider, actionSheetCtrl, alertCtrl, themeableBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.artistProvider = artistProvider;
        this.chatProvider = chatProvider;
        this.userProvider = userProvider;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.themeableBrowser = themeableBrowser;
        this.segment = "services";
        this.totalBill = 0;
        this.profile = {};
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.artist = navParams.get("artist");
        this.getServices(this.artist.id);
        this.getPortfolioById(this.artist.id);
        this.getReviewsById(this.artist.id);
    }
    ArtistPage.prototype.ionViewDidLoad = function () { };
    ArtistPage.prototype.getReviewsById = function (id) {
        var _this = this;
        this.artistProvider.getReviewsById(id).then(function (results) {
            _this.artistReviews = results;
            console.log(_this.artistReviews);
        });
    };
    ArtistPage.prototype.getServices = function (id) {
        var _this = this;
        this.artistProvider.getServiceById(id).then(function (results) {
            _this.services = [];
            results.forEach(function (service) {
                _this.services.push({
                    id: service.id,
                    name: service.attributes.name,
                    duration: service.attributes.duration,
                    ownerId: service.attributes.ownerId,
                    price: service.attributes.price,
                    descriptioin: service.attributes.name,
                    checked: false
                });
            });
        });
    };
    ArtistPage.prototype.getPortfolioById = function (id) {
        var _this = this;
        this.artistProvider.getPortfolio(id).then(function (results) {
            _this.artistPortfolio = results;
        });
    };
    ArtistPage.prototype.messageArtist = function () {
        var _this = this;
        if (!this.userProvider.hasLoggedIn()) {
            this.showMessageProfileOption();
            return;
        }
        var currentUser;
        this.userProvider
            .getCurrentUser()
            .then(function (user) {
            var userRole = user.className;
            if (userRole === "Customer") {
                currentUser = user;
                _this.chatProvider.isThreadExist(_this.artist.id).then(function (results) {
                    if (results.length == 0) {
                        _this.chatProvider
                            .createNewThread(_this.artist, currentUser)
                            .then(function (result) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
                                item: result
                            });
                        });
                    }
                    else {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], {
                            item: results[0]
                        });
                    }
                });
            }
            else {
                var alert_1 = _this.alertCtrl.create({
                    title: "Message",
                    subTitle: "You are not allowed to send message.  Please login as customer account.",
                    buttons: ["Dismiss"]
                });
                alert_1.present();
            }
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ArtistPage.prototype.showMessageProfileOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Log In",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                },
                {
                    text: "Register Now!",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ArtistPage.prototype.showArtistInfo = function () {
        var alert = this.alertCtrl.create({
            title: "Artist",
            subTitle: this.artist.attributes.firstName +
                " is still working on his service information.",
            buttons: ["Dismiss"]
        });
        alert.present();
    };
    ArtistPage.prototype.book = function () {
        var _this = this;
        if (this.userProvider.hasLoggedIn()) {
            this.userProvider
                .getCurrentUser()
                .then(function (user) {
                var userRole = user.className;
                if (userRole === "Customer") {
                    _this.customerProfile = user;
                    _this.profile.id = _this.customerProfile.id;
                    _this.profile.avatar = _this.customerProfile.attributes.avatar;
                    _this.profile.firstName = _this.customerProfile.attributes.firstName;
                    _this.profile.lastName = _this.customerProfile.attributes.lastName;
                    _this.profile.birthDate = _this.customerProfile.attributes.birthDate;
                    _this.profile.gender = _this.customerProfile.attributes.gender;
                    _this.profile.email = _this.customerProfile.attributes.email;
                    _this.profile.contactNumber = _this.customerProfile.attributes.contactNumber;
                    _this.profile.address = _this.customerProfile.attributes.address;
                    var selectedServices_1 = [];
                    _this.services.forEach(function (service) {
                        if (service.checked) {
                            selectedServices_1.push({
                                id: service.id,
                                name: service.name
                            });
                        }
                    });
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_book__["a" /* BookPage */], {
                        artist: _this.artist,
                        amount: _this.totalBill,
                        account: _this.profile,
                        services: selectedServices_1
                    });
                }
                else {
                    var alert_2 = _this.alertCtrl.create({
                        title: "Book",
                        subTitle: "You are not allowed to make booking. Please login as customer account.",
                        buttons: ["Dismiss"]
                    });
                    alert_2.present();
                }
            })
                .catch(function (err) { });
        }
        else {
            this.showBookingProfileOption();
        }
    };
    ArtistPage.prototype.showBookingProfileOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Log In",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                },
                {
                    text: "Register Now!",
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__register_register__["a" /* RegisterPage */]);
                    }
                },
                {
                    text: "Continue, Register Later",
                    handler: function () {
                        var selectedServices = [];
                        _this.services.forEach(function (service) {
                            if (service.checked) {
                                selectedServices.push({
                                    id: service.id,
                                    name: service.name
                                });
                            }
                        });
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_book__["a" /* BookPage */], {
                            artist: _this.artist,
                            amount: _this.totalBill,
                            services: selectedServices
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ArtistPage.prototype.itemTapped = function (item, checked) {
        var total = 0;
        this.services.forEach(function (service) {
            if (service.checked) {
                total += item.price;
            }
        });
        this.totalBill = total;
    };
    ArtistPage.prototype.openPortfolio = function (portfolio) {
        this.openBrowser(portfolio);
    };
    ArtistPage.prototype.openBrowser = function (portfolio) {
        var options = {
            toolbar: {
                height: 56,
                color: "#ffffff"
            },
            title: {
                color: "#000000",
                showPageTitle: true,
                staticText: portfolio.attributes.artistInfo.name
            },
            backButton: {
                wwwImage: "assets/imgs/back.png",
                align: "left",
                event: "backPressed"
            },
            forwardButton: {
                wwwImage: "assets/imgs/forward.png",
                align: "left",
                event: "forwardPressed"
            },
            closeButton: {
                wwwImage: "assets/imgs/close.png",
                align: "left",
                event: "closePressed"
            }
        };
        var browser = this.themeableBrowser.create(portfolio.attributes.url, "_blank", options);
        browser.on("closePressed").subscribe(function (data) {
            browser.close();
        });
    };
    ArtistPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__inbox_inbox__["a" /* InboxPage */]);
    };
    ArtistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-artist",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/artist/artist.html"*/'<!--\n  Generated template for the ArtistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Booking</ion-title>\n    <!--  <ion-buttons end>\n        <button ion-button icon-only (click)="messageArtist()">\n          <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n        </button>\n      </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content style="background: #F2F2F2">\n  <div style="background: #424242; padding-top: 10px;">\n    <div class="row">\n      <div class="col col-90" style="padding: 0px; padding-left: 18%; flex: 0 0 82%;">\n        <div class="item" style="background: #424242; text-align: center; padding: 10px;">\n          <div>\n            <div>\n              <img src="{{artist.attributes.avatar || spiral}}" class="blush-avatar" style="width: 100px; max-width: 100px; max-height: 100px; border-width: 7px; border-style: double; border-color: white;">\n              <h4 *ngIf="artist.attributes.stageName" style="color: white;">\n                <b>{{artist.attributes.stageName}}</b>\n              </h4>\n              <h4 *ngIf=" ! artist.attributes.stageName" style="color: white;">\n                <b>{{artist.attributes.firstName}} {{artist.attributes.lastName}}</b>\n              </h4>\n              <p *ngIf="artist.attributes.city || artist.attributes.state" style="color: white; font-size: 12px;">{{artist.attributes.serviceType}} | {{artist.attributes.city}} {{artist.attributes.state}}</p>\n              <p *ngIf=" ! artist.attributes.city && ! artist.attributes.state" style="color: white; font-size: 12px;">{{artist.attributes.serviceType}} | {{artist.attributes.address}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class="col" style="padding:12px; text-align: center; padding-top: 12px;">\n        <ion-label class="non-button" icon-left (click)="messageArtist()" style="padding: 4px; font-size: 28px; color: white;">\n          <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n        </ion-label>\n\n      </div>\n    </div>\n  </div>\n  <ion-segment [(ngModel)]="segment" style="background-color: #4C4C59;">\n    <ion-segment-button value="services" icon-bottom style="color: white;border-color: white;">\n      Services\n      <ion-icon ios="ios-brush" md="md-brush"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="portfoilo" style="color: white;border-color: white;">\n      Portfoilo\n      <ion-icon ios="ios-person" md="md-person"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value="reviews" style="color: white;border-color: white;">\n      Reviews\n      <ion-icon ios="ios-open" md="md-open"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="segment">\n    <div *ngSwitchCase="\'services\'">\n      <ion-list>\n        <ion-item *ngFor="let service of services" style="background:#F2F2F2">\n          <ion-label>\n            <h2>{{service.name}}</h2>\n            <h3>{{service.duration}} mins</h3>\n            <p *ngIf="service.description">{{service.description}}</p>\n            <h3>$ {{service.price}}</h3>\n          </ion-label>\n          <ion-checkbox color="dark" [(ngModel)]="service.checked" checked="{{service.checked}}" (ionChange)="itemTapped( service, service.checked)">\n          </ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'portfoilo\'">\n      <ion-list>\n        <ion-item *ngFor="let portfolio of artistPortfolio">\n          <ion-avatar item-start>\n            <img src="{{portfolio.attributes.artistInfo.avatar || profilePicTemp}}" item-left>\n          </ion-avatar>\n          <h2>{{portfolio.attributes.name}}</h2>\n          <p>{{portfolio.attributes.description}}</p>\n          <div *ngIf="portfolio.attributes.type === 0">\n            <ion-icon ios="ios-image" md="md-image" style="color:red;"></ion-icon>\n          </div>\n          <div *ngIf="portfolio.attributes.type === 1">\n            <ion-icon ios="logo-youtube" md="logo-youtube" style="color:red;"></ion-icon>\n          </div>\n          <div *ngIf="portfolio.attributes.type === 2">\n            <ion-icon ios="ios-musical-notes" md="md-musical-notes" style="color:red;"></ion-icon>\n          </div>\n          <span style="color:gray;font-size:13px">{{ portfolio.attributes.createdAt | date: \'MMM dd, HH:mm\'}}</span>\n          <button ion-button color="secondary" full (click)="openPortfolio(portfolio)">Open Portfolio</button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'reviews\'">\n      <div *ngIf=" ! artistReviews || !artistReviews.length" class="item" style="text-align: center; white-space: normal;">Sorry, {{profile.firstName}} doesn\'t have any reviews yet.</div>\n      <ion-list>\n        <ion-item *ngFor="let review of artistReviews">\n          <ion-avatar item-start>\n            <img src="{{review.attributes.customerInfo.avatar || profilePicTemp}}" item-left>\n          </ion-avatar>\n          <h2>{{review.attributes.title}}</h2>\n          <div class="col" style="padding-left: 0px; padding-bottom: 0px; text-align: left;">\n\n            <ion-icon [ngClass]="review.attributes.ratings >= 1 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 2 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 3 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 4 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings == 5 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n          </div>\n          <p>{{review.attributes.description}}</p>\n          <p>by\n            <em>{{review.attributes.customerInfo.firstName}} {{review.attributes.customerInfo.lastName}} {{review.attributes.createdAt.getMonth()\n              + 1}} / {{review.attributes.createdAt.getDate() + 1}} / {{review.attributes.createdAt.getFullYear()}}</em>\n          </p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n  <div *ngIf="segment == \'services\'" class="item item-divider blush-background-alt" style="position: fixed; bottom: 0; width: 100%; padding-top: 1px;\n    padding-bottom: 1px;">\n    <div class="row">\n      <div class="col" style="padding-top: 15px;">\n        <span>Total Bill:</span>\n      </div>\n      <div class="col text-left" style="padding-top: 15px;">\n        <b>${{totalBill}}</b>\n      </div>\n      <div class="col col-50">\n        <button ion-button class="button button-block button-small button-energized" style="margin-top: 0px;\n          margin-bottom: 0px; background: #b7d05b; border-radius:30px; height: 40px;" [disabled]="totalBill==0" (click)="book()">\n          <b style="font-size: 16px;">Book Now!\n            <i class="icon ion-chevron-right"></i>\n          </b>\n        </button>\n      </div>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/artist/artist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_artist_artist__["a" /* ArtistProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]])
    ], ArtistPage);
    return ArtistPage;
}());

//# sourceMappingURL=artist.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_book_book__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BookPage = /** @class */ (function () {
    function BookPage(navCtrl, navParams, bookProvider, alertCtrl, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookProvider = bookProvider;
        this.alertCtrl = alertCtrl;
        this.userProvider = userProvider;
        this.profile = {};
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.hasLoggedIn = false;
        this.amount = navParams.get("amount");
        this.artist = navParams.get("artist");
        this.profile = navParams.get("account");
        if (this.profile == undefined) {
            this.profile = {
                id: "",
                avatar: "",
                birthDate: "",
                contactNumber: "",
                createdAt: "",
                email: "",
                firstName: "",
                lastName: "",
                updatedAt: "",
                gender: "",
                address: "",
                stageName: "",
                serviceType: "",
                city: "",
                country: "",
                state: ""
            };
        }
        this.hasLoggedIn = userProvider.hasLoggedIn();
        this.services = navParams.get("services");
        this.datetimeValue = new Date().toISOString();
    }
    BookPage.prototype.ionViewDidLoad = function () { };
    BookPage.prototype.book = function (datetimeValue) {
        var _this = this;
        if (this.profile.contactNumber == null ||
            this.profile.contactNumber == "") {
            var alert_1 = this.alertCtrl.create({
                title: "Warning!",
                subTitle: "A valid contact number is required, for the artist to contact you.",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        var bookInfo = {
            totalBill: this.amount,
            artistProfile: {
                id: this.artist.id,
                firstName: this.artist.attributes.firstName,
                lastName: this.artist.attributes.lastName,
                avatar: this.artist.attributes.avatar,
                contactNumber: this.artist.attributes.contactNumber,
                email: this.artist.attributes.email
            },
            selectedService: this.services
        };
        this.bookProvider
            .book(bookInfo, this.profile, new Date(this.datetimeValue))
            .then(function (result) {
            console.log(result);
            _this.navCtrl.pop();
            _this.userProvider
                .getCurrentUser()
                .then(function (user) {
                _this.navCtrl.pop();
            })
                .catch(function (error) {
                console.log(error);
            });
        });
    };
    BookPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inbox_inbox__["a" /* InboxPage */]);
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-book",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/book/book.html"*/'<!--\n  Generated template for the BookPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Book</ion-title>\n    <ion-buttons end *ngIf="hasLoggedIn">\n      <button ion-button icon-only (click)="openChat()">\n        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="list">\n\n    <div class="item item-divider" style="text-align: center; font-family: RaleWay;">\n      <b style="font-size: 23px">Contact Information</b>\n    </div>\n    <ion-item>\n      <ion-label fixed>FirstName</ion-label>\n      <ion-input class="round-white-back" type="text" [(ngModel)]="profile.firstName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>LastName</ion-label>\n      <ion-input class="round-white-back" type="text" [(ngModel)]="profile.lastName"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label fixed>ContactNumber</ion-label>\n      <ion-input class="round-white-back" type="number" [(ngModel)]="profile.contactNumber"></ion-input>\n    </ion-item>\n    <div class="item item-divider" style="padding-top: 20px; padding-bottom: 20px; text-align: center; font-family: RaleWay;">\n      <b style="font-size: 23px">Selected Artist</b>\n    </div>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="artist.attributes.avatar || profilePicTemp">\n      </ion-avatar>\n      <h2 *ngIf="!artist.attributes.stageName">{{artist.attributes.firstName}} {{artist.attributes.lastName}}</h2>\n      <h2 *ngIf="artist.attributes.stageName">{{artist.attributes.stageName}}</h2>\n      <p>{{artist.attributes.serviceType}}</p>\n    </ion-item>\n    <div class="item item-divider" style="padding-top: 20px; padding-bottom: 20px; text-align: center; font-family: RaleWay; ">\n      <b style="font-size: 23px">Schedule</b>\n    </div>\n    <ion-item>\n      <ion-label>Book Time</ion-label>\n      <ion-datetime displayFormat="MMM DD YYYY- h:mm A" [(ngModel)]="datetimeValue"></ion-datetime>\n    </ion-item>\n    <div class="row">\n      <div class="col" style="color: white;">Total Bill:</div>\n      <div class="col text-right" style="color: white;">\n        <b>$ {{amount}}</b>\n      </div>\n    </div>\n    <button style="width: 100%" ion-button (click)="book(datetimeValue)">Book Now</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/book/book.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_book_book__["a" /* BookProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformerRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agm_core__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerformerRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerformerRegisterPage = /** @class */ (function () {
    function PerformerRegisterPage(navCtrl, navParams, userProvider, geoLocation, events, mapsAPILoader, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userProvider = userProvider;
        this.geoLocation = geoLocation;
        this.events = events;
        this.mapsAPILoader = mapsAPILoader;
        this.alertCtrl = alertCtrl;
        this.register = {};
        this.coordinate = {};
    }
    PerformerRegisterPage.prototype.ionViewDidLoad = function () {
        this.mapsAPILoader.load();
    };
    PerformerRegisterPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.events.subscribe("register:failed", function (err) {
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: err.message,
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    PerformerRegisterPage.prototype.ionViewDidLeave = function () {
        this.events.unsubscribe("register:failed");
    };
    PerformerRegisterPage.prototype.doRegister = function () {
        var _this = this;
        this.geoLocation
            .getCurrentPosition()
            .then(function (resp) {
            _this.coordinate = resp.coords;
            _this.register.latitude = _this.coordinate.latitude;
            _this.register.longitude = _this.coordinate.longitude;
            _this.getAddress(_this.coordinate).then(function (address) {
                _this.register.address = address.Address;
                _this.register.city = address.City;
                _this.register.country = address.Country;
                _this.register.state = address.State;
                if (_this.register.password == _this.register.confirmPassword) {
                    if (_this.register.password == "") {
                        var alert_1 = _this.alertCtrl.create({
                            title: "Warning",
                            subTitle: "Password is empty!",
                            buttons: ["Dismiss"]
                        });
                        alert_1.present();
                        return;
                    }
                    else {
                        if (_this.register.serviceType.trim() === "") {
                            var alert_2 = _this.alertCtrl.create({
                                title: "Warning",
                                subTitle: "You need to select correct service type!",
                                buttons: ["Dismiss"]
                            });
                            alert_2.present();
                            return;
                        }
                        _this.register.userType = "Artist";
                        _this.userProvider
                            .registerPerformer(_this.register)
                            .then(function (result) {
                            _this.navCtrl.pop();
                        });
                    }
                }
                else {
                    var alert_3 = _this.alertCtrl.create({
                        title: "Warning!",
                        subTitle: "Password is mismatch!",
                        buttons: ["Dismiss"]
                    });
                    alert_3.present();
                    return;
                }
            });
        })
            .catch(function (error) {
            console.log(error);
            var alert = _this.alertCtrl.create({
                title: "Warning!",
                subTitle: "You need to enable GPS to create account.",
                buttons: ["Dismiss"]
            });
            alert.present();
            return;
        });
    };
    PerformerRegisterPage.prototype.getAddress = function (point) {
        var _this = this;
        var latlng = { lat: point.latitude, lng: point.longitude };
        var fullAddress = {
            Id: 0,
            Name: "",
            Address: "",
            City: "",
            State: "",
            Zip: "",
            Country: "",
            Latitude: 0,
            Longitude: 0
        };
        var geocoder = new google.maps.Geocoder();
        var promise = new Promise(function (resolve) {
            geocoder.geocode({ location: latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    var address_components = results[0].address_components;
                    address_components.forEach(function (address) {
                        if (address.types[0] == "administrative_area_level_1" &&
                            fullAddress.State != address.short_name) {
                            fullAddress.State = address.short_name;
                        }
                        if (address.types[0] == "locality" &&
                            fullAddress.City != address.short_name) {
                            fullAddress.City = address.short_name;
                        }
                        if (address.types[0] == "postal_code" && fullAddress.Zip == "") {
                            fullAddress.Zip = address.short_name;
                        }
                        if (address.types[0] == "country" && fullAddress.Country == "") {
                            fullAddress.Country = address.short_name;
                        }
                    });
                    fullAddress.Latitude = lat;
                    fullAddress.Longitude = lng;
                    resolve(fullAddress);
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: "Error",
                        subTitle: "Geocode Error Geocode was not successful for the following reason: " +
                            status,
                        buttons: ["Dismiss"]
                    });
                    alert_4.present();
                }
            });
        });
        return promise;
    };
    PerformerRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-performer-register",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/performer-register/performer-register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color: black">\n  <div style="text-align: center;">\n    <h1 style="color: rgb(255, 255, 255); font-size: 30px;">Create your\n      <b>Preformer Account</b> for\n      <b>FREE.</b>\n    </h1>\n    <h1 style="color: rgb(255, 255, 255); font-size: 16px;">No credit card required.</h1>\n  </div>\n  <ion-input class="round-white-back" placeholder="Stage Name" type="text" style="height: 40px !important;" [(ngModel)]="register.stageName"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="First Name" type="text" style="height: 40px !important;" [(ngModel)]="register.firstName"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Last Name" type="text" style="height: 40px !important;" [(ngModel)]="register.lastName"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Email" type="email" style="height: 40px !important;" [(ngModel)]="register.email"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Mobile Number" type="number" style="height: 40px !important;" [(ngModel)]="register.contactNumber"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Password" type="password" style="height: 40px !important;" [(ngModel)]="register.password"\n    required></ion-input>\n  <ion-input class="round-white-back" placeholder="Confirm Password" type="password" style="height: 40px !important;" [(ngModel)]="register.confirmPassword"\n    required></ion-input>\n  <ion-item class="round-white-back" style="padding-left: 8px;">\n    <ion-label>Service Type</ion-label>\n    <ion-select [(ngModel)]="register.serviceType">\n      <ion-option value="DJ">DJ</ion-option>\n      <ion-option value="Artist">Artist</ion-option>\n      <ion-option value="Band">Band</ion-option>\n    </ion-select>\n  </ion-item>\n  <div>\n    <a href="#" onclick="window.open(\'\', \'_system\', \'location=yes\'); return false;" style="font-size:12px;">By creating an account, I agree to DistrictGroove\'s\n      <b>Terms of Service</b> and\n      <b>Privacy Policy</b>\n    </a>\n  </div>\n  <button ion-button class="round-white-back" (click)="doRegister()">Register Now!</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/performer-register/performer-register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PerformerRegisterPage);
    return PerformerRegisterPage;
}());

//# sourceMappingURL=performer-register.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppointmentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_book_book__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_review__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__inbox_inbox__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the AppointmentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AppointmentsPage = /** @class */ (function () {
    function AppointmentsPage(navCtrl, navParams, bookProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookProvider = bookProvider;
        this.alertCtrl = alertCtrl;
        this.statusButton = {
            pending: "",
            accepted: "",
            completed: ""
        };
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.customerProfile = navParams.get("account");
        this.userRole = this.customerProfile.className;
    }
    AppointmentsPage.prototype.ionViewDidLoad = function () {
        this.getBookings();
    };
    AppointmentsPage.prototype.getBookings = function () {
        var _this = this;
        if (this.userRole === "Customer") {
            this.bookProvider
                .getBookingsById(this.customerProfile.id)
                .then(function (results) {
                _this.bookings = results;
                _this.totalBookings = results;
            });
        }
        else if (this.userRole === "Artist") {
            this.bookProvider
                .getBookingsByPerformerId(this.customerProfile.id)
                .then(function (results) {
                _this.bookings = results;
                _this.totalBookings = results;
            });
        }
    };
    AppointmentsPage.prototype.openArtist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    AppointmentsPage.prototype.changeStatusView = function (status) {
        if (status === "pending") {
            if (this.statusButton.pending === "button-outline") {
                this.statusButton.pending = "";
            }
            else {
                this.statusButton.pending = "button-outline";
            }
        }
        else if (status === "accepted") {
            if (this.statusButton.accepted === "button-outline") {
                this.statusButton.accepted = "";
            }
            else {
                this.statusButton.accepted = "button-outline";
            }
        }
        else {
            if (this.statusButton.completed === "button-outline") {
                this.statusButton.completed = "";
            }
            else {
                this.statusButton.completed = "button-outline";
            }
        }
        this.filter();
    };
    AppointmentsPage.prototype.filter = function () {
        var _this = this;
        if (this.totalBookings === undefined) {
            return;
        }
        this.bookings = this.totalBookings.filter(function (booking) {
            return _this.filterBooking(booking);
        });
    };
    AppointmentsPage.prototype.openReviewModal = function (bookings) {
        console.log(bookings);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__review_review__["a" /* ReviewPage */], {
            account: this.customerProfile,
            booking: bookings
        });
    };
    AppointmentsPage.prototype.filterBooking = function (booking) {
        var response;
        if (!this.statusButton.pending &&
            this.statusButton.accepted &&
            this.statusButton.completed) {
            response = booking.get("status") === "pending";
        }
        else if (this.statusButton.pending &&
            !this.statusButton.accepted &&
            this.statusButton.completed) {
            response = booking.get("status") === "accepted";
        }
        else if (this.statusButton.pending &&
            this.statusButton.accepted &&
            !this.statusButton.completed) {
            response = booking.get("status") === "completed";
        }
        else if (!this.statusButton.pending &&
            this.statusButton.accepted &&
            !this.statusButton.completed) {
            response =
                booking.get("status") === "completed" ||
                    booking.get("status") === "pending";
        }
        else if (this.statusButton.pending &&
            !this.statusButton.accepted &&
            !this.statusButton.completed) {
            response =
                booking.get("status") === "completed" ||
                    booking.get("status") === "accepted";
        }
        else if (!this.statusButton.pending &&
            !this.statusButton.accepted &&
            this.statusButton.completed) {
            response =
                booking.get("status") === "pending" ||
                    booking.get("status") === "accepted";
        }
        else if (this.statusButton.pending &&
            this.statusButton.accepted &&
            this.statusButton.completed) {
            response = false;
        }
        else {
            response =
                booking.get("status") === "pending" ||
                    booking.get("status") === "accepted" ||
                    booking.get("status") === "completed";
        }
        return response;
    };
    AppointmentsPage.prototype.completeBooking = function (booking) {
        var _this = this;
        if (this.userRole === "Artist" &&
            booking.attributes.status !== "completed") {
            var alert_1 = this.alertCtrl.create({
                title: "Booking",
                message: "Are you sure you want to complete this service?",
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: function () { }
                    },
                    {
                        text: "Yes, I am sure!",
                        handler: function () {
                            booking.set("isCompleted", true);
                            booking.set("status", "completed");
                            _this.bookProvider.updateBooking(booking).then(function (results) {
                                var alert = _this.alertCtrl.create({
                                    title: "Booking",
                                    subTitle: "Booking Successfully Completed",
                                    buttons: ["Dismiss"]
                                });
                                alert.present();
                                _this.getBookings();
                            });
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    AppointmentsPage.prototype.acceptBooking = function (booking) {
        var _this = this;
        if (this.userRole === "Artist" &&
            booking.attributes.status !== "completed") {
            var alert_2 = this.alertCtrl.create({
                title: "Booking",
                message: "Are you sure you want to accept this service?",
                buttons: [
                    {
                        text: "No",
                        role: "cancel",
                        handler: function () { }
                    },
                    {
                        text: "Yes, I am sure!",
                        handler: function () {
                            booking.set("status", "accepted");
                            _this.bookProvider.updateBooking(booking).then(function (results) {
                                var alert = _this.alertCtrl.create({
                                    title: "Booking",
                                    subTitle: "Booking Successfully Accepted",
                                    buttons: ["Dismiss"]
                                });
                                alert.present();
                                _this.getBookings();
                            });
                        }
                    }
                ]
            });
            alert_2.present();
        }
    };
    AppointmentsPage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__inbox_inbox__["a" /* InboxPage */]);
    };
    AppointmentsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-appointments",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/appointments/appointments.html"*/'<!--\n  Generated template for the AppointmentsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Appointments</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openChat()">\n        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content style="background: #F2F2F2">\n  <div class="button-bar" *ngIf="!isLoading" style="display: flex;padding-bottom : 1px;">\n    <a class="button button-assertive" (click)="changeStatusView(\'pending\')" style="border-radius: 0px !important; padding: 16px; flex: 1; border: 1px solid;"\n      [ngClass]="statusButton.pending">Pending</a>\n    <a class="button button-calm" (click)="changeStatusView(\'accepted\')" style="border-radius: 0px !important; padding: 16px; flex: 1; border: 1px solid;"\n      [ngClass]="statusButton.accepted">Accepted</a>\n    <a class="button button-balanced" (click)="changeStatusView(\'completed\')" style="border-radius: 0px !important; padding: 16px; flex: 1; border: 1px solid;"\n      [ngClass]="statusButton.completed">Completed</a>\n  </div>\n  <div *ngIf="statusButton.pending && statusButton.accepted && statusButton.completed">\n    <p style="padding-left: 15px; padding-right: 15px; text-align: center; padding-top: 50%;">You filtered out Pending, Accepted, and Completed Appointments. This will display an empty list.</p>\n  </div>\n  <ion-list>\n    <ion-item *ngFor="let booking of bookings" style="background: #F2F2F2">\n      <ion-avatar item-start>\n        <img [src]="booking.attributes.artistInfo.avatar || profilePicTemp" item-left>\n      </ion-avatar>\n      <h2>{{booking.attributes.artistInfo.firstName}} {{booking.attributes.artistInfo.lastName}}</h2>\n      <p>{{booking.attributes.schedule | date: "MMMM dd yyyy"}} - {{booking.attributes.schedule | date: "h:mm a"}}</p>\n      <p>Total : $ {{booking.attributes.totalBill}}</p>\n      <p>Status :\n        <span *ngIf="booking.attributes.status === \'completed\'">\n          <b style="color: #33cd5f;">Completed</b>\n        </span>\n        <span *ngIf="booking.attributes.status === \'pending\'">\n          <b style="color: #f1807a;">Pending</b>\n        </span>\n        <span *ngIf="booking.attributes.status === \'accepted\'">\n          <b style="color: #11c1f3;">Accepted</b>\n        </span>\n      </p>\n      <button style="height: 25px;" *ngIf=" booking.attributes.isCompleted && ! booking.attributes.isReviewed && userRole === \'Customer\'"\n        class="button button-small button-block button-energized" (click)="openReviewModal(booking)">Create Review</button>\n      <button style="height: 25px;" *ngIf=" booking.attributes.status !== \'completed\' &&  userRole === \'Artist\' && booking.attributes.status === \'accepted\'"\n        class="button button-small button-block button-energized" (click)="completeBooking(booking)">Complete Booking</button>\n      <button style="height: 25px;" *ngIf=" booking.attributes.status !== \'completed\' &&  userRole === \'Artist\' && booking.attributes.status === \'pending\'"\n        class="button button-small button-block button-energized" (click)="acceptBooking(booking)">Accept Booking</button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/appointments/appointments.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_book_book__["a" /* BookProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], AppointmentsPage);
    return AppointmentsPage;
}());

//# sourceMappingURL=appointments.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_book_book__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ReviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl, navParams, bookingProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.bookingProvider = bookingProvider;
        this.alertCtrl = alertCtrl;
        this.rating = {};
        this.customerProfile = navParams.get("account");
        this.booking = navParams.get("booking");
        this.rating.rate = 5;
        this.rating.review = "";
        this.rating.title = "";
    }
    ReviewPage.prototype.ionViewDidLoad = function () { };
    ReviewPage.prototype.submitReview = function () {
        var _this = this;
        if (this.rating.title == "" ||
            this.rating.review == "" ||
            this.rating.rate == 0) {
            var alert_1 = this.alertCtrl.create({
                title: "Warning!",
                subTitle: "Please fill out all review informations.",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        var reviewInfo = {
            id: this.booking.id,
            ratings: this.rating.rate,
            description: this.rating.review,
            title: this.rating.title,
            customerInfo: this.customerProfile,
            artistInfo: this.booking.attributes.artistInfo
        };
        this.bookingProvider.submitReview(reviewInfo).then(function (result) {
            _this.booking.set("isReviewed", true);
            _this.bookingProvider.updateBooking(_this.booking).then(function (result) {
                _this.navCtrl.pop();
            });
        });
    };
    ReviewPage.prototype.openArtist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
            account: this.customerProfile
        });
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-review",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/review/review.html"*/'<!--\n  Generated template for the ReviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Review</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openArtist()">\n        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h3>Rate this artist *</h3>\n  <div class="item">\n    <rating [(ngModel)]="rating.rate" max="5"></rating>\n  </div>\n  <ion-input style="border: solid 1px;margin-top: 10px;" placeholder="Review Title" [(ngModel)]="rating.title"></ion-input>\n  <textarea style="border: solid 1px;margin-top: 10px;height: 150px;width: 100%;" placeholder="Write A Review..." [(ngModel)]="rating.review"></textarea>\n  <button style="width: 100%;margin-top:  10px;" ion-button (click)="submitReview()">Submit Review</button>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/review/review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_book_book__["a" /* BookProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformerAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_password_change_password__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_artist_artist__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the PerformerAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PerformerAccountPage = /** @class */ (function () {
    function PerformerAccountPage(navCtrl, navParams, actionSheetCtrl, camera, userPrivider, modalController, artistProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.userPrivider = userPrivider;
        this.modalController = modalController;
        this.artistProvider = artistProvider;
        this.alertCtrl = alertCtrl;
        this.customerProfile = {};
        this.placeholder = "assets/imgs/placeholder.png";
        this.isLoading = false;
        this.profile = {};
        this.segment = "profile";
        this.priceRange = [];
        this.selectedImage = "";
        this.portfoiloDescription = "";
        this.youtubeLink = "";
        this.youtubeLinkDescription = "";
        this.soundcloudLink = "";
        this.soundcloudLinkDescription = "";
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.artistPortfolio = [];
        this.galleryOption = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            cameraDirection: 0,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
        this.cameraOption = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            allowEdit: true,
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: 200,
            targetHeight: 200,
            saveToPhotoAlbum: false,
            correctOrientation: true,
            cameraDirection: 0,
            sourceType: this.camera.PictureSourceType.CAMERA
        };
        this.customerProfile = navParams.get("account");
        this.serviceList = [];
        this.getServices(this.customerProfile.id);
        this.getPortfolioById(this.customerProfile.id);
        this.getReviewsById(this.customerProfile.id);
        this.serviceName = "";
        this.description = "";
        this.price = "";
        this.duration = "";
    }
    PerformerAccountPage.prototype.ionViewDidLoad = function () {
        this.profile.avatar = this.customerProfile.attributes.avatar;
        this.profile.firstName = this.customerProfile.attributes.firstName;
        this.profile.lastName = this.customerProfile.attributes.lastName;
        this.profile.stageName = this.customerProfile.attributes.stageName;
        this.profile.serviceType = this.customerProfile.attributes.serviceType;
        if (this.customerProfile.attributes.birthDate != null) {
            var date = new Date(this.customerProfile.attributes.birthDate);
            this.profile.birthDate = date.toISOString();
        }
        else {
            this.profile.birthDate = new Date().toISOString();
        }
        this.profile.gender = this.customerProfile.attributes.gender;
        this.profile.email = this.customerProfile.attributes.email;
        this.profile.contactNumber = this.customerProfile.attributes.contactNumber;
        this.profile.address = this.customerProfile.attributes.address;
        this.profile.city = this.customerProfile.attributes.city;
        this.profile.state = this.customerProfile.attributes.state;
        this.profile.country = this.customerProfile.attributes.country;
    };
    PerformerAccountPage.prototype.changePassword = function () {
        var changePasswordPage = this.modalController.create(__WEBPACK_IMPORTED_MODULE_4__change_password_change_password__["a" /* ChangePasswordPage */]);
        changePasswordPage.present();
    };
    PerformerAccountPage.prototype.updateProfile = function () {
        var _this = this;
        this.customerProfile.set("firstName", this.profile.firstName);
        this.customerProfile.set("lastName", this.profile.lastName);
        this.customerProfile.set("email", this.profile.email);
        this.customerProfile.set("gender", this.profile.gender);
        this.customerProfile.set("contactNumber", this.profile.contactNumber);
        this.customerProfile.set("address", this.profile.address);
        this.customerProfile.set("city", this.profile.city);
        this.customerProfile.set("state", this.profile.state);
        this.customerProfile.set("country", this.profile.country);
        this.customerProfile.set("birthDate", new Date(this.profile.birthDate));
        this.customerProfile.set("stageName", this.profile.stageName);
        this.customerProfile.set("serviceType", this.profile.serviceType);
        this.userPrivider.updateProfile(this.customerProfile).then(function (result) {
            var alert = _this.alertCtrl.create({
                title: "Account",
                subTitle: "Your account profile has been successfully updated.",
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    PerformerAccountPage.prototype.showUploadOption = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Take a picture",
                    icon: "camera",
                    handler: function () {
                        _this.takePicturefromCamera();
                    }
                },
                {
                    text: "From gallery",
                    icon: "images",
                    handler: function () {
                        _this.takePicture();
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PerformerAccountPage.prototype.takePicture = function () {
        var _this = this;
        this.camera
            .getPicture(this.galleryOption)
            .then(function (imagePath) {
            return imagePath;
        })
            .then(function (imageBlob) {
            return _this.uploadPhoto(imageBlob);
        });
    };
    PerformerAccountPage.prototype.takePicturefromCamera = function () {
        var _this = this;
        this.camera
            .getPicture(this.cameraOption)
            .then(function (imagePath) {
            return imagePath;
        })
            .then(function (imageBlob) {
            return _this.uploadPhoto(imageBlob);
        });
    };
    PerformerAccountPage.prototype.uploadPhoto = function (file_path) {
        var _this = this;
        this.userPrivider.uploadFile(file_path).then(function (result) {
            _this.customerProfile.set("avatar", result._url);
            _this.profile.avatar = result._url;
            _this.userPrivider.updateProfile(_this.customerProfile).then(function (result) {
                var alert = _this.alertCtrl.create({
                    title: "Account",
                    subTitle: "Your profile image has been successfully updated.",
                    buttons: ["Dismiss"]
                });
                alert.present();
            });
        });
    };
    PerformerAccountPage.prototype.uploadImage = function (file_path) {
        var _this = this;
        this.userPrivider.uploadFile(file_path).then(function (result) {
            _this.selectedImage = result._url;
        });
    };
    PerformerAccountPage.prototype.openArtist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
    };
    PerformerAccountPage.prototype.getReviewsById = function (id) {
        var _this = this;
        this.artistProvider.getReviewsById(id).then(function (results) {
            _this.artistReviews = results;
            console.log(_this.artistReviews);
        });
    };
    PerformerAccountPage.prototype.getServices = function (id) {
        var _this = this;
        this.artistProvider.getServiceById(id).then(function (results) {
            _this.services = [];
            _this.serviceList = [];
            results.forEach(function (service) {
                _this.services.push({
                    id: service.id,
                    name: service.attributes.name,
                    duration: service.attributes.duration,
                    ownerId: service.attributes.ownerId,
                    price: service.attributes.price,
                    description: service.attributes.name,
                    checked: false
                });
                _this.serviceList.push(service);
            });
            _this.updatePriceRange();
        });
    };
    PerformerAccountPage.prototype.parsePriceRange = function (services) {
        var _this = this;
        this.priceRange = [];
        services.forEach(function (service) {
            _this.priceRange.push(service.price);
        });
    };
    PerformerAccountPage.prototype.getPortfolioById = function (id) {
        var _this = this;
        this.artistProvider.getPortfolio(id).then(function (results) {
            _this.artistPortfolio = results;
        });
    };
    PerformerAccountPage.prototype.addService = function () {
        var _this = this;
        if (this.customerProfile.id === "" ||
            this.description === "" ||
            this.serviceName === "" ||
            this.price === "" ||
            this.duration == "") {
            return;
        }
        if (parseInt(this.duration) <= 0 || parseInt(this.price) <= 0) {
            return;
        }
        this.artistProvider
            .addService(this.customerProfile.id, this.serviceName, this.description, this.price, this.duration)
            .then(function (result) {
            _this.services.push({
                id: result.id,
                name: result.attributes.name,
                duration: result.attributes.duration,
                ownerId: result.attributes.ownerId,
                price: result.attributes.price,
                description: result.attributes.name,
                checked: false
            });
            _this.serviceList.push(result);
            _this.updatePriceRange().then(function () {
                var alert = _this.alertCtrl.create({
                    title: "Service",
                    subTitle: "Service is added successfully!",
                    buttons: ["Dismiss"]
                });
                alert.present();
                _this.description = "";
                _this.serviceName = "";
                _this.price = "";
                _this.duration = "";
            });
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    PerformerAccountPage.prototype.updatePriceRange = function () {
        this.parsePriceRange(this.services);
        this.customerProfile.set("priceRange", {
            low: this.findMin(this.priceRange),
            high: this.findMax(this.priceRange)
        });
        return this.userPrivider
            .updateProfile(this.customerProfile)
            .then(function (result) {
            console.log(result);
        });
    };
    PerformerAccountPage.prototype.findMin = function (prices) {
        if (!prices.length) {
            return 0;
        }
        else {
            return Math.min.apply(null, prices);
        }
    };
    PerformerAccountPage.prototype.findMax = function (prices) {
        if (!prices.length) {
            return 0;
        }
        else {
            return Math.max.apply(null, prices);
        }
    };
    PerformerAccountPage.prototype.removeService = function (service) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Service",
            message: "Are you sure you want to delete this service?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "Yes, I am sure!",
                    handler: function () {
                        _this.serviceList.forEach(function (item) {
                            if (item.id === service.id) {
                                _this.artistProvider
                                    .removeService(item)
                                    .then(function (result) {
                                    var alert = _this.alertCtrl.create({
                                        title: "Service",
                                        subTitle: "Service Successfully Deleted",
                                        buttons: ["Dismiss"]
                                    });
                                    alert.present();
                                    _this.getServices(_this.customerProfile.id);
                                })
                                    .catch(function (error) {
                                    var alert = _this.alertCtrl.create({
                                        title: "Service",
                                        subTitle: "Service: Delete Failed",
                                        buttons: ["Dismiss"]
                                    });
                                    alert.present();
                                });
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PerformerAccountPage.prototype.selectImage = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            enableBackdropDismiss: true,
            buttons: [
                {
                    text: "Take a picture",
                    icon: "camera",
                    handler: function () {
                        _this.camera
                            .getPicture(_this.cameraOption)
                            .then(function (imagePath) {
                            return imagePath;
                        })
                            .then(function (imageBlob) {
                            return _this.uploadImage(imageBlob);
                        });
                    }
                },
                {
                    text: "From gallery",
                    icon: "images",
                    handler: function () {
                        _this.camera
                            .getPicture(_this.galleryOption)
                            .then(function (imagePath) {
                            return imagePath;
                        })
                            .then(function (imageBlob) {
                            return _this.uploadImage(imageBlob);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    };
    PerformerAccountPage.prototype.removeImage = function () {
        this.selectedImage = "";
    };
    PerformerAccountPage.prototype.addPortfoilo = function (type) {
        switch (type) {
            case 0:
                this.addPortfolio(this.selectedImage, this.portfoiloDescription, type, this.customerProfile);
                this.selectedImage = "";
                this.portfoiloDescription = "";
                break;
            case 1:
                this.addPortfolio(this.youtubeLink, this.youtubeLinkDescription, type, this.customerProfile);
                this.youtubeLink = "";
                this.youtubeLinkDescription = "";
                break;
            case 2:
                this.addPortfolio(this.soundcloudLink, this.soundcloudLinkDescription, type, this.customerProfile);
                this.soundcloudLink = "";
                this.soundcloudLinkDescription = "";
                break;
        }
    };
    PerformerAccountPage.prototype.addPortfolio = function (url, description, type, account) {
        var _this = this;
        if (url === "" || description === "") {
            return;
        }
        this.artistProvider
            .addPortfolio(url, description, type, account)
            .then(function (result) {
            var alert = _this.alertCtrl.create({
                title: "Portfolio",
                subTitle: "Portfolio is added successfully.",
                buttons: ["Dismiss"]
            });
            alert.present();
            _this.getPortfolioById(account.id);
        })
            .catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: "Portfolio",
                subTitle: "Portfolio is not added.",
                buttons: ["Dismiss"]
            });
            alert.present();
        });
    };
    PerformerAccountPage.prototype.removePortfolio = function (portfolio) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Portfolio",
            message: "Are you sure you want to delete this portfolio?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "Yes, I am sure!",
                    handler: function () {
                        _this.artistProvider
                            .removePortfolio(portfolio)
                            .then(function (result) {
                            var alert = _this.alertCtrl.create({
                                title: "Portfolio",
                                subTitle: "Portfolio Successfully Deleted",
                                buttons: ["Dismiss"]
                            });
                            alert.present();
                            _this.getPortfolioById(_this.customerProfile.id);
                        })
                            .catch(function (error) {
                            var alert = _this.alertCtrl.create({
                                title: "Portfolio",
                                subTitle: "Portfolio: Delete Failed",
                                buttons: ["Dismiss"]
                            });
                            alert.present();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    PerformerAccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-performer-account",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/performer-account/performer-account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Account</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openArtist()">\n        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-segment [(ngModel)]="segment">\n    <ion-segment-button value="profile">\n      Profile\n    </ion-segment-button>\n    <ion-segment-button value="services" icon-bottom>\n      Services\n    </ion-segment-button>\n    <ion-segment-button value="portfoilo">\n      Portfoilo\n    </ion-segment-button>\n    <ion-segment-button value="reviews">\n      Reviews\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="segment">\n    <div *ngSwitchCase="\'profile\'">\n      <div style="text-align: center; background: #f4eae9; padding-top: 15px; border-bottom-color: #B3A5A5; border-bottom-width: 2px !important; border-bottom-style: dashed;">\n        <img src="{{profile.avatar || placeholder}}" (click)="showUploadOption()" style="width: 100px; border-radius: 50%; max-width: 100px; max-height: 100px; border-width: 3px; border-style: solid; border-color: white;"\n          class="blush-avatar">\n        <p *ngIf=" ! profile.avatar ">Tap on the picture to change avatar!</p>\n      </div>\n      <div *ngIf="isLoading" style="text-align: center; padding-top: 45%; padding-right: 10px; padding-left: 10px;">\n        <ion-spinner icon="spiral"></ion-spinner>\n        <br>\n        <span>{{loadingStatus}}</span>\n      </div>\n      <div *ngIf="!isLoading">\n        <div style="padding-top: 20px; text-align: center; font-family: RaleWay; background-color: #f4eae9;">\n          <b style="font-size: 23px;">My Profile</b>\n        </div>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>Stage Name</ion-label>\n          <ion-input class="white-input" placeholder="StageName" type="text" [(ngModel)]="profile.stageName"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>First Name</ion-label>\n          <ion-input class="white-input" placeholder="First Name" type="text" [(ngModel)]="profile.firstName"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>Last Name</ion-label>\n          <ion-input class="white-input" placeholder="Last Name" type="text" [(ngModel)]="profile.lastName"></ion-input>\n        </label>\n        <ion-item style="padding-left: 0px;">\n          <ion-label>Gender</ion-label>\n          <ion-select [(ngModel)]="profile.gender">\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item style="padding-left: 0px;">\n          <ion-label>Birthdate</ion-label>\n          <ion-datetime displayFormat="MMM DD YYYY" [(ngModel)]="profile.birthDate"></ion-datetime>\n        </ion-item>\n        <div style="text-align: center; font-family: RaleWay; padding: 10px;">\n          <b style="font-size: 23px;">Contact Information</b>\n        </div>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>Email</ion-label>\n          <ion-input class="white-input" type="email" placeholder="Email" [(ngModel)]="profile.email"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>Phone Number</ion-label>\n          <ion-input class="white-input" type="number" placeholder="Contact Number" [(ngModel)]="profile.contactNumber"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>Address</ion-label>\n          <ion-input class="white-input" type="text" placeholder="Address" [(ngModel)]="profile.address"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>City</ion-label>\n          <ion-input class="white-input" type="text" placeholder="City" [(ngModel)]="profile.city"></ion-input>\n        </label>\n        <label style="padding-right: 5%;">\n          <ion-label color="primary" stacked>State</ion-label>\n          <ion-input class="white-input" type="text" placeholder="State" [(ngModel)]="profile.state"></ion-input>\n        </label>\n        <ion-item style="padding-left: 0px;">\n          <ion-label>Service Type</ion-label>\n          <ion-select [(ngModel)]="profile.serviceType">\n            <ion-option value="DJ">DJ</ion-option>\n            <ion-option value="Artist">Artist</ion-option>\n            <ion-option value="Band">Band</ion-option>\n          </ion-select>\n        </ion-item>\n        <div style="text-align: center; font-family: RaleWay; padding: 10px;">\n          <b style="font-size: 23px;">Account Credentials</b>\n        </div>\n        <label style="padding-bottom: 0px; border-bottom-color: #f4eae9; border-bottom-width: 2px !important; border-bottom-style: dashed; padding-right: 5%;">\n          <button ion-button class="round-white-back" style="background-color: #f1807a;color: white;" (click)="changePassword()">Change Password</button>\n          <br>\n        </label>\n        <label style="padding-bottom: 0px; padding-right: 5%;">\n          <button ion-button class="round-white-back" style="background-color: black;color: white;" (click)="updateProfile()">Update Account</button>\n          <br>\n        </label>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'services\'">\n      <div class="grey-border" style="margin-top: 10px;">\n        <ion-item>\n          <ion-input placeholder="Service Name" clearInput [(ngModel)]="serviceName"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Description" clearInput [(ngModel)]="description"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Price (USD)" clearInput [(ngModel)]="price"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input placeholder="Duration(mins)" clearInput [(ngModel)]="duration"></ion-input>\n        </ion-item>\n        <ion-item>\n          <button ion-button color="secondary" full (click)="addService()">Add</button>\n        </ion-item>\n      </div>\n      <ion-list>\n        <ion-item class="grey-border" *ngFor="let service of services">\n          <ion-row>\n            Service Name : {{service.name}}\n          </ion-row>\n          <ion-row>\n            Service Description : {{service.description}}\n          </ion-row>\n          <ion-row>\n            Price : $ {{service.price}}\n          </ion-row>\n          <ion-row>\n            Duration : {{service.duration}} mins\n          </ion-row>\n          <ion-row>\n            <button ion-button full color="danger" (click)="removeService(service)" style="height: 24px;">Delete</button>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'portfoilo\'">\n      <ion-row class="grey-border" style="height: 120px;padding: 10px;">\n        <ion-col>\n          <ion-row>\n            <button (click)="selectImage()" style="height: 20px;">\n              Choose File\n            </button>\n          </ion-row>\n          <ion-row>\n            <img *ngIf="selectedImage" [src]="selectedImage" style="width: 80px;height: 60px;max-height: 60px;min-height: 60px;">\n          </ion-row>\n          <ion-row>\n            <button *ngIf="selectedImage" (click)="removeImage()" style="background-color: #f53d3d;height: 20px;width: 80px;color: white;">Delete</button>\n          </ion-row>\n        </ion-col>\n        <ion-col>\n          <ion-item no-lines>\n            <ion-input style="height: 100px; border: 1px solid" placeholder="Description" clearInput [(ngModel)]="portfoiloDescription"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="secondary" full (click)="addPortfoilo(0)">Add</button>\n      <ion-row class="grey-border" style="height: 120px;padding: 10px;">\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="Youtube link" clearInput [(ngModel)]="youtubeLink"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Description" clearInput [(ngModel)]="youtubeLinkDescription"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="secondary" full (click)="addPortfoilo(1)">Add</button>\n      <ion-row class="grey-border" style="height: 120px;padding: 10px;">\n        <ion-col>\n          <ion-item>\n            <ion-input placeholder="SoundCloud link" clearInput [(ngModel)]="soundcloudLink"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-input placeholder="Description" clearInput [(ngModel)]="soundcloudLinkDescription"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <button ion-button color="secondary" full (click)="addPortfoilo(2)">Add</button>\n      <ion-list>\n        <ion-item *ngFor="let portfolio of artistPortfolio">\n          <ion-avatar item-start>\n            <img src="{{portfolio.attributes.artistInfo.avatar || profilePicTemp}}" item-left>\n          </ion-avatar>\n          <h2>{{portfolio.attributes.name}}</h2>\n          <p>{{portfolio.attributes.description}}</p>\n          <div *ngIf="portfolio.attributes.type === 0">\n            <ion-icon ios="ios-image" md="md-image" style="color:red;"></ion-icon>\n          </div>\n          <div *ngIf="portfolio.attributes.type === 1">\n            <ion-icon ios="logo-youtube" md="logo-youtube" style="color:red;"></ion-icon>\n          </div>\n          <div *ngIf="portfolio.attributes.type === 2">\n            <ion-icon ios="ios-musical-notes" md="md-musical-notes" style="color:red;"></ion-icon>\n          </div>\n          <span style="color:gray;font-size:13px">{{ portfolio.attributes.createdAt | date: \'MMM dd, HH:mm\'}}</span>\n          <button ion-button full color="danger" (click)="removePortfolio(portfolio)" style="height: 24px;">Delete</button>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'reviews\'">\n      <ion-list>\n        <ion-item *ngFor="let review of artistReviews">\n          <ion-avatar item-start>\n            <img src="{{review.attributes.customerInfo.avatar || profilePicTemp}}" item-left>\n          </ion-avatar>\n          <h2>{{review.attributes.title}}</h2>\n          <div class="col" style="padding-left: 0px; padding-bottom: 0px; text-align: left;">\n\n            <ion-icon [ngClass]="review.attributes.ratings >= 1 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 2 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 3 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings >= 4 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n            <ion-icon [ngClass]="review.attributes.ratings == 5 ? \'ion-ios-heart\' : \'ion-ios-heart-outline\'" style="color:#f1807a;"></ion-icon>\n          </div>\n          <p>{{review.attributes.description}}</p>\n          <p>by\n            <em>{{review.attributes.customerInfo.firstName}} {{review.attributes.customerInfo.lastName}} {{review.attributes.createdAt.getMonth()\n              + 1}} / {{review.attributes.createdAt.getDate() + 1}} / {{review.attributes.createdAt.getFullYear()}}</em>\n          </p>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/performer-account/performer-account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_artist_artist__["a" /* ArtistProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], PerformerAccountPage);
    return PerformerAccountPage;
}());

//# sourceMappingURL=performer-account.js.map

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 271;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserProvider = /** @class */ (function () {
    function UserProvider(http, events) {
        this.http = http;
        this.events = events;
        this.customer = {};
    }
    UserProvider.prototype.login = function (crendential) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.logIn(crendential.userName, crendential.password, {
            success: function (user) {
                _this.getProfile(__WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId"), true);
            },
            error: function (user, error) {
                _this.events.publish("login:failed", error);
            }
        });
    };
    UserProvider.prototype.registerPerformer = function (register) {
        var _this = this;
        var Artist = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Artist");
        var artist = new Artist();
        artist.set("firstName", register.firstName);
        artist.set("lastName", register.lastName);
        artist.set("contactNumber", register.contactNumber);
        artist.set("email", register.email);
        artist.set("serviceType", register.serviceType);
        artist.set("address", register.address);
        artist.set("stageName", register.stageName);
        artist.set("city", register.city);
        artist.set("country", register.country);
        artist.set("state", register.state);
        var point = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].GeoPoint({
            latitude: register.latitude,
            longitude: register.longitude
        });
        artist.set("coordinates", point);
        artist.set("currentCoordinates", {
            lat: register.latitude,
            lng: register.longitude
        });
        return artist.save(null, {
            success: function (result) {
                var user = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User();
                user.set("username", register.email);
                user.set("password", register.password);
                user.set("profileId", result.id);
                user.set("userType", register.userType);
                user.set("serviceType", register.serviceType);
                user.set("address", register.address);
                user.set("stageName", register.stageName);
                user.set("city", register.city);
                user.set("country", register.country);
                user.set("state", register.state);
                user.set("coordinates", point);
                user.set("currentCoordinates", {
                    lat: register.latitude,
                    lng: register.longitude
                });
                user.signUp(null, function () {
                    _this.getProfile(__WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId"), false);
                });
            },
            error: function (user, error) {
                _this.events.publish("register:failed", error);
            }
        });
    };
    UserProvider.prototype.register = function (register) {
        var _this = this;
        var Customer = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Customer");
        var customer = new Customer();
        customer.set("firstName", register.firstName);
        customer.set("lastName", register.lastName);
        customer.set("contactNumber", register.contactNumber);
        customer.set("email", register.email);
        return customer.save(null, {
            success: function (result) {
                var user = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User();
                user.set("username", register.email);
                user.set("password", register.password);
                user.set("profileId", result.id);
                user.set("userType", register.userType);
                user.signUp(null, function () {
                    _this.getProfile(__WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId"), false);
                });
            },
            error: function (user, error) {
                _this.events.publish("register:failed", error);
            }
        });
    };
    UserProvider.prototype.logout = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.logOut().then(function () {
            _this.events.publish("logout");
        });
    };
    UserProvider.prototype.getProfile = function (profileId, type) {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current();
        var userObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend(this.capitalize(user.attributes.userType));
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(userObject);
        if (profileId) {
            query.equalTo("objectId", profileId);
        }
        query.find({
            success: function (results) {
                _this.customer = results[0];
                if (type) {
                    _this.events.publish("login:success", _this.customer);
                }
                else {
                    _this.events.publish("register:success", _this.customer);
                }
            },
            error: function (error) {
                if (type) {
                    _this.events.publish("login:failed", error);
                }
                else {
                    _this.events.publish("register:failed", error);
                }
            }
        });
    };
    UserProvider.prototype.hasLoggedIn = function () {
        return __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current() != null;
    };
    UserProvider.prototype.checkLogin = function () {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current();
        var profileId = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId");
        var customerObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend(this.capitalize(user.attributes.userType));
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(customerObject);
        if (profileId) {
            query.equalTo("objectId", profileId);
        }
        return query.find({
            success: function (results) {
                _this.customer = results[0];
                _this.events.publish("login:success", _this.customer);
            },
            error: function (error) {
                _this.events.publish("login:failed", error);
            }
        });
    };
    UserProvider.prototype.getCurrentUser = function () {
        var user = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current();
        var profileId = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current().get("profileId");
        var customerObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend(this.capitalize(user.attributes.userType));
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(customerObject);
        if (profileId) {
            query.equalTo("objectId", profileId);
        }
        var promise = new Promise(function (resolve, reject) {
            query.find({
                success: function (results) {
                    resolve(results[0]);
                },
                error: function (error) {
                    reject(error);
                }
            });
        });
        return promise;
    };
    UserProvider.prototype.uploadFile = function (url) {
        var uploadFile = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].File("image.jpg", { base64: url });
        return uploadFile.save();
    };
    UserProvider.prototype.updateProfile = function (profile) {
        return profile.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    UserProvider.prototype.forgotPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Cloud.run("request-reset", { email: email }, {
            success: function (secretString) {
                console.log(secretString);
            },
            error: function (error) {
                console.log(error);
                var alert = this.alertCtrl.create({
                    title: "Error",
                    subTitle: "Sorry, the email address you entered is not registered.",
                    buttons: ["Dismiss"]
                });
                alert.present();
            }
        });
    };
    UserProvider.prototype.checkPassword = function (password) {
        var user = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.current();
        var email = user.get("username");
        var credential = {};
        credential.userName = email;
        credential.password = password;
        return this.login(credential);
    };
    UserProvider.prototype.capitalize = function (string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		907,
		16
	],
	"../pages/appointments/appointments.module": [
		908,
		15
	],
	"../pages/artist/artist.module": [
		909,
		14
	],
	"../pages/book/book.module": [
		910,
		13
	],
	"../pages/change-password/change-password.module": [
		911,
		12
	],
	"../pages/chat/chat.module": [
		912,
		11
	],
	"../pages/filter/filter.module": [
		913,
		10
	],
	"../pages/image/image.module": [
		914,
		9
	],
	"../pages/inbox/inbox.module": [
		915,
		8
	],
	"../pages/login/login.module": [
		916,
		7
	],
	"../pages/performer-account/performer-account.module": [
		921,
		6
	],
	"../pages/performer-register/performer-register.module": [
		917,
		5
	],
	"../pages/register/register.module": [
		918,
		4
	],
	"../pages/review/review.module": [
		919,
		3
	],
	"../pages/sort/sort.module": [
		920,
		2
	],
	"../pages/sound-cloud/sound-cloud.module": [
		922,
		1
	],
	"../pages/youtube/youtube.module": [
		923,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 315;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessageProvider = /** @class */ (function () {
    function MessageProvider(http) {
        this.http = http;
    }
    MessageProvider.prototype.getMessages = function (id) {
        var ServiceObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Message");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(ServiceObject);
        if (id) {
            query.equalTo("threadId", id);
            query.ascending("createdAt");
            query.limit(100);
        }
        return query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    MessageProvider.prototype.sendMessage = function (text, chatId, userId) {
        var Message = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Message");
        var message = new Message();
        message.set("threadId", chatId);
        message.set("message", text);
        message.set("userId", userId);
        message.set("createdDate", new Date());
        return message.save(null, {
            success: function (result) {
                console.log(result);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    MessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MessageProvider);
    return MessageProvider;
}());

//# sourceMappingURL=message.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ImagePage = /** @class */ (function () {
    function ImagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.portfolio = this.navParams.get("portfolio");
    }
    ImagePage.prototype.ionViewDidLoad = function () { };
    ImagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-image",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/image/image.html"*/'<!--\n  Generated template for the ImagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{portfolio.attributes.artistInfo.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/image/image.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ImagePage);
    return ImagePage;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundCloudPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_themeable_browser__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SoundCloudPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SoundCloudPage = /** @class */ (function () {
    function SoundCloudPage(navCtrl, navParams, themeableBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.themeableBrowser = themeableBrowser;
        this.portfolio = this.navParams.get("portfolio");
        this.openBrowser();
    }
    SoundCloudPage.prototype.openBrowser = function () {
        var _this = this;
        var options = {
            toolbar: {
                height: 56,
                color: "#ffffff"
            },
            title: {
                color: "#000000",
                showPageTitle: true,
                staticText: this.portfolio.attributes.artistInfo.name
            },
            backButton: {
                wwwImage: "assets/imgs/back.png",
                align: "left",
                event: "backPressed"
            },
            forwardButton: {
                wwwImage: "assets/imgs/forward.png",
                align: "left",
                event: "forwardPressed"
            },
            closeButton: {
                wwwImage: "assets/imgs/close.png",
                align: "left",
                event: "closePressed"
            }
        };
        var browser = this.themeableBrowser.create(this.portfolio.attributes.url, "_blank", options);
        browser.on("closePressed").subscribe(function (data) {
            browser.close();
            _this.navCtrl.pop();
        });
    };
    SoundCloudPage.prototype.ionViewDidLoad = function () { };
    SoundCloudPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-sound-cloud",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/sound-cloud/sound-cloud.html"*/'<!--\n  Generated template for the SoundCloudPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{portfolio.attributes.artistInfo.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/sound-cloud/sound-cloud.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]])
    ], SoundCloudPage);
    return SoundCloudPage;
}());

//# sourceMappingURL=sound-cloud.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YoutubePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the YoutubePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var YoutubePage = /** @class */ (function () {
    function YoutubePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.portfolio = this.navParams.get("portfolio");
    }
    YoutubePage.prototype.ionViewDidLoad = function () { };
    YoutubePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-youtube",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/youtube/youtube.html"*/'<!--\n  Generated template for the YoutubePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{portfolio.attributes.artistInfo.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/youtube/youtube.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], YoutubePage);
    return YoutubePage;
}());

//# sourceMappingURL=youtube.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(492);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(496);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(899);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(900);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_account_account__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_appointments_appointments__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_system_system__ = __webpack_require__(901);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_message_message__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_message_box_message_box__ = __webpack_require__(902);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_sort_sort__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_filter_filter__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_artist_artist__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_artist_artist__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_book_book__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_book_book__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_review_review__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_change_password_change_password__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ionic2_rating__ = __webpack_require__(904);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__agm_core__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_performer_register_performer_register__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_performer_account_performer_account__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_sound_cloud_sound_cloud__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_youtube_youtube__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_sound_cloud_sound_cloud__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_image_image__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_themeable_browser__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            schemas: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_19__components_message_box_message_box__["a" /* MessageBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_artist_artist__["a" /* ArtistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_performer_register_performer_register__["a" /* PerformerRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_performer_account_performer_account__["a" /* PerformerAccountPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_sound_cloud_sound_cloud__["a" /* SoundCloudPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_image_image__["a" /* ImagePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/appointments/appointments.module#AppointmentsPageModule', name: 'AppointmentsPage', segment: 'appointments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/artist/artist.module#ArtistPageModule', name: 'ArtistPage', segment: 'artist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/book/book.module#BookPageModule', name: 'BookPage', segment: 'book', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/image/image.module#ImagePageModule', name: 'ImagePage', segment: 'image', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/performer-register/performer-register.module#PerformerRegisterPageModule', name: 'PerformerRegisterPage', segment: 'performer-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/review/review.module#ReviewPageModule', name: 'ReviewPage', segment: 'review', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sort/sort.module#SortPageModule', name: 'SortPage', segment: 'sort', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/performer-account/performer-account.module#PerformerAccountPageModule', name: 'PerformerAccountPage', segment: 'performer-account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sound-cloud/sound-cloud.module#SoundCloudPageModule', name: 'SoundCloudPage', segment: 'sound-cloud', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/youtube/youtube.module#YoutubePageModule', name: 'YoutubePage', segment: 'youtube', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_31_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_32__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: "AIzaSyCnahpwY4LRTYlzEHnER3B_Y8NR1HzmrVE",
                    libraries: ["places"]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_inbox_inbox__["a" /* InboxPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_appointments_appointments__["a" /* AppointmentsPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_chat_chat__["a" /* ChatPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_sort_sort__["a" /* SortPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_artist_artist__["a" /* ArtistPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_change_password_change_password__["a" /* ChangePasswordPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_performer_register_performer_register__["a" /* PerformerRegisterPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_performer_account_performer_account__["a" /* PerformerAccountPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_youtube_youtube__["a" /* YoutubePage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_sound_cloud_sound_cloud__["a" /* SoundCloudPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_image_image__["a" /* ImagePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* MenuToggle */],
                __WEBPACK_IMPORTED_MODULE_15__providers_system_system__["a" /* SystemProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_chat_chat__["a" /* ChatProvider */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_18__providers_message_message__["a" /* MessageProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_artist_artist__["a" /* ArtistProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_book_book__["a" /* BookProvider */],
                __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_28__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_35__providers_sound_cloud_sound_cloud__["a" /* SoundCloudProvider */],
                __WEBPACK_IMPORTED_MODULE_39__ionic_native_themeable_browser__["a" /* ThemeableBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sort_sort__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_artist_artist__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__artist_artist__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agm_core__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inbox_inbox__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, geoLocation, artistProvider, events, alertCtrl, mapsAPILoader, ngZone, userService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geoLocation = geoLocation;
        this.artistProvider = artistProvider;
        this.events = events;
        this.alertCtrl = alertCtrl;
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.userService = userService;
        this.coordinate = {};
        this.searchPlaceHolder = "Find Artists By Entering Location...";
        this.loadingStatus = "Finding Artists Near Your Location...";
        this.filter = {};
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.changeColor = false;
        this.hasLoggedIn = false;
        this.filter.Dj = true;
        this.filter.Band = true;
        this.filter.Artist = true;
        this.filter.sort = "Distance";
        this.distance = this.getAngleFromMile(50);
        this.events.subscribe("filterAndSort", function (result) {
            _this.filter = result;
            if (_this.originArtists === undefined) {
                return;
            }
            _this.sortAndFilter(_this.originArtists);
        });
        this.hasLoggedIn = this.userService.hasLoggedIn();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var nativeHomeInputBox = document
                .getElementById("addressInput")
                .getElementsByTagName("input")[0];
            var autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                _this.ngZone.run(function () {
                    var place = autocomplete.getPlace();
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    var latitude = place.geometry.location.lat();
                    var longitude = place.geometry.location.lng();
                    var point = new __WEBPACK_IMPORTED_MODULE_5_parse__["Parse"].GeoPoint({
                        latitude: latitude,
                        longitude: longitude
                    });
                    _this.coordinate = point;
                    _this.getArtist(point);
                });
            });
        });
        this.geoLocation
            .getCurrentPosition()
            .then(function (resp) {
            _this.coordinate = resp.coords;
            var point = new __WEBPACK_IMPORTED_MODULE_5_parse__["Parse"].GeoPoint({
                latitude: _this.coordinate.latitude,
                longitude: _this.coordinate.longitude
            });
            _this.getAddress(point);
            _this.getArtist(point);
        })
            .catch(function (error) {
            console.log("Error getting location", error);
        });
    };
    HomePage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__artist_artist__["a" /* ArtistPage */], {
            artist: item
        });
    };
    HomePage.prototype.moreDataCanBeLoaded = function () {
        return true;
    };
    HomePage.prototype.findArtistsNearby = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Find Artists",
            message: "Find artists near to your current location?",
            buttons: [
                {
                    text: "Cancel",
                    role: "cancel",
                    handler: function () { }
                },
                {
                    text: "OK",
                    handler: function () {
                        _this.geoLocation
                            .getCurrentPosition()
                            .then(function (resp) {
                            _this.coordinate = resp.coords;
                            var point = new __WEBPACK_IMPORTED_MODULE_5_parse__["Parse"].GeoPoint({
                                latitude: _this.coordinate.latitude,
                                longitude: _this.coordinate.longitude
                            });
                            _this.getAddress(point);
                            _this.getArtist(point);
                        })
                            .catch(function (error) {
                            console.log("Error getting location", error);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.getAddress = function (point) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var latlng = { lat: point.latitude, lng: point.longitude };
        geocoder.geocode({ location: latlng }, function (results, status) {
            if (results.length > 0) {
                _this.address = results[0].formatted_address;
            }
        });
    };
    HomePage.prototype.getArtist = function (point) {
        var _this = this;
        this.artistProvider.getArtist(point).then(function (results) {
            if (results == null || results == undefined || results.length == 0) {
                return;
            }
            _this.originArtists = results;
            console.log(results);
            _this.sortAndFilter(results);
        });
    };
    HomePage.prototype.getAngleFromMile = function (mile) {
        return (1 * mile) / 60;
    };
    HomePage.prototype.showFilters = function (bMode, mode) {
        if (bMode) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */], {
                mode: mode,
                filter: this.filter
            });
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__sort_sort__["a" /* SortPage */], {
                mode: mode,
                filter: this.filter
            });
        }
    };
    HomePage.prototype.sortAndFilter = function (artists) {
        var _this = this;
        if (artists === undefined || this.coordinate === undefined) {
            return;
        }
        var point = new __WEBPACK_IMPORTED_MODULE_5_parse__["Parse"].GeoPoint({
            latitude: this.coordinate.latitude,
            longitude: this.coordinate.longitude
        });
        var tempArtist = artists.filter(function (artist) {
            var difference = Math.sqrt((point._latitude - artist.attributes.coordinates._latitude) *
                (point._latitude - artist.attributes.coordinates._latitude) +
                (point._longitude - artist.attributes.coordinates._longitude) *
                    (point._longitude - artist.attributes.coordinates._longitude));
            console.log(difference +
                " : " +
                _this.distance +
                "( " +
                artist.attributes.coordinates._latitude +
                ", " +
                artist.attributes.coordinates._longitude +
                " )");
            return (difference < _this.distance &&
                ((artist.attributes.serviceType === "DJ" && _this.filter.Dj) ||
                    (artist.attributes.serviceType === "Artist" && _this.filter.Artist) ||
                    (artist.attributes.serviceType === "Band" && _this.filter.Band)));
        });
        console.log(tempArtist);
        var this_ = this;
        this.artists = tempArtist.sort(function (artist1, artist2) {
            switch (this_.filter.sort) {
                case "Distance":
                    var coord1 = artist1.attributes.coordinates;
                    var coord2 = artist2.attributes.coordinates;
                    var difference1 = Math.sqrt((point._latitude - coord1._latitude) *
                        (point._latitude - coord1._latitude) +
                        (point._longitude - coord1._longitude) *
                            (point._longitude - coord1._longitude));
                    var difference2 = Math.sqrt((point._latitude - coord2._latitude) *
                        (point._latitude - coord2._latitude) +
                        (point._longitude - coord2._longitude) *
                            (point._longitude - coord2._longitude));
                    if (difference1 > difference2) {
                        return -1;
                    }
                    else if (difference1 == difference2) {
                        return _this.nameCompare(artist1, artist2);
                    }
                    else {
                        return 1;
                    }
                case "highToLow":
                    var priceRange1 = artist1.attributes.priceRange;
                    var priceRange2 = artist2.attributes.priceRange;
                    if (priceRange1 === undefined || priceRange2 === undefined) {
                        _this.nameCompare(artist1, artist2);
                    }
                    else {
                        if (priceRange1.high > priceRange2.high) {
                            return -1;
                        }
                        else if (priceRange1.high < priceRange2.high) {
                            return 1;
                        }
                        else {
                            _this.nameCompare(artist1, artist2);
                        }
                    }
                    break;
                case "lowToHigh":
                    priceRange1 = artist1.attributes.priceRange;
                    priceRange2 = artist2.attributes.priceRange;
                    if (priceRange1 === undefined || priceRange2 === undefined) {
                        _this.nameCompare(artist1, artist2);
                    }
                    else {
                        if (priceRange1.high > priceRange2.high) {
                            return 1;
                        }
                        else if (priceRange1.high < priceRange2.high) {
                            return -1;
                        }
                        else {
                            _this.nameCompare(artist1, artist2);
                        }
                    }
                    break;
                case "Rating":
                    break;
                default:
                    break;
            }
        });
    };
    HomePage.prototype.nameCompare = function (artist1, artist2) {
        var stageName1, stageName2;
        if (artist1.attributes.stageName !== undefined) {
            stageName1 = artist1.attributes.stageName;
        }
        else {
            stageName1 = artist1.attributes.firstName + artist1.attributes.lastName;
        }
        if (artist2.attributes.stageName !== undefined) {
            stageName2 = artist2.attributes.stageName;
        }
        else {
            stageName2 = artist2.attributes.firstName + artist2.attributes.lastName;
        }
        stageName1 = stageName1.toLowerCase();
        stageName2 = stageName2.toLowerCase();
        if (stageName1 > stageName2) {
            return 1;
        }
        else if (stageName1 === stageName2) {
            return 0;
        }
        else {
            return -1;
        }
    };
    HomePage.prototype.openChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__inbox_inbox__["a" /* InboxPage */]);
    };
    HomePage.prototype.color = function () {
        console.log("Hola");
        this.changeColor = true;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-buttons end *ngIf="hasLoggedIn">\n      <button ion-button icon-only (click)="openChat()">\n        <ion-icon ios="ios-chatbubbles" md="ios-chatbubbles"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content overflow-scroll="true" style="background:#F2F2F2">\n  <div style="padding: 10px; background: #F2F2F2">\n    <ion-input [(ngModel)]="address" id="addressInput" class="white-input" placeholder="Find Artist By Entering Location..."\n      type="text"></ion-input>\n  </div>\n  <div class="row" style="padding: 15px;">\n    <div class="col">\n      <ion-label class="non-button" icon-left (click)="showFilters(true, \'Filters\')" style="height: 30px !important;">\n        <ion-icon name="funnel"></ion-icon>\n        Filter\n      </ion-label>\n    </div>\n\n    <div class="col" style="text-align: center;">\n      <ion-label class="non-button" icon-left (click)="showFilters(false, \'Sort By\')" style="height: 30px !important;">\n        <ion-icon name="swap"></ion-icon>\n        Sort\n      </ion-label>\n    </div>\n\n    <div class="col" style="text-align: right;">\n      <ion-label class="non-button" icon-left (click)="findArtistsNearby()" style="height: 30px !important;">\n        <ion-icon ios="ios-locate" md="md-locate"></ion-icon>\n      </ion-label>\n\n    </div>\n  </div>\n\n\n  <ion-list>\n    <ion-card style="background:#FFFFFF" class="measure f1 center  br3 pa3 pa4-ns mv3 ba b--black-10" *ngFor="let artist of artists"\n      (click)="itemTapped($event, artist)">\n      <img class="mw5 center  br-100" [src]="artist.attributes.avatar || profilePicTemp">\n      <div class="mt4 tc">{{artist.attributes.stageName}}</div>\n\n    </ion-card>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_6__providers_artist_artist__["a" /* ArtistProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__agm_core__["b" /* MapsAPILoader */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* NgZone */],
            __WEBPACK_IMPORTED_MODULE_10__providers_user_user__["a" /* UserProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chat_chat__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams, chatProvider, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatProvider = chatProvider;
        this.userProvider = userProvider;
        this.profilePicTemp = "assets/imgs/placeholder.png";
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider
            .getCurrentUser()
            .then(function (user) {
            _this.chatProvider.getChats(user.className).then(function (result) {
                _this.chats = result;
            });
        })
            .catch(function (error) { });
    };
    InboxPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__chat_chat__["a" /* ChatPage */], {
            item: item
        });
    };
    InboxPage.prototype.openArtist = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "page-inbox",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/pages/inbox/inbox.html"*/'<!--\n  Generated template for the InboxPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Inbox</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background: #F2F2F2">\n  <ion-list>\n    <ion-item style="background: #F2F2F2" *ngFor="let chat of chats" (click)="itemTapped($event, chat)">\n      <ion-avatar item-start>\n        <img src="{{chat.attributes.artistInfo.avatar || profilePicTemp}}" item-left>\n      </ion-avatar>\n      <h2>{{chat.attributes.artistInfo.firstName}} {{chat.attributes.artistInfo.lastName}}</h2>\n      <p>{{chat.attributes.lastMessage}}</p>\n      <span style="color:gray;font-size:13px">{{ chat.attributes.createdAt | date: \'MMM dd, HH:mm\'}}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/pages/inbox/inbox.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_chat_chat__["a" /* ChatProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_user__["a" /* UserProvider */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_register_register__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_appointments_appointments__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_performer_account_performer_account__ = __webpack_require__(260);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuToggle, events, userService) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuToggle = menuToggle;
        this.events = events;
        this.userService = userService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.currentUser = {};
        this.hasLoggedIn = false;
        this.profilePicTemp = "assets/imgs/placeholder.png";
        this.initializeApp();
        this.listenToLoginEvents();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "ios-home-outline" }
        ];
        this.loggedInPages = [
            { title: "Home", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: "ios-home-outline" },
            {
                title: "Appointments",
                component: __WEBPACK_IMPORTED_MODULE_10__pages_appointments_appointments__["a" /* AppointmentsPage */],
                icon: "ios-book-outline"
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_7_parse__["Parse"].initialize("myAppId", "myJavascriptKey");
        //    Parse.serverURL = 'https://districtgroove-api.herokuapp.com/parse';
        __WEBPACK_IMPORTED_MODULE_7_parse__["Parse"].serverURL = "https://districtgrooveapi.herokuapp.com/parse";
    };
    MyApp.prototype.listenToLoginEvents = function () {
        var _this = this;
        if (this.userService.hasLoggedIn()) {
            this.userService.checkLogin();
        }
        this.events.subscribe("login:success", function (user) {
            console.log(user);
            _this.currentUser = user;
            _this.hasLoggedIn = true;
        });
        this.events.subscribe("register:success", function (user) {
            _this.currentUser = user;
            _this.hasLoggedIn = true;
        });
        this.events.subscribe("logout", function () {
            _this.hasLoggedIn = false;
            _this.currentUser = null;
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
            localStorage["user"] = null;
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component, {
            account: this.currentUser
        });
    };
    MyApp.prototype.hideMenu = function () {
        if (!this.menuToggle.isHidden) {
            this.menuToggle.toggle();
        }
    };
    MyApp.prototype.showMenu = function () {
        if (this.menuToggle.isHidden) {
            this.menuToggle.toggle();
        }
    };
    MyApp.prototype.viewProfile = function () {
        if (this.hasLoggedIn) {
            this.hideMenu();
            if (this.currentUser.className === "Customer") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */], {
                    account: this.currentUser
                });
            }
            else if (this.currentUser.className === "Artist") {
                this.nav.push(__WEBPACK_IMPORTED_MODULE_11__pages_performer_account_performer_account__["a" /* PerformerAccountPage */], {
                    account: this.currentUser
                });
            }
        }
    };
    MyApp.prototype.login = function () {
        this.hideMenu();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.doLogout = function () {
        this.hideMenu();
        this.userService.logout();
    };
    MyApp.prototype.showRegisterForm = function () {
        this.hideMenu();
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <div style="background: #242424" *ngIf="hasLoggedIn; else loggedOut">\n        <div style="width: 100%; text-align: center;">\n          <div style="padding-top: 20px;">\n            <img src="{{currentUser.attributes.avatar || profilePicTemp}}" class="blush-avatar" (click)="viewProfile()">\n          </div>\n          <div style="padding-top: 10px; font-size: 16px; padding-bottom: 10px;">\n\n            <button class="white-button" (click)="viewProfile()" style="padding: 0px;">\n              <span> {{currentUser.attributes.firstName}} {{currentUser.attributes.lastName}} </span>\n            </button>\n\n            <button class="white-button" style="padding: 0px; padding-left: 15px; padding-right: 15px;">\n              <span> | </span>\n            </button>\n\n            <button class="white-button" (click)="doLogout()" style="padding: 0px;">\n              <span> Log Out </span>\n            </button>\n          </div>\n\n        </div>\n      </div>\n      <ng-template #loggedOut>\n        <div style="width: 100%; text-align: center; background: #242424;">\n          <div style="padding-top: 20px;">\n            <img src="{{profilePicTemp}}" class="blush-avatar" (click)="viewProfile()">\n          </div>\n\n          <div style="padding-top: 10px; font-size: 16px; padding-bottom: 10px;">\n            <button class="white-button" (click)="showRegisterForm()" style="padding: 0px;">\n              <span> Sign Up </span>\n            </button>\n\n            <button class="white-button" style="padding: 0px;padding-left: 15px; padding-right: 15px;">\n              <span> | </span>\n            </button>\n\n            <button class="white-button" (click)="login()" style="padding: 0px;">\n              <span> Log In </span>\n            </button>\n\n          </div>\n\n        </div>\n      </ng-template>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ng-container *ngIf="hasLoggedIn; else elseTemplate">\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of loggedInPages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ng-container>\n    <ng-template #elseTemplate>\n      <ion-list>\n        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n          <ion-icon item-start [name]="p.icon"></ion-icon>\n          {{p.title}}\n        </button>\n      </ion-list>\n    </ng-template>\n\n  </ion-content>\n\n</ion-menu>\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuToggle */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the SystemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SystemProvider = /** @class */ (function () {
    function SystemProvider(http) {
        this.http = http;
    }
    SystemProvider.prototype.getSystemSettings = function () {
        var SystemObject = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("System");
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(SystemObject);
        query.find({
            success: function (results) {
                console.log(results);
            },
            error: function (error) {
                console.log(error);
            }
        });
    };
    SystemProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SystemProvider);
    return SystemProvider;
}());

//# sourceMappingURL=system.js.map

/***/ }),

/***/ 902:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MessageBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MessageBoxComponent = /** @class */ (function () {
    function MessageBoxComponent() {
        this.profilePicTemp = "assets/imgs/placeholder.png";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageBoxComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], MessageBoxComponent.prototype, "isFromSender", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageBoxComponent.prototype, "photo", void 0);
    MessageBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "message-box",template:/*ion-inline-start:"/Users/rapsong11/Documents/DistrictGroove/src/components/message-box/message-box.html"*/'<div class="chatBubble" style="width: 100%">\n  <div style="text-align: center">\n    <span style="color:gray;font-size:13px">{{ message.createdAt | date: \'MMM dd, HH:mm\'}}</span>\n  </div>\n  <div>\n    <img class="chat-img {{isFromSender}}" style="padding: 2px;border-radius: 50%;width: 40px;" src="{{photo || profilePicTemp}}">\n    <div class="chat-bubble {{isFromSender}}">\n      <div class="message">\n        {{message.message}}\n      </div>\n    </div>\n  </div>\n</div>\n'/*ion-inline-end:"/Users/rapsong11/Documents/DistrictGroove/src/components/message-box/message-box.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MessageBoxComponent);
    return MessageBoxComponent;
}());

//# sourceMappingURL=message-box.js.map

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SoundCloudProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the SoundCloudProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SoundCloudProvider = /** @class */ (function () {
    function SoundCloudProvider(http) {
        this.http = http;
    }
    SoundCloudProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SoundCloudProvider);
    return SoundCloudProvider;
}());

//# sourceMappingURL=sound-cloud.js.map

/***/ })

},[491]);
//# sourceMappingURL=main.js.map