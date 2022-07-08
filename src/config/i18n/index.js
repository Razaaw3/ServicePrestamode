// import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import en from './en.json';
// import fr from './fr.json';
  
// // i18n.use(initReactI18next).init({
// //   lng: 'en',
// //   fallbackLng: 'en',
// //   resources: {
// //     en: en,
// //     fr: fr,
// //   },
// //   interpolation: {
// //     escapeValue: false // react already safes from xss
// //   }
// // });
// i18n.use(initReactI18next).init({
//   lng: 'en',
//   fallbackLng: 'en',
//   resources: {
//     en: en,
//     fr: fr,
//   },
//   interpolation: {
//     escapeValue: false // react already safes from xss
//   }
// });
// const getLang = async() =>{
//   try {
//     const val = await AsyncStorage.getItem('lan')
//     console.log(val)
//     return val
// } 
// catch (e) 
// {
//     console.log("Error is   :",e)
// }
// }
  
// export default i18n;
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import fr from './fr.json';

i18n.use(initReactI18next).init({
lng:getLang,
fallbackLng:getLang,
react:{
  useSuspense:false
},
resources: {
	en: en,
	fr: fr,
},
interpolation: {
	escapeValue: false // react already safes from xss
}
});
const getLang = async() =>{
  try {
    const val = await AsyncStorage.getItem('lan')
    console.log(val)
    return val
} 
catch (e) 
{
    console.log("Error is   :",e)
}
}

export default i18n;
