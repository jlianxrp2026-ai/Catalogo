const fs = require('fs');
const path = require('path');

const productosPath = path.join(__dirname, '..', 'src', 'productos.json');
const productos = JSON.parse(fs.readFileSync(productosPath, 'utf8'));

// Curated fragrance profile definitions inspired by Fragrantica
const perfumeProfiles = [
  // 9 PM / 9 AM
  {
    regex: /9\s*pm\s*pour\s*femme/i,
    description: "Una fragancia femenina envolvente y vibrante que combina notas afrutadas de manzana jugosa con un corazón floral seductor y un fondo de ámbar y vainilla.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Floral blanco", "Ámbar"],
    notes: {
      top: ["Manzana", "Naranja", "Frambuesa"],
      heart: ["Jazmín", "Flor de azahar", "Rosa"],
      base: ["Vainilla", "Ámbar", "Cedro", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Tarde"], occasion: "Salidas nocturnas, citas románticas y fiestas" }
  },
  {
    regex: /9\s*pm/i,
    description: "Una fragancia masculina icónica famosa por su apertura dulce y especiada con canela y manzana silvestre, seguida de un fondo avainillado y seductor irresistible.",
    accords: ["Avainillado", "Especiado cálido", "Dulce", "Afrutado", "Canela", "Lavanda"],
    notes: {
      top: ["Manzana silvestre", "Canela", "Lavanda salvaje", "Bergamota"],
      heart: ["Flor de azahar del naranjo", "Lirio de los valles"],
      base: ["Vainilla", "Haba tonka", "Ámbar", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas, fiestas, salidas nocturnas y conquista" }
  },
  {
    regex: /9\s*am\s*dive/i,
    description: "Una explosión acuática y refrescante de menta helada, limón chispeante y grosellas negras con un toque especiado que recuerda a la brisa marina.",
    accords: ["Aromático", "Cítrico", "Fresco especiado", "Afrutado", "Verde"],
    notes: {
      top: ["Menta helada", "Limón", "Grosellas negras", "Pimienta rosa"],
      heart: ["Manzana", "Incienso", "Madera de cedro"],
      base: ["Jengibre", "Sándalo", "Pachulí", "Jazmín"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, gimnasio, oficina y playa" }
  },
  {
    regex: /9\s*am\s*pour\s*femme/i,
    description: "Aroma fresco y radiante para dama con notas cítricas luminosas y un fondo almizclado suave que transmite energía y sofisticación.",
    accords: ["Cítrico", "Afrutado", "Fresco", "Almizclado", "Floral"],
    notes: {
      top: ["Mandarina", "Bergamota de Calabria", "Toronja"],
      heart: ["Grosellas negras", "Frambuesa", "Rosa"],
      base: ["Almizcle blanco", "Ámbar", "Naranja"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, trabajo y mañanas frescas" }
  },
  {
    regex: /9\s*am/i,
    description: "Fragancia versátil y fresca que abre con cítricos chispeantes y manzana, evolucionando hacia un corazón aromático y maderas reconfortantes.",
    accords: ["Cítrico", "Aromático", "Fresco especiado", "Amaderado"],
    notes: {
      top: ["Mandarina", "Limón", "Cardamomo", "Pimienta rosa"],
      heart: ["Lavanda", "Flor de azahar", "Rosa verde"],
      base: ["Cedro", "Pachulí", "Musgo", "Ámbar"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Oficina, reuniones y actividades diarias" }
  },

  // Hawas Series
  {
    regex: /hawas\s*ice/i,
    description: "Una versión intensamente gélida y revitalizante del clásico Hawas, potenciada con anís estrellado, menta helada y una fijación marina descomunal.",
    accords: ["Acuático", "Cítrico", "Afrutado", "Fresco especiado", "Aromático"],
    notes: {
      top: ["Menta helada", "Limón de Sicilia", "Manzana", "Anís estrellado"],
      heart: ["Ciruela", "Flor de azahar", "Cardamomo", "Notas marinas"],
      base: ["Ámbar gris", "Almizcle", "Pachulí", "Madera flotante"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Eventos al aire libre, salidas y conquista en clima cálido" }
  },
  {
    regex: /hawas\s*black/i,
    description: "La faceta más oscura, elegante y madura de la línea Hawas, con maderas ahumadas, especias profundas y cuero sofisticado.",
    accords: ["Amaderado", "Especiado cálido", "Aromático", "Ámbar", "Cuero"],
    notes: {
      top: ["Bergamota", "Pimienta negra", "Cardamomo"],
      heart: ["Notas marinas oscuras", "Lavanda", "Incienso"],
      base: ["Pachulí", "Madera de cedro", "Ámbar gris", "Cuero"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas formales, eventos elegantes y ocasiones especiales" }
  },
  {
    regex: /hawas/i,
    description: "Uno de los perfumes árabes más aclamados del mundo. Combina notas marinas frescas con ciruela madura, manzana jugosa y un fondo de ámbar gris adictivo.",
    accords: ["Acuático", "Afrutado", "Cítrico", "Fresco especiado", "Ámbar"],
    notes: {
      top: ["Manzana", "Bergamota", "Limón", "Canela"],
      heart: ["Ciruela", "Cardamomo", "Flor de azahar", "Notas marinas"],
      base: ["Ámbar gris", "Almizcle", "Pachulí", "Madera flotante"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario, citas y fiestas en cualquier clima templado" }
  },

  // Asad Series
  {
    regex: /asad\s*zanzibar/i,
    description: "Inspirado en la exótica isla de Zanzíbar, combina agua de coco cremosa, pimienta negra y notas salinas con un fondo de vainilla e incienso hipnótico.",
    accords: ["Coco", "Aromático", "Especiado cálido", "Marino", "Avainillado"],
    notes: {
      top: ["Pimienta negra", "Lavanda oceánica", "Notas salinas"],
      heart: ["Agua de coco", "Iris aterciopelado", "Sal marina"],
      base: ["Vainilla de Madagascar", "Incienso"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Vacaciones, salidas casuales y noches de verano" }
  },
  {
    regex: /asad/i,
    description: "Una fragancia imponente y especiada con un perfil similar a Sauvage Elixir. Destaca por su salida de pimienta negra y tabaco con un corazón de café y vainilla.",
    accords: ["Especiado cálido", "Ámbar", "Avainillado", "Amaderado", "Café"],
    notes: {
      top: ["Pimienta negra", "Piña madura", "Tabaco rubio"],
      heart: ["Café tostado", "Iris", "Pachulí"],
      base: ["Ámbar", "Vainilla", "Maderas nobles", "Benjuí"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos nocturnos, climas fríos y ocasiones donde quieras destacar" }
  },

  // Khamrah & Qahwa
  {
    regex: /qawha|qahwa/i,
    description: "Una versión aún más rica y decadente del éxito Khamrah, enriquecida con café árabe recién tostado, cardamomo y dátiles bañados en canela.",
    accords: ["Café", "Especiado cálido", "Dulce", "Avainillado", "Canela"],
    notes: {
      top: ["Café árabe", "Cardamomo", "Canela", "Jengibre"],
      heart: ["Dátiles confitados", "Praliné", "Frutas confitadas", "Flores blancas"],
      base: ["Vainilla Bourbon", "Haba tonka", "Benjuí", "Almizcle"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches frías, citas y cenas elegantes" }
  },
  {
    regex: /khamrah/i,
    description: "Una obra maestra gourmand que evoca licores especiados, canela dulce y dátiles bañados en praliné con un fondo de vainilla y ámbar reconfortante.",
    accords: ["Dulce", "Canela", "Especiado cálido", "Avainillado", "Ámbar"],
    notes: {
      top: ["Canela de Ceilán", "Nuez moscada", "Bergamota"],
      heart: ["Dátiles", "Praliné de chocolate", "Nardos", "Mahonial"],
      base: ["Vainilla", "Haba tonka", "Benjuí", "Mirra", "Madera de akigala"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Climas frescos, fiestas navideñas y eventos especiales" }
  },

  // Amber Oud Series (Al Haramain)
  {
    regex: /amber\s*oud.*gold/i,
    description: "Fragancia frutal y dulce unisex legendaria inspirada en Erba Pura. Una explosión de melón maduro y piña con una estela de ámbar y vainilla insuperable.",
    accords: ["Dulce", "Afrutado", "Ámbar", "Avainillado", "Almizclado"],
    notes: {
      top: ["Bergamota", "Notas verdes"],
      heart: ["Melón dulce", "Piña", "Notas golosas", "Ámbar"],
      base: ["Vainilla", "Almizcle blanco", "Notas amaderadas"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, eventos sociales y donde quieras llamar la atención" }
  },
  {
    regex: /amber\s*oud.*ruby/i,
    description: "Inspirada en Baccarat Rouge 540 Extrait de Parfum, combina almendra amarga tostada, azafrán resplandeciente y madera de cedro en un fondo de ámbar gris.",
    accords: ["Almendrado", "Ámbar", "Amaderado", "Especiado cálido", "Metálico"],
    notes: {
      top: ["Almendra amarga", "Azafrán"],
      heart: ["Jazmín egipcio", "Madera de cedro"],
      base: ["Ámbar gris", "Notas amaderadas", "Almizcle"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Eventos de gala, citas románticas y elegancia pura" }
  },
  {
    regex: /amber\s*oud.*aqua/i,
    description: "Aroma fresco y marino con acordes cítricos luminosos y una base elegante de ámbar y almizcle.",
    accords: ["Cítrico", "Acuático", "Fresco", "Amaderado"],
    notes: {
      top: ["Bergamota", "Mandarina", "Notas marinas"],
      heart: ["Grosellas negras", "Jazmín"],
      base: ["Ámbar gris", "Cedro", "Almizcle"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, actividades al aire libre y oficina" }
  },
  {
    regex: /amber\s*oud/i,
    description: "Fragancia oriental amaderada noble que mezcla romero aromático, cedro y especias orientales con un corazón de resinas y ámbar.",
    accords: ["Amaderado", "Aromático", "Ámbar", "Fresco especiado"],
    notes: {
      top: ["Romero", "Cedro", "Bergamota", "Limón"],
      heart: ["Especias orientales", "Madera de gaiac"],
      base: ["Ámbar", "Almizcle", "Bálsamo"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Uso profesional, elegancia y clima fresco" }
  },

  // Club de Nuit Series (Armaf)
  {
    regex: /club.*nuit.*intense|clib.*nuit/i,
    description: "El clon definitivo del afamado Creed Aventus. Abre con un cítrico ahumado vibrante y piña, dando paso a abedul ahumado y un fondo de almizcle duradero.",
    accords: ["Cítrico", "Ahumado", "Afrutado", "Amaderado", "Cuero"],
    notes: {
      top: ["Limón", "Piña", "Bergamota", "Grosellas negras", "Manzana"],
      heart: ["Abedul ahumado", "Jazmín", "Rosa"],
      base: ["Almizcle", "Ámbar gris", "Pachulí", "Vainilla"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia firma indiscutible para oficina, citas y reuniones" }
  },
  {
    regex: /club.*nuit.*untold|ckub.*nuit.*untold/i,
    description: "Inspirada en Baccarat Rouge 540, presenta una fascinante danza de azafrán dorado, jazmín blanco y amberwood que deja una estela sofisticada en el aire.",
    accords: ["Amaderado", "Ámbar", "Especiado cálido", "Metálico", "Aromático"],
    notes: {
      top: ["Azafrán", "Jazmín"],
      heart: ["Amberwood", "Ámbar gris"],
      base: ["Resina de abeto", "Madera de cedro"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Eventos especiales, elegancia y conquista" }
  },
  {
    regex: /club.*nuit.*iconic/i,
    description: "Inspirada en Bleu de Chanel, una composición azul vibrante de toronja, menta fresca y jengibre sobre una base de incienso y maderas finas.",
    accords: ["Cítrico", "Aromático", "Fresco especiado", "Amaderado", "Ahumado"],
    notes: {
      top: ["Toronja", "Limón", "Menta", "Pimienta rosa"],
      heart: ["Jengibre", "Nuez moscada", "Jazmín", "Melón"],
      base: ["Incienso", "Ámbar", "Cedro", "Sándalo", "Pachulí"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia todoterreno ideal para cualquier ocasión" }
  },

  // Yara Series (Lattafa)
  {
    regex: /yara\s*candy/i,
    description: "Una deliciosa explosión azucarada de gomitas de fresa, mandarina confitada y vainilla esponjosa que enamora a los amantes de lo dulce.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Gourmand", "Cítrico"],
    notes: {
      top: ["Grosella negra confitada", "Mandarina verde"],
      heart: ["Caramelo de fresa", "Gardenia"],
      base: ["Vainilla", "Ámbar", "Sándalo"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Salidas casuales, citas diurnas y alegría cotidiana" }
  },
  {
    regex: /yara\s*tous/i,
    description: "Un festín tropical de mango maduro jugoso, crema de coco y fruta de la pasión con una base de vainilla y almizcle acariciador.",
    accords: ["Tropical", "Mango", "Dulce", "Coco", "Afrutado", "Avainillado"],
    notes: {
      top: ["Mango jugoso", "Coco cremoso", "Maracuyá"],
      heart: ["Jazmín", "Heliotropo", "Flor de azahar"],
      base: ["Vainilla", "Madera de cachemira", "Almizcle blanco"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, playa, piscina y tardes alegres" }
  },
  {
    regex: /yara\s*moi/i,
    description: "La versión blanca y cremosa de Yara. Destaca por su apertura de melocotón blanco y jazmín envuelto en un caramelo tibio y pachulí suave.",
    accords: ["Caramelo", "Dulce", "Afrutado", "Amaderado", "Avainillado"],
    notes: {
      top: ["Melocotón blanco", "Jazmín"],
      heart: ["Caramelo", "Ámbar"],
      base: ["Pachulí", "Sándalo"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Tarde"], occasion: "Salidas con amigas, citas y días templados" }
  },
  {
    regex: /yara/i,
    description: "La fragancia femenina más viral del mundo árabe. Un batido de fresas con crema, orquídeas atalcadas y vainilla suave irresistible.",
    accords: ["Dulce", "Avainillado", "Atalcado", "Afrutado", "Floral"],
    notes: {
      top: ["Orquídea", "Heliotropo", "Mandarina"],
      heart: ["Acorde gourmand de frutas tropicales", "Golosinas"],
      base: ["Vainilla", "Almizcle", "Sándalo"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Uso diario, escuela, universidad y salidas casuales" }
  },

  // Eclaire (Lattafa)
  {
    regex: /eclaire/i,
    description: "Inspirada en Bianco Latte, es el perfume gourmand definitivo: leche caliente condensada, caramelo derretido y vainilla dorada.",
    accords: ["Avainillado", "Caramelo", "Dulce", "Lactónico", "Miel"],
    notes: {
      top: ["Caramelo derretido", "Leche tibia", "Azúcar moreno"],
      heart: ["Miel blanca", "Flores blancas"],
      base: ["Vainilla", "Praliné", "Almizcle suave"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Tarde"], occasion: "Días fríos, tardes de café y momentos acogedores" }
  },

  // Delilah (Alhambra)
  {
    regex: /delihah|delilah/i,
    description: "Inspirada en Delina de Parfums de Marly. Una rosa turca fastuosa y aristocrática combinada con lichi exótico, ruibarbo jugoso y vainilla.",
    accords: ["Floral", "Rosa", "Afrutado", "Fresco", "Verde"],
    notes: {
      top: ["Ruibarbo", "Lichi jugoso", "Bergamota"],
      heart: ["Rosa turca", "Peonía", "Lirio de los valles"],
      base: ["Madera de cachemira", "Almizcle blanco", "Vainilla"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Bodas, eventos elegantes, citas románticas y reuniones de día" }
  },

  // Nebras (Lattafa)
  {
    regex: /nebras/i,
    description: "Inspirada en Eilish de Billie Eilish. Bayas rojas jugosas combinadas con chocolate cremoso de cacao puro y vainilla cálida envolvente.",
    accords: ["Vainilla", "Dulce", "Cacao", "Afrutado", "Cálido especiado"],
    notes: {
      top: ["Bayas rojas", "Mandarina"],
      heart: ["Vainilla Bourbon", "Cacao puro", "Rosa"],
      base: ["Azúcar", "Haba tonka", "Ámbar", "Almizcle"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas íntimas, clima frío y amantes del chocolate con vainilla" }
  },

  // Bade'e Al Oud Series
  {
    regex: /bade.*oud.*amethyst/i,
    description: "Inspirada en Atomic Rose de Initio. Un dúo de rosas de Turquía y Bulgaria realzado por pimienta rosa y una base sensual de oud y ámbar.",
    accords: ["Rosa", "Floral", "Ambarado", "Especiado suave", "Oud"],
    notes: {
      top: ["Rosa", "Pimienta rosa"],
      heart: ["Rosa turca", "Rosa búlgara", "Jazmín"],
      base: ["Oud", "Ámbar", "Vainilla"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Eventos elegantes, cenas románticas y salidas nocturnas" }
  },
  {
    regex: /bade.*oud.*honor|honor.*glory|bade.*hyg/i,
    description: "Una piña caramelizada a la brasa con toques de canela y cúrcuma que reposa sobre una crema de vainilla sublime y madera de cachemira.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Especiado cálido", "Amaderado"],
    notes: {
      top: ["Piña brûlée", "Crème brûlée"],
      heart: ["Canela", "Benjuí", "Pimienta negra", "Cúrcuma"],
      base: ["Vainilla", "Cachemira", "Sándalo", "Musgo"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y momentos para recibir cumplidos" }
  },
  {
    regex: /bade.*oud.*sublime/i,
    description: "Inspirada en Eden Juicy Apple de Kayali. Manzana roja crujiente y ciruela dulce con un fondo floral chispeante y musgo fresco.",
    accords: ["Afrutado", "Dulce", "Fresco", "Verde", "Floral"],
    notes: {
      top: ["Manzana roja", "Lichi", "Ciruela"],
      heart: ["Rosa blanca", "Jazmín"],
      base: ["Vainilla", "Musgo", "Pachulí"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, escuela, oficina y mañanas de sol" }
  },
  {
    regex: /bade.*for\s*glory/i,
    description: "Inspirada en Oud for Greatness de Initio. Azafrán noble, nuez moscada y lavanda sobre un oud majestuoso que denota poder y estatus.",
    accords: ["Oud", "Especiado cálido", "Amaderado", "Pachulí", "Lavanda"],
    notes: {
      top: ["Azafrán", "Nuez moscada", "Lavanda"],
      heart: ["Oud (madera de agar)", "Pachulí"],
      base: ["Oud", "Pachulí", "Almizcle"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Reuniones de negocios de alto nivel, galas y ocasiones formales" }
  },

  // Fakhar Series (Lattafa)
  {
    regex: /fakhar\s*(rose|feminino|gold)/i,
    description: "Inspirada en L'Interdit de Givenchy. Nardos opulentos, flor de azahar y jazmín árabe con un toque de granada dulce y sándalo.",
    accords: ["Floral blanco", "Tuberosa", "Dulce", "Afrutado", "Amaderado"],
    notes: {
      top: ["Granada", "Azucena", "Rosa", "Frutas dulces"],
      heart: ["Nardos", "Jazmín sambac", "Madreselva"],
      base: ["Vainilla", "Sándalo", "Almizcle blanco"]
    },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Cenas formales, eventos sociales y elegancia clásica" }
  },
  {
    regex: /fakhar/i,
    description: "Inspirada en Y EDP de Yves Saint Laurent. Manzana fresca crujiente, jengibre y salvia sobre un fondo amaderado aromático superversátil.",
    accords: ["Aromático", "Amaderado", "Fresco especiado", "Cítrico", "Afrutado"],
    notes: {
      top: ["Manzana verde", "Bergamota", "Jengibre"],
      heart: ["Salvia", "Bayas de enebro", "Lavanda", "Geranio"],
      base: ["Amberwood", "Haba tonka", "Cedro", "Vetiver"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, oficina, salidas y citas" }
  },

  // Sauvage & Elixir
  {
    regex: /elixir\s*sauvage|sauvage.*elixir/i,
    description: "Una concentración prodigiosa con notas de regaliz negro, nuez moscada y canela fundidas en lavanda nocturna y maderas de sándalo hipnóticas.",
    accords: ["Especiado cálido", "Amaderado", "Lavanda", "Fresco especiado", "Regaliz"],
    notes: {
      top: ["Canela", "Nuez moscada", "Cardamomo", "Toronja"],
      heart: ["Lavanda salvaje"],
      base: ["Regaliz", "Sándalo", "Ámbar", "Pachulí", "Vetiver"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos imponentes donde busques marcar territorio y elegancia extrema" }
  },
  {
    regex: /sauvage/i,
    description: "El perfume masculino más vendido de la era moderna. Bergamota de Calabria radiante con pimienta de Sichuan sobre una estela magnética de ambroxan.",
    accords: ["Fresco especiado", "Ámbar", "Cítrico", "Aromático", "Almizclado"],
    notes: {
      top: ["Bergamota de Calabria", "Pimienta"],
      heart: ["Pimienta de Sichuan", "Lavanda", "Pimienta rosa", "Vetiver", "Geranio"],
      base: ["Ambroxan", "Cedro", "Ládano"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Firma personal para cualquier lugar y momento" }
  },

  // Bleu de Chanel
  {
    regex: /blue\s*de\s*chanel|bleu\s*de\s*chanel/i,
    description: "El arquetipo de la elegancia masculina contemporánea. Cítricos vigorizantes con menta fresca sobre un fondo de cedro, incienso y sándalo refinado.",
    accords: ["Cítrico", "Aromático", "Amaderado", "Fresco especiado", "Ahumado"],
    notes: {
      top: ["Toronja", "Limón", "Menta", "Pimienta rosa"],
      heart: ["Jengibre", "Nuez moscada", "Jazmín", "Iso E Super"],
      base: ["Incienso", "Vetiver", "Cedro", "Sándalo", "Pachulí", "Ládano"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Trabajo, citas, reuniones ejecutivas y ocasiones especiales" }
  },

  // Eros Series (Versace)
  {
    regex: /eros\s*flame/i,
    description: "El dios del amor encendido en pasión. Mandarina italiana picante, romero aromático y pimienta sobre un fondo ardiente de vainilla y maderas.",
    accords: ["Cítrico", "Especiado cálido", "Vainilla", "Aromático", "Amaderado"],
    notes: {
      top: ["Mandarina", "Pimienta negra", "Chinotto", "Limón", "Romero"],
      heart: ["Pimienta", "Geranio", "Rosa"],
      base: ["Vainilla de Madagascar", "Haba tonka", "Sándalo", "Cedro de Texas", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Citas románticas, salidas con amigos y clima fresco" }
  },
  {
    regex: /eros\s*energy/i,
    description: "La frescura cítrica mediterránea definitiva. Una explosión vibrante de bergamota, limón y mandarina con una estela moderna de ambroxan.",
    accords: ["Cítrico", "Fresco", "Aromático", "Verde"],
    notes: {
      top: ["Limón de Italia", "Bergamota", "Naranja sanguina", "Lima"],
      heart: ["Pimienta rosa", "Grosellas negras", "Ámbar blanco"],
      base: ["Pachulí", "Almizcle", "Musgo de roble"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, calor intenso y actividades al aire libre" }
  },
  {
    regex: /eros/i,
    description: "Inspirada en la mitología griega del amor y la pasión. Menta fresca crujiente, manzana verde y haba tonka con un fondo sensual de vainilla y ambroxan.",
    accords: ["Avainillado", "Aromático", "Verde", "Fresco especiado", "Dulce"],
    notes: {
      top: ["Menta fresca", "Manzana verde", "Limón italiano"],
      heart: ["Haba tonka", "Ambroxan", "Geranio"],
      base: ["Vainilla de Madagascar", "Cedro del Atlas", "Vetiver", "Musgo de roble"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Fiestas, clubes, citas y momentos donde quieras destacar" }
  },

  // JPG Le Male & Scandal Series
  {
    regex: /jpg.*le\s*male\s*elixir|le\s*male\s*elixir/i,
    description: "Una poción ardiente y seductora de miel dorada, haba tonka tostada y tabaco dulce sobre lavanda y menta aromática.",
    accords: ["Dulce", "Miel", "Avainillado", "Tabaco", "Lavanda", "Ámbar"],
    notes: {
      top: ["Lavanda", "Menta"],
      heart: ["Vainilla Bourbon", "Benjuí"],
      base: ["Miel dorada", "Haba tonka", "Tabaco"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas, noches de frío y fiestas" }
  },
  {
    regex: /jpg.*le\s*beau|le\s*beau/i,
    description: "El jardín del Edén masculino. Una combinación embriagadora de bergamota refrescante, madera de coco tropical y haba tonka golosa.",
    accords: ["Coco", "Dulce", "Cítrico", "Avainillado", "Amaderado"],
    notes: {
      top: ["Bergamota fresca", "Piña"],
      heart: ["Madera de coco", "Notas marinas"],
      base: ["Haba tonka", "Sándalo", "Ámbar"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Vacaciones, salidas casuales y conquista" }
  },
  {
    regex: /scandal/i,
    description: "La combinación perfecta entre caramelo tostado, haba tonka y vetiver amaderado con un toque de mandarina. Dulce, magnético y audaz.",
    accords: ["Caramelo", "Dulce", "Avainillado", "Cítrico", "Amaderado"],
    notes: {
      top: ["Mandarina", "Salvia"],
      heart: ["Caramelo", "Haba tonka"],
      base: ["Vetiver", "Cedro"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas nocturnas y conquista" }
  },
  {
    regex: /ultra\s*male/i,
    description: "El rey indiscutible de las fiestas. Pera jugosa dulce y canela con lavanda negra y un fondo envolvente de vainilla negra.",
    accords: ["Dulce", "Avainillado", "Afrutado", "Canela", "Lavanda"],
    notes: {
      top: ["Pera madura", "Lavanda", "Menta", "Bergamota"],
      heart: ["Canela", "Alcaravea", "Salvia esclarea"],
      base: ["Cáscara de vainilla negra", "Ámbar", "Pachulí", "Cedro"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Club, eventos nocturnos y fiestas" }
  },

  // Stronger With You Series (Armani)
  {
    regex: /swy.*intensly|swy.*intense/i,
    description: "Una adicción cálida y dulce de castañas confitadas, canela y pimienta rosa sobre un manto aterciopelado de vainilla y gamuza.",
    accords: ["Avainillado", "Especiado cálido", "Dulce", "Ambarado", "Canela"],
    notes: {
      top: ["Pimienta rosa", "Enebro de Virginia", "Violeta"],
      heart: ["Canela", "Lavanda", "Salvia", "Caramelo toffee"],
      base: ["Vainilla", "Haba tonka", "Ámbar", "Gamuza"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas en pareja, climas fríos y veladas íntimas" }
  },
  {
    regex: /swy|stronger\s*with\s*you/i,
    description: "Fragancia seductora para el hombre moderno. Cardamomo especiado y menta fresca combinados con castaña dulce, salvia aromática y vainilla.",
    accords: ["Avainillado", "Aromático", "Especiado cálido", "Dulce", "Castaña"],
    notes: {
      top: ["Cardamomo", "Pimienta rosa", "Hojas de violeta", "Menta"],
      heart: ["Piña", "Canela", "Melón", "Salvia", "Lavanda"],
      base: ["Vainilla", "Castaña", "Madera de cedro", "Amberwood"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Uso diario en frío, citas y reuniones sociales" }
  },

  // One Million Series
  {
    regex: /one\s*million.*royal|million.*royal/i,
    description: "Una reinterpretación majestuosa con lavanda aromática pura, madera de cedro profunda y benjuí sensual que proyecta opulencia.",
    accords: ["Amaderado", "Aromático", "Lavanda", "Ámbar", "Balsámico"],
    notes: {
      top: ["Cardamomo", "Tangerina", "Bergamota"],
      heart: ["Lavanda", "Salvia", "Hojas de violeta"],
      base: ["Benjuí", "Cedro", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Eventos elegantes, cenas de gala y ocasiones memorables" }
  },
  {
    regex: /one\s*million|million/i,
    description: "El lingote de oro que revolucionó la perfumería mundial. Mandarina sanguina y menta con canela especiada, cuero seductor y ámbar.",
    accords: ["Especiado cálido", "Canela", "Cítrico", "Cuero", "Ámbar"],
    notes: {
      top: ["Mandarina roja", "Toronja", "Menta"],
      heart: ["Canela", "Notas especiadas", "Rosa"],
      base: ["Ámbar", "Cuero", "Notas amaderadas", "Pachulí hindú"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas y celebración" }
  },

  // Invictus Series
  {
    regex: /invictus.*victory|invivuctus.*victory/i,
    description: "Duelo extremo entre frescura vigorosa y sensualidad magnética: limón chispeante y pimienta rosa chocan contra haba tonka oscura y vainilla profunda.",
    accords: ["Vainilla", "Ámbar", "Dulce", "Aromático", "Cítrico"],
    notes: {
      top: ["Limón", "Pimienta rosa"],
      heart: ["Lavanda", "Incienso"],
      base: ["Haba tonka", "Vainilla", "Ámbar"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Citas, salidas y momentos donde quieras oler dulce y masculino" }
  },
  {
    regex: /invictus/i,
    description: "El aroma de la victoria. Una sacudida marina vigorizante con pomelo fresco y hojas de laurel sobre una base de madera de gaiac y ámbar gris.",
    accords: ["Cítrico", "Marino", "Aromático", "Fresco", "Amaderado"],
    notes: {
      top: ["Notas marinas", "Toronja", "Mandarina"],
      heart: ["Hoja de laurel", "Jazmín"],
      base: ["Ámbar gris", "Madera de gaiac", "Musgo de roble", "Pachulí"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Deportes, gimnasio, días de calor y uso cotidiano" }
  },

  // Acqua Di Gio Series
  {
    regex: /acqua\s*di\s*gio|aqua\s*profondo|aqua\s*parfum/i,
    description: "La leyenda acuática por excelencia. La brisa del mar Mediterráneo capturada en bergamota marina, romero aromático y pachulí cristalino.",
    accords: ["Acuático", "Cítrico", "Aromático", "Fresco", "Marino"],
    notes: {
      top: ["Notas marinas", "Bergamota", "Limón", "Lima", "Mandarina"],
      heart: ["Romero", "Jazmín", "Calone", "Ciclamen"],
      base: ["Cedro", "Almizcle blanco", "Musgo de roble", "Pachulí"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, trabajo, vacaciones y frescura inigualable" }
  },

  // Dior Homme Series
  {
    regex: /dior\s*homme\s*intense/i,
    description: "Una obra de arte olfativa con iris toscano empolvado, ambreta y licor de pera sobre maderas de cedro virgen y vetiver aristocrático.",
    accords: ["Iris", "Atalcado", "Amaderado", "Floral", "Almizclado"],
    notes: {
      top: ["Lavanda"],
      heart: ["Iris toscano", "Ambreta", "Pera"],
      base: ["Cedro de Virginia", "Vetiver"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos formales, trajes de etiqueta, cenas de lujo y romance" }
  },
  {
    regex: /dior\s*homme/i,
    description: "Elegancia masculina pulcra y sofisticada con notas de bergamota, pimienta rosa y cedro con fondo de madera de cachemira.",
    accords: ["Amaderado", "Almizclado", "Cítrico", "Fresco especiado"],
    notes: {
      top: ["Bergamota", "Pimienta rosa", "Elemí"],
      heart: ["Madera de cachemira", "Cedro del Atlas", "Pachulí"],
      base: ["Iso E Super", "Vetiver de Haití", "Almizcle blanco"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Oficina, elegancia diaria y reuniones ejecutivas" }
  },

  // YSL Y Series & MYSLF
  {
    regex: /myslf/i,
    description: "La visión moderna de la masculinidad por YSL. Bergamota luminosa de Calabria con un corazón sensual de flor de azahar y maderas ambaradas.",
    accords: ["Cítrico", "Floral blanco", "Amaderado", "Fresco"],
    notes: {
      top: ["Bergamota de Calabria", "Bergamota verde"],
      heart: ["Flor de azahar del naranjo de Túnez"],
      base: ["Ambrofix", "Pachulí de Indonesia"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario, citas y salidas casuales con estilo" }
  },
  {
    regex: /ysl|y\s*edp/i,
    description: "Manzana verde ácida y jengibre chispeante equilibrados con salvia aromática y geranio sobre un fondo intenso de maderas y haba tonka.",
    accords: ["Aromático", "Amaderado", "Fresco especiado", "Afrutado", "Verde"],
    notes: {
      top: ["Manzana", "Jengibre", "Bergamota"],
      heart: ["Salvia", "Bayas de enebro", "Geranio"],
      base: ["Amberwood", "Haba tonka", "Cedro", "Vetiver", "Incienso"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Perfume firma perfecto para cualquier situación" }
  },

  // Good Girl Series (Carolina Herrera)
  {
    regex: /good\s*girl.*blush/i,
    description: "Una reinterpretación radiante y femenina con peonía aterciopelada, agua de rosas y dos tipos de vainilla pura sobre almendra suave.",
    accords: ["Floral", "Avainillado", "Atalcado", "Dulce", "Cítrico"],
    notes: {
      top: ["Bergamota", "Almendra amarga"],
      heart: ["Peonía", "Ylang-ylang", "Agua de rosas"],
      base: ["Vainilla", "Haba tonka"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Citas románticas de día, eventos sociales y paseos" }
  },
  {
    regex: /good\s*girl/i,
    description: "El icónico tacón de Carolina Herrera. Nardos luminosos y jazmín sambac contrastados con la tentación oscura del café, cacao y haba tonka.",
    accords: ["Dulce", "Floral blanco", "Especiado cálido", "Avainillado", "Cacao"],
    notes: {
      top: ["Almendra", "Café", "Bergamota", "Limón"],
      heart: ["Nardos", "Jazmín sambac", "Flor de azahar", "Rosa de Bulgaria"],
      base: ["Haba tonka", "Cacao", "Vainilla", "Praliné", "Sándalo", "Ámbar"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches de fiesta, citas románticas y salidas especiales" }
  },

  // Black Opium (YSL)
  {
    regex: /black\s*opium/i,
    description: "El perfume nocturno por excelencia para dama. Una dosis adictiva de café negro tostado combinada con flores blancas y vainilla dulce embriagadora.",
    accords: ["Vainilla", "Café", "Dulce", "Especiado cálido", "Floral blanco"],
    notes: {
      top: ["Pera jugosa", "Pimienta rosa", "Flor de azahar"],
      heart: ["Café tostado", "Jazmín", "Almendra amarga", "Regaliz"],
      base: ["Vainilla", "Pachulí", "Madera de cachemira", "Cedro"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas nocturnas, citas, conciertos y clima frío" }
  },

  // Libre (YSL)
  {
    regex: /libre/i,
    description: "El perfume de la libertad. Una audaz fusión entre la lavanda de Francia (tradicionalmente masculina) y la flor de azahar de Marruecos sensual y femenina.",
    accords: ["Floral blanco", "Lavanda", "Cítrico", "Dulce", "Avainillado"],
    notes: {
      top: ["Lavanda francesa", "Mandarina", "Grosellas negras", "Petit grain"],
      heart: ["Flor de azahar de Marruecos", "Jazmín sambac", "Lavanda"],
      base: ["Vainilla de Madagascar", "Almizcle", "Cedro", "Ámbar gris"]
    },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Reuniones de trabajo, eventos elegantes y citas" }
  },

  // Creed Aventus & Niche
  {
    regex: /creed\s*aventus|aventus/i,
    description: "La fragancia de reyes y conquistadores. Piña real asada, bergamota italiana y abedul ahumado con una base de ámbar gris y musgo de roble.",
    accords: ["Afrutado", "Ahumado", "Amaderado", "Cítrico", "Cuero"],
    notes: {
      top: ["Piña fresca", "Bergamota", "Grosellas negras", "Manzana verde"],
      heart: ["Abedul ahumado", "Pachulí", "Jazmín de Marruecos", "Rosa"],
      base: ["Almizcle", "Musgo de roble", "Ámbar gris", "Vainilla"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Cualquier ocasión donde desees proyectar estatus y seguridad" }
  },
  {
    regex: /erba\s*pura/i,
    description: "Una sinfonía mediterránea de frutas cítricas sicilianas envueltas en un manto suntuoso de almizcle blanco y vainilla de Madagascar de duración eterna.",
    accords: ["Afrutado", "Cítrico", "Dulce", "Almizclado", "Avainillado"],
    notes: {
      top: ["Naranja de Sicilia", "Bergamota de Calabria", "Limón siciliano"],
      heart: ["Cesta de frutas mediterráneas"],
      base: ["Almizcle blanco", "Vainilla de Madagascar", "Ámbar"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Eventos exclusivos, fiestas de gala y donde quieras que te recuerden" }
  },
  {
    regex: /layton/i,
    description: "La obra maestra de Parfums de Marly. Manzana crujiente especiada con cardamomo y lavanda, sobre una suntuosa crema de vainilla y madera de gaiac.",
    accords: ["Especiado cálido", "Avainillado", "Aromático", "Amaderado", "Afrutado"],
    notes: {
      top: ["Manzana", "Lavanda", "Bergamota", "Mandarina"],
      heart: ["Geranio", "Violeta", "Jazmín"],
      base: ["Vainilla", "Cardamomo", "Sándalo", "Pimienta", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Citas románticas, ocasiones especiales y elegancia refinada" }
  },
  {
    regex: /naxos/i,
    description: "Homenaje a la belleza de Sicilia. Miel dorada tibia, hojas de tabaco rubio y lavanda provenzal con toques de canela y jazmín sambac.",
    accords: ["Miel", "Tabaco", "Dulce", "Lavanda", "Cítrico", "Avainillado"],
    notes: {
      top: ["Lavanda", "Bergamota", "Limón"],
      heart: ["Miel pura", "Canela", "Cachemira", "Jazmín sambac"],
      base: ["Hojas de tabaco", "Haba tonka", "Vainilla"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Eventos memorables, climas frescos y amantes de la perfumería de autor" }
  },
  {
    regex: /tobacco\s*vanille/i,
    description: "El perfume icónico de Tom Ford que redefinió el aroma a tabaco dulce. Hojas aromáticas de tabaco con cacao puro, vainilla cremosa y frutos secos.",
    accords: ["Vainilla", "Tabaco", "Dulce", "Especiado cálido", "Cacao"],
    notes: {
      top: ["Hoja de tabaco", "Notas especiadas"],
      heart: ["Haba tonka", "Flor del tabaco", "Vainilla", "Cacao"],
      base: ["Frutos secos", "Maderas nobles"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas formales, frío intenso y elegancia absoluta" }
  },
  {
    regex: /ombre\s*leather|spicenom.*leather/i,
    description: "Cuero negro refinado y floral con cardamomo especiado y jazmín sambac que evoca los paisajes del desierto estadounidense.",
    accords: ["Cuero", "Especiado cálido", "Aromático", "Floral blanco", "Ahumado"],
    notes: {
      top: ["Cardamomo"],
      heart: ["Cuero negro", "Jazmín sambac"],
      base: ["Ámbar", "Musgo", "Pachulí"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas nocturnas, chaqueta de cuero y elegancia rebelde" }
  },
  {
    regex: /oud\s*wood/i,
    description: "Una de las maderas de oud más elegantes y amigables jamás creadas, enriquecida con palo de rosa brasileño, pimienta de Sichuan y sándalo cremoso.",
    accords: ["Amaderado", "Oud", "Especiado cálido", "Aromático", "Balsámico"],
    notes: {
      top: ["Palo de rosa de Brasil", "Cardamomo", "Pimienta de Sichuan"],
      heart: ["Madera de agar (Oud)", "Sándalo", "Vetiver"],
      base: ["Haba tonka", "Vainilla", "Ámbar"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Oficina de alto rango, eventos formales y porte sofisticado" }
  },
  {
    regex: /imagination/i,
    description: "La obra maestra fresca de Louis Vuitton. Té negro exclusivo de China con una sobredosis de ambroxan y cítricos italianos radiantes.",
    accords: ["Cítrico", "Ámbar", "Té", "Fresco especiado", "Aromático"],
    notes: {
      top: ["Cidra", "Bergamota de Calabria", "Naranja siciliana"],
      heart: ["Jengibre de Nigeria", "Neroli de Túnez", "Canela de Ceilán"],
      base: ["Té negro de China", "Ambroxan", "Incienso", "Madera de gaiac"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, lujo cotidiano y reuniones exclusivas" }
  },
  {
    regex: /born\s*in\s*roma|valentino/i,
    description: "Una actitud moderna inspirada en la noche romana. Notas amaderadas contemporáneas de vetiver y jengibre combinadas con acordes minerales.",
    accords: ["Amaderado", "Mineral", "Aromático", "Fresco especiado", "Avainillado"],
    notes: {
      top: ["Pimienta rosa", "Bergamota", "Grosellas negras"],
      heart: ["Jazmín", "Té de jazmín"],
      base: ["Vainilla bourbon", "Cachemira", "Madera de gaiac"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Salidas nocturnas, moda contemporánea y citas" }
  },
  {
    regex: /bad\s*boy/i,
    description: "Fragancia oriental especiada con pimienta blanca y bergamota contrastadas con cacao oscuro amargo y haba tonka vibrante.",
    accords: ["Especiado cálido", "Cacao", "Ámbar", "Amaderado", "Cítrico"],
    notes: {
      top: ["Pimienta blanca", "Pimienta negra", "Bergamota"],
      heart: ["Salvia", "Cedro"],
      base: ["Haba tonka", "Cacao", "Amberwood"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas nocturnas, citas y fiestas" }
  },
  {
    regex: /bright\s*crystal/i,
    description: "Una joya floral transparente y luminosa con granada jugosa, flor de loto delicada y peonías frescas sobre un fondo almizclado cristalino.",
    accords: ["Floral", "Fresco", "Acuático", "Cítrico", "Amaderado"],
    notes: {
      top: ["Yuzu", "Granada", "Notas acuáticas"],
      heart: ["Peonía", "Flor de loto", "Magnolia"],
      base: ["Almizcle", "Caoba", "Ámbar"]
    },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, días soleados, oficina y eventos al aire libre" }
  },
  {
    regex: /crystal\s*noir/i,
    description: "Sensual y misterioso. Cardamomo especiado, jengibre y gardenia suntuosa con un fondo de coco cremoso, sándalo y almizcle oscuro.",
    accords: ["Especiado cálido", "Coco", "Floral blanco", "Atalcado", "Amaderado"],
    notes: {
      top: ["Pimienta", "Jengibre", "Cardamomo"],
      heart: ["Coco", "Gardenia", "Flor de azahar", "Peonía"],
      base: ["Sándalo", "Almizcle", "Ámbar"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas románticas, salidas nocturnas y seducción" }
  },
  {
    regex: /my\s*way/i,
    description: "Una invitación a ampliar horizontes. Flores blancas radiantes de nardos de la India y flor de azahar egipcia con vainilla de Madagascar.",
    accords: ["Floral blanco", "Tuberosa", "Cítrico", "Avainillado", "Animal"],
    notes: {
      top: ["Flor de azahar del naranjo", "Bergamota"],
      heart: ["Nardos de la India", "Jazmín"],
      base: ["Vainilla de Madagascar", "Almizcle blanco", "Cedro de Virginia"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Oficina, viajes, eventos y mañanas luminosas" }
  },
  {
    regex: /coco\s*mademoiselle/i,
    description: "La esencia de una mujer audaz y libre. Naranja chispeante y rosa elegante con un fondo inconfundible de pachulí noble y vainilla suave.",
    accords: ["Cítrico", "Pachulí", "Floral blanco", "Dulce", "Rosa"],
    notes: {
      top: ["Naranja", "Mandarina", "Bergamota", "Flor de azahar"],
      heart: ["Rosa turca", "Jazmín", "Mimosa", "Ylang-ylang"],
      base: ["Pachulí", "Almizcle blanco", "Vainilla", "Vetiver", "Haba tonka"]
    },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Cualquier ocasión que requiera distinción y elegancia" }
  },
  {
    regex: /miss\s*dior/i,
    description: "Un ramo floral exuberante con rosa centifolia aterciopelada, lirio de los valles y peonía envueltas en un velo de vainilla suave y sándalo.",
    accords: ["Floral", "Rosa", "Atalcado", "Dulce", "Almizclado"],
    notes: {
      top: ["Lirio de los valles", "Peonía", "Iris"],
      heart: ["Rosa centifolia", "Albaricoque", "Melocotón"],
      base: ["Vainilla", "Haba tonka", "Almizcle blanco", "Sándalo", "Benjuí"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Citas románticas, paseos de día y ocasiones especiales" }
  },
  {
    regex: /boss\s*bottle|boss/i,
    description: "El clásico indiscutible del hombre de éxito. Manzana fresca con canela aromática, geranio y madera de cedro y olivo.",
    accords: ["Amaderado", "Afrutado", "Canela", "Especiado cálido", "Vainilla"],
    notes: {
      top: ["Manzana", "Ciruela", "Limón", "Bergamota"],
      heart: ["Canela", "Caoba", "Clavel"],
      base: ["Vainilla", "Sándalo", "Cedro", "Vetiver", "Olivo"]
    },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Día", "Noche"], occasion: "Oficina, reuniones ejecutivas y elegancia diaria" }
  },
  {
    regex: /halloween/i,
    description: "Una mezcla nocturna y adictiva de café negro, whisky fino, canela y cardamomo con fondo de ámbar y cuero.",
    accords: ["Café", "Especiado cálido", "Canela", "Whisky", "Ambarado"],
    notes: {
      top: ["Cardamomo", "Lavanda", "Limón"],
      heart: ["Café tostado", "Whisky", "Canela", "Cuero"],
      base: ["Haba tonka", "Ámbar", "Incienso"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas con amigos y citas nocturnas" }
  },
  {
    regex: /the\s*most\s*wanted|wanted/i,
    description: "Una fragancia oriental amaderada ardiente con cardamomo rojo, caramelo toffee fundido y madera de ámbar sensual.",
    accords: ["Dulce", "Caramelo", "Especiado cálido", "Amaderado", "Ámbar"],
    notes: {
      top: ["Cardamomo rojo"],
      heart: ["Caramelo toffee"],
      base: ["Madera de ámbar", "Bourbon vainilla"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas nocturnas, fiestas y días de frío" }
  },
  {
    regex: /gentleman/i,
    description: "Una interpretación aristocrática con iris elegante, pimienta negra y bálsamo de Tolú sobre vainilla negra amaderada.",
    accords: ["Iris", "Especiado cálido", "Avainillado", "Amaderado", "Balsámico"],
    notes: {
      top: ["Pimienta negra", "Lavanda", "Bergamota"],
      heart: ["Iris", "Clavo de olor", "Canela"],
      base: ["Vainilla negra", "Bálsamo de Tolú", "Pachulí", "Benjuí"]
    },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos formales, trajes de noche y galas" }
  },
  {
    regex: /fame/i,
    description: "El perfume vanguardista de Paco Rabanne. Mango dulce jugoso y bergamota combinados con jazmín puro e incienso cremoso adictivo.",
    accords: ["Mango", "Tropical", "Dulce", "Floral blanco", "Avainillado"],
    notes: {
      top: ["Mango jugoso", "Bergamota"],
      heart: ["Jazmín", "Incienso"],
      base: ["Vainilla", "Sándalo"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y días donde quieras destacar" }
  },
  {
    regex: /olympea/i,
    description: "La diosa del Olimpo. Vainilla salada única en su tipo, combinada con jazmín de agua, mandarina verde y madera de cachemira.",
    accords: ["Vainilla", "Salado", "Floral blanco", "Ámbar", "Amaderado"],
    notes: {
      top: ["Jazmín de agua", "Mandarina verde", "Flor de jengibre"],
      heart: ["Vainilla salada"],
      base: ["Ámbar gris", "Madera de cachemira", "Sándalo"]
    },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Citas románticas, salidas con amigas y ocasiones especiales" }
  }
];

// Fallbacks by category / gender
function getFallback(p) {
  const isFemale = p.subcategory === 'Damas' || /femme|dama|woman|her|girl/i.test(p.name);
  if (isFemale) {
    return {
      description: `Una fragancia femenina encantadora de la familia ${p.category}, diseñada para resaltar la elegancia, sofisticación y presencia única de la mujer actual.`,
      accords: ["Floral", "Dulce", "Afrutado", "Avainillado", "Almizclado"],
      notes: {
        top: ["Bergamota", "Frutas dulces", "Pera"],
        heart: ["Jazmín", "Rosa", "Flores blancas"],
        base: ["Vainilla", "Almizcle blanco", "Sándalo"]
      },
      climate: {
        seasons: ["Primavera", "Verano", "Otoño"],
        time: ["Día", "Noche"],
        occasion: "Uso diario, eventos sociales y salidas especiales"
      }
    };
  } else {
    return {
      description: `Una fragancia masculina distinguida de la categoría ${p.category}, con una combinación equilibrada de notas frescas y maderas nobles que otorgan gran presencia y fijación.`,
      accords: ["Amaderado", "Cítrico", "Aromático", "Especiado fresco", "Ámbar"],
      notes: {
        top: ["Bergamota", "Limón", "Pimienta"],
        heart: ["Lavanda", "Cardamomo", "Notas marinas"],
        base: ["Cedro", "Ámbar", "Pachulí", "Almizcle"]
      },
      climate: {
        seasons: ["Todas las estaciones"],
        time: ["Día", "Noche"],
        occasion: "Fragancia versátil para uso diario, oficina y salidas nocturnas"
      }
    };
  }
}

let matchedCount = 0;

productos.forEach(p => {
  let profile = perfumeProfiles.find(prof => prof.regex.test(p.name));
  if (!profile) {
    profile = getFallback(p);
  } else {
    matchedCount++;
  }

  p.description = profile.description;
  p.accords = profile.accords;
  p.notes = profile.notes;
  p.climate = profile.climate;
  p.longevity = "8 - 12+ Horas (Excelente fijación)";
  p.sillage = "Moderada a Intensa (Deja estela atractiva)";
});

fs.writeFileSync(productosPath, JSON.stringify(productos, null, 2), 'utf8');
console.log(`Enriched ${productos.length} products. Specifically curated matches: ${matchedCount}. File updated.`);
