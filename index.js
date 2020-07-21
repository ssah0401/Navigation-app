import { Navigation } from 'react-native-navigation';
import {PendoSDK, NavigationLibraryType}  from 'rn-applause';

// Note:
// in order to test Redux and MobX separately,
// please comment unnecessary import, this is important
// because RNN registers screens for both of them if two imports are presented

// import { startApp as startReduxApp } from './srcRedux/App';
import { startApp as startMobXApp } from './srcMobX/App';

Navigation.events().registerAppLaunchedListener(() => {
    // startReduxApp();
    startMobXApp();
    const initParams = {visitorId: 'blustart111',accountId:'blust333art111'};
    const navigationOptions = {library: NavigationLibraryType.ReactNativeNavigation, navigation: Navigation};
    const pendoKey = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IiIsInR5cCI6IkpXVCJ9.' +
        'eyJkYXRhY2VudGVyIjoidXMiLCJrZXkiOiIzNmEzYzk2YmY3MWY1YzRiZjY4ZTAwMzI4ZGZiMTAzOTgw' +
        'NzM2NjEzMzkyMDg1NzRkOGVkZDJlZWE1Mjg1Njg1MWZlMTBmOWE1OTFkMTlmMTRiYjhkMzdmNzhlOWQw' +
        'Zjg4NzZmYWJhYzFiNGRjYzQwNmQxODEwYTk1Y2JiYTEyYjM2YjVlODE1ZWU5OGI3YzYwY2YzNTZmN2Z' +
        'kMjA3ZmVjMzFhN2FiNGU3NDQzODk0MmU5Mzk0N2EwMTNkYzlkZTdkMTI2ZDk4MjQ0NzlmZGIzMTY0OT' +
        'U3MzY3NjQxOGQwZS41MWViMmFhOGY5NGU0ODljNjEzZjYwMTY0YmEwZTZiOS45Zjk3MDY2NzE5ZjZjN' +
        'TAxNGFhNzA2YzhhNGFjNmFkNGZmNzM3MDA2MmZlNTg2NTlkZWI0YzJmMjc3NTA4MGExIn0.kw4txpsoN' +
        '2LP23RMdHU-DNzVHQJVXn17Axo7Po8BYeTGsfKMVE_HQ4py6lbqom8NBxUWbG9Kf3aoUVCs-gB3v-Exl' +
        'POtqur_31qnK5TXSv-ONNEFEBFqA1qR1hdgjZAZMHw3J3ou8HJ8-VlkzoW45p1g1hU0_XNSpHjQ-Dk2Vmk';
    PendoSDK.initSdk(pendoKey, initParams, navigationOptions);
});