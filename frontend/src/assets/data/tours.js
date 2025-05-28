import tourImg01 from "../images/gakunggung.png";
import tourImg02 from "../images/kedok.png";
import tourImg03 from "../images/bongkok.png";
import tourImg04 from "../images/pin.png";
import tourImg05 from "../images/cakrabuana.png";
import tourImg06 from "../images/parpon.png";
import tourImg07 from "../images/cipatujah.png";
import tourImg08 from "../images/karangtawulan.png";
import tourImg09 from "../images/bubujung.png";
import tourImg010 from "../images/sindangkerta.png";
import tourImg011 from "../images/dengdeng.png";
import tourImg012 from "../images/sawer.png";
import tourImg013 from "../images/badak.png";
import tourImg014 from "../images/panetean.png";
import tourImg015 from "../images/kacapi.png";
import tourImg016 from "../images/cisanta.png";
import tourImg017 from "../images/garuda.png";
import tourImg018 from "../images/pasirpeer.png";



const tours = [
  {
    id: "01",
    title: "Gunung Galunggung",
    city: "Tasikmalya",
    distance: 70,
    price: 20.000,
    desc: "Gunung Galunggung merupakan gunung api dengan ketinggian 2.168 meter diatas permukaan laut, dengan puncak tertingginya yakni Puncak beuti Canar yang memiliki keitnggian 2240 mdpl. Gunung ini terletak sekitar 17 km dari ppusat kota Tasikmalaya, Jawa Barat",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Gunung Kedok",
    city: "Tasikmalaya",
    distance: 70,
    price: 10,
    desc: "Gunung Kedok adalah sebuah gunung yang terletak di perbatasan antara Kabupaten Tasikmalaya dan Kabupaten Ciamis, Jawa Barat. Gunung ini memiliki ketinggian 1.141 mter dari atas permukaan laut (Mdpl) dan merupakan puncak tertinggi di perbukitan",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Gunung Bangkok",
    city: "Karangnunggal",
    distance: 70,
    price: 12.000,
    desc: "Gunung Bongkok adalah sebuah gunung yang terletak di perbatasan antara Kabupaten Tasikmalaya dan Kabupaten Ciamis, Jawa Barat. Gunung ini memiliki ketinggian 1.141 mter dari atas permukaan laut (Mdpl) dan merupakan puncak tertinggi di perbukitan Bengkok-Aseupan",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Gunung Pin",
    city: "Tasikmalaya",
    distance: 70,
    price: 20,
    desc: "Gunung Pin terletak di Dusun RT 19 RW 05, Desa Cikondang Kecamatan Cineam, Kabupaten Tasikmalaya, ssat ini sudah mulai ramai dikunjungi, banyak warga naik kebukit tersebut yang hanya ingin melihat pemandangan awan dan menikmati udaranya yang sejuk juga segar sekaligus menambah imunitas tubuh.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Gunung Cakrabuana ",
    city: "Tasikmalaya",
    distance: 70,
    price: 25,
    desc: "Gunung Cakrabuana adalah satu gunung ikonik yeng terletak diantara tiga kabupaten, yaitu kabupaten garut, majalengka, dan tasikmalaya di jawa barat. keindahan alamnya yang masih asri serta jalur pendakian yang menantang membuatnya menjadi tujuan favorit bagi para petualang.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Gunung Marindo",
    city: "Tasikmalaya",
    distance: 70,
    price: 10,
    desc: "Gunung Marindo terletak di Gunung, Kecamtan Parungponteng, Kabupaten Tasikmalaya Jawa Barat, Destinasi ini sudah biasa dijadikan sebagai tempat camping di Tasikmalya",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Pantai Cipatujah",
    city: "Tasikmalaya",
    distance: 70,
    price: 20,
    desc: "Pantai Cipatujah merupakan salah satu pantai paling populer di Tasikmalaya. Pantai ini terletak di Kecamatan Cipatujah, Kabupaten Tasikmalaya, Jawa Barat. Pantai Cipatujah memiliki keindahan unik berupa pasir putih yang lembut dan air laut yang cukup jernih.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Pantai Karangtawulan",
    city: "Tasikmalaya",
    distance: 70,
    price: 10,
    desc: "Pantai Karang Tawulan merupakan destinasi wisata yang bisa kamu kunjungi, mulai dari pagi sampai sore hari. Jadi Kamu bisa melihat panorama keindahan matahari terbit dan matahari terbenam.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg08,
    featured: false,
  },
  {
    id: "09",
    title: "Pantai Bubujung",
    city: "Tasikmalaya",
    distance: 70,
    price: 10,
    desc: "Pantai Bubujung merupakan pantai yang terletak di Kecamatan Sindangkerta, Kabupaten Tasikmalaya, Jawa Barat. Meskipun tidak sepopuler pantai lain, Pantai Bubujung memiliki daya tarik berupa keindahan pasir putih dan air laut  yang jernih. Pantai ini memiliki pemandangan yang indah, terutama saat sore hari sehingga cocok untuk berfoto.",
   reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg09,
    featured: false,
  },
  {
    id: "010",
    title: "Pantai SindangKerta",
    city: "Tasikmalaya",
    distance: 70,
    price: 20,
    desc: "Pantai Sindangkerta merupakan salah satu destinasi wisata bahari yang terletak di Kabupaten Tasikmalaya, Provinsi Jawa Barat. Pantai ini dikenal dengan hamparan pasir putihnya yang luas dan landai, serta panorama laut biru yang memukau. Keunikan utama Pantai Sindangkerta terletak pada keberadaan taman laut alami yang disebut “Taman Laut Sindangkerta”, di mana pengunjung dapat melihat aneka biota laut seperti ikan hias dan terumbu karang saat air surut. ",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg010,
    featured: false,
  },
  {
    id: "011",
    title: "Curug Dengdeng",
    city: "Tasikmalaya",
    distance: 70,
    price: 15,
    desc: "Curug Dengdeng merupakan air terjun berundak yang berbentuk seperti sawah dengan sistemperairan terasering. Curug yang terletak di Desa Tawang ini memiliki 3 tingkatan yang berbeda. Curug Dengdeng memiliki ketinggian hampir 33 meter secara menyeluruh.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg011,
    featured: false,
  },
  {
    id: "012",
    title: "Curug Sawer",
    city: "Tasikmalaya",
    distance: 70,
    price: 10,
    desc: "Namanya, Curug Sawer yang berada di Kampung Cibeureum, Desa Mandalamekar, Kecamatan Jatiwaras, Kabupaten Tasikmalaya, Provinsi Jawa Barat. Objek wisata air terjun yang menyuguhkan pemandangan alam  menakjubkan. Karena keindahannya mirip dengan pesona air terjun New Delhi di India, banyak wisatawan memberi julukan “Delhi van Java”.",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg012,
    featured: false,
  },
  {
    id: "013",
    title: "Curug Badak",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg013,
    featured: false,
  },
  {
    id: "014",
    title: "Curug Panetean",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg014,
    featured: false,
  },
  {
    id: "015",
    title: "Bukit Kacapi",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
   reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg015,
    featured: false,
  },
  {
    id: "016",
    title: "Bukit Cisanta",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg016,
    featured: false,
  },
  {
    id: "017",
    title: "Bukit Garuda Ngupuk",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg017,
    featured: false,
  },
  {
    id: "018",
    title: "Bukit Pasir Peer",
    city: "Tasikmalaya",
    distance: 500,
    address: 'Somewhere',
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
    ],
    avgRating: 4.5,
    photo: tourImg018,
    featured: false,
  },
  
  
  
  
  
  
  
  
  
];

export default tours;
