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
      fair_subname: 'Definition',
      fair_sektor: 'Sektor',
      fair_date:'Date',
      fair_location:'Country/City',
      about_us_content: "Inspired by the maxim “If you want to climb a tree, aim for the stars“, NOVA International Fairs Inc. was founded by experts who have served the fair industry for many years. " +
                        "" +
                        "Combining its experience in this sector with a young and dynamic team, NOVA has made it its mission to play an important role in Turkish exports and to be a reliable companion of Turkish companies that are marching towards their export targets. " +
                        "" +
                        "NOVA continues its fair activities in different sectors where exports and needs are especially important for Building -Construction, Energy, Agriculture and Textile.",
      fair_calendar_1_fairname: "Grains Africa",
      fair_calendar_1_subname: "International Trade Show On Grains & Technology",
      fair_calendar_1_sektor:"Agriculture",
      fair_calendar_1_date:"9-11 June 2023",
      fair_calendar_1_location:"Rwanda - Kigali",

      fair_calendar_2_fairname: "Grains Africa ",
      fair_calendar_2_subname: "International Trade Show On Grains & Technology",
      fair_calendar_2_sektor:"Agriculture",
      fair_calendar_2_date:"15-17 June 2023",
      fair_calendar_2_location:"Uganda - Kampala",

      fair_calendar_3_fairname: "Foodpack Africa ",
      fair_calendar_3_subname: "International Trade Show On Food & Processing, Beverages, Ingredients & Packaging",
      fair_calendar_3_sektor:"Food",
      fair_calendar_3_date:"9-11 June 2023",
      fair_calendar_3_location:"Rwanda - Kigali",

      fair_calendar_4_fairname: "Foodpack Africa ",
      fair_calendar_4_subname: "International Trade Show On Food & Processing, Beverages, Ingredients & Packaging",
      fair_calendar_4_sektor:"Food",
      fair_calendar_4_date:"15-17 June 2023",
      fair_calendar_4_location:"Uganda - Kampala",

      fair_calendar_5_fairname: "InterPlast-Pack",
      fair_calendar_5_subname: "International Trade Show On Plastic Printing Packaging & corrugated etc",
      fair_calendar_5_sektor:"Plastic - Packaging",
      fair_calendar_5_date:"9-11 June 2023",
      fair_calendar_5_location:"Rwanda - Kigali",

      fair_calendar_6_fairname: "InterPlast-Pack",
      fair_calendar_6_subname: "International Trade Show On Plastic Printing Packaging & corrugated etc",
      fair_calendar_6_sektor:"Plastic - Packaging",
      fair_calendar_6_date:"15-17 June 2023",
      fair_calendar_6_location:"Uganda - Kampala",

      fair_calendar_7_fairname: "Agro-Dairy & Poultry Africa ",
      fair_calendar_7_subname: "International Trade Show on Agriculture, Diary & Poultry etc",
      fair_calendar_7_sektor:"Agriculture",
      fair_calendar_7_date:"9-11 June 2023",
      fair_calendar_7_location:"Rwanda - Kigali",

      fair_calendar_8_fairname: "Agro-Dairy & Poultry Africa ",
      fair_calendar_8_subname: "International Trade Show on Agriculture, Diary & Poultry etc",
      fair_calendar_8_sektor:"Agriculture",
      fair_calendar_8_date:"15-17 June 2023",
      fair_calendar_8_location:"Uganda - Kampala",

      fair_calendar_9_fairname: "MVC Cereals ",
      fair_calendar_9_subname: "International Grain and Feed Fair",
      fair_calendar_9_sektor:"Agriculture",
      fair_calendar_9_date:"21-23 June 2023",
      fair_calendar_9_location:"Russia - Moscow",

      fair_calendar_10_fairname: "Thailand Lab International ",
      fair_calendar_10_subname: "International Laboratory Equipment Fair",
      fair_calendar_10_sektor:"Chemistry",
      fair_calendar_10_date:"6-8 September 2023",
      fair_calendar_10_location:"Thailand - Bangkok",

      fair_calendar_11_fairname: "ILDEX Philippines",
      fair_calendar_11_subname: "International Poultry and Feed Fair",
      fair_calendar_11_sektor:"Agriculture",
      fair_calendar_11_date:"7-9 June 2023",
      fair_calendar_11_location:"Philippines - Manila",

      fair_calendar_12_fairname: "GTEX GLOBAL ",
      fair_calendar_12_subname: "International Trade Show on Textile Machinery and Chemicals",
      fair_calendar_12_sektor:"Textile  ",
      fair_calendar_12_date:"3-5 August 2023 ",
      fair_calendar_12_location:"Pakistan - Karaçi",

      fair_calendar_13_fairname: "CSS Uzbekistan ",
      fair_calendar_13_subname: "International Trade Show on Ceramics, Stone & Sanitary Wares",
      fair_calendar_13_sektor:"Build - Construction",
      fair_calendar_13_date:"February 2024",
      fair_calendar_13_location:"Uzbekistan - Tashkent",

      fair_calendar_14_fairname: "CSS India",
      fair_calendar_14_subname: "International Trade Show on Ceramics, Stone & Sanitary Wares",
      fair_calendar_14_sektor:"Build - Construction",
      fair_calendar_14_date:"1-3 December 2023",
      fair_calendar_14_location:"India",

      fair_calendar_15_fairname: "Agritech West Africa",
      fair_calendar_15_subname: "International Trade Show on Agricultural Technologies",
      fair_calendar_15_sektor:"Agriculture",
      fair_calendar_15_date:"19-21 March 2024",
      fair_calendar_15_location:"Ghana",

      fair_calendar_16_fairname: "Agrofood East Africa",
      fair_calendar_16_subname: "International Trade Show on Agriculture and Food Processing",
      fair_calendar_16_sektor:"Agriculture",
      fair_calendar_16_date:"23-25 November 2023",
      fair_calendar_16_location:"Tanzania",

      fair_calendar_17_fairname: "Aquaculture Taiwan",
      fair_calendar_17_subname: "International Trade Show on Aquaculture and Fisheries",
      fair_calendar_17_sektor:"Agriculture",
      fair_calendar_17_date:"1-3 November 2023",
      fair_calendar_17_location:"Taiwan",

      fair_calendar_18_fairname: "Asia Agri Tech Taiwan",
      fair_calendar_18_subname: "International Trade Show on Agricultural Technologies",
      fair_calendar_18_sektor:"Agriculture",
      fair_calendar_18_date:"1-3 November 2023",
      fair_calendar_18_location:"Taiwan",

      fair_calendar_19_fairname: "Cold chain Taiwan",
      fair_calendar_19_subname: "International Trade Show on Cold Chain Technologies",
      fair_calendar_19_sektor:"Machinery - Food",
      fair_calendar_19_date:"1-3 November 2023",
      fair_calendar_19_location:"Taiwan",

      fair_calendar_20_fairname: "Livestock Taiwan",
      fair_calendar_20_subname: "International Trade Show on Animal Husbandry",
      fair_calendar_20_sektor:"Agriculture",
      fair_calendar_20_date:"1-3 November 2023",
      fair_calendar_20_location:"Taiwan",

      fair_calendar_21_fairname: "Nonwowen Tech Asia",
      fair_calendar_21_subname: "International Trade Show on Nonwowen Textiles & Technologies",
      fair_calendar_21_sektor:"Textile  ",
      fair_calendar_21_date:"28-30 September 2023",
      fair_calendar_21_location:"India ",

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
      fair_subname: 'Tanım',
      fair_sektor: 'Sektör',
      fair_date:'Tarih',
      fair_location:'Ülke/Şehir',
      about_us_content:"İsminin ilhamını “Ağaca çıkmak istiyorsan, yıldızları hedefle ” sözünden alan NOVA Uluslararası Fuarcılık A.Ş, fuarcılık sektörüne uzun yıllar hizmet etmiş uzmanlar tarafından kurulmuştur. " +
                "" +
                "Bu sektördeki tecrübesini genç ve dinamik bir ekiple birleştiren NOVA, Türk ihracatında önemli bir rol oynamayı ve İhracat hedeflerine yürüyen Türk Firmalarının güvenilir bir yol arkadaşı olmayı kendine misyon edinmiştir. " +
                "" +
                "NOVA, Yapı-İnşaat, Enerji, Tarım ve Tekstil  başta olmak üzere ihracatın ve ihtiyacın olduğu farklı sektörlerde fuar çalışmalarını sürdürmektedir.",

      fair_calendar_1_fairname: "Grains Africa",
      fair_calendar_1_subname: "Uluslararası Tahıl ve Tarım Teknolojileri Fuarı ",
      fair_calendar_1_sektor:"Tarım",
      fair_calendar_1_date:"9-11 Haziran 2023",
      fair_calendar_1_location:"Rwanda - Kigali",

      fair_calendar_2_fairname: "Grains Africa ",
      fair_calendar_2_subname: "Uluslararası Tahıl ve Tarım Teknolojileri Fuarı ",
      fair_calendar_2_sektor:"Tarım ",
      fair_calendar_2_date:"15-17 Haziran 2023",
      fair_calendar_2_location:"Uganda - Kampala",

      fair_calendar_3_fairname: "Foodpack Africa ",
      fair_calendar_3_subname: "Uluslararası Gıda ve Ambalaj Teknolojileri Fuarı ",
      fair_calendar_3_sektor:"Gıda",
      fair_calendar_3_date:"9-11 Haziran 2023",
      fair_calendar_3_location:"Rwanda - Kigali",

      fair_calendar_4_fairname: "Foodpack Africa ",
      fair_calendar_4_subname: "Uluslararası Gıda ve Ambalaj Teknolojileri Fuarı ",
      fair_calendar_4_sektor:"Gıda ",
      fair_calendar_4_date:"15-17 Haziran 2023",
      fair_calendar_4_location:"Uganda - Kampala",

      fair_calendar_5_fairname: "InterPlast-Pack",
      fair_calendar_5_subname: "Uluslararası Plastik Fuarı",
      fair_calendar_5_sektor:"Plastik - Ambalaj",
      fair_calendar_5_date:"9-11 Haziran 2023",
      fair_calendar_5_location:"Rwanda - Kigali",

      fair_calendar_6_fairname: "InterPlast-Pack",
      fair_calendar_6_subname: "Uluslararası Plastik Fuarı ",
      fair_calendar_6_sektor:"Plastik - Ambalaj",
      fair_calendar_6_date:"15-17 Haziran 2023",
      fair_calendar_6_location:"Uganda - Kampala",

      fair_calendar_7_fairname: "Agro-Dairy & Poultry Africa ",
      fair_calendar_7_subname: "Uluslararası Tarım ve Hayvancılık Teknolojileri Fuarı ",
      fair_calendar_7_sektor:"Tarım",
      fair_calendar_7_date:"9-11 Haziran 2023",
      fair_calendar_7_location:"Rwanda - Kigali",

      fair_calendar_8_fairname: "Agro-Dairy & Poultry Africa ",
      fair_calendar_8_subname: "Uluslararası Tarım ve Hayvancılık Teknolojileri Fuarı ",
      fair_calendar_8_sektor:"Tarım ",
      fair_calendar_8_date:"15-17 Haziran 2023",
      fair_calendar_8_location:"Uganda - Kampala",

      fair_calendar_9_fairname: "MVC Cereals ",
      fair_calendar_9_subname: "Uluslararası Tahıl ve Yem Fuarı ",
      fair_calendar_9_sektor:"Tarım ",
      fair_calendar_9_date:"21-23 Haziran 2023",
      fair_calendar_9_location:"Rusya - Moscow ",

      fair_calendar_10_fairname: "Thailand Lab International ",
      fair_calendar_10_subname: "Uluslararası Labaratuar Ekipmanları Fuarı ",
      fair_calendar_10_sektor:"Kimya ",
      fair_calendar_10_date:"6-8 Eylül 2023",
      fair_calendar_10_location:"Tayland - Bangkok",

      fair_calendar_11_fairname: "ILDEX Philippines",
      fair_calendar_11_subname: "Uluslararası Tavukçuluk ve Yem Fuarı ",
      fair_calendar_11_sektor:"Tarım",
      fair_calendar_11_date:"7-9 Haziran 2023",
      fair_calendar_11_location:"Filipinler - Manila ",

      fair_calendar_12_fairname: "GTEX GLOBAL ",
      fair_calendar_12_subname: "Uluslararası Tekstil Makinaları ve Kimyasalları Fuarı",
      fair_calendar_12_sektor:"Tekstil ",
      fair_calendar_12_date:"3-5 Ağustos 2023",
      fair_calendar_12_location:"Pakistan - Karaçi",

      fair_calendar_13_fairname: "CSS Uzbekistan ",
      fair_calendar_13_subname: "Uluslararası Seramik, Mermer ve Banyo Ekipmanları Fuarı",
      fair_calendar_13_sektor:"Yapı - İnşaat ",
      fair_calendar_13_date:"Şubat 2024",
      fair_calendar_13_location:"Özbekistan - Taşkent",

      fair_calendar_14_fairname: "CSS India",
      fair_calendar_14_subname: "Uluslararası Seramik, Mermer ve Banyo Ekipmanları Fuarı",
      fair_calendar_14_sektor:"Yapı - İnşaat",
      fair_calendar_14_date:"1-3 Aralık 2023",
      fair_calendar_14_location:"Hindistan",

      fair_calendar_15_fairname: "Agritech West Africa",
      fair_calendar_15_subname: "Uluslararası Tarım Ürünleri ve Teknolojileri Fuarı",
      fair_calendar_15_sektor:"Tarım",
      fair_calendar_15_date:"19-21 Mart 2024",
      fair_calendar_15_location:"Gana",

      fair_calendar_16_fairname: "Agrofood East Africa",
      fair_calendar_16_subname: "Uluslararası Tarım ve Gıda İşleme  Fuarı",
      fair_calendar_16_sektor:"Tarım",
      fair_calendar_16_date:"23-25 Kasım 2023",
      fair_calendar_16_location:"Tanzanya",

      fair_calendar_17_fairname: "Aquaculture Taiwan",
      fair_calendar_17_subname: "Uluslararası Su Ürünleri ve Teknolojileri Fuarı",
      fair_calendar_17_sektor:"Tarım",
      fair_calendar_17_date:"1-3 Kasım 2023",
      fair_calendar_17_location:"Tayvan",

      fair_calendar_18_fairname: "Asia Agri Tech Taiwan",
      fair_calendar_18_subname: "Uluslararası Tarım Ürünleri ve Teknolojileri Fuarı",
      fair_calendar_18_sektor:"Tarım",
      fair_calendar_18_date:"1-3 Kasım 2023",
      fair_calendar_18_location:"Tayvan",

      fair_calendar_19_fairname: "Cold chain Taiwan",
      fair_calendar_19_subname: "Uluslararası Soğuk Zincir ve Tarım - Gıda Teknolojileri Fuarı",
      fair_calendar_19_sektor:"Makine - Gıda ",
      fair_calendar_19_date:"1-3 Kasım 2023",
      fair_calendar_19_location:"Tayvan",

      fair_calendar_20_fairname: "Livestock Taiwan",
      fair_calendar_20_subname: "Uluslararası Tarım ve Hayvancılık Fuarı ",
      fair_calendar_20_sektor:"Tarım",
      fair_calendar_20_date:"1-3 Kasım 2023",
      fair_calendar_20_location:"Tayvan",

      fair_calendar_21_fairname: "Nonwowen Tech Asia",
      fair_calendar_21_subname: "Uluslararası Dokumasız Kumaş ve Teknolojileri Fuarı ",
      fair_calendar_21_sektor:"Tekstil   ",
      fair_calendar_21_date:"28-30 Eylül 2023 ",
      fair_calendar_21_location:"Hindistan",


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



