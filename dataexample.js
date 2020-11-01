const dataExample = {
  meta: {
    count: "2293",
    next: "http://open-api.myhelsinki.fi/v1/places/?limit=200&start=200",
  },
  data: [
    {
      id: "653",
      name: {
        fi: "A. Tillander",
        en: "A. Tillander",
        sv: "A. Tillander",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alexandertillander.fi",
      modified_at: "2019-08-21T14:51:58.000Z",
      location: {
        lat: 60.168922424316406,
        lon: 24.94364356994629,
        address: {
          street_address: "Aleksanterinkatu 17",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Jalokiviseppä ja ateljee, myös koruaiheisia näyttelyitä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/14657520_1627162420917017_2082522418259513419_n.jpg?h=1555b8b2&itok=cv8nhamq",
            copyright_holder: "A. Tillander",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:72", name: "Jewellery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3027",
      name: {
        fi: "A.H. Records",
        en: "A.H. Records",
        sv: "A.H. Records",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://ahrecords.fi",
      modified_at: "2019-06-26T09:56:22.000Z",
      location: {
        lat: 60.161014556884766,
        lon: 24.94142723083496,
        address: {
          street_address: "Fredrikinkatu 12",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Pieni käytettyihin vinyyleihin erikoistunut kivijalkakauppa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/12645064_458627557665379_3453464369390787997_n.jpg?h=dec22bcf&itok=_uZQok6l",
            copyright_holder: "A.H. Records",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:104", name: "RecordStore" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2257",
      name: {
        fi: "Aallonkoti Apartment Hotel",
        en: "Aallonkoti Apartment Hotel",
        sv: "Aallonkoti Apartment Hotel",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aallonkoti.fi",
      modified_at: "2020-03-26T10:51:39.000Z",
      location: {
        lat: 60.176273345947266,
        lon: 24.9382381439209,
        address: {
          street_address: "Alvar Aallon katu 3 B",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kauniisti viimeistelty huoneistohotelli Aallonkoti tarjoaa ensiluokkaisia ja kodinomaisia majoitusratkaisuja ainutlaatuisella paikalla Helsingin keskustassa, upeissa näkymissä. Kaikki 18 asuntoa Aallonkodin uudessa rakennuksessa tarjoavat vierailijalle täydellisen tukikohdan niin työtehtävien suorittamiseen kuin vapaa-ajan viettoonkin.\r\n\r\nHuoneistojen koot vaihtelevat kompakteista yksiöistä kahden makuuhuoneen kattohuoneistoihin. Huoneistot ovat korkeatasoisesti kalustettuja ja kodin tarpeiden mukaan varusteltuja. Jokaisessa huoneistoissa on oma keittiö, puistomaisemat suurelta kalustetulta terasseilta, langaton internetyhteys ja laadukkaat kodinkoneet.",
        images: [],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:12", name: "Apartment" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3424",
      name: {
        fi: "Aalto-yliopisto, Kauppakorkeakoulu",
        en: "Aalto University School of Business",
        sv: "Aalto-universitetet, Handelshögskolan",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.aalto.fi/fi/kauppakorkeakoulu",
      modified_at: "2019-03-05T13:59:21.000Z",
      location: {
        lat: 60.185977935791016,
        lon: 24.822364807128906,
        address: {
          street_address: "Ekonominaukio 1",
          postal_code: "02150",
          locality: "Espoo",
        },
      },
      description: {
        intro: null,
        body:
          "Aalto-yliopiston Kauppakorkeakoulu kouluttaa yhteiskunnallisia vaikuttajia ja tekee kansainvälisesti korkeatasoista tutkimusta yli sadan vuoden kokemuksella. Aalto-yliopiston kauppakorkeakoulu on Suomen johtava kauppakorkeakoulu ja yksi Euroopan kärkikauppakorkeakouluista.",
        images: [],
      },
      tags: [
        { id: "matko1:226", name: "WORK & STUDY" },
        { id: "matko2:282", name: "Academy" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3281",
      name: {
        fi: "Aalto-yliopisto, Taiteiden ja suunnittelun korkeakoulu",
        en: "Aalto University, School of Arts, Design and Architecture",
        sv: "Aalto-universitetet, Högskolan för konst, design och arkitektur",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.aalto.fi/fi/taiteiden-ja-suunnittelun-korkeakoulu",
      modified_at: "2019-03-05T14:07:54.000Z",
      location: {
        lat: 60.18522262573242,
        lon: 24.825517654418945,
        address: {
          street_address: "Otaniementie 14",
          postal_code: "02150",
          locality: "Espoo",
        },
      },
      description: {
        intro: null,
        body:
          "Taiteiden ja suunnittelun korkeakoulu on Pohjoismaiden johtava korkeakoulu muotoilun, muodin, pelien, median, arkkitehtuurin, elokuvan, taidekasvatuksen ja taiteen alalla. \r\n\r\nTaiteiden ja suunnittelun korkeakoulu on osa Aalto-yliopistoa, joka on teknisten tieteiden, kauppatieteiden ja taiteiden alan monialainen tiede- ja taideyhteisö.",
        images: [],
      },
      tags: [
        { id: "matko1:226", name: "WORK & STUDY" },
        { id: "matko2:282", name: "Academy" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1227",
      name: {
        fi: "Aarikka",
        en: "Aarikka-shop",
        sv: "Aarikka-shop",
        zh: "阿里卡商店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.aarikka.fi/",
      modified_at: "2019-08-21T15:00:03.000Z",
      location: {
        lat: 60.167911529541016,
        lon: 24.94797706604004,
        address: {
          street_address: "Pohjoisesplanadi 27",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aarikka Oy on vuonna 1954 perustettu suomalainen perheyritys, jonka muotoilu tunnetaan skandinaavisen selkeistä linjoista, pyöreästä muodosta ja puusta. Aarikka valmistaa koruja ja sisustustuotteita pääsääntöisesti puusta sekä muista luonnonmateriaaleista. Jokainen niistä on oma ainutlaatuinen yksilönsä, joka on valmistettu käsityönä Suomessa. \r\n\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Candle_holders_.jpg?h=bb495836&itok=di4VAgFy",
            copyright_holder: "Aarikka",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Helmi_tableware_L.jpg?h=0446e769&itok=RY2HkM3d",
            copyright_holder: "Aarikka",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Pakkasen_poytakoristeet_table_decorations.jpg?h=fd049a31&itok=0vlA6xYU",
            copyright_holder: "Aarikka",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:71", name: "Souvenirs" },
        { id: "matko2:72", name: "Jewellery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4029",
      name: {
        fi: "Aarrepuisto",
        en: "Aarrepuisto - Treasure Park",
        sv: "Klenodparken",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://vihreatsylit.fi/aarrepuisto/",
      modified_at: "2020-06-04T07:22:14.000Z",
      location: {
        lat: 60.23859786987305,
        lon: 25.10468292236328,
        address: {
          street_address: "Aarteenetsijäntie",
          postal_code: "00940",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aarrepuisto sijaitsee Vesalassa. Vuonna 1993 kunnostettu puisto sijaitsee Aarteenetsijäntien ja Aarteenetsijänkujan välissä ja pitkiltä reunoiltaan se rajoittuu 1980-luvun kerrostaloihin.\r\n\r\nLaaksomaisen puiston pohjukassa mutkitteleva Mellunkylänpuro on puiston erityispiirre. Purossa on myös viehättävä pieni koski, joka solinallaan levittää puistoon miellyttävää veden ääntä. \r\n\r\nPuistoon on istutettu 113 eri kasvilajia,ja yhteensä tuhannet kasvit, kukkasipulit mukaan lukien, ilahduttavat puistossa kulkijoita keväästä syksyyn väriloistollaan.",
        images: [],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:20", name: "Park" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3048",
      name: {
        fi: "Addis Ethiopian Kitchen",
        en: "Addis Ethiopian Kitchen",
        sv: "Addis Ethiopian Kitchen",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.addiskitchen.fi/",
      modified_at: "2020-08-20T10:18:05.000Z",
      location: {
        lat: 60.1943244934082,
        lon: 24.95623016357422,
        address: {
          street_address: "Sturenkatu 28",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ravintola Addis tarjoilee etiopialaisia makuja Vallilassa. Tarjolla niin liha- kuin vegaaniannoksia.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/18582201_1304054686382343_5281764182844447292_n.jpg?h=af5d0fd7&itok=8uXrL4iG",
            copyright_holder: "Addis Ethiopian Kitchen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:117", name: "Vegetarian" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:234", name: "Vegan" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "20:30:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4030",
      name: { fi: "Adlerfelt", en: "Adlerfelt", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://adlerfelt.fi/",
      modified_at: "2020-10-12T10:10:04.000Z",
      location: {
        lat: 60.144596099853516,
        lon: 24.98642921447754,
        address: {
          street_address: "Suomenlinna B 1",
          postal_code: "00190",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ihanan iloinen ja hyväntuulinen Adlerfelt sijaitsee upeassa 250 vuotta vanhassa rakennuksessa maailman kauneimmassa maailmanperintökohteessa, Suomenlinnassa.\r\n\r\nAdlerfeltissa voi nautiskella lasillisen tai herkutella pitkään. Tärkeintä on se fiilis, jolloin kaikki tuntuu olevan hyvin ja vaan hymyilyttää. Juuri sellaisten fiilisten kautta jää mieleen niitä hetkiä, joihin haluaa palata aina uudestaan ja uudestaan. Adlerfelt on happy place, jonne kaikki ovat sydämellisesti tervetulleita ikään, sukupuoleen tai alkuperään katsomatta.\r\n\r\nAdlerfeltin ruokaideologiaa ohjaava periaate on raaka-aineiden vastuulliset valinnat. Koko maailman kulinaarinen skene on pelikenttänä ja herkkuja valmistetaan kauteen, tunnelmaan ja hetkeen sopivina ruoan alkuperä kuitenkin aina tuntien. Hauskinta on se, että joka visiitillä voi olla jotain erilaista ja uutta maukasta syötävää ja näin ollen päivän annokset selviävätkin vasta paikan päällä Adlerfeltissa. Kun toimintaa ei sidota tiettyyn ruokalistaan, minimoidaan ruokahävikki.\r\n\r\nVirkistävien erilaisen juomien ansiosta ruokailusta saadaan vieläkin kauniimpi ja hauskempi hetki. Se fiilis, kun ruoka ja juoma täydentävät upeasti toinen toisiaan, on jättänyt monille tietystä paikasta ja ajasta ihanan muistijäljen. Juuri niitä iloisia happy place-hetkiä!\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-06/adlerfelt_traverssi_adlerfelt_c_adlerfelt_tanja_aromaki_location_only.jpg?h=e2e45255&itok=YSrj11kO",
            copyright_holder: "Adlerfelt / Tanja Aromäki",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:191", name: "IslandRestaurant" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:30:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:30:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:30:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:30:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:30:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1098",
      name: { fi: "AEL Hotelli", en: "AEL Hotel", sv: "AEL Hotelli", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.taitotalo.fi/ael-hotelli",
      modified_at: "2020-03-26T12:01:50.000Z",
      location: {
        lat: 60.249324798583984,
        lon: 24.854223251342773,
        address: {
          street_address: "Jälsitie 5",
          postal_code: "00410",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "AEL-Hotellissa majoittuu rauhallisessa ympäristössä. AEL-Hotelli sijaitsee Taitotalon koulutustilojen välittömässä läheisyydessä Malminkartanossa, noin 10 kilometrin päässä Helsingin keskustasta.\r\n\r\nAEL Hotellissa on yhteensä 135 vuodepaikkaa. Yhden ja kahden hengen huoneiden varustukseen kuuluu suihku, hiustenkuivaaja, tv ja minijääkaappi. Soluhuoneisto on edullisempi majoitusvaihtoehto ryhmälle.\r\n\r\nAEL Hotellin huoneet ovat allergiaystävällisiä.",
        images: [],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:241", name: "Hotel" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1096",
      name: {
        fi: "Agroksenmäen holvikellari",
        en: "Agros Vault",
        sv: "Agrosbackens Källarvalv",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://intercom.fi/juhlatila/",
      modified_at: "2020-04-20T06:35:01.000Z",
      location: {
        lat: 60.19257354736328,
        lon: 24.97538948059082,
        address: {
          street_address: "Vanha talvitie 14",
          postal_code: "00580",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Agroksenmäen holvikellari on 150 vuotta vanha rakennus, joka on aikoinaan toiminut oluttehtaan varastona ja tynnyrintekijän verstaana. Tämä lajissaan ainutlaatuinen, viisi metriä korkea luonnongraniitista holvattu halli on puoliksi maan alla. Holvikellari luo tunnelmalliset puitteet erilaisille yritys-, teema- ja perhejuhlille. Tila soveltuu hyvin myös näyttely- ja minimessukäyttöön. \r\n\r\nHolvikellarilla on tammikuussa 2010 otettu käyttöön noin 80m2 lisätilaa, joka mahdollistaa monenlaisten koulutus-, kokous- ja seminaaritilaisuuksien järjestämisen.",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:111", name: "FreeCatering" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "883",
      name: { fi: "Ahola", en: "Ahola", sv: "Ahola", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.jarvenpaa.fi/ahola",
      modified_at: "2020-01-16T10:10:22.000Z",
      location: {
        lat: 60.45602798461914,
        lon: 25.08115005493164,
        address: {
          street_address: "Sibeliuksenväylä 57",
          postal_code: "04400",
          locality: "Järvenpää",
        },
      },
      description: {
        intro: null,
        body:
          "Ahola, joka sijaitee Järvenpäässä, on taiteilijapariskunta Juhani Ahon ja Venny Soldan-Brofeldtin entinen kotitalo Tuusulanjärven rannalla.\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:40", name: "Museum" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Avoinna touko & syyskuussa ti-su 11-18, kesä-elokuussa ti-su 10-18, muina aikoina tilauksesta",
      },
    },
    {
      id: "3954",
      name: {
        fi: "Aikatalo Hostel",
        en: "Aikatalo Hostel",
        sv: "Aikatalo Hostel",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aikatalohostel.fi",
      modified_at: "2020-01-23T08:59:47.000Z",
      location: {
        lat: 60.16950225830078,
        lon: 24.94510269165039,
        address: {
          street_address: "Mikonkatu 8 A, 7. krs",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aikatalo Hostel sijaitsee aivan Helsingin keskustassa, rautatieaseman välittömässä läheisyydessä. Hostellista voi varata yksityisen huoneen. Kylpyhuone- ja wc-tilat ovat yhteiskäytössä. Hostellissa on myös yhteinen oleskelutila, jossa on televisio, tietokonepöytiä ja ruokailuryhmä. Hostellissa on ilmastointi/viilennys ja maksuton WiFi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-01/aikatalo_hostel_c_aikatalo_hostel_marja_haarala_location_only.jpg?h=2bf5283a&itok=As8RkQyu",
            copyright_holder: "Aikatalo Hostel / Marja Haarala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:11", name: "Hostel" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1247",
      name: { fi: "Aino Shop", en: "Aino Shop", sv: "Aino Shop", zh: "爱诺店" },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aino.net",
      modified_at: "2020-01-07T11:55:31.000Z",
      location: {
        lat: 60.16349792480469,
        lon: 24.938396453857422,
        address: {
          street_address: "Fredrikinkatu 33",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aino Shopin asiantunteva ja palveluhenkinen henkilökunta auttaa löytämään  juuri asiakkaan tyyliin sopivat vaatekokonaisuudet tarkoin mietityistä valikoimista.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-10/aino_shop_fredrikinkatu_aino-takki_full_moon_zorro_aw19_c_aino_ralf_astrom_location_only.jpg?h=2a406133&itok=hCW9tzEi",
            copyright_holder: "Aino / Ralf Åström",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "219",
      name: {
        fi: "Ainola, Aino ja Jean Sibeliuksen koti",
        en: "Ainola, Home of Jean Sibelius",
        sv: "Ainola, Jean Sibelius hem",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.ainola.fi",
      modified_at: "2019-04-04T15:18:19.000Z",
      location: {
        lat: 60.45368194580078,
        lon: 25.087430953979492,
        address: {
          street_address: "Ainolantie",
          postal_code: "04400",
          locality: "Järvenpää",
        },
      },
      description: {
        intro: null,
        body:
          "Ainola oli säveltäjämestari Jean Sibeliuksen  (1865-1957) ja hänen perheensä koti yli 60 vuoden ajan. Siellä on edelleen täysin alkuperäinen sisustus ja esineistö sekä laaja taiteilijaystävien teoksista kertynyt taidekokoelma. Ainola valmistui v. 1904, hirsistä rakennetun huvilan suunnitteli arkkitehti Lars Sonck. Jean ja Aino Sibeliuksen hauta sijaitsee puutarhassa.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:40", name: "Museum" },
        { id: "matko2:41", name: "Speciality" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Touko-syyskuussa ti-su 10-17",
      },
    },
    {
      id: "851",
      name: {
        fi: "Airport Hotel Bonus Inn",
        en: "Airport Hotel Bonus Inn",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bonusinn.fi",
      modified_at: "2020-03-26T12:54:07.000Z",
      location: {
        lat: 60.28882598876953,
        lon: 24.950197219848633,
        address: {
          street_address: "Elannontie 9",
          postal_code: "01510",
          locality: "Vantaa",
        },
      },
      description: {
        intro: null,
        body:
          "Kodikas suomalainen lentokenttähotelli Helsinki-Vantaalla.\r\n\r\nAirport Hotel Bonus Inn on yksityisessä omistuksessa oleva lentokenttähotelli, joka tarjoaa rauhallisen levähdyspaikan lentojen välillä, työpäivän päätteeksi tai ennen aikaista aamulentoa. \r\n\r\nAirport Hotel Bonus Inn on 214 huoneen hotelli. Kaikissa huoneissa on  wc ja suihku, työpöytä, HD-tasoinen LCD-televisio kansainvälisine kanavavalikoimineen sekä puhelin ja langaton internet-yhteys. \r\n\r\nHotellissa on myös kodikas ravintola KULMA, rento kohtaamispaikka, jonne voi saapua syömään yksin, yhdessä ystävien kanssa tai perheen kesken.\r\n\r\nHotelli sijaitsee vain viiden minuutin ajomatkan päässä Helsinki-Vantaan lentokentältä. Lentokenttäkuljetukset hoituvat hotellin bussilla, omalla autolla liikenteessä olevalle, majoituspalveluita käyttäville asiakkaille järjestyy myös maksuton lomaparkki.\r\n\r\nHotellissa on myös mahdollista majoittua lemmikin kanssa.",
        images: [],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:149", name: "EcoCompass" },
        { id: "matko2:241", name: "Hotel" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "853",
      name: {
        fi: "Airport Hotel Pilotti",
        en: "Airport Hotel Pilotti",
        sv: "Airport Hotel Pilotti",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.airporthotelpilotti.fi",
      modified_at: "2020-03-30T08:34:15.000Z",
      location: {
        lat: 60.28462600708008,
        lon: 24.965829849243164,
        address: {
          street_address: "Veromäentie 1",
          postal_code: "01510",
          locality: "Vantaa",
        },
      },
      description: {
        intro: null,
        body:
          "Airport Hotel Pilotti on viihtyisä lentokenttähotelli Helsinki-Vantaan lentoaseman lähellä Vantaalla. Hotelli sijaitsee myös lyhyen kävelymatkan päässä Jumbon  ostoskeskuksesta ja Flamingon viihdekeskuksesta.\r\n\r\nAirport Hotel Pilotti on sekä lomalaisten että työmatkalaisten hotelli. Hotellissa on yhteensä 109 huonetta, jotka jaotellaan kahteen huoneluokkaan: kahden hengen standard-huoneisiin sekä perhehuoneisiin.\r\n\r\nHotelli tarjoaa majoittuville asiakkailleen maksuttoman pysäköinnin ja aikataulutetut lentokenttäkuljetukset.\r\n\r\nAirport Hotel Pilotti tunnetaan lemmikkiystävällisenä hotellina. Huonevalikoimassa on myös allergiahuoneita. Airport Hotel Pilotti on 100% savuton hotelli.",
        images: [],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:241", name: "Hotel" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "573",
      name: {
        fi: "Akateeminen kirjakauppa",
        en: "Academic Bookstore",
        sv: "Akademiska bokhandeln",
        zh: "学苑书店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.akateeminen.com",
      modified_at: "2019-04-29T15:10:23.000Z",
      location: {
        lat: 60.167903900146484,
        lon: 24.94342803955078,
        address: {
          street_address: "Keskuskatu 1",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Akateeminen Kirjakauppa on perustettu vuonna 1893 ja ollut aina tunnettu loistavasta valikoimastaan ja asiantuntevasta henkilökunnastaan. Akateeminen Kirjakauppa siirtyi ruotsalaisen Bonnier Booksin omistukseen lokakuussa 2015 ja jatkaa kirjojen ystävän omana kauppana. Akateeminen toimii Alvar Aallon suunnittelemassa liikerakennuksessa, Kirjatalossa (v.1969). Akateemisen katutasossa toimii Starbucks kahvila ja 2.kerroksessa Cafe Aalto jossa pöytiintarjoilu.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/akateeminen_kirjakauppa_kuva_jussi_hellsten.jpg?h=d76278b8&itok=d8OgvCV4",
            copyright_holder: "Jussi Hellsten",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:166", name: "AlvarAalto" },
        { id: "matko2:101", name: "BookStore" },
        { id: "matko2:224", name: "StationaryShop" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:24", name: "Architecture" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3816",
      name: {
        fi: "Akusmata Sound Art Gallery",
        en: "Akusmata Sound Art Gallery",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://akusmata.com",
      modified_at: "2020-01-22T12:30:23.000Z",
      location: {
        lat: 60.19171905517578,
        lon: 24.908342361450195,
        address: {
          street_address: "Tukholmankatu 7 K",
          postal_code: "00270",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Äänitaidegalleria Akusmata esittelee uutta ja ajankohtaista äänitaidetta.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1760",
      name: {
        fi: "Akvart Galleria",
        en: "Akvart Galleria",
        sv: "Akvart Galleria",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.akvart.fi/",
      modified_at: "2020-01-22T12:32:41.000Z",
      location: {
        lat: 60.18505859375,
        lon: 24.920869827270508,
        address: {
          street_address: "Humalistonkatu 1",
          postal_code: "00250",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Akvart galleria perustettiin 2009 ja se on maamme ainoa yksinomaan akvarellitaiteeseen keskittynyt taidegalleria. Akvart tarjoaa näyttelytilaa akvarellitaiteilijoille ja alan harrastajille. Galleriassa näyttelyt vaihtuvat kahden viikon välein.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3834",
      name: {
        fi: "Alakulttuurikeskus Loukko",
        en: "Alakulttuurikeskus Loukko",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.kulttuuriloukko.fi",
      modified_at: "2019-09-12T08:30:43.000Z",
      location: {
        lat: 60.18479919433594,
        lon: 24.946674346923828,
        address: {
          street_address: "Castreninkatu 7",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alakulttuurikeskus Loukko on Kalliossa sijaitseva, turvallisemman tilan periaatteita noudattava kohtaamispaikka, jossa pyörii ostopakoton vegaaninen kahvila, matalan kynnyksen galleria, monenlaisia työpajoja, viikoittainen feministinen Joku Ompeluseura ja erilaisia esittävän taiteen tilaisuuksia.",
        images: [],
      },
      tags: [
        { id: "matko2:296", name: "CultureCentre" },
        { id: "matko2:234", name: "Vegan" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:22", name: "Gallery" },
        { id: "matko1:225", name: "VENUES" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Pe & la avoinna tapahtumien mukaan",
      },
    },
    {
      id: "2658",
      name: {
        fi: "Alakulttuuritalo",
        en: "Alakulttuuritalo",
        sv: "Alakulttuuritalo",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/alakulttuuritalo/",
      modified_at: "2019-02-28T13:54:13.000Z",
      location: {
        lat: 60.18858337402344,
        lon: 24.944265365600586,
        address: {
          street_address: "Sturenkatu 4",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kulttuuritalolla toimiva monitaiteinen klubi, joka esittelee kiinnostavaa ja laadukasta alakulttuuria taidemuotojen raja-aidoista piittaamatta. Kaikki Alakulttuuritalon klubi-illat jatkuvat aamuneljään.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/17807594_285221971921584_2763065008235861214_o.jpg?h=a1e1a043&itok=E3tqGUXI",
            copyright_holder: "Alakulttuuritalo",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:53", name: "LiveMusic" },
        { id: "matko2:182", name: "Music" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:148", name: "Club" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4004",
      name: { fi: "Alanya Market", en: "Alanya Market", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alanyamarket.fi",
      modified_at: "2020-02-17T13:13:33.000Z",
      location: {
        lat: 60.2138557434082,
        lon: 25.08250617980957,
        address: {
          street_address: "Kastelholmantie 2",
          postal_code: "00900",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alanya Market on Lähi-idän tuotteisiin erikoistunut päivittäistavarakauppa Itiksen Puhoksessa.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:103", name: "Grocery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4024",
      name: {
        fi: "Albatrossi Hki",
        en: "Albatrossi Hki",
        sv: "Albatrossi HKI",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://www.facebook.com/pages/category/Restaurant/Albatrossi-Hki-105561987847472/",
      modified_at: "2020-06-23T12:50:38.000Z",
      location: {
        lat: 60.168643951416016,
        lon: 24.912002563476562,
        address: {
          street_address: "Lapinlahdenpolku 8, Venetsia-rakennus",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Albatrossi on Lapinlahden sairaala-alueen rannassa iltaisin aukeava terassi jossa voi nauttia kauniista ilta-auringosta sekä hyvästä ruuasta ja juomasta.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "17:00:00",
            closes: "22:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Säävarauksella",
      },
    },
    {
      id: "127",
      name: {
        fi: "Aleksanterin teatteri",
        en: "Aleksanterin teatteri",
        sv: "Alexandersteatern",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aleksanterinteatteri.fi",
      modified_at: "2019-05-28T15:38:54.000Z",
      location: {
        lat: 60.16341018676758,
        lon: 24.933319091796875,
        address: {
          street_address: "Bulevardi 27",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Venäjän keisari Aleksanteri II:n mukaan nimetty Aleksanterin teatteri tarjoaa monipuolista ohjelmaa kaikenikäisille ja -kielisille ympäri vuoden. Venäjän kenraalikuvernööri Nikolai Adlerbergin aloitteesta rakennettu upea teatteri valmistui vuonna 1879. Suomen itsenäistyttyä rakennuksessa toimi Suomen Kansallisooppera ja vuodesta 1993 Aleksanterin teatteri on toiminut vierailuteatterina. Ohjelmistossa on niin tanssia, näytelmiä, konsertteja, musikaaleja kuin oopperaakin. \r\n\r\nTeatterin venäläiset juuret näkyvät edelleen sen ohjelmistossa, jossa on paljon vierailevia venäläisiä tanssiryhmiä, näytelmiä ja konsertteja. Muun muassa Mariinski-teatterin ja Aleksanterin teatterin yhteistyö käynnistyi jo 1800-luvun lopulla ja jatkuu edelleen.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/aleksanterin_teatteri_1339.jpg?h=aea02586&itok=RyIvSmU-",
            copyright_holder: "Sakke Somerma",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:26", name: "Theatre" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:24", name: "Architecture" },
        { id: "matko2:28", name: "Concert" },
        { id: "matko1:225", name: "VENUES" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1160",
      name: {
        fi: "Aleksanterinkatu",
        en: "Aleksanterinkatu Street",
        sv: "Alexandersgatan",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "",
      modified_at: "2008-04-09T22:00:00.000Z",
      location: {
        lat: 60.16891860961914,
        lon: 24.947200775146484,
        address: {
          street_address: "Aleksanterinkatu",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: { intro: null, body: "", images: null },
      tags: [],
      opening_hours: { hours: null, openinghours_exception: null },
    },
    {
      id: "1490",
      name: {
        fi: "Aleksi 13",
        en: "Aleksi 13",
        sv: "Aleksi 13",
        zh: "阿莱克西13百货公司",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aleksi13.fi/tavaratalo",
      modified_at: "2019-08-22T08:58:31.000Z",
      location: {
        lat: 60.1690673828125,
        lon: 24.945863723754883,
        address: {
          street_address: "Aleksanterinkatu 13",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aleksanterinkadun Aleksi 13-tavaratalosta löytyy naisten ja miesten vaatteet, kengät ja asusteet. Yli sata huolella valittua brändiä. Katutasossa valopihalla sijaitsee lastenosasto. Ylimmässä kerroksessa toimii ravintola Factory.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:60", name: "DepartmentStore" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
        { id: "matko2:a-:Curated", name: "Curated" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "222",
      name: {
        fi: "Aleksis Kiven kuolinmökki",
        en: "Aleksis Kivi Memorial Cottage",
        sv: "Aleksis Kivis dödstuga",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.tuusula.fi/sivu.tmpl?sivu_id=1893",
      modified_at: "2020-01-16T10:21:15.000Z",
      location: {
        lat: 60.43402099609375,
        lon: 25.057619094848633,
        address: {
          street_address: "Rantatie",
          postal_code: "04310",
          locality: "Tuusula",
        },
      },
      description: {
        intro: null,
        body:
          "Merkittävä kansallinen muistomerkki, jossa kansalliskirjailijamme Aleksis Kivi (1834-1872) vietti elämänsä viimeiset kuukaudet veljensä perheen hoivissa. Aleksis Kiven kuolinmökki muistuttaa olemassaolollaan, miltä Tuusulan Rantatie näytti ennen kuuluisan huvila-asutuksen ja taiteilijayhteisön syntyä.\r\n\r\nTuusulan museo vastaa Aleksis Kiven kuolinmökin avoinnapidosta.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:40", name: "Museum" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Avoinna 2.5.-31.8. ti-su 11-18, 1.9.-10.10. la-su 12-17, muina aikoina touko-lokakuussa sopimuksen mukaan.",
      },
    },
    {
      id: "888",
      name: {
        fi: "Aleksis Kiven syntymäkoti",
        en: "Birthplace and Home Museum of Aleksis Kivi",
        sv: "Aleksis Kivis födelsehem",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://www.nurmijarvi.fi/vapaa-aika_ja_kulttuuri/museo/aleksis_kiven_koti",
      modified_at: "2019-04-09T14:42:39.000Z",
      location: {
        lat: 60.42224884033203,
        lon: 24.865020751953125,
        address: {
          street_address: "Palojoentie 271",
          postal_code: "01940",
          locality: "Palojoki",
        },
      },
      description: {
        intro: null,
        body:
          'Kansalliskirjailija Aleksis Kiven syntymäkoti sijaitsee Nurmijärven Palojoella Seitsemän veljeksen ja Nummisuutareitten maisemissa. Tämä lapsuudenkoti pysyi Aleksis Kivelle tärkeänä myös Helsingin ja Siuntion vuosina.\r\n\r\nAleksis Kiven elämää ja teoksia esittelevä museon uusi perusnäyttely "Konstiniekka Kivi" valmistui keväällä 2017.',
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:40", name: "Museum" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Avoinna kesä-elokuussa",
      },
    },
    {
      id: "2431",
      name: {
        fi: "Alenius Sokerileipuri",
        en: "Sokerileipuri Alenius cake shop & cafe",
        sv: "Sokerileipuri Alenius Sockerbagare",
        zh: "白糖糕点铺-阿莱纽斯蛋糕店和咖啡厅",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.sokerileipuri.fi/",
      modified_at: "2020-06-23T10:26:28.000Z",
      location: {
        lat: 60.156131744384766,
        lon: 24.949718475341797,
        address: {
          street_address: "Merikatu 1",
          postal_code: "00140",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Tunnelmallinen vanhan ajan kakkukahvila sijaitsee Helsingin eteläkärjessä. Sokerileipuri Alenius on erikoistunut täytekakkuihin ja käsintehtyihin suklaatryffeleihin, mutta tarjolla on myös pikkusuolaista ja erikoiskahveja. Salin puolella sekä ulkopöydissä voi nauttia merimaisemasta ja esim. paikan kuuluisasta banaani-suklaakakusta. Myymälästä saa tuotteita myös mukaan.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:214", name: "Bakery" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:158", name: "Seaside" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3563",
      name: {
        fi: "Alenka Home Food",
        en: "Alenka Home Food",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://alenkahomefood.fi/",
      modified_at: "2020-07-02T14:56:49.000Z",
      location: {
        lat: 60.184356689453125,
        lon: 24.948223114013672,
        address: {
          street_address: "Läntien Papinkatu 2-4, LT4",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alenka Home Food Cafe & Bakery Kalliossa tarjoaa paikanpäällä valmistettuja venäläis- ja amerikkalaisvaikutteisia herkkuja paikan päällä nautittavaksi tai ennakkoon tilattavaksi ja noudettavaksi. Runsas valikoima kotiruokaa ja leivonnaisia kotimaisista raaka-aineista. \r\n",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:167", name: "Breakfast" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:168", name: "Brunch" },
        { id: "matko2:196", name: "Russian" },
        { id: "matko2:239", name: "Tea" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3758",
      name: {
        fi: "Alepa Kulosaari",
        en: "Alepa Kulosaari",
        sv: "Alepa Kulosaari",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.alepa.fi",
      modified_at: "2019-06-17T09:00:21.000Z",
      location: {
        lat: 60.186256408691406,
        lon: 25.008176803588867,
        address: {
          street_address: "Kyösti Kallion tie 2",
          postal_code: "00570",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alepa on pääkaupunkiseudulla palveleva lähikauppa, jonka löytää useimmiten ihan naapurista. Valinnanvaraa on tuotteiden lisäksi runsaasti jo Alepoissa itsessään - pääkaupunkiseudun vatsan kurinaa vaimentaa nykyään yli 100 Alepaa.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:103", name: "Grocery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2785",
      name: {
        fi: "Alepa Ullanlinna",
        en: "Alepa Ullanlinna",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alepa.fi",
      modified_at: "2019-08-22T09:11:35.000Z",
      location: {
        lat: 60.15938949584961,
        lon: 24.9455623626709,
        address: {
          street_address: "Vuorimiehenkatu 29",
          postal_code: "00140",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alepa on pääkaupunkiseudulla palveleva lähikauppa, jonka löytää useimmiten ihan naapurista. Valinnanvaraa on tuotteiden lisäksi runsaasti jo Alepoissa itsessään - pääkaupunkiseudun vatsan kurinaa vaimentaa nykyään yli 100 Alepaa.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:103", name: "Grocery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "06:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3863",
      name: {
        fi: "Alexanderplats Brasserie & Pub",
        en: "Alexanderplats Brasserie & Pub",
        sv: "Alexanderplats Brasserie & Pub",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://alexanderplats.fi",
      modified_at: "2020-08-20T10:22:11.000Z",
      location: {
        lat: 60.1666259765625,
        lon: 24.945026397705078,
        address: {
          street_address: "Eteläesplanadi 22",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brasserie & Pub Alexanderplats on helposti lähestyttävä laadukas ravintola Eteläesplandilla, jossa on viihtyisän baarin lisäksi runsaasti pöytiä ruokailijoille. \r\n\r\nBrasserie tarjoilee parhaista raaka-aineista valmistettuja eurooppalaisia klassikko-annoksia, jotka eivät kaipaa turhia koristeluja. Tyyli on selkeä ja elegantti. Pubissa on laaja valkoima oluita sekä runsaasti viinejä.",
        images: [],
      },
      tags: [
        { id: "matko2:49", name: "Pub" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:142", name: "SmartCasual" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "13:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "13:00:00",
            closes: "22:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2800",
      name: { fi: "Alfons' Pizza", en: "Alfons' Pizza", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alfonspizza.fi/",
      modified_at: "2020-08-20T10:25:00.000Z",
      location: {
        lat: 60.1592903137207,
        lon: 24.94251823425293,
        address: {
          street_address: "Vuorimiehenkatu 35",
          postal_code: "00150",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Suosittu artesaanipizzeria Ullanlinnassa. Kuuluisa pizzojensa rapeista luomupohjista ja rennosta tunnelmasta.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/alfons.jpg?h=0c4f442a&itok=2m6Qu67F",
            copyright_holder: "Alfons' Pizza",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:145", name: "Organic" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:186", name: "Pizza" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "16:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "13:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "13:00:00",
            closes: "20:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3446",
      name: {
        fi: "Alice Italian",
        en: "Alice Italian",
        sv: "Alice Italian",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.aliceitalian.fi",
      modified_at: "2020-08-20T11:07:37.000Z",
      location: {
        lat: 60.19121170043945,
        lon: 24.949066162109375,
        address: {
          street_address: "Konepajankuja 1",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ravintola Alice Italian tarjoilee mutkatonta italialaista ruokaa Wonderland co-workingtilan alakerrassa Vallilan Konepajan alueella.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-09/alice_italian_lautasia_c_soupster_familyn_kuvapankki_soupster_family_location_only.jpg?h=a84d9d1a&itok=a5vaMs0n",
            copyright_holder: "Soupster Family",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-09/alice_italian_kala_c_soupster_familyn_kuvapankki_soupster_family_location_only.jpg?h=4e15f5e0&itok=4M49WqU5",
            copyright_holder: "Soupster Family",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-09/alice_italian_risotto_c_soupster_familyn_kuvapankki_soupster_family_location_only.jpg?h=a36e049e&itok=aoDRoFq5",
            copyright_holder: "Soupster Family",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:171", name: "Italian" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:297", name: "Lunch" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1385",
      name: { fi: "ALKOVI", en: "ALKOVI", sv: "ALKOVI", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alkovi.com",
      modified_at: "2020-01-22T12:33:57.000Z",
      location: {
        lat: 60.18734359741211,
        lon: 24.953569412231445,
        address: {
          street_address: "Helsinginkatu 19",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "ALKOVI on näyteikkunatila Kalliossa jossa esitetään nykytaidetta.\r\n\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/alkovi_lahde_miina_hujala.jpg?h=a5eb5da0&itok=DkEUuq75",
            copyright_holder: "Miina Hujala",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: true },
          { weekday_id: 2, opens: null, closes: null, open24h: true },
          { weekday_id: 3, opens: null, closes: null, open24h: true },
          { weekday_id: 4, opens: null, closes: null, open24h: true },
          { weekday_id: 5, opens: null, closes: null, open24h: true },
          { weekday_id: 6, opens: null, closes: null, open24h: true },
          { weekday_id: 7, opens: null, closes: null, open24h: true },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2646",
      name: {
        fi: "Allas Sea Pool",
        en: "Allas Sea Pool",
        sv: "Allas Sea Pool",
        zh: "阿拉斯海水泳池",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.allasseapool.fi/",
      modified_at: "2020-09-02T08:22:57.000Z",
      location: {
        lat: 60.16706848144531,
        lon: 24.958147048950195,
        address: {
          street_address: "Katajanokanlaituri 2a",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Allas Sea Pool on merikylpylä ja kaupunkikeidas Kauppatorin kupeessa. Allas tarjoaa uusia tapoja nauttia Itämerestä kaupungin keskeisimmällä paikalla. Merikylpylä on auki ympäri vuoden ja tarjoaa elämyksiä ja virkistäytymismahdollisuuksia niin kaupunkilaisille kuin matkailijoille. Altaalla on kolme saunaa, kaksi lämmitettyä makean veden allasta sekä yksi merivesiallas, jonka lämpötila mukailee meren lämpötilaa. Lisäksi Altaalta löytyy ulkokuntosali, ravintola ja kahvila, ohjattua liikuntaa ja hyvinvointipalveluita ja kulttuuria.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/allas_sea_pool_hoyryava_allas_c_allas_sea_pool_maia_soderlund_location_only.jpg?h=304c7651&itok=f5TUwy9h",
            copyright_holder: "Allas Sea Pool / Maia Söderlund",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/allas_sea_pool_wine_dine_c_allas_sea_pool_riikka_jalava_location_only.jpg?h=683488d6&itok=9shJr5Mt",
            copyright_holder: "Allas Sea Pool / Riikka Jalava",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/allas_sea_pool_ulkoallas_c_allas_sea_pool_omar_el_mrabt_location_only.jpeg?h=e6c02432&itok=wJdlooId",
            copyright_holder: "Allas Sea Pool / Omar El Mrabt",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:240", name: "Family" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:264", name: "Yoga" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko1:169", name: "SAUNA & WELLNESS" },
        { id: "matko2:18", name: "SaunaMeeting" },
        { id: "matko2:31", name: "Swimming" },
        { id: "matko2:218", name: "Viewpoint" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:253", name: "MixedSauna" },
        { id: "matko2:167", name: "Breakfast" },
        { id: "matko2:158", name: "Seaside" },
        { id: "matko2:165", name: "Activity" },
        { id: "matko2:32", name: "Beach" },
        { id: "matko2:33", name: "IceSwimming" },
        { id: "matko2:28", name: "Concert" },
        { id: "matko2:17", name: "Sauna" },
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:206", name: "Wellness" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "06:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "06:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "06:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "06:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "06:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "20:00:00",
            open24h: false,
          },
        ],
        openinghours_exception:
          "Altaat ja saunat: ma-pe 6.30-21, la 9-21, su 9-20. \r\nAllas Café & Terrace: ma-pe 9-21, la 10-21, su 10-20.\r\nAllas Wine & Dine: avoinna tilauksesta syksyllä ja talvella.",
      },
    },
    {
      id: "3572",
      name: {
        fi: "Allas Wine & Dine",
        en: "Allas Wine & Dine",
        sv: "Allas Wine & Dine",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.allasseapool.fi/fi/ruoka-ja-juoma",
      modified_at: "2020-08-20T11:16:37.000Z",
      location: {
        lat: 60.167137145996094,
        lon: 24.95821189880371,
        address: {
          street_address: "Katajanokanlaituri 2A",
          postal_code: "00160",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Allas Sea Poolin toisessa kerroksessa sijaitseva Wine & Dine tarjoaa mitä mahtavimman näköalan merelle ja historialliseen Helsinkiin. \r\n\r\nRuoka koostuu laadukkaista raaka-aineista ja annokset viimeistellään modernilla otteella. Tarjolla on raikkaita versioita klassikoista, mausteena kansainvälisiä makuja ja kattava viinilista.",
        images: [],
      },
      tags: [
        { id: "matko2:147", name: "ModernNordic" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:158", name: "Seaside" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Avoinna syksyn ja talven ajan tilauksesta",
      },
    },
    {
      id: "273",
      name: {
        fi: "Allergiatalon kongressikeskus",
        en: "Allergy House",
        sv: "Allergiatalon kongressikeskus",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.allergia.fi/allergiatalo/",
      modified_at: "2020-04-20T06:38:21.000Z",
      location: {
        lat: 60.19413375854492,
        lon: 24.894001007080078,
        address: {
          street_address: "Paciuksenkatu 19",
          postal_code: "00270",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "TerveTalo-periaatteella rakennettu Allergiatalon kongressikeskus sijaitsee hyvien liikenneyhteyksien päässä Helsingin Meilahdessa. Talossa on nykyaikainen audiotorio, kaksi valoisaa neuvotteluhuonetta, kuntosali, uima-allas sekä saunaosasto ja takkakabinetti. Auditoriossa on huippulaatuiset AV-laitteet, videotykki ja Dolby Surround -äänentoistojärjestelmä. Talon tiloissa voi järjestää erilaisia juhlatilaisuuksia jopa 200 vieraalle. Katutason näyttelyaula soveltuu erinomaisesti esimerkiksi cocktailtilaisuuksiin.\r\n",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:110", name: "Auditorium" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3859",
      name: { fi: "Alnilam", en: "Alnilam", sv: "Alnilam", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alnilam.fi",
      modified_at: "2019-10-15T14:36:41.000Z",
      location: {
        lat: 60.16562271118164,
        lon: 24.935998916625977,
        address: {
          street_address: "Lönnrotinkatu 15",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Tähtitiedettä, fantasiaa, scifiä ja steampunkia - kaupungin nörtein lahjapuoti.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-10/alnilam_the_geekiest_giftshop_c_alnilam_anu_rainela-lankinen_location_only.jpeg?h=7d135caa&itok=8wTeoqp0",
            copyright_holder: "Alnilam / Anu Rainela-Lankinen",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:a-:JCB", name: "JCB" },
        { id: "matko2:a-:GlobalBlue", name: "GlobalBlue" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:71", name: "Souvenirs" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Suljettu 6.12.2019, 24.-26.12.2019",
      },
    },
    {
      id: "3495",
      name: {
        fi: "Alppilan Huone",
        en: "Alppilan Huone",
        sv: "Alppilan Huone",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://alppilanhuone.fi/",
      modified_at: "2018-10-24T08:58:31.000Z",
      location: {
        lat: 60.19093322753906,
        lon: 24.945842742919922,
        address: {
          street_address: "Porvoonkatu 19",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alppilan Huone on kuin olohuoneen jatke; etkopaikka, jatkopaikka, levähdyspaikka ja kokoontumispaikka. Alppilan Huoneessa järjestetään myös tapahtumia ja sen seinillä on aina vaihtuva taidenäyttely.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1333",
      name: {
        fi: "Alppilan kirkko",
        en: "Alppila Church",
        sv: "Alphyddans kyrka",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.helsinginseurakunnat.fi/alppilankirkko.html.stx",
      modified_at: "2020-01-29T08:51:30.000Z",
      location: {
        lat: 60.19157028198242,
        lon: 24.941089630126953,
        address: {
          street_address: "Kotkankatu 2",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alppilan kirkko palvelee tiheästi asutettua aluetta Linnanmäen huvipuiston naapurissa. Vuonna 1957 valmistuneen rakennuksen suunnittelivat arkkitehdit Keijo Ström ja Olavi Tuomisto. Kirkon 26-äänikertaiset urut on rakentanut Kangasalan urkutehdas vuonna 1958. Niiden mekaanis-sähköpneumaattinen rakenne on Suomessa ainutlaatuinen. Kirkossa pidetään säännöllisesti myös viron- ja unkarinkielisiä jumalanpalveluksia.",
        images: [],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:25", name: "Church" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1367",
      name: {
        fi: "Alppipuisto",
        en: "Alppipuisto Park",
        sv: "Alpparken",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://vihreatsylit.fi/alppipuisto/",
      modified_at: "2020-02-04T12:21:18.000Z",
      location: {
        lat: 60.18899154663086,
        lon: 24.937679290771484,
        address: {
          street_address: "Viipurinkatu-Tivolitie-Helsinginkatu (Alppiharju)",
          postal_code: "Helsinki",
          locality: null,
        },
      },
      description: {
        intro: null,
        body:
          "Linnanmäen huvipuiston ja junaradan välissä sijaitsevan Alppipuiston historia ulottuu 1800-luvulle. Alppipuisto on suosittu oleskelupuisto. Sen tunnelmantekijöitä ovat nurmikot, lammikot suihkulähteineen, pieni tanssilava, näköalaterassi, kirsikkapuut ja karu kallioluonto.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-07/Alppipuisto%20Helsinki_Kai%20Kuusisto%20VF.jpg?h=3e0a7fd1&itok=pMi4dEPF",
            copyright_holder: "Kai Kuusisto",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:20", name: "Park" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "567",
      name: {
        fi: "Alvar Aallon ateljee",
        en: "Studio Aalto",
        sv: "Studio Aalto",
        zh: "阿尔托工作室",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.alvaraalto.fi/kohde/alvar-aallon-ateljee/",
      modified_at: "2020-06-18T11:10:04.000Z",
      location: {
        lat: 60.1982307434082,
        lon: 24.869516372680664,
        address: {
          street_address: "Tiilimäki 20",
          postal_code: "00330",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Alvar Aalto suunnitteli Munkkiniemen Tiilimäki 20:ssa sijaitsevan rakennuksen omaksi arkkitehtitoimistokseen 1955. \r\n\r\nVierailu Aallon ateljeessa on sukellus Aallon arkkitehtuurin, muotoilun ja henkilöhistorian maailmaan, mutta samalla myös arkkitehtoninen kokemus tilasta ja rakennuksesta. Luonnonvaloa hyödyntävä ateljee Aalto-kalusteineen on ainutlaatuinen ympäristö, jossa Aallon arkkitehtitoimisto suunnitteli useita muita tunnettuja rakennuksia. \r\n\r\nTaloon voi tutustua vain opastetulla kierroksella. Opastetut kierrokset ovat yleensä englanniksi.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-06/alvar_aallon_ateljee_c_alvar_aalto_foundation_maija_holma_location_only.jpg?h=d7a0ca4b&itok=OstPTkf9",
            copyright_holder: "Alvar Aalto Foundation / Maija Holma",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:166", name: "AlvarAalto" },
        { id: "matko2:40", name: "Museum" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:24", name: "Architecture" },
        { id: "matko2:41", name: "Speciality" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Sisäänpääsy ja opastus: Ajalla 1.6.-30.6. ti-pe 18.30, la-su 14.30. Ajalla 1.7.-31.7. ti-pe\t16.30 ja 17.30, la-su 13.30 ja 14.30. Ajalla 1.8.-31.12. aukioloajat vahvistetaan myöhemmin.",
      },
    },
    {
      id: "2319",
      name: {
        fi: "Alvar Aallon kotitalo",
        en: "The Aalto House",
        sv: "Alvar Aaltos hem",
        zh: "阿尔托故居",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.alvaraalto.fi/kohde/alvar-aallon-kotitalo/",
      modified_at: "2020-06-18T11:23:39.000Z",
      location: {
        lat: 60.196781158447266,
        lon: 24.876405715942383,
        address: {
          street_address: "Riihitie 20",
          postal_code: "00330",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vuonna 1936 valmistunut Alvar Aallon kotitalo on arkkitehtipariskunnan itselleen suunnittelema kodikas ja intiimi työskentely- ja asuinrakennus, jossa on käytetty yksinkertaisia ja pelkistettyjä materiaaleja. \r\n\r\nTaloon voi tutustua vain opastetulla kierroksella.  Aaltojen persoonallisen kodin historia ja arkkitehtuuri avautuvat oppaan tarinoiden kautta. Kierrokselle on varattu aikaa tunti, ja se sisältää niin varsinaisen opastuksen kuin aikaa nauttia talon tunnelmasta ja tutustua museokaupan valikoimaan.\r\n\r\nOpastetut kierrokset ovat yleensä englanniksi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/av%20602.jpg?h=5b0f8b87&itok=eG5UmAHX",
            copyright_holder: " Maija Holma",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/av%203623.jpg?h=b4dcdde8&itok=HzRlIqRx",
            copyright_holder: "Maija Holma",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:166", name: "AlvarAalto" },
        { id: "matko2:40", name: "Museum" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:24", name: "Architecture" },
        { id: "matko2:41", name: "Speciality" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Opastus ja sisäänpääsy: Ajalla 1.6.-30.6. ti-pe 17, la-su 13. Ajalla 1.7.-31.7. ti-pe 15, 16 ja 17, la-su 12, 13 ja 14. Ajalla 1.8.-31.12. aukioloajat vahvistetaan myöhemmin.\r\n",
      },
    },
    {
      id: "1313",
      name: { fi: "Amado", en: "Amado", sv: "Amado", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.amadosecondhand.fi/",
      modified_at: "2019-08-22T11:46:37.000Z",
      location: {
        lat: 60.1623420715332,
        lon: 24.94001579284668,
        address: {
          street_address: "Fredrikinkatu 25",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Amado myy sekä klassisia että trendikkäitä second hand -vaatteita arkeen ja juhlaan. Kaikki Amadon tuotteet ovat taattuja, aitoja merkkituotteita.\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Suljettu heinäkuussa",
      },
    },
    {
      id: "3744",
      name: { fi: "Amarillo", en: "Amarillo", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.raflaamo.fi/fi/helsinki/amarillo-helsinki",
      modified_at: "2020-08-20T11:22:33.000Z",
      location: {
        lat: 60.1687126159668,
        lon: 24.944955825805664,
        address: {
          street_address: "Aleksanterinkatu 46",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Amarillo yhdistää niin ystävät kuin tuntemattomat ja saa jengin viihtymään saman pöydän ääressä. Tyyliltään Amarillo on raikas ja reilu, mutkaton ja energinen. Ruokalistalta löytyy reippaasti tuoreita makuja parhaita lemppareita unohtamatta. Ja tietenkin tarjolla on myös kurkun kostuketta ja mukavaa fiilistä. \r\n\r\nAinutlaatuista kokemusta kaipaavan kannattaa varata paikkansa The Tableen. Koko illan kestävä elämys tarjoaa herkuttelua, viihdettä ja paljon iloisia yllätyksiä",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:170", name: "Hamburger" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4092",
      name: {
        fi: "aMazed Games Erottaja",
        en: "aMazed Games Erottaja",
        sv: "aMazed Games Erottaja",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.amazed.fi/",
      modified_at: "2020-10-07T09:32:19.000Z",
      location: {
        lat: 60.164894104003906,
        lon: 24.94424819946289,
        address: {
          street_address: "Erottajankatu 7",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "aMazed Games Room Escape tarjoaa mahdollisuuden olla pääosassa adrenaliinintäytteisissä ja tiivistunnelmaisissa tosielämän pakohuonepeleissä kahdessa eri toimipisteessä Helsingin keskustassa. Intensiivisessä pakohuoneessa pelaaja joutuu arvoitusten ja lukkojen avulla keksimään tiensä ulos yhden tunnin kuluessa. aMazed Gamesin pakohuoneissa ei ole aikaa tai paikkaa. On vain lukkoja, arvoituksia sekä löytämisen ja oivaltamisen riemua. aMazed Gamesissa on panostettu pelien visuaalisuuteen ja aidon tunnelman luomiseen lavastustaiteen ja musiikin avulla, osa pakohuonepelejä on mahdollista toteuttaa myös näyttelijöillä. Peli kestää tunnin ajan, mutta aina voi yrittää päästä pakoon aikaisemmin. Pakohuonepeli soveltuu kaikille 13-vuotiaasta ylöspäin, kauhuhuoneet ovat K-18.",
        images: [],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:208", name: "EscapeRoom" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2441",
      name: {
        fi: "aMazed Games Kamppi",
        en: "aMazed Games Kamppi",
        sv: "aMazed Games Kamppi",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.amazed.fi/",
      modified_at: "2020-10-07T07:24:32.000Z",
      location: {
        lat: 60.162315368652344,
        lon: 24.9259090423584,
        address: {
          street_address: "Köydenpunojankatu 4",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "aMazed Games Room Escape tarjoaa mahdollisuuden olla pääosassa adrenaliinintäytteisissä ja tiivistunnelmaisissa tosielämän pakohuonepeleissä kahdessa eri toimipisteessä Helsingin keskustassa. Intensiivisessä pakohuoneessa pelaaja joutuu arvoitusten ja lukkojen avulla keksimään tiensä ulos yhden tunnin kuluessa. aMazed Gamesin pakohuoneissa ei ole aikaa tai paikkaa. On vain lukkoja, arvoituksia sekä löytämisen ja oivaltamisen riemua. aMazed Gamesissa on panostettu pelien visuaalisuuteen ja aidon tunnelman luomiseen lavastustaiteen ja musiikin avulla, osa pakohuonepelejä on mahdollista toteuttaa myös näyttelijöillä. Peli kestää tunnin ajan, mutta aina voi yrittää päästä pakoon aikaisemmin. Pakohuonepeli soveltuu kaikille 13-vuotiaasta ylöspäin, kauhuhuoneet ovat K-18.",
        images: [],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:208", name: "EscapeRoom" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1107",
      name: {
        fi: "American Bar",
        en: "American Bar",
        sv: "American Bar",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.raflaamo.fi/fi/helsinki/american-bar",
      modified_at: "2020-01-07T12:03:57.000Z",
      location: {
        lat: 60.16769790649414,
        lon: 24.938745498657227,
        address: {
          street_address: "Kalevankatu 5, Solo Sokos Hotel Torni",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "American Bar on Helsingin vanhin cocktailravintola. American Bar tarjoaa laadukkaita, klassisia cocktaileja ystävällisen ja ammattitaitoisen henkilökunnan toimesta. American Baria on kutsuttu baarimestareiden korkeakouluksi ja monet Suomen tähdet ovatkin työskennelleet uransa jossakin vaiheessa Hotelli Tornin alakerrassa sijaitsevassa, tyylikkäässä cocktailbarissa. \r\n\r\nAmerican Bar on suljettu 12/2019 alkaen hotellin peruskorjauksen ajaksi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/american_bar_kolmedrinkkia.jpg?h=9403a927&itok=2QkgfhZQ",
            copyright_holder: "Ravintola Torni",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/american_bar_napue3.jpg?h=b8c132f5&itok=iCGabkji",
            copyright_holder: "Ravintola Torni",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "American Bar on suljettu 12/2019 alkaen hotellin peruskorjauksen ajaksi.",
      },
    },
    {
      id: "469",
      name: { fi: "Amigo", en: "Amigo", sv: "Amigo", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.amigo.fi",
      modified_at: "2020-08-20T11:28:12.000Z",
      location: {
        lat: 60.15833282470703,
        lon: 24.94964027404785,
        address: {
          street_address: "Tehtaankatu 12",
          postal_code: "00140",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vuonna 1971 Ullanlinnaan perustettu Ravintola Amigo on jäänyt monen helsinkiläisen herkuttelijan mieleen yhtenä kaupungin ensimmäisistä pihviravintoloista. Ravintola pitää traditioista kiinni ja tarjoaa edelleen klassikoita, kuten lankkupihviä ja mehevää Paella Valencianaa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/amigo_varras.jpg?h=df620a35&itok=-HAg-fUQ",
            copyright_holder: "Amigo",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:236", name: "Spanish" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:187", name: "Beef" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "15:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Amigo Bar: ti-to 16-24, pe-la 16-01",
      },
    },
    {
      id: "3094",
      name: {
        fi: "Amos Rex",
        en: "Amos Rex",
        sv: "Amos Rex",
        zh: "阿莫斯瑞克斯",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://amosrex.fi/",
      modified_at: "2020-05-18T14:31:16.000Z",
      location: {
        lat: 60.17033004760742,
        lon: 24.936189651489258,
        address: {
          street_address: "Mannerheimintie 22-24",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Uuden Amos Rexin näyttelyohjelma koostuu uusimmasta, usein teknisesti kokeilevasta nykytaiteesta, 1900-luvun modernismista ja muinaisia kulttuureja esittelevistä näyttelyistä. Amos Rex haluaa esitellä kiinnostavaa ja kunnianhimoista taidetta virkistävästi ja elämäniloisesti. Vaihtuvien näyttelyiden lisäksi esillä on pysyvästi Sigurd Frosteruksen jälki-impressionistinen kokoelma.  \r\n\r\nAmos Rex koostuu uusista maanalaisista näyttelytiloista, vanhasta, vuonna 1936 rakennetusta Lasipalatsista ja elokuvateatteri Bio Rexistä, sekä Lasipalatsin aukiolla näyttelytilan kattona kumpuilevasta tapahtuma-aukiosta. Tarkoituksena on tarjota ainutkertaisia elämyksiä ja yllättäviä kohtaamisia.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-08/amos_rex_amos58_c_mika_huisman.jpg?h=daa492a8&itok=xY83BEx1",
            copyright_holder: "Mika Huisman / Amos Rex",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-08/amos-rex-art-museum_c-tuomas-uusheimo-12-e1535352227388_0.jpg?h=8bb8a48f&itok=fSWxXYjn",
            copyright_holder: "Tuomas Uusheimo / Amos Rex",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-08/amos-rex-art-museum_c-tuomas-uusheimo-13_0.jpg?h=4fb855c0&itok=vS0_TIlU",
            copyright_holder: "Tuomas Uusheimo / Amos Rex",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-08/amos-rex-art-museum_c-tuomas-uusheimo-10_0.jpg?h=46b65c8a&itok=7V5PRc3B",
            copyright_holder: "Tuomas Uusheimo / Amos Rex",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-08/amosrex_c_tuomas_uusiheimo_ulkoa_0.jpg?h=f4c1150c&itok=Fuza-Mpm",
            copyright_holder: "Tuomasn Uusiheimo / Amos Rex",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:40", name: "Museum" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:21", name: "Art" },
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:19", name: "MainAttraction" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2983",
      name: { fi: "Andante", en: "Andante", sv: null, zh: "行板咖啡馆" },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/AndanteHelsinki/",
      modified_at: "2020-07-02T14:55:08.000Z",
      location: {
        lat: 60.16278839111328,
        lon: 24.938922882080078,
        address: {
          street_address: "Fredrikinkatu 20",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Punavuoressa sijaitseva kahvila-kukkakauppa jossa viikonloppuisin tarjolla brunssia.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/22688885_1518658038225530_4500881105186744787_n.jpg?h=3e353c31&itok=x0E50i9p",
            copyright_holder: "Andante",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:178", name: "Florist" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:168", name: "Brunch" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3589",
      name: {
        fi: "ANKI shop & showroom",
        en: "ANKI shop & showroom",
        sv: "ANKI shop & showroom",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://ankirugs.com/",
      modified_at: "2019-08-22T12:07:13.000Z",
      location: {
        lat: 60.164302825927734,
        lon: 24.946529388427734,
        address: {
          street_address: "Pieni Roobertinkatu 5",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vuodesta 1968 toiminut ANKI valmistaa käsin kudottuja, korkealaatuisia mattoja puhtaista luonnonmateriaaleista. Suurin osa matoista kudotaan yksittäiskappaleina asiakkaan tilaamassa koossa ja värissä.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:67", name: "InteriorDesign" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "466",
      name: { fi: "AnnaK", en: "AnnaK", sv: "AnnaK", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://annak.kiinko.info",
      modified_at: "2020-04-20T07:14:03.000Z",
      location: {
        lat: 60.16701889038086,
        lon: 24.936559677124023,
        address: {
          street_address: "Annankatu 24",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Helsingin keskustassa Annankadun ja Kalevankadun kulmatalon ullakolla sijaitsevat avarat, rauhalliset ja valoisat kokous-, koulutus- ja juhlatilat. \r\n\r\nAnnaK tarjoaa tasokkaita kokous-, koulutus- ja juhlatiloja upeassa uusrenessanssitalossa aivan keskellä Helsinkiä. Tilat on saneerattu vuonna 1898 rakennettua kiinteistöä kunnioittaen, sisustettu Alvar Aallon henkeen ja varustettu ajanmukaisin av-välinein. AnnaK:ssa on viisi erikokoista viihtyisää ja valoisaa tilaa. Kaikissa tiloissa on internetyhteys. Tiloja löytyy pienemmästä kokouksesta jopa 50 hengen seminaariin. Tilat soveltuvat erilaisiin kokouksiin ja koulutustilaisuuksiin sekä yritys- ja perhejuhliin.",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:15", name: "Banquet" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3710",
      name: {
        fi: "Annalan huvila",
        en: "Annalan huvila",
        sv: "Villa Anneberg",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://annalanhuvila.fi",
      modified_at: "2020-07-02T14:53:58.000Z",
      location: {
        lat: 60.213096618652344,
        lon: 24.976408004760742,
        address: {
          street_address: "Waseniuksen puistotie 1",
          postal_code: "00560",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Annala on kaikille avoin, idyllinen puistoalue Helsingin syntysijoilla, Vanhassakaupungissa. Alueen sydän on vuonna 1832 valmistunut Helsingin vanhin huvilarakennus, Annalan huvila eli Villa Anneberg.\r\n\r\nHyötykasviyhdistys ry osti huvilan vuonna 2017. Tavoitteena on kehittää huvilasta valtakunnallinen puutarhakulttuurin keskus.\r\n\r\nAnnalan huvilan ystävät ry pitää Annalan huvilassa sunnuntaisin Café Anneberg -tapahtumakahvilaa.",
        images: [],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:249", name: "Garden" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Ks. mahdolliset aukioloajat kotisivuilta",
      },
    },
    {
      id: "436",
      name: {
        fi: "Annalan puutarha",
        en: "Annala Garden",
        sv: "Annebergs trädgård",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.hyotykasviyhdistys.fi",
      modified_at: "2020-02-04T12:25:20.000Z",
      location: {
        lat: 60.21357727050781,
        lon: 24.976215362548828,
        address: {
          street_address: "Hämeentie 154",
          postal_code: "00560",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Annalan puutarha on kaikille avoin, idyllinen puistoalue Helsingin syntysijoilla Vanhassakaupungissa. Hyötykasviyhdistys toimii keltaisessa puutalossa (rakennus J), jossa järjestetään kaikille avoimia kursseja ja tapahtumia. Teemapuutarhat tutustuttavat hyötykasveihin ja luonnonmukaiseen kateviljelyyn. Teemapuutarhojen alue koostuu keittiökasvimaasta, yrttimaasta, värjäyskasveista, Topeliuksen ajan lääkekasveista, perhospuutarhasta ja sidontaan käytettävistä kasveista. Kokonaisuuteen kuuluu myös historiallinen talvikasvihuone eli orangeria. Annalan taimia ja satoa on myynnissä tapahtumissa keväällä ja syksyllä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/Annalan%20puutarha_Roy%20Koto.jpg?h=926d89e9&itok=goGdR8w2",
            copyright_holder: "Roy Koto",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/Annalan%20hy%C3%B6tykasviyhdistys_Roy%20Koto.jpg?h=926d89e9&itok=_c93Cdnd",
            copyright_holder: "Roy Koto",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:20", name: "Park" },
        { id: "matko2:249", name: "Garden" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3239",
      name: {
        fi: "Annan Suklaatehdas",
        en: "Annan Suklaatehdas",
        sv: "Annan Suklaatehdas",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/annansuklaatehdas/",
      modified_at: "2019-08-22T12:49:59.000Z",
      location: {
        lat: 60.16077423095703,
        lon: 24.939178466796875,
        address: {
          street_address: "Merimiehenkatu 23",
          postal_code: "00150",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Annan Suklaatehdas valmistaa herkullisia, taidolla käsintehtyjä suklaakonvehteja Punavuoressa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/annan_suklaatehdas_image1_002.jpeg?h=6b096f04&itok=6PA2OvqL",
            copyright_holder: "Annan Suklaatehdas",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/annan_suklaatehdas_image1.jpeg?h=349d4b49&itok=vaUpBp5K",
            copyright_holder: "Annan Suklaatehdas",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/annan_suklaatehdas_main.jpg?h=fad603b4&itok=vsfb5HF8",
            copyright_holder: "Annan Suklaatehdas",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:255", name: "Candy" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Ks. aukioloajat kotisivuilta",
      },
    },
    {
      id: "283",
      name: {
        fi: "Annantalo",
        en: "Annantalo Arts Centre",
        sv: "Annegården",
        zh: "安娜艺术中心大楼",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.annantalo.fi/fi/vuokraa",
      modified_at: "2020-04-20T07:19:35.000Z",
      location: {
        lat: 60.16788101196289,
        lon: 24.934770584106445,
        address: {
          street_address: "Annankatu 30",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Taidekasvatukselle ja lastenkulttuurille omistautunut talo Helsingin ydinkeskustassa. Esityksiä, näyttelyitä ja tapahtumia lapsille, nuorille ja perheille sekä monipuolinen kurssivalikoima. Tunnelmallinen kahvila, jossa lapset viihtyvät satukirjojen äärellä. Vaihtuvia näyttelyitä on galleriassa ja usein myös toisen kerroksen lasipäädyissä sekä Annantalon kahvilassa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/17435891_1449682288404493_1563005476214599690_o-2.jpg?h=4648d49f&itok=rdCKZc2E",
            copyright_holder: "Kuva Mauri Tahvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:296", name: "CultureCentre" },
        { id: "matko2:240", name: "Family" },
        { id: "matko2:110", name: "Auditorium" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:22", name: "Gallery" },
        { id: "matko1:225", name: "VENUES" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1481",
      name: {
        fi: "Annensoppi",
        en: "Anne's Shop",
        sv: "Anne's Shop",
        zh: "安奈的商店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.annensoppi.com/",
      modified_at: "2019-08-22T12:52:16.000Z",
      location: {
        lat: 60.17210388183594,
        lon: 24.925649642944336,
        address: {
          street_address: "Fredrikinkatu 68",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Annensoppi on Helsingin vanhin matkamuistomyymälä Temppeliaukion kirkon edessä. Valikoimaan kuuluu matkamuistojen lisäksi lahjatavaroita, joulukoristeita ja muumiosasto.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-02/annensoppi_annes_shopin_villavaatteet-1.jpg?h=7a8ce423&itok=qTupqOMw",
            copyright_holder: "Annensoppi",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-02/annensoppi_sabrina_kuva_2.jpg?h=99a561e0&itok=OXgcPBgX",
            copyright_holder: "Sakari Soininen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:71", name: "Souvenirs" },
        { id: "matko2:a-:Curated", name: "Curated" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "kesäisin ma-su 9-18",
      },
    },
    {
      id: "1309",
      name: {
        fi: "Ansa Second Hand",
        en: "Ansa Second Hand",
        sv: "Ansa Second Hand",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/Ansasecondhand/",
      modified_at: "2019-08-22T13:08:09.000Z",
      location: {
        lat: 60.18437957763672,
        lon: 24.954736709594727,
        address: {
          street_address: "Agricolankatu 5",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Fleminginkadulta Agricolankadulle vuonna 2016 muuttanut Ansa Second Hand myy valikoitua vintagea arkeen ja juhlaan sopuhinnalla. Liikkeestä löytyy myös mm. ihania japanilaisia haoreja ja kimonoja 20-70 -luvuilta.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-11/ansa_second_hand_varikas_vintageparatiisi_c_ansa_second_hand_linda_packalen_location_only.jpeg?h=be53275c&itok=asIGnxG4",
            copyright_holder: "Ansa Second Hand / Linda Packalén",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:68", name: "SecondHand" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3193",
      name: {
        fi: "Antiikkikauppa Ritva Blomquist",
        en: "Antiikkikauppa Ritva Blomquist",
        sv: "Antiikkikauppa Ritva Blomquist",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "",
      modified_at: "2020-08-31T07:12:03.000Z",
      location: {
        lat: 60.16427230834961,
        lon: 24.946260452270508,
        address: {
          street_address: "Pikku Roobertinkatu 5",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Paljon astioita, koruja, vanhoja Marimekon kankaita, valaisimia jne. Kaikki tavara ei ole kauhean vanhaa, mutta hauskaa. Antiikkiaarteita on myös tarjolla ja hyviä keräilyesineitä.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:69", name: "Antiques" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2598",
      name: {
        fi: "Antiikkiliike R. Muuri",
        en: "Antiikkiliike R. Muuri",
        sv: "Antikaffär R. Muuri",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://antiikki.fi",
      modified_at: "2019-08-22T13:20:26.000Z",
      location: {
        lat: 60.16719436645508,
        lon: 24.940563201904297,
        address: {
          street_address: "Lönnrotinkatu 3",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Antiikkiliike R. Muuri tarjoaa kattavan valikoiman korkeatasoisia antiikki- ja design-esineitä 1700 - 1900 -luvuilta.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:69", name: "Antiques" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3034",
      name: {
        fi: "Antikvariaatti Kirjava Lintu",
        en: "Antikvariaatti Kirjava Lintu",
        sv: "Antikvariat Kirjava Lintu",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.facebook.com/antikvariaattikirjavalintu/",
      modified_at: "2019-08-22T13:22:14.000Z",
      location: {
        lat: 60.16795349121094,
        lon: 24.939104080200195,
        address: {
          street_address: "Yrjönkatu 21",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Antikvaarinen kirjakauppa Kirjava Lintu palvelee kirjallisuuden ystäviä Helsingin keskustassa.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:100", name: "Antiquariat" },
        { id: "matko2:101", name: "BookStore" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4053",
      name: {
        fi: "Antikvariaatti Punainen Planeetta",
        en: "Antikvariaatti Punainen Planeetta",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.punainenplaneetta.fi/",
      modified_at: "2020-08-10T12:15:48.000Z",
      location: {
        lat: 60.1871337890625,
        lon: 24.957265853881836,
        address: {
          street_address: "Harjutori 12",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Punainen Planeetta on vuonna 2007 perustettu helsinkiläinen antikvariaatti joka ostaa ja myy suomenkielistä kirjallisuutta. Yleisdivari jonka valikoimassa on myös kattavasti sci-fi- ja fantasiakirjallisuutta sekä rockmusiikkia käsitteleviä kirjoja.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:100", name: "Antiquariat" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2718",
      name: {
        fi: "Anton & Anton Kruununhaka",
        en: "Anton & Anton Kruununhaka",
        sv: "Anton & Anton Kronohagen",
        zh: "安东&安东 - 格鲁努哈卡店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.antonanton.fi",
      modified_at: "2019-11-18T11:52:15.000Z",
      location: {
        lat: 60.1722412109375,
        lon: 24.956281661987305,
        address: {
          street_address: "Mariankatu 18",
          postal_code: "00170",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Anton & Antonista löydät kattavan valikoiman sesongin mukaisia tuoreita lihoja, leipiä, juustoja, hedelmiä ja vihanneksia sekä pientuottajien herkkuja. \r\n\r\nPalvelutiski on jokaisen Anton & Anton -ruokakaupan sielu ja sydän. Toinen Anton & Anton -ruokakauppa sijaitsee Ullanlinnassa. Anton & Anton kioskit löytyvät Kalliosta Karhupuistosta sekä Mall of Triplasta.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/AetAKruna-10_0a5d70ab-c8cb-44ea-ac0a-85d4e9b6ffda.jpg?h=44d875f0&itok=KYAA_qRM",
            copyright_holder: "Anton & Anton",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:103", name: "Grocery" },
        { id: "matko2:145", name: "Organic" },
        { id: "matko2:a-:Curated", name: "Curated" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2719",
      name: {
        fi: "Anton & Anton Ullanlinna",
        en: "Anton & Anton Ullanlinna",
        sv: "Anton & Anton Ulrikasborg",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.antonanton.fi",
      modified_at: "2019-11-18T11:52:36.000Z",
      location: {
        lat: 60.15921401977539,
        lon: 24.946313858032227,
        address: {
          street_address: "Kapteeninkatu 26",
          postal_code: "00140",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Anton & Antonista löytyy kattava valikoima sesongin mukaisia tuoreita lihoja, leipiä, juustoja, hedelmiä ja vihanneksia sekä pientuottajien herkkuja. Palvelutiski on Anton & Anton -ruokakaupan sielu ja sydän. Ullanlinnan kaupassa voi myös nauttia aamupalasta sekä lounaasta .\r\n\r\nToinen Anton & Anton -ruokakauppa sijaitsee Kruununhaassa. Anton & Anton kioskit löytyvät Kalliosta Karhupuistosta sekä Mall of Triplasta.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/AetAKorkkari-43_b90cc2ca-4482-44c6-b34e-0872818be7e9.jpg?h=aab98da7&itok=TJ_Zg__t",
            copyright_holder: "Anton & Anton",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:103", name: "Grocery" },
        { id: "matko2:145", name: "Organic" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2594",
      name: { fi: "Apollo Karaoke Bar", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.apolloliveclub.fi",
      modified_at: "2018-07-13T10:27:42.000Z",
      location: {
        lat: 60.16858673095703,
        lon: 24.939104080200195,
        address: {
          street_address: "Mannerhemintie 16",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Helsingin keskeisimmällä paikalla sijaitseva karaoketila löytyy Apollo Clubin kellarikerroksesta. Täällä kaikki halukkaat pääsevät valitsemaan oman kappaleensa ja vuorollaan esiintymään illan taiteilijana. Apollon karaokessa ei lauleta otsa rypyssä, vaan tärkeintä on viihtyminen ja hauskanpito. Tulet sitten laulamaan tai kuuntelemaan, olet tervetullut viettämään hyvää iltaa karaoken parissa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/apollo_karaoke.jpg?h=549c026f&itok=jG4KD9we",
            copyright_holder: "Julius Konttinen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:50", name: "Nightclub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:106", name: "Karaoke" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          {
            weekday_id: 5,
            opens: "22:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "22:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1212",
      name: {
        fi: "Apollo Live Club",
        en: "Apollo Live Club",
        sv: "Apollo Live Club",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.apolloliveclub.fi",
      modified_at: "2018-07-13T10:28:22.000Z",
      location: {
        lat: 60.168575286865234,
        lon: 24.939382553100586,
        address: {
          street_address: "Mannerheimintie 16",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Apollo Live Club on Forumin vanhan elokuvateatterin tiloihin lokakuussa 2007 avattu ohjelmaravintola. Viikonloppuisin Apollo Live Club yhdistyy Forumin sisäpihalla olevan Apollo Street Barin kanssa suureksi yökerhoksi ja liveclubiksi. Apollo Live Clubin puolella live-musiikista vastaavat Pohjoismaiden kovimmat cover bändit, jotka soittavat viikonloppuisin aina klo 03 asti. Viikolla ja alkuilloissa on monipuolista ohjelmaa Stand up -illoista teatteriesityksiin ja tunnettujen artistien keikkoihin. Apollon kellarista löytyy myös viikonloppuisin suosittu karaoke.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/20160903_fullres_nea7980.jpg?h=6f8e8448&itok=HFCy2W4n",
            copyright_holder: "Nea Helminen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:50", name: "Nightclub" },
        { id: "matko2:53", name: "LiveMusic" },
        { id: "matko2:15", name: "Banquet" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          {
            weekday_id: 5,
            opens: "22:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "22:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2592",
      name: { fi: "Apollo Street Bar", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.apolloliveclub.fi",
      modified_at: "2019-10-01T14:56:02.000Z",
      location: {
        lat: 60.16887283325195,
        lon: 24.938879013061523,
        address: {
          street_address: "Mannerheimintie 16",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Street Bar on Forumin kauppakeskuksen yhteydessä sijaitseva rento baari joka yhdistyy viikonloppuisin Apollo live clubin kanssa yökerhoksi. Valikoimasta löytyy oluita, viinejä sekä maukkaita toasteja.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/street_bar_1.jpg?h=d3a01fab&itok=yo35Dd_Z",
            copyright_holder: "Henri Juvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/street_bar_2.jpg?h=ed539dbc&itok=R00fW8R5",
            copyright_holder: "Henri Juvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:50", name: "Nightclub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:148", name: "Club" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "15:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "15:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "15:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "15:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Ikäraja ennen klo 21 18v. ja sen jälkeen 24v.",
      },
    },
    {
      id: "2593",
      name: { fi: "Apollo Terrace Bar", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://apolloliveclub.fi/apollo-terrace-bar",
      modified_at: "2020-04-28T09:18:07.000Z",
      location: {
        lat: 60.16825485229492,
        lon: 24.940065383911133,
        address: {
          street_address: "Mannerheimintie 16",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Sisäpihalla sijaitsevan, katetun ja lämmitetyn terassin sisäänkäynti tapahtuu Kalevankatu 1:stä keskeltä Helsingin suosituinta baaritihentymää. Terrace Bar on avoinna toukokuusta syyskuuhun maanantaista sunnuntaihin kello 16-04.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/terrace_bar_1.jpg?h=5a53ebeb&itok=2gtCMV_j",
            copyright_holder: "Henri Juvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/terrace_bar_2.jpg?h=b3660f0d&itok=rm-TMP6-",
            copyright_holder: "Henri Juvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:50", name: "Nightclub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:148", name: "Club" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "18:00:00",
            closes: "04:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Avoinna toukokuu-syyskuu välillä",
      },
    },
    {
      id: "2960",
      name: {
        fi: "Arabia Store Esplanadi",
        en: "Arabia Store Esplanadi",
        sv: "Arabia Store Esplanadi",
        zh: "阿拉比亚埃斯普拉纳蒂专卖店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.arabia.fi/arabiasta/arabia-store-esplanadi",
      modified_at: "2019-08-22T14:47:48.000Z",
      location: {
        lat: 60.16794967651367,
        lon: 24.94967269897461,
        address: {
          street_address: "Pohjoisesplanadi 23",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arabia-konseptimyymälä Pohjoisesplanadilla tarjoaa kuluttajille Arabian rakastetut kuviot ja klassiset muodot Arabian koko tuotevalikoiman muodossa. Suomalaisten rakastaman kattausbrändin ensimmäinen oma myymälä avasi ovensa huhtikuussa 2017. Arabialla on ollut vahva sija suomalaisissa kodeissa kattaen sekä arjen että juhlan sukupolvesta toiseen jo yli 140 vuoden ajan.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/ArabiaStoreEsplanadi8.jpg?h=57fad75c&itok=yhFaErFx",
            copyright_holder: "Fiskars Finland Oy Ab",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/ArabiaStoreEsplanadi3.jpg?h=cec72784&itok=MtpELT8i",
            copyright_holder: "Fiskars Finland Oy Ab",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/ArabiaStoreEsplanadi1.jpg?h=9759c69f&itok=tMPIeHwo",
            copyright_holder: "Fiskars Finland Oy Ab",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:67", name: "InteriorDesign" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "803",
      name: { fi: "Arabianrannan Portaali", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.arabianrannanportaali.fi/#",
      modified_at: "2020-05-04T08:07:55.000Z",
      location: {
        lat: 60.209354400634766,
        lon: 24.978656768798828,
        address: {
          street_address: "Arabiankatu 12",
          postal_code: "00560",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ravintolan yhteydessä on käytössä 3 kpl neuvottelutiloja 6-8 henkilölle\r\nEnsimmäisen kerroksen Briefing Center on mitoitettu noin 30 henkilölle\r\nToisen kerroksen Showroom tarjoaa koulutus- ja neuvottelutilat jopa 60 henkilölle. Lisäksi 8. kerroksessa on uusittu saunatila sekä kokoustamiseen että saunomiseen 15-24 henkilölle",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:18", name: "SaunaMeeting" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3336",
      name: {
        fi: "Arbis, Helsingin kaupungin ruotsinkielinen työväenopisto",
        en: null,
        sv: "Svenska arbetarinstitutet, Arbis i Helsingfors",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://www.hel.fi/arbis/sv/suomeksi-in-english/arbis-suomeksi",
      modified_at: "2018-06-14T08:22:20.000Z",
      location: {
        lat: 60.17374801635742,
        lon: 24.9299259185791,
        address: {
          street_address: "Dagmarinkatu 3",
          postal_code: "00100",
          locality: "Helsingfors",
        },
      },
      description: {
        intro: null,
        body:
          "Helsingin kaupungin ruotsinkielinen työväenopisto on maan suurin ruotsinkielinen kansalaisopisto. Rakennuksessa on myös kahvila, galleria ja kirjasto.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-06/arbis_5_c_helsingin_kaup_aineistopankki_patrik_lindstrom.jpg?h=de4b3c71&itok=zBh2-nxp",
            copyright_holder:
              "Helsingin kaupungin aineistopankki / Patrik Lindström",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:226", name: "WORK & STUDY" },
        { id: "matko2:22", name: "Gallery" },
        { id: "matko2:213", name: "Library" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1750",
      name: { fi: "Arcada", en: null, sv: "Arcada", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.arcada.fi/congress",
      modified_at: "2010-05-03T08:51:41.000Z",
      location: {
        lat: 60.20140075683594,
        lon: 24.966520309448242,
        address: {
          street_address: "Jan-Magnus Janssonin aukio 1",
          postal_code: "00550",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arcadan ammattikorkeakoulu sijaitsee Arabianrannassa ainoastaan 6 km Helsingin ydinkeskustasta. Liikenneyhteydet keskustasta ovat loistavat.\r\n\r\nRakennus on moderni, valmistunut 2004. 300-paikkainen suuri auditorio mahdollistaa isompienkin konferenssien järjestämisen; pieneen auditorioon mahtuu noin 100 henkeä. Lisäksi vuokrattavissa on useita kokouskabinetteja, ryhmätyötiloja ja atk-luokkia. Tarjoilut hoitaa Fazer Amica. Mahdollisuus kokouspakettiin, joka sisältää aamukahvin, lounaan, iltapäiväkahvin tai päivällisen.",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:18", name: "SaunaMeeting" },
        { id: "matko2:110", name: "Auditorium" },
      ],
      opening_hours: { hours: null, openinghours_exception: null },
    },
    {
      id: "2424",
      name: {
        fi: "Arela Garden",
        en: "Arela Garden",
        sv: "Arela Garden",
        zh: "阿莱拉",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.arelastudio.com",
      modified_at: "2019-08-22T14:52:17.000Z",
      location: {
        lat: 60.16790771484375,
        lon: 24.946090698242188,
        address: {
          street_address: "Pohjoisesplanadi 33, Kämp Galleria",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kotimaisen perheyrityksen yksinkertaisia ja laadukkaita kashmir- ja puuvillavaatteita. Äidin ja kahden tyttären pyörittämässä yrityksessä tuotteet suunnitellaan itse, ja suunnittelussa panostetaan laadukkaisiin materiaaleihin, väreihin ja vaatteiden toimivuuteen. Valkoinen tila luo selkeän taustan Arela-tuotteiden intensiivisille väreille ja pehmeille tekstuureille.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/Arela_Store_Helsinki_1_Photo_Aku_Ha%25cc%2588yrynen.jpg?h=0f4230fa&itok=GEAsuTth",
            copyright_holder: "Arela",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/arela_ss18_7.jpg?h=bbce836c&itok=pp0A9Ppj",
            copyright_holder: "Arela",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/arela_ss18_17.jpg?h=bbce836c&itok=zShXCM-B",
            copyright_holder: "Arela",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2147",
      name: {
        fi: "Arena Center Myllypuro",
        en: "Arena Center Myllypuro",
        sv: "Arena Center Myllypuro",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://arenacenter.fi",
      modified_at: "2020-04-20T07:24:40.000Z",
      location: {
        lat: 60.22111892700195,
        lon: 25.07962989807129,
        address: {
          street_address: "Alakiventie 2",
          postal_code: "00920",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arena Center Myllypuro on monipuolinen liikunta- ja vapaa-ajankeskus, joka sijaitsee Myllypuron metroaseman läheisyydessä. Arena Center Myllypurossa voi pelata salibandyä, futsalia, käsipalloa ja koripalloa. Toimipisteestä löytyy kaksitoistaratainen viihdekeilahalli sekä kokous- ja saunatilat.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/arenacenter1.jpg?h=80da6c06&itok=aywt_0Pl",
            copyright_holder: "Arena Center oy",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/arenacenter2.jpg?h=d55dad6c&itok=CybmxAK3",
            copyright_holder: "Arena Center Oy",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/arenacenter3.jpg?h=ddffa542&itok=nJgxCio8",
            copyright_holder: "Arena Center Oy",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:129", name: "Bowling" },
        { id: "matko2:131", name: "SportCenter" },
        { id: "matko2:18", name: "SaunaMeeting" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko1:5", name: "NATURE & SPORTS" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "07:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "21:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "245",
      name: {
        fi: "Arena-näyttämö - Helsingin kaupunginteatteri",
        en: "Arena Theatre - Helsinki City Theatre",
        sv: "Arena-scenen - Helsingfors stadsteater",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://hkt.fi/nayttamot/arena-nayttamo/",
      modified_at: "2019-05-28T15:36:16.000Z",
      location: {
        lat: 60.18024444580078,
        lon: 24.950368881225586,
        address: {
          street_address: "Hämeentie 2",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arena-näyttämöllä on nähty Helsingin Kaupunginteatterin vauhdikkaita ja viihdyttäviä esityksiä syksystä 2010 alkaen. Ohjelmistossa on ollut komediaa ja musikaaleja, niin Broadwaylta kuin Suomestakin, stand upia, kotimaisia kantaesityksiä ja musiikintäyteisiä konsertti-iltoja.",
        images: [],
      },
      tags: [
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:26", name: "Theatre" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2580",
      name: {
        fi: "Arkadia International Bookshop",
        en: "Arkadia International Bookshop",
        sv: "Arkadia International Bookshop",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.arkadiabookshop.fi",
      modified_at: "2020-06-17T08:38:54.000Z",
      location: {
        lat: 60.17341995239258,
        lon: 24.929363250732422,
        address: {
          street_address: "Nervanderinkatu 11",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arkadia on iso käytettyjen kirjojen liike, galleria ja tapahtumapaikka.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/17545333_1666354030059742_4921257878739224287_o_0.jpg?h=540a5e01&itok=roumWlf6",
            copyright_holder: "Arkadia International Bookshop",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:100", name: "Antiquariat" },
        { id: "matko2:101", name: "BookStore" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "192",
      name: {
        fi: "Arkkitehtuurimuseo",
        en: "Museum of Finnish Architecture",
        sv: "Finlands Arkitekturmuseum",
        zh: "芬兰建筑博物馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.mfa.fi",
      modified_at: "2020-01-08T10:23:12.000Z",
      location: {
        lat: 60.16313934326172,
        lon: 24.947803497314453,
        address: {
          street_address: "Kasarmikatu 24",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arkkitehtuurimuseo tarjoaa moninaisia näkökulmia, keskustelun aiheita ja henkilökohtaisia kokemuksia arkkitehtuurista. Tavoitteena on aktivoida ihmisen yhteys rakennettuun ympäristöön ja tarjota välineitä arkkitehtuurin ymmärtämiseksi. Museossa on esillä koti- ja ulkomaisia vaihtuvia arkkitehtuurinäyttelyitä sekä pysyvä näyttely suomalaisesta arkkitehtuurista. Yleisöä palvelevat lisäksi kirjamyyntipiste, alan erikoiskirjasto ja arkisto. Museo järjestää runsaasti tapahtumia, kuten luentoja, opastuksia ja työpajoja.\r\n\r\nVapaa sisäänpääsy joka kuukauden ensimmäisenä perjantaina.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/arkkitehtuurimuseo_photo_juho_haavisto_mfa.jpg?h=f5395998&itok=vNFlNhwS",
            copyright_holder: "Juho Haavisto",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/arkkitehtuurimuseo_photomfa.jpeg?h=4f033cf5&itok=-pfUpxBN",
            copyright_holder: "Arkkitehtuurimuseo",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:40", name: "Museum" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:24", name: "Architecture" },
        { id: "matko2:19", name: "MainAttraction" },
        { id: "matko2:41", name: "Speciality" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2210",
      name: {
        fi: "Armas Design",
        en: "Armas Design",
        sv: "Armas Design",
        zh: "阿乐马斯设计",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.armasdesign.fi/",
      modified_at: "2019-05-02T10:01:17.000Z",
      location: {
        lat: 60.163230895996094,
        lon: 24.938297271728516,
        address: {
          street_address: "Fredrikinkatu 22",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Armas Design on Punavuoressa sijaitseva sisustusliike, jonka valikoimaan kuuluvat tekstiilit, huonekalut, keramiikka- ja lasiesineet sekä muut piensisustustuotteet. Myynnissä on tuotteita mm. merkeiltä HAY ja Muuto.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:67", name: "InteriorDesign" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3690",
      name: {
        fi: "Aron Soitin Herttoniemi",
        en: "Aron Soitin Herttoniemi",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://aronsoitin.fi",
      modified_at: "2019-08-22T15:09:47.000Z",
      location: {
        lat: 60.198097229003906,
        lon: 25.047100067138672,
        address: {
          street_address: "Sahaajankatu 14",
          postal_code: "00880",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aron Soitin on vuonna 1953 perustettu perinteikäs helsinkiläinen musiikkikauppa joka myy soittimia, audiolaitteita ja tarvikkeita. Nykyään Aron Soitin palvelee asiakkaitaan kahdessa myymälässä, Helsingin Herttoniemessä ja Vantaan Pakkalassa. Naapurissa keikkapaikka Aron Soitin Klubi.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:182", name: "Music" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:30:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:30:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:30:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:30:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:30:00",
            closes: "17:30:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3611",
      name: {
        fi: "Art Jazz & Inna in Style - kulttuuriklubi",
        en: "Art Jazz & Inna in Style - culture club",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.artjazz.fi",
      modified_at: "2019-01-28T09:07:50.000Z",
      location: {
        lat: 60.24922180175781,
        lon: 24.942365646362305,
        address: {
          street_address: "Sysimiehentie 39 A",
          postal_code: "00670",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Art Jazz on erilaisiin tapahtumiin keskittynyt keikkapaikka Paloheinässä.",
        images: [],
      },
      tags: [
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:173", name: "Jazz" },
        { id: "matko2:182", name: "Music" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2818",
      name: {
        fi: "Artbycork showroom",
        en: "Artbycork showroom",
        sv: "Artbycork showroom",
        zh: "软木艺术店 /哈卡涅米农贸市场",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/artbycork/",
      modified_at: "2019-08-22T15:18:14.000Z",
      location: {
        lat: 60.19670104980469,
        lon: 24.9510498046875,
        address: {
          street_address: "Mäkelänkatu 54",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "ARTBYCORK on nouseva suomalainen brändi joka yhdistää korkki-materiaalin ja suomalaisen minimalistisen muotoilun eko-tietoisille markkinoille, jotka etsivät hienostuneita, tyylikkäitä, kestäviä ja ympäristöä säästäviä vaihtoehtoja.\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:67", name: "InteriorDesign" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3890",
      name: {
        fi: "Artek 2nd Cycle",
        en: "Artek 2nd Cycle",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.artek.fi/2ndcycle/en/",
      modified_at: "2019-11-19T08:35:04.000Z",
      location: {
        lat: 60.16413116455078,
        lon: 24.94723129272461,
        address: {
          street_address: "Pieni Roobertinkatu 4-6",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Artek 2nd Cycle, design-klassikot toisella kierroksella. \r\n\r\nVuonna 2006 Artek alkoi kerätä käytettyjä Aalto-huonekaluja kirpputoreilta, vanhoista tehtaista, kouluista ja telakoilta. Niiden pohjalta perustettiin Artek 2nd Cycle eli uuden elämän saavien löytöjen myymäläkonsepti, joka esittelee pitkäikäisiä Artek-huonekaluja ja edistää samalla kestävää kuluttamista.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-11/2127650_artek_2nd_cycle_store_front_1_master.jpg?h=5ae27b7f&itok=6ptmXfbk",
            copyright_holder: "Artek",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:211", name: "Furniture" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2540",
      name: {
        fi: "Artek Helsinki",
        en: "Artek Helsinki",
        sv: "Artek Helsinki",
        zh: "阿尔泰克赫尔辛基旗舰店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.artek.fi/artekhelsinki/fi/",
      modified_at: "2020-02-04T13:02:47.000Z",
      location: {
        lat: 60.16813278198242,
        lon: 24.943281173706055,
        address: {
          street_address: "Keskuskatu 1B",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Artek Helsinki -lippulaivamyymälä tarjoaa inspiraatiota kahdessa kerroksessa. Myymälän valikoima on kiinnostava ja huolellisesti poimittu otos Artekin omista sekä kotimaisten ja merkittävimpien kansainvälisten designbrändien klassikoista ja uutuuksista. Lisäksi valikoimaa rikastuttavat tarkoin valikoidut sesonkiluonteiset tuotteet sekä vaihtuvat näyttelyt taiteen, arkkitehtuurin ja muotoilun parista.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/Artek_Helsinki_Store_1.jpg?h=1e39d196&itok=Vd_70z0j",
            copyright_holder: "Artek Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/Artek_Helsinki13857_Final_Hires.jpg?h=838732a3&itok=qHQFHMpG",
            copyright_holder: "Artek Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/Artek_Helsinki14205_Final_Hires.jpg?h=7d2cb43c&itok=SB_Cqs5t",
            copyright_holder: "Artek Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/Artek_Helsinki14326_Final_Hires.jpg?h=d0701129&itok=EK5DGB8Q",
            copyright_holder: "Artek Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:211", name: "Furniture" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "934",
      name: { fi: "Artisaani", en: "Artisaani", sv: "Artisaani", zh: "工匠" },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/ARTISAANI-115334705157631/",
      modified_at: "2019-08-26T12:04:50.000Z",
      location: {
        lat: 60.1682014465332,
        lon: 24.950910568237305,
        address: {
          street_address: "Unioninkatu 28",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Artisaanion toiminut vuodesta 1975 suomalaisten taidekäsityöläisten ja muotoilijoiden ylläpitämänä myymälänä. Tänään myymälää ylläpitää Pro Artisaani yhdistys. Myytävänä on noin 60 suomalaisen tai Suomessa työskentelevän taidekäsityöläisen uniikkiesineitä ja korkealuokkaista käsintehtyä studiotuotantoa.",
        images: [],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:259", name: "Craft" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:71", name: "Souvenirs" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3465",
      name: {
        fi: "Asbestos Art Space",
        en: "Asbestos Art Space",
        sv: "Asbestos Art Space",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/asbestosartspace1",
      modified_at: "2019-05-29T13:10:54.000Z",
      location: {
        lat: 60.19712829589844,
        lon: 24.951356887817383,
        address: {
          street_address: "Mäkelänkatu 45",
          postal_code: "00550",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Asbestos Art Space on tila taiteelle ja kulttuurille Helsingin Vallilassa. Tilaa pyörittää taiteilijavetoinen kollektiivi, Asbestos kollektiivi.",
        images: [],
      },
      tags: [
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:21", name: "Art" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4047",
      name: {
        fi: "Asemapäällikönhovi",
        en: "Asemapäällikönhovi Building",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://apk3.fi",
      modified_at: "2020-07-15T07:54:38.000Z",
      location: {
        lat: 60.19939422607422,
        lon: 24.94192123413086,
        address: {
          street_address: "Asemapäällikönkatu 3",
          postal_code: "00520",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Asemapäällikönhovi on arkkitehti Eino Tuompon suunnittelema ja vuonna 1976 valmistunut moni-käyttöinen rakennus, joka on tunnettu brutalistisesta arkkitehtuuristaan. Talo on mm. elokuvantekijöiden ja valokuvaajien suosikki. Rakennuksella on pitkä historia mediatuotannossa, sillä siellä on toiminut televisiostudio vuodesta 1976 lähtien. Televisiostudion lisäksi talossa on mm. 60 asuntoa, ruokakauppa, palvelinkeskus, toimistoja, ravintoloita, itsepalveluvarasto ja asuinsiiven ylimmässä kerroksessa uima-allas saunoineen.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-07/aph.jpg?h=e5aec6c8&itok=d9h8qzvD",
            copyright_holder: "Asemapäällikönhovi (c) Marko Peck",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:24", name: "Architecture" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3984",
      name: { fi: "Asian Aroma", en: "Asian Aroma", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/asianaroma101",
      modified_at: "2020-08-20T11:39:20.000Z",
      location: {
        lat: 60.198272705078125,
        lon: 24.9625301361084,
        address: {
          street_address: "Hämeentie 101",
          postal_code: "00550",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Asian Aroma on erikoistunut perinteisiin vietnamilaisiin ja valikoituihin kiinalaisiin annoksiin.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:197", name: "Vietnamese" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:80", name: "Asian" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "21:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3189",
      name: { fi: "Askarelli", en: "Askarelli", sv: "Askarelli", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.askarelli.fi",
      modified_at: "2019-08-26T12:08:51.000Z",
      location: {
        lat: 60.1688232421875,
        lon: 24.934602737426758,
        address: {
          street_address: "Annankatu 35",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Askarellista löytää askartelutarvikkeet niin arkeen kuin juhlaankin.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:224", name: "StationaryShop" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1085",
      name: { fi: "Astialiisa", en: "Astialiisa", sv: "Astialiisa", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.astialiisa.fi/",
      modified_at: "2020-08-18T07:38:47.000Z",
      location: {
        lat: 60.1800422668457,
        lon: 24.92432975769043,
        address: {
          street_address: "Runeberginkatu 59",
          postal_code: "00260",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Astialiisa on töölöläinen astiakauppa, jonka valikoimaan kuuluu laaja valikoima suomalaisia astioita 100 vuodelta: uusia ja vanhoja Arabian astioita sekä Iittalan ja Nuutajärven lasia. Astialiisassa on myös monipuolinen muumiosasto: astioita, leluja, magneetteja yms. Astialiisa järjestää keräilijöiden kanssa vaihtuvia näyttelyitä ja tapahtumia.\r\n",
        images: [],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:a-:JCB", name: "JCB" },
        { id: "matko2:69", name: "Antiques" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3638",
      name: {
        fi: "Astiaparatiisi",
        en: "Astiaparatiisi",
        sv: "Astiaparatiisi",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.astiaparatiisi.fi",
      modified_at: "2019-06-12T11:36:19.000Z",
      location: {
        lat: 60.18817901611328,
        lon: 24.953325271606445,
        address: {
          street_address: "Fleminginkatu 21",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Astiaparatiisi on astioihin, koruihin, kulta- ja hopeaesineisiin ja designtavaraan keskittynyt kauppa Kalliossa.",
        images: [],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:72", name: "Jewellery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "64",
      name: {
        fi: "Astoria-sali",
        en: "Astoria Ball Room",
        sv: "Astoria-salen",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://astoria-sali.fi/",
      modified_at: "2020-05-08T06:55:09.000Z",
      location: {
        lat: 60.163455963134766,
        lon: 24.942426681518555,
        address: {
          street_address: "Iso Roobertinkatu 14",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Astorian noin 200 neliöinen sali soveltuu hyvin monenlaisiin ja monenkokoisiin tilaisuuksiin aina seminaareista juhlaviin illallisiin. Yli kahdeksan metriä korkeasta salista löytyy suuri esiintymislava ja nouseva parvi, joka soveltuu esimerkiksi alkumaljojen nauttimiseen. Vuonna 1919 rakennettu sali edustaa uusklassista tyylisuuntaa ja seiniltä sekä katosta löytyykin ajan henkeen kuuluvia koristeellisia ornamentteja. Salin lattia on alkuperäistä tammiparkettia.",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:15", name: "Banquet" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1504",
      name: { fi: "Asuna", en: "Asuna", sv: "Asuna", zh: "阿苏娜" },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.asuna.fi",
      modified_at: "2019-03-19T14:56:05.000Z",
      location: {
        lat: 60.16368865966797,
        lon: 24.937820434570312,
        address: {
          street_address: "Fredrikinkatu 24",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Asuna on moderni designvaateliike naisille. Vahvat suomalaissuunnittelijat yhdessä kansainvälisten merkkien (mm. Comme des Garcons, Rundholz, Margaux Lonnberg, Vestiarium, Aalto, Christian Wijnants, House of Elliott, NO/AN ja M.L.Wright., Shiro Sakai) kanssa tekevät Asunan mallistoista kiinnostavia ja vaikuttavia. \r\n\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/asuna%203.JPG?h=04b08528&itok=ARExmivg",
            copyright_holder: "Asuna",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:44", name: "International" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:112", name: "Luxury" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2379",
      name: {
        fi: "Atelier Torbjörn Tillander",
        en: "Atelier Torbjörn Tillander",
        sv: "Atelier Torbjörn Tillander",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.tillander.com",
      modified_at: "2019-08-26T13:18:20.000Z",
      location: {
        lat: 60.167930603027344,
        lon: 24.947805404663086,
        address: {
          street_address: "Kluuvikatu 1",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Sunnittelee ja valmistaa koruja kotimaisena käsityönä parhaista jalometalleista, -kivistä ja helmistä.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:72", name: "Jewellery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2002",
      name: {
        fi: "Ateljé Finne",
        en: "Ateljé Finne",
        sv: "Ateljé Finne",
        zh: "费内餐厅",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.ateljefinne.fi/",
      modified_at: "2020-08-20T11:53:54.000Z",
      location: {
        lat: 60.17108917236328,
        lon: 24.92828941345215,
        address: {
          street_address: "Arkadiankatu 14",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Arkadiankatu 14:ta sijaitsi 1920-luvulla kuvanveistäjä Gunnar Finnen ateljee. 1960-luvulta tiloissa on toiminut Ravintola Ateljé Finne. Finnen menu koostuu pääosin korkealuokkaisista suomalaisista raaka-aineista kootuista menukokonaisuuksista.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/Atelje_Finne_5_w1700px.jpg?h=eebbabb7&itok=j2_35Dyv",
            copyright_holder: "Ateljé Finne",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:142", name: "SmartCasual" },
        { id: "matko2:147", name: "ModernNordic" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Keittiö sulkee klo 21",
      },
    },
    {
      id: "502",
      name: {
        fi: "Ateljee Bar",
        en: "Ateljee Bar",
        sv: "Ateljee Bar",
        zh: "工作室酒吧",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.raflaamo.fi/fi/helsinki/ateljee-bar",
      modified_at: "2020-01-07T12:05:37.000Z",
      location: {
        lat: 60.16783905029297,
        lon: 24.93851661682129,
        address: {
          street_address: "Yrjönkatu 26, Solo Sokos Hotel Torni",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vuodesta 1951 asti toiminut Ateljee Bar sijaitsee Hotelli Tornin ylimmässä kerroksessa. Ateljeen terassilta on hengästyttävät näköalat Helsingin kattojen ylle - aurinkoisella säällä voi nähdä merelle Tallinnaan saakka ja pimeällä kaupungin valot hehkuvat kirkkaana. Ateljee Bar, jonka mojitot ovat käsite jonka kaikki paikalliset tuntevat, tarjoaa laadukkaita juomia ystävällisen palvelun kera.\r\n\r\nRavintola Torni on suljettu 12/2019 alkaen hotellin peruskorjauksen ajaksi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/ateljee_bar_004_solol_sokos_hotel_torni_helsinki_ateljee_bar_2015_1.jpg?h=54737751&itok=lYKHs6BA",
            copyright_holder: "Hotelli Torni",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/ateljee%20bar%202.jpg?h=88723bf5&itok=AzxHWpwt",
            copyright_holder: "Raflaamo.fi",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/atelje%20bar.jpg?h=1213b3b3&itok=JhAu82R0",
            copyright_holder: "Raflaamo.fi",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:218", name: "Viewpoint" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Ravintola Torni on suljettu 12/2019 alkaen hotellin peruskorjauksen ajaksi.",
      },
    },
    {
      id: "3810",
      name: { fi: "Ateljee Tapaus", en: "Ateljee Tapaus", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/tapausry/",
      modified_at: "2020-02-04T13:35:57.000Z",
      location: {
        lat: 60.260963439941406,
        lon: 25.02515983581543,
        address: {
          street_address: "Viertolantie 2-4",
          postal_code: "00730",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Taiteilijayhdistys Tapaus ry toimii Tapanilan aseman vieressä, Tapanilan vanhassa tehdaskiinteistössä. Taiteilijayhdistys vuokraa työtiloja luovien alojen tekijöille. Tapaus ry järjestää avoimien ovien päiviä, jolloin yleisö saa tulla tutustumaan taiteilijatyöhuoneisiin ja yhdistyksen toimintaan. Ateljee Tapauksessa jäsenet järjestävät myös omia näyttelyitään.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2805",
      name: {
        fi: "Ateneum Bistro",
        en: "Ateneum Bistro",
        sv: "Ateneum Bistro",
        zh: "阿黛浓餐厅 - 阿黛浓美术馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.ateneumbistro.fi/",
      modified_at: "2020-08-20T12:09:27.000Z",
      location: {
        lat: 60.16998291015625,
        lon: 24.944114685058594,
        address: {
          street_address: "Kaivokatu 2, Ateneumin taidemuseo",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ateneum Bistro tarjoilee Ateneumin vieraille ja muille ruokafiilistelijöille klassista suomalaista bistroruokaa modernilla twistillä. Ravintola tarjoilee lounasta, illallista sekä kahvia ja pientä makeaa Ateneumin taidemuseon aukioloaikojen mukaisesti.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/15443094_991898290922262_3109764124710108058_o.jpg?h=a1e1a043&itok=kUBmYOWG",
            copyright_holder: "Ateneum Bistro / Ateneumin taidemuseo",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:297", name: "Lunch" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Avoinna museon aukioloaikojen mukaisesti",
      },
    },
    {
      id: "187",
      name: {
        fi: "Ateneumin taidemuseo",
        en: "Ateneum Art Museum",
        sv: "Konstmuseet Ateneum",
        zh: "阿黛浓美术馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.ateneum.fi",
      modified_at: "2020-08-25T13:49:57.000Z",
      location: {
        lat: 60.17008972167969,
        lon: 24.94409942626953,
        address: {
          street_address: "Kaivokatu 2",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ateneum on maan tunnetuin taidemuseo ja Suomen taiteen koti. Ateneumin kuvat ovat iskostuneet suomalaisten yhteiseen muistiin: rakastetut kokoelmat kattavat aikakauden 1800-luvulta moderniin. Kotimaiset ja kansainväliset menestysnäyttelyt avaavat uusia näkökulmia menneeseen ja tulevaan. \r\n\r\nVärikäs Suomen taiteen tarina -näyttely on Ateneumin kokoelmien juhlaa. Näyttely johdattaa kävijän läpi Suomen taiteen kehityskulun vuodesta 1809 aina 1960-luvulle asti. Löydä omat lempiteoksesi ja ihastu uusiin tuttavuuksiin!\r\n\r\nNäyttelyiden lisäksi Ateneum järjestää säännöllisesti työpajoja, luentoja, opastuksia ja klubeja. \r\n\r\nMuseossa on myös museokauppa sekä Ateneum Bistro.\r\n\r\nAteneumin taidemuseo on osa Kansallisgalleriaa yhdessä nykytaiteen museo Kiasman ja Sinebrychoffin taidemuseon kanssa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-02/ateneum_c_ateneumin_taidemuseo_ville_malja_location_only.jpg?h=ff011c20&itok=yhPGTeAq",
            copyright_holder: "Ateneumin taidemuseo / Ville Malja",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:40", name: "Museum" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko1:4", name: "SIGHTS & ATTRACTIONS" },
        { id: "matko2:21", name: "Art" },
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:24", name: "Architecture" },
        { id: "matko2:19", name: "MainAttraction" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception:
          "Ks. poikkeusaukioloajat kotisivuilta\r\nIlmaispäivät ovat toistaiseksi peruttu",
      },
    },
    {
      id: "3642",
      name: {
        fi: "Au3 Kultasepät",
        en: "Au3 Goldsmiths",
        sv: "Au3 Guldsmeder",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.au3.fi",
      modified_at: "2019-08-19T09:00:47.000Z",
      location: {
        lat: 60.16864776611328,
        lon: 24.951152801513672,
        address: {
          street_address: "Unioninkatu 27 A",
          postal_code: "00170",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Au3 Kultasepät edustaa suomalaisen korumuotoilun kärkeä ja kultaseppien kollektiivi on toteuttanut koru-unelmia jo vuodesta 2003. Sepät suunnittelevat ja valmistavat kaikki korut itse alusta alkaen Helsingissä. \r\n\r\nLaatu on yksi tärkeimmistä kriteereistä ja omistautuminen näkyy jokaisen korun pienimmässäkin yksityiskohdassa. Modernit korumallit ovat klassisen kauniita ja kestävät aikaa. Sepät tekevät myös täysin uniikkeja koruja tilaustyönä. Laadukkaat materiaalit hankitaan eettisesti ja vastuullisesti toimivilta toimittajilta.",
        images: [],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:72", name: "Jewellery" },
        { id: "matko2:112", name: "Luxury" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Arkipyhäpäivinä suljettu",
      },
    },
    {
      id: "288",
      name: {
        fi: "Auditorio Pasila",
        en: "Auditorio Pasila",
        sv: "Auditorio Pasila",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.auditoriopasila.fi/",
      modified_at: "2020-04-22T07:21:19.000Z",
      location: {
        lat: 60.19636154174805,
        lon: 24.928590774536133,
        address: {
          street_address: "Pasilankatu 4 B, 3 krs",
          postal_code: "00240",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Auditorio on viihtyisä ja toimiva kokoustila hyvien kulkuyhteyksien varrella.  Auditorion yhteydessä on myös tulkkaustilat sekä lämpiö, joka sopii mainiosti pienimuotoisten tilaisuuksien ja tarjoilujen järjestämiseen",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:110", name: "Auditorium" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2365",
      name: {
        fi: "Auditorio Village Works",
        en: "Auditorium Village Works",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://villageworks.com/fi/kokoustilat/",
      modified_at: "2019-11-14T15:17:07.000Z",
      location: {
        lat: 60.15598678588867,
        lon: 24.884197235107422,
        address: {
          street_address: "Heikkiläntie 7",
          postal_code: "00210",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Village Worksin auditorio on erinomainen vaihtoehto niin kokouksiin ja seminaareihin kuin vapaamuotoisiin tilaisuuksiin. Kaarevasta ja nousevasta tilasta löytyy 90 kiinteää istumapaikkaa sekä moderni kokoustekniikka. Salissa on myös pelikonsoli vapaa-ajan illanviettoja varten. Pitopalvelu järjestää tarvittaessa tarjoiluja auditorion viereiseen valoisaan aulatilaan. Auditorion voi varata myös yhdessä samassa rakennuksessa sijaitsevan sauna- ja edustustila Santorinin kanssa. Kattoterassin saunatilassa kokouspäivä jatkuu mukavasti rennossa ilmapiirissä.",
        images: null,
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:110", name: "Auditorium" },
        { id: "matko2:18", name: "SaunaMeeting" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:111", name: "FreeCatering" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2876",
      name: {
        fi: "Aurinkolahden uimaranta",
        en: "Aurinkolahti beach",
        sv: "Solviks badstrand",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://palvelukartta.hel.fi/unit/40258",
      modified_at: "2020-05-18T13:22:46.000Z",
      location: {
        lat: 60.20166015625,
        lon: 25.156417846679688,
        address: {
          street_address: "Urheilukalastajankuja 1",
          postal_code: "00990",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Suuri ja pehmeähiekkainen Aurinkolahden ranta houkuttelee kaikenikäisiä kävijöitä yhdelle kaupungin parhaista uimarannoista.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-07/konstalinkola_140801_12319.jpg?h=bab2ff89&itok=t5ZyUjV_",
            copyright_holder: "Konsta Linkola",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:31", name: "Swimming" },
        { id: "matko2:32", name: "Beach" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Uimavalvojat paikalla 1.6.-9.8.2020 ma-su 10-20",
      },
    },
    {
      id: "1264",
      name: { fi: "Aussie Bar", en: "Aussie Bar", sv: "Aussie Bar", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.aussiebar.net",
      modified_at: "2018-07-13T10:35:18.000Z",
      location: {
        lat: 60.16994857788086,
        lon: 24.9329833984375,
        address: {
          street_address: "Salomonkatu 5 (Kamppi)",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Aussie Bar is a place to feel at home with scenes from Australia's famous backyards, enter into a tranquil rainforest at the front and end up in the heartlands of the great Aussie outback, sit down to a refreshing cold beer with a mixed crowd of Aussie and Kiwi men and women and soak up the tunes that you've grown to love. \r\n\r\nAustralialaisbaari jossa tarjolla mm. australialaisia ja uusiseelantilaisia olutmerkkejä. Musiikin ja iloisen meiningin lisäksi voit seurata urheilua ruudulta.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "05:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "05:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3894",
      name: {
        fi: "Autokorjaamo Starcar System Oy",
        en: "Autokorjaamo Starcar System Oy",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.starcarsystem.fi/",
      modified_at: "2019-11-20T09:53:31.000Z",
      location: {
        lat: 60.25882339477539,
        lon: 25.061155319213867,
        address: {
          street_address: "Kytkintie 38",
          postal_code: "00770",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Monimerkkikorjaamo Tattarisuolla.",
        images: [],
      },
      tags: [{ id: "matko1:227", name: "SERVICES" }],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:30:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1001",
      name: {
        fi: "AVA Galleria",
        en: "AVA Galleria",
        sv: "AVA Galleria",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://avagalleria.com",
      modified_at: "2020-01-22T12:42:02.000Z",
      location: {
        lat: 60.17061996459961,
        lon: 24.929931640625,
        address: {
          street_address: "Pohjoinen Rautatiekatu 17 B 8",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "AVA Galleria on pieni galleria keskustassa. Galleria järjestää näyttelyitä ja on mukana useilla taidemessuilla ympäri maailmaa. Helsingin galleriassa nähdään suomalaisten nykytaiteilijoiden lisäksi vaihtuvia ulkomaalaisia näyttelyitä. Gallerian näyttelyt vaihtuvat kolmen viikon välein.",
        images: [],
      },
      tags: [
        { id: "matko1:6", name: "MUSEUMS & GALLERIES" },
        { id: "matko2:22", name: "Gallery" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3789",
      name: {
        fi: "Avoin taidekoulu",
        en: "Open Art School",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.avointaidekoulu.net",
      modified_at: "2019-08-14T09:52:10.000Z",
      location: {
        lat: 60.19050979614258,
        lon: 24.976558685302734,
        address: {
          street_address: "Vanha Talvitie 9",
          postal_code: "00580",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Avoin taidekoulu opastaa intuitiivisen maalaamisen taitoon ja pysähtymiseen taiteen äärelle ohjaamalla opiskelijoita meditatiivisen lähestymistavan kautta taiteellisen ilmaisun heräämiseen ja syvenemiseen. \r\n\r\nAvoin taidekoulu tarjoaa mahdollisuuden osallistua intensiiviseen 3 +1-vuotiseen kuvataiteen opetusohjelmaan. Koulusta löytävät oman paikkansa niin aktiiviset kuvataiteen harrastajat kuin tulevat taiteilijatkin. Koulu ei edellytä aiempia taideopintoja.",
        images: [],
      },
      tags: [{ id: "matko1:226", name: "WORK & STUDY" }],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2898",
      name: {
        fi: "B-Side Bar",
        en: "B-Side Bar",
        sv: "B-Side Bar",
        zh: "B-边酒吧",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.teurastamo.com/locations/b-side-bar/",
      modified_at: "2018-11-01T15:18:28.000Z",
      location: {
        lat: 60.190223693847656,
        lon: 24.97218132019043,
        address: {
          street_address: "Työpajankatu 2",
          postal_code: "00580",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Baari, jossa ruutupaitaiset baarimikot, vihreät seinälaatat ja rehelliset cocktailit palauttavat hetkeksi takaisin 70-luvulle. Listalla on käsityöoluita, amerikkalaisia viskejä sekä laadukkaita viinejä. DJ soittaa viikonloppuisin ja viikolla järjestetään usein tapahtumia.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/Teurastamo-2016-B_Side_Bar-001-1024x681.jpg?h=b4e93aa2&itok=U8PkoF9U",
            copyright_holder: "B-Side Bar",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:a-:Curated", name: "Curated" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "13:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "13:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2897",
      name: { fi: "B-Smokery", en: "B-Smokery", sv: "B-Smokery", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://bsmokery.fi/",
      modified_at: "2020-08-20T12:10:36.000Z",
      location: {
        lat: 60.190460205078125,
        lon: 24.97245979309082,
        address: {
          street_address: "Työpajankatu 2 R1 C",
          postal_code: "00580",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "B-Smokery on pieni BBQ-ravintola Teurastamon alueella, joka savustaa lähes kaiken.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/10623738_924782597557952_2218235485659570202_o.jpg?h=d45ac79b&itok=fOun-Pvg",
            copyright_holder: "B-Smokery",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:187", name: "Beef" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2242",
      name: {
        fi: "Baarikärpänen",
        en: "Baarikärpänen",
        sv: null,
        zh: '"飞蝇酒吧"',
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.baarikarpanen.fi",
      modified_at: "2019-09-09T09:07:52.000Z",
      location: {
        lat: 60.17002868652344,
        lon: 24.927797317504883,
        address: {
          street_address: "Pohjoinen Rautatiekatu 21",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vuonna 2001 avattu Baarikärpänen on yksi Helsingin yöelämän klassikoista. Rento ilmapiiri, ystävällinen henkilökunta sekä edulliset ja maistuvat juomat takaavat aina ensiluokkaiset biletysolosuhteet. Erillisessä karaoke-tilassa pääsee laulamaan klo 23 alkaen.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/20170318_bk_jpl0002.jpg?h=1c9b88c9&itok=Lw39xioi",
            copyright_holder: "Jarkko Laine",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/20170325_bk_jpl0011.jpg?h=1a3b480c&itok=4D9Umw3o",
            copyright_holder: "Jarkko Laine",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/bk_170324_haj_4662.jpg?h=1c9b88c9&itok=og6oHqbN",
            copyright_holder: "Henri Juvonen",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:50", name: "Nightclub" },
        { id: "matko2:106", name: "Karaoke" },
        { id: "matko2:148", name: "Club" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "21:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "21:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "21:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "21:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "21:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "21:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "K-18",
      },
    },
    {
      id: "3214",
      name: { fi: "Bacco", en: "Bacco", sv: "Bacco", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bacco.fi",
      modified_at: "2020-10-20T13:34:26.000Z",
      location: {
        lat: 60.16498947143555,
        lon: 24.93490982055664,
        address: {
          street_address: "Lönnrotinkatu 18",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bacco tarjoaa herkkuja Italian eri osista. Suussasulavat pitsat tehdään tuoreista aineksista ja pitkään kypsyttämällä. Ruoka on yksinkertaista ja lista vaihtuu usein riippuen saatavilla olevista sesongin aineksista. Ammattitaitoiset pitsantekijät ja kokit valmistavat kaiken käsityönä joka päivä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-02/bacco_food_juha-pekka_laakio.jpg?h=b5799c8a&itok=NPry-hX8",
            copyright_holder: "Juha-Pekka Laakio / Ravintola Bacco",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-02/bacco_drinks_juha-pekka_laakio.jpg?h=97d6e9e3&itok=ZMuFL725",
            copyright_holder: "Juha-Pekka Laakio / Ravintola Bacco",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:171", name: "Italian" },
        { id: "matko2:186", name: "Pizza" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Lounas ti-pe 11-14.30, illallinen ti-to 16-22, pe-la 16-24",
      },
    },
    {
      id: "752",
      name: {
        fi: "Balderin sali",
        en: "Balderin Sali Hall",
        sv: "Balders sal",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.balder.fi/articles/341/",
      modified_at: "2020-04-20T09:19:30.000Z",
      location: {
        lat: 60.169029235839844,
        lon: 24.954730987548828,
        address: {
          street_address: "Aleksanterinkatu 12",
          postal_code: "00170",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Balderin talon vuodelta 1813 on suunnitellut Pehr Granstedt. \r\n\r\nRakennuksessa sijaitseva Café Balder sijaitsee talon 3. kerroksessa upean juhlasalin yhteydessä. Kahvila tarjoilee herkullista kotiruokaa tuoreista raaka-aineista, ja leipoo kaikki leivät ja pullat itse.\r\n\r\nBalderin sali on vuokrattavissa erilaisia tapahtumia ja tilaisuuksia varten. Talossa järjestään paljon yleisölle avoinna olevia tapahtumia.\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko1:225", name: "VENUES" },
        { id: "matko2:15", name: "Banquet" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2767",
      name: { fi: "Bali Brunch", en: "Bali Brunch", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/balibrunchhelsinki",
      modified_at: "2020-08-20T12:32:44.000Z",
      location: {
        lat: 60.16887664794922,
        lon: 24.93357276916504,
        address: {
          street_address: "Urho kekkosen katu 1, Kamppi 6k Food Market",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Pieni, suosittu indonesialainen ravintola Kampin keskuksen 6k Food Marketissa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-06/bali.jpg?h=3e353c31&itok=oGLcWpx1",
            copyright_holder: "Bali Brunch",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:175", name: "StreetFood" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3409",
      name: { fi: "Balmuir", en: "Balmuir", sv: "Balmuir", zh: "薄穆乐" },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.balmuir.fi",
      modified_at: "2019-11-13T13:23:03.000Z",
      location: {
        lat: 60.167911529541016,
        lon: 24.948528289794922,
        address: {
          street_address: "Pohjoisesplanadi 25-27",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Balmuir on kansainvälinen lifestyle-brändi, jonka tuotevalikoima muodostuu sisustus- ja lahjatuotteista, muotiasusteista ja luonnonkosmetiikasta. Tuotteet valmistetaan hienoimmista luonnonmateriaaleista perinteisiä käsityömenetelmiä kunnioittaen.",
        images: [],
      },
      tags: [
        { id: "matko2:200", name: "Cosmetics" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:258", name: "Bags" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:112", name: "Luxury" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Kesäsunnuntaisin 12-16",
      },
    },
    {
      id: "3720",
      name: { fi: "Bangkok 9", en: "Bangkok 9", sv: "Bangkok 9", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bangkok9restaurant.com/",
      modified_at: "2020-08-20T12:35:24.000Z",
      location: {
        lat: 60.17002487182617,
        lon: 24.942075729370117,
        address: {
          street_address: "Kaivokatu 8, City Center, 2.krs",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bangkok9 City Centerissä tarjoilee tuoreita, fusion tyylisiä thaimaalaisia katuruokia ja ravintola-annoksia, aitoa thaimaalaista, täynnä makuja.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:193", name: "Thai" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "20:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3604",
      name: {
        fi: "Banu Cafe & Bakery",
        en: "Banu Cafe & Bakery",
        sv: "Banu Cafe & Bakery",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://banu.fi/",
      modified_at: "2020-08-20T12:37:19.000Z",
      location: {
        lat: 60.15776443481445,
        lon: 24.90934181213379,
        address: {
          street_address: "Heino Kasken katu 4 C",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Banu Cafe on persialainen fuusiokahvila Jätkäsaaressa joka tarjoilee persialaista, kansainvälistä, perinteistä kasvis, ja vegaani, ruokaa sekä leivonnaisia. Viikonloppuisin vegaaninen brunssi  klo 11-15.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:179", name: "MiddleEast" },
        { id: "matko2:234", name: "Vegan" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:117", name: "Vegetarian" },
        { id: "matko2:168", name: "Brunch" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3208",
      name: { fi: "Bar Bronco", en: "Bar Bronco", sv: "Bar Bronco", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/barbronco/",
      modified_at: "2018-07-13T10:38:00.000Z",
      location: {
        lat: 60.186546325683594,
        lon: 24.96160125732422,
        address: {
          street_address: "Hämeentie 23",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Lämminhenkinen gastropubi Sörkässä. Tarjolla runsas olut- sekä siiderivalikoima urheilua unohtamatta. Ravintolassa näkyy kaikki sporttikanavat, joten tärkeinkään matsi ei jää näkemättä.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3209",
      name: {
        fi: "Bar Bronco 2",
        en: "Bar Bronco 2",
        sv: "Bar Bronco 2",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.barbronco.fi/bronco-2/",
      modified_at: "2019-08-26T11:21:37.000Z",
      location: {
        lat: 60.163246154785156,
        lon: 24.941164016723633,
        address: {
          street_address: "Iso Roobertinkatu 15",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Bronco on tunnelmallinen gastropubi Isolla Roballa. Tässä kaupunkilaisten olohuoneessa voit nauttia burgereista sekä laajasta olut- ja siiderivalikoimasta talon viinejä unohtamatta. Urheilua täällä seurataan aktiivisesti.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3210",
      name: {
        fi: "Bar Bronco 3",
        en: "Bar Bronco 3",
        sv: "Bar Bronco 3",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/barbronco3/",
      modified_at: "2018-07-13T10:39:28.000Z",
      location: {
        lat: 60.164676666259766,
        lon: 24.93257713317871,
        address: {
          street_address: "Albertinkatu 36",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Bronco on olohuone ja oluthuone. Kaksitoista hanaa tarjoaa vaihtuvan valikoiman käsityöläisoluita, siidereitä ja viinejä unohtamatta. Juoman kylkeen tarjolla on pizzaa sekä wingsejä. Urheilua täällä seurataan aktiivisesti.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "15:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "15:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "15:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "15:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "15:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3752",
      name: {
        fi: "Bar Cón Flemari",
        en: "Bar Cón Flemari",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bar-con.fi/",
      modified_at: "2019-09-04T12:58:14.000Z",
      location: {
        lat: 60.18576431274414,
        lon: 24.952987670898438,
        address: {
          street_address: "Fleminginkatu 10",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Cón on elävä tapasbaari, jossa autenttiset Barcelonan maut löytävät ystävänsä. Ravintolat Kalliossa ja Kampissa sykkivät elämäniloa iltamyöhään saakka!",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-09/bar_con_flemari_1_c_joonas_ojala_location_only.jpg?h=dd58e17b&itok=uEjADBXb",
            copyright_holder: "Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-09/bar_con_flemari_2_c_joonas_ojala_location_only.jpg?h=5df4fbb9&itok=s5T1rnn1",
            copyright_holder: "Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-03/bar_con_flemari_uuden_menun_annoksia_c_we_are_group_joonas_ojala_location_only.jpg?h=918a48ec&itok=sbk1DlzZ",
            copyright_holder: "We Are Group / Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:236", name: "Spanish" },
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2754",
      name: { fi: "Bar Cón Kamppi", en: "Bar Cón Kamppi", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bar-con.fi",
      modified_at: "2020-03-12T09:04:21.000Z",
      location: {
        lat: 60.16923522949219,
        lon: 24.9339656829834,
        address: {
          street_address: "Urho Kekkosen katu 1, Kampin keskus 5krs.",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Cón on elävä tapasbaari, jossa autenttiset Barcelonan maut löytävät ystävänsä. Ravintola leijuu lautalla Kampin keskuksen kehutun ravintolamaailma Korttelin päällä ja sykkii elämän iloa viikon jokaisena päivänä lounaasta iltamyöhään saakka.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-03/bar_con_kamppi_c_we_are_group_henri_juvonen_location_only.jpg?h=5c1406d6&itok=hU93JAmO",
            copyright_holder: "We Are Group / Henri Juvonen",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-03/bar_con_kamppi_uuden_menun_annoksia_c_we_are_group_joonas_ojala_location_only.jpg?h=9310ee61&itok=kcRW6JCe",
            copyright_holder: "We Are Group / Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:236", name: "Spanish" },
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "15:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3042",
      name: { fi: "Bar Favela", en: "Bar Favela", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.favela.fi",
      modified_at: "2018-08-28T09:50:38.000Z",
      location: {
        lat: 60.17200469970703,
        lon: 24.92043685913086,
        address: {
          street_address: "Mechelininkatu 13",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Favela on tarkoitettu ravintoloita olohuoneinaan pitäville omien polkujen kulkijoille, kaveriporukoille, mielenkiintoisia ilmiöitä bongaileville urbaaneille vaeltajille, hyvää hinta-laatusuhdetta arvostaville kaupunkiseikkailijoille. Itse tehtyä fun foodia, rentoa ja lämminhenkistä yhdessäoloa.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/13583_1523229451223500_7144087515828502219_n.jpg?h=dec22bcf&itok=ZLIJLa3m",
            copyright_holder: "Bar Favela",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "15:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3836",
      name: { fi: "Bar Hub", en: "Bar Hub", sv: "Bar Hub", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.barhubhelsinki.fi",
      modified_at: "2019-09-16T10:55:45.000Z",
      location: {
        lat: 60.16716003417969,
        lon: 24.930696487426758,
        address: {
          street_address: "Malminrinne 2",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Hub on rento, moderni, olohuonetyyppinen baari kampissa. Juomapuolelta löytyy jokaiselle jotakin, oli mielessä sitten hyvä olut, viini tai cocktaili.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:244", name: "Beer" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2786",
      name: { fi: "Bar Kalliohovi", en: "Bar Kalliohovi", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://www.facebook.com/pg/Kalliohovi-216544168378547/about/?ref=page_internal",
      modified_at: "2018-07-13T10:41:59.000Z",
      location: {
        lat: 60.188472747802734,
        lon: 24.956945419311523,
        address: {
          street_address: "Vaasankatu 17",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Baari Kallion sydämessä, Vaasankadulla.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/281429_231227670243530_7700566_n.jpg?h=c3b74f51&itok=rZj_eIGr",
            copyright_holder: "",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1065",
      name: { fi: "Bar Loose", en: "Bar Loose", sv: "Bar Loose", zh: "松弛吧" },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.barloose.com",
      modified_at: "2019-09-30T11:45:14.000Z",
      location: {
        lat: 60.166786193847656,
        lon: 24.93739891052246,
        address: {
          street_address: "Annankatu 21",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Loose on Helsingin ydinkeskustassa sijaitseva garage rock -baari, joka on ennen kaikkea kohtaamispaikka: alkuillasta se on viihtyisä lounge alan harrastajille, illalla laadukas keikkapaikka ja puolenyön jälkeen ravintolasta kuoriutuu kuuma jatkoklubi ja tanssinnälkäisille alakerrassa on tarjolla suosittu rockhenkinen yökerho.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/loose_005_0.jpg?h=0a3225a7&itok=i5H8Xm9n",
            copyright_holder: "Santtu Särkäs ",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/loose_007_0.jpg?h=5dcf5df9&itok=ezUvsrVX",
            copyright_holder: "Santtu Särkäs ",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:53", name: "LiveMusic" },
        { id: "matko2:105", name: "Rock" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          {
            weekday_id: 3,
            opens: "18:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "18:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "18:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "18:00:00",
            closes: "04:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "20:00:00",
            closes: "04:30:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2797",
      name: {
        fi: "Bar Loosister",
        en: "Bar Loosister",
        sv: "Bar Loosister",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://barloosister.fi/",
      modified_at: "2020-08-20T13:08:41.000Z",
      location: {
        lat: 60.187068939208984,
        lon: 24.96117401123047,
        address: {
          street_address: "Hämeentie 50",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Rockväen ja muidenkin kansanosien olohuone Rockbistro Bar Loosister aukesi toukokuussa 2013 Helsingin Kurviin. Ravintolan keskeinen ajatus on täyttää alkuperäisen Bar Loosen jättämä tyhjiö pääkaupungin ravintolakartalla. Bar Loosisterista löydät leppoisaa tunnelmaa, vaihtuvaa musiikkia, pienpanimo-oluita ja konstailematonta sapuskaa, myös vegaania.\r\n\r\nBar Loosisterin sisustuksessa on käytetty legendaarisia rock-kuvia, vinyylilevyjä sekä alkuperäisen Bar Loosen varastosta löytynyttä vanhaa tavaraa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/front1_big.jpg?h=54d6714a&itok=qUOE3m-_",
            copyright_holder: "Bar Loosister",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:105", name: "Rock" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:170", name: "Hamburger" },
        { id: "matko2:186", name: "Pizza" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2984",
      name: {
        fi: "Bar Molotow",
        en: "Bar Molotow",
        sv: null,
        zh: "摩罗陀酒吧",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://fi-fi.facebook.com/Bar-Molotow-156875074356672/",
      modified_at: "2019-08-30T07:06:51.000Z",
      location: {
        lat: 60.1884880065918,
        lon: 24.953617095947266,
        address: {
          street_address: "Vaasankatu 29",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Olohuonemainen, rock-henkinen baari Kalliossa.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:105", name: "Rock" },
        { id: "matko2:a-:Curated", name: "Curated" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2937",
      name: { fi: "Bar Runar", en: "Bar Runar", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.runar.fi",
      modified_at: "2018-07-13T10:45:11.000Z",
      location: {
        lat: 60.16628646850586,
        lon: 24.949390411376953,
        address: {
          street_address: "Fabianinkatu 6",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Runar on baari, johon voit poiketa lasilliselle tai cocktailille, tai molemmille, paikka, jossa voit juhlia yksin tai porukalla aina yöhön asti. Runar on baari, jossa mennään fiilis edellä, kaikessa.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "17:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "17:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4093",
      name: {
        fi: "Bar Taikurin Hattu",
        en: "Bar Taikurin Hattu",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/BarTaikurinHattu/",
      modified_at: "2020-10-07T10:00:56.000Z",
      location: {
        lat: 60.2356071472168,
        lon: 25.09280014038086,
        address: {
          street_address: "Tanhuantie 3",
          postal_code: "00940",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bar Taikurin Hattu on baari ja olohuone joka sijaitsee Kontulassa, lisäksi live-keikkoja.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:53", name: "LiveMusic" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "13:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "13:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "13:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "13:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3914",
      name: { fi: "Bardem", en: "Bardem", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bardem.fi/",
      modified_at: "2020-10-20T13:59:14.000Z",
      location: {
        lat: 60.169883728027344,
        lon: 24.94573402404785,
        address: {
          street_address: "Yliopistonkatu 7",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bardem on 40-paikkainen, rento baari jonka juomalistalta löytyy jokaisen lompakolle sopivia juomia. Baarin erikoisuus on vintage-cocktailien lista, sekä vähä-alkoholiset cocktailit sekä kokonaan alkoholittomat mocktailit.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:144", name: "Cocktail" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2655",
      name: {
        fi: "BasBas & Staff Wine Bar",
        en: "BasBas & Staff Wine Bar",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://basbas.fi/winebar/",
      modified_at: "2020-06-17T08:12:52.000Z",
      location: {
        lat: 60.157814025878906,
        lon: 24.933740615844727,
        address: {
          street_address: "Tehtaankatu 27-29",
          postal_code: "00150",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "BasBas & Staff Wine Bar on kodikas korttelibaari, jonka kaapista löytyy viinejä moneen makuun, klassisen tyylikkäistä kulmia nostattavan kokeileviin. Juustojen ja leikkeleiden lisäksi tarjolla on raikasta, raaka-ainelähtöistä baaripurtavaa, jolla talttuu isompikin nälkä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/basbas%26staff2.jpg?h=502e75fa&itok=H6ZfuB-H",
            copyright_holder: "Tuukka Koski",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/basbas%26staff.jpg?h=f13c6b3d&itok=cTK_nTja",
            copyright_holder: "Tuukka Koski",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/basbas%26staff3.jpg?h=502e75fa&itok=gMjAyR05",
            copyright_holder: "Tuukka Koski",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:142", name: "SmartCasual" },
        { id: "matko2:198", name: "Wine" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3100",
      name: { fi: "Base Bar", en: "Base Bar", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.basebar.fi",
      modified_at: "2018-07-13T10:48:25.000Z",
      location: {
        lat: 60.167930603027344,
        lon: 24.939517974853516,
        address: {
          street_address: "Kalevankatu 3",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          'Rokkikuppila Base Bar tunnetaan lausahduksesta "rokkia ja täysiä tuoppeja". Tässä kuppilassa railakas meno on taattu!',
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:105", name: "Rock" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "14:00:00",
            closes: "04:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2599",
      name: {
        fi: "Baskeri & Basso Bistro",
        en: "Baskeri & Basso Bistro",
        sv: "Baskeri & Basso Bistro",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://basbas.fi/",
      modified_at: "2020-08-20T13:09:56.000Z",
      location: {
        lat: 60.15793991088867,
        lon: 24.934297561645508,
        address: {
          street_address: "Tehtaankatu 27-29 (sisäpiha)",
          postal_code: "00150",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Baskeri & Basso on imenyt vaikutteita Pariisin kodikkaista bistroista, San Franciscon rennoista kuppiloista ja Italian maaseudun pienistä osterioista. Ruokalistalla on yksinkertaisia, raaka-ainelähtöisiä bistroannoksia ja viinikaapista löytyy kiinnostava naturalviinien valikoima.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/Kalle2-1024x683.jpeg?h=199d8c1f&itok=125LErai",
            copyright_holder: "Baskeri & Basso",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:142", name: "SmartCasual" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3268",
      name: { fi: "Bastardo", en: "Bastardo", sv: "Bastardo", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://bastardo.fi",
      modified_at: "2020-08-20T14:23:51.000Z",
      location: {
        lat: 60.169288635253906,
        lon: 24.93344497680664,
        address: {
          street_address: "Urho Kekkosenkatu 1, Kampin kauppakeskus 5krs.",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bastardo tarjoilee lounasta, drinkkejä ja illallista rustiikin italialaisen tunnelman siivittämänä ja rennossa ilmapiirissä yhdistettynä Bastardon tulkintaan perinteisestä trattoriasta ja pizzeriasta. Ravintolassa käytetyistä raaka-aineista osa tuodaan itse suoraan Italiasta.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:171", name: "Italian" },
        { id: "matko2:186", name: "Pizza" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "23:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "23:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2764",
      name: {
        fi: "Bastion Bistro",
        en: "Bastion Bistro",
        sv: null,
        zh: "棱堡餐馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://bastionbistro.fi/",
      modified_at: "2020-08-20T14:46:07.000Z",
      location: {
        lat: 60.14834213256836,
        lon: 24.983510971069336,
        address: {
          street_address: "Suomenlinna C8",
          postal_code: "00190",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bastion Bistro toimii vuonna 1892 rakennetussa puisessa jalkaväen kasarmissa, lyhyen kävelymatkan päässä Suomenlinnan päälaiturista. Ruokalistalta löytyy mutkatonta bistroruokaa ja arkipäivisin tarjolla on maittava lounas. Suojaisalta terassilta on merinäköala Helsingin silhuettiin. Bastion Bistro on avoinna ympäri vuoden.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/bastion.jpg?h=77a61b9b&itok=UrZzlFFs",
            copyright_holder: "Bastion Bistro",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/bastion2.JPG?h=56b7e0a0&itok=6CilAoCV",
            copyright_holder: "Bastion Bistro",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/bastion4.jpg?h=a242d5af&itok=ta_L7rHj",
            copyright_holder: "Bastion Bistro",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:240", name: "Family" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:56", name: "BanquetIsland" },
        { id: "matko2:18", name: "SaunaMeeting" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:158", name: "Seaside" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:170", name: "Hamburger" },
        { id: "matko2:191", name: "IslandRestaurant" },
        { id: "matko2:186", name: "Pizza" },
        { id: "matko2:57", name: "BanquetSeaside" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:30:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:30:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:30:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:30:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3250",
      name: {
        fi: "BAY Helsinki",
        en: "BAY Helsinki",
        sv: "BAY Helsinki",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://bayhelsinki.com",
      modified_at: "2019-09-17T12:54:00.000Z",
      location: {
        lat: 60.16903305053711,
        lon: 24.9602108001709,
        address: {
          street_address: "Kanavaranta 7 C 12",
          postal_code: "00160",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Pilates, jooga ja barre studio, joka sijaitsee ainutlaatuisessa merellisessä miljöössä Kanavarannan varrella.",
        images: [],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:264", name: "Yoga" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Avoinna tuntivalikoiman mukaan",
      },
    },
    {
      id: "3378",
      name: {
        fi: "BB Badger&Co",
        en: "BB Badger&Co",
        sv: "BB Badger&Co",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.badgerbar.fi",
      modified_at: "2018-08-16T09:08:31.000Z",
      location: {
        lat: 60.16366958618164,
        lon: 24.946308135986328,
        address: {
          street_address: "Korkeavuorenkatu 25",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "BB Badger&Co on 2018 avattu tyylikäs Brooklyn-tyylinen musiikkibaari keskellä Etelä-Helsingin muodikkainta iltaelämän aluetta. Baarissa viihtyvät niin tutut kuin tuntemattomatkin. Huolella valikoitu ja säännöllisesti päivittyvä viini/drinkki/olut-valikoima sekä herkulliset New York -sandwichit pitävät huolen että nautit illastasi. Aurinkoinen terassi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-07/bb_badgerco1cbb_badgerco.jpg?h=56d0ca2e&itok=5HjO2LU8",
            copyright_holder: "BB Badger&Co",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-07/bb_badgerco2cbb_badgerco.jpg?h=56d0ca2e&itok=5uk4ETKY",
            copyright_holder: "BB Badger&Co",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:247", name: "IndieMusic" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "14:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "14:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "14:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "14:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3698",
      name: {
        fi: "BCS Of Fashion",
        en: "BCS Of Fashion",
        sv: "BCS OF Fashion",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bcsfashion.fi",
      modified_at: "2019-04-15T09:04:01.000Z",
      location: {
        lat: 60.16904830932617,
        lon: 24.9478759765625,
        address: {
          street_address: "Aleksanterinkatu 9, Kluuvin kauppakeskus",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "Trendikäs naistenvaateliike Kluuvin kauppakeskuksessa.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:180", name: "Fashion" },
        { id: "matko2:a-:GlobalBlue", name: "GlobalBlue" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3853",
      name: { fi: "Be My Guest", en: "Be My Guest", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://bemyguest.fi",
      modified_at: "2020-08-20T14:48:38.000Z",
      location: {
        lat: 60.15780258178711,
        lon: 24.912126541137695,
        address: {
          street_address: "Välimerenkatu 24",
          postal_code: "00220",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Be My Guest on kuuden kaveruksen perustama olohuonemainen vietnamilaisravintola, jossa tarjolla mm. pho-keittoa ja banh mi-leipiä.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:197", name: "Vietnamese" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:30:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:30:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:30:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:30:00",
            closes: "20:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:30:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2298",
      name: { fi: "beam.", en: "beam.", sv: "beam.", zh: "碧木" },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.beamstore.fi",
      modified_at: "2019-04-08T09:30:36.000Z",
      location: {
        lat: 60.16596984863281,
        lon: 24.944135665893555,
        address: {
          street_address: "Erottajankatu 15-17",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vaatteita ja asusteita niin naisille kuin miehille mm. seuraavilta merkeiltä: Acne Studios, A.P.C., Alexander Wang, COMME des GARCONS, Én, Our Legacy...",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/22154721_2272163822809404_5644775502481547392_n.jpg?h=07f9aabd&itok=nSUqjOIh",
            copyright_holder: "beam.",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:113", name: "StreetStyle" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1460",
      name: {
        fi: "Beamhill Helsinki",
        en: "Beamhill Helsinki",
        sv: "Beamhill Helsinki",
        zh: "碧木嗨欧 赫尔辛基",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.beamhill.fi",
      modified_at: "2019-04-08T09:33:18.000Z",
      location: {
        lat: 60.16987228393555,
        lon: 24.946731567382812,
        address: {
          street_address: "Yliopistonkatu 5",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Beamhillistä muotia, asusteita ja kenkiä mm. merkeiltä: A.P.C., Acne Studios, adidas Consortium, adidas Originals, adidas Originals by ALEXANDER WANG, adidas Yeezy, Adnym Atelier, Alpha Industries, Armor Lux, Asics, BACK, Barbour, Carhartt WIP, Clarks Originals, Common Projects, Diarte, Dr.Martens, Edwin, Eleven Paris, Filling Pieces, FWSS, Ganni, Gosha Rubchinskiy, HALO Newline, Han Kjobenhavn, Herschel, Hi-Tec HTS74, Hope, Jason Markk, Journal, Karhu, Levi's, Maison Kitsuné, Makia, New Balance, Nike, Norse Projects, Nudie Jeans, orSlow, Our Legacy, Pointer, Polar, Puma, Red Wing Shoes, Reebok, Samsoe & Samsoe, Samuji, Sandqvist, Saturdays Surf NYC, Soulland, Stussy, Timberland, Tommy Jeans, Tricotage, Vans, Whyred, Wood Wood, Y-3 \r\n\r\n\r\n\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/yo2.jpg?h=9e499333&itok=e0OXy72K",
            copyright_holder: "Beamhill Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-11/yo5.jpg?h=9e499333&itok=PGgSz8yh",
            copyright_holder: "Beamhill Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:113", name: "StreetStyle" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "13:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1749",
      name: {
        fi: "Bear Park Café - Kulmakahvio",
        en: "Bear Park Café - Kulmakahvio",
        sv: "Bear Park Café - Kulmakahvio",
        zh: '"角落"咖啡馆- 熊公园店',
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.kulmakahvio.fi/",
      modified_at: "2020-08-20T14:50:05.000Z",
      location: {
        lat: 60.18431854248047,
        lon: 24.951919555664062,
        address: {
          street_address: "Agricolankatu 13",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kulmakahvio on pieni, valoisa ja aurinkoinen keidas Karhupuiston kulmalla. Gay-kahvila johon kaikki ovat tervetulleita.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:54", name: "LGBT" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3518",
      name: { fi: "Bei Fang", en: "Bei Fang", sv: "Bei Fang", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.beifang.fi/",
      modified_at: "2020-08-24T13:38:37.000Z",
      location: {
        lat: 60.17169189453125,
        lon: 24.953889846801758,
        address: {
          street_address: "Rauhankatu 15",
          postal_code: "00170",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kiinalainen ravintola Bei Fang on erikoistunut Dong Bein, Beijingin, Sichuanin ja Hunanin ruokakulttuureihin. Kiinalaiset kokit tuntevat kotimaansa aidon ruokakulttuurin ja valmistavat ruokaa perinteisiä kiinalaisia ruoanvalmistustapoja kunnioittaen.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1174",
      name: {
        fi: "Belge Bar & Bistro",
        en: "Belge Bar & Bistro",
        sv: "Belge Bar & Bistro",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.belge.fi/",
      modified_at: "2018-07-13T10:50:55.000Z",
      location: {
        lat: 60.16926956176758,
        lon: 24.947729110717773,
        address: {
          street_address: "Kluuvikatu 5",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Belge bar&bistro on mutkaton belgialainen olut- ja seurusteluravintola kahdessa kerroksessa. Belgialaiset rakastavat hyvää ruokaa ja juomaa niin laadullisesti kuin määrällisesti. Tämä on myös Belgen ohjenuora; tarjota asiakkailleen elämän hyviä puolia. Olut kaadetaan oikein ja annokset ovat reiluja ja rehellisiä. Yläkerran kirjastohuoneessa tunnelmaa luo belgialaiseen tapaan takka. Isot sohvat, tumma puu ja lämmin valaistus luovat kiireettömän tunnelman töiden jälkeiselle rentoutumiselle.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-04/Parsaviikot_myhelsinki_1980x900_2.jpg?h=48526f7e&itok=zDdit-Ry",
            copyright_holder: "Belge Bar & Bistro",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:141", name: "Bistro" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "03:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "398",
      name: { fi: "Berghyddan", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.berghyddan.fi",
      modified_at: "2020-05-08T07:07:57.000Z",
      location: {
        lat: 60.21482849121094,
        lon: 24.979419708251953,
        address: {
          street_address: "Vanhankaupungintie 3",
          postal_code: "00560",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Kaunis, vanha hirsirakenteinen puutalo ja reilu piha-alue Vantaanjoen lähistöllä. \r\nBerghyddanin suureen saliin mahtuu ruokailemaan 160 henkilöä ja vastaanotoille, musiikki- ja teatteriesityksiin 250 henkilöä. Tilan varusteisiin kuuluvat kiinteä näyttämö ja piano. Kesällä juhlat voivat levittäytyä myös Berghyddanin idylliseen puutarhaan. \r\n\r\n\r\n\r\n\r\n\r\n",
        images: null,
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:15", name: "Banquet" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3736",
      name: {
        fi: "Biáng! Citycenter",
        en: "Biáng! Citycenter",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://biang.fi/",
      modified_at: "2020-08-24T14:05:22.000Z",
      location: {
        lat: 60.16938400268555,
        lon: 24.942546844482422,
        address: {
          street_address: "Kaivokatu 8, 2. krs.",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Biáng! on kauppakeskus Citycenterissä sijaitseva, viihtyisä kiinalainen ravintola jossa tarjoillaan perinteistä Pohjois-Kiinalaista ruokaa. Monipuolinen buffettipöytä on katettu viikon jokaisena päivänä. À la carte -listalta löytyy myös laaja valikoima ruokalajeja.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3735",
      name: {
        fi: "Biáng! Stockmann",
        en: "Biáng! Stockmann",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://biang.fi/",
      modified_at: "2020-08-24T14:06:48.000Z",
      location: {
        lat: 60.167755126953125,
        lon: 24.9422664642334,
        address: {
          street_address: "Pohjoisesplanadi 41, 3. krs.",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Biáng! on Stockmann-tavaratalossa sijaitseva, viihtyisä kiinalainen ravintola jossa tarjoillaan perinteistä Pohjois-Kiinalaista ruokaa. Monipuolinen buffettipöytä on katettu viikon jokaisena päivänä. À la carte -listalta löytyy laaja valikoima ruokalajeja.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
        { id: "matko2:80", name: "Asian" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2019",
      name: {
        fi: "Bicyclean Helsinki",
        en: "Bicyclean Helsinki",
        sv: "Bicyclean Helsinki",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bicycleanhelsinki.com",
      modified_at: "2020-07-30T10:24:15.000Z",
      location: {
        lat: 60.16787338256836,
        lon: 24.96687126159668,
        address: {
          street_address: "Luotsikatu 14",
          postal_code: "00160",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bicyclean on vuonna 2011 perustettu täyden palvelun pyöräliike ja pyörävuokraamo Helsingin Katajanokalla. Käytetyt polkupyörät varaosineen ja huoltoineen. Valikoimassa mm. kaupunkipyörät, monivaihteiset maantiekiitäjät ja lasten pyörät.",
        images: [],
      },
      tags: [
        { id: "matko2:95", name: "Biking" },
        { id: "matko2:210", name: "SportOutdoor" },
        { id: "matko2:96", name: "EquipmentRental" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko1:5", name: "NATURE & SPORTS" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Touko-syyskuu: ma 12-19, ti-su 9-19. Loka-huhtikuu: ma 12-18, ti-pe 10-18, la 10-16.",
      },
    },
    {
      id: "2846",
      name: {
        fi: "Bier-Bier",
        en: "Bier-Bier",
        sv: "Bier-Bier",
        zh: "啤酒-啤酒",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bier-bier.fi",
      modified_at: "2018-10-23T08:42:28.000Z",
      location: {
        lat: 60.165504455566406,
        lon: 24.94417953491211,
        address: {
          street_address: "Erottajankatu 13",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bier-Bier on lämminhenkinen, moderni ja palveleva olutbaari jossa valikoima on huolella valittu. Satakunta olutta, kymmenisen siiderilaatua ja parikymmentä viiniä tarjoavat haastetta hifistelijöille ja elämyksiä noviiseille.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-09/bier-bier_1_c_joonas_ojala_we_are_group_location_only.jpg?h=050f2afe&itok=wc9N-pKD",
            copyright_holder: "Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-09/bier-bier_3_c_joonas_ojala_we_are_group_location_only.jpg?h=c59b8c02&itok=QMqeDD-_",
            copyright_holder: "Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-09/bier-bier_2_c_joonas_ojala_we_are_group_location_only.jpg?h=5e9729f0&itok=nUSKArAO",
            copyright_holder: "Joonas Ojala",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:49", name: "Pub" },
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:244", name: "Beer" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4068",
      name: { fi: "Biitsi Pasila", en: "Biitsi Pasila", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.biitsi.fi",
      modified_at: "2020-09-01T07:10:45.000Z",
      location: {
        lat: 60.1985969543457,
        lon: 24.93126678466797,
        address: {
          street_address: "Fredikanterassi 1, Mall of Tripla, Down Under",
          postal_code: "00520",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Biitsi Pasila on uniikki sisäkesäkonsepti, jossa yhdistyy lämpö, hiekkaranta ja beach volley. Ikitropiikin hauskat aktiviteetit, beach volley, aidot palmut ja erinomainen rantabaari takaavat viihtymisen pitkään. 26-asteen lämpötila pakottaa jättämään talvivaatteet narikkaan!\r\n\r\nBiitsiltä löytyy kolme beach volley kenttää ja hiekka-alue pienemmille hiekkapelille, 3 baaria, 3 erikokoista kokous-/backstagetilaa ja 3 saunatilaa. Tapahtumia Biitsillä voi järjestää jopa 1000 hengelle.",
        images: [],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:165", name: "Activity" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:133", name: "RecreationalCentre" },
        { id: "matko1:5", name: "NATURE & SPORTS" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "07:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "07:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "07:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "07:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "07:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2382",
      name: {
        fi: "Birgitta Hernesaari",
        en: "Birgitta Hernesaari",
        sv: "Birgitta Hernesaari",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.birgittahernesaari.com",
      modified_at: "2020-06-22T13:06:58.000Z",
      location: {
        lat: 60.15389633178711,
        lon: 24.93209457397461,
        address: {
          street_address: "Hernesaarenranta 2",
          postal_code: "00150",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Modernia puu-arkkitehtuuria edustava kesäkahvila jonka puuhiiligrillistä eväät merelliseen ja savunmakuiseen tilakokemukseen. Tilan on suunnitellut Arkkitehtitoimisto Talli (2014).",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/img_7271.jpg?h=0d27ee61&itok=ISXnHjts",
            copyright_holder: "Hernesaari Birgitta",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-05/_mg_3088.jpg?h=6f8e8448&itok=k-2RMqvq",
            copyright_holder: "Hernesaari Birgitta",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:83", name: "CafeSummer" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:158", name: "Seaside" },
        { id: "matko2:24", name: "Architecture" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "09:00:00",
            closes: "22:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Avoinna kesällä",
      },
    },
    {
      id: "2165",
      name: { fi: "Bisarri", en: "Bisarri", sv: "Bisarri", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bisarri.fi",
      modified_at: "2019-08-26T13:50:11.000Z",
      location: {
        lat: 60.16107940673828,
        lon: 24.946109771728516,
        address: {
          street_address: "Tarkk´ampujankatu 5",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "1900-luvun suomalaista muotoilua; taidelasia, taidekeramiikkaa ja kaunista arkitavaraa.",
        images: [],
      },
      tags: [
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:69", name: "Antiques" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2676",
      name: {
        fi: "Bistro Badenbaden",
        en: "Bistro Badenbaden",
        sv: "Bistro Badenbaden",
        zh: "巴登巴登餐厅",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://theronbistro.fi/badenbaden/",
      modified_at: "2020-06-04T12:03:14.000Z",
      location: {
        lat: 60.17342758178711,
        lon: 24.905630111694336,
        address: {
          street_address: "Hiekkarannantie 11",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Hietaniemen rannan Bistro Badenbaden on 100-paikkainen ravintola, jossa tarjoillaan täyteläisiä pizzoja, maukkaita burgereita sekä kesäisen raikkaita juomia, jotka kaikki kuuluvat Suomen suveen. Ravintolassa on myös upea 200-paikkainen rantaterassi, josta voi ihailla kaunista Lapinlahtea ja Hietsun upeaa rantaelämää, ravintolan jäätelöbaarin tarjotessa vilvoittavia, kesäisiä makuja kaikenikäisille.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/badenbaden_hietsu_myhelsinki5_hietsu_baari_002.jpg?h=a0d4a77c&itok=vvvo-c1m",
            copyright_holder: "Theron Catering",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/badenbaden_hietsu_myhelsinki3.jpg?h=ec2df9a5&itok=lf7xamXQ",
            copyright_holder: "Theron Catering",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-10/badenbaden_hietsu_myhelsinki2_hietsu_bb_002.jpg?h=bec4552e&itok=Ea9DpXBk",
            copyright_holder: "Theron Catering",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:83", name: "CafeSummer" },
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:82", name: "RestaurantSummer" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:158", name: "Seaside" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:141", name: "Bistro" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Avoinna kesäkaudella, ks. aukioloajat kotisivuilta",
      },
    },
    {
      id: "3437",
      name: {
        fi: "Bistro Gimis",
        en: "Bistro Gimis",
        sv: "Bistro Gimis",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.raflaamo.fi/fi/helsinki/bistro-gimis",
      modified_at: "2020-08-24T14:30:11.000Z",
      location: {
        lat: 60.162086486816406,
        lon: 24.924257278442383,
        address: {
          street_address: "Ruoholahdenranta 3, Radisson Blu Seaside Hotel",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ruoholahdenrannan kortteliravintola, Bistro Gimis, on kuin pieni pala Helsinkiä itsessään - stadilaiset maut, liikkeellä olemisen fiilis ja meren läheisyys tekevät siitä kiinnostavan kohtaamispaikan keskellä mielenkiintoisinta kasvualuetta Helsingissä. Ravintola hyödyntää keittiössään pientuottajien helmiä ja stadilaista lähialueen ruokaa, kuten lähivesiltä pyydettyä kalaa.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:167", name: "Breakfast" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "07:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "07:00:00",
            closes: "11:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Ma-pe 7-11 & 17-22, la 7-11 & 15-22",
      },
    },
    {
      id: "3135",
      name: {
        fi: "Bistro Manu",
        en: "Bistro Manu",
        sv: "Bistro Manu",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.raflaamo.fi/fi/helsinki/bistro-manu",
      modified_at: "2020-08-24T14:39:45.000Z",
      location: {
        lat: 60.17063522338867,
        lon: 24.93221664428711,
        address: {
          street_address: "Eteläinen Rautatiekatu 4",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bistro Manu on Kampissa sijaitseva kortteliravintola, jossa mutkaton ruoka- ja juoma yhdistyvät mestarilliseen palveluun. Ravintola sijaitsee Original Sokos Hotel Presidentissä ja on avoinna joka päivä lounaasta iltaan. Menneinä aikoina manu oli nimitys mestarille ja oman alansa parhaalle ammattilaiselle. Bistro Manussa ruoka ja juoma tarjoillaan tämän päivän mestarillisella otteella. Ravintolan mestarien kädentaidot löytyvät soppakauhan varresta, cocktail-lasista sekä vieraita hurmaavista ravintolaelämyksistä. Bistro Manu kutsuu kylään nykypäivän mestarit ja arjen sankarit hyvän palvelun, ruoan ja juoman äärelle.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/bistro_manu_baarista_aulaan_pain_1.jpg?h=8ca30f53&itok=Vw3BQOlC",
            copyright_holder: "Aki Rask",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/bistro_manu_alasali.jpg?h=cb6bfda6&itok=G4AH0wjD",
            copyright_holder: "Aki Rask",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "15:00:00",
            closes: "22:30:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3948",
      name: {
        fi: "Bistro Sinne",
        en: "Bistro Sinne",
        sv: "Bistro Sinne",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.sinneporvoo.fi/",
      modified_at: "2020-08-24T14:43:02.000Z",
      location: {
        lat: 60.38908004760742,
        lon: 25.65761375427246,
        address: {
          street_address: "Läntinen Aleksanterinkatu 1, Taidetehdas",
          postal_code: "06100",
          locality: "Porvoo",
        },
      },
      description: {
        intro: null,
        body:
          "Bistro Sinne - se alkuperäinen lähiruokaravintola Porvoossa - jossa on mahdollista nauttia pohjoismaalaisista, moderneista mauista niin lounaalla, illallisella kuin brunssilla.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:147", name: "ModernNordic" },
        { id: "matko2:168", name: "Brunch" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Sunnuntaisin brunssi",
      },
    },
    {
      id: "3700",
      name: { fi: "BistroK", en: "BistroK", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bistrok.fi/",
      modified_at: "2020-08-24T14:37:39.000Z",
      location: {
        lat: 60.19026184082031,
        lon: 24.96412467956543,
        address: {
          street_address: "Hämeentie 68",
          postal_code: "00550",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Lounasta, naposteltavia ja illallista. Herkullisia ja helppoja annoksia, eurooppalaiseen tyyliin.\r\n\r\nBistro K huolehtii myös Musiikkiteatteri Kapsäkin väliaikatarjoilusta.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "13:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2944",
      name: {
        fi: "Bites Vallila",
        en: "Bites Vallila",
        sv: "Bites Vallila",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bites.fi/",
      modified_at: "2020-08-24T14:49:12.000Z",
      location: {
        lat: 60.19561767578125,
        lon: 24.95098114013672,
        address: {
          street_address: "Nokiantie 2-4",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Vallilan teollisuusalueella toimistorakennuksessa sijaitsevassa askeettisessa mutta suositussa Bites hampurilaisravintolassa on tarjolla simppeli mutta sitäkin maukkaampi menu. Listalla on hampurilaisia vain muutama lisälisukkeineen, myös vege ja veganinen. Spesiaaliversioita on myös tarjolla ja niistä tiedotetaan ravintolan sosiaalisissa medioissa. Ravintolassa on myös laaja olutvalikoima.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:170", name: "Hamburger" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "14:00:00",
            closes: "20:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1483",
      name: {
        fi: "Black & White",
        en: "Black & White",
        sv: "Black & White",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.blackandwhite.fi",
      modified_at: "2019-06-26T08:23:21.000Z",
      location: {
        lat: 60.180694580078125,
        lon: 24.950960159301758,
        address: {
          street_address: "Toinen linja 1",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Black and White Records on yli 30-vuotias äänilevyjen erikoiskauppa Hakaniemessä. Liikkeessä on tarjolla laaja, kaikki musiikin genret kattava käytettyjen levyjen kokoelma. Laajasta valikoimasta löytyy myös tuhansia uusia LP- ja cd-levyjä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-09/blackandwhite.jpg?h=fdfcff6b&itok=gULxcx6U",
            copyright_holder: "Black & White",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:104", name: "RecordStore" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2056",
      name: { fi: "BLINIt", en: "BLINIt", sv: "BLINIt", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.blinit.fi/",
      modified_at: "2020-08-24T14:56:05.000Z",
      location: {
        lat: 60.18791580200195,
        lon: 24.94519805908203,
        address: {
          street_address: "Sturenkatu 9",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "BLINIt tarjoilee aitoa venäläistä pikaruokaa; blinejä, pelmenejä ja keittoja.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:196", name: "Russian" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "13:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "13:00:00",
            closes: "22:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2403",
      name: {
        fi: "Block by Dylan",
        en: "Block by Dylan",
        sv: "Block by Dylan",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.dylan.fi/block",
      modified_at: "2020-08-24T15:12:39.000Z",
      location: {
        lat: 60.166805267333984,
        lon: 24.95220375061035,
        address: {
          street_address: "Eteläranta 18",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Block by Dylan on Soupster Groupin ja tarkemmin Dylan-perheen 250 paikkainen ravintola komeassa jugendtalossa upealla paikalla Etelärannassa. Blockissa on tarjolla arkisin aamupala ja lounas sekä viikonloppuisin brunssi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-07/block_by_dylancblock_by_dylan.jpg?h=5933738f&itok=pqvBDBiZ",
            copyright_holder: "Block By Dylan",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-07/block_by_dylan1cblock_by_dylan.jpg?h=82f92a78&itok=jdHgrLTk",
            copyright_holder: "Block By Dylan",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:167", name: "Breakfast" },
        { id: "matko2:168", name: "Brunch" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:30:00",
            closes: "15:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:30:00",
            closes: "15:30:00",
            open24h: false,
          },
        ],
        openinghours_exception:
          "Ma-pe aamiainen 8-10, ma-pe lounas 10.30-14, la-su brunssi 10.30-15.30",
      },
    },
    {
      id: "2045",
      name: {
        fi: "Blue Peter - ravintola, juhla- ja kokoustilat",
        en: "Blue Peter Seaside Restaurant",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bluepeter.fi",
      modified_at: "2020-04-20T08:51:55.000Z",
      location: {
        lat: 60.151695251464844,
        lon: 24.891515731811523,
        address: {
          street_address: "Vattuniemen puistotie 1",
          postal_code: "00210",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Blue Peterissä voi järjestää juhlia ja kokouksia 20-150 hengelle, cocktail-muodossa jopa 200 hengelle. Juhla- ja kokoustiloja löytyy muutamia erilaisia, tilat muuntuvat helposti asiakkaan tarpeita vastaamaan.",
        images: null,
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:18", name: "SaunaMeeting" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3286",
      name: {
        fi: "Bocas Helsinki",
        en: "Bocas Helsinki",
        sv: "Bocas Helsinki",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/bocashki/",
      modified_at: "2018-05-08T15:31:51.000Z",
      location: {
        lat: 60.19312286376953,
        lon: 24.959129333496094,
        address: {
          street_address: "Mäkelänkatu 16",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Pieni latinohenkinen kahvila ja viinibaari Vallilassa. Tarjolla mm. kolumbialaista kahvia sekä täytettyjä maissitortilloja.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:198", name: "Wine" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "584",
      name: { fi: "Bollis bar & bistro", en: null, sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bollis.fi/fi/etusivu",
      modified_at: "2020-08-25T07:33:31.000Z",
      location: {
        lat: 60.18745040893555,
        lon: 24.92266082763672,
        address: {
          street_address: "Urheilukatu 5",
          postal_code: "00250",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bolt Arenan katutasossa sijaitseva Bollis Bar & Bistro tarjoaa lounasta arkisin sekä peli-iltoina näkymän kentälle. Ravintola aukeaa tuolloin tuntia ennen ottelun alkua ja sulkeutuu pelin päätyttyä.",
        images: [],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:29", name: "Sport" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Lounas ma-pe 11-14, Bolliksen baari on myös avoinna pelien yhteydessä, ovet aukeavat tuolloin tuntia ennen pelin alkua",
      },
    },
    {
      id: "421",
      name: { fi: "Bolt Arena", en: "Bolt Arena", sv: "Bolt Arena", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.hjk.fi/info/bolt-arena/",
      modified_at: "2020-05-07T08:04:19.000Z",
      location: {
        lat: 60.18733596801758,
        lon: 24.921878814697266,
        address: {
          street_address: "Urheilukatu 5",
          postal_code: "00250",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Jalkapallojoukkueiden HJK:n ja HIFK:n kotikenttänäkin toimiva Bolt Arena sijaitsee Töölössä. Areenassa järjestetään niin urheilutapahtumia kuin konsertteja, sekä erilaisista yritystapahtumia. Katsomoon mahtuu 10 770 katsojaa.",
        images: [],
      },
      tags: [
        { id: "matko1:3", name: "BANQUET VENUES" },
        { id: "matko2:30", name: "Arena" },
        { id: "matko2:127", name: "Football" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko2:29", name: "Sport" },
        { id: "matko1:225", name: "VENUES" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2752",
      name: {
        fi: "Bon Temps Cafe",
        en: "Bon Temps Cafe",
        sv: null,
        zh: "好时光咖啡馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.facebook.com/BontempscafeHelsinki",
      modified_at: "2020-08-25T08:04:40.000Z",
      location: {
        lat: 60.1933708190918,
        lon: 24.906124114990234,
        address: {
          street_address: "Mannerheimintie 132",
          postal_code: "00270",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Laadukasta kahvia ja teetä, käsinleivottuja leivonnaisia ja maukasta lounasta. Viikonloppuisin erilaisia aamiaissettejä\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:167", name: "Breakfast" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "08:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "08:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "08:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "08:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "08:00:00",
            closes: "17:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "16:30:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3658",
      name: { fi: "bookm-ark.fi", en: "bookm-ark.fi", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bookm-ark.fi",
      modified_at: "2019-09-19T13:29:27.000Z",
      location: {
        lat: 60.19654083251953,
        lon: 24.881061553955078,
        address: {
          street_address: "Kadetintie 19",
          postal_code: "00330",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bookm-ark.fi on arkkitehtuurikirjallisuuden erikoiskirjakauppa, jonka valikoima painottuu suomalaista ja pohjoismaista arkkitehtuuria ja arkkitehteja käsittelevään kirjallisuuteen. Tarjolla on sekä uusia että käytettyjä kirjoja. Bookm-ark.fi myy myös Midorin muistikirjoja sekä mm. Kawecon lyijytäytekyniä.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-03/bookmark.fi_bookmark.fi_on_arkkitehtuurin_erikoiskirjakauppa_bookmark.fi_anni_vartola_location_only.jpg?h=f23fc323&itok=0ZBdWP5U",
            copyright_holder: "bookm-ark.fi / Anni Vartola",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:101", name: "BookStore" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Satunnaisesti avoinna myös viikonloppuisin, ja sopimuksen mukaan",
      },
    },
    {
      id: "3919",
      name: {
        fi: "Boot Factory Flagship Store",
        en: "Boot Factory Flagship Store",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.bootfactory.fi/",
      modified_at: "2019-12-16T10:43:57.000Z",
      location: {
        lat: 60.22411346435547,
        lon: 24.860092163085938,
        address: {
          street_address: "Pitäjänmäentie 17",
          postal_code: "00370",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Boot Factory valmistaa laadukkaita, nahkaisia jalkineita käsityönä alusta loppuun Suomessa. Mallit ja lestit ovat suomalaiseen jalkaan sopivia ja tarvittaessa kengät tehdään mittatilauksesta. Verstaalla myös huolletaan ja korjataan.Boot Factoryssa valmistettuja, vuosien saatossa kuluneita Cobra bootseja ja -kenkiä.\r\n\r\nBoot Factory Oy Pekka Lahti on pieni perheyritys, joka aloitti toimintansa vuonna 1980.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:66", name: "Shoes" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2795",
      name: {
        fi: "Boothill Rock Club",
        en: "Boothill Rock Club",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.boothill.fi/",
      modified_at: "2018-07-13T11:27:34.000Z",
      location: {
        lat: 60.16468811035156,
        lon: 24.933385848999023,
        address: {
          street_address: "Lönnrotinkatu 25",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Boothill on rehti ja rento rock-baari Kampissa, ihan Helsingin keskustan kupeessa. Edullisten hanaoluiden lisäksi kasvava ja vaihtuva valikoima erikoisoluita ja muuta hyvää A-oikeuksin. Ja sisäänpääsy on aina ilmainen.\r\n\r\nLive-musiikkia joka sunnuntai ja torstai. Myös ilmainen biljardi.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/14368682_10157570837165235_5320278552140783856_n.jpg?h=d3e2533a&itok=xzsuPb2n",
            copyright_holder: "Boothill Rock Club",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:53", name: "LiveMusic" },
        { id: "matko2:105", name: "Rock" },
        { id: "matko2:108", name: "Billiards" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "03:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "03:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "10:00:00",
            closes: "02:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1505",
      name: { fi: "BOSS Store", en: "BOSS Store", sv: "BOSS Store", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://www.hugoboss.com/boss-store-aleksanterinkatu-44-helsinki/",
      modified_at: "2019-09-04T14:36:36.000Z",
      location: {
        lat: 60.16879653930664,
        lon: 24.945955276489258,
        address: {
          street_address: "Aleksanterinkatu 44",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Valikoimista löytyy viimeisimmät Hugo Boss vaatteet niin rennosta Orange-mallistosta kuin perinteisestä Black Labelistakin, niin miehille kuin naisillekin.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:112", name: "Luxury" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "20:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "17:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "115",
      name: {
        fi: "Both Helsinki",
        en: "Both Helsinki",
        sv: "Both Helsinki",
        zh: "多慕思旅馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://chooseboth.fi/fi/",
      modified_at: "2020-04-20T10:48:32.000Z",
      location: {
        lat: 60.169921875,
        lon: 24.922286987304688,
        address: {
          street_address: "Hietaniemenkatu 14",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bothissa yhdistyvät hostelli- ja hotelliasumisen parhaat puolet. Both tarjoaa sekä yksityistä rauhaa omalla kylpyhuoneella, wc:llä ja keittokomerolla jääkaappeineen, että yhteisöllisyyttä moderneissa yhteistiloissa. Both on Suomen suurin kesähostelli 600 vuodepaikallaan. Yöpyä voi 1-4 hengen huoneessa, joissa kaikissa on oma kylpyhuone ja keittokomero. Yksityishuoneiden lisäksi mahdollisuus on myös yöpyä edullisesti yhteismajoituksessa, jolloin huone jaetaan 1-2 muun matkailijan kanssa. Majoitushintaan sisältyvät pyyhkeet ja vuodevaatteet sekä ilmainen aamusauna joka aamu. Aamiainen on tarjolla lisämaksusta alakerran Metropoli ravintolassa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-03/Hostel_Domus_Academica.jpg?h=265e640d&itok=XGcvFOgl",
            copyright_holder: "Hostel Academica",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:11", name: "Hostel" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Avoinna ajalla 1.6.-1.9.",
      },
    },
    {
      id: "3146",
      name: {
        fi: "Boulderkeskus Herttoniemi",
        en: "Boulderkeskus Herttoniemi",
        sv: "Boulderkeskus Herttoniemi",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://boulderkeskus.com/fi/",
      modified_at: "2019-04-23T12:47:40.000Z",
      location: {
        lat: 60.20392608642578,
        lon: 25.047958374023438,
        address: {
          street_address: "Mekaanikonkatu 15 A",
          postal_code: "00880",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "BK Herttoniemi on Helsingin suurin boulderointihalli. Kiipeiltävää löytyy niin lapsille kuin aikuisille, ensikertalaisille tai jo aiemmin kiipeilyä harrastaneille. Ammattitaitoinen henkilökunta pitää huolen, että boulderointi on turvallista ja mahdollisimman hauskaa! Boulderkeskuksesta saa kaikki tarvittavat välineet, mukaan tarvitsee vain mukavat liikuntavaatteet. Boulderoinnin lisäksi keskuksesta löytyy kuntosali, Jiu-Jitsu -sali, kahvio sekä sauna- ja kokoustilat.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/boulderkeskus_herttoniemi_ju7a0517.jpg?h=7acff9a3&itok=K7Zb0yZ4",
            copyright_holder: "Boulderkeskus",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/boulderkeskus_herttoniemi_ifsc-routesetting-isatis-13_vaaka.jpg?h=5a9cb40e&itok=nSox6K3y",
            copyright_holder: "Boulderkeskus",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:131", name: "SportCenter" },
        { id: "matko2:266", name: "Climbing" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3147",
      name: {
        fi: "Boulderkeskus Pasila",
        en: "Boulderkeskus Pasila",
        sv: "Boulderkeskus Pasila",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://boulderkeskus.com",
      modified_at: "2019-04-23T12:57:36.000Z",
      location: {
        lat: 60.19639205932617,
        lon: 24.93225860595703,
        address: {
          street_address: "Veturitallinkuja 4",
          postal_code: "00520",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "BK Pasila on Helsingin ensimmäinen boulderointihalli. Kiipeiltävää löytyy niin lapsille kuin aikuisille, ensikertalaisille tai jo aiemmin kiipeilyä harrastaneille. Ammattitaitoinen henkilökunta pitää huolen, että boulderointi on turvallista ja hauskaa! Boulderkeskuksesta saa kaikki tarvittavat välineet, mukaan tarvitaan vain mukavat liikuntavaatteet. Boulderoinnin lisäksi keskuksesta löytyy kuntosali, jooga- ja liikkuvuusstudio sekä hierontapalveluja.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/boulderkeskus_pasila_pasila_5_inka_2.jpg?h=ce6ff830&itok=eR2yKm7i",
            copyright_holder: "Boulderkeskus",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2018-01/boulderkeskus_pasila_tondekurssi-1.jpg?h=17988772&itok=1H5rBzhQ",
            copyright_holder: "Boulderkeskus",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:131", name: "SportCenter" },
        { id: "matko2:266", name: "Climbing" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "18:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2343",
      name: {
        fi: "Boulevard Social",
        en: "Boulevard Social",
        sv: "Boulevard Social",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.boulevardsocial.fi/",
      modified_at: "2020-08-25T08:16:04.000Z",
      location: {
        lat: 60.16596221923828,
        lon: 24.94215202331543,
        address: {
          street_address: "Bulevardi 6",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Boulevard Social tarjoaa Helsingin kauneimman puistokadun varrella ainutlaatuisen yhdistelmän Kreikan, Libanonin, Tunisian, Marokon ja muun Välimeren ympäristön puhtaita, perinteisiä makuja kekseliäällä tavalla yhdisteltynä. Ravintolan pelkistetty bistroympäristö on suunniteltu tuomaan ravintolassa vietetyn hetken pääosaan rakkaudella valmistetut omintakeiset maut. Boulevard Socialissa voi joko pistäytyä lasillisella baarimestareiden hemmoteltavana, varata pöydän ja lähteä makumatkalle pitkäksi illaksi tai nauttia ulkoilmasta ja raikkaista cocktaileista terassilla. \r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/boulevard_social_boulevard_social_mediterranean_plate_c_bw-restaurants_oy_tuukka_koski_location_only.jpg?h=dc361705&itok=vEbqB1iG",
            copyright_holder: "BW-Restaurants Oy / Tuukka Koski",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/boulevard_social_boulevard_social_cocktails_c_bw-restaurants_oy_tuukka_koski_location_only.jpg?h=49d63358&itok=sv_BTxuX",
            copyright_holder: "BW-Restaurants Oy / Tuukka Koski",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/boulevard_social_boulevard_social_sweets_c_bw-restaurants_oy_tuukka_koski_location_only.jpg?h=beed776a&itok=SV3xyGbm",
            copyright_holder: "BW-Restaurants Oy / Tuukka Koski",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:141", name: "Bistro" },
        { id: "matko2:179", name: "MiddleEast" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "16:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3655",
      name: {
        fi: "Boutique Bigarre Nahka-Turkisateljee",
        en: "Boutique Bigarre",
        sv: "Boutique Bigarre",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bigarre.fi",
      modified_at: "2019-08-26T13:58:32.000Z",
      location: {
        lat: 60.171051025390625,
        lon: 24.93054962158203,
        address: {
          street_address: "Arkadiankatu 8",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Nahkavaatteita suomalaisesta poronnahasta. Lammas- sekä vintageturkkien suunnittelu-, mittatilaustyö-, muodistus- ja korjauspalvelu. Vintageturkit pois kaappien kätköistä ja kauniiksi käyttöturkeiksi. Myös nahkavaatteiden puhdistuspalvelu sekä turkiksten säilytys- ja puhdistuspalvelu.\r\n",
        images: [],
      },
      tags: [
        { id: "matko2:65", name: "FursLeather" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
        { id: "matko2:112", name: "Luxury" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "13:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Kesällä lauantaisin suljettu",
      },
    },
    {
      id: "1508",
      name: {
        fi: "Boutique Kaarina K",
        en: "Boutique Kaarina K",
        sv: "Boutique Kaarina K",
        zh: "卡莉娜 K 精品店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url:
        "https://fi-fi.facebook.com/pages/category/Clothing-Store/Boutique-Kaarina-K-108314912571545/",
      modified_at: "2019-03-19T14:51:47.000Z",
      location: {
        lat: 60.16502380371094,
        lon: 24.939716339111328,
        address: {
          street_address: "Annankatu 11",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Liikkeessä edustettuna merkit Versace, Emilio Pucci, Giuseppe Zanotti, Herve Leger, Giambattista Valli, Balmain, Temperley London ja Petteri Hemmilä.\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:44", name: "International" },
        { id: "matko2:112", name: "Luxury" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2586",
      name: {
        fi: "Boutique Linnanen",
        en: "Boutique Linnanen",
        sv: "Boutique Linnanen",
        zh: "林娜宁精品店",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.linnanen.com",
      modified_at: "2019-03-19T14:42:59.000Z",
      location: {
        lat: 60.164859771728516,
        lon: 24.941511154174805,
        address: {
          street_address: "Uudenmaankatu 11",
          postal_code: "00120",
          locality: "HELSINKI",
        },
      },
      description: {
        intro: null,
        body:
          "Boutique Linnaselta löytyy korkealuokkaisia silkki- ja kashmirtakkeja turkisvuorilla ja -somisteilla. Kaikki takit valmistetaan Helsingissä. Tarjolla myös laaja valikoima silkki-kashmirhuiveja turkissomistein.",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:42", name: "Finnish" },
        { id: "matko2:65", name: "FursLeather" },
        { id: "matko2:112", name: "Luxury" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:00:00",
            closes: "18:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "10:00:00",
            closes: "14:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2768",
      name: {
        fi: "Brahenkenttä",
        en: "Brahenkenttä - Brahe Sports Field",
        sv: "Braheplanen",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://palvelukartta.hel.fi/unit/41995",
      modified_at: "2018-12-12T10:03:11.000Z",
      location: {
        lat: 60.18755340576172,
        lon: 24.949554443359375,
        address: {
          street_address: "Helsinginkatu 25",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brahenkenttä on urheilukenttä Alppiharjussa. Kesäisin se toimii pääasiassa jalkapallokenttänä sekä koripallokenttänä. Talvisin se on tekojäärata, jossa pelataan jääpalloa ja luistellaan. Myös vuokraluistimia.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/brahen_tekojaarata_kuvaaja_antero_aaltonen_leonatan_oy_helsingin_kaupungin_aineistopankki.jpg?h=b4f317f7&itok=yZBHLZ1o",
            copyright_holder: "Antero Aaltonen/ Leonatan Oy",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:30", name: "Arena" },
        { id: "matko2:127", name: "Football" },
        { id: "matko2:212", name: "Basketball" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "266",
      name: {
        fi: "Brahenkentän tekojääkenttä",
        en: "Brahe sports field artificial ice rink (Brahenkenttä)",
        sv: "Braheplanens konstisbana",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://palvelukartta.hel.fi/unit/41549",
      modified_at: "2020-03-09T14:28:58.000Z",
      location: {
        lat: 60.187564849853516,
        lon: 24.949596405029297,
        address: {
          street_address: "Helsinginkatu 25",
          postal_code: "00510",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brahenkentän tekojääkentällä on talvisin tarjolla yleisöluistelua musiikin tahdittamana. Kenttä on jaettu kahteen osaan: mailojen kanssa ja ilman mailoja luisteleville. Pika- ja retkiluistimilla luistelu on kielletty yleisöluisteluaikoina. Luistimia voi vuokrata paikan päältä. Kesäisin Brahenkentälle voi mennä fiilistelemään jalkapallo-otteluita tai pelaamaan esim. koripalloa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/brahen_tekojaarata_kuvaaja_antero_aaltonen_leonatan_oy_helsingin_kaupungin_aineistopankki.jpg?h=b4f317f7&itok=yZBHLZ1o",
            copyright_holder: "Antero Aaltonen/ Leonatan Oy",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:5", name: "NATURE & SPORTS" },
        { id: "matko2:36", name: "IceSkating" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception:
          "Luistelukausi 18.11.2019-8.3.2020, ks. aukioloajat kotisivuilta",
      },
    },
    {
      id: "3565",
      name: {
        fi: "Brand Secondhand Helsinki",
        en: "Brand Secondhand Helsinki",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.brandsecondhand.fi",
      modified_at: "2019-11-13T14:18:39.000Z",
      location: {
        lat: 60.16651153564453,
        lon: 24.930288314819336,
        address: {
          street_address: "Ruoholahdenkatu 10",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brand Secondhand on uudenlainen ja raikas, muodin sekä erilaisten hyväkuntoisten merkkituotteiden secondhand myymälä, joka myy vaatteita, kenkiä, laukkuja ja asusteita (korut, kellot, aurinkolasit) sekä naisille että miehille.",
        images: [],
      },
      tags: [
        { id: "matko2:66", name: "Shoes" },
        { id: "matko2:68", name: "SecondHand" },
        { id: "matko2:258", name: "Bags" },
        { id: "matko2:263", name: "FleaMarket" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:180", name: "Fashion" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "16:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "\r\n",
      },
    },
    {
      id: "2094",
      name: {
        fi: "Brasserie Kämp",
        en: "Brasserie Kämp",
        sv: "Brasserie Kämp",
        zh: "坎普餐馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.brasseriekamp.fi",
      modified_at: "2018-09-11T14:39:32.000Z",
      location: {
        lat: 60.16804504394531,
        lon: 24.94715690612793,
        address: {
          street_address: "Pohjoisesplanadi 29",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brasserie Kämp on legendaarisen Hotel Kämpin korkeatasoinen ja hienostunut ravintola Pohjoisesplanadilla keskellä kauneinta historiallista Helsinkiä. Katutasossa sijaitseva Brasserie Kämp on ollut olennainen osa Helsingin sykettä jo vuodesta 1887. Brasserien kulturelli ilmapiiri ja ainutlaatuinen sijainti tarjoaa ihanteellisen miljöön niin lounaalle, illalliselle, iltapäiväteehetkelle kuin brunssillekin.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-12/brasserie%20k%C3%A4%2Cppalace%20k%C3%A4mp.JPG?h=fa1c963e&itok=VM2jQNDY",
            copyright_holder: "Palace Kämp",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:168", name: "Brunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:239", name: "Tea" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:30:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "23:00:00",
            open24h: false,
          },
        ],
        openinghours_exception:
          "Ma-to 11.30-23, pe 11.30-24, la 12-24, su 12-23",
      },
    },
    {
      id: "3952",
      name: {
        fi: "Brasserie Rivoli",
        en: "Brasserie Rivoli",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://rivolirestaurants.fi/",
      modified_at: "2020-08-25T08:42:03.000Z",
      location: {
        lat: 60.16504669189453,
        lon: 24.932050704956055,
        address: {
          street_address: "Albertinkatu 38",
          postal_code: "00180",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ravintola Rivoli on yksi Helsingin ensimmäisistä ranskalaistyyppisistä ravintoloista. Vuonna 1962 perustettu Rivoli on merkittävä uranuurtaja helsinkiläisessä ravintolakulttuurissa. Rivolin lämminhenkinen palvelu, rento ja historiallinen miljöö luovat upeat puitteet maistuvan ruoan sekä laadukkaiden viinien nauttimiseen.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:190", name: "French" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          {
            weekday_id: 5,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "17:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1274",
      name: {
        fi: "Break Sokos Hotel Flamingo",
        en: "Break Sokos Hotel Flamingo",
        sv: "Break Sokos Hotel Flamingo",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.sokoshotels.fi/fi/vantaa/sokos-hotel-flamingo",
      modified_at: "2020-04-20T09:26:27.000Z",
      location: {
        lat: 60.290531158447266,
        lon: 24.96887969970703,
        address: {
          street_address: "Tasetie 8",
          postal_code: "01510",
          locality: "Vantaa",
        },
      },
      description: {
        intro: null,
        body:
          "Break Sokos Hotel Flamingo sijaitsee lähellä Helsinki-Vantaan lentokenttää. \r\n\r\nPohjoismaiden suurimmassa viihde- ja kauppakeskus Flamingossa sijaitseva hotelli on ainutlaatuinen Suomessa. Kauppakeskus kolmessa kerroksessa, kymmenet ravintolat, vesipuisto, keilaradat, elokuvat, seikkailupelit, kuntokeskus ja monet muut hauskat elämykset ovat vain hissimatkan päässä.\r\n\r\nBreak Sokos Hotel Flamingosta löytyy myös 12 modernia, hyvin varusteltua kokoustilaa sekä tilausravintola Bankett Flamingo.",
        images: [],
      },
      tags: [
        { id: "matko2:241", name: "Hotel" },
        { id: "matko2:a-:AliPay", name: "AliPay" },
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko2:15", name: "Banquet" },
        { id: "matko1:1", name: "ACCOMMODATION" },
        { id: "matko2:164", name: "GreenKey" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          { weekday_id: 2, opens: null, closes: null, open24h: false },
          { weekday_id: 3, opens: null, closes: null, open24h: false },
          { weekday_id: 4, opens: null, closes: null, open24h: false },
          { weekday_id: 5, opens: null, closes: null, open24h: false },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3011",
      name: { fi: "Bricco", en: "Bricco", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bricco.fi",
      modified_at: "2018-07-13T11:30:04.000Z",
      location: {
        lat: 60.16664123535156,
        lon: 24.936952590942383,
        address: {
          street_address: "Annankatu 22",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          'Tämän pienen viinibaarin takana on intohimo ja rakkaus italialaisiin viineihin, antipastoihin ja rentoon elämänasenteeseen. Jokainen viini on "käsin poimittu" pieniltä perhetiloilta - ihan paikan päältä. Kaikki viinit ovat orgaanisia, osa biodynaamisia. Ja sama toistuu myös herkkutuotteissa ja antipastoissa.',
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:198", name: "Wine" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "16:00:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "14:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3743",
      name: { fi: "Britannia", en: "Britannia", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.britannia.fi/",
      modified_at: "2020-08-25T08:43:38.000Z",
      location: {
        lat: 60.24135971069336,
        lon: 24.884912490844727,
        address: {
          street_address: "Vanhaistentie 1",
          postal_code: "00420",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Britannia on gastro-pubi Kannelmäessä jo vuodesta 1973. Urheilua, laaja olutvalikoima sekä elävää musiikkia.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "00:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4063",
      name: { fi: "Brokadi", en: "Brokadi", sv: null, zh: "锦官庭" },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.brokadinoodle.com/",
      modified_at: "2020-08-25T08:53:57.000Z",
      location: {
        lat: 60.19696807861328,
        lon: 24.951818466186523,
        address: {
          street_address: "Mäkelänkatu 45",
          postal_code: "00500",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Ravintola Brokadi Vallilassa avasi v.2017 ja on siitä lähtien tarjoillut niin perinteisiä kuin moderneja sichuanilaisia ruokalajeja.\r\n\r\nRavintola Brokadi myös Mall of Triplassa.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:80", name: "Asian" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:229", name: "Restaurant" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "21:30:00",
            open24h: false,
          },
        ],
        openinghours_exception: "Ti-pe suljettu 15-16.30 välillä",
      },
    },
    {
      id: "3196",
      name: {
        fi: "Brokadi Ravintola Tripla",
        en: "Brokadi Ravintola Tripla",
        sv: "Brokadi Ravintola Tripla",
        zh: "锦官庭",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://brokadia.com/",
      modified_at: "2020-08-25T08:46:09.000Z",
      location: {
        lat: 60.198516845703125,
        lon: 24.9310359954834,
        address: {
          street_address: "Fredikanterassi 1, Mall of Tripla",
          postal_code: "00520",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Autenttista, tuoretta, terveellistä ja maukasta sichuanilaista ruokaa, tulisen ruuan ystäville.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:177", name: "Chinese" },
        { id: "matko2:80", name: "Asian" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "11:00:00",
            closes: "21:30:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2344",
      name: { fi: "Bronda", en: "Bronda", sv: "Bronda", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.ravintolabronda.fi/",
      modified_at: "2020-08-25T09:00:15.000Z",
      location: {
        lat: 60.16701126098633,
        lon: 24.945566177368164,
        address: {
          street_address: "Eteläesplanadi 20",
          postal_code: "00130",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bronda tarjoaa modernia brasserieruokaa rennoissa tunnelmissa perheille, kaveriporukoille, yrityksille sekä muille herkkusuille. Korkea, raikas ja vaikuttava tila Korkeavuorenkadun kulmassa suurine ikkunoineen varmistaa upeat puitteet makumatkalle Euroopan keittiösuurvaltoihin Espanjaan, Ranskaan ja Italiaan. Lisäksi myöhäisille tunneille saakka avoinna oleva Bar Bronda tarjoaa laajan valikoiman raikkaita, käsityönä tehtyjä cocktaileja sekä muita juomia. Klo 22.30 asti baarin puolella tarjolla on myös oma Bar Menu. Viikonloppuisin pisteenä i:n päälle illan rytmeistä vastaa DJ.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/bronda_c_bw-restaurants_oy_tuukka_koski_location_only.jpg?h=c4f5e861&itok=vhMmgaSI",
            copyright_holder: "BW-Restaurants Oy / Tuukka Koski",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-01/bronda_bronda_cocktails_c_bw-restaurants_oy_tuukka_koski_location_only.jpg?h=2cd7b1af&itok=BLtgTCAQ",
            copyright_holder: "BW-Restaurants Oy / Tuukka Koski",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko2:236", name: "Spanish" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:198", name: "Wine" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:190", name: "French" },
        { id: "matko2:171", name: "Italian" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "12:00:00",
            closes: "00:30:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "12:00:00",
            closes: "00:30:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "12:00:00",
            closes: "00:30:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "12:00:00",
            closes: "00:30:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "Keittiö sulkee klo 22.30",
      },
    },
    {
      id: "3951",
      name: {
        fi: "Broo Pizza & Bar",
        en: "Broo Pizza & Bar",
        sv: null,
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://broo.webilytest.fi/",
      modified_at: "2020-08-25T09:08:25.000Z",
      location: {
        lat: 60.16721725463867,
        lon: 24.931684494018555,
        address: {
          street_address: "Malminkatu 16",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Uusi Broo Pizza & Bar sijaitsee Helsingin ytimessä, kivenheiton päässä Kampin ostoskeskuksesta.\r\n\r\nLounaslistalta löytyy aina useita vaihtoehtoja, päivittäin vaihtuva Veljen annos sekä tietysti pizzaa. Tarjolla on aina myös runsas ja raikas salaattibuffet.\r\n\r\nIltaa myöten tunnelma tiivistyy ja pizzat täyttävät menun. Maukkaiden pizzojen lisäksi laadukkaat viinit sekä viikonloppuisin soittava DJ takaavat mahtavan tunnelman.\r\n\r\n",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:297", name: "Lunch" },
        { id: "matko2:229", name: "Restaurant" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:186", name: "Pizza" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "04:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "22:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 7,
            opens: "12:00:00",
            closes: "22:00:00",
            open24h: false,
          },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3680",
      name: {
        fi: "Brooklyn Baking Co.",
        en: "Brooklyn Baking Co.",
        sv: "Brooklyn Baking Co.",
        zh: null,
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.brooklyncafeandbakery.com",
      modified_at: "2019-08-26T14:21:32.000Z",
      location: {
        lat: 60.1624755859375,
        lon: 24.939802169799805,
        address: {
          street_address: "Fredrikinkatu 25",
          postal_code: "01200",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Brooklyn Baking Co. (ennen Brklyn Bakery) on valmistanut tuhansia kuppikakkuja vuodesta 2012 sekä satoja kakkuja useisiin helsinkiläisiin juhliin. Liikkeessä on tarjolla valikoima tuotteita keskiviikosta lauantaihin, koko valikoima on tarjolla etukäteen tilattaessa. Lisäksi liikkeessä on valikoima juhlakattaustarvikkeita: kynttilöitä, lautasliinoja ja lautasia, lahjapusseja ja muuta.\r\n\r\nLeipomo sijaitsee samalla kadulla kuin Brooklyn Cafe. \r\n",
        images: [],
      },
      tags: [
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:214", name: "Bakery" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "16:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3076",
      name: {
        fi: "Brooklyn Cafe",
        en: "Brooklyn Cafe",
        sv: "Brooklyn Cafe",
        zh: "布鲁克林咖啡馆",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.brooklyncafeandbakery.com/",
      modified_at: "2020-08-25T09:12:40.000Z",
      location: {
        lat: 60.16105270385742,
        lon: 24.94179344177246,
        address: {
          street_address: "Fredrikinkatu 19",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Pieni pala Brooklynia Helsingissä, tarjolla bageleita, kuppikakkuja, cookieita jne.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2019-03/nayttokuva_2018-04-20_kello_11.jpg?h=19a85307&itok=U_OzUvo6",
            copyright_holder: "Brooklyn Cafe",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "09:00:00",
            closes: "15:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "\r\n",
      },
    },
    {
      id: "3643",
      name: { fi: "Bruket Cafe", en: "Bruket Cafe", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bruketcafe.fi/",
      modified_at: "2020-08-25T09:49:56.000Z",
      location: {
        lat: 60.18319320678711,
        lon: 24.959360122680664,
        address: {
          street_address: "Kaikukatu 4B",
          postal_code: "00530",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bruket on kahvila, lounasravintola ja catering-yritys Elannon vanhassa, vuonna 1923 rakennetussa Leipätehtaassa, joka toimi leipomona 1990-luvulle saakka. Bruketin keittiön kulmakivinä ovat satokausiajattelu ja itse tehty herkullinen ruoka. Kesäisin terassi.",
        images: [],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:297", name: "Lunch" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "09:00:00",
            closes: "19:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "1132",
      name: { fi: "Bruuveri", en: "Bruuveri", sv: "Bruuveri", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bruuveri.fi",
      modified_at: "2018-07-13T11:31:04.000Z",
      location: {
        lat: 60.16838073730469,
        lon: 24.931594848632812,
        address: {
          street_address: "Fredrikinkatu 63 AB, Kampin liikekeskus",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Panimoravintola Bruuveri on yksityinen, vuonna 2006 perustettu tunnelmallinen oluen nautiskelijoiden ja muiden herkkusuiden kohtauspaikka Helsingin sydämessä, Kampin ostoskeskuksessa. Laadukkaista, omia oluita ja siidereitä.",
        images: [],
      },
      tags: [
        { id: "matko1:228", name: "BARS & NIGHTLIFE" },
        { id: "matko2:49", name: "Pub" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "10:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "10:30:00",
            closes: "23:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "10:30:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "10:30:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "10:30:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "2267",
      name: {
        fi: "Bryggeri Helsinki",
        en: "Bryggeri Helsinki",
        sv: "Bryggeri Helsinki",
        zh: "赫尔辛基啤酒厂餐厅酒吧",
      },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://bryggeri.fi/",
      modified_at: "2020-08-25T09:56:32.000Z",
      location: {
        lat: 60.168296813964844,
        lon: 24.95201301574707,
        address: {
          street_address: "Sofiankatu 2",
          postal_code: "00170",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bryggeri Helsinki on panimoravintola joka tarjoaa puhtaista raaka-aineista alusta asti itse valmistettua ruokaa ja olutta. Uusia makuja kehitetään sesonkien mukaan. Bryggeri Helsingin kaikki omat oluet tehdään paikan päällä Torikortteleiden kellarissa. Ne edustavat monipuolisesti eri oluttyylejä ja tarjoillaan tuoreena, jolloin maku on parhaimmillaan. Aidossa panimoravintolassa juomat on räätälöity sopimaan ruokaan.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/BryggeriPub.jpg?h=8a34254b&itok=k0W5jSZ-",
            copyright_holder: "Bryggeri Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/hana_bryggeri.jpg?h=149663ba&itok=Y7-snPQJ",
            copyright_holder: "Bryggeri Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2017-08/terassi_ruoka_bryggeri1.jpg?h=d6078784&itok=AwislgkE",
            copyright_holder: "Bryggeri Helsinki",
            license_type: { id: 1, name: "All rights reserved." },
          },
        ],
      },
      tags: [
        { id: "matko2:49", name: "Pub" },
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:a-:Curated", name: "Curated" },
        { id: "matko2:220", name: "Brewery" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "12:00:00",
            closes: "01:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4043",
      name: { fi: "BUD Helsinki", en: "BUD Helsinki", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://hellobud.fi",
      modified_at: "2020-08-26T11:43:56.000Z",
      location: {
        lat: 60.164878845214844,
        lon: 24.941722869873047,
        address: {
          street_address: "Uudenmaankatu 11",
          postal_code: "00120",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body: "BUD Helsinki on kukkakauppa, baari ja luova tila Punavuoressa.",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-08/bud_helsinki_1_c_bud_helsinki_nick_tulinen_location_only.jpg?h=cceb4d8b&itok=5VM4mgLf",
            copyright_holder: "BUD Helsinki / Nick Tulinen",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-08/bud_helsinki_3_c_bud_helsinki_nick_tulinen_location_only.jpg?h=11e2067c&itok=ktHSJhyu",
            copyright_holder: "BUD Helsinki / Nick Tulinen",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-08/bud_helsinki_4_c_bud_helsinki_nick_tulinen_location_only.jpg?h=73518944&itok=WcgLym2P",
            copyright_holder: "BUD Helsinki / Nick Tulinen",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:2", name: "MEETING PLACES" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:52", name: "Bar" },
        { id: "matko2:178", name: "Florist" },
      ],
      opening_hours: {
        hours: [
          { weekday_id: 1, opens: null, closes: null, open24h: false },
          {
            weekday_id: 2,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "11:00:00",
            closes: "21:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "4031",
      name: { fi: "Buenos Aires", en: "Buenos Aires", sv: null, zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "https://www.buenosaires.fi/",
      modified_at: "2020-08-25T09:59:36.000Z",
      location: {
        lat: 60.16606521606445,
        lon: 24.932294845581055,
        address: {
          street_address: "Eerikinkatu 24",
          postal_code: "00100",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Buenos Aires tarjoilee virvokkeita, erikoiskahveja ja alkoholijuomia, kuten pienpanimotuotteita, huolella valittuja viinejä ja jaloja juomia. Buenos Aires on jo lyhyen olemassaolonsa aikana saavuttanut kulttuuriväen ja kaupunkilaisten suosion. Se on ennen kaikkea seurustelu- ja kohtaamispaikka aikuisille. Iltaisin asiakkaina ovat esimerkiksi elokuviin tai konsertteihin matkalla olevat kaupunkilaiset - unohtamatta lähiseudun ja asukkaita, joiden olohuoneena baari myös toimii.\r\n",
        images: [
          {
            url:
              "https://edit.myhelsinki.fi/sites/default/files/styles/api_1980x1020/public/2020-06/buenos_aires_c_andorra_location_only.jpg?h=f5c1ac2a&itok=DmtGYV78",
            copyright_holder: "Buenos Aires",
            license_type: { id: 2, name: "MyHelsinki license type A" },
          },
        ],
      },
      tags: [
        { id: "matko1:10", name: "RESTAURANTS & CAFES" },
        { id: "matko2:48", name: "Cafe" },
        { id: "matko2:52", name: "Bar" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "15:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "15:00:00",
            closes: "00:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "15:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "15:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "15:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          {
            weekday_id: 6,
            opens: "15:00:00",
            closes: "02:00:00",
            open24h: false,
          },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
    {
      id: "3217",
      name: { fi: "Bukowski", en: "Bukowski", sv: "Bukowski", zh: null },
      source_type: { id: 2, name: "Matko" },
      info_url: "http://www.bukowskis.com",
      modified_at: "2019-08-26T14:33:06.000Z",
      location: {
        lat: 60.1651611328125,
        lon: 24.96839714050293,
        address: {
          street_address: "Mastokatu 4-6",
          postal_code: "00160",
          locality: "Helsinki",
        },
      },
      description: {
        intro: null,
        body:
          "Bukowskis on tarjonnut pian 150 vuoden ajan korkealaatuisia huutokauppoja myyjille ja ostajille ympäri maailman. Perinteisten huutokauppojen ohella Bukowskis tarjoaa myös suosittuja verkkohuutokauppoja.",
        images: [],
      },
      tags: [
        { id: "matko2:211", name: "Furniture" },
        { id: "matko2:67", name: "InteriorDesign" },
        { id: "matko2:69", name: "Antiques" },
        { id: "matko1:9", name: "SHOPPING" },
        { id: "matko2:23", name: "Design" },
      ],
      opening_hours: {
        hours: [
          {
            weekday_id: 1,
            opens: "13:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 2,
            opens: "13:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 3,
            opens: "13:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 4,
            opens: "13:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          {
            weekday_id: 5,
            opens: "13:00:00",
            closes: "17:00:00",
            open24h: false,
          },
          { weekday_id: 6, opens: null, closes: null, open24h: false },
          { weekday_id: 7, opens: null, closes: null, open24h: false },
        ],
        openinghours_exception: "",
      },
    },
  ],
  tags: {
    "matko1:1": "ACCOMMODATION",
    "matko1:10": "RESTAURANTS & CAFES",
    "matko1:169": "SAUNA & WELLNESS",
    "matko1:2": "MEETING PLACES",
    "matko1:225": "VENUES",
    "matko1:226": "WORK & STUDY",
    "matko1:227": "SERVICES",
    "matko1:228": "BARS & NIGHTLIFE",
    "matko1:3": "BANQUET VENUES",
    "matko1:4": "SIGHTS & ATTRACTIONS",
    "matko1:5": "NATURE & SPORTS",
    "matko1:6": "MUSEUMS & GALLERIES",
    "matko1:9": "SHOPPING",
    "matko2:100": "Antiquariat",
    "matko2:101": "BookStore",
    "matko2:103": "Grocery",
    "matko2:104": "RecordStore",
    "matko2:105": "Rock",
    "matko2:106": "Karaoke",
    "matko2:108": "Billiards",
    "matko2:11": "Hostel",
    "matko2:110": "Auditorium",
    "matko2:111": "FreeCatering",
    "matko2:112": "Luxury",
    "matko2:113": "StreetStyle",
    "matko2:117": "Vegetarian",
    "matko2:12": "Apartment",
    "matko2:127": "Football",
    "matko2:129": "Bowling",
    "matko2:131": "SportCenter",
    "matko2:133": "RecreationalCentre",
    "matko2:141": "Bistro",
    "matko2:142": "SmartCasual",
    "matko2:144": "Cocktail",
    "matko2:145": "Organic",
    "matko2:147": "ModernNordic",
    "matko2:148": "Club",
    "matko2:149": "EcoCompass",
    "matko2:15": "Banquet",
    "matko2:158": "Seaside",
    "matko2:164": "GreenKey",
    "matko2:165": "Activity",
    "matko2:166": "AlvarAalto",
    "matko2:167": "Breakfast",
    "matko2:168": "Brunch",
    "matko2:17": "Sauna",
    "matko2:170": "Hamburger",
    "matko2:171": "Italian",
    "matko2:173": "Jazz",
    "matko2:175": "StreetFood",
    "matko2:177": "Chinese",
    "matko2:178": "Florist",
    "matko2:179": "MiddleEast",
    "matko2:18": "SaunaMeeting",
    "matko2:180": "Fashion",
    "matko2:182": "Music",
    "matko2:186": "Pizza",
    "matko2:187": "Beef",
    "matko2:19": "MainAttraction",
    "matko2:190": "French",
    "matko2:191": "IslandRestaurant",
    "matko2:193": "Thai",
    "matko2:196": "Russian",
    "matko2:197": "Vietnamese",
    "matko2:198": "Wine",
    "matko2:20": "Park",
    "matko2:200": "Cosmetics",
    "matko2:206": "Wellness",
    "matko2:208": "EscapeRoom",
    "matko2:21": "Art",
    "matko2:210": "SportOutdoor",
    "matko2:211": "Furniture",
    "matko2:212": "Basketball",
    "matko2:213": "Library",
    "matko2:214": "Bakery",
    "matko2:218": "Viewpoint",
    "matko2:22": "Gallery",
    "matko2:220": "Brewery",
    "matko2:224": "StationaryShop",
    "matko2:229": "Restaurant",
    "matko2:23": "Design",
    "matko2:234": "Vegan",
    "matko2:236": "Spanish",
    "matko2:239": "Tea",
    "matko2:24": "Architecture",
    "matko2:240": "Family",
    "matko2:241": "Hotel",
    "matko2:244": "Beer",
    "matko2:247": "IndieMusic",
    "matko2:249": "Garden",
    "matko2:25": "Church",
    "matko2:253": "MixedSauna",
    "matko2:255": "Candy",
    "matko2:258": "Bags",
    "matko2:259": "Craft",
    "matko2:26": "Theatre",
    "matko2:263": "FleaMarket",
    "matko2:264": "Yoga",
    "matko2:266": "Climbing",
    "matko2:28": "Concert",
    "matko2:282": "Academy",
    "matko2:29": "Sport",
    "matko2:296": "CultureCentre",
    "matko2:297": "Lunch",
    "matko2:30": "Arena",
    "matko2:31": "Swimming",
    "matko2:32": "Beach",
    "matko2:33": "IceSwimming",
    "matko2:36": "IceSkating",
    "matko2:40": "Museum",
    "matko2:41": "Speciality",
    "matko2:42": "Finnish",
    "matko2:44": "International",
    "matko2:48": "Cafe",
    "matko2:49": "Pub",
    "matko2:50": "Nightclub",
    "matko2:52": "Bar",
    "matko2:53": "LiveMusic",
    "matko2:54": "LGBT",
    "matko2:56": "BanquetIsland",
    "matko2:57": "BanquetSeaside",
    "matko2:60": "DepartmentStore",
    "matko2:65": "FursLeather",
    "matko2:66": "Shoes",
    "matko2:67": "InteriorDesign",
    "matko2:68": "SecondHand",
    "matko2:69": "Antiques",
    "matko2:71": "Souvenirs",
    "matko2:72": "Jewellery",
    "matko2:80": "Asian",
    "matko2:82": "RestaurantSummer",
    "matko2:83": "CafeSummer",
    "matko2:95": "Biking",
    "matko2:96": "EquipmentRental",
    "matko2:a-:AliPay": "AliPay",
    "matko2:a-:Curated": "Curated",
    "matko2:a-:GlobalBlue": "GlobalBlue",
    "matko2:a-:JCB": "JCB",
  },
};
