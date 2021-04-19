# YTCar

### Documentações

 - [Android Auto]('https://github.com/yoyo770/cordova-carplay-android-auto').
 - [Icones doc]('https://medium.com/@iamserverr/font-awesome-with-ionic-5-angular-3fcc335cd391').
 - [Icones doc]('https://medium.com/@iamserverr/font-awesome-with-ionic-5-angular-3fcc335cd391').



### Rodando a aplicação

```
-------------  Build ------------------- 
ionic capacitor build
ionic capacitor build android
ionic capacitor build android --prod --release
ionic capacitor build ios

-------------  Run Android -------------
ionic capacitor sync android
ionic capacitor run
ionic capacitor run android
ionic capacitor run android -l --external
ionic capacitor run ios --livereload --external
ionic capacitor run ios --livereload-url=http://localhost:8100

-------------  Run IOS -----------------
ionic capacitor build
ionic capacitor build android
ionic capacitor build android --prod --release
ionic capacitor build ios
```


### Icones exemplo
icones [Icones](https://fontawesome.com/icons/gas-pump?style=solid)
```
<fa-icon icon="spinner"></fa-icon>
<!-- Solid Icons -->
<fa-icon [icon]="['fas', 'square']"></fa-icon>
<!-- Regular Icons -->
<fa-icon [icon]="['far', 'square']"></fa-icon>
<!-- Brand Icons -->
<fa-icon [icon]="['fab', 'stack-overflow']"></fa-icon>
```
