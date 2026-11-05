const fs = require('fs');
const path = require('path');

const productosPath = path.join(__dirname, '..', 'src', 'productos.json');
const productos = JSON.parse(fs.readFileSync(productosPath, 'utf8'));

// Full, curated Fragrantica profiles
const profiles = [
  // 9 PM / 9 AM
  {
    regex: /9\s*pm\s*pour\s*femme/i,
    description: "Una fragancia femenina envolvente y vibrante que combina notas afrutadas de manzana jugosa con un corazón floral seductor y un fondo de ámbar y vainilla.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Floral blanco", "Ámbar"],
    notes: { top: ["Manzana", "Naranja", "Frambuesa"], heart: ["Jazmín", "Flor de azahar", "Rosa"], base: ["Vainilla", "Ámbar", "Cedro", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Tarde"], occasion: "Salidas nocturnas, citas románticas y fiestas" }
  },
  {
    regex: /9\s*pm/i,
    description: "Una fragancia masculina icónica famosa por su apertura dulce y especiada con canela y manzana silvestre, seguida de un fondo avainillado y seductor irresistible.",
    accords: ["Avainillado", "Especiado cálido", "Dulce", "Afrutado", "Canela", "Lavanda"],
    notes: { top: ["Manzana silvestre", "Canela", "Lavanda salvaje", "Bergamota"], heart: ["Flor de azahar del naranjo", "Lirio de los valles"], base: ["Vainilla", "Haba tonka", "Ámbar", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas, fiestas, salidas nocturnas y conquista" }
  },
  {
    regex: /9\s*am\s*dive/i,
    description: "Una explosión acuática y refrescante de menta helada, limón chispeante y grosellas negras con un toque especiado que recuerda a la brisa marina.",
    accords: ["Aromático", "Cítrico", "Fresco especiado", "Afrutado", "Acuático"],
    notes: { top: ["Menta helada", "Limón", "Grosellas negras", "Pimienta rosa"], heart: ["Manzana", "Incienso", "Madera de cedro"], base: ["Jengibre", "Sándalo", "Pachulí", "Jazmín"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, gimnasio, oficina y playa" }
  },
  {
    regex: /9\s*am\s*pour\s*femme/i,
    description: "Aroma fresco y radiante para dama con notas cítricas luminosas y un fondo almizclado suave que transmite energía y sofisticación.",
    accords: ["Cítrico", "Afrutado", "Fresco", "Almizclado", "Floral"],
    notes: { top: ["Mandarina", "Bergamota de Calabria", "Toronja"], heart: ["Grosellas negras", "Frambuesa", "Rosa"], base: ["Almizcle blanco", "Ámbar", "Naranja"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, trabajo y mañanas frescas" }
  },
  {
    regex: /9\s*am/i,
    description: "Fragancia versátil y fresca que abre con cítricos chispeantes y manzana, evolucionando hacia un corazón aromático y maderas reconfortantes.",
    accords: ["Cítrico", "Aromático", "Fresco especiado", "Amaderado"],
    notes: { top: ["Mandarina", "Limón", "Cardamomo", "Pimienta rosa"], heart: ["Lavanda", "Flor de azahar", "Rosa verde"], base: ["Cedro", "Pachulí", "Musgo", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Oficina, reuniones y actividades diarias" }
  },

  // Hawas
  {
    regex: /hawas\s*ice/i,
    description: "Versión intensamente helada del icónico Hawas con anís estrellado, menta congelada y una fijación marina descomunal que no pasa desapercibida.",
    accords: ["Acuático", "Cítrico", "Afrutado", "Fresco especiado", "Aromático"],
    notes: { top: ["Menta helada", "Limón de Sicilia", "Manzana", "Anís estrellado"], heart: ["Ciruela", "Flor de azahar", "Cardamomo", "Notas marinas"], base: ["Ámbar gris", "Almizcle", "Pachulí", "Madera flotante"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Eventos al aire libre, salidas y conquista en clima cálido" }
  },
  {
    regex: /hawas\s*black/i,
    description: "La faceta oscura, madura y misteriosa de Hawas con notas marinas profundas, maderas ahumadas, cuero fino y ámbar gris.",
    accords: ["Amaderado", "Especiado cálido", "Aromático", "Ámbar", "Cuero"],
    notes: { top: ["Bergamota", "Pimienta negra", "Cardamomo"], heart: ["Notas marinas oscuras", "Lavanda", "Incienso"], base: ["Pachulí", "Madera de cedro", "Ámbar gris", "Cuero"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas formales, eventos elegantes y ocasiones especiales" }
  },
  {
    regex: /hawas/i,
    description: "El perfume árabe más aclamado. Notas marinas vibrantes con ciruela dulce, manzana ácida y un fondo de ámbar gris adictivo.",
    accords: ["Acuático", "Afrutado", "Cítrico", "Fresco especiado", "Ámbar"],
    notes: { top: ["Manzana", "Bergamota", "Limón", "Canela"], heart: ["Ciruela", "Cardamomo", "Flor de azahar", "Notas marinas"], base: ["Ámbar gris", "Almizcle", "Pachulí", "Madera flotante"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario, citas y fiestas en cualquier clima templado" }
  },

  // Asad
  {
    regex: /asad\s*zanzibar/i,
    description: "Inspirado en la exótica isla de Zanzíbar. Agua de coco fresca, pimienta negra y notas salinas con un fondo de vainilla e incienso sensual.",
    accords: ["Coco", "Aromático", "Especiado cálido", "Acuático", "Avainillado"],
    notes: { top: ["Pimienta negra", "Lavanda oceánica", "Notas salinas"], heart: ["Agua de coco", "Iris aterciopelado", "Sal marina"], base: ["Vainilla de Madagascar", "Incienso"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Vacaciones, salidas casuales y noches de verano" }
  },
  {
    regex: /asad/i,
    description: "Imponente y especiada, inspirada en Sauvage Elixir. Pimienta negra y tabaco noble con un corazón de café tostado, pachulí y vainilla cálida.",
    accords: ["Especiado cálido", "Ámbar", "Avainillado", "Amaderado", "Café"],
    notes: { top: ["Pimienta negra", "Piña madura", "Tabaco rubio"], heart: ["Café tostado", "Iris", "Pachulí"], base: ["Ámbar", "Vainilla", "Maderas nobles", "Benjuí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos nocturnos, climas fríos y ocasiones donde quieras destacar" }
  },

  // Khamrah & Qahwa
  {
    regex: /qawha|qahwa/i,
    description: "Una versión aún más opulenta de Khamrah con una sobredosis de café árabe recién tostado, cardamomo y dátiles glaseados en canela.",
    accords: ["Café", "Especiado cálido", "Dulce", "Avainillado", "Canela"],
    notes: { top: ["Café árabe", "Cardamomo", "Canela", "Jengibre"], heart: ["Dátiles confitados", "Praliné", "Frutas confitadas", "Flores blancas"], base: ["Vainilla Bourbon", "Haba tonka", "Benjuí", "Almizcle"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches frías, citas y cenas elegantes" }
  },
  {
    regex: /khamrah/i,
    description: "Una obra de arte dulce gourmand con canela de Ceilán, nuez moscada y dátiles dulces sobre un fondo cremoso de praliné y vainilla.",
    accords: ["Dulce", "Canela", "Especiado cálido", "Avainillado", "Ámbar"],
    notes: { top: ["Canela de Ceilán", "Nuez moscada", "Bergamota"], heart: ["Dátiles", "Praliné de chocolate", "Nardos", "Mahonial"], base: ["Vainilla", "Haba tonka", "Benjuí", "Mirra", "Madera de akigala"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Climas frescos, fiestas y momentos íntimos" }
  },

  // Amber Oud
  {
    regex: /amber\s*oud.*gold/i,
    description: "El perfume frutal dulce por excelencia. Melón jugoso y piña madura con un fondo almizclado y avainillado de proyección monstruosa.",
    accords: ["Dulce", "Afrutado", "Ámbar", "Avainillado", "Almizclado"],
    notes: { top: ["Bergamota", "Notas verdes"], heart: ["Melón dulce", "Piña", "Notas golosas", "Ámbar"], base: ["Vainilla", "Almizcle blanco", "Notas amaderadas"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, eventos sociales y para recibir cumplidos" }
  },
  {
    regex: /amber\s*oud.*ruby/i,
    description: "Inspirada en Baccarat Rouge 540 Extrait. Almendra amarga tostada, azafrán resplandeciente y cedro sobre un fondo de ámbar gris.",
    accords: ["Almendrado", "Ámbar", "Amaderado", "Especiado cálido", "Dulce"],
    notes: { top: ["Almendra amarga", "Azafrán"], heart: ["Jazmín egipcio", "Madera de cedro"], base: ["Ámbar gris", "Notas amaderadas", "Almizcle"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Eventos de gala, citas románticas y elegancia pura" }
  },
  {
    regex: /amber\s*oud.*aqua/i,
    description: "Aroma fresco y marino con acordes cítricos luminosos de bergamota y mandarina sobre una base ambarada y amaderada.",
    accords: ["Cítrico", "Acuático", "Fresco", "Amaderado"],
    notes: { top: ["Bergamota", "Mandarina", "Notas marinas"], heart: ["Grosellas negras", "Jazmín"], base: ["Ámbar gris", "Cedro", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, actividades al aire libre y oficina" }
  },
  {
    regex: /amber\s*oud/i,
    description: "Fragancia oriental amaderada noble con romero aromático, cedro y especias orientales con un corazón de resinas y ámbar.",
    accords: ["Amaderado", "Aromático", "Ámbar", "Fresco especiado"],
    notes: { top: ["Romero", "Cedro", "Bergamota", "Limón"], heart: ["Especias orientales", "Madera de gaiac"], base: ["Ámbar", "Almizcle", "Bálsamo"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Uso profesional, elegancia y clima fresco" }
  },

  // Club de Nuit
  {
    regex: /club.*nuit.*intense|clib.*nuit.*intense/i,
    description: "El clon definitivo de Creed Aventus. Cítrico ahumado vibrante y piña, dando paso a abedul ahumado y un fondo de almizcle duradero.",
    accords: ["Cítrico", "Ahumado", "Afrutado", "Amaderado", "Cuero"],
    notes: { top: ["Limón", "Piña", "Bergamota", "Grosellas negras", "Manzana"], heart: ["Abedul ahumado", "Jazmín", "Rosa"], base: ["Almizcle", "Ámbar gris", "Pachulí", "Vainilla"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia firma para oficina, citas y reuniones" }
  },
  {
    regex: /club.*nuit.*limited/i,
    description: "Versión de lujo de Club de Nuit con una salida de piña más suave y redonda, lima, bergamota y una base de almizcle y ámbar de altísima calidad.",
    accords: ["Cítrico", "Afrutado", "Ahumado", "Amaderado", "Cuero"],
    notes: { top: ["Piña", "Limón", "Lima", "Pimienta rosa", "Bergamota"], heart: ["Abedul", "Jazmín", "Rosa", "Lirio de los valles"], base: ["Pachulí", "Ámbar gris", "Almizcle", "Vainilla"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Eventos formales y uso diario de alto nivel" }
  },
  {
    regex: /club.*nuit.*urban/i,
    description: "Mezcla contemporánea entre Sauvage y Aventus. Bergamota y pimienta rosa sobre un corazón de lavanda y elemí con una base de ambroxan.",
    accords: ["Fresco especiado", "Aromático", "Amaderado", "Ámbar", "Cítrico"],
    notes: { top: ["Bergamota", "Pimienta rosa", "Jazmín", "Flor de azahar"], heart: ["Lavanda", "Azafrán", "Elemí", "Geranio", "Vetiver"], base: ["Ambroxan", "Pachulí", "Cedro", "Ámbar"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Oficina, salidas y uso versátil" }
  },
  {
    regex: /club.*nuit.*untold|ckub.*nuit.*untold/i,
    description: "Inspirada en Baccarat Rouge 540. Azafrán dorado resplandeciente, jazmín blanco y amberwood con una proyección etérea y sofisticada.",
    accords: ["Amaderado", "Ámbar", "Especiado cálido", "Dulce", "Aromático"],
    notes: { top: ["Azafrán", "Jazmín"], heart: ["Amberwood", "Ámbar gris"], base: ["Resina de abeto", "Madera de cedro"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Eventos especiales, elegancia y conquista" }
  },
  {
    regex: /club.*nuit.*iconic|clib.*nuit.*iconic/i,
    description: "Inspirada en Bleu de Chanel. Toronja vigorizante, menta fresca y jengibre sobre un fondo ahumado de incienso y maderas finas.",
    accords: ["Cítrico", "Aromático", "Fresco especiado", "Amaderado", "Ahumado"],
    notes: { top: ["Toronja", "Limón", "Menta", "Pimienta rosa"], heart: ["Jengibre", "Nuez moscada", "Jazmín", "Melón"], base: ["Incienso", "Ámbar", "Cedro", "Sándalo", "Pachulí"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia versátil para cualquier lugar y momento" }
  },
  {
    regex: /club.*nuit.*maleka/i,
    description: "Fragancia femenina elegante con grosellas negras, pera jugosa y pimienta rosa sobre un manto de jazmín y sándalo avainillado.",
    accords: ["Floral blanco", "Afrutado", "Dulce", "Avainillado", "Almizclado"],
    notes: { top: ["Grosellas negras", "Pera", "Pimienta rosa"], heart: ["Jazmín", "Rosa de Grasse", "Lirio de los valles"], base: ["Vainilla", "Sándalo", "Almizcle blanco"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Uso diario, oficina y reuniones casuales" }
  },

  // Yara Series
  {
    regex: /yara\s*candy/i,
    description: "Una deliciosa explosión azucarada de gomitas de fresa, mandarina confitada y vainilla esponjosa que enamora a los amantes de lo dulce.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Gourmand", "Cítrico"],
    notes: { top: ["Grosella negra confitada", "Mandarina verde"], heart: ["Caramelo de fresa", "Gardenia"], base: ["Vainilla", "Ámbar", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Salidas casuales, citas diurnas y alegría cotidiana" }
  },
  {
    regex: /yara\s*tous/i,
    description: "Un festín tropical de mango maduro jugoso, crema de coco y fruta de la pasión con una base de vainilla y almizcle acariciador.",
    accords: ["Tropical", "Mango", "Dulce", "Coco", "Afrutado", "Avainillado"],
    notes: { top: ["Mango jugoso", "Coco cremoso", "Maracuyá"], heart: ["Jazmín", "Heliotropo", "Flor de azahar"], base: ["Vainilla", "Madera de cachemira", "Almizcle blanco"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, playa, piscina y tardes alegres" }
  },
  {
    regex: /yara\s*moi/i,
    description: "La versión blanca y cremosa de Yara. Melocotón blanco y jazmín envuelto en caramelo tibio, sándalo y pachulí suave.",
    accords: ["Caramelo", "Dulce", "Afrutado", "Amaderado", "Avainillado"],
    notes: { top: ["Melocotón blanco", "Jazmín"], heart: ["Caramelo", "Ámbar"], base: ["Pachulí", "Sándalo"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Tarde"], occasion: "Salidas con amigas, citas y días templados" }
  },
  {
    regex: /yara/i,
    description: "La fragancia femenina más viral del mundo árabe. Un batido de fresas con crema, orquídeas atalcadas y vainilla suave irresistible.",
    accords: ["Dulce", "Avainillado", "Atalcado", "Afrutado", "Floral"],
    notes: { top: ["Orquídea", "Heliotropo", "Mandarina"], heart: ["Acorde gourmand de frutas tropicales", "Golosinas"], base: ["Vainilla", "Almizcle", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Uso diario, escuela, universidad y salidas casuales" }
  },

  // Eclaire
  {
    regex: /eclaire/i,
    description: "Inspirada en Bianco Latte. Leche condensada caliente, caramelo derretido y vainilla dorada que huele a panadería parisina.",
    accords: ["Avainillado", "Caramelo", "Dulce", "Lactónico", "Miel"],
    notes: { top: ["Caramelo derretido", "Leche tibia", "Azúcar moreno"], heart: ["Miel blanca", "Flores blancas"], base: ["Vainilla", "Praliné", "Almizcle suave"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Tarde"], occasion: "Días fríos, tardes de café y momentos acogedores" }
  },

  // Delilah
  {
    regex: /delihah|delilah/i,
    description: "Inspirada en Delina de Parfums de Marly. Rosa turca fastuosa y aristocrática combinada con lichi exótico, ruibarbo jugoso y vainilla.",
    accords: ["Floral", "Rosa", "Afrutado", "Fresco", "Verde"],
    notes: { top: ["Ruibarbo", "Lichi jugoso", "Bergamota"], heart: ["Rosa turca", "Peonía", "Lirio de los valles"], base: ["Madera de cachemira", "Almizcle blanco", "Vainilla"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Bodas, eventos elegantes, citas románticas y reuniones de día" }
  },

  // Nebras
  {
    regex: /nebras/i,
    description: "Inspirada en Eilish. Bayas rojas jugosas combinadas con chocolate cremoso de cacao puro y vainilla cálida envolvente.",
    accords: ["Avainillado", "Dulce", "Cacao", "Afrutado", "Especiado cálido"],
    notes: { top: ["Bayas rojas", "Mandarina"], heart: ["Vainilla Bourbon", "Cacao puro", "Rosa"], base: ["Azúcar", "Haba tonka", "Ámbar", "Almizcle"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas íntimas, clima frío y amantes del chocolate con vainilla" }
  },

  // Bade'e Al Oud
  {
    regex: /bade.*oud.*amethyst/i,
    description: "Inspirada en Atomic Rose de Initio. Rosas de Turquía y Bulgaria realzadas por pimienta rosa y una base sensual de oud y ámbar.",
    accords: ["Rosa", "Floral", "Ámbar", "Especiado cálido", "Amaderado"],
    notes: { top: ["Rosa", "Pimienta rosa"], heart: ["Rosa turca", "Rosa búlgara", "Jazmín"], base: ["Oud", "Ámbar", "Vainilla"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Eventos elegantes, cenas románticas y salidas nocturnas" }
  },
  {
    regex: /bade.*oud.*honor|honor.*glory|bade.*hyg/i,
    description: "Piña caramelizada a la brasa con toques de canela y cúrcuma que reposa sobre una crema de vainilla sublime y madera de cachemira.",
    accords: ["Dulce", "Afrutado", "Avainillado", "Especiado cálido", "Amaderado"],
    notes: { top: ["Piña brûlée", "Crème brûlée"], heart: ["Canela", "Benjuí", "Pimienta negra", "Cúrcuma"], base: ["Vainilla", "Cachemira", "Sándalo", "Musgo"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y momentos para recibir cumplidos" }
  },
  {
    regex: /bade.*oud.*sublime/i,
    description: "Inspirada en Eden Juicy Apple de Kayali. Manzana roja crujiente y ciruela dulce con un fondo floral chispeante y musgo fresco.",
    accords: ["Afrutado", "Dulce", "Fresco", "Verde", "Floral"],
    notes: { top: ["Manzana roja", "Lichi", "Ciruela"], heart: ["Rosa blanca", "Jazmín"], base: ["Vainilla", "Musgo", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, escuela, oficina y mañanas de sol" }
  },
  {
    regex: /bade.*for\s*glory/i,
    description: "Inspirada en Oud for Greatness de Initio. Azafrán noble, nuez moscada y lavanda sobre un oud majestuoso que denota poder y estatus.",
    accords: ["Amaderado", "Especiado cálido", "Pachulí", "Lavanda", "Ámbar"],
    notes: { top: ["Azafrán", "Nuez moscada", "Lavanda"], heart: ["Oud (madera de agar)", "Pachulí"], base: ["Oud", "Pachulí", "Almizcle"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Reuniones de negocios de alto nivel, galas y ocasiones formales" }
  },
  {
    regex: /bade.*noble\s*blush/i,
    description: "Fragancia dulce, lactónica y delicada con merengue de vainilla, leche de almendras y malvavisco sobre almizcle blanco.",
    accords: ["Dulce", "Avainillado", "Lactónico", "Atalcado", "Almizclado"],
    notes: { top: ["Merengue de vainilla", "Leche de almendras"], heart: ["Flor de azahar", "Sándalo cremoso"], base: ["Malvavisco dulce", "Almizcle blanco", "Vainilla"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, citas y amantes de los aromas dulces suaves" }
  },

  // Fakhar
  {
    regex: /fakhar\s*(rose|feminino|gold)/i,
    description: "Inspirada en L'Interdit de Givenchy. Nardos opulentos, flor de azahar y jazmín árabe con un toque de granada dulce y sándalo.",
    accords: ["Floral blanco", "Floral", "Dulce", "Afrutado", "Amaderado"],
    notes: { top: ["Granada", "Azucena", "Rosa", "Frutas dulces"], heart: ["Nardos", "Jazmín sambac", "Madreselva"], base: ["Vainilla", "Sándalo", "Almizcle blanco"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Cenas formales, eventos sociales y elegancia clásica" }
  },
  {
    regex: /fakhar/i,
    description: "Inspirada en Y EDP de YSL. Manzana fresca crujiente, jengibre y salvia sobre un fondo amaderado aromático superversátil.",
    accords: ["Aromático", "Amaderado", "Fresco especiado", "Cítrico", "Afrutado"],
    notes: { top: ["Manzana verde", "Bergamota", "Jengibre"], heart: ["Salvia", "Bayas de enebro", "Lavanda", "Geranio"], base: ["Amberwood", "Haba tonka", "Cedro", "Vetiver"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, oficina, salidas y citas" }
  },

  // Odyssey Series
  {
    regex: /oddysey\s*mega|mega/i,
    description: "Inspirada en YSL Y EDP. Salida chispeante de bergamota, jengibre y menta con un corazón de salvia aromática y cedro viril.",
    accords: ["Aromático", "Fresco especiado", "Cítrico", "Amaderado"],
    notes: { top: ["Bergamota", "Jengibre", "Menta", "Limón"], heart: ["Enebro de Virginia", "Salvia", "Geranio", "Piña"], base: ["Haba tonka", "Cedro", "Vetiver", "Almizcle"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, trabajo, gimnasio y salidas" }
  },
  {
    regex: /oddysey\s*homme\s*white/i,
    description: "Aroma fresco y limpio con notas cítricas de yuzu, pomelo y pimienta rosa sobre un corazón acuático y maderas nobles.",
    accords: ["Cítrico", "Acuático", "Fresco", "Amaderado"],
    notes: { top: ["Yuzu", "Pimienta rosa", "Toronja"], heart: ["Hojas de violeta", "Notas marinas"], base: ["Madera de gaiac", "Ámbar blanco", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, oficina y actividades al aire libre" }
  },
  {
    regex: /oddysey\s*spectra/i,
    description: "Fragancia oriental cálida con manzana asada, cardamomo y canela sobre un fondo dulce de vainilla y haba tonka.",
    accords: ["Especiado cálido", "Avainillado", "Aromático", "Dulce", "Canela"],
    notes: { top: ["Manzana", "Cardamomo", "Bergamota"], heart: ["Lavanda", "Canela", "Nuez moscada"], base: ["Vainilla", "Haba tonka", "Ámbar", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas nocturnas, climas fríos y fiestas" }
  },
  {
    regex: /odyssey\s*wild\s*one/i,
    description: "Fragancia imponente con pimienta negra picante, bergamota y menta fresca sobre un fondo oscuro de cuero y cedro.",
    accords: ["Cuero", "Amaderado", "Aromático", "Fresco especiado"],
    notes: { top: ["Pimienta negra", "Bergamota", "Menta"], heart: ["Vetiver", "Lavanda", "Pachulí"], base: ["Cuero", "Cedro", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Noches de fiesta, salidas casuales y conquista" }
  },
  {
    regex: /odyssey\s*homme/i,
    description: "Inspirada en Tom Ford Noir Extreme / Valentino Uomo. Vainilla oscura, iris empolvado, especias orientales y café sobre cuero fino.",
    accords: ["Avainillado", "Ámbar", "Atalcado", "Especiado cálido", "Amaderado"],
    notes: { top: ["Vainilla", "Ámbar", "Notas orientales"], heart: ["Iris", "Especias cálidas", "Café"], base: ["Cuero", "Madera de cedro", "Jazmín"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas de gala, eventos nocturnos y romance" }
  },
  {
    regex: /mandaryn\s*sky/i,
    description: "Inspirada en Scandal Pour Homme. Mandarina jugosa y azafrán con caramelo toffee fundido y haba tonka deliciosa.",
    accords: ["Caramelo", "Cítrico", "Dulce", "Avainillado", "Ámbar"],
    notes: { top: ["Mandarina", "Naranja", "Azafrán"], heart: ["Caramelo toffee", "Haba tonka", "Cempasúchil"], base: ["Ambroxan", "Madera de cedro", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Fiestas, salidas y momentos para destacar" }
  },
  {
    regex: /limoni/i,
    description: "Una explosión cítrica mediterránea de limón de Amalfi y lima con jengibre picante y notas marinas refrescantes.",
    accords: ["Cítrico", "Fresco", "Especiado fresco", "Acuático"],
    notes: { top: ["Limón de Amalfi", "Lima", "Bergamota", "Naranja dulce"], heart: ["Jengibre", "Notas marinas", "Flor de azahar"], base: ["Madera de cedro", "Ámbar", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, mañanas frescas y vacaciones" }
  },

  // Otros Árabes Caballeros
  {
    regex: /bourbon/i,
    description: "Una mezcla embriagadora y masculina de madera de roble añejo, licor de bourbon y pimienta blanca sobre un fondo cálido de vainilla.",
    accords: ["Amaderado", "Avainillado", "Especiado cálido", "Ámbar"],
    notes: { top: ["Pimienta blanca", "Bergamota"], heart: ["Madera de roble añejo", "Licor de bourbon", "Lavanda"], base: ["Vainilla bourbon", "Ámbar oscuro", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas nocturnas, clima frío y veladas elegantes" }
  },
  {
    regex: /claccier\s*le\s*nooir/i,
    description: "Inspirada en Le Male Le Parfum de JPG. Cardamomo especiado, lavanda provenzal e iris sobre un lecho exquisito de vainilla oriental.",
    accords: ["Especiado cálido", "Avainillado", "Lavanda", "Aromático", "Amaderado"],
    notes: { top: ["Cardamomo"], heart: ["Lavanda", "Iris"], base: ["Vainilla", "Notas orientales", "Maderas preciosas"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas, eventos formales y salidas de noche" }
  },
  {
    regex: /glacier\s*bold/i,
    description: "Inspirada en JPG Le Beau. Bergamota fresca con crema de coco tropical y haba tonka golosa irresistible.",
    accords: ["Coco", "Dulce", "Cítrico", "Avainillado", "Amaderado"],
    notes: { top: ["Bergamota fresca"], heart: ["Madera de coco", "Notas marinas"], base: ["Haba tonka", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Vacaciones, playa y días soleados" }
  },
  {
    regex: /haayati/i,
    description: "Aroma juvenil y versátil que mezcla manzana fresca, canela dulce y notas amaderadas con un fondo de vainilla seductor.",
    accords: ["Afrutado", "Dulce", "Amaderado", "Canela", "Avainillado"],
    notes: { top: ["Manzana", "Bergamota"], heart: ["Canela", "Notas amaderadas"], base: ["Vainilla", "Almizcle"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, escuela, oficina y salidas con amigos" }
  },
  {
    regex: /his\s*confession/i,
    description: "Canela aromática, mandarina y lavanda sobre un corazón resinoso de benjuí e iris con fondo de incienso y vainilla.",
    accords: ["Especiado cálido", "Dulce", "Avainillado", "Ámbar", "Amaderado"],
    notes: { top: ["Canela", "Lavanda", "Mandarina"], heart: ["Benjuí", "Iris", "Ciprés"], base: ["Vainilla", "Haba tonka", "Pachulí", "Incienso"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas nocturnas y eventos formales" }
  },
  {
    regex: /jean\s*lowe\s*immortal/i,
    description: "Inspirada en L'Immensité de Louis Vuitton. Toronja radiante, jengibre fresco y romero sobre un fondo suntuoso de ambroxan y ládano.",
    accords: ["Cítrico", "Fresco especiado", "Aromático", "Ámbar"],
    notes: { top: ["Toronja", "Jengibre", "Bergamota"], heart: ["Romero", "Notas acuáticas", "Salvia"], base: ["Ambroxan", "Ámbar", "Ládano"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Elegancia ejecutiva, reuniones y uso diario de lujo" }
  },
  {
    regex: /rebel/i,
    description: "Piña ahumada, grosellas negras y bergamota con abedul ahumado y un fondo varonil de ámbar, musgo de roble y vainilla.",
    accords: ["Afrutado", "Ahumado", "Amaderado", "Cítrico"],
    notes: { top: ["Piña", "Grosellas negras", "Bergamota"], heart: ["Abedul ahumado", "Jazmín", "Pachulí"], base: ["Ámbar", "Musgo de roble", "Vainilla"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Firma personal, oficina y salidas" }
  },
  {
    regex: /salvo\s*elixir/i,
    description: "Inspirada en Sauvage Elixir. Canela, nuez moscada y cardamomo combinados con lavanda nocturna y regaliz amaderado profundo.",
    accords: ["Especiado cálido", "Amaderado", "Lavanda", "Fresco especiado", "Regaliz"],
    notes: { top: ["Canela", "Nuez moscada", "Cardamomo", "Toronja"], heart: ["Lavanda salvaje"], base: ["Regaliz", "Sándalo", "Ámbar", "Pachulí", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos imponentes y ocasiones donde busques destacar" }
  },
  {
    regex: /salvo\s*intense/i,
    description: "Inspirada en Sauvage EDP. Bergamota de Calabria, pimienta de Sichuan y lavanda sobre un fondo magnético de ambroxan y cedro.",
    accords: ["Fresco especiado", "Cítrico", "Ámbar", "Aromático"],
    notes: { top: ["Bergamota de Calabria", "Pimienta de Sichuan"], heart: ["Lavanda", "Geranio", "Pimienta rosa"], base: ["Ambroxan", "Cedro", "Ládano"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, oficina y salidas" }
  },
  {
    regex: /viking/i,
    description: "Inspirada en Viking de Creed. Pimienta rosa chispeante, bergamota y menta fresca combinadas con sándalo hindú y vetiver.",
    accords: ["Aromático", "Fresco especiado", "Amaderado", "Cítrico"],
    notes: { top: ["Pimienta rosa", "Bergamota", "Limón siciliano"], heart: ["Menta piperita", "Rosa", "Pimienta"], base: ["Sándalo", "Vetiver", "Pachulí", "Lavanda"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Trabajo, eventos diurnos y reuniones" }
  },
  {
    regex: /yeah\s*edp/i,
    description: "Inspirada en YSL Y EDP. Manzana verde crujiente, jengibre y salvia sobre un fondo aromático amaderado moderno.",
    accords: ["Aromático", "Amaderado", "Fresco especiado", "Afrutado"],
    notes: { top: ["Manzana verde", "Bergamota", "Jengibre"], heart: ["Salvia", "Bayas de enebro", "Geranio"], base: ["Amberwood", "Haba tonka", "Cedro", "Incienso"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Perfume firma para cualquier ocasión" }
  },
  {
    regex: /bharara\s*king|bahara\s*bleu/i,
    description: "Explosión frutal cítrica ultra atractiva con naranja dulce, bergamota y tutti frutti sobre un fondo envolvente de ámbar y vainilla.",
    accords: ["Dulce", "Afrutado", "Cítrico", "Avainillado", "Almizclado"],
    notes: { top: ["Naranja", "Limón", "Bergamota"], heart: ["Frutas dulces", "Tutti frutti"], base: ["Vainilla blanca", "Ámbar", "Almizcle blanco"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y conquista" }
  },
  {
    regex: /aqua/i,
    description: "Aroma fresco y marino con acordes cítricos luminosos de bergamota y mandarina sobre una base ambarada y amaderada.",
    accords: ["Cítrico", "Acuático", "Fresco", "Amaderado"],
    notes: { top: ["Notas marinas", "Bergamota", "Mandarina verde"], heart: ["Romero", "Ciprés", "Lavanda"], base: ["Notas minerales", "Pachulí", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos y uso diario fresco" }
  },
  {
    regex: /artisto/i,
    description: "Bergamota fresca, pimienta y manzana con un corazón floral elegante y maderas nobles de cedro y ámbar gris.",
    accords: ["Aromático", "Amaderado", "Cítrico", "Fresco especiado"],
    notes: { top: ["Bergamota de Calabria", "Pimienta rosa", "Manzana"], heart: ["Lavanda", "Flor de azahar", "Iris"], base: ["Haba tonka", "Madera de cedro", "Ámbar gris"] },
    climate: { seasons: ["Primavera", "Otoño"], time: ["Noche"], occasion: "Salidas y eventos nocturnos" }
  },

  // Otros Árabes Damas
  {
    regex: /hayaati\s*gold|hayyati\s*florence/i,
    description: "Toronja dulce y mandarina con flor de melocotón y jazmín blanco sobre un manto acariciador de vainilla y sándalo.",
    accords: ["Cítrico", "Floral", "Dulce", "Afrutado", "Almizclado"],
    notes: { top: ["Toronja", "Bergamota", "Mandarina"], heart: ["Flor de melocotón", "Jazmín", "Flor de azahar"], base: ["Almizcle dulce", "Vainilla", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Mañanas luminosas, trabajo y paseos" }
  },
  {
    regex: /haya/i,
    description: "Champaña rosada burbujeante, fresas silvestres y naranja sanguina con gardenia y orquídea de vainilla.",
    accords: ["Afrutado", "Floral", "Dulce", "Fresco", "Almizclado"],
    notes: { top: ["Champaña rosada", "Fresa silvestre", "Naranja sanguina", "Rosa"], heart: ["Gardenia", "Jazmín", "Orquídea de vainilla"], base: ["Ámbar", "Sándalo", "Castaña"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Tardes de café, paseos y salidas alegres" }
  },
  {
    regex: /her\s*confession/i,
    description: "Canela fina y flor de azahar combinadas con nardos opulentos y jazmín sambac sobre una base cálida de vainilla Bourbon.",
    accords: ["Floral blanco", "Dulce", "Avainillado", "Especiado suave"],
    notes: { top: ["Canela", "Flor de azahar"], heart: ["Tuberosa", "Jazmín sambac", "Incienso"], base: ["Vainilla Bourbon", "Haba tonka", "Almizcle blanco"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Cenas románticas y salidas nocturnas" }
  },
  {
    regex: /jardin\s*de\s*paris/i,
    description: "Inspirada en Dior J'adore. Pera jugosa, melón y magnolia con jazmín grandiflorum y lirio de los valles sobre almizcle blanco.",
    accords: ["Floral blanco", "Afrutado", "Floral", "Dulce", "Fresco"],
    notes: { top: ["Pera", "Melón", "Magnolia", "Durazno", "Bergamota"], heart: ["Jazmín", "Lirio de los valles", "Nardos", "Fresia", "Rosa"], base: ["Almizcle", "Vainilla", "Cedro", "Zarzamora"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Eventos elegantes de día, trabajo y reuniones" }
  },
  {
    regex: /mayaar\s*cherry/i,
    description: "Cereza negra licorosa con almendra amarga y rosa damascena sobre una base suntuosa de haba tonka y vainilla.",
    accords: ["Cereza", "Dulce", "Almendrado", "Afrutado", "Avainillado"],
    notes: { top: ["Cereza negra", "Almendra amarga", "Licor"], heart: ["Rosa damascena", "Jazmín", "Fresa"], base: ["Haba tonka", "Vainilla", "Bálsamo del Perú", "Sándalo"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches románticas, frío y seducción" }
  },
  {
    regex: /mayar\s*natural/i,
    description: "Agua de coco refrescante, melón verde e higo con flor de loto y jazmín de agua sobre almizcle blanco.",
    accords: ["Verde", "Acuático", "Afrutado", "Fresco", "Floral"],
    notes: { top: ["Agua de coco", "Melón verde", "Mandarina", "Higo"], heart: ["Flor de loto", "Jazmín de agua", "Peonía"], base: ["Almizcle blanco", "Sándalo", "Vainilla"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, playa y mañanas de sol" }
  },
  {
    regex: /mayar/i,
    description: "Lichi exótico jugoso y frambuesas con rosa blanca y peonía sobre un manto suave de vainilla y almizcle.",
    accords: ["Afrutado", "Rosa", "Fresco", "Dulce", "Floral"],
    notes: { top: ["Lichi exótico", "Frambuesa blanca", "Hojas de violeta"], heart: ["Rosa blanca", "Peonía", "Jazmín"], base: ["Vainilla", "Almizcle blanco"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, oficina y paseos con amigas" }
  },
  {
    regex: /princess\s*of\s*arab/i,
    description: "Melocotón aterciopelado y manzana dulce con un corazón noble de rosa y jazmín sobre sándalo y vainilla suave.",
    accords: ["Afrutado", "Floral", "Dulce", "Avainillado", "Almizclado"],
    notes: { top: ["Melocotón dulce", "Manzana", "Bergamota"], heart: ["Rosa", "Jazmín", "Lirio de los valles"], base: ["Vainilla suave", "Almizcle blanco", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Uso diario y reuniones familiares" }
  },

  // Diseñador Caballeros: 212
  {
    regex: /212\s*men\s*heroes/i,
    description: "Revolución fresca y juvenil inspirada en la cultura urbana. Pera jugosa y jengibre chispeante con cannabis verde y cuero noble.",
    accords: ["Afrutado", "Aromático", "Fresco especiado", "Verde", "Cuero"],
    notes: { top: ["Pera", "Jengibre", "Cannabis"], heart: ["Geranio", "Salvia"], base: ["Almizcle", "Cuero"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario juvenil, salidas y estilo urbano" }
  },
  {
    regex: /212\s*(men\s*)?nyc/i,
    description: "La frescura verde de Manhattan. Hojas cortadas, toronja y petit grain combinados con jengibre picante e incienso de fondo.",
    accords: ["Verde", "Cítrico", "Aromático", "Fresco especiado", "Amaderado"],
    notes: { top: ["Notas verdes", "Toronja", "Especias", "Bergamota", "Lavanda", "Petit grain"], heart: ["Jengibre", "Violeta", "Gardenia", "Salvia"], base: ["Almizcle", "Sándalo", "Incienso", "Vetiver", "Guayacán"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Trabajo, oficina y mañanas de primavera" }
  },
  {
    regex: /212\s*vip\s*black\s*elixir/i,
    description: "Concentración nocturna opulenta con licor de ron, acordes de bebida y lavanda sobre cacao amargo y cedro profundo.",
    accords: ["Dulce", "Cacao", "Licoroso", "Aromático", "Cuero"],
    notes: { top: ["Ron", "Coca-cola", "Toronja"], heart: ["Lavanda", "Cuero", "Musgo"], base: ["Cacao", "Almizcle", "Madera de cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas exclusivas, clubes y noches frías" }
  },
  {
    regex: /212\s*vip\s*black/i,
    description: "El cóctel nocturno de la fiesta. Absenta, anís aromático y lavanda con una estela dulce de vainilla negra y almizcle.",
    accords: ["Aromático", "Anisado", "Avainillado", "Especiado suave", "Dulce"],
    notes: { top: ["Absenta", "Anís", "Hinojo"], heart: ["Lavanda"], base: ["Cáscara de vainilla negra", "Almizcle"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Club, eventos nocturnos y fiestas" }
  },
  {
    regex: /212\s*vip\s*men/i,
    description: "Inspirada en las fiestas VIP de Nueva York. Maracuyá tropical, lima y vodka helado sobre una base de ámbar y cuero.",
    accords: ["Tropical", "Licoroso", "Fresco especiado", "Aromático", "Cítrico"],
    notes: { top: ["Maracuyá", "Lima ácida", "Pimienta", "Jengibre"], heart: ["Vodka", "Ginebra", "Menta", "Especias"], base: ["Ámbar", "Cuero", "Notas amaderadas"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Noche"], occasion: "Fiestas, salidas y celebración" }
  },
  {
    regex: /212\s*sexy.*men|212\s*sexy/i,
    description: "Mandarina y bergamota con cardamomo y flores orientales sobre un fondo envolvente de vainilla, sándalo y madera de gaiac.",
    accords: ["Avainillado", "Dulce", "Especiado cálido", "Amaderado", "Atalcado"],
    notes: { top: ["Mandarina", "Bergamota", "Notas verdes"], heart: ["Cardamomo", "Flores", "Pimienta"], base: ["Vainilla", "Madera de gaiac", "Sándalo", "Almizcle", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas y salidas nocturnas" }
  },

  // Diseñador: Dolce & Gabbana
  {
    regex: /dolce.*gabbana.*the\s*one/i,
    description: "La obra maestra de la seducción masculina. Toronja y albahaca con cardamomo y un tabaco ambarado cálido inolvidable.",
    accords: ["Ámbar", "Tabaco", "Especiado cálido", "Cítrico", "Aromático"],
    notes: { top: ["Toronja", "Cilantro", "Albahaca"], heart: ["Cardamomo", "Jengibre", "Flor de azahar"], base: ["Tabaco ambarado", "Ámbar", "Cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas íntimas, cenas románticas y elegancia clásica" }
  },
  {
    regex: /d&g\s*edt/i,
    description: "Cítricos italianos, neroli y mandarina combinados con lavanda aromática, pimienta y un fondo noble de tabaco y cedro.",
    accords: ["Cítrico", "Aromático", "Tabaco", "Fresco especiado", "Lavanda"],
    notes: { top: ["Cítricos", "Bergamota", "Neroli", "Mandarina"], heart: ["Lavanda", "Salvia", "Pimienta"], base: ["Tabaco", "Haba tonka", "Madera de cedro"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Oficina, elegancia tradicional y uso diurno" }
  },

  // Diseñador: Dylan Blue
  {
    regex: /dylan\s*blue/i,
    description: "Notas acuáticas y bergamota de Calabria con hojas de higuera y papiro sobre una base sensual de ambroxan, incienso y haba tonka.",
    accords: ["Ámbar", "Cítrico", "Acuático", "Fresco especiado", "Aromático"],
    notes: { top: ["Notas acuáticas", "Bergamota de Calabria", "Toronja", "Hojas de higuera"], heart: ["Hoja de violeta", "Papiro", "Pachulí", "Pimienta negra", "Ambroxan"], base: ["Almizcle", "Incienso", "Haba tonka", "Azafrán"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia versátil para cualquier lugar y momento" }
  },

  // Valentino
  {
    regex: /green\s*stravaganza/i,
    description: "Inspirada en los jardines de Roma. Bergamota de Calabria luminosa con un corazón inesperado de café tostado y vetiver de Haití.",
    accords: ["Café", "Cítrico", "Amaderado", "Aromático", "Terroso"],
    notes: { top: ["Bergamota de Calabria"], heart: ["Café tostado"], base: ["Vetiver de Haití"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Reuniones de moda, citas y salidas urbanas" }
  },
  {
    regex: /yellow\s*dream/i,
    description: "Mandarina italiana y piña fresca contrastadas con pan de jengibre especiado y vainilla de Madagascar envolvente.",
    accords: ["Especiado cálido", "Dulce", "Cítrico", "Avainillado", "Amaderado"],
    notes: { top: ["Mandarina italiana", "Piña"], heart: ["Pan de jengibre", "Especias orientales"], base: ["Vainilla de Madagascar", "Madera de cedro"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Día", "Noche"], occasion: "Salidas casuales, citas y clima fresco" }
  },
  {
    regex: /bir|born\s*in\s*roma/i,
    description: "Notas minerales de sal marina y hojas de violeta con jengibre fresco y vetiver amaderado contemporáneo.",
    accords: ["Amaderado", "Mineral", "Aromático", "Fresco especiado"],
    notes: { top: ["Notas minerales", "Hojas de violeta", "Sal marina"], heart: ["Jengibre", "Salvia"], base: ["Notas amaderadas", "Vetiver"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Firma personal moderna para cualquier ocasión" }
  },

  // Hugo Boss
  {
    regex: /hugo\s*edt/i,
    description: "El clásico de la cantimplora. Manzana verde ácida crujiente, menta y lavanda con abeto y madera de cedro vigorizante.",
    accords: ["Aromático", "Verde", "Fresco especiado", "Afrutado", "Amaderado"],
    notes: { top: ["Manzana verde", "Lavanda", "Menta", "Toronja", "Albahaca"], heart: ["Salvia", "Geranio", "Clavel", "Jazmín"], base: ["Abeto", "Cedro", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, días activos y mañanas frescas" }
  },
  {
    regex: /boss\s*bottle|boss/i,
    description: "El perfume del hombre de éxito. Manzana fresca y canela aromática con geranio y un fondo noble de madera de olivo y cedro.",
    accords: ["Amaderado", "Afrutado", "Canela", "Especiado cálido", "Vainilla"],
    notes: { top: ["Manzana", "Ciruela", "Limón", "Bergamota"], heart: ["Canela", "Caoba", "Clavel"], base: ["Vainilla", "Sándalo", "Cedro", "Vetiver", "Olivo"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Día", "Noche"], occasion: "Oficina, reuniones ejecutivas y elegancia diaria" }
  },

  // JPG Le Male Le Parfum & Paradise Garden
  {
    regex: /jpg.*le\s*male\s*le\s*parfum|le\s*male\s*le\s*parfum/i,
    description: "Cardamomo elegante y lavanda provenzal con iris empolvado sobre un lecho oriental suntuoso de vainilla y maderas.",
    accords: ["Especiado cálido", "Avainillado", "Lavanda", "Aromático", "Amaderado"],
    notes: { top: ["Cardamomo"], heart: ["Lavanda", "Iris"], base: ["Vainilla", "Notas orientales", "Notas amaderadas"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas, eventos formales y salidas de noche" }
  },
  {
    regex: /jpg.*paradise\s*garden|paradise\s*garden/i,
    description: "Jardín exótico de menta acuática y jengibre con madera de coco salada e higo verde sobre un fondo de haba tonka y sándalo.",
    accords: ["Coco", "Verde", "Acuático", "Dulce", "Fresco especiado"],
    notes: { top: ["Menta acuática", "Jengibre", "Notas verdes"], heart: ["Madera de coco", "Higo", "Sal marina"], base: ["Haba tonka", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Vacaciones, eventos casuales y clima cálido" }
  },

  // Nitro Black
  {
    regex: /nitro\s*black/i,
    description: "Manzana verde ácida, grosellas negras y piña jugosa con abedul ahumado, pimienta negra y una base de ámbar y vainilla.",
    accords: ["Afrutado", "Amaderado", "Fresco especiado", "Ahumado", "Dulce"],
    notes: { top: ["Manzana", "Grosellas negras", "Bergamota", "Piña"], heart: ["Abedul", "Jazmín", "Pachulí", "Pimienta negra"], base: ["Ámbar", "Vainilla", "Almizcle"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, fiestas y eventos sociales" }
  },

  // Phantom
  {
    regex: /phamtom|phantom/i,
    description: "Flor de azahar luminosa, limón y cardamomo con un corazón aromático de lavanda y ron sobre una base de vainilla y cedro.",
    accords: ["Avainillado", "Lavanda", "Cítrico", "Dulce", "Aromático"],
    notes: { top: ["Flor de azahar", "Cardamomo", "Limón"], heart: ["Lavanda aromática", "Ron", "Notas terrosas"], base: ["Vainilla de Madagascar", "Cedro", "Bálsamo de Tolú"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Fiestas, salidas casuales y eventos sociales" }
  },

  // Polo Blue & Red
  {
    regex: /polo\s*blue/i,
    description: "Pepino crujiente, melón jugoso y mandarina con albahaca y salvia sobre un fondo elegante de gamuza suave y maderas.",
    accords: ["Acuático", "Aromático", "Fresco", "Verde", "Cítrico"],
    notes: { top: ["Pepino", "Melón", "Mandarina"], heart: ["Albahaca", "Salvia", "Geranio"], base: ["Gamuza", "Notas amaderadas", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, deportes y uso cotidiano" }
  },
  {
    regex: /polo\s*red/i,
    description: "Arándano rojo chispeante y toronja con azafrán ardiente sobre un corazón de café tostado, cedro y ámbar cálido.",
    accords: ["Afrutado", "Cítrico", "Café", "Especiado cálido", "Ámbar"],
    notes: { top: ["Arándano rojo", "Toronja", "Limón italiano"], heart: ["Azafrán rojo", "Salvia"], base: ["Café tostado", "Ámbar", "Madera de cedro"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Día", "Noche"], occasion: "Citas nocturnas, clima fresco y salidas" }
  },

  // Versace Pour Homme
  {
    regex: /pour\s*homme\s*versace|versace\s*pour\s*homme/i,
    description: "Limón de diamante, neroli y bergamota con jacinto azul, cedro y salvia sobre un fondo reconfortante de haba tonka y almizcle.",
    accords: ["Cítrico", "Aromático", "Floral", "Fresco especiado", "Amaderado"],
    notes: { top: ["Limón", "Neroli", "Bergamota", "Rosa de Mai"], heart: ["Jacinto", "Cedro", "Salvia esclarea", "Geranio"], base: ["Haba tonka", "Almizcle", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Oficina, días de sol y frescura cotidiana" }
  },

  // Prada Luna Rossa
  {
    regex: /prada\s*luna\s*rossa/i,
    description: "Lavanda aromática noble y naranja amarga con menta fresca sobre un fondo mineral moderno de ambroxan y ambreta.",
    accords: ["Lavanda", "Aromático", "Cítrico", "Fresco especiado", "Ámbar"],
    notes: { top: ["Lavanda", "Naranja amarga"], heart: ["Menta", "Salvia esclarea"], base: ["Ambroxan", "Ambreta"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, oficina y mañanas de primavera" }
  },

  // Chanel Damas
  {
    regex: /chanel\s*eau\s*tendre/i,
    description: "Membrillo jugoso y toronja fresca combinados con jacinto y jazmín delicado sobre un fondo aterciopelado de almizcle blanco.",
    accords: ["Floral", "Afrutado", "Cítrico", "Fresco especiado", "Dulce"],
    notes: { top: ["Membrillo", "Toronja"], heart: ["Jacinto", "Jazmín"], base: ["Almizcle blanco", "Iris", "Cedro de Virginia", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario elegante, oficina y citas diurnas" }
  },
  {
    regex: /coco\s*chanel|chanel\s*edp/i,
    description: "La opulencia oriental de Mademoiselle Chanel. Mandarina y durazno con clavo de olor, rosa y flor de azahar sobre ámbar y sándalo.",
    accords: ["Especiado cálido", "Ámbar", "Dulce", "Atalcado", "Floral"],
    notes: { top: ["Cilantro", "Mandarina", "Durazno", "Jazmín", "Rosa de Bulgaria"], heart: ["Mimosa", "Clavo de olor", "Flor de azahar", "Rosa"], base: ["Ládano", "Ámbar", "Sándalo", "Haba tonka", "Vainilla"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos de alta gala, cenas formales y noches frías" }
  },
  {
    regex: /n5\s*chanel|no\s*5/i,
    description: "El perfume más famoso de todos los tiempos. Aldehídos centelleantes, ylang-ylang y neroli con jazmín de Grasse sobre sándalo noble.",
    accords: ["Aldehídico", "Floral", "Atalcado", "Amaderado", "Floral amarillo"],
    notes: { top: ["Aldehídos", "Ylang-ylang", "Neroli", "Bergamota", "Melocotón"], heart: ["Iris", "Jazmín", "Rosa", "Lirio de los valles"], base: ["Sándalo", "Vainilla", "Musgo de roble", "Vetiver", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Eventos formales, bodas y ocasiones memorables" }
  },

  // JPG Damas
  {
    regex: /classique/i,
    description: "Flor de azahar y anís estrellado con rosa sensual e iris sobre una base cálida de vainilla golosa, haba tonka y ámbar.",
    accords: ["Floral blanco", "Dulce", "Avainillado", "Atalcado", "Especiado cálido"],
    notes: { top: ["Flor de azahar", "Anís estrellado", "Rosa", "Mandarina", "Pera"], heart: ["Orquídea de vainilla", "Iris", "Jengibre", "Ylang-ylang", "Ciruela"], base: ["Vainilla dulce", "Haba tonka", "Ámbar", "Sándalo"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches románticas, cenas y eventos elegantes" }
  },
  {
    regex: /jpg\s*divine/i,
    description: "Sal marina y merengue dulce con azucena y ylang-ylang sobre un fondo aterciopelado de almizcle blanco y pachulí.",
    accords: ["Acuático", "Dulce", "Floral blanco", "Salado", "Avainillado"],
    notes: { top: ["Sal", "Notas marinas", "Merengue", "Bergamota"], heart: ["Azucena", "Ylang-ylang", "Jazmín"], base: ["Almizcle blanco", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Eventos junto al mar, fiestas y días de sol" }
  },
  {
    regex: /le\s*belle\s*paradise\s*garden/i,
    description: "Flor de loto azul exótica y lirio de agua con iris empolvado sobre un lecho goloso de vainilla de Madagascar.",
    accords: ["Floral", "Avainillado", "Atalcado", "Dulce", "Acuático"],
    notes: { top: ["Flor de loto azul"], heart: ["Iris empolvado"], base: ["Vainilla de Madagascar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Tardes de fiesta, citas y clima templado" }
  },
  {
    regex: /le\s*belle/i,
    description: "Pera verde asada bañada en haba tonka tostada con una sobredosis adictiva de vainilla pura.",
    accords: ["Avainillado", "Dulce", "Afrutado", "Ámbar"],
    notes: { top: ["Pera jugosa"], heart: ["Haba tonka", "Jazmín"], base: ["Vainilla intensa"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas y salidas nocturnas" }
  },

  // Versace Damas
  {
    regex: /dylan\s*purple/i,
    description: "Pera jugosa, naranja amarga y bergamota con fresia púrpura luminosa sobre un fondo moderno de ambroxan y maderas claras.",
    accords: ["Afrutado", "Floral", "Cítrico", "Dulce", "Almizclado"],
    notes: { top: ["Pera", "Naranja amarga", "Bergamota"], heart: ["Fresia", "Pomarose", "Mahonial"], base: ["Ambroxan", "Iso E Super", "Cedro de Virginia", "Belambre"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, paseos de fin de semana y tardes con amigas" }
  },
  {
    regex: /dylan\s*turquoise/i,
    description: "Limón primofiore y mandarina con guayaba exótica y jazmín sobre maderas claras y almizcle.",
    accords: ["Cítrico", "Afrutado", "Amaderado", "Fresco", "Tropical"],
    notes: { top: ["Limón primofiore", "Mandarina italiana", "Pimienta rosa"], heart: ["Guayaba", "Fresia", "Casis", "Jazmín"], base: ["Clearwood", "Maderas claras", "Almizcle"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días de playa, piscina y calor" }
  },
  {
    regex: /yellow\s*diamond/i,
    description: "Limón de Amalfi y pera con mimosa brillante, flor de loto y fresia sobre un fondo amaderado y almizclado.",
    accords: ["Cítrico", "Floral", "Fresco", "Dulce", "Acuático"],
    notes: { top: ["Limón de Amalfi", "Pera", "Bergamota", "Neroli"], heart: ["Mimosa", "Fresia", "Flor de loto", "Flor de azahar"], base: ["Almizcle", "Madera de gaiac", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Mañanas soleadas, oficina y eventos al aire libre" }
  },

  // Armani In Love With You
  {
    regex: /ilwy/i,
    description: "Cerezas negras maduras, frambuesa y grosellas negras con rosa y jazmín sobre una base cálida de pachulí y vainilla.",
    accords: ["Afrutado", "Dulce", "Floral", "Avainillado", "Pachulí"],
    notes: { top: ["Cereza ácida", "Frambuesa", "Grosellas negras"], heart: ["Rosa", "Jazmín", "Ajenjo"], base: ["Pachulí", "Vainilla"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Citas románticas y salidas con amigas" }
  },

  // Paco Rabanne Damas
  {
    regex: /pure\s*xs/i,
    description: "Ylang-ylang provocativo y palomitas de maíz tostadas con mantequilla sobre durazno, coco y vainilla salada adictiva.",
    accords: ["Avainillado", "Dulce", "Salado", "Floral blanco", "Lactónico"],
    notes: { top: ["Ylang-ylang", "Vainilla", "Palomitas de maíz (popcorn)"], heart: ["Durazno", "Flor de azahar", "Coco"], base: ["Sándalo", "Amberwood", "Almizcle blanco"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas y noches de conquista" }
  },
  {
    regex: /lady\s*royal|lady\s*million/i,
    description: "Granada roja jugosa con flores blancas opulentas, jazmín y flor de azahar sobre madera de cachemira y pachulí.",
    accords: ["Afrutado", "Floral blanco", "Amaderado", "Dulce"],
    notes: { top: ["Granada jugosa", "Mandarina"], heart: ["Flores blancas", "Jazmín", "Flor de azahar"], base: ["Madera de cachemira", "Pachulí"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Eventos elegantes y celebraciones" }
  },

  // Prada Damas
  {
    regex: /prada\s*milano/i,
    description: "Pera jugosa y mandarina con flor de azahar, jazmín sambac y neroli sobre vainilla bourbon y ámbar blanco.",
    accords: ["Floral blanco", "Cítrico", "Dulce", "Avainillado", "Ámbar"],
    notes: { top: ["Pera", "Naranja tangerina", "Bergamota"], heart: ["Flor de azahar", "Jazmín sambac", "Neroli"], base: ["Vainilla bourbon", "Ámbar blanco", "Almizcle blanco", "Benjuí"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Firma personal femenina para cualquier ocasión" }
  },

  // 212 VIP Rosé
  {
    regex: /212\s*vip\s*ros/i,
    description: "Champaña rosada efervescente y notas afrutadas con flor del duraznero sobre almizcle blanco y madera noble.",
    accords: ["Afrutado", "Floral", "Fresco", "Amaderado", "Dulce"],
    notes: { top: ["Champaña rosada", "Notas afrutadas"], heart: ["Flor del duraznero"], base: ["Almizcle blanco", "Notas amaderadas", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Fiestas, cócteles y salidas con amigas" }
  },

  // Acqua Di Gio
  {
    regex: /acqua\s*di\s*gio/i,
    description: "La leyenda acuática mediterránea por excelencia. Notas marinas cristalinas, bergamota y romero sobre un fondo noble de cedro y pachulí.",
    accords: ["Acuático", "Cítrico", "Aromático", "Fresco", "Marino"],
    notes: { top: ["Notas marinas", "Bergamota", "Limón", "Lima", "Mandarina"], heart: ["Romero", "Jazmín", "Calone", "Ciclamen"], base: ["Cedro", "Almizcle blanco", "Musgo de roble", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, trabajo, vacaciones y frescura inigualable" }
  },

  // Bad Boy
  {
    regex: /bad\s*boy\s*cobalt/i,
    description: "Una electrizante combinación de pimienta rosa y lavanda con ciruela negra jugosa, trufa y un fondo sensual de vetiver y cedro.",
    accords: ["Aromático", "Amaderado", "Afrutado", "Fresco especiado", "Terroso"],
    notes: { top: ["Pimienta rosa", "Lavanda"], heart: ["Ciruela", "Geranio"], base: ["Trufa", "Vetiver", "Madera de cedro", "Roble"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Salidas nocturnas, fiestas y citas con estilo" }
  },
  {
    regex: /bad\s*boy/i,
    description: "Fragancia oriental especiada con pimienta blanca y bergamota contrastadas con cacao oscuro amargo y haba tonka vibrante.",
    accords: ["Especiado cálido", "Cacao", "Ámbar", "Amaderado", "Cítrico"],
    notes: { top: ["Pimienta blanca", "Pimienta negra", "Bergamota"], heart: ["Salvia", "Cedro"], base: ["Haba tonka", "Cacao", "Amberwood"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas nocturnas, citas y fiestas" }
  },

  // Bleu de Chanel
  {
    regex: /blue\s*de\s*chanel/i,
    description: "El arquetipo de la elegancia masculina contemporánea. Cítricos vigorizantes con menta fresca sobre un fondo de cedro, incienso y sándalo refinado.",
    accords: ["Cítrico", "Aromático", "Amaderado", "Fresco especiado", "Ahumado"],
    notes: { top: ["Toronja", "Limón", "Menta", "Pimienta rosa"], heart: ["Jengibre", "Nuez moscada", "Jazmín", "Iso E Super"], base: ["Incienso", "Vetiver", "Cedro", "Sándalo", "Pachulí", "Ládano"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Trabajo, citas, reuniones ejecutivas y ocasiones especiales" }
  },

  // Creed Aventus & Niche
  {
    regex: /creed\s*aventus|aventus/i,
    description: "La fragancia de reyes y conquistadores. Piña real asada, bergamota italiana y abedul ahumado con una base de ámbar gris y musgo de roble.",
    accords: ["Afrutado", "Ahumado", "Amaderado", "Cítrico", "Cuero"],
    notes: { top: ["Piña fresca", "Bergamota", "Grosellas negras", "Manzana verde"], heart: ["Abedul ahumado", "Pachulí", "Jazmín de Marruecos", "Rosa"], base: ["Almizcle", "Musgo de roble", "Ámbar gris", "Vainilla"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Cualquier ocasión donde desees proyectar estatus y seguridad" }
  },
  {
    regex: /erba\s*pura/i,
    description: "Una sinfonía mediterránea de frutas cítricas sicilianas envueltas en un manto suntuoso de almizcle blanco y vainilla de Madagascar de duración eterna.",
    accords: ["Afrutado", "Cítrico", "Dulce", "Almizclado", "Avainillado"],
    notes: { top: ["Naranja de Sicilia", "Bergamota de Calabria", "Limón siciliano"], heart: ["Cesta de frutas mediterráneas"], base: ["Almizcle blanco", "Vainilla de Madagascar", "Ámbar"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Eventos exclusivos, fiestas de gala y donde quieras que te recuerden" }
  },
  {
    regex: /layton/i,
    description: "La obra maestra de Parfums de Marly. Manzana crujiente especiada con cardamomo y lavanda, sobre una suntuosa crema de vainilla y madera de gaiac.",
    accords: ["Especiado cálido", "Avainillado", "Aromático", "Amaderado", "Afrutado"],
    notes: { top: ["Manzana", "Lavanda", "Bergamota", "Mandarina"], heart: ["Geranio", "Violeta", "Jazmín"], base: ["Vainilla", "Cardamomo", "Sándalo", "Pimienta", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Citas románticas, ocasiones especiales y elegancia refinada" }
  },
  {
    regex: /naxos/i,
    description: "Homenaje a la belleza de Sicilia. Miel dorada tibia, hojas de tabaco rubio y lavanda provenzal con toques de canela y jazmín sambac.",
    accords: ["Miel", "Tabaco", "Dulce", "Lavanda", "Cítrico", "Avainillado"],
    notes: { top: ["Lavanda", "Bergamota", "Limón"], heart: ["Miel pura", "Canela", "Cachemira", "Jazmín sambac"], base: ["Hojas de tabaco", "Haba tonka", "Vainilla"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Eventos memorables, climas frescos y amantes de la perfumería de autor" }
  },

  // Dior Homme
  {
    regex: /dior\s*homme\s*cologne/i,
    description: "La frescura cristalina de una camisa blanca de lino. Flor de pomelo, bergamota de Calabria y almizcle blanco puro.",
    accords: ["Cítrico", "Floral", "Almizclado", "Fresco"],
    notes: { top: ["Bergamota de Calabria"], heart: ["Flor de pomelo"], base: ["Almizcle blanco"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, mañanas luminosas y relajación total" }
  },
  {
    regex: /dior\s*homme\s*intense/i,
    description: "Una obra de arte olfativa con iris toscano empolvado, ambreta y licor de pera sobre maderas de cedro virgen y vetiver aristocrático.",
    accords: ["Iris", "Atalcado", "Amaderado", "Floral", "Almizclado"],
    notes: { top: ["Lavanda"], heart: ["Iris toscano", "Ambreta", "Pera"], base: ["Cedro de Virginia", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos formales, trajes de etiqueta, cenas de lujo y romance" }
  },
  {
    regex: /dior\s*homme\s*parfum/i,
    description: "La máxima expresión del lujo masculino de Dior. Iris noble concentrado, cuero negro aterciopelado y rosa sobre sándalo y madera de agar.",
    accords: ["Cuero", "Iris", "Amaderado", "Atalcado", "Rosa"],
    notes: { top: ["Iris de la Toscana", "Naranja italiana"], heart: ["Cuero", "Rosa"], base: ["Sándalo", "Oud", "Cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Galas, eventos de etiqueta negra y noches frías" }
  },
  {
    regex: /dior\s*homme/i,
    description: "Elegancia masculina pulcra y sofisticada con notas de bergamota, pimienta rosa y cedro con fondo de madera de cachemira.",
    accords: ["Amaderado", "Almizclado", "Cítrico", "Fresco especiado"],
    notes: { top: ["Bergamota", "Pimienta rosa", "Elemí"], heart: ["Madera de cachemira", "Cedro del Atlas", "Pachulí"], base: ["Iso E Super", "Vetiver de Haití", "Almizcle blanco"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Oficina, elegancia diaria y reuniones ejecutivas" }
  },

  // Sauvage
  {
    regex: /elixir\s*sauvage/i,
    description: "Una concentración prodigiosa con notas de regaliz negro, nuez moscada y canela fundidas en lavanda nocturna y maderas de sándalo hipnóticas.",
    accords: ["Especiado cálido", "Amaderado", "Lavanda", "Fresco especiado", "Regaliz"],
    notes: { top: ["Canela", "Nuez moscada", "Cardamomo", "Toronja"], heart: ["Lavanda salvaje"], base: ["Regaliz", "Sándalo", "Ámbar", "Pachulí", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos imponentes donde busques marcar territorio y elegancia extrema" }
  },
  {
    regex: /sauvage/i,
    description: "El perfume masculino más vendido de la era moderna. Bergamota de Calabria radiante con pimienta de Sichuan sobre una estela magnética de ambroxan.",
    accords: ["Fresco especiado", "Ámbar", "Cítrico", "Aromático", "Almizclado"],
    notes: { top: ["Bergamota de Calabria", "Pimienta"], heart: ["Pimienta de Sichuan", "Lavanda", "Pimienta rosa", "Vetiver", "Geranio"], base: ["Ambroxan", "Cedro", "Ládano"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Firma personal para cualquier lugar y momento" }
  },

  // Eros
  {
    regex: /eros\s*energy/i,
    description: "La frescura cítrica mediterránea definitiva. Una explosión vibrante de bergamota, limón y mandarina con una estela moderna de ambroxan.",
    accords: ["Cítrico", "Fresco", "Aromático", "Verde"],
    notes: { top: ["Limón de Italia", "Bergamota", "Naranja sanguina", "Lima"], heart: ["Pimienta rosa", "Grosellas negras", "Ámbar blanco"], base: ["Pachulí", "Almizcle", "Musgo de roble"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días soleados, calor intenso y actividades al aire libre" }
  },
  {
    regex: /eros\s*flame/i,
    description: "El dios del amor encendido en pasión. Mandarina italiana picante, romero aromático y pimienta sobre un fondo ardiente de vainilla y maderas.",
    accords: ["Cítrico", "Especiado cálido", "Avainillado", "Aromático", "Amaderado"],
    notes: { top: ["Mandarina", "Pimienta negra", "Chinotto", "Limón", "Romero"], heart: ["Pimienta", "Geranio", "Rosa"], base: ["Vainilla de Madagascar", "Haba tonka", "Sándalo", "Cedro de Texas", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Citas románticas, salidas con amigos y clima fresco" }
  },
  {
    regex: /eros/i,
    description: "Inspirada en la mitología griega del amor y la pasión. Menta fresca crujiente, manzana verde y haba tonka con un fondo sensual de vainilla y ambroxan.",
    accords: ["Avainillado", "Aromático", "Verde", "Fresco especiado", "Dulce"],
    notes: { top: ["Menta fresca", "Manzana verde", "Limón italiano"], heart: ["Haba tonka", "Ambroxan", "Geranio"], base: ["Vainilla de Madagascar", "Cedro del Atlas", "Vetiver", "Musgo de roble"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Fiestas, clubes, citas y momentos donde quieras destacar" }
  },

  // Givenchy Gentleman
  {
    regex: /gentleman/i,
    description: "Una interpretación aristocrática con iris elegante, pimienta negra y bálsamo de Tolú sobre vainilla negra amaderada.",
    accords: ["Iris", "Especiado cálido", "Avainillado", "Amaderado", "Balsámico"],
    notes: { top: ["Pimienta negra", "Lavanda", "Bergamota"], heart: ["Iris", "Clavo de olor", "Canela"], base: ["Vainilla negra", "Bálsamo de Tolú", "Pachulí", "Benjuí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Eventos formales, trajes de noche y galas" }
  },

  // Halloween Man
  {
    regex: /halloween\s*man\s*x/i,
    description: "El rey de las salidas nocturnas: café tostado oscuro, whisky escocés añejado, cardamomo y cuero con un fondo cálido de haba tonka.",
    accords: ["Café", "Especiado cálido", "Whisky", "Avainillado", "Cuero"],
    notes: { top: ["Cardamomo", "Lavanda", "Limón"], heart: ["Café tostado", "Whisky", "Canela", "Cuero", "Notas minerales"], base: ["Haba tonka", "Ámbar", "Incienso"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas nocturnas, bares, citas y clima frío" }
  },
  {
    regex: /halloween/i,
    description: "Manzana verde, licor de manzana y especias con canela y cuero sobre un fondo de ámbar envolvente.",
    accords: ["Especiado cálido", "Canela", "Avainillado", "Amaderado", "Cítrico"],
    notes: { top: ["Manzana", "Mandarina", "Cardamomo"], heart: ["Canela", "Lavanda", "Flor de azahar"], base: ["Vainilla", "Cuero", "Ámbar gris"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas casuales, fiestas y citas" }
  },

  // Imagination LV
  {
    regex: /imagination/i,
    description: "La obra maestra fresca de Louis Vuitton. Té negro exclusivo de China con una sobredosis de ambroxan y cítricos italianos radiantes.",
    accords: ["Cítrico", "Ámbar", "Té", "Fresco especiado", "Aromático"],
    notes: { top: ["Cidra", "Bergamota de Calabria", "Naranja siciliana"], heart: ["Jengibre de Nigeria", "Neroli de Túnez", "Canela de Ceilán"], base: ["Té negro de China", "Ambroxan", "Incienso", "Madera de gaiac"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Días calurosos, lujo cotidiano y reuniones exclusivas" }
  },

  // Invictus
  {
    regex: /invivuctus.*victory|invictus.*victory/i,
    description: "Duelo extremo entre frescura vigorosa y sensualidad magnética: limón chispeante y pimienta rosa chocan contra haba tonka oscura y vainilla profunda.",
    accords: ["Avainillado", "Ámbar", "Dulce", "Aromático", "Cítrico"],
    notes: { top: ["Limón", "Pimienta rosa"], heart: ["Lavanda", "Incienso"], base: ["Haba tonka", "Vainilla", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Citas, salidas y momentos donde quieras oler dulce y masculino" }
  },
  {
    regex: /invictus\s*platinum/i,
    description: "Una vibración aromática metálica y energizante con toronja fresca, ajenjo mentolado, pachulí y ciprés noble.",
    accords: ["Aromático", "Verde", "Fresco especiado", "Amaderado", "Cítrico"],
    notes: { top: ["Toronja", "Ajenjo"], heart: ["Menta", "Lavanda"], base: ["Ciprés", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Días de éxito, oficina, gimnasio y eventos de día" }
  },
  {
    regex: /invictus/i,
    description: "El aroma de la victoria. Una sacudida marina vigorizante con pomelo fresco y hojas de laurel sobre una base de madera de gaiac y ámbar gris.",
    accords: ["Cítrico", "Acuático", "Aromático", "Fresco", "Amaderado"],
    notes: { top: ["Notas marinas", "Toronja", "Mandarina"], heart: ["Hoja de laurel", "Jazmín"], base: ["Ámbar gris", "Madera de gaiac", "Musgo de roble", "Pachulí"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Deportes, gimnasio, días de calor y uso cotidiano" }
  },

  // JPG Le Male & Scandal
  {
    regex: /jpg.*le\s*beau|le\s*beau/i,
    description: "El jardín del Edén masculino. Una combinación embriagadora de bergamota refrescante, madera de coco tropical y haba tonka golosa.",
    accords: ["Coco", "Dulce", "Cítrico", "Avainillado", "Amaderado"],
    notes: { top: ["Bergamota fresca", "Piña"], heart: ["Madera de coco", "Notas marinas"], base: ["Haba tonka", "Sándalo", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día", "Noche"], occasion: "Vacaciones, salidas casuales y conquista" }
  },
  {
    regex: /le\s*male\s*elixir/i,
    description: "Una poción ardiente y seductora de miel dorada, haba tonka tostada y tabaco dulce sobre lavanda y menta aromática.",
    accords: ["Dulce", "Miel", "Avainillado", "Tabaco", "Lavanda", "Ámbar"],
    notes: { top: ["Lavanda", "Menta"], heart: ["Vainilla Bourbon", "Benjuí"], base: ["Miel dorada", "Haba tonka", "Tabaco"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas, noches de frío y fiestas" }
  },
  {
    regex: /scandal.*absolu/i,
    description: "La versión más intensa y rica de Scandal con ciruela mirabel jugosa, castaña tostada y sándalo cremoso.",
    accords: ["Dulce", "Afrutado", "Amaderado", "Avainillado", "Ámbar"],
    notes: { top: ["Ciruela mirabel"], heart: ["Castaña"], base: ["Madera de sándalo"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas exclusivas, clubes y eventos nocturnos" }
  },
  {
    regex: /so\s*scandal|scandal/i,
    description: "La combinación perfecta entre caramelo tostado, haba tonka y vetiver amaderado con un toque de mandarina. Dulce, magnético y audaz.",
    accords: ["Caramelo", "Dulce", "Avainillado", "Cítrico", "Amaderado"],
    notes: { top: ["Mandarina", "Salvia"], heart: ["Caramelo", "Haba tonka"], base: ["Vetiver", "Cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas nocturnas y conquista" }
  },
  {
    regex: /ultra\s*male/i,
    description: "El rey indiscutible de las fiestas. Pera jugosa dulce y canela con lavanda negra y un fondo envolvente de vainilla negra.",
    accords: ["Dulce", "Avainillado", "Afrutado", "Canela", "Lavanda"],
    notes: { top: ["Pera madura", "Lavanda", "Menta", "Bergamota"], heart: ["Canela", "Alcaravea", "Salvia esclarea"], base: ["Cáscara de vainilla negra", "Ámbar", "Pachulí", "Cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Club, eventos nocturnos y fiestas" }
  },

  // One Million
  {
    regex: /million\s*elixir/i,
    description: "Manzana roja licorosa y rosa damascena sobre una suntuosa crema de haba tonka y vainilla absoluta.",
    accords: ["Avainillado", "Dulce", "Afrutado", "Ámbar", "Rosa"],
    notes: { top: ["Manzana", "Davana"], heart: ["Rosa damascena", "Osmanto", "Cedro"], base: ["Absoluto de vainilla", "Haba tonka", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas, fiestas y salidas" }
  },
  {
    regex: /million\s*parfum/i,
    description: "Cuero solar brillante y nardos salados con aceite de monoi sobre resinas de ámbar y ládano.",
    accords: ["Floral blanco", "Cuero", "Salado", "Ámbar", "Tropical"],
    notes: { top: ["Nardos", "Sal"], heart: ["Cuero solar", "Aceite de monoi"], base: ["Ámbar gris", "Ládano", "Pino"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Fiestas al atardecer, salidas y vacaciones" }
  },
  {
    regex: /one\s*million.*royal/i,
    description: "Una reinterpretación majestuosa con lavanda aromática pura, madera de cedro profunda y benjuí sensual que proyecta opulencia.",
    accords: ["Amaderado", "Aromático", "Lavanda", "Ámbar", "Balsámico"],
    notes: { top: ["Cardamomo", "Tangerina", "Bergamota"], heart: ["Lavanda", "Salvia", "Hojas de violeta"], base: ["Benjuí", "Cedro", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche"], occasion: "Eventos elegantes, cenas de gala y ocasiones memorables" }
  },
  {
    regex: /million\s*gol/i,
    description: "El nuevo icono femenino de Rabanne. Flores blancas radiantes con mandarina centelleante sobre vainilla mineral pura.",
    accords: ["Floral blanco", "Dulce", "Cítrico", "Avainillado", "Almizclado"],
    notes: { top: ["Mandarina"], heart: ["Flores blancas", "Lavanda"], base: ["Vainilla mineral", "Almizcle"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y momentos para destacar" }
  },
  {
    regex: /one\s*million|million/i,
    description: "El lingote de oro que revolucionó la perfumería mundial. Mandarina sanguina y menta con canela especiada, cuero seductor y ámbar.",
    accords: ["Especiado cálido", "Canela", "Cítrico", "Cuero", "Ámbar"],
    notes: { top: ["Mandarina roja", "Toronja", "Menta"], heart: ["Canela", "Notas especiadas", "Rosa"], base: ["Ámbar", "Cuero", "Notas amaderadas", "Pachulí hindú"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas, salidas y celebración" }
  },

  // MYSLF
  {
    regex: /myslf/i,
    description: "La visión moderna de la masculinidad por YSL. Bergamota de Calabria con un corazón sensual de flor de azahar y maderas ambaradas.",
    accords: ["Cítrico", "Floral blanco", "Amaderado", "Fresco"],
    notes: { top: ["Bergamota de Calabria", "Bergamota verde"], heart: ["Flor de azahar del naranjo de Túnez"], base: ["Ambrofix", "Pachulí de Indonesia"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario, citas y salidas casuales con estilo" }
  },

  // Tom Ford
  {
    regex: /ombre\s*leather|spicenom.*leather/i,
    description: "Cuero negro refinado y floral con cardamomo especiado y jazmín sambac que evoca los paisajes del desierto estadounidense.",
    accords: ["Cuero", "Especiado cálido", "Aromático", "Floral blanco", "Ahumado"],
    notes: { top: ["Cardamomo"], heart: ["Cuero negro", "Jazmín sambac"], base: ["Ámbar", "Musgo", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas nocturnas, chaqueta de cuero y elegancia rebelde" }
  },
  {
    regex: /oud\s*wood/i,
    description: "Una de las maderas de oud más elegantes y amigables jamás creadas, enriquecida con palo de rosa brasileño, pimienta de Sichuan y sándalo cremoso.",
    accords: ["Amaderado", "Oud", "Especiado cálido", "Aromático", "Balsámico"],
    notes: { top: ["Palo de rosa de Brasil", "Cardamomo", "Pimienta de Sichuan"], heart: ["Madera de agar (Oud)", "Sándalo", "Vetiver"], base: ["Haba tonka", "Vainilla", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno", "Primavera"], time: ["Noche", "Día"], occasion: "Oficina de alto rango, eventos formales y porte sofisticado" }
  },
  {
    regex: /tobacco\s*vanille/i,
    description: "El perfume icónico de Tom Ford que redefinió el aroma a tabaco dulce. Hojas aromáticas de tabaco con cacao puro, vainilla cremosa y frutos secos.",
    accords: ["Avainillado", "Tabaco", "Dulce", "Especiado cálido", "Cacao"],
    notes: { top: ["Hoja de tabaco", "Notas especiadas"], heart: ["Haba tonka", "Flor del tabaco", "Vainilla", "Cacao"], base: ["Frutos secos", "Maderas nobles"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas formales, frío intenso y elegancia absoluta" }
  },

  // Stronger With You
  {
    regex: /swy.*intens/i,
    description: "Una adicción cálida y dulce de castañas confitadas, canela y pimienta rosa sobre un manto aterciopelado de vainilla y gamuza.",
    accords: ["Avainillado", "Especiado cálido", "Dulce", "Ámbar", "Canela"],
    notes: { top: ["Pimienta rosa", "Enebro de Virginia", "Violeta"], heart: ["Canela", "Lavanda", "Salvia", "Caramelo toffee"], base: ["Vainilla", "Haba tonka", "Ámbar", "Gamuza"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas en pareja, climas fríos y veladas íntimas" }
  },
  {
    regex: /swy.*absolut/i,
    description: "La versión licorosa más intensa de SWY con acorde de ron añejo, castaña glaseada y vainilla bourbon ahumada.",
    accords: ["Avainillado", "Especiado cálido", "Licoroso", "Amaderado", "Dulce"],
    notes: { top: ["Ron", "Elemí", "Bergamota"], heart: ["Lavanda", "Davana"], base: ["Castaña", "Vainilla de Madagascar", "Cedro", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches muy frías, citas y ocasiones especiales" }
  },
  {
    regex: /swy|stronger\s*with\s*you/i,
    description: "Fragancia seductora para el hombre moderno. Cardamomo especiado y menta fresca combinados con castaña dulce, salvia aromática y vainilla.",
    accords: ["Avainillado", "Aromático", "Especiado cálido", "Dulce", "Castaña"],
    notes: { top: ["Cardamomo", "Pimienta rosa", "Hojas de violeta", "Menta"], heart: ["Piña", "Canela", "Melón", "Salvia", "Lavanda"], base: ["Vainilla", "Castaña", "Madera de cedro", "Amberwood"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche", "Día"], occasion: "Uso diario en frío, citas y reuniones sociales" }
  },

  // Azzaro Wanted
  {
    regex: /most\s*wanted.*parfum/i,
    description: "Gengibre rojo picante ardiente con maderas nobles y vainilla bourbon profunda que proyecta una sensualidad magnética.",
    accords: ["Especiado cálido", "Avainillado", "Amaderado", "Ámbar"],
    notes: { top: ["Jengibre rojo"], heart: ["Notas amaderadas"], base: ["Vainilla Bourbon"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas románticas, fiestas y salidas" }
  },
  {
    regex: /most\s*wanted/i,
    description: "Cardamomo vibrante con toffee de caramelo fundido y madera de ámbar sensual. Dulce, especiado e irresistible.",
    accords: ["Caramelo", "Especiado cálido", "Dulce", "Amaderado", "Ámbar"],
    notes: { top: ["Cardamomo"], heart: ["Caramelo toffee"], base: ["Madera de ámbar"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Citas nocturnas y eventos" }
  },
  {
    regex: /wanted\s*by\s*night/i,
    description: "Canela ardiente, mandarina jugosa e incienso con tabaco rubio y madera de cedro rojo nocturno.",
    accords: ["Canela", "Especiado cálido", "Tabaco", "Afrutado", "Amaderado"],
    notes: { top: ["Canela", "Mandarina", "Lavanda", "Limón"], heart: ["Notas afrutadas", "Incienso", "Comino", "Cedro rojo"], base: ["Tabaco", "Vainilla", "Cedro", "Cuero", "Pachulí"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Salidas nocturnas, bares y fiestas" }
  },
  {
    regex: /wanted/i,
    description: "Limón picante y jengibre con cardamomo de Guatemala sobre una base de madera de enebro y haba tonka.",
    accords: ["Cítrico", "Aromático", "Especiado cálido", "Amaderado", "Fresco"],
    notes: { top: ["Limón", "Jengibre", "Lavanda", "Menta"], heart: ["Cardamomo de Guatemala", "Enebro de Virginia", "Manzana", "Geranio"], base: ["Haba tonka", "Amberwood", "Vetiver de Haití"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Uso diario, oficina y salidas con amigos" }
  },

  // Valentino
  {
    regex: /coral\s*fantasy/i,
    description: "Inspirada en el atardecer sobre Roma. Manzana roja crujiente y cardamomo con tabaco sensual y pachulí.",
    accords: ["Afrutado", "Tabaco", "Especiado cálido", "Amaderado", "Dulce"],
    notes: { top: ["Manzana roja", "Cardamomo", "Bergamota de Calabria"], heart: ["Lavanda Bourbon", "Salvia esclarea", "Geranio"], base: ["Tabaco", "Pachulí", "Vetiver"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Citas, salidas y momentos para destacar" }
  },
  {
    regex: /valentino/i,
    description: "Una actitud moderna inspirada en la noche romana. Notas amaderadas contemporáneas de vetiver y jengibre combinadas con acordes minerales.",
    accords: ["Amaderado", "Mineral", "Aromático", "Fresco especiado", "Avainillado"],
    notes: { top: ["Pimienta rosa", "Bergamota", "Grosellas negras"], heart: ["Jazmín", "Té de jazmín"], base: ["Vainilla bourbon", "Cachemira", "Madera de gaiac"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Salidas nocturnas, moda contemporánea y citas" }
  },

  // YSL Y
  {
    regex: /ysl/i,
    description: "Manzana verde ácida y jengibre chispeante equilibrados con salvia aromática y geranio sobre un fondo intenso de maderas y haba tonka.",
    accords: ["Aromático", "Amaderado", "Fresco especiado", "Afrutado", "Verde"],
    notes: { top: ["Manzana", "Jengibre", "Bergamota"], heart: ["Salvia", "Bayas de enebro", "Geranio"], base: ["Amberwood", "Haba tonka", "Cedro", "Vetiver", "Incienso"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Perfume firma perfecto para cualquier situación" }
  },

  // Black Opium
  {
    regex: /black\s*opium/i,
    description: "El perfume nocturno por excelencia para dama. Una dosis adictiva de café negro tostado combinada con flores blancas y vainilla dulce embriagadora.",
    accords: ["Avainillado", "Café", "Dulce", "Especiado cálido", "Floral blanco"],
    notes: { top: ["Pera jugosa", "Pimienta rosa", "Flor de azahar"], heart: ["Café tostado", "Jazmín", "Almendra amarga", "Regaliz"], base: ["Vainilla", "Pachulí", "Madera de cachemira", "Cedro"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas nocturnas, citas, conciertos y clima frío" }
  },

  // Bright Crystal & Crystal Noir
  {
    regex: /bright\s*crystal/i,
    description: "Una joya floral transparente y luminosa con granada jugosa, flor de loto delicada y peonías frescas sobre un fondo almizclado cristalino.",
    accords: ["Floral", "Fresco", "Acuático", "Cítrico", "Amaderado"],
    notes: { top: ["Yuzu", "Granada", "Notas acuáticas"], heart: ["Peonía", "Flor de loto", "Magnolia"], base: ["Almizcle", "Caoba", "Ámbar"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, días soleados, oficina y eventos al aire libre" }
  },
  {
    regex: /crystal\s*noir/i,
    description: "Sensual y misterioso. Cardamomo especiado, jengibre y gardenia suntuosa con un fondo de coco cremoso, sándalo y almizcle oscuro.",
    accords: ["Especiado cálido", "Coco", "Floral blanco", "Atalcado", "Amaderado"],
    notes: { top: ["Pimienta", "Jengibre", "Cardamomo"], heart: ["Coco", "Gardenia", "Flor de azahar", "Peonía"], base: ["Sándalo", "Almizcle", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Cenas románticas, salidas nocturnas y seducción" }
  },

  // Coco Mademoiselle
  {
    regex: /coco\s*mademoiselle/i,
    description: "La esencia de una mujer audaz y libre. Naranja chispeante y rosa elegante con un fondo inconfundible de pachulí noble y vainilla suave.",
    accords: ["Cítrico", "Pachulí", "Floral blanco", "Dulce", "Rosa"],
    notes: { top: ["Naranja", "Mandarina", "Bergamota", "Flor de azahar"], heart: ["Rosa turca", "Jazmín", "Mimosa", "Ylang-ylang"], base: ["Pachulí", "Almizcle blanco", "Vainilla", "Vetiver", "Haba tonka"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Cualquier ocasión que requiera distinción y elegancia" }
  },

  // Eau Splendide
  {
    regex: /eau\s*splendide/i,
    description: "Bergamota radiante y mandarina con magnolia delicada y flor de loto sobre almizcle blanco y madera de cedro suave.",
    accords: ["Floral acuático", "Cítrico", "Fresco", "Verde"],
    notes: { top: ["Bergamota", "Mandarina", "Pera"], heart: ["Magnolia", "Flor de loto", "Peonía"], base: ["Almizcle blanco", "Cedro", "Ámbar suave"] },
    climate: { seasons: ["Primavera", "Verano"], time: ["Día"], occasion: "Uso diario, mañanas frescas y paseos" }
  },

  // Fame
  {
    regex: /fame/i,
    description: "El perfume vanguardista de Paco Rabanne. Mango dulce jugoso y bergamota combinados con jazmín puro e incienso cremoso adictivo.",
    accords: ["Mango", "Tropical", "Dulce", "Floral blanco", "Avainillado"],
    notes: { top: ["Mango jugoso", "Bergamota"], heart: ["Jazmín", "Incienso"], base: ["Vainilla", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Fiestas, salidas y días donde quieras destacar" }
  },

  // Good Girl
  {
    regex: /good\s*girl.*blush/i,
    description: "Una reinterpretación radiante y femenina con peonía aterciopelada, agua de rosas y dos tipos de vainilla pura sobre almendra suave.",
    accords: ["Floral", "Avainillado", "Atalcado", "Dulce", "Cítrico"],
    notes: { top: ["Bergamota", "Almendra amarga"], heart: ["Peonía", "Ylang-ylang", "Agua de rosas"], base: ["Vainilla", "Haba tonka"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Citas románticas de día, eventos sociales y paseos" }
  },
  {
    regex: /good\s*girl.*glam/i,
    description: "Homenaje al poder de la feminidad. Cereza negra chispeante y almendra amarga con agua de rosas sobre vainilla bourbon.",
    accords: ["Cereza", "Almendrado", "Dulce", "Afrutado", "Avainillado"],
    notes: { top: ["Cereza negra", "Almendra amarga"], heart: ["Rosa", "Semillas de ambreta"], base: ["Vainilla Bourbon", "Vetiver"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Fiestas glamorosas, galas y salidas nocturnas" }
  },
  {
    regex: /very\s*good\s*girl/i,
    description: "La versión roja audaz de Good Girl con grosellas rojas ácidas y lichi exótico sobre una rosa seductora y vainilla vetiver.",
    accords: ["Afrutado", "Rosa", "Fresco", "Dulce", "Avainillado"],
    notes: { top: ["Lichi", "Grosella roja"], heart: ["Rosa"], base: ["Vainilla", "Vetiver"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Salidas alegres, citas y reuniones sociales" }
  },
  {
    regex: /good\s*girl|goosd\s*girl|la\s*bomba/i,
    description: "El icónico tacón de Carolina Herrera. Nardos luminosos y jazmín sambac contrastados con la tentación oscura del café, cacao y haba tonka.",
    accords: ["Dulce", "Floral blanco", "Especiado cálido", "Avainillado", "Cacao"],
    notes: { top: ["Almendra", "Café", "Bergamota", "Limón"], heart: ["Nardos", "Jazmín sambac", "Flor de azahar", "Rosa de Bulgaria"], base: ["Haba tonka", "Cacao", "Vainilla", "Praliné", "Sándalo", "Ámbar"] },
    climate: { seasons: ["Otoño", "Invierno"], time: ["Noche"], occasion: "Noches de fiesta, citas románticas y salidas especiales" }
  },

  // Miss Dior
  {
    regex: /miss\s*dior/i,
    description: "Un ramo floral exuberante con rosa centifolia aterciopelada, lirio de los valles y peonía envueltas en un velo de vainilla suave y sándalo.",
    accords: ["Floral", "Rosa", "Atalcado", "Dulce", "Almizclado"],
    notes: { top: ["Lirio de los valles", "Peonía", "Iris"], heart: ["Rosa centifolia", "Albaricoque", "Melocotón"], base: ["Vainilla", "Haba tonka", "Almizcle blanco", "Sándalo", "Benjuí"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Citas románticas, paseos de día y ocasiones especiales" }
  },

  // My Way
  {
    regex: /my\s*way/i,
    description: "Una invitación a ampliar horizontes. Flores blancas radiantes de nardos de la India y flor de azahar egipcia con vainilla de Madagascar.",
    accords: ["Floral blanco", "Tuberosa", "Cítrico", "Avainillado", "Floral"],
    notes: { top: ["Flor de azahar del naranjo", "Bergamota"], heart: ["Nardos de la India", "Jazmín"], base: ["Vainilla de Madagascar", "Almizcle blanco", "Cedro de Virginia"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día"], occasion: "Oficina, viajes, eventos y mañanas luminosas" }
  },

  // Olympea
  {
    regex: /olympea/i,
    description: "La diosa del Olimpo. Vainilla salada única en su tipo, combinada con jazmín de agua, mandarina verde y madera de cachemira.",
    accords: ["Avainillado", "Salado", "Floral blanco", "Ámbar", "Amaderado"],
    notes: { top: ["Jazmín de agua", "Mandarina verde", "Flor de jengibre"], heart: ["Vainilla salada"], base: ["Ámbar gris", "Madera de cachemira", "Sándalo"] },
    climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Citas románticas, salidas con amigas y ocasiones especiales" }
  },

  // Libre
  {
    regex: /libre/i,
    description: "El perfume de la libertad. Una audaz fusión entre la lavanda de Francia y la flor de azahar de Marruecos sensual y femenina.",
    accords: ["Floral blanco", "Lavanda", "Cítrico", "Dulce", "Avainillado"],
    notes: { top: ["Lavanda francesa", "Mandarina", "Grosellas negras", "Petit grain"], heart: ["Flor de azahar de Marruecos", "Jazmín sambac", "Lavanda"], base: ["Vainilla de Madagascar", "Almizcle", "Cedro", "Ámbar gris"] },
    climate: { seasons: ["Primavera", "Otoño", "Invierno"], time: ["Día", "Noche"], occasion: "Reuniones de trabajo, eventos elegantes y citas" }
  },

  // Genericos Frascos
  {
    regex: /frasco/i,
    description: "Envase atomizador recargable de vidrio grueso reforzado para perfumería fina con pulverizador de rocío uniforme de alta gama.",
    accords: ["Accesorio", "Recargable", "Vidrio de lujo"],
    notes: { top: ["Atomizador de precisión"], heart: ["Vidrio grueso reforzado"], base: ["Tapa hermética de seguridad"] },
    climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Presentación para fragancias genéricas y rellenos" }
  }
];

// Helper to determine primary aroma categories
function determineAromaFamilies(accords) {
  const families = new Set();
  const lowerAccords = accords.map(a => a.toLowerCase());

  if (lowerAccords.some(a => a.includes('dulce') || a.includes('gourmand') || a.includes('caramelo') || a.includes('miel') || a.includes('afrutado') || a.includes('fruta') || a.includes('cereza') || a.includes('mango'))) {
    families.add('Dulces');
  }
  if (lowerAccords.some(a => a.includes('cítrico') || a.includes('fresco') || a.includes('limón') || a.includes('bergamota'))) {
    families.add('Cítricos');
  }
  if (lowerAccords.some(a => a.includes('amaderado') || a.includes('oud') || a.includes('cedro') || a.includes('sándalo') || a.includes('cuero') || a.includes('ahumado'))) {
    families.add('Amaderados');
  }
  if (lowerAccords.some(a => a.includes('floral') || a.includes('rosa') || a.includes('tuberosa') || a.includes('jazmín') || a.includes('azahar'))) {
    families.add('Florales');
  }
  if (lowerAccords.some(a => a.includes('especiado') || a.includes('canela') || a.includes('pimienta') || a.includes('cardamomo') || a.includes('café') || a.includes('tabaco'))) {
    families.add('Especiados');
  }
  if (lowerAccords.some(a => a.includes('acuático') || a.includes('marino') || a.includes('salado') || a.includes('ozónico'))) {
    families.add('Acuáticos');
  }
  if (lowerAccords.some(a => a.includes('vainilla') || a.includes('avainillado') || a.includes('tonka') || a.includes('cacao') || a.includes('lactónico'))) {
    families.add('Avainillados');
  }

  if (families.size === 0) {
    families.add('Amaderados');
  }

  return Array.from(families);
}

// Fallback generator
function getFallback(p) {
  const isFemale = p.subcategory === 'Damas' || /femme|dama|woman|her|girl|donna/i.test(p.name);
  if (isFemale) {
    return {
      description: `Una fragancia femenina encantadora de la familia ${p.category}, diseñada para resaltar la elegancia, sofisticación y presencia única de la mujer actual con acordes florales y dulces duraderos.`,
      accords: ["Floral blanco", "Dulce", "Afrutado", "Avainillado", "Almizclado"],
      notes: {
        top: ["Bergamota de Calabria", "Pera jugosa", "Grosellas rojas"],
        heart: ["Jazmín sambac", "Rosa de Grasse", "Flor de azahar"],
        base: ["Vainilla de Madagascar", "Almizcle blanco", "Madera de sándalo"]
      },
      climate: { seasons: ["Primavera", "Verano", "Otoño"], time: ["Día", "Noche"], occasion: "Uso diario, eventos sociales y salidas especiales" }
    };
  } else {
    return {
      description: `Una fragancia masculina distinguida de la categoría ${p.category}, con una combinación equilibrada de cítricos refrescantes, especias aromáticas y maderas nobles de gran fijación.`,
      accords: ["Amaderado", "Cítrico", "Aromático", "Especiado fresco", "Ámbar"],
      notes: {
        top: ["Bergamota", "Limón italiano", "Pimienta negra"],
        heart: ["Lavanda provenzal", "Cardamomo", "Notas marinas"],
        base: ["Cedro de Virginia", "Ámbar gris", "Pachulí", "Almizcle"]
      },
      climate: { seasons: ["Todas las estaciones"], time: ["Día", "Noche"], occasion: "Fragancia versátil para uso diario, oficina y salidas nocturnas" }
    };
  }
}

let countMatched = 0;

productos.forEach(p => {
  let profile = profiles.find(prof => prof.regex.test(p.name));
  if (!profile) {
    profile = getFallback(p);
  } else {
    countMatched++;
  }

  p.description = profile.description;
  p.accords = profile.accords;
  p.notes = profile.notes;
  p.climate = profile.climate;
  p.aromaFamilies = determineAromaFamilies(profile.accords);
  p.longevity = "8 - 12+ Horas (Excelente fijación)";
  p.sillage = "Moderada a Intensa (Deja estela atractiva)";
});

fs.writeFileSync(productosPath, JSON.stringify(productos, null, 2), 'utf8');
console.log(`Updated ${productos.length} perfumes. Curated specific profiles matched: ${countMatched}/${productos.length}`);
