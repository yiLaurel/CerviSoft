const MAP_CONFIG = {
  center: [20.5881, -100.3881], 
  zoom: 12, 
  minZoom: 10,
  maxZoom: 18,
  tileLayers: {
    standard: {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    },
    dark: {
      url: 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
    },
    satellite: {
      url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    }
  },
  iconColors: {
    farmacia: '#2c7be5', 
    'doctor-simi': '#e63757', 
    ortopedia: '#00ab55', 
    distribuidor: '#8e44ad' 
  },
  iconImages: {
    farmacia: 'almohadas/farmacia_guadalajara.png',
    'doctor-simi': 'almohadas/doctor-simi.png',
    ortopedia: 'almohadas/tiendas-ortopedicas.jpg',
    distribuidor: 'almohadas/distribuciones.png'
  }
};


const TIENDAS_DATA = [
  
  {
    name: "Farmacias Guadalajara Ciudad del Sol",
    address: "Ciudad del Sol, Querétaro",
    coords: [20.6436039, -100.4868515],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6441991, -100.4858144],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Montejo",
    address: "Montejo, Querétaro",
    coords: [20.6501749, -100.4791465],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6583861, -100.4719227],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6510218, -100.4717067],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6576496, -100.4594039],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias Guadalajara Suc. Peña Flor",
    address: "Peña Flor, Querétaro",
    coords: [20.6449292, -100.4639333],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Suc. Choles",
    address: "Choles, Querétaro",
    coords: [20.639592, -100.4681706],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "FARMACIAS DEL AHORRO Avenida de la Luz",
    address: "Avenida de la Luz, Querétaro",
    coords: [20.6324181, -100.4669747],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara S.A. De C.V.",
    address: "Querétaro",
    coords: [20.6326493, -100.4659038],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Satelite",
    address: "Satélite, Querétaro",
    coords: [20.6352296, -100.4514805],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Begonias",
    address: "Begonias, Querétaro",
    coords: [20.6281896, -100.4529816],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias Guadalajara Geoplazas",
    address: "Geoplazas, Querétaro",
    coords: [20.6241412, -100.4600197],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.63857, -100.4465615],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6180475, -100.4545142],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.62227, -100.4477889],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6154152, -100.4425196],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6226891, -100.4419631],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias GUADALAJARA",
    address: "Querétaro",
    coords: [20.6166093, -100.4358457],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.6241396, -100.406216],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias Guadalajara",
    address: "Querétaro",
    coords: [20.6075671, -100.3994752],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias Guadalajara",
    address: "Querétaro",
    coords: [20.6035455, -100.4067668],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Alcanfores",
    address: "Alcanfores, Querétaro",
    coords: [20.606429, -100.3870287],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara Corregidora Norte",
    address: "Corregidora Norte, Querétaro",
    coords: [20.5975666, -100.3941601],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.5839537, -100.401284],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacias Guadalajara",
    address: "Querétaro",
    coords: [20.5922027, -100.3932925],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.5880283, -100.3917517],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara FG",
    address: "Querétaro",
    coords: [20.5850029, -100.3906623],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara, S.A. De C.V.",
    address: "Querétaro",
    coords: [20.5855859, -100.3850381],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },
  {
    name: "Farmacia Guadalajara",
    address: "Querétaro",
    coords: [20.5979274, -100.3807604],
    type: "farmacia",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 22:00"
  },

  
  {
    name: "Farmacias Similares 'Lo Mismo Pero Mas Barato'",
    address: "Querétaro",
    coords: [20.642635, -100.4749482],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6313566, -100.4695225],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia",
    address: "Querétaro",
    coords: [20.6387706, -100.4892247],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6433806, -100.4871747],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia Similares",
    address: "Querétaro",
    coords: [20.6407308, -100.4825703],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares Paseos de San Miguel",
    address: "Paseos de San Miguel, Querétaro",
    coords: [20.6550087, -100.4742354],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia de similares popocatepetl",
    address: "Popocatépetl, Querétaro",
    coords: [20.6546789, -100.4509353],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES #100 villas de guadalupe",
    address: "Villas de Guadalupe, Querétaro",
    coords: [20.6455648, -100.461371],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Super Farmacia Similares, Genéricos y de Patente",
    address: "Querétaro",
    coords: [20.6450453, -100.4636561],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6430141, -100.46649],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias similares",
    address: "Querétaro",
    coords: [20.6338776, -100.4581496],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES",
    address: "Querétaro",
    coords: [20.6383036, -100.4491851],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES",
    address: "Querétaro",
    coords: [20.6423513, -100.4502334],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES",
    address: "Querétaro",
    coords: [20.6475027, -100.4505512],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6259513, -100.4553987],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6192699, -100.4566143],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.6225676, -100.4481445],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares Querétaro 97",
    address: "Querétaro",
    coords: [20.590253, -100.4053326],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares Lo Mismo Pero Más Barato",
    address: "Querétaro",
    coords: [20.6000358, -100.3939406],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES",
    address: "Querétaro",
    coords: [20.596455, -100.3937856],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia de similares",
    address: "Querétaro",
    coords: [20.590163, -100.3974867],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia Similares",
    address: "Querétaro",
    coords: [20.585452, -100.3995761],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5871675, -100.3937922],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5883273, -100.3922866],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5916054, -100.3909661],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "FARMACIAS SIMILARES",
    address: "Querétaro",
    coords: [20.590702, -100.3855654],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias de Similares",
    address: "Querétaro",
    coords: [20.598501, -100.3865535],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.568448, -100.366748],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia de Genericos Centro Sur",
    address: "Centro Sur, Querétaro",
    coords: [20.5579422, -100.4358677],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5407528, -100.4409867],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5247319, -100.4325116],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares",
    address: "Querétaro",
    coords: [20.5410176, -100.4341722],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia Similares",
    address: "Querétaro",
    coords: [20.6262312, -100.2775252],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacia Los Heroes",
    address: "Los Héroes, Querétaro",
    coords: [20.6194939, -100.2767048],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },
  {
    name: "Farmacias Similares 'Lo Mismo Pero Mas Barato'",
    address: "Querétaro",
    coords: [20.6091375, -100.3852896],
    type: "doctor-simi",
    phone: "442 123 4567",
    schedule: "Lunes a Domingo: 8:00 - 21:00"
  },

  // Tiendas Ortopédicas (las que proporcionaste)
  {
    name: "Productos Ortopedicos Ortomedika",
    address: "Querétaro",
    coords: [20.6057756, -100.4317299],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00, Sábado: 9:00 - 14:00"
  },
  {
    name: "Ortopedia el pueblito",
    address: "El Pueblito, Querétaro",
    coords: [20.54806, -100.440046],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "SF Ortopedia QRO",
    address: "Querétaro",
    coords: [20.6328564, -100.395496],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Ortopedia Luján",
    address: "Querétaro",
    coords: [20.6172456, -100.4082886],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Casa Emilia Ortopedia Suc. Soriana Quintana",
    address: "Soriana Quintana, Querétaro",
    coords: [20.6156852, -100.4042007],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Material Ortopédico",
    address: "Querétaro",
    coords: [20.6034876, -100.4010991],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Ortopedia Queretaro- fuertes",
    address: "Querétaro",
    coords: [20.5817023, -100.4096863],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Orto Shop",
    address: "Querétaro",
    coords: [20.5808766, -100.4083519],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "APARATOS ORTOPEDICOS AREM",
    address: "Querétaro",
    coords: [20.5839724, -100.4041042],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Ortomedix",
    address: "Querétaro",
    coords: [20.5854415, -100.4023176],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Vida Care - Ortopedia en Querétaro",
    address: "Querétaro",
    coords: [20.5901636, -100.4045499],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "AREM ORTOPEDICOS MATRIZ TECNOLOGICO",
    address: "Tecnológico, Querétaro",
    coords: [20.5912544, -100.4032],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "ORTOPEDIA AREM HIDALGO1",
    address: "Hidalgo, Querétaro",
    coords: [20.5968609, -100.3935776],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Central Orthomedica S.A. de C.V.",
    address: "Querétaro",
    coords: [20.5979146, -100.3934233],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Ortopedia Ortiz Queretaro",
    address: "Querétaro",
    coords: [20.5989459, -100.3864958],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "H ORTOPEDICOS sucursal el cojito feliz",
    address: "Querétaro",
    coords: [20.59318, -100.3851964],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  },
  {
    name: "Ortho sistemas",
    address: "Querétaro",
    coords: [20.5876639, -100.3748247],
    type: "ortopedia",
    phone: "442 123 4567",
    schedule: "Lunes a Viernes: 9:00 - 19:00"
  }
];

const InteractiveMap = {
  map: null,
  baseLayers: {},
  overlayLayers: {},
  markers: {},
  currentLayer: null,

  init() {
    if (!document.getElementById('mapa-tiendas')) return;
    
    this.initMap();
    this.initBaseLayers();
    this.initOverlayLayers();
    this.addTiendas();
    this.setupControls();
    this.setupEventListeners();
    this.setupMapButtons();
  },

  initMap() {
    this.map = L.map('mapa-tiendas', {
      center: MAP_CONFIG.center,
      zoom: MAP_CONFIG.zoom,
      minZoom: MAP_CONFIG.minZoom,
      maxZoom: MAP_CONFIG.maxZoom,
      scrollWheelZoom: true,
      zoomControl: false
    });

    
    L.control.zoom({
      position: 'topright'
    }).addTo(this.map);
  },

  initBaseLayers() {
    this.baseLayers.standard = L.tileLayer(MAP_CONFIG.tileLayers.standard.url, {
      attribution: MAP_CONFIG.tileLayers.standard.attribution,
      maxZoom: MAP_CONFIG.maxZoom
    }).addTo(this.map);

    this.baseLayers.dark = L.tileLayer(MAP_CONFIG.tileLayers.dark.url, {
      attribution: MAP_CONFIG.tileLayers.dark.attribution,
      maxZoom: MAP_CONFIG.maxZoom
    });

    this.baseLayers.satellite = L.tileLayer(MAP_CONFIG.tileLayers.satellite.url, {
      attribution: MAP_CONFIG.tileLayers.satellite.attribution,
      maxZoom: MAP_CONFIG.maxZoom
    });
  },

  initOverlayLayers() {
    this.overlayLayers = {
      farmacia: L.layerGroup(),
      'doctor-simi': L.layerGroup(),
      ortopedia: L.layerGroup(),
      distribuidor: L.layerGroup()
    };

    
    Object.values(this.overlayLayers).forEach(layer => layer.addTo(this.map));
  },

  createCustomIcon(type) {
    const color = MAP_CONFIG.iconColors[type] || '#666';
    const iconUrl = MAP_CONFIG.iconImages[type];
    
   
    return L.divIcon({
      className: `map-marker marker-${type}`,
      html: `
        <div class="marker-container" style="
          background-color: ${color}; 
          border: 2px solid white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        ">
          <img src="${iconUrl}" style="width: 16px; height: 16px; object-fit: contain;">
        </div>
      `,
      iconSize: [24, 24],
      iconAnchor: [12, 24],
      popupAnchor: [0, -24]
    });
  },

  darkenColor(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `#${(0x1000000 + (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 + 
             (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 + 
             (B < 255 ? (B < 1 ? 0 : B) : 255)).toString(16).slice(1)}`;
  },

  addTiendas() {
    TIENDAS_DATA.forEach(tienda => {
      const icon = this.createCustomIcon(tienda.type);
      const marker = L.marker(tienda.coords, { 
        icon,
        riseOnHover: true,
        title: tienda.name
      }).addTo(this.overlayLayers[tienda.type]);
      
      this.markers[tienda.name] = marker;

      const popupContent = this.createPopupContent(tienda);
      marker.bindPopup(popupContent, {
        maxWidth: 300,
        minWidth: 250,
        className: `map-popup popup-${tienda.type}`
      });

     
      marker.on('mouseover', function() {
        this.openPopup();
      });
      
     
      marker.bindTooltip(tienda.name, {
        permanent: false,
        direction: 'top',
        className: 'map-tooltip',
        offset: [0, -12]
      });
    });
    
    
    this.fitToVisibleMarkers();
  },

  createPopupContent(tienda) {
    return `
      <div class="popup-content" style="font-family: 'Poppins', sans-serif;">
        <div class="popup-header" style="
          background-color: ${MAP_CONFIG.iconColors[tienda.type]};
          color: white;
          padding: 8px 12px;
          border-radius: 4px 4px 0 0;
        ">
          <h4 style="margin: 0; font-size: 14px; font-weight: 600;">${tienda.name}</h4>
          <span style="font-size: 12px; opacity: 0.9;">${this.getCategoryName(tienda.type)}</span>
        </div>
        <div class="popup-body" style="padding: 10px 12px;">
          <div class="popup-details">
            <p style="margin: 6px 0; font-size: 13px; display: flex; align-items: flex-start;">
              <i class="fas fa-map-marker-alt" style="margin-right: 8px; margin-top: 2px;"></i>
              <span>${tienda.address}</span>
            </p>
            <p style="margin: 6px 0; font-size: 13px; display: flex; align-items: center;">
              <i class="fas fa-phone" style="margin-right: 8px;"></i>
              <span>${tienda.phone}</span>
            </p>
            <p style="margin: 6px 0; font-size: 13px; display: flex; align-items: flex-start;">
              <i class="fas fa-clock" style="margin-right: 8px; margin-top: 2px;"></i>
              <span>${tienda.schedule}</span>
            </p>
          </div>
          <div class="popup-actions" style="
            display: flex;
            gap: 8px;
            margin-top: 12px;
          ">
            <a href="https://wa.me/524423356604?text=Estoy interesado en las almohadas CerviSoft en ${encodeURIComponent(tienda.name)}" 
               target="_blank"
               style="
                background-color: ${MAP_CONFIG.iconColors[tienda.type]};
                color: white;
                text-decoration: none;
                padding: 6px 12px;
                border-radius: 4px;
                font-size: 12px;
                display: flex;
                align-items: center;
                gap: 5px;
                flex: 1;
                justify-content: center;
               ">
              <i class="fab fa-whatsapp"></i>
              <span>Contactar</span>
            </a>
            <button onclick="window.open('https://www.google.com/maps/dir/?api=1&destination=${tienda.coords[0]},${tienda.coords[1]}')"
               style="
                background-color: white;
                color: ${MAP_CONFIG.iconColors[tienda.type]};
                border: 1px solid ${MAP_CONFIG.iconColors[tienda.type]};
                padding: 6px 12px;
                border-radius: 4px;
                font-size: 12px;
                display: flex;
                align-items: center;
                gap: 5px;
                flex: 1;
                justify-content: center;
                cursor: pointer;
               ">
              <i class="fas fa-directions"></i>
              <span>Cómo llegar</span>
            </button>
          </div>
        </div>
      </div>
    `;
  },

  getCategoryName(type) {
    const names = {
      'farmacia': 'Farmacias Guadalajara',
      'doctor-simi': 'Doctor Simi',
      'ortopedia': 'Tienda Ortopédica',
      'distribuidor': 'Distribuidor Autorizado'
    };
    return names[type] || type;
  },

  setupControls() {
    const baseLayersControl = {
      "Mapa Estándar": this.baseLayers.standard,
      "Mapa Oscuro": this.baseLayers.dark,
      "Satélite": this.baseLayers.satellite
    };

    const overlayLayersControl = {
      "<img src='almohadas/farmacia_guadalajara.png' style='width:16px;height:16px;object-fit:contain;margin-right:5px;'> Farmacias": this.overlayLayers.farmacia,
      "<img src='almohadas/doctor-simi.png' style='width:16px;height:16px;object-fit:contain;margin-right:5px;'> Doctor Simi": this.overlayLayers['doctor-simi'],
      "<img src='almohadas/tiendas-ortopedicas.jpg' style='width:16px;height:16px;object-fit:contain;margin-right:5px;'> Ortopedias": this.overlayLayers.ortopedia,
      "<img src='almohadas/distribuciones.png' style='width:16px;height:16px;object-fit:contain;margin-right:5px;'> Distribuidores": this.overlayLayers.distribuidor
    };

    L.control.layers(baseLayersControl, overlayLayersControl, {
      position: 'topright',
      collapsed: false
    }).addTo(this.map);
  },

  setupEventListeners() {
   
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        this.filterMarkers(filter);
        
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    
    window.addEventListener('resize', () => {
      this.map.invalidateSize();
    });
  },

  setupMapButtons() {
    
    document.querySelectorAll('[data-center-map]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const coords = btn.dataset.centerMap.split(',').map(Number);
        this.map.setView(coords, 15);
      });
    });
  },

  filterMarkers(filter) {
    if (filter === 'all') {
      Object.values(this.overlayLayers).forEach(layer => {
        this.map.addLayer(layer);
      });
    } else {
      Object.entries(this.overlayLayers).forEach(([type, layer]) => {
        if (type === filter) {
          this.map.addLayer(layer);
        } else {
          this.map.removeLayer(layer);
        }
      });
    }
    
    this.fitToVisibleMarkers();
  },

  fitToVisibleMarkers() {
    const bounds = new L.LatLngBounds();
    
    Object.entries(this.overlayLayers).forEach(([type, layer]) => {
      if (this.map.hasLayer(layer)) {
        layer.eachLayer(marker => {
          bounds.extend(marker.getLatLng());
        });
      }
    });
    
    if (bounds.isValid()) {
      this.map.fitBounds(bounds, { 
        padding: [50, 50],
        maxZoom: 13
      });
    } else {
      this.map.setView(MAP_CONFIG.center, MAP_CONFIG.zoom);
    }
  },

  zoomToMarker(markerName) {
    const marker = this.markers[markerName];
    if (marker) {
      let type;
      for (const [key, layer] of Object.entries(this.overlayLayers)) {
        if (layer.hasLayer(marker)) {
          type = key;
          break;
        }
      }
      
      if (type) {
        this.filterMarkers(type);
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
          btn.classList.remove('active');
          if (btn.dataset.filter === type) {
            btn.classList.add('active');
          }
        });
      }
      
      this.map.setView(marker.getLatLng(), 15);
      marker.openPopup();
    }
  }
};


document.addEventListener('DOMContentLoaded', () => {
  // Inicializar el mapa
  InteractiveMap.init();

  
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function() {
      document.getElementById('navbar').classList.toggle('active');
    });
  }

 
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('navbar').classList.remove('active');
    });
  });

 
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});


window.addEventListener('load', function() {
  if (InteractiveMap.map) {
    InteractiveMap.map.invalidateSize();
  }
});