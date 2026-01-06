/**
 * Kamusi ya Kiswahili - Word Database
 * Comprehensive word data with translations, etymology, and cultural context
 */

window.WORD_DATABASE = {
    // ========== FAMILY & PEOPLE ==========
    "mama": {
        swahili: "Mama",
        english: "Mother",
        pronunciation: "mah-mah",
        category: "Family & People",
        translations: {
            french: "Mère",
            spanish: "Madre",
            german: "Mutter"
        },
        example: {
            swahili: "Mama yangu ni mwalimu.",
            english: "My mother is a teacher."
        },
        culturalContext: "In Swahili-speaking cultures, 'Mama' extends beyond biological mothers. It's a term of deep respect used for any elder woman, reflecting the African philosophy of communal child-rearing where every woman in the community shares motherly responsibilities.",
        culturalHighlight: "In Tanzania and Kenya, it's common to address older women as 'Mama' followed by their first child's name (teknonymy), e.g., 'Mama Juma' - showing the cultural importance of motherhood.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *màmá, one of the most stable words across Bantu languages. This reflects the universal 'mama' sound found in languages worldwide, believed to come from infant babbling.",
            tree: ["Proto-Bantu *màmá → Early Swahili mama → Modern Kiswahili Mama"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Baba", "Mtoto", "Familia", "Mzazi", "Bibi"]
    },

    "baba": {
        swahili: "Baba",
        english: "Father",
        pronunciation: "bah-bah",
        category: "Family & People",
        translations: {
            french: "Père",
            spanish: "Padre",
            german: "Vater"
        },
        example: {
            swahili: "Baba anafanya kazi.",
            english: "Father is working."
        },
        culturalContext: "The term 'Baba' carries significant weight in East African societies. Fathers are traditionally seen as heads of households and decision-makers. The word is also used as a respectful title for elder men.",
        culturalHighlight: "Tanzania's founding father, Julius Nyerere, was affectionately called 'Baba wa Taifa' (Father of the Nation), demonstrating how this familial term extends to national leadership.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *bàbá, another universal 'baby talk' word that has remained stable across thousands of years of language evolution.",
            tree: ["Proto-Bantu *bàbá → Swahili Baba"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "DRC"],
        relatedWords: ["Mama", "Mtoto", "Familia", "Mzee", "Babu"]
    },

    "mtoto": {
        swahili: "Mtoto",
        english: "Child",
        pronunciation: "m-toh-toh",
        category: "Family & People",
        translations: {
            french: "Enfant",
            spanish: "Niño/Niña",
            german: "Kind"
        },
        example: {
            swahili: "Mtoto anacheza nje.",
            english: "The child is playing outside."
        },
        culturalContext: "Children hold a special place in Swahili culture. The proverb 'Mtoto umleavyo ndivyo akuavyo' (A child grows as you raise them) reflects the emphasis on proper upbringing.",
        culturalHighlight: "In many East African communities, children are considered blessings and communal responsibility - hence the saying 'It takes a village to raise a child' has deep roots here.",
        etymology: {
            origin: "Bantu",
            description: "From the Bantu root '-toto' meaning 'small' or 'young one'. The 'm-' prefix indicates noun class 1 (humans).",
            tree: ["Bantu *-toto (small) → m- (human prefix) + -toto → Mtoto"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Watoto", "Mama", "Baba", "Familia", "Kijana"]
    },

    "familia": {
        swahili: "Familia",
        english: "Family",
        pronunciation: "fah-mee-lee-ah",
        category: "Family & People",
        translations: {
            french: "Famille",
            spanish: "Familia",
            german: "Familie"
        },
        example: {
            swahili: "Familia ni muhimu sana.",
            english: "Family is very important."
        },
        culturalContext: "The concept of 'familia' in Swahili culture extends far beyond the nuclear family. It encompasses extended relatives, clan members, and even close community members, reflecting the Ubuntu philosophy.",
        culturalHighlight: "Family gatherings for weddings, funerals, and holidays often involve hundreds of relatives in Tanzania and Kenya, showcasing the extended family network.",
        etymology: {
            origin: "Latin via Portuguese",
            description: "Borrowed from Portuguese 'família', itself from Latin 'familia'. This reflects the Portuguese presence on the East African coast from the 15th century.",
            tree: ["Latin familia → Portuguese família → Swahili Familia"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Mama", "Baba", "Mtoto", "Ndugu", "Jamaa"]
    },

    // ========== GREETINGS ==========
    "jambo": {
        swahili: "Jambo",
        english: "Hello (to tourists)",
        pronunciation: "jahm-boh",
        category: "Greetings",
        translations: {
            french: "Bonjour",
            spanish: "Hola",
            german: "Hallo"
        },
        example: {
            swahili: "Jambo! Habari gani?",
            english: "Hello! How are you?"
        },
        culturalContext: "Interestingly, 'Jambo' is primarily used with tourists. Native speakers more commonly use 'Habari' or 'Hujambo'. It became popularized through tourism and the famous song 'Jambo Bwana'.",
        culturalHighlight: "The song 'Jambo Bwana' (Hello Sir), with its catchy 'Hakuna Matata' chorus, has become an unofficial anthem for East African tourism.",
        etymology: {
            origin: "Swahili",
            description: "Derived from 'jambo' meaning 'matter' or 'affair'. 'Hujambo?' literally asks 'Do you have any matters/problems?' to which 'Sijambo' (I have no problems) is the response.",
            tree: ["Swahili jambo (matter/affair) → Hujambo? (Any problems?) → Shortened to Jambo (Hello)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda"],
        relatedWords: ["Habari", "Hujambo", "Salamu", "Mambo"]
    },

    "habari": {
        swahili: "Habari",
        english: "News / How are you?",
        pronunciation: "hah-bah-ree",
        category: "Greetings",
        translations: {
            french: "Nouvelles / Comment allez-vous?",
            spanish: "Noticias / ¿Cómo estás?",
            german: "Nachrichten / Wie geht es Ihnen?"
        },
        example: {
            swahili: "Habari za asubuhi?",
            english: "Good morning? (How is the morning?)"
        },
        culturalContext: "Greetings in Swahili culture are extensive and essential. It's considered rude to skip greetings and get straight to business. 'Habari' can be followed by various qualifiers: 'za asubuhi' (of morning), 'za kazi' (of work), 'za nyumbani' (of home).",
        culturalHighlight: "In Tanzania, greeting exchanges can last several minutes, with each person inquiring about family, work, health, and home - reflecting the importance of human connection.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'khabar' (خبر) meaning 'news' or 'information'. This reflects centuries of Arab trade influence on the Swahili coast.",
            tree: ["Arabic khabar (news) → Swahili habari"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "Comoros"],
        relatedWords: ["Jambo", "Salamu", "Hujambo", "Mambo", "Shikamoo"]
    },

    "asante": {
        swahili: "Asante",
        english: "Thank you",
        pronunciation: "ah-sahn-teh",
        category: "Greetings",
        translations: {
            french: "Merci",
            spanish: "Gracias",
            german: "Danke"
        },
        example: {
            swahili: "Asante sana kwa msaada wako.",
            english: "Thank you very much for your help."
        },
        culturalContext: "Gratitude is highly valued in Swahili culture. 'Asante sana' (thank you very much) and 'Ahsante' (variant spelling) are used frequently. The response is often 'Karibu' (you're welcome).",
        culturalHighlight: "In formal situations or when deeply grateful, one might say 'Mungu akubariki' (May God bless you) alongside 'Asante'.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'ahsanta' (أحسنت) meaning 'you have done well'. This word entered Swahili through Islamic influence on the coast.",
            tree: ["Arabic ahsanta (you did well) → Swahili Asante (thank you)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Karibu", "Tafadhali", "Pole", "Samahani"]
    },

    "karibu": {
        swahili: "Karibu",
        english: "Welcome / You're welcome",
        pronunciation: "kah-ree-boo",
        category: "Greetings",
        translations: {
            french: "Bienvenue / De rien",
            spanish: "Bienvenido / De nada",
            german: "Willkommen / Bitte"
        },
        example: {
            swahili: "Karibu nyumbani kwangu!",
            english: "Welcome to my home!"
        },
        culturalContext: "Hospitality is a cornerstone of Swahili culture. 'Karibu' embodies this spirit - guests are treated with utmost respect and offered food and drink. Refusing hospitality can be considered offensive.",
        culturalHighlight: "'Karibu Kenya' and 'Karibu Tanzania' are national tourism slogans, reflecting how central this welcoming spirit is to East African identity.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'qarib' (قريب) meaning 'near' or 'close'. The concept evolved from 'come near' to 'welcome'.",
            tree: ["Arabic qarib (near) → Swahili karibu (come near/welcome)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Asante", "Habari", "Jambo", "Nyumbani"]
    },

    // ========== ANIMALS ==========
    "simba": {
        swahili: "Simba",
        english: "Lion",
        pronunciation: "seem-bah",
        category: "Animals",
        translations: {
            french: "Lion",
            spanish: "León",
            german: "Löwe"
        },
        example: {
            swahili: "Simba ni mfalme wa wanyama.",
            english: "The lion is the king of animals."
        },
        culturalContext: "The lion holds immense cultural significance in East Africa. It represents courage, strength, and royalty. Lions appear on Tanzania's coat of arms and are central to Maasai warrior traditions.",
        culturalHighlight: "Maasai warriors historically proved their bravery through lion hunting with spears. Today, the Maasai are conservation partners protecting lions in the Serengeti ecosystem.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-cìmbá meaning 'lion'. This ancient word has remained remarkably consistent across Bantu languages for thousands of years.",
            tree: ["Proto-Bantu *-cìmbá → Swahili simba"]
        },
        countries: ["Tanzania", "Kenya", "Uganda"],
        relatedWords: ["Tembo", "Twiga", "Kiboko", "Chui", "Nyati"]
    },

    "tembo": {
        swahili: "Tembo",
        english: "Elephant",
        pronunciation: "tem-boh",
        category: "Animals",
        translations: {
            french: "Éléphant",
            spanish: "Elefante",
            german: "Elefant"
        },
        example: {
            swahili: "Tembo ni mnyama mkubwa zaidi Afrika.",
            english: "The elephant is the largest animal in Africa."
        },
        culturalContext: "Elephants are revered in East African cultures for their intelligence and family bonds. They're also economically important - historically for ivory trade (now banned) and today for tourism.",
        culturalHighlight: "The Amboseli elephants in Kenya are among the most studied in the world. Local communities have shifted from viewing elephants as crop raiders to valuable tourism assets.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-tèmbò. The word is related to concepts of 'large' and 'powerful' in various Bantu languages.",
            tree: ["Proto-Bantu *-tèmbò → Swahili tembo"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "DRC"],
        relatedWords: ["Simba", "Twiga", "Kiboko", "Faru", "Nyati"]
    },

    "twiga": {
        swahili: "Twiga",
        english: "Giraffe",
        pronunciation: "twee-gah",
        category: "Animals",
        translations: {
            french: "Girafe",
            spanish: "Jirafa",
            german: "Giraffe"
        },
        example: {
            swahili: "Twiga ana shingo ndefu.",
            english: "The giraffe has a long neck."
        },
        culturalContext: "The giraffe is a symbol of grace and vision in East African folklore. Its ability to see far distances made it a symbol of foresight. Rock paintings of giraffes date back thousands of years in Tanzania.",
        culturalHighlight: "The Maasai giraffe, found only in Tanzania and Kenya, has distinctive irregular spots like oak leaves and is culturally protected by local communities.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu roots, possibly related to words meaning 'tall' or 'stretching'. The word is distinctly East African Bantu.",
            tree: ["Bantu root → Swahili twiga"]
        },
        countries: ["Tanzania", "Kenya", "Uganda"],
        relatedWords: ["Simba", "Tembo", "Punda milia", "Swala", "Nyumbu"]
    },

    // ========== FOOD ==========
    "chakula": {
        swahili: "Chakula",
        english: "Food",
        pronunciation: "chah-koo-lah",
        category: "Food",
        translations: {
            french: "Nourriture",
            spanish: "Comida",
            german: "Essen"
        },
        example: {
            swahili: "Chakula kimekuwa tayari.",
            english: "The food is ready."
        },
        culturalContext: "Food in Swahili culture is deeply communal. Meals are often shared from a common plate, symbolizing unity. Refusing food offered by a host is considered disrespectful.",
        culturalHighlight: "The phrase 'Karibu chakula!' (Welcome to food/Come eat!) exemplifies Swahili hospitality - visitors are always invited to share meals.",
        etymology: {
            origin: "Bantu",
            description: "From the Bantu verb '-kula' (to eat) with the 'cha-' prefix forming a noun. This demonstrates Swahili's agglutinative nature.",
            tree: ["Bantu -kula (to eat) → cha- + -kula → chakula (food/that which is eaten)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Maji", "Ugali", "Wali", "Nyama", "Samaki"]
    },

    "ugali": {
        swahili: "Ugali",
        english: "Cornmeal/Maize porridge",
        pronunciation: "oo-gah-lee",
        category: "Food",
        translations: {
            french: "Pâte de maïs",
            spanish: "Polenta de maíz",
            german: "Maisbrei"
        },
        example: {
            swahili: "Ugali na nyama ni chakula kitamu.",
            english: "Ugali with meat is delicious food."
        },
        culturalContext: "Ugali is THE staple food of East Africa - what rice is to Asia or bread to Europe. Made from maize flour and water, it's eaten with the hands, used to scoop up stews and vegetables.",
        culturalHighlight: "A meal without ugali isn't considered complete by many East Africans. It's so central that during maize shortages, governments face political pressure to ensure supply.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu languages, the word refers to the thick, dough-like consistency of this staple food. Variations exist across Africa: 'nsima' in Malawi, 'sadza' in Zimbabwe.",
            tree: ["Bantu root for 'stiff porridge' → Swahili ugali"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Chakula", "Wali", "Mahindi", "Nyama", "Mboga"]
    },

    "maji": {
        swahili: "Maji",
        english: "Water",
        pronunciation: "mah-jee",
        category: "Food",
        translations: {
            french: "Eau",
            spanish: "Agua",
            german: "Wasser"
        },
        example: {
            swahili: "Ninahitaji maji ya kunywa.",
            english: "I need drinking water."
        },
        culturalContext: "Water is precious in many parts of East Africa. The phrase 'Maji ni uhai' (Water is life) reflects its cultural and practical importance. Water management has been central to Swahili coastal civilization for centuries.",
        culturalHighlight: "Traditional Swahili architecture on Lamu and Zanzibar includes sophisticated rainwater harvesting systems, showing centuries of water conservation wisdom.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *mànjí meaning 'water'. This is one of the most stable and ancient words in Bantu languages.",
            tree: ["Proto-Bantu *mànjí → Swahili maji"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC", "Mozambique"],
        relatedWords: ["Chakula", "Chai", "Kahawa", "Bahari", "Mto"]
    },

    // ========== NATURE ==========
    "bahari": {
        swahili: "Bahari",
        english: "Sea / Ocean",
        pronunciation: "bah-hah-ree",
        category: "Nature",
        translations: {
            french: "Mer / Océan",
            spanish: "Mar / Océano",
            german: "Meer / Ozean"
        },
        example: {
            swahili: "Bahari ya Hindi ni nzuri sana.",
            english: "The Indian Ocean is very beautiful."
        },
        culturalContext: "The Indian Ocean (Bahari ya Hindi) shaped Swahili civilization. For over 1,000 years, the Swahili coast was a hub of international trade connecting Africa, Arabia, Persia, India, and China.",
        culturalHighlight: "Swahili dhow sailors used monsoon winds to navigate the Indian Ocean for centuries. This maritime heritage is celebrated in the annual Lamu Cultural Festival.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'bahr' (بحر) meaning 'sea'. This reflects the profound Arab maritime influence on Swahili culture.",
            tree: ["Arabic bahr (sea) → Swahili bahari"]
        },
        countries: ["Tanzania", "Kenya", "Mozambique", "Comoros"],
        relatedWords: ["Maji", "Pwani", "Mto", "Samaki", "Chombo"]
    },

    "mlima": {
        swahili: "Mlima",
        english: "Mountain",
        pronunciation: "m-lee-mah",
        category: "Nature",
        translations: {
            french: "Montagne",
            spanish: "Montaña",
            german: "Berg"
        },
        example: {
            swahili: "Mlima Kilimanjaro ni mlima mrefu zaidi Afrika.",
            english: "Mount Kilimanjaro is the tallest mountain in Africa."
        },
        culturalContext: "Mountains hold spiritual significance in East Africa. Mount Kilimanjaro, Mount Kenya, and Mount Meru are considered sacred by local communities. The Chagga people live on Kilimanjaro's slopes.",
        culturalHighlight: "Kilimanjaro's snow-capped peak is called 'Kibo' and is sacred to the Chagga people. The mountain appears on Tanzanian currency and is a national symbol.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu roots. The 'm-' prefix indicates noun class 3 (typically trees, plants, and natural features) followed by '-lima' related to cultivation/farming on slopes.",
            tree: ["Bantu m- (noun class) + -lima (cultivated land/slope) → mlima (mountain)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Kilimanjaro", "Bonde", "Mto", "Msitu", "Jangwa"]
    },

    // ========== NUMBERS ==========
    "moja": {
        swahili: "Moja",
        english: "One",
        pronunciation: "moh-jah",
        category: "Numbers",
        translations: {
            french: "Un",
            spanish: "Uno",
            german: "Eins"
        },
        example: {
            swahili: "Nina mtoto moja.",
            english: "I have one child."
        },
        culturalContext: "Numbers in Swahili combine Bantu and Arabic influences. 'Moja' is Bantu-origin, while higher numbers often show Arabic roots. The number one also means 'same' or 'united'.",
        culturalHighlight: "The phrase 'Umoja ni nguvu' (Unity is strength) uses 'moja' to convey the importance of togetherness in Swahili culture. 'Umoja' (unity) comes from 'moja'.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-mòì meaning 'one'. This is the native Bantu numeral that survived Arabic influence on the number system.",
            tree: ["Proto-Bantu *-mòì → Swahili moja"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Mbili", "Tatu", "Nne", "Tano", "Umoja"]
    },

    // ========== COLORS ==========
    "nyeupe": {
        swahili: "Nyeupe",
        english: "White",
        pronunciation: "nyeh-oo-peh",
        category: "Colors",
        translations: {
            french: "Blanc",
            spanish: "Blanco",
            german: "Weiß"
        },
        example: {
            swahili: "Nguo nyeupe ni nzuri.",
            english: "White clothes are beautiful."
        },
        culturalContext: "White holds significant meaning in Swahili culture. It's associated with purity, peace, and spirituality. White kanzu robes are worn for religious occasions and Fridays.",
        culturalHighlight: "During Eid celebrations, Swahili Muslims traditionally wear white kanzu (robes) and kofia (caps), filling the streets of Zanzibar and coastal Kenya with brilliant white.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu roots related to brightness and light. The 'ny-' prefix is common in Swahili adjectives.",
            tree: ["Bantu root for 'bright/light' → nyeupe"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Comoros"],
        relatedWords: ["Nyeusi", "Nyekundu", "Kijani", "Bluu", "Rangi"]
    },

    "nyeusi": {
        swahili: "Nyeusi",
        english: "Black",
        pronunciation: "nyeh-oo-see",
        category: "Colors",
        translations: {
            french: "Noir",
            spanish: "Negro",
            german: "Schwarz"
        },
        example: {
            swahili: "Simba ana manyoya nyeusi.",
            english: "The lion has a black mane."
        },
        culturalContext: "Black in Swahili culture represents dignity, maturity, and the African identity. The Swahili word 'Mweusi' means 'black person' and is used proudly.",
        culturalHighlight: "The phrase 'Afrika Nyeusi' (Black Africa) is used with pride in Pan-African contexts, celebrating African identity and heritage.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu roots. The word is related to concepts of darkness and depth across Bantu languages.",
            tree: ["Bantu root for 'dark/deep' → nyeusi"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Nyeupe", "Nyekundu", "Kijani", "Rangi", "Giza"]
    },

    // ========== VERBS ==========
    "kupenda": {
        swahili: "Kupenda",
        english: "To love / To like",
        pronunciation: "koo-pen-dah",
        category: "Verbs",
        translations: {
            french: "Aimer",
            spanish: "Amar / Gustar",
            german: "Lieben / Mögen"
        },
        example: {
            swahili: "Ninakupenda sana.",
            english: "I love you very much."
        },
        culturalContext: "Love expressions in Swahili culture are often indirect and poetic. 'Nakupenda' (I love you) is powerful but used carefully. Poetry (mashairi) is traditionally used to express romantic feelings.",
        culturalHighlight: "Swahili love poetry (mashairi ya mapenzi) has a rich tradition dating back centuries. Poems are recited at weddings and written in beautiful Arabic-script calligraphy.",
        etymology: {
            origin: "Bantu",
            description: "From Proto-Bantu *-pènd- meaning 'to want' or 'to desire'. The 'ku-' prefix marks the infinitive form of verbs in Swahili.",
            tree: ["Proto-Bantu *-pènd- (to want) → Swahili kupenda (to love/like)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Mapenzi", "Upendo", "Moyo", "Furaha", "Kucheka"]
    },

    "kusoma": {
        swahili: "Kusoma",
        english: "To read / To study",
        pronunciation: "koo-soh-mah",
        category: "Verbs",
        translations: {
            french: "Lire / Étudier",
            spanish: "Leer / Estudiar",
            german: "Lesen / Studieren"
        },
        example: {
            swahili: "Ninapenda kusoma vitabu.",
            english: "I like to read books."
        },
        culturalContext: "Education is highly valued in Swahili culture. The word 'msomi' (educated person) carries prestige. Historically, Quranic schools introduced literacy to the Swahili coast.",
        culturalHighlight: "Swahili is one of the few African languages with a centuries-old written tradition. Manuscripts in Arabic script (Ajami) date back to the 17th century.",
        etymology: {
            origin: "Bantu",
            description: "From Bantu roots. Interestingly, this word originally meant 'to recite' (from Quranic recitation) and evolved to mean 'reading' and 'studying'.",
            tree: ["Bantu root (to recite/chant) → Swahili kusoma (to read/study)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Shule", "Kitabu", "Mwalimu", "Elimu", "Kuandika"]
    },

    // ========== PLACES ==========
    "nyumbani": {
        swahili: "Nyumbani",
        english: "Home / At home",
        pronunciation: "nyoom-bah-nee",
        category: "Places",
        translations: {
            french: "Maison / À la maison",
            spanish: "Casa / En casa",
            german: "Zuhause"
        },
        example: {
            swahili: "Ninaenda nyumbani.",
            english: "I am going home."
        },
        culturalContext: "Home (nyumba) is the center of Swahili life. The phrase 'Nyumba ni nyumba' (Home is home) expresses that however humble, one's home is precious. Extended families often share compounds.",
        culturalHighlight: "Traditional Swahili houses on the coast feature intricate carved doors - each door tells stories through its designs, reflecting the owner's status and heritage.",
        etymology: {
            origin: "Bantu",
            description: "From 'nyumba' (house) with the locative suffix '-ni' indicating 'at' or 'in'. This suffix transforms nouns into locations.",
            tree: ["Bantu nyumba (house) + -ni (locative) → nyumbani (at home)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Nyumba", "Familia", "Mlango", "Chumba", "Ukuta"]
    },

    "shule": {
        swahili: "Shule",
        english: "School",
        pronunciation: "shoo-leh",
        category: "Places",
        translations: {
            french: "École",
            spanish: "Escuela",
            german: "Schule"
        },
        example: {
            swahili: "Watoto wanaenda shule.",
            english: "The children are going to school."
        },
        culturalContext: "Education transformed East Africa in the 20th century. Schools became pathways to opportunity. Tanzania's focus on universal education under Nyerere made Swahili the language of instruction.",
        culturalHighlight: "Tanzania's Education for Self-Reliance policy made Swahili the primary language in schools, ensuring literacy in the national language and strengthening Swahili identity.",
        etymology: {
            origin: "German",
            description: "From German 'Schule' (school), borrowed during German colonial rule of Tanganyika (1885-1919). One of few German loanwords in Swahili.",
            tree: ["German Schule → Swahili shule"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Mwalimu", "Mwanafunzi", "Kusoma", "Darasa", "Elimu"]
    },

    // ========== TIME ==========
    "leo": {
        swahili: "Leo",
        english: "Today",
        pronunciation: "leh-oh",
        category: "Time",
        translations: {
            french: "Aujourd'hui",
            spanish: "Hoy",
            german: "Heute"
        },
        example: {
            swahili: "Leo ni siku nzuri.",
            english: "Today is a good day."
        },
        culturalContext: "Time concepts in Swahili culture traditionally focus on the present and events rather than strict clock time. 'Leo' emphasizes living in the present moment.",
        culturalHighlight: "The Swahili time system traditionally started at sunrise (6 AM = saa moja/hour one), reflecting a connection to natural rhythms rather than midnight.",
        etymology: {
            origin: "Bantu",
            description: "From Proto-Bantu, this word has remained stable across the Bantu language family for thousands of years.",
            tree: ["Proto-Bantu *-déò → Swahili leo"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Kesho", "Jana", "Sasa", "Wakati", "Siku"]
    },

    "kesho": {
        swahili: "Kesho",
        english: "Tomorrow",
        pronunciation: "keh-shoh",
        category: "Time",
        translations: {
            french: "Demain",
            spanish: "Mañana",
            german: "Morgen"
        },
        example: {
            swahili: "Tutaonana kesho.",
            english: "We will see each other tomorrow."
        },
        culturalContext: "The Swahili approach to future time is often flexible - 'kesho' can sometimes mean 'soon' rather than literally tomorrow. This reflects a cultural emphasis on relationships over rigid scheduling.",
        culturalHighlight: "The phrase 'Kesho kutwa' (day after tomorrow) shows how Swahili precisely names future days, with 'mtondo' meaning three days from now.",
        etymology: {
            origin: "Bantu",
            description: "From Proto-Bantu roots meaning 'the next day'. This is a stable word found across many Bantu languages.",
            tree: ["Proto-Bantu *-kéco → Swahili kesho"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Leo", "Jana", "Siku", "Wakati", "Asubuhi"]
    },

    // ========== BODY ==========
    "moyo": {
        swahili: "Moyo",
        english: "Heart",
        pronunciation: "moh-yoh",
        category: "Body",
        translations: {
            french: "Cœur",
            spanish: "Corazón",
            german: "Herz"
        },
        example: {
            swahili: "Una moyo mzuri.",
            english: "You have a good heart."
        },
        culturalContext: "The heart in Swahili culture is the seat of emotions, courage, and character. 'Moyo wangu' (my heart) is used in poetry and songs to express deep feelings.",
        culturalHighlight: "Taarab music from Zanzibar is famous for poetic lyrics about the heart - songs like 'Moyo Wangu' explore love, longing, and heartbreak in beautiful Swahili poetry.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-gìmà or related roots meaning 'heart'. The word carries both physical and emotional meanings.",
            tree: ["Proto-Bantu *-gìmà (heart) → Swahili moyo"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Upendo", "Mapenzi", "Huzuni", "Furaha", "Roho"]
    },

    // ========== PROFESSIONS ==========
    "mwalimu": {
        swahili: "Mwalimu",
        english: "Teacher",
        pronunciation: "mwah-lee-moo",
        category: "Professions",
        translations: {
            french: "Professeur / Enseignant",
            spanish: "Maestro / Profesor",
            german: "Lehrer"
        },
        example: {
            swahili: "Mwalimu anafundisha watoto.",
            english: "The teacher is teaching children."
        },
        culturalContext: "Teachers hold high respect in Swahili society. The title 'Mwalimu' is also used as an honorific for learned people. Tanzania's Julius Nyerere was called 'Mwalimu' for his role as a teacher and nation-builder.",
        culturalHighlight: "Julius Nyerere, Tanzania's founding father, was a former teacher and is still lovingly called 'Mwalimu Nyerere' - demonstrating how the teaching profession commands national respect.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'muʿallim' (معلم) meaning 'teacher' or 'one who knows'. The prefix 'mw-' adapts it to Swahili noun classes.",
            tree: ["Arabic muʿallim (teacher) → Swahili mwalimu"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Shule", "Kusoma", "Mwanafunzi", "Elimu", "Darasa"]
    },

    "daktari": {
        swahili: "Daktari",
        english: "Doctor",
        pronunciation: "dahk-tah-ree",
        category: "Professions",
        translations: {
            french: "Médecin / Docteur",
            spanish: "Doctor / Médico",
            german: "Arzt / Doktor"
        },
        example: {
            swahili: "Daktari anamsaidia mgonjwa.",
            english: "The doctor is helping the patient."
        },
        culturalContext: "Modern medicine coexists with traditional healing in East Africa. 'Daktari' refers to Western-trained doctors, while 'mganga' refers to traditional healers. Both are respected in their contexts.",
        culturalHighlight: "The TV show 'Daktari' (1966-1969) about an American doctor in East Africa helped popularize this Swahili word internationally.",
        etymology: {
            origin: "English via Hindi",
            description: "From English 'doctor', likely via Hindi 'daktar'. This reflects the British colonial influence and Indian presence in East Africa.",
            tree: ["Latin doctor → English doctor → Hindi daktar → Swahili daktari"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda"],
        relatedWords: ["Hospitali", "Mgonjwa", "Dawa", "Afya", "Mganga"]
    },

    // ========== EMOTIONS ==========
    "furaha": {
        swahili: "Furaha",
        english: "Happiness / Joy",
        pronunciation: "foo-rah-hah",
        category: "Emotions",
        translations: {
            french: "Bonheur / Joie",
            spanish: "Felicidad / Alegría",
            german: "Glück / Freude"
        },
        example: {
            swahili: "Nina furaha kubwa leo.",
            english: "I have great happiness today."
        },
        culturalContext: "Expressing joy is important in Swahili culture. Celebrations involve music, dance, and community. 'Furaha' is often the goal of communal gatherings.",
        culturalHighlight: "Weddings in Swahili culture can last a week with multiple celebrations. The phrase 'Furaha ya harusi' (wedding joy) captures these extensive festivities.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'farḥa' (فرحة) meaning 'joy' or 'happiness'. This emotional vocabulary reflects deep Arab cultural influence.",
            tree: ["Arabic farḥa (joy) → Swahili furaha"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "Comoros"],
        relatedWords: ["Huzuni", "Mapenzi", "Moyo", "Sherehe", "Kucheka"]
    },

    "upendo": {
        swahili: "Upendo",
        english: "Love (noun)",
        pronunciation: "oo-pen-doh",
        category: "Emotions",
        translations: {
            french: "Amour",
            spanish: "Amor",
            german: "Liebe"
        },
        example: {
            swahili: "Upendo ni muhimu katika familia.",
            english: "Love is important in a family."
        },
        culturalContext: "Love in Swahili culture encompasses romantic love, familial love, and love for community. The concept is central to 'ujamaa' (familyhood) philosophy promoted in Tanzania.",
        culturalHighlight: "Julius Nyerere's philosophy of Ujamaa (African socialism) was built on the concepts of upendo (love), umoja (unity), and ushirikiano (cooperation).",
        etymology: {
            origin: "Bantu",
            description: "Noun form derived from 'kupenda' (to love) using the 'u-' prefix for abstract nouns in Swahili.",
            tree: ["Bantu -penda (to love) → u- + -pendo → upendo (love)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Kupenda", "Mapenzi", "Moyo", "Furaha", "Familia"]
    },

    // ========== WEATHER ==========
    "mvua": {
        swahili: "Mvua",
        english: "Rain",
        pronunciation: "m-voo-ah",
        category: "Weather",
        translations: {
            french: "Pluie",
            spanish: "Lluvia",
            german: "Regen"
        },
        example: {
            swahili: "Mvua inanyesha.",
            english: "It is raining."
        },
        culturalContext: "Rain is celebrated in East Africa as it brings life to crops. The rainy seasons (masika and vuli) structure agricultural life. Rain dances and prayers are part of traditional culture.",
        culturalHighlight: "The 'long rains' (masika) from March-May and 'short rains' (vuli) from October-December define agricultural cycles and even school calendars in East Africa.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-bùdà meaning 'rain'. This essential agricultural word has remained stable across Bantu languages.",
            tree: ["Proto-Bantu *-bùdà → Swahili mvua"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Jua", "Upepo", "Mawingu", "Theluji", "Hali ya hewa"]
    },

    "jua": {
        swahili: "Jua",
        english: "Sun",
        pronunciation: "joo-ah",
        category: "Weather",
        translations: {
            french: "Soleil",
            spanish: "Sol",
            german: "Sonne"
        },
        example: {
            swahili: "Jua linawaka sana leo.",
            english: "The sun is very bright today."
        },
        culturalContext: "The sun is central to life near the equator where East Africa lies. 'Jua kali' (fierce sun) also refers to the informal sector where workers toil under the hot sun.",
        culturalHighlight: "The 'Jua Kali' sector in Kenya refers to informal craftspeople and artisans who work outdoors - metalworkers, carpenters, and mechanics who are vital to the economy.",
        etymology: {
            origin: "Proto-Bantu",
            description: "From Proto-Bantu *-jùbá meaning 'sun'. The word is also used metaphorically to mean 'to know' (kujua).",
            tree: ["Proto-Bantu *-jùbá (sun/day) → Swahili jua"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Mvua", "Mwanga", "Mchana", "Joto", "Hali ya hewa"]
    },

    // ========== PROVERBS/IDIOMS WORDS ==========
    "haraka": {
        swahili: "Haraka",
        english: "Haste / Hurry",
        pronunciation: "hah-rah-kah",
        category: "Common Words",
        translations: {
            french: "Hâte / Empressement",
            spanish: "Prisa",
            german: "Eile / Hast"
        },
        example: {
            swahili: "Haraka haraka haina baraka.",
            english: "Hurry hurry has no blessing (Haste makes waste)."
        },
        culturalContext: "This word appears in one of the most famous Swahili proverbs: 'Haraka haraka haina baraka' - emphasizing that patience leads to better outcomes. This reflects the cultural value of taking time to do things properly.",
        culturalHighlight: "The proverb 'Haraka haraka haina baraka' is known across East Africa and often quoted to counsel patience in business and personal matters.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'haraka' (حركة) meaning 'movement' or 'motion'. The word took on connotations of rushed movement in Swahili.",
            tree: ["Arabic haraka (movement) → Swahili haraka (haste/hurry)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Pole pole", "Subira", "Wakati", "Baraka", "Safari"]
    },

    "safari": {
        swahili: "Safari",
        english: "Journey / Trip",
        pronunciation: "sah-fah-ree",
        category: "Travel",
        translations: {
            french: "Voyage / Safari",
            spanish: "Viaje / Safari",
            german: "Reise / Safari"
        },
        example: {
            swahili: "Safari njema!",
            english: "Have a good journey!"
        },
        culturalContext: "Originally meaning any journey, 'safari' became internationally famous through wildlife tourism. The farewell 'Safari njema!' is the standard Swahili send-off for travelers.",
        culturalHighlight: "Swahili 'safari' has become a global word. The Serengeti and Maasai Mara safaris attract millions of tourists annually, making this one of Swahili's greatest contributions to world vocabulary.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'safar' (سفر) meaning 'journey' or 'travel'. This reflects the historical trading journeys along the Swahili coast and into the interior.",
            tree: ["Arabic safar (travel/journey) → Swahili safari"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda"],
        relatedWords: ["Kusafiri", "Njia", "Gari", "Ndege", "Meli"]
    },

    // ========== MORE ESSENTIAL WORDS ==========
    "rafiki": {
        swahili: "Rafiki",
        english: "Friend",
        pronunciation: "rah-fee-kee",
        category: "Family & People",
        translations: {
            french: "Ami(e)",
            spanish: "Amigo/Amiga",
            german: "Freund/Freundin"
        },
        example: {
            swahili: "Yeye ni rafiki yangu wa zamani.",
            english: "He/She is my old friend."
        },
        culturalContext: "Friendship is highly valued in Swahili culture. The proverb 'Rafiki wa karibu ni bora kuliko ndugu wa mbali' (A close friend is better than a distant relative) shows how friendships can be as strong as family bonds.",
        culturalHighlight: "The character Rafiki in Disney's 'The Lion King' brought this Swahili word to global audiences. His name perfectly fits his role as a wise friend and advisor.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'rafīq' (رفيق) meaning 'companion' or 'friend'. This word entered Swahili through centuries of Arab-African interaction on the coast.",
            tree: ["Arabic rafīq (companion) → Swahili rafiki (friend)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Urafiki", "Ndugu", "Jirani", "Familia", "Upendo"]
    },

    "hakuna matata": {
        swahili: "Hakuna Matata",
        english: "No worries / No problems",
        pronunciation: "hah-koo-nah mah-tah-tah",
        category: "Phrases",
        translations: {
            french: "Pas de soucis",
            spanish: "Sin preocupaciones",
            german: "Keine Sorgen"
        },
        example: {
            swahili: "Hakuna matata, tutasaidiana.",
            english: "No worries, we will help each other."
        },
        culturalContext: "While made famous by 'The Lion King', this phrase is genuinely used in East Africa to express a carefree, optimistic attitude. It embodies the Swahili approach to life's challenges.",
        culturalHighlight: "Before Disney, the phrase appeared in the 1982 Kenyan song 'Jambo Bwana' by Them Mushrooms. The Lion King made it one of the most recognized Swahili phrases worldwide.",
        etymology: {
            origin: "Swahili",
            description: "'Hakuna' means 'there is not' (ha- negative + -kuna 'to be there') and 'matata' means 'problems' (from Arabic). Together: 'there are no problems'.",
            tree: ["Swahili ha- (negative) + kuna (there is) + Arabic mataʿ (trouble) → Hakuna matata"]
        },
        countries: ["Tanzania", "Kenya", "Uganda"],
        relatedWords: ["Jambo", "Pole pole", "Hamna shida", "Sawa", "Nzuri"]
    },

    "pole pole": {
        swahili: "Pole pole",
        english: "Slowly / Gently / Take it easy",
        pronunciation: "poh-leh poh-leh",
        category: "Phrases",
        translations: {
            french: "Doucement",
            spanish: "Despacio",
            german: "Langsam"
        },
        example: {
            swahili: "Panda mlima pole pole.",
            english: "Climb the mountain slowly."
        },
        culturalContext: "This phrase encapsulates the Swahili approach to life - patience over haste. It's especially famous among Kilimanjaro climbers, as guides constantly remind hikers to go 'pole pole' to acclimatize.",
        culturalHighlight: "On Mount Kilimanjaro, 'pole pole' is the most important phrase climbers learn. Guides repeat it constantly - those who rush often fail to summit due to altitude sickness.",
        etymology: {
            origin: "Bantu",
            description: "'Pole' means 'sorry', 'gently', or 'slowly'. Repetition in Swahili intensifies meaning, so 'pole pole' emphasizes taking things very slowly and carefully.",
            tree: ["Bantu root (soft/gentle) → Swahili pole → pole pole (very slowly)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda"],
        relatedWords: ["Haraka", "Subira", "Kilimanjaro", "Safari", "Kupanda"]
    },

    "kilimanjaro": {
        swahili: "Kilimanjaro",
        english: "Mount Kilimanjaro",
        pronunciation: "kee-lee-mahn-jah-roh",
        category: "Geography",
        translations: {
            french: "Kilimandjaro",
            spanish: "Kilimanjaro",
            german: "Kilimandscharo"
        },
        example: {
            swahili: "Kilimanjaro ni mlima mrefu zaidi Afrika.",
            english: "Kilimanjaro is the tallest mountain in Africa."
        },
        culturalContext: "At 5,895 meters, Kilimanjaro is Africa's highest peak and a UNESCO World Heritage Site. It's sacred to the Chagga people who live on its slopes and is Tanzania's most iconic landmark.",
        culturalHighlight: "The snows of Kilimanjaro, immortalized by Hemingway, are sadly retreating due to climate change. Scientists estimate the glaciers may disappear within decades.",
        etymology: {
            origin: "Disputed",
            description: "The name's origin is debated. Theories include: Swahili 'kilima' (hill) + Chagga 'njaro' (whiteness), or from a Maasai phrase meaning 'mountain of caravans', or 'that which cannot be conquered'.",
            tree: ["Possibly: kilima (mountain) + njaro (whiteness) → 'white mountain'", "Or: Maasai 'ngàje ngài' (house of god) → adapted to Kilimanjaro"]
        },
        countries: ["Tanzania"],
        relatedWords: ["Mlima", "Pole pole", "Theluji", "Tanzania", "Afrika"]
    },

    "zanzibar": {
        swahili: "Zanzibar",
        english: "Zanzibar (Island/Archipelago)",
        pronunciation: "zahn-zee-bahr",
        category: "Geography",
        translations: {
            french: "Zanzibar",
            spanish: "Zanzíbar",
            german: "Sansibar"
        },
        example: {
            swahili: "Zanzibar ni kisiwa kizuri sana.",
            english: "Zanzibar is a very beautiful island."
        },
        culturalContext: "Zanzibar is the heart of Swahili civilization. For over a millennium, it was a crossroads of African, Arab, Persian, and Indian Ocean cultures. Its Stone Town is a UNESCO World Heritage Site.",
        culturalHighlight: "Zanzibar was historically the world's largest clove producer and a major slave trade center. Today, its spice tours and beaches attract tourists, while its history makes it culturally significant.",
        etymology: {
            origin: "Persian",
            description: "From Persian 'Zangi-bar' meaning 'coast of the blacks' (from 'zang' = black + 'bar' = coast/shore). The name reflects ancient Persian trade connections.",
            tree: ["Persian zang (black) + bar (coast) → Zangibar → Zanzibar"]
        },
        countries: ["Tanzania"],
        relatedWords: ["Kisiwa", "Bahari", "Pwani", "Stone Town", "Viungo"]
    },

    "uhuru": {
        swahili: "Uhuru",
        english: "Freedom / Independence",
        pronunciation: "oo-hoo-roo",
        category: "Abstract Concepts",
        translations: {
            french: "Liberté / Indépendance",
            spanish: "Libertad / Independencia",
            german: "Freiheit / Unabhängigkeit"
        },
        example: {
            swahili: "Uhuru ni haki ya binadamu.",
            english: "Freedom is a human right."
        },
        culturalContext: "Uhuru was the rallying cry of East African independence movements. Kenya's main peak is named 'Uhuru Peak' and the word appears in the names of streets, stadiums, and monuments across the region.",
        culturalHighlight: "Uhuru Peak (5,895m) atop Kilimanjaro was renamed from 'Kaiser Wilhelm Spitze' at Tanzanian independence in 1961, symbolizing the continent's liberation from colonialism.",
        etymology: {
            origin: "Bantu",
            description: "From the Bantu root '-huru' meaning 'free'. The 'u-' prefix creates an abstract noun. This word became a powerful symbol across Africa during decolonization.",
            tree: ["Bantu -huru (free) → u- + -huru → uhuru (freedom)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Huru", "Amani", "Umoja", "Kenya", "Tanzania"]
    },

    "amani": {
        swahili: "Amani",
        english: "Peace",
        pronunciation: "ah-mah-nee",
        category: "Abstract Concepts",
        translations: {
            french: "Paix",
            spanish: "Paz",
            german: "Frieden"
        },
        example: {
            swahili: "Tunataka amani duniani.",
            english: "We want peace in the world."
        },
        culturalContext: "Peace is a core Swahili value. Tanzania has remained one of Africa's most peaceful countries since independence. The greeting 'Salaam' (peace) reflects the importance of peaceful relations.",
        culturalHighlight: "Wangari Maathai, the Kenyan Nobel Peace Prize winner, founded the Green Belt Movement with roots in the concept of 'amani' - peace with nature and community.",
        etymology: {
            origin: "Arabic",
            description: "From Arabic 'amān' (أمان) meaning 'safety' or 'peace'. This reflects Islamic influence on Swahili culture, where peace is a central value.",
            tree: ["Arabic amān (safety/peace) → Swahili amani (peace)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi", "DRC"],
        relatedWords: ["Uhuru", "Umoja", "Salaam", "Upendo", "Haki"]
    },

    "umoja": {
        swahili: "Umoja",
        english: "Unity",
        pronunciation: "oo-moh-jah",
        category: "Abstract Concepts",
        translations: {
            french: "Unité",
            spanish: "Unidad",
            german: "Einheit"
        },
        example: {
            swahili: "Umoja ni nguvu.",
            english: "Unity is strength."
        },
        culturalContext: "Umoja is one of the seven principles of Kwanzaa and a fundamental Swahili value. The phrase 'Umoja ni nguvu, utengano ni udhaifu' (Unity is strength, division is weakness) guides community life.",
        culturalHighlight: "Tanzania's official motto is 'Uhuru na Umoja' (Freedom and Unity), reflecting how central this concept is to national identity. The nation united over 120 ethnic groups peacefully.",
        etymology: {
            origin: "Bantu",
            description: "Derived from 'moja' (one) with the abstract noun prefix 'u-'. The word literally means 'oneness' or 'state of being one'.",
            tree: ["Bantu moja (one) → u- + -moja → umoja (unity/oneness)"]
        },
        countries: ["Tanzania", "Kenya", "Uganda", "Rwanda", "Burundi"],
        relatedWords: ["Moja", "Amani", "Uhuru", "Ujamaa", "Nguvu"]
    }
};

// Add lowercase versions for lookup
(function() {
    const db = window.WORD_DATABASE;
    const keys = Object.keys(db);
    keys.forEach(key => {
        const lowerKey = key.toLowerCase();
        if (lowerKey !== key && !db[lowerKey]) {
            db[lowerKey] = db[key];
        }
    });
})();
