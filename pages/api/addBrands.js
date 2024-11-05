import mysql from 'mysql2/promise';

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const brands = [
            "Arçelik", "Silverline", "Beko", "VESTEL", "Bosch", "Teka", "Ferre Milano", "Ferre",
            "Franke", "Altus", "Siemens", "Profilo", "Simfer", "Samsung", "Uğur", "Termikel", "KUMTEL", "Regal", "Esty",
            "GL GENERAL", "Hoover", "ukinox", "Eminçelik", "Luxell", "Electrolux", "Bahçıvan", "Alveus", "Grundig",
            "Çetintaş Evii", "İtimat", "CVS", "Mutlusan", "Şenocak", "Vestfrost", "Dijitsu", "Fansan", "Gülsan", "TommaTech",
            "LG", "Çetintaş", "FANEXFAN", "Akel", "Vinola", "Luno", "Remta", "Windsor", "Exep", "Haier", "Aksa", "Cool Life",
            "Femaş", "Finlux", "Liebherr", "Seg", "ISM", "Arzum", "Dündar", "Empero", "Dalle", "Badem10", "CONTİ", "Smeg",
            "Ars", "GENERAL", "Musullu", "Arnica", "Sharp", "bwt", "Innova", "Indel-B", "ÖZTİRYAKİLER", "Activent", "Toyjoy",
            "ONVO", "DIGERUI", "Point", "Woox", "Elenberg", "KÜGERR", "Minisan", "Asel", "Horoz Elektrik", "Stilevs", "Oscar",
            "ARİETE", "Kiwi", "AEG", "Candy", "İnoksan", "Kenwood", "Alpina", "Dometic", "Cata", "ROBO", "OSİMO", "Bood",
            "keysmart", "AWOX", "Flavel", "Hafele", "gaman", "Aqua Plus", "KORKMAZ", "Sinbo", "GoldMaster", "Nisaluce",
            "White Daisy", "Perotti", "Mioji", "Chermik", "sobapark", "Evora", "Miele", "Çiftçiler", "Hotpoint", "Wmf",
            "Barum", "TROYA", "Hella", "Boğaziçi Su Arıtma", "Caso", "Luxor", "Sedona", "Tribest", "HAZARPAZAR", "FONTANA FORNİ",
            "Lisinya", "Fakir", "Element", "Black Decker", "Sage", "Rainbow", "KALE", "Lydsto", "Universal", "Aqua", "KAYAMU",
            "Alaturka", "Çavdar Group", "SEM", "CMT", "SULOOK", "A.O. Smith", "By Kitchen", "Dominox", "DRN", "Fırıncım",
            "HARLEM", "HOOK", "Rosse", "Severin", "sienna", "cantekin", "Şener collection", "EVACOOL", "Golden", "Yerli",
            "BLUE HOUSE", "Philips", "PUNTO", "Xiaomi", "Sgs", "Brita", "Evin", "PlusMed", "Vello", "New Life", "Miniso", "Toshiba",
            "Dualit", "Binbirreyon", "Modex", "Yui", "Amway", "Lider", "Forever", "Aygaz", "Mabel", "Moulinex", "Skytech",
            "Spring Water", "BOSS", "Pratiko", "Sas", "Class", "Titiz", "Beyazsu", "Havana", "Kılıçlar", "Nar", "Marmara", "Egonex",
            "Pars", "DepoMega", "Nilu Moda", "GOLD SRC", "Global", "Quick&Shine", "Smart", "Starmax", "Best", "İnter", "OEM",
            "ASYA BAZAAR", "Reidan", "LİNACELL", "Anadolu Saray Çarşısı", "ENZELO", "Quick", "ROY KING", "Markam Burada", "Limiteds",
            "Sena", "Cetinshop", "LG Chem", "Cuisinart", "Kamardey", "Dysis", "Emex", "ERATEC", "End", "KILINÇ", "onix", "Pulsemed",
            "RUNWAY", "TDS", "UĞUR AVM", "Labella", "Melance", "Besa", "Volkan", "Prestige", "NINJA", "MINIX", "Rubenis", "HOMEND",
            "Orient", "Delta"
        ];

        const query = 'INSERT INTO brands (name) VALUES ?';
        const values = brands.map(brand => [brand]);

        try {
            const [result] = await db.query(query, [values]);
            return res.status(200).json({ message: 'Brands added successfully', result });
        } catch (err) {
            console.error('Error adding brands:', err);
            return res.status(500).json({ error: 'Error adding brands' });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}