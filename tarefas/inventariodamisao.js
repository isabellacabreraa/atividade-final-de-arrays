let inventarioAlpha = [
    ["Cristal Rubion", "Plutão", 4500],
    ["Cápsula de Éter", "Júpiter", 7800],
    ["Nanofibra Luminosa", "Saturno", 12000],
    ["Minério Dourado", "Marte", 8500],
    ["Flor de Andrômeda", "Andrômeda", 13000],
    ["Ampulheta Galáctica", "Vênus", 2200],
    ["Fóssil Estelar", "Lua", 9000],
    ["Orbe do Caos", "Netuno", 9100],
    ["Lente do Vazio", "Buraco Negro X-1", 14300],
    ["Chave de Fóton", "Sol", 2300],
    ["Esfera Sombria", "Nêmesis", 13400],
    ["Granada de Íons", "Marte", 4100],
    ["Tecido Estelar", "Urano", 5300],
    ["Engrenagem Sombria", "Plutão", 6600],
    ["Fragmento Prismático", "Kepler-22b", 6400],
    ["Núcleo de Plasma", "Kepler-452b", 9100],
    ["Anel de Chronos", "Terra", 4900],
    ["Bateria Quântica", "Terra", 4000],
    ["Areia do Tempo", "Terra", 3100],
    ["Escudo de Luz", "Vênus", 4700],
    ["Catalisador Estelar", "Sirius", 12500],
    ["Pó de Cometa", "Netuno", 3000],
    ["Relógio Quântico", "Terra", 5000],
    ["Vórtice Gravitacional", "Saturno", 8800],
    ["Cristal Ômega", "Andrômeda", 13900],
    ["Cristal Ômega", "Andrômeda", 13900]
  ];
  
  let inventarioBeta = [
    ["Lâmina Solar", "Mercúrio", 6700],
    ["Cometa Engarrafado", "Netuno", 7600],
    ["Relíquia de Zordon", "Elysium", 25000],
    ["Pó Lunar", "Lua", 2900],
    ["Nevoeiro Encapsulado", "Júpiter", 3800],
    ["Chip de Matéria", "Ceres", 4100],
    ["Chave de Portais", "Júpiter", 5900],
    ["Globo de Plasma", "Terra", 7200],
    ["Mapa Estelar", "Vênus", 2100],
    ["Pedra Temporal", "Lua", 7800],
    ["Lanterna Estelar", "Sol", 3200],
    ["Fragmento de Eclipse", "Eclipse E-9", 8300],
    ["Ponte de Gelo", "Hoth", 3900],
    ["Fluido de Saturno", "Saturno", 4400],
    ["Fenda de Tempo", "Marte", 8700],
    ["Condutor Fotônico", "Sol", 3600],
    ["Memória Galáctica", "Terra", 5500],
    ["Livro de Nebulosa", "Andrômeda", 9200],
    ["Túnel Quântico", "Netuno", 4100],
    ["Canhão de Luz", "Vênus", 6800],
    ["Orbe Incandescente", "Sol", 9300],
    ["Matriz de Propulsão", "Vênus", 4500],
    ["Partícula Livre", "Urano", 5400],
    ["Capa de Invisibilidade", "Terra", 3900],
    ["Terminal de Dobra", "Alpha Centauri", 10500]
  ];
  
  //Atividade 01: Remova o elemento duplicado no final do inventário Alpha 

console.log("Inventário Alpha:");
console.table(inventarioAlpha);

let removeUltimoElemento = inventarioAlpha.pop();
console.log("Inventário alterado:");
console.table(inventarioAlpha);

 //Atividade 02: Remove o artefato do final do inventário Beta 

 console.log("Inventário Beta:");
 console.table(inventarioBeta);

 let removeArtefato = inventarioBeta.pop();
 console.log("Inventário Beta alterado");
 console.table(inventarioBeta);

 //Atividade 03: Adiciona 3 novos artefatos ao final do inventário Alpha

 console.log("Inventário Alpha:");
 console.table(inventarioAlpha);

 let adicionaArtefatos = inventarioAlpha.push(["Manuscrito de Voynich", "Terra", 600]);
 adicionaArtefatos = inventarioAlpha.push(["Mecanismo de Anticítera", "Terra", 2100]);
 adicionaArtefatos = inventarioAlpha.push(["Bateria de Bagdá", "Terra", 2000]);

 console.log("Inventário alterado:");
 console.table(inventarioAlpha);

 //Atividade 04: Adiciona 2 artefatos especiais no inventário Beta 

console.log("Inventário Beta:");
console.table(inventarioBeta);

let adicionaArtefatos02 = inventarioBeta.push(["Amuleto do Tempo", "Marte", 7200]);
adicionaArtefatos02 = inventarioBeta.push(["Orbe da Gravidade", "Júpiter", 8900]);

console.log("Inventário Beta alterado");
console.table(inventarioBeta);

//Atividade 05: Um item da Alpha precisa aparecer no topo da lista 

console.log("Inventário Alpha:");
console.table(inventarioAlpha);

let itemDestacado = inventarioAlpha[21];
inventarioAlpha.unshift(itemDestacado);
inventarioAlpha.splice(22, 1);

console.log("Inventário alterado:");
console.table(inventarioAlpha);

