import { Poem } from "@/types";

// All poems are in Spanish (ES) — the same text is used for all three language fields
// since they are not translated.

const es = (text: string) => ({ en: text, es: text, ca: text });

export const poems: Poem[] = [
  {
    id: "no-ta-g-a",
    title: es("No ta g a"),
    body: es(`En las lágrimas de alguien
anidan todos los pájaros
que no verán mi balcón.
Y la araña en la esquina
de una habitación hastiada
poco a poco tejerá
los días que aún nos quedan,
fuel futuro de nostalgia.
No escasean los niveles
profundos y ya maltrechos
de batallas rutinarias,
y es por eso que detesto
no saber cómo dotarme
a mí, a mi otro yo,
de nuevos abrazos torpes,
de olor a asfalto mojado,
de dominós y marfiles,
de primeros escenarios.`),
  },
  {
    id: "espera",
    title: es("Espera"),
    body: es(`Aburrido veo de lejos,
con un cuarto de luna cálida,
un globo que se eleva torpe.
Hola, hoyo de helio alto
que exhalas hondo y miras
a quien te mira aburrido,
esperando una respuesta
de una amante de otra vida,
te agradezco esa pregunta
que ignorante tú me haces
sobre cual es esa distancia
mínima tras la que esperar
para volver a empezar todo:
lo que sin querer ya ha sido
y lo que queriendo aún será.`),
  },
  {
    id: "tiaviva",
    title: es("Tiaviva"),
    body: es(`Cuando
pienso en ti
y sólo siento euforia,
de golpe añoro sudores de botellas,
volver a llevar joyas,
y que te rías en
mayúsculas.
Que huelas a pasado,
como el primer aire cálido de mayo.
Recordar que lo eres todo
porque aún no te
has concretado
en nada,
y por eso poder.
Escojo el caballo más bonito,
semiunicornio, y decido no mirar
más que al frente,
que ya es
detrás.
La grandísima
ventaja del ahora
serviría de moneda de cambio
al más caro
carrusel.`),
  },
  {
    id: "coronas",
    title: es("Coronas"),
    body: es(`Sigo aturdido y flexionado,
seducido por un girasol borroso
y el murmullo de lluvia fría.
Ahora vivo instantes sin contexto
y pierdo el pudor a carraspear
porque me siento solo, estático.
Y si no fuera por mis dedos
raquíticos y destemplados
que rastrean páramos lejanos,
juraría que floto en un cuenco
estigio y de aroma exótico.
Quizás, ahora lo veo, sí que hay
un contexto. Una red de hiedras
y lianas que gotean savia dulce
al ser mordidas. Pasaría mi lengua
por esos tallos del tiempo
ficticio y de aroma erótico,
las veces que fuera necesario
con tal de entender, ni que fuera
por una sola vez, por qué no puede
ser siempre primavera.`),
  },
  {
    id: "normal",
    title: es("Normal"),
    body: es(`Un estrepitoso dolor muscular
apacigua el rebomborio del exterior:
La calma, que nos riñe por habernos
creído que algo podía llegar a ser
normal.
Normal como qué?
Normal como cuando?
Si, lleno de propósito, te disponías
a saltar de hora en hora;
ahora añoras cada minuto sin valorar,
cada segundo azul oscuro
de tu privilegiada y aria rutina.
Dar por sentado poder levantarse,
sillas con ruedas, sillas blancas
y sillas negras.`),
  },
  {
    id: "101",
    title: es("101"),
    body: es(`Quieto en una esquina y más vivo que nunca,
sabe a chocolate y duele a frescura, se está bien abierto.
Abierto al arte ajeno, a la poesía de incubadora.
Urticaria con crosta y qué sonrisa
con ella me he tomado mi tiempo y me he quedado quieto.
Por este cuento teledirigido campan a sus anchas arenas movedizas, de grano fino. Cógelas si tienes huevos,
pues hay salitre en la memoria,
y a veces no bastará con regarla
para que se acuerde de estar mojada.
Nunca sabré estar en mi tiempo,
por las yemas queman las palabras
escritas y por mis ojos vuelan los mundos invisibles. Y todo me lo como yo, en ayer o mañana pero nunca en hoy.`),
  },
  {
    id: "peanuts",
    title: es("Peanuts"),
    body: es(`Era una familia, sí, una
de muchas posibles,
encajaba y era un completo,
un enjambre de personalidades
fantásticas y diferentes entre sí.
Era una familia, sí, una
la que ocupaba aquellos días
esa habitación de hotel
que es la vida, todo.
Fugaz cáscara y capullo de complejidad
por donde levitan historias,
carne de coco en bucle.
Fue una familia, sí, una
entre desconocidos,
pegamento y aliento,
osadía a toca teja, la que me regaló
muchos amaneceres y muchas puestas.`),
  },
  {
    id: "si-por-gotas-fuera",
    title: es("Si por gotas fuera"),
    body: es(`Si por gotas fuera...
El no saber hacer,
deslumbrado por un
rectángulo de luz,
deviene el entero.
Ya no recuerdo qué
se hace cuando no
se hace nada,
cuando se engulle
aburrimiento.
He matado musarañas
sólo con mirarlas,
de tanto hacerlo, y
la culpa me atormenta.
Sí, siempre hay culpa.`),
  },
  {
    id: "medio",
    title: es("Medio"),
    body: es(`Hace poco pensé que quería ser famoso.
Que ya no me pongo por delante
un velo vacío y una sonrisa falsa,
una amabilidad cruel hacia los principios.
Soy más y quiero más,
verme en torres de piedra doradas
por el ritmo del halago, acosado por
la lente infinita de una cámara.
Adulación y admiración van por el décimo asalto y yo estoy saciado de palomitas,
pero engullo por poder.
Dinero, mayoría de edad, te doy por sentado.
Mi uretra riega la porcelana de vuestras horas.
Me hago centro de la vanidad (vanalidad) y demuestro así por qué no sólo me baño en la mediocridad
sino que me ahogo en ella,`),
  },
  {
    id: "c-pipe",
    title: es("C<|"),
    body: es(`Vengo perdiendo llaves, las dejo en repisas
escondidas, olvidadas y peso menos.
Me olvido. Me libero de puertas, vehículos,
ventanas y candados. Cuánto pesan las llaves
de los candados, esas son las que me encanta perder, casi a propósito.
Liviano y estéril mi llavero tiene hambre,
hambre hueca y punzante, suelta pedos
de enfermo terminal y se deshace.
Le pido, por favor, que deje su música estridente a otros llaveros, que si no quiere
estar conmigo yo le regalo a un hermano, una amiga, que lo cargará de llaves y peluches,
pero que conmigo eso se acabó. Mis llaves
tienen que caberme en el bolsillo trasero
y no deben sonar cuando yo me acerque.`),
  },
  {
    id: "sonar",
    title: es("Sonar"),
    body: es(`Luces que cerca brillan
en una noche sin final
de desencuentros altos
y bajos. Dónde estáis?
No estoy en tu aquí, eso si,
pero floto en una oscuridad
que arropa mi aire en el espacio
sin oxigeno, alzo la barbilla
y miro todo por encima del codo.`),
  },
  {
    id: "errores",
    title: es("Errores"),
    body: es(`Sabías que te habías equivocado,
coqueteabas con el error desnudo
y te parecía bien, corrías sin pisar.
Porque debe ser eso, no?
Me lo he creído, aquello que me han dicho,
me lo he creído
y se me imponen tormentos agudos,
tragos de saliva agria y silbante,
ahogos ácidos en ciénagas de recuerdos.
Suenan sirenas y velocidades muertas
transportan un algo de lo que fuimos
y de lo que pudimos ser.`),
  },
  {
    id: "altar-y-microfono",
    title: es("Altar y micrófono"),
    body: es(`Oportunidades inciertas llevadme a buen puerto,
que yo a ciegas os tomaré, no sin temor.
Renuncia cruel y sacrificio hostil el que me parte el alma, la que me rompe el pecho.
Qué raíces se oyen entre las lluvias?
Llueve y solea y nubla y euforia.
Sin quererlo el cambio ya es y nos abraza,
nos rebolca y nos impulsa en este mar picado que es el tiempo.
Flotamos en él, hundidos a tres metros, arqueando la espalda, libres,
y soltamos burbujas de mercurio que juegan a ser ilusiones, alegrías del ahora.
Mientras riamos no nos faltará el aire.`),
  },
  {
    id: "resaca-simple-y-llana",
    title: es("Resaca, simple y llana"),
    body: es(`Jaqueca tremenda,
migraña puntiaguda
hedor de mierda
y plomo raído.
Salud te sientes
lejana y no te has ido,
deseo cuanto tengo
y sin embargo
no tengo lo que quiero
o lo que deseo,
sería fácil y vulgar.
No me interesa.`),
  },
  {
    id: "sin-titulo",
    title: es("Sin título"),
    body: es(`When you try your best and you don t succeed,
cuando todo tiembla y sientes miedo ajeno
miedo podrido de imposición, terror de contrariedad, cambio de planes, camino de zarzas incierto
y por tu persona quema la taquicardia del insomnio, noches de luces y sombras.
Temo encontrarme con ella,
tanto tiempo teniendo una mano que agarrar,
que cuando la vea no sabré qué decirle,
cómo mirarla, ni siquiera cómo hablar del tiempo. Del tiempo.`),
  },
  {
    id: "octubre",
    title: es("Octubre"),
    body: es(`Libra, ideal ciego, yo te quiero
para mi en nosotros
y sólo encuentro libre
o libro, abierto, pero por el final,
veinte por acabar y doscientas leídas,
que pesan y huelen a quemado.
Arrastrado por su peso en este colchón
mullido, mi lado sigue fresco y yo
sudo, pegado, enredado entre unas piernas
que estrangulan para hacer sentir sofoco.
Mano abierta que aún te agarras a la mitad que me corresponde, arrástrame y llévame contigo al frío lugar donde quiero estar.`),
  },
  {
    id: "irresponsable",
    title: es("irresponsable"),
    body: es(`un respiro de ahogo
una bocanada de agua
déjame acabar con esto
no por ti ni por mi
por nuestras ideas
por lo que sabemos que tiene que ser
que la responsabilidad no pinte la angustia
ni curve las vértebras hasta la mueca
inhala y exhala, porque al final
tu tienes sólo eso`),
  },
  {
    id: "a-manchado",
    title: es("A. Manchado."),
    body: es(`Hoy no vuelve
y no hay porqué.
En hoy no hay
ni es, germen
de mañana,
la razón de mi,
y la tuya
cae muy lenta
sin saber que
en nada y poco
dejará de ser.`),
  },
  {
    id: "dash-dot-dash",
    title: es("-.-"),
    body: es(`Sería un buen momento
para uno de esos dilemas vitales,
Una disyuntiva certera
Paliada por punzadas de vitalidad.
Dolorosa por su innegable asertividad,
Un regalo de la vida para probarse a sí misma,
Para reafirmarse cuando ya te olvidabas de ella.
Sin estos muñones sin ramas
Nos estaríamos perdiendo un sentido,
Simno el sentido, de todo junto.
Y ahora quiero una. Una prueba irrefutable
De que yo sigo siendo y sigo feliz de serlo.
Quiero la agitación y la sombra del error,
Sentir el potencial de la precipitación,
El hormigueo del acierto,
Los posibles futuros que nunca se darán
Pero que amo con fuerza y aprieto
Contra mi pecho y mi pulmón.
De todos ellos me basta uno,
Y en uno yo lo querré absolutamente todo.`),
  },
  {
    id: "ya-no-escribo",
    title: es("Ya no escribo."),
    body: es(`Ya no escribo. No hay tiempo.
Sin poder empujas el reto,
tu compromiso se deshace
en culpa picante y pesa,
cae.
Qué hacía antes que no hago
ahora? Es el cansancio,
de vivir, sin ser malo, siendo
sólo pereza. Un estado
pleno,
tumbado en un diván, hundido,
latiendo, latiendo. El tiempo
que no hay se para y se torna 
aire de dentro, y aire de fuera.
Fluye en ti, en tus muelas húmedas.
Cuidado al levantarte, no verás nada,
ni dónde han ido quién, ni cómo
ni cuando, pero sabrás
que ciento volando dan más que un mañana.`),
  },
  {
    id: "braces-pipe",
    title: es("{>|<}"),
    body: es(`Que hay en el alma del deseo?
Observa los centros rebosando ansiedad,
Dame impaciencia derivada de ganas y de hambre
que haré de ella sangre,
inflamable y con olor químico.
Te escapas tanto de mis manos, deseo,
que temo que tales todo mi bosque
tan sólo para ver un atardecer.
O que lo tales incluso para verlo.
No sé cuál, sinceramente, sería peor.
Lo que si sé, es que si lo haces,
quiero que cuides de mi, de mi cordura,
y de mi persona. Quiero que seques las
lágrimas antes de que caigan y que me
brilles la sonrisa antes de reír.
Hagas lo que hagas, compañero egoísta,
manzana de esquizofrenia,
quiéreme, por favor, que yo
ya lo hago sin quererlo.`),
  },
  {
    id: "ix",
    title: es("IX"),
    body: es(`Calma que te irrita los ojos,
Paz que lleva resto,
Un punto de break que separa
Un instante del tiempo.
Sin ti cómodo, por ahora,
Añoro un abrazo
¿Dónde estarás?
Lánzame una obviedad
Que me distinga de todos
Un recorte que me engañe,
Porque quiero tus pecas
Y tus almendras.
Pero tu no llegas.
Me pides lucha
Y me exiges óxido de fe.
Por eso dudo mucho,
¿Existirás?`),
  },
  {
    id: "na",
    title: es("NA"),
    body: es(`Ahora (o ahorra) que me he quedado solo
veo contra las paredes de un caleidoscopio
cambiantes e ilusas
falsas
que nunca fue esto lo que quería
que siempre busqué para abrirme
y dejar entrar,
pero tardío tu, como de costumbre,
ahora vulnerable te jodes y callas,
y escribes, solamente.`),
  },
  {
    id: "si-dijera-que-no",
    title: es("Si dijera que no"),
    body: es(`Hay preguntas con una sola respuesta.
Metidas y enredadas en un instante,
una hora, una o un mañana,
ahogadas por un contexto
con todo el agobio que eso supone;
tienen una única salida. Porque
no se concibe un escenario,
de teatro o no, en donde se diga
un si y no un no. Desataría tal tormenta
que los cimientos mismos del tiempo,
rellenos de cristal roto, sucumbirían
y arrastrarían consigo todo lo que uno es,
quizás, ojalá, solamente por ese instante que enreda,
pero seguramente, joder, por y para siempre.`),
  },
  {
    id: "defecar-oscuro",
    title: es("Defecar oscuro"),
    body: es(`No me fío de los baños 
Que huelen fuertemente a ambientador.
El lápiz se me pega en los dedos
Y repudio algún pelo enredado.
Deber y cama,
Reposo y responsable.
Sin ver muy bien cómo
esta corriente huele
a verano mojado y a risas.
Trae suavidad a mis gestos
Que esquivan coches por calles
de un solo carril.
La insistencia de alguno
No basta para romperme el espacio.
Ya no huele bien ni mal,
Ahora sólo llena de verde el gris.
Raíces y lagos naturales,
Pertenezco al todo que es
estar sin hacer nada.`),
  },
  {
    id: "tormenta-de-verano",
    title: es("Tormenta de verano"),
    body: es(`Las mismas ancianas recostadas
riendo a carcajadas
De lo cotidiano,
De la octava historia.
Y una se alza
En cuerpo y voz
Para recordar relámpagos,
Lluvia cálida,
Que te sorprende mientras pedaleas
Y te empapas.
Lo compartido por el espacio
Y el tiempo late entre nosotros
aunque seamos diferentes:
Una plaga en el planeta,
Estornudo del tiempo,
Escupitajo de la historia.`),
  },
  {
    id: "visceral",
    title: es("Visceral"),
    body: es(`Las vísceras de las vísperas
Toman un suspiro en un nido de águilas
Y me llevan al sueño intranquilo
de quien va a conocerla por primera vez.

Y dan paso a las playas de noche,
Al aislamiento abierto con un hilo de música.
Se mueven tus labios silenciosos, incapaces
De alcanzar el tono deseado, que sí humedece tu mente.
Esa habitación oscura y vacía, también lúcida y concurrida, incorpórea.
Óleo sin límites de pericia, píntame en tu lienzo con tu mano talentosa
Todo cuanto mi arpa pueda darte. Que yo nunca te enseñé,
Y sin darte nada a conciencia me haces consciente.
Me entretienes y me tienes por toda tu extensión
De dudas y admiración.
La curiosidad rompe unas líneas vírgenes e inocentes
Que mis ojos siembran en el aire,
Entre yo y el mundo,
Y éste ve lo que ellos ven.

Acaríciame, cuerda enmarañada,
Las palmas curtidas de barras y sudor,
Y sepárame del verde y el mar. Crepita
en tu madera cuando yo te balancee
mientras lo haga, consciente de que el ahora ya está.`),
  },
];
