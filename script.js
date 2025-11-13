// --- CONFIGURATION ---
const GOOGLE_FORM_ID = "19wlX1vInZ-U6K2_Jf1t8cFWoO3D_IdJtANJ1XX8nCOo"; 
const ENTRY_NAME_ID  = "entry.885732134";
const ENTRY_TIME_ID  = "entry.1464689501";
const ENTRY_SCHOOL_ID  = "entry.1063482082";
// ---------------------------------------------------------------------

const CORRECT_SOLVE_PHRASE = "DATA SCIENCE DID THAT";

// --- DUAL LANGUAGE TEXT CONTENT ---
const textContent = {
    en: {
        header_title: "DATA IN ACTION ESCAPE ROOM CHALLENGE",
        welcome_h2: "Welcome Prep-KC!",
        welcome_p: "Enter your name and school to begin the challenge.",
        name_placeholder: "Enter Your Name",
        school_placeholder: "Enter Your School Name",
        button_text: "Start Challenge",
        instructions_list: `
            <li>Your team must solve a series of data challenges to collect 9 letter clues.</li>
            <li>If you answer a question incorrectly, the quiz will provide an alternative question covering the same data principle. You must correctly answer the question to advance and unlock the clue.</li>
            <li>You will use the collected clues to solve the final hidden phrase.</li>
            <li>The team with the fastest time wins!</li>
            <li>The timer starts as soon as you click **Start Challenge**.</li>
        `,
        challenge_title: "Challenge #",
        alert_name: "Please enter both your name and school name to start the challenge.",
        feedback_correct: "Correct! You earned the clue letter '",
        feedback_incorrect_loop: "Incorrect. You've reviewed all alternative questions. Looping back to the original question. Keep trying!",
        feedback_incorrect: "Incorrect answer. Review the concept and try the next alternative question!",
        solve_title: "🔑 Final Phrase Puzzle",
        solve_instructions: "Locate the **picture board** in your escape room that shows all the pets from the PETS_TABLE. Use the **golden coin letters** found in your room to solve the pictogram for the hidden phrase. Solve the puzzle and enter the phrase to stop the timer!", // <-- MODIFIED LINE
        report_h2: "🏆 Challenge Complete!",
        report_submit: "✅ Click Here to Submit Results and Finish",
        report_sending: "Your official time and name are being sent to the master list."
    },
    es: {
        header_title: "DESAFÍO DE ESCAPE ROOM DE DATOS EN ACCIÓN",
        welcome_h2: "¡Bienvenido/a Prep-KC!",
        welcome_p: "Introduce tu nombre y escuela para comenzar el desafío.",
        name_placeholder: "Introduce tu Nombre",
        school_placeholder: "Introduce el Nombre de tu Escuela",
        button_text: "Iniciar Desafío",
        instructions_list: `
            <li>Tu equipo debe resolver una serie de desafíos de datos para recolectar 9 pistas de letras.</li>
            <li>Si respondes incorrectamente, la prueba proporcionará una pregunta alternativa sobre el mismo principio de datos. Debes responder correctamente para avanzar y desbloquear la pista.</li>
            <li>Usarás las pistas recolectadas para resolver la frase final oculta.</li>
            <li>¡El equipo con el tiempo más rápido gana!</li>
            <li>El cronómetro comienza tan pronto como hagas clic en **Iniciar Desafío**.</li>
        `,
        challenge_title: "Desafío #",
        alert_name: "Por favor, introduce tu nombre y el nombre de tu escuela para comenzar el desafío.",
        feedback_correct: "¡Correcto! Ganaste la pista de letra '",
        feedback_incorrect_loop: "Incorrecto. Has revisado todas las preguntas alternativas. Volviendo a la pregunta original. ¡Sigue intentándolo!",
        feedback_incorrect: "Respuesta incorrecta. Revisa el concepto e intenta la siguiente pregunta alternativa.",
        solve_title: "🔑 Puzle de la Frase Final",
        solve_instructions: "Localiza el **tablero de imágenes** en tu sala de escape que muestra todas las mascotas de la tabla PETS_TABLE. Usa las **letras de las monedas doradas** encontradas en tu sala para resolver el pictograma y encontrar la frase oculta. ¡Resuelve el puzle e introduce la frase para detener el cronómetro!", // <-- MODIFIED LINE
        report_h2: "🏆 ¡Desafío Completado!",
        report_submit: "✅ Haz clic aquí para enviar los resultados y finalizar",
        report_sending: "Tu tiempo oficial y nombre están siendo enviados a la lista principal."
    }
};
// --- END DUAL LANGUAGE TEXT CONTENT ---


// --- QUIZ DATA STRUCTURES ---
const quizDataEn = {
    1: {
        principle: "Data Filtering & Identification (Dog List)",
        clue: { pet: "Charlie", letter: "S" },
        questions: [
            // Primary Question
            {
                question: "Using the available pet images and data table, which of the selections is a list of the dogs from the PETS_TABLE?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Ted, Barb, Charlie, Fluffers",
                    B: "Charlie, Ted, Shea, Karma, Felix, Lucky",
                    C: "Charlie, Gus, Felix, Ted, Lucky",
                    D: "Gus, Ted, Charlie, Barb, Shea, Lucky"
                },
                correctOption: "D"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: Which list correctly identifies the PET IDs 001, 003, and 009?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Charlie, Ted, Opal",
                    B: "Gus, Karma, Felix",
                    C: "Shea, Fluffers, Lucky"
                },
                correctOption: "A"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: If the PETS_TABLE was filtered to only show cats, which pets would be listed?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Fluffers, Felix, Lucky, Opal",
                    B: "Karma, Fluffers, Felix, Opal",
                    C: "Charlie, Fluffers"
                },
                correctOption: "B"
            }
        ],
        currentQIndex: 0
    },
    2: {
        principle: "Data Quality/Error Detection (Species Mismatch)",
        clue: { pet: "Gus", letter: "C" },
        questions: [
            // Primary Question
            {
                question: "It’s raining cats and dogs out here and something doesn't add up! Using the images as your source of truth, click on the record in the Pets Species Table with the data error to unlock your next clue!",
                mediaFile: "Challenge 2.png",
                options: {
                    A: "001, Charlie, Dog",
                    B: "002, Gus, Dog",
                    C: "003, Ted, Dog",
                    D: "004, Karma, Dog",
                    E: "005, Barb, Dog",
                    F: "006, Shea, Dog",
                    G: "007, Fluffers, Cat",
                    H: "008, Felix, Cat",
                    I: "009, Opal, Cat",
                    J: "010, Lucky, Dog"
                },
                correctOption: "D"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: The PETS SPECIES TABLE claims to have 7 dogs. What PET ID/PET NAME pair is the error if the total dog count should only be 6?",
                mediaFile: "Challenge 2.png",
                options: {
                     A: "001, Charlie, Dog",
                    B: "002, Gus, Dog",
                    C: "003, Ted, Dog",
                    D: "004, Karma, Dog",
                    E: "005, Barb, Dog",
                    F: "006, Shea, Dog",
                    G: "007, Fluffers, Cat",
                    H: "008, Felix, Cat",
                    I: "009, Opal, Cat",
                    J: "010, Lucky, Dog"
                },
                correctOption: "D"
            }
        ],
        currentQIndex: 0
    },
    3: {
        principle: "Data Lookups and Attribute Matching (Diet Recommendation)",
        clue: { pet: "Ted", letter: "I" },
        questions: [
            // Primary Question
            {
                question: "With all these cats and dogs, there is a lot of fur flying around and Opal is having some problems with hairball control! Using the pets diets table, what diet would you recommend for Opal?",
                mediaFile: "Challenge 3.png",
                options: {
                    A: "1001", B: "9876", C: "1020", D: "1999", E: "2002", F: "1946", G: "2324", H: "1234", I: "1927", J: "1984"
                },
                correctOption: "C"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: Which SKU ID is a DRY diet for a Dog with dental/oral care needs?",
                mediaFile: "Challenge 3.png",
                options: {
                     A: "1001", B: "9876", C: "1020", D: "1999", E: "2002", F: "1946"
                },
                correctOption: "E"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: Which SKU is a Prescription Diet (k/d) for a dog?",
                mediaFile: "Challenge 3.png",
                options: {
                    A: "SKU 1999",
                    B: "SKU 1020",
                    C: "SKU 1234"
                },
                correctOption: "C"
            }
        ],
        currentQIndex: 0
    },
    4: {
        principle: "Data Aggregation and Comparison (Total Inclusion)",
        clue: { pet: "Fluffers", letter: "E" },
        questions: [
            // Primary Question
            {
                question: "Charlie has been having dry itchy skin. Charlie's vet told his owner that he needs to eat a diet high in vitamins. Which diet would you recommend Charlie eat based on total vitamin content?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "1001",
                    B: "1946"
                },
                correctOption: "A"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: Which SKU has a higher percentage of 'Flax Grain'?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "1001",
                    B: "1946"
                },
                correctOption: "A"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: What is the combined total percentage of 'Beet Fiber' and 'Flavor' in SKU 1946?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "6.6%",
                    B: "3.60%",
                    C: "2.87%"
                },
                correctOption: "A"
            }
        ],
        currentQIndex: 0
    },
    5: {
        principle: "SQL WHERE Clause Error (Data Entry Inconsistency)",
        clue: { pet: "Opal", letter: "D" },
        questions: [
            // Primary Question
            {
                question: "Oh no! Your query only returns 5 dogs but we expected 6 dogs! Select the specific record from the PET_INFO_TABLE that is causing one of our dogs to be excluded from your query results!",
                mediaFile: "Challenge 5.png",
                options: {
                       A: "001, Charlie, Dog",
                    B: "002, Gus, Dog",
                    C: "003, Ted, Dog",
                    D: "004, Karma, Dog",
                    E: "005, Barb, Dogg",
                    F: "006, Shea, Dog",
                    G: "007, Fluffers, Cat",
                    H: "008, Felix, Cat",
                    I: "009, Opal, Cat",
                    J: "010, Lucky, Dog"
                },
                correctOption: "E"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: If the SQL WHERE clause was changed to look for the letters '%Dogg%' in the PET_NAME PET_SPECIES column, which pet would be found?",
                mediaFile: "Challenge 5.png",
                options: {
                    A: "Gus",
                    B: "Barb",
                    C: "Karma",
                    D: "Shea"
                },
                correctOption: "B"
            },

            {
                question: "Alternative Q2: If you were to select DISTINCT PET_SPECIES, which fields would be returned?",
                mediaFile: "Challenge 5.png",
                options: {
                    A: "Dog, Cat",
                    B: "Dogg, Cat",
                    C: "Cat, Dogg, Dog",
                    D: "Dogg, Dog"
                },
                correctOption: "C"
            }
        ],
        currentQIndex: 0
    },
    6: {
        principle: "Multi-Criteria Filtering/Decision Making (Speed & Capacity)",
        clue: { pet: "Felix", letter: "T" },
        questions: [
            // Primary Question
            {
                question: "Oh no! Gus is feeling under the weather and has just had a visit to his vet who recommended that he eat a prescription diet for the next few weeks until he starts feeling better. The vet recommended diet comes in 35 pound bags and is out of stock at the vet clinic. We want to ship this product to the vet's office so that Gus has it as quickly as possible. What shipping method do you recommend based on the data in the table TRANSIT TIMES?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air",
                    B: "UPS",
                    C: "DHL",
                    D: "USPS",
                    E: "Ryder", 
                    F: "FedEx"
                },
                correctOption: "B"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: If the bag was only 4 pounds, which carrier would be the fastest available option?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air",
                    B: "UPS",
                    C: "DHL",
                    D: "USPS",
                    E: "Ryder", 
                    F: "FedEx"
                },
                correctOption: "A"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: If the item was 200 Lbs and transit time wasn't the top priority, which two carriers could handle the shipment?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air and USPS",
                    B: "DHL and Ryder",
                    C: "FedEx and UPS"
                },
                correctOption: "B"
            }
        ],
        currentQIndex: 0
    },
    7: {
        principle: "Data Visualization Interpretation (Bar Chart Reading)",
        clue: { pet: "Lucky", letter: "A" }, // Clue is A, and Lucky is on the final board.
        questions: [
            // Primary Question
            {
                question: "You have been asked to report on which cat diet has the highest production volume in pounds produced for the Prescription Diet (PD) brand. Using the chart, determine the correct PD diet to unlock your next clue!",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "PD c/d",
                    B: "PD k/d",
                    C: "PD Metabolic",
                    D: "PD i/d",
                    E: "SD Adult", F: "SD Stomach", G: "SD SmallPaw", H: "PD Derm", I: "SD Uriwell", J: "SD Indoor", K: "SD Mobility", L: "SD PrWeight", M: "PD GiBiome", N: "PD j/d", O: "PD w/d", P: "PD z/d"              
                },
                correctOption: "A"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: Which diet has the highest production volume for dogs?",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "PD c/d",
                    B: "PD k/d",
                    C: "PD Metabolic",
                    D: "PD i/d",
                    E: "SD Adult", F: "SD Stomach", G: "SD SmallPaw", H: "PD Derm", I: "SD Uriwell", J: "SD Indoor", K: "SD Mobility", L: "SD PrWeight", M: "PD GiBiome", N: "PD j/d", O: "PD w/d", P: "PD z/d"              
                },
                correctOption: "E"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: Which diet is only produced for cats?",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "SD Indoor, SD Uriwell, PD i/d",
                    B: "SD Smallpaw, SD Indoor",
                    C: "PD w/d",
                    D: "SD Indoor, SD Uriwell"
                },
                correctOption: "D"
            }
        ],
        currentQIndex: 0
    },
    8: {
        principle: "Data Visualization Mapping (Line Chart to Table)",
        clue: { pet: "Karma", letter: "H" }, // Clue is H, and Karma is on the final board.
        questions: [
            // Primary Question
            {
                question: "The U.S. manufacturing facilities closely monitor their material losses during production and they report this as a percentage. Using the table as your source of truth, select the chart that corresponds to the data in the table.",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "C8_CHART1.png",
                    B: "C8_CHART2.png",
                    C: "C8_CHART3.png",
                    D: "C8_CHART4.png"
                },
                correctOption: "A"
            },
            // Remedial Question 1
            {
                question: "Alternative Q1: Which plant has the highest loss percentage?",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "Topeka",
                    B: "Bowling Green",
                    C: "Tonganoxie",
                    D: "Richmond",
                    E: "Emporia"
                    
                },
                correctOption: "C"
            },
            // Remedial Question 2
            {
                question: "Alternative Q2: Which plant had the lowest processing loss in the year 2023?",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "Topeka",
                    B: "Bowling Green",
                    C: "Tonganoxie",
                    D: "Richmond",
                    E: "Emporia"
                },
                correctOption: "E"
            }
        ],
        currentQIndex: 0
    },
    9: {
        principle: "Data Visualization Mapping (Pie Chart to Table/Percent)",
        clue: { pet: "Barb", letter: "N" },
        questions: [
            // Primary Question (Index 0)
            {
                question: "Select the Pie Chart that accurately reflects the % of Pounds by Brand, Form, and Species to unlock your clue! NOTE: Brands = SD, PD, Forms = Wet, Dry, Treat, Species = Cat, Dog",
                mediaFile: "Challenge 9.png", 
                options: {
                    A: "C9_CHART1.png",
                    B: "C9_CHART2.png", // Correct Answer
                    C: "C9_CHART3.png",
                    D: "C9_CHART4.png"
                },
                correctOption: "B"
            },
            // Remedial Question 1 (Index 1: Original Alternative Q2)
            {
                question: "Alternative Q1: Which chart shows pounds by form? Forms = Wet, Dry, Treat",
                mediaFile: "Challenge 9.png",
                options: {
                    A: "C9_CHART1.png",
                    B: "C9_CHART2.png",
                    C: "C9_CHART3.png", // Correct Answer
                    D: "C9_CHART4.png"
                },
                correctOption: "C"
            },
            // Remedial Question 2 (Index 2: Original Alternative Q1)
            {
                question: "Alternative Q2: Based on Chart 1, what is the total percentage of SD Diets (Chart 1)?",
                mediaFile: "Challenge 9.png",
                options: {
                    A: "69.9%", // Correct Answer (50.4 + 11.7 + 7.7)
                    B: "30.1%",
                    C: "81.8%"
                },
                correctOption: "A"
            },
          
        ],
        currentQIndex: 0
    }
    // IMPORTANT: Ensure there is NO comma after this final closing curly brace '}'
    // if this is truly the last entry in the entire quizData object.
};


const quizDataEs = {
    1: {
        principle: "Filtrado e Identificación de Datos (Lista de Perros)",
        clue: { pet: "Charlie", letter: "S" },
        questions: [
            {
                question: "Utilizando los datos de la tabla PETS_TABLE, ¿cuál de las opciones de abajo es una lista de perros?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Ted, Barb, Charlie, Fluffers",
                    B: "Charlie, Ted, Shea, Karma, Felix, Lucky",
                    C: "Charlie, Gus, Felix, Ted, Lucky",
                    D: "Gus, Ted, Charlie, Barb, Shea, Lucky"
                },
                correctOption: "D"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué lista identifica correctamente los ID de mascotas 001, 003 y 009?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Charlie, Ted, Opal",
                    B: "Gus, Karma, Felix",
                    C: "Shea, Fluffers, Lucky"
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 2: Si la tabla PETS_TABLE se filtrara para mostrar solo gatos, ¿qué mascotas se listarían?",
                mediaFile: "Challenge 1.png",
                options: {
                    A: "Fluffers, Felix, Lucky, Opal",
                    B: "Karma, Fluffers, Felix, Opal",
                    C: "Charlie, Fluffers"
                },
                correctOption: "B"
            }
        ],
        currentQIndex: 0
    },
    2: {
        principle: "Calidad de Datos / Detección de Errores (Especies)",
        clue: { pet: "Gus", letter: "C" },
        questions: [
            {
                question: "¡Aquí llueve a cántaros y algo no cuadra! Utilizando las imágenes como fuente de información veraz, haz clic en el registro de la tabla de especies de mascotas que contiene el error de datos para desbloquear tu siguiente pista.",
                mediaFile: "Challenge 2.png",
                options: {
                    A: "001, Charlie, Dog/Perro",
                    B: "002, Gus, Dog/Perro",
                    C: "003, Ted, Dog/Perro",
                    D: "004, Karma, Dog/Perro",
                    E: "005, Barb, Dog/Perro",
                    F: "006, Shea, Dog/Perro",
                    G: "007, Fluffers, Cat/Gato",
                    H: "008, Felix, Cat/Gato",
                    I: "009, Opal, Cat/Gato",
                    J: "010, Lucky, Dog/Perro"
                },
                correctOption: "D"
            },
            {
                question: "Pregunta Alternativa 1: La tabla afirma tener 7 perros. ¿Qué par ID/Nombre es el error si el recuento total de perros debería ser solo 6?",
                mediaFile: "Challenge 2.png",
                options: {
                     A: "001, Charlie, Dog/Perro",
                    B: "002, Gus, Dog/Perro",
                    C: "003, Ted, Dog/Perro",
                    D: "004, Karma, Dog/Perro",
                    E: "005, Barb, Dog/Perro",
                    F: "006, Shea, Dog/Perro",
                    G: "007, Fluffers, Cat/Gato",
                    H: "008, Felix, Cat/Gato",
                    I: "009, Opal, Cat/Gato",
                    J: "010, Lucky, Dog/Perro"
                },
                correctOption: "D"
            }
        ],
        currentQIndex: 0
    },
    3: {
        principle: "Búsquedas de Datos y Coincidencia de Atributos (Recomendación de Dieta)",
        clue: { pet: "Ted", letter: "I" },
        questions: [
            {
                question: "¡Con tantos gatos y perros, hay un montón de pelo volando por todas partes y Opal está teniendo algunos problemas para controlar las bolas de pelo! Utilizando la tabla de dietas para mascotas, ¿qué dieta recomendarías para Opal?",
                mediaFile: "Challenge 3.png",
                options: {
                    A: "1001", B: "9876", C: "1020", D: "1999", E: "2002", F: "1946", G: "2324", H: "1234", I: "1927", J: "1984"
                },
                correctOption: "C"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué ID de SKU es una dieta SECA para un Dog/Perro con necesidades de cuidado dental/oral?",
                mediaFile: "Challenge 3.png",
                options: {
                     A: "1001", B: "9876", C: "1020", D: "1999", E: "2002", F: "1946"
                },
                correctOption: "E"
            },
            {
                question: "Pregunta Alternativa 2: ¿Qué SKU es una Dieta de Prescripción (k/d) para un Dog/Perro?",
                mediaFile: "Challenge 3.png",
                options: {
                    A: "SKU 1999",
                    B: "SKU 1020",
                    C: "SKU 1234"
                },
                correctOption: "C"
            }
        ],
        currentQIndex: 0
    },
    4: {
        principle: "Agregación y Comparación de Datos (Inclusión Total)",
        clue: { pet: "Fluffers", letter: "E" },
        questions: [
            {
                question: "Charlie tiene la piel seca y le pica. El veterinario de Charlie recomendó una dieta rica en vitaminas. ¿Qué dieta le recomendarías a Charlie en función de su contenido total de vitaminas?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "1001",
                    B: "1946"
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué SKU tiene un porcentaje más alto de 'Grano de Lino'?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "1001",
                    B: "1946"
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 2: ¿Cuál es el porcentaje total combinado de 'Fibra de Remolacha' y 'Sabor' en SKU 1946?",
                mediaFile: "Challenge 4.png",
                options: {
                    A: "6.6%",
                    B: "3.60%",
                    C: "2.87%"
                },
                correctOption: "A"
            }
        ],
        currentQIndex: 0
    },
    5: {
        principle: "Error de Cláusula SQL WHERE (Inconsistencia de Entrada de Datos)",
        clue: { pet: "Opal", letter: "D" },
        questions: [
            {
                question: "¡Oh, no! ¡Su consulta solo devuelve 5 perros, pero esperábamos 6! Seleccione el registro específico de la tabla PET_INFO_TABLE que está causando que uno de nuestros perros sea excluido de los resultados de su consulta.",
                mediaFile: "Challenge 5.png",
                options: {
                       A: "001, Charlie, Dog/Perro",
                    B: "002, Gus, Dog/Perro",
                    C: "003, Ted, Dog/Perro",
                    D: "004, Karma, Dog/Perro",
                    E: "005, Barb, Dogg/Perro",
                    F: "006, Shea, Dog/Perro",
                    G: "007, Fluffers, Cat/Gato",
                    H: "008, Felix, Cat/Gato",
                    I: "009, Opal, Cat/Gato",
                    J: "010, Lucky, Dog/Perro"
                },
                correctOption: "E"
            },
            {
                question: "Pregunta Alternativa 1: Si la cláusula SQL WHERE se cambiara para buscar las letras '%Dogg%' en la columna PET_NAME PET_SPECIES, ¿qué mascota se encontraría?",
                mediaFile: "Challenge 5.png",
                options: {
                    A: "Gus",
                    B: "Barb",
                    C: "Karma"
                },
                correctOption: "B"
            },
            {
                question: "Pregunta Alternativa 2: Si seleccionaras DISTINCT PET_SPECIES, ¿qué campos se devolverían?",
                mediaFile: "Challenge 5.png",
                options: {
                    A: "Dog/Perro, Cat/Gato",
                    B: "Dogg/Perro, Cat/Gato",
                    C: "Cat/Gato, Dogg/Perro, Dog/Perro", // Correct Answer: All three unique entries in the flawed table
                    D: "Dogg/Perro, Dog/Perro"
                },
                correctOption: "C"
            }
        ],
        currentQIndex: 0
    },
    6: {
        principle: "Filtrado Multicriterio / Toma de Decisiones (Velocidad y Capacidad)",
        clue: { pet: "Felix", letter: "T" },
        questions: [
            {
                question: "¡Oh, no! Gus se siente mal y acaba de ir al veterinario, quien le recomendó una dieta especial durante las próximas semanas hasta que mejore. La dieta viene en sacos de 35 libras y está agotada en la clínica veterinaria. Queremos enviar este producto a la clínica veterinaria para que Gus lo tenga lo antes posible. ¿Qué método de envío recomienda según los datos de la tabla TRANSIT TIMES?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air",
                    B: "UPS",
                    C: "DHL",
                    D: "USPS",
                    E: "Ryder", 
                    F: "FedEx"
                },
                correctOption: "B"
            },
            {
                question: "Pregunta Alternativa 1: Si el saco fuera de solo 4 libras, ¿qué transportista sería la opción más rápida disponible?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air",
                    B: "UPS",
                    C: "DHL",
                    D: "USPS",
                    E: "Ryder", 
                    F: "FedEx"
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 2: Si el artículo fuera de 200 libras y el tiempo de tránsito no fuera la principal prioridad, ¿qué dos transportistas podrían manejar el envío?",
                mediaFile: "Challenge 6.png",
                options: {
                    A: "FedEx Air y USPS",
                    B: "DHL y Ryder",
                    C: "FedEx y UPS"
                },
                correctOption: "B"
            }
        ],
        currentQIndex: 0
    },
    7: {
        principle: "Interpretación de Visualización de Datos (Lectura de Gráfico de Barras)",
        clue: { pet: "Lucky", letter: "A" }, 
        questions: [
            {
                question: "Se te ha pedido que informes sobre qué alimento para Cat/Gato de la marca Prescription Diet (PD) tiene el mayor volumen de producción en libras. ¡Utiliza la gráfica para determinar el alimento PD correcto y desbloquear la siguiente pista!",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "PD c/d",
                    B: "PD k/d",
                    C: "PD Metabolic",
                    D: "PD i/d",
                    E: "SD Adult", F: "SD Stomach", G: "SD SmallPaw", H: "PD Derm", I: "SD Uriwell", J: "SD Indoor", K: "SD Mobility", L: "SD PrWeight", M: "PD GiBiome", N: "PD j/d", O: "PD w/d", P: "PD z/d"              
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué dieta tiene el mayor volumen de producción para Dog/Perros?",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "PD c/d",
                    B: "PD k/d",
                    C: "PD Metabolic",
                    D: "PD i/d",
                    E: "SD Adult", F: "SD Stomach", G: "SD SmallPaw", H: "PD Derm", I: "SD Uriwell", J: "SD Indoor", K: "SD Mobility", L: "SD PrWeight", M: "PD GiBiome", N: "PD j/d", O: "PD w/d", P: "PD z/d"              
                },
                correctOption: "E"
            },
            {
                question: "Pregunta Alternativa 2: ¿Qué dieta se produce solo para Cat/Gatos?",
                mediaFile: "Challenge 7.png",
                options: {
                    A: "SD Indoor, SD Uriwell, PD i/d",
                    B: "SD Smallpaw, SD Indoor",
                    C: "PD w/d",
                    D: "SD Indoor, SD Uriwell"
                },
                correctOption: "D"
            }
        ],
        currentQIndex: 0
    },
    8: {
        principle: "Mapeo de Visualización de Datos (Gráfico de Líneas a Tabla)",
        clue: { pet: "Karma", letter: "H" }, 
        questions: [
            {
                question: "Las plantas de fabricación estadounidenses controlan rigurosamente las pérdidas de materiales durante la producción y las reportan como un porcentaje. Utilizando la tabla como referencia, seleccione el gráfico que corresponde a los datos de la tabla.",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "C8_CHART1.png",
                    B: "C8_CHART2.png",
                    C: "C8_CHART3.png",
                    D: "C8_CHART4.png"
                },
                correctOption: "A"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué planta tiene el mayor porcentaje de pérdidas?",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "Topeka",
                    B: "Bowling Green",
                    C: "Tonganoxie",
                    D: "Richmond",
                    E: "Emporia"
                    
                },
                correctOption: "C"
            },
            {
                question: "Pregunta Alternativa 2: ¿Qué planta tuvo la menor pérdida de procesamiento en el año 2023?",
                mediaFile: "Challenge 8.png",
                options: {
                    A: "Topeka",
                    B: "Bowling Green",
                    C: "Tonganoxie",
                    D: "Richmond",
                    E: "Emporia"
                },
                correctOption: "E"
            }
        ],
        currentQIndex: 0
    },
    9: {
        principle: "Mapeo de Visualización de Datos (Gráfico Circular a Tabla/Porcentaje)",
        clue: { pet: "Barb", letter: "N" },
        questions: [
            {
                question: "¡Selecciona el gráfico de pastel circular que refleje con precisión el % de libras por marca, formato y especie para desbloquear tu pista! NOTA: Marcas = SD, PD, Formatos = Húmedo, Seco, Golosinas, Especies = Cat/Gato, Dog/Perro",
                mediaFile: "Challenge 9.png", 
                           options: {
                    A: "C9_CHART1.png",
                    B: "C9_CHART2.png",
                    C: "C9_CHART3.png",
                    D: "C9_CHART4.png"
                },
                correctOption: "B"
            },
            {
                question: "Pregunta Alternativa 1: ¿Qué gráfico muestra libras por formato? Formatos = Húmedo, Seco, Golosinas",
                mediaFile: "Challenge 9.png",
                options: {
                    A: "C9_CHART1.png",
                    B: "C9_CHART2.png",
                    C: "C9_CHART3.png",
                    D: "C9_CHART4.png"
                },
                correctOption: "C"
            },
            {
                question: "Pregunta Alternativa 2: Basado en el Gráfico 1, ¿cuál es el porcentaje total de Dietas SD (Gráfico 1)?",
                mediaFile: "Challenge 9.png",
                options: {
                    A: "69.9%",
                    B: "30.1%",
                    C: "81.8%"
                },
                correctOption: "A"
            },
          
        ],
        currentQIndex: 0
    }
}; // END quizDataEs


// --- GLOBAL VARIABLES (UPDATED) ---
let studentName = "";
let schoolName = ""; 
let currentChallenge = 1;
let startTime = 0;
let timerInterval = null;
const collectedClues = {};

// CRITICAL: We determine the quiz data set here after language selection
let currentQuizData = quizDataEn; // Default to English data structure
let totalChallenges = Object.keys(quizDataEn).length; // Default count


// --- TIMER FUNCTIONS (Unchanged) ---
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimer() {
    const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('timer-display').textContent = `Time: ${formatTime(elapsedSeconds)}`;
}


// --- NEW LANGUAGE SELECTION FLOW ---

/**
 * Handles the initial language selection, loads data, and sets up the Welcome Screen.
 */

function selectLanguage() {
    const languageSelector = document.getElementById('quiz-language');
    currentLanguage = languageSelector.value;
    
    // 1. Set the core quiz data and total challenges
    currentQuizData = quizDataEn;
    totalChallenges = Object.keys(currentQuizData).length; 
    const lang = textContent[currentLanguage];

    // --- Conditional Instruction Block ---
    let instructionsHTML;

    if (currentLanguage === 'es') {
        // Spanish Selected: Show Spanish first, then English translation.
        instructionsHTML = `
            <h3>📝 Instructions / Instrucciones:</h3>
            <div class="instruction-columns">
                
                <div class="instruction-column spanish-text">
                    <h4>(Español)</h4>
                    <ul>${textContent.es.instructions_list}</ul>
                </div>
                
                <div class="instruction-column english-text">
                    <h4>(English)</h4>
                    <ul>${textContent.en.instructions_list}</ul>
                </div>
            </div>
        `;
    } else {
        // English Selected: Show ONLY English instructions
        instructionsHTML = `
            <h3>📝 Instructions:</h3>
            <ul id="instructions-list">${textContent.en.instructions_list}</ul>
        `;
    }
    // ------------------------------------

    // 2. Inject content into the start screen
    const startScreen = document.getElementById('start-screen');
    startScreen.innerHTML = `
        <img src="Welcome.png" alt="Welcome Logo" class="welcome-image">
        <h2 id="welcome-h2">${lang.welcome_h2}</h2>
        <p id="welcome-p">${lang.welcome_p}</p>
        
        <hr>
        
        ${instructionsHTML}
        
        <hr>

        <input type="text" id="student-name" placeholder="${lang.name_placeholder}" required>
        <input type="text" id="school-name" placeholder="${lang.school_placeholder}" required>
        
        <button onclick="startQuiz()" id="start-btn">${lang.button_text}</button>
    `;

    // 3. Transition
    document.getElementById('language-select-screen').classList.add('hidden');
    document.getElementById('main-content-wrapper').classList.remove('hidden');
}

// --- QUIZ FLOW FUNCTIONS (MODIFIED FOR DYNAMIC TEXT/DATA) ---

function startQuiz() {
    studentName = document.getElementById('student-name').value.trim();
    schoolName = document.getElementById('school-name').value.trim();
    const lang = textContent[currentLanguage];

    if (!studentName || !schoolName) { 
        alert(lang.alert_name); // Use translated alert text
        return;
    }

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('quiz-screen').classList.remove('hidden');

    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000);

    loadChallenge(currentChallenge);
    updateCoinDisplay();
}



/**
 * Loads the question, options, and media. Displays questions based on the 
 * selected language: English only, or Spanish AND English (split-screen).
 */
/**
 * Loads the question, options, and media. Displays questions based on the 
 * selected language: English only, or Spanish AND English combined.
 * CRITICAL FIX: Ensures media files are suffixed with _es.png for Spanish.
 */
/**
 * Loads the question, options, and media. Displays questions based on the 
 * selected language: English only, or Spanish AND English (split-screen).
 * CRITICAL FIX: Ensures media files are displayed BEFORE the question text.
 */
function loadChallenge(challengeNum) {
    // Get English and Spanish data for the current challenge
    const challengeDataEn = quizDataEn[challengeNum];
    const challengeDataEs = quizDataEs[challengeNum];
    
    // Determine the question index and data for the current attempt
    const questionIndex = challengeDataEn.currentQIndex;
    const dataEn = challengeDataEn.questions[questionIndex];
    const dataEs = challengeDataEs.questions[questionIndex]; 
    
    const lang = textContent[currentLanguage]; 
    
    const mediaContainer = document.getElementById('question-media-container');
    const optionsContainer = document.getElementById('options-container');
    const questionTextElement = document.getElementById('question-text'); // Get the question text element

    optionsContainer.innerHTML = '';
    mediaContainer.innerHTML = '';
    questionTextElement.innerHTML = '';

    // Error check for missing data
    if (!dataEn || !dataEs) {
        challengeDataEn.currentQIndex = 0; 
        challengeDataEs.currentQIndex = 0; 
        loadChallenge(challengeNum);
        return;
    }

    // --- 1. Set Challenge Title (Interface Language) ---
    document.getElementById('challenge-title').textContent = `${lang.challenge_title}${challengeNum} (Attempt ${questionIndex + 1})`;
    
    // --- 2. Media Injection Logic (NEW STEP 2) ---
    // This runs BEFORE the question text injection.
    if (dataEn.mediaFile) {
        let mediaFile = dataEn.mediaFile;
        
        // If Spanish is selected, append the '_es' suffix to the filename
        if (currentLanguage === 'es') {
            mediaFile = mediaFile.replace('.png', '_es.png');
        }
        
        mediaContainer.innerHTML = `<img src="${mediaFile}" alt="Challenge Data Visual" style="max-width: 100%; height: auto; margin-bottom: 15px; border: 1px solid #ccc;">`;
    }
    
    // --- 3. Inject Question Text (NEW STEP 3, after media) ---
    if (currentLanguage === 'es') {
        // Spanish Selected: Show Spanish question first, followed by English.
        questionTextElement.innerHTML = `
            <div class="dual-language-question">
                <p class="spanish-text"><strong>(Español)</strong> ${dataEs.question}</p>
                <p class="english-text"><strong>(English)</strong> ${dataEn.question}</p>
            </div>
        `;
    } else {
        // English Selected: Show ONLY English question.
        questionTextElement.innerHTML = `<p>${dataEn.question}</p>`;
    }

    document.getElementById('feedback-text').textContent = '';
    document.getElementById('submit-btn').disabled = false;

    // --- 4. Options Loop (Unchanged, remains last) ---
    
    // Select the options object based on the current interface language
    const optionsToDisplay = (currentLanguage === 'es') ? quizDataEs[challengeNum].questions[questionIndex].options : dataEn.options;

    for (const [key, value] of Object.entries(optionsToDisplay)) {
        let displayContent = value;

        // Handle Image Answers (Applies the same _es.png logic if Spanish is selected)
        if (typeof value === 'string' && value.toLowerCase().match(/\.(png|jpg|jpeg|gif)$/)) {
             if (currentLanguage === 'es') {
                displayContent = value.replace('.png', '_es.png');
            } else {
                displayContent = value;
            }
            displayContent = `<img src="${displayContent}" alt="Option ${key}" class="answer-image" style="max-width: 90%; height: auto; margin-top: 5px;">`;
        }

        const optionHTML = `
            <label class="option-label">
                <input type="radio" name="challenge${challengeNum}" value="${key}">
                <span class="option-key">${key}:</span> ${displayContent}
            </label>
        `;
        optionsContainer.innerHTML += optionHTML;
    }
}


function submitAnswer() {
    const challengeData = currentQuizData[currentChallenge];
    const questionIndex = challengeData.currentQIndex;
    const currentQData = challengeData.questions[questionIndex];
    const totalRemedialQuestions = challengeData.questions.length;
    const lang = textContent[currentLanguage];

    const selectedOption = document.querySelector(`input[name="challenge${currentChallenge}"]:checked`);
    const feedbackText = document.getElementById('feedback-text');
    
    if (!selectedOption) {
        alert(lang.alert_name); // Use translated alert text
        return;
    }

    if (selectedOption.value === currentQData.correctOption) {
        // --- CORRECT ANSWER LOGIC ---
        feedbackText.textContent = `${lang.feedback_correct}${challengeData.clue.letter}'.`;
        feedbackText.classList.add('correct');
        
        // Collect the clue and update the visual coin display
        collectedClues[challengeData.clue.pet] = challengeData.clue.letter;
        document.getElementById('submit-btn').disabled = true;
        updateCoinDisplay(); // Update the coin counter visualization

        // Reset index for next challenge
        challengeData.currentQIndex = 0; 
        
        setTimeout(() => {
            currentChallenge++;
            if (currentChallenge <= totalChallenges) {
                loadChallenge(currentChallenge);
            } else {
                // All challenges complete: Go to the final solve screen
                loadSolveScreen(); 
            }
        }, 2000);

    } else {
        // --- INCORRECT ANSWER LOGIC ---
        
        // Advance the question index to the next remedial question
        challengeData.currentQIndex++;

        // Check if the new index is out of bounds (loop back to 0)
        if (challengeData.currentQIndex >= totalRemedialQuestions) {
            challengeData.currentQIndex = 0;
            feedbackText.textContent = lang.feedback_incorrect_loop; // Use translated text (e.g., "Looping back to the original question")
        } else {
            feedbackText.textContent = lang.feedback_incorrect; // Use translated text (e.g., "Try the next alternative question")
        }
        
        feedbackText.classList.remove('correct');
        
        // Load the next question (either remedial or the primary one again)
        setTimeout(() => {
            loadChallenge(currentChallenge);
        }, 1000);
    }
}


/**
 * Loads the final solve puzzle screen, displaying the instructions, the CLUES.png
 * image map, and the solve.png image (without overlays).
 */
function loadSolveScreen() {
    // Hide the quiz screen and show the solver screen
    document.getElementById('quiz-screen').classList.add('hidden');
    document.getElementById('solve-screen').classList.remove('hidden');

    const solveContainer = document.getElementById('final-solve-board');
    const lang = textContent[currentLanguage];

    // Set translated title and instructions
    document.getElementById('solve-title').textContent = lang.solve_title;
    document.getElementById('solve-instructions').textContent = lang.solve_instructions;
    
    // --- Determine Media Paths ---
    let clueMapImage = 'CLUES.png';
    let solveBoardImage = 'solve.png';

    // If Spanish is selected, append the '_es' suffix to the images
    if (currentLanguage === 'es') {
        clueMapImage = 'CLUES_es.png';
        solveBoardImage = 'solve_es.png';
    }

    // --- Clear and Build the Content for the Solve Board ---
    // Inject the CLUES image (the pet-to-letter map) and the final puzzle board (solve.png).
    solveContainer.innerHTML = `
        <div class="final-clue-images">
            <h4>Clue Letter Map:</h4>
            
            <img src="${clueMapImage}" alt="Pet to Letter Clue Map" class="clue-map-image">

            <img src="${solveBoardImage}" alt="Final Escape Room Puzzle Board" class="solve-board">
        </div>
    `;
    
    // Ensure the input field placeholder is accurate and translated
    document.getElementById('final-phrase-input').placeholder = `Type the 18-letter solved phrase here (${CORRECT_SOLVE_PHRASE})!`;
}


function checkFinalAnswer() {
    const userInput = document.getElementById('final-phrase-input').value.toUpperCase().trim().replace(/\s/g, '');
    const solvedPhrase = CORRECT_SOLVE_PHRASE.toUpperCase().trim().replace(/\s/g, ''); 
    
    const feedback = document.getElementById('solve-feedback');
    const lang = textContent[currentLanguage];

    if (userInput === solvedPhrase) {
        clearInterval(timerInterval);
        feedback.textContent = `SUCCESS! '${CORRECT_SOLVE_PHRASE}' is correct. The escape is complete!`;
        feedback.classList.add('correct');
        document.getElementById('solve-btn').disabled = true;

        setTimeout(() => {
            showReport();
        }, 1500);

    } else {
        feedback.textContent = lang.feedback_incorrect; 
        feedback.classList.remove('correct');
    }
}


function showReport() {
    const endTime = Date.now();
    const durationSeconds = Math.floor((endTime - startTime) / 1000);
    const timeTaken = formatTime(durationSeconds);
    const lang = textContent[currentLanguage];

    document.getElementById('solve-screen').classList.add('hidden');
    document.getElementById('report-screen').classList.remove('hidden');

    // Set translated report title
    document.getElementById('report-title').textContent = lang.report_h2;

    // --- Clue Collection and Arrangement Logic ---
    const finalBoardPets = ["Charlie", "Ted", "Opal", "Gus", "Lucky", "Fluffers", "Barb", "Karma", "Felix"];
    let finalPhrase = "";
    
    for (const pet of finalBoardPets) {
        finalPhrase += collectedClues[pet] || "_";
    }

    // --- CONFIGURE GOOGLE FORM SUBMISSION LINK ---
    const submissionURL = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`;
    const formData = new URLSearchParams();
    
    formData.append(ENTRY_NAME_ID, studentName);
    formData.append(ENTRY_SCHOOL_ID, schoolName);
    formData.append(ENTRY_TIME_ID, timeTaken);
    
    const finalSubmissionLink = `${submissionURL}?${formData.toString()}`;
    // ---------------------------------------------

    
    // --- Generate Report HTML ---
    const reportContent = `
        <h3>${lang.report_h2}</h3>
        <p><strong>Student:</strong> ${studentName}</p>
        <p><strong>School:</strong> ${schoolName}</p>
        <p><strong>Time Taken:</strong> ${timeTaken}</p>
        <p><strong>Challenges Completed:</strong> ${totalChallenges} / ${totalChallenges}</p>
        
        <h4>🔑 Final Escape Phrase</h4>
        <p style="text-align: center; font-size: 1.5em; font-weight: bold;">
            ${CORRECT_SOLVE_PHRASE}
        </p>

        <a href="${finalSubmissionLink}" target="_blank" class="submit-button" 
           style="display: block; text-align: center; margin-top: 20px; padding: 10px; background-color: #009933; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;"
           onclick="this.textContent='Submitting... Please Wait'; setTimeout(() => this.style.display='none', 1000)">
            ${lang.report_submit}
        </a>
        
        <p style="text-align: center; margin-top: 30px; font-size: 0.9em; color: #555;">
            (${lang.report_sending})
        </p>
    `;

    document.getElementById('report-content').innerHTML = reportContent;
}

// Attach event listeners when the window loads
window.onload = function() {
    // Only show the language selector initially
    document.getElementById('language-select-screen').classList.remove('hidden');
}
/**
 * Dynamically updates the visual coin display based on collected clues.
 */
function updateCoinDisplay() {
    const coinContainer = document.getElementById('clue-coin-display');
    if (!coinContainer) return;

    const collectedCount = Object.keys(collectedClues).length;
    let coinHTML = '';
    
    // Define the image for a collected coin (assuming you have a coin.png image)
    const coinImage = 'coin.png'; 
    const emptySlotImage = 'empty_coin_slot.png'; // Optional: Use a placeholder for unmet challenges

    for (let i = 0; i < totalChallenges; i++) {
        if (i < collectedCount) {
            // Display a collected coin
            coinHTML += `<img src="${coinImage}" alt="Clue Coin ${i + 1}" class="clue-coin collected-coin">`;
        } else {
            // Display an empty slot
            coinHTML += `<img src="${emptySlotImage}" alt="Empty Slot ${i + 1}" class="clue-coin empty-slot">`;
        }
    }
    
    coinContainer.innerHTML = `<h4>Clues Collected: ${collectedCount} / ${totalChallenges}</h4>` + coinHTML;
};