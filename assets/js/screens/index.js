import splash from "./splash.js";
import welcome from "./welcome.js";
import login from "./login.js";
import register from "./register.js";
import home from "./home.js";
import topup from "./topup.js";
import transfer from "./transfer.js";
import confirm from "./confirm.js";
import success from "./success.js";
import { transactionStates } from "./transaction-states.js";
import cards from "./cards.js";
import payments from "./payments.js";
import transactions from "./transactions.js";
import profile from "./profile.js";
import { appStates } from "./app-states.js";

// Sıra, hem sol menüyü hem de ileri/geri gezinmeyi belirler.
export const screens = [splash, welcome, login, register, home, topup, transfer, confirm, success, ...transactionStates, cards, payments, transactions, profile, ...appStates];
