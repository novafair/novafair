import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap"
import { createI18n } from 'vue-i18n'


const app = createApp(App)

const messages = {
  en: {
    message: {
      hello: 'hello world',
      fair_calendar: 'Fair Calendar',
      about_us: 'About Us',
      contact: 'Contact',
      phone_no : 'Phone',
      days : 'Mon-Fri',
      contact_name : 'Name',
      contact_mail : 'Mail',
      contact_phone_no: 'Phone Number',
      contact_message: 'Your Message',
      contact_send: 'Send',
      fair_fairname: 'Fair',
      fair_subname: 'Sub Name',
      fair_sektor: 'Sektor',
      fair_date:'Date',
      fair_location:'Country/City',
      about_us_content: "will be updated"

    }
  },
  tr: {
    message: {
      hello: 'Merhaba',
      fair_calendar: 'Fuar Takvimi',
      about_us: 'Hakkımızda',
      contact: 'İletişim',
      phone_no: 'Telefon',
      days: 'Pazartesi-Cuma',
      contact_name: 'Adınız',
      contact_mail : 'Mail',
      contact_phone_no: 'Telefon Numaranız',
      contact_message: 'Mesajınız',
      contact_send: 'Gönder',
      fair_fairname: 'Fuar',
      fair_subname: 'Alt İsmi',
      fair_sektor: 'Sektör',
      fair_date:'Tarih',
      fair_location:'Ülke/Şehir',
      about_us_content:"İsminin ilhamını “ Ağaca çıkmak istiyorsan, yıldızları hedefle ” sözünden alan NOVA Uluslararası Fuarcılık A.Ş, fuarcılık sektörüne uzun yıllar hizmet etmiş uzmanlar tarafından kurulmuştur." +
                "" +
                "Bu sektördeki tecrübesini genç ve dinamik bir ekiple birleştiren NOVA, Türk ihracatında önemli bir rol oynamayı ve İhracat hedeflerine yürüyen Türk Firmalarının güvenilir bir yol arkadaşı olmayı kendine misyon edinmiştir." +
                "" +
                "NOVA, Yapı-İnşaat, Enerji, Tarım ve Tekstil  başta olmak üzere ihracatın ve ihtiyacın olduğu farklı sektörlerde fuar çalışmalarını sürdürmektedir."
    }
  }
}



const i18n = new createI18n({
    locale: 'tr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});


app.use(i18n)
app.use(router)

app.mount('#app')



