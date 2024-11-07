import React, { useState, useEffect } from 'react'
const Filtres = (test) => {
  const categories = [
    'Aspiratör',
    'Ankastre Set',
    'Ocak',
    'Buzdolabı',
    'Fırın',
    'Davlumbaz',
    'Çamaşır Makinesi',
    'Bulaşık Makinesi',
    'Su Sebili',
    'Mikrodalga Fırın',
    'Mini&Midi Fırın',
    'Derin Dondurucu',
    'Kurutma Makinesi',
    'DAHA FAZLA GÖSTER'
  ];
  const [checkedItems, setCheckedItems] = useState({
    "Süper Avantajlı Ürün": false,
    "Çok Avantajlı Ürün": false,
    "Avantajlı Ürün": false,
  });
  const attributes = [
    "Fiyat",
    "Kurulum Gerekli mi?",
    "Maksimum Emiş Gücü",
    "Enerji Sınıfı",
    "Garanti Tipi",
    "Gaz Tipi",
    "Genişlik",
    "Kullanım Şekli",
    "Ocak Tipi",
    "Ocak Yüzeyi",
  ];

  const brands = [
    "Marka", "Marka ara", "Arçelik", "Silverline", "Beko", "VESTEL", "Bosch", "Teka", "Ferre Milano", "Ferre",
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





  const [selectedBrands, setSelectedBrands] = useState([]);

  // Handle checkbox change
  const handleCheckboxChange = (event) => {
    const value = event.target.value;

    // If checked, add to selectedBrands, else remove it
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((brand) => brand !== value)
        : [...prevSelected, value]
    );
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Selected brands:", selectedBrands);
  };

  const handleCheckboxChange1 = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };









  return (
    <div className="show-on-desktop w-full max-w-xs mx-auto" style={{ fontSize: "10px", maxHeight:'100vh',overflowY:"scroll"}}>

      <h2 className="text-xl font-semibold mb-4">İlgili Kategoriler</h2>
      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index} className="text-lg text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-300">
            {category}
          </li>
        ))}
      </ul>
      <div>
        <h1>Select Brands</h1>
        <form style={{ maxWidth: "150px" }} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Choose the brands youre interested in:</legend>

            <div className="brand-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxHeight: "20vh", overflowY: "scroll" }}>
              {brands.map((brand, index) => (
                <label key={index} className="brandsFlex">
                  <input
                  className='brandsFlex'
                    type="checkbox"
                    value={brand}
                    onChange={handleCheckboxChange}
                    checked={selectedBrands.includes(brand)}
                  />
                  {brand}
                </label>
              ))}
            </div>


          </fieldset>
        </form>

        <div>
          <h3>Selected Brands:</h3>
          <ul>
            {selectedBrands.map((brand, index) => (
              <li key={index}>{brand}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-xl font-semibold mb-4">Ürün Listesi</h2>
        <ul className="space-y-2">
          {Object.keys(checkedItems).map((item, index) => (
            <li key={index} className="text-lg text-gray-700">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name={item}
                  checked={checkedItems[item]}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                {item}
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full max-w-xs mx-auto">
        <h2 className="text-xl font-semibold mb-4">Ürün Özellikleri</h2>
        <ul className="space-y-2">
          {attributes.map((attribute, index) => (
            <li
              key={index}
              style={{display:"flex", alignItems:"center", justifyContent:"space-between" }}
              className="text-lg text-gray-700 hover:text-blue-500 cursor-pointer transition-all duration-300"
            >
              <span>{attribute}</span>
              {/* Chevron icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="16"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filtres