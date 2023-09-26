export const projects = [
  {
    id: 10,
    path: "Movies",
    title: "Movies (Express + react)",
    description: (
      <>
        Este proyecto se ha desarrollado una aplicación web de Movies basada
        en Express.js que se encarga de manejar las operaciones
        <strong> CRUD</strong> (Crear, Leer, Actualizar y Eliminar).
        <br />
        <br />
        La aplicación sigue una arquitectura <strong>MVC</strong> (Modelo, Vista, Controlador),
        donde el Controlador manejan las solicitudes HTTP, el Modelo gestionan
        el acceso y la manipulación de los datos almacenados en un archivo JSON
        y la Vista suelen ser representaciones HTML o plantillas que se envían
        al navegador del cliente.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Obtener Todas las Películas (getAll): Este método permite obtener todas las películas de la colección.
          </li>
          <li>
            Obtener Película por ID (getId): Permite obtener una película específica según su ID.
          </li>
          <li>
            Eliminar Película por ID (delete): Permite eliminar una película según su ID.
          </li>
          <li>
            Actualizar Película por ID (update): Permite actualizar los datos de una película existente según su ID.
          </li>
          <li>
            Importación de módulos y dependencias: express, json, cors, zod y classnames.
          </li>
        </ol>
      </>
    ),
    link: "https://rest-api-react-zeta.vercel.app/",
    img: "movies-1.png",
    gif: "movies.gif",
    imageMobile: "movies-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/rest-api-react",
    images: [
      {
        id: 0,
        src: "../movies-1.png",
      },
      {
        id: 2,
        src: "../movies-2.png",
      },
      {
        id: 3,
        src: "../movies-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 55.7,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 1.2,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 43.1,
      },
    ],
  },
  {
    id: 0,
    path: "instagram-2020",
    title: "Instagram (2020)",
    description: (
      <>
        He creado una réplica de la página de Instagram utilizando React desde
        cero, he integrado varias funcionalidades, tales como: peticiones a una
        API externa de <strong>Rick and Morty</strong>, manejo de estado, rutas,
        portales y modales.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Carrusel de Personajes: La página muestra un carrusel interactivo
            que contiene imágenes de varios personajes de "Rick and Morty". Los
            usuarios pueden desplazarse por el carrusel para ver diferentes
            personajes
          </li>
          <li>
            Sección Destacada: La página presenta una sección destacada llamada
            "Hero" que muestra más detalles sobre el personaje seleccionado en
            el carrusel. Esta sección puede incluir información como el nombre,
            la especie y una breve descripción del personaje
          </li>
          <li>
            Navegación: La página ofrece una navegación fluida y amigable para
            el usuario. En la esquina superior derecha, se encuentran íconos
            enlazados a diferentes secciones de la página
          </li>
          <li>
            Carga de Datos en Tiempo Real: Los datos de los personajes se
            obtienen mediante una API personalizada que proporciona información
            actualizada sobre los personajes de "Rick and Morty". Los datos se
            cargan en la página al inicio y se actualizan automáticamente cuando
            sea necesario.
          </li>
          <li>
            Diseño Responsivo: La página cuenta con un diseño responsivo que se
            adapta a diferentes tamaños de pantalla, lo que brinda una
            experiencia consistente y agradable en dispositivos móviles y de
            escritorio.
          </li>
        </ol>
      </>
    ),
    link: "https://instagram-dani.vercel.app/",
    img: "insta-1.png",
    gif: "insta.gif",
    imageMobile: "mobileInsta.gif",
    codigo: "https://github.com/Daniel-Vasquez/instagram",
    images: [
      {
        id: 0,
        src: "../insta-1.png",
      },
      {
        id: 2,
        src: "../insta-2.png",
      },
      {
        id: 3,
        src: "../insta-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 49.3,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 1.4,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 49.2,
      },
    ],
  },
  {
    id: 14,
    path: "shopping-cart",
    title: "Shopping cart",
    description: (
      <>
        En este proyecto, se ha desarrollado un carrito de compras utilizando
        React y el patrón de estado global con el <strong>Context</strong>{" "}
        proporcionado por React. El objetivo principal del proyecto es gestionar
        un carrito de compras de manera eficiente y permitir que los diferentes
        componentes de la aplicación accedan y actualicen el estado del carrito
        de forma centralizada.
        <br />
        <br />
        Características principales:
        <br />
        <ol>
          <li>
            Estado Global con React Context: El proyecto hace uso de la
            funcionalidad de Context API proporcionada por React para crear un
            Context llamado <strong>CartContext</strong>. Este Context permite
            que los componentes de la aplicación accedan y compartan información
            del carrito sin necesidad de pasar props manualmente a través de
            múltiples niveles de componentes.
          </li>
          <li>
            Reducer y Acciones: Para administrar el estado del carrito, se ha
            implementado un <strong>useReducer</strong> personalizado llamado
            cartReducer. Este reducer se encarga de procesar diferentes
            acciones, como agregar productos al carrito, eliminar productos del
            carrito, eliminar una cantidad específica de un producto y vaciar el
            carrito por completo.
          </li>
          <li>
            Funciones para Actualizar el Carrito: El useCartReducer proporciona
            una serie de funciones que permiten interactuar con el carrito desde
            otros componentes. Estas funciones incluyen: agrega un producto al
            carrito (addToCart), resta una unidad de la cantidad de un producto
            (removeToCart), elimina completamente un producto del carrito
            (removeFromCart) y vacía por completo el carrito, eliminando todos
            los productos (clearCart).
          </li>
          <li>
            Componente CartProvider: Se ha creado un componente llamado
            CartProvider, que utiliza el <strong>useCartReducer</strong> para
            obtener el estado actual del carrito y las funciones para
            modificarlo. A través del <strong>CartContext.Provider</strong>,
            este componente provee el estado del carrito y las funciones a todos
            los componentes hijos que necesiten acceder a esta información.
          </li>
        </ol>
      </>
    ),
    link: "https://shopping-cart-wine-two.vercel.app/",
    img: "shopping-cart-1.png",
    gif: "shopping-cart.gif",
    imageMobile: "shopping-cart-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/shopping-cart",
    images: [
      {
        id: 0,
        src: "../shopping-cart-1.png",
      },
      {
        id: 2,
        src: "../shopping-cart-2.png",
      },
      {
        id: 3,
        src: "../shopping-cart-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 67.0,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 1.4,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 31.6,
      },
    ],
  },
  {
    id: 13,
    path: "tic-tac-toe",
    title: "Tic Tac Toe",
    description: (
      <>
        Este proyecto representa el clásico juego de Tic Tac Toe (también
        conocido como "Gato") para dos jugadores, con la opción de jugar contra
        la máquina como oponente. El objetivo del juego es obtener una línea de
        tres símbolos iguales (X u O) en una fila, columna o diagonal.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Tablero de Juego Interactivo: El proyecto incluye un tablero de
            juego interactivo con nueve casillas, donde los jugadores pueden
            hacer clic para colocar sus símbolos (X u O) por turno.
          </li>
          <li>
            Modo Jugador contra Máquina: Los jugadores tienen la opción de
            habilitar o deshabilitar la opción de jugar contra la máquina (modo
            de prueba).
          </li>
          <li>
            Puntuación y Ganador: La aplicación lleva un registro de la
            puntuación para cada jugador (X y O) y muestra el ganador cuando se
            completa una línea de tres símbolos iguales.{" "}
          </li>
          <li>
            Reinicio del Juego: Los jugadores pueden reiniciar el juego en
            cualquier momento utilizando el botón "Reiniciar juego". Además,
            existe la opción de realizar un "Hard Reset", que reinicia la
            puntuación de ambos jugadores.
          </li>
        </ol>
        Este proyecto es un ejemplo práctico de desarrollo de aplicaciones de
        juegos interactivos utilizando React, y demuestra habilidades en el
        manejo de estados, manipulación del DOM, uso de componentes
        reutilizables y diseño responsive.
      </>
    ),
    link: "https://tic-tac-toe-daniel-vasquez.vercel.app/",
    img: "tic-tac-toe-1.png",
    gif: "tic-tac-toe.gif",
    imageMobile: "tic-tac-toe-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/tic-tac-toe",
    images: [
      {
        id: 0,
        src: "../tic-tac-toe-1.png",
      },
      {
        id: 1,
        src: "../tic-tac-toe-2.png",
      },
      {
        id: 2,
        src: "../tic-tac-toe-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 57.0,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 4.2,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 38.8,
      },
    ],
  },
  {
    id: 15,
    path: "timer",
    title: "Timer",
    description: (
      <>
        Este proyecto permite a los usuarios configurar y utilizar un
        temporizador personalizable. El temporizador muestra la cuenta regresiva
        en horas, minutos y segundos, y ofrece opciones para iniciar, detener,
        reanudar y reiniciar el temporizador según las preferencias del usuario.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Temporizador Configurable: La aplicación ofrece tres botones para
            configurar el temporizador en horas, minutos y segundos. Los
            usuarios pueden ajustar estos valores utilizando botones de
            incremento y decremento, asegurándose de no exceder los límites
            permitidos.
          </li>
          <li>
            Temporizador Interactivo: Los usuarios pueden iniciar el
            temporizador con el botón "Iniciar", detenerlo o reanudarlo con el
            botón "Detener/Reanudar", y reiniciarlo a su configuración inicial
            con el botón "Reiniciar". El temporizador muestra la cuenta
            regresiva en tiempo real, actualizándose cada segundo.
          </li>
          <li>
            Funcionalidad de Pausa: Si los usuarios detienen el temporizador,
            tienen la opción de reanudarlo desde el punto en que se detuvo,
            conservando el tiempo restante sin reiniciar la configuración.
          </li>
        </ol>
        El código implementa la lógica para el temporizador y la manipulación
        del estado del mismo, utilizando los hooks <strong>useState</strong> y{" "}
        <strong>useEffect</strong> para gestionar las horas, minutos, segundos,
        el tiempo total y el estado de pausa. También se utilizan componentes
        reutilizables como TimeButton y TimeOptions para facilitar la
        interacción y el control del temporizador.
      </>
    ),
    link: "https://timer-coral-zeta.vercel.app/",
    img: "timer-1.png",
    gif: "timer.gif",
    imageMobile: "timer-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/timer",
    images: [
      {
        id: 0,
        src: "../timer-1.png",
      },
      {
        id: 1,
        src: "../timer-2.png",
      },
      {
        id: 2,
        src: "../timer-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 57.0,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 4.2,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 38.8,
      },
    ],
  },
  {
    id: 1,
    path: "pokedex",
    title: "Pokedex",
    description: (
      <>
        Este proyecto le permite a los usuarios explorar una Pokedex interactiva
        de los primeros 151 Pokémon. La Pokedex muestra una lista de los Pokémon
        disponibles, con la opción de buscar Pokémon específicos por nombre o
        número de Pokédex.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Lista de Pokémon: La Pokedex muestra una lista de los primeros 151
            Pokémon, con sus nombres e imágenes correspondientes. Los usuarios
            pueden hacer clic en cada Pokémon para obtener más detalles y
            estadísticas.
          </li>
          <li>
            Funcionalidad de Búsqueda: La Pokedex ofrece una barra de búsqueda
            que permite a los usuarios filtrar los Pokémon por nombre o número
            de Pokédex. La búsqueda es dinámica y se actualiza automáticamente a
            medida que los usuarios escriben.
          </li>
          <li>
            Visualización de Detalles: Al hacer clic en un Pokémon en la lista,
            los usuarios son redirigidos a una página de detalles donde pueden
            ver información más detallada sobre ese Pokémon, como sus
            estadísticas, tipo, habilidades y más.
          </li>
          <li>
            Obtención de Datos desde API: La aplicación utiliza una{" "}
            <strong>API</strong> externa para obtener información sobre los
            Pokémon, incluyendo sus nombres, números de Pokédex y sprites
            animados.
          </li>
          <li>
            Filtrado de Datos Únicos: Se implementa un algoritmo para filtrar y
            mostrar solo Pokémon únicos en la Pokedex. De esta manera, se evitan
            duplicados y se ofrece una lista de Pokémon completa y organizada.
          </li>
        </ol>
        Este proyecto muestra la capacidad para interactuar con APIs para
        obtener datos en tiempo real. También muestra un enfoque centrado en el
        usuario al incluir funcionalidades como búsqueda, detalles de Pokémon y
        animaciones, lo que resulta en una Pokedex interactiva y atractiva para
        los fanáticos de Pokémon.
      </>
    ),
    link: "https://pokedex-beryl-one.vercel.app/",
    img: "pokedex-1.png",
    gif: "pokedex.gif",
    imageMobile: "pokedex-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/pokedex",
    images: [
      {
        id: 0,
        src: "../pokedex-1.png",
      },
      {
        id: 1,
        src: "../pokedex-2.png",
      },
      {
        id: 2,
        src: "../pokedex-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 69.6,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 4.4,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 26,
      },
    ],
  },
  {
    id: 12,
    path: "tw-follow-card",
    title: "Twitter follow card",
    description: (
      <>
        Este proyecto muestra una lista de usuarios de Twitter sugeridos para
        seguir. La lista incluye el nombre del usuario, su nombre de usuario
        (handle) y un botón para seguirlos o dejar de seguirlos.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Lista de Usuarios Sugeridos: La aplicación muestra una lista de
            usuarios sugeridos para seguir en Twitter. Cada usuario tiene su
            nombre y nombre de usuario (handle) correspondiente.
          </li>
          <li>
            Animación de Carga: La aplicación incluye una animación de carga que
            se muestra mientras se obtienen los datos de los usuarios sugeridos.
            Después de un breve tiempo de espera, la lista se muestra
            completamente.
          </li>
          <li>
            Personalización de Datos: Los nombres de usuario se formatean con el
            símbolo "@" para reflejar el formato común de los nombres de usuario
            en Twitter. Además, el nombre de cada usuario se muestra con la
            primera letra en mayúscula para mejorar la presentación.
          </li>
        </ol>
      </>
    ),
    link: "https://twitter-follow-card-three.vercel.app/",
    img: "tw-follor-1.png",
    gif: "tw-follor.gif",
    imageMobile: "tw-follor-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/twitter-follow-card",
    images: [
      {
        id: 0,
        src: "../tw-follor-1.png",
      },
      {
        id: 1,
        src: "../tw-follor-2.png",
      },
      {
        id: 2,
        src: "../tw-follor-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 51.9,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 6.3,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 41.8,
      },
    ],
  },
  {
    id: 3,
    path: "simulador-credito",
    title: "Simulador de crédito",
    description: (
      <>
        Este proyecto, como parte de una prueba técnica, es un simulador de
        crédito desarrollado con React que permite a los usuarios calcular los
        detalles de un crédito, como el monto deseado, la tasa anual y el plazo
        en meses. Con esta información, la aplicación proporciona el pago
        mensual, la comisión de apertura, el monto neto depositado, el total
        pagado y el CAT (Costo Anual Total) del crédito.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Interfaz de Usuario Intuitiva: La aplicación cuenta con una interfaz
            de usuario intuitiva y fácil de usar, con controles deslizantes para
            ajustar el monto deseado y la tasa anual, así como botones para
            seleccionar el plazo en meses.
          </li>
          <li>
            Cálculos Precisos: La aplicación realiza cálculos precisos basados
            en los valores proporcionados por el usuario, lo que permite obtener
            detalles exactos del crédito, como el pago mensual y el monto neto
            depositado.
          </li>
          <li>
            Visualización Formateada: Todos los resultados se muestran con
            formato de moneda MXN (pesos mexicanos), lo que proporciona una
            presentación clara y comprensible de los detalles del crédito.
          </li>
          <li>
            Comisión de Apertura y CAT: Además de mostrar el pago mensual y el
            monto neto depositado, la aplicación también calcula y muestra la
            comisión de apertura y el CAT, lo que brinda a los usuarios una
            visión completa de los costos asociados con el crédito.
          </li>
          <li>
            Personalización de Plazos: Los usuarios pueden elegir el plazo
            deseado en meses mediante botones predefinidos, lo que ofrece una
            experiencia interactiva y personalizada.
          </li>
        </ol>
        El código muestra la implementación del simulador de crédito utilizando
        el hook <strong>useState</strong> para controlar los valores del monto
        deseado, la tasa anual y el plazo en meses. Se utilizan varias funciones
        para calcular el pago mensual, el monto neto depositado, el total pagado
        y el CAT basados en los valores proporcionados. Además, la función{" "}
        <strong>formatMoney</strong> se utiliza para dar formato a los
        resultados con el símbolo de moneda y los decimales correspondientes.
      </>
    ),
    link: "https://mi-credito.vercel.app/",
    img: "mi-credito-1.png",
    gif: "mi-credito-GIF.gif",
    imageMobile: "mi-credito-Mobile-GIF.gif",
    codigo: "https://github.com/Daniel-Vasquez/mi-credito",
    images: [
      {
        id: 0,
        src: "../mi-credito-1.png",
      },
      {
        id: 2,
        src: "../mi-credito-2.png",
      },
      {
        id: 3,
        src: "../mi-credito-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 61.4,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 1.8,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 36.8,
      },
    ],
  },
  {
    id: 11,
    path: "battalla-de-mascotas",
    title: "Batalla de mascotas",
    description: (
      <>
        Este emocionante proyecto es un juego interactivo de batalla de mascotas
        desarrollado utilizando <strong>JavaScript (JS)</strong> y{" "}
        <strong>CSS</strong>. El juego permite a los usuarios elegir su mascota
        preferida y enfrentarla a diferentes enemigos controlados por la
        computadora. El objetivo del juego es vencer a los enemigos reduciendo
        sus vidas a cero mientras se protege la vida de la mascota del jugador.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Selección de Mascotas: Los usuarios pueden seleccionar su mascota
            favorita entre seis opciones disponibles, cada una con su imagen y
            conjunto único de habilidades y ataques.
          </li>
          <li>
            Batallas Dinámicas: Las batallas entre las mascotas son dinámicas y
            emocionantes. Tanto el jugador como el enemigo eligen ataques
            aleatorios en cada ronda, lo que agrega un elemento de sorpresa y
            estrategia al juego.
          </li>
          <li>
            Visualización de Resultados: Después de cada ataque, el juego
            muestra el resultado de la batalla, informando si el jugador ganó,
            perdió o si hubo un empate.
          </li>
          <li>
            Vidas y Puntuación: Cada mascota tiene tres vidas al inicio del
            juego. Cuando un ataque tiene éxito, se resta una vida al perdedor.
            La puntuación del jugador y el enemigo se actualiza en tiempo real.
          </li>
          <li>
            Animaciones y Efectos Visuales: El juego cuenta con animaciones y
            efectos visuales que realzan la experiencia de juego y hacen que las
            batallas sean aún más emocionantes.
          </li>
          <li>
            Reinicio del Juego: Al final de la batalla, los usuarios pueden
            reiniciar el juego para enfrentarse a nuevos enemigos y mejorar su
            estrategia.
          </li>
        </ol>
        El código JavaScript muestra una implementación organizada y eficiente
        de funciones y variables para controlar la lógica del juego, incluyendo
        la selección de mascotas, la ejecución de ataques, el cálculo de las
        vidas restantes y la visualización de mensajes de resultado. Además,
        utiliza el <strong>DOM</strong> para manipular elementos{" "}
        <strong>HTML</strong> y actualizar la interfaz gráfica del juego en
        tiempo real.
        <br />
        <br />
        ¿Serás capaz de vencerlo y alcanzar la victoria? ¡Demuestra tus
        habilidades y descúbrelo en este emocionante juego de batalla de
        mascotas!
      </>
    ),
    link: "https://daniel-vasquez.github.io/pet-battle/",
    img: "pets-battle.png",
    gif: "pets-battle.gif",
    imageMobile: "pets-battle-mobile.gif",
    codigo: "https://github.com/Daniel-Vasquez/pet-battle",
    images: [
      {
        id: 0,
        src: "../pets-battle.png",
      },
      {
        id: 1,
        src: "../pets-battle-2.png",
      },
      {
        id: 2,
        src: "../pets-battle-3.png",
      },
    ],
    technologies: [
      {
        name: "javaScript",
        src: "../java-script-icono.png",
        level: 34.0,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 21.3,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 44.7,
      },
    ],
  },
  {
    id: 4,
    path: "cachorros",
    title: "Cachorros",
    description: (
      <>
        Este proyecto es una página web interactiva desarrollada con React que
        permite a los usuarios explorar diferentes razas de perros y conocer
        detalles sobre ellos.
        <br />
        <br />
        La página muestra una lista desplegable que contiene todas las razas de
        perros disponibles obtenidas a través de la{" "}
        <strong>API "dog.ceo"</strong>. Los usuarios pueden seleccionar una raza
        de esta lista para ver más imágenes relacionadas con esa raza
        específica.
        <br />
        <br />
        Características Principales:
        <ol>
          <li>
            Carga y Manejo de Errores: Durante la carga de las imágenes, la
            página muestra una animación de carga. Si ocurre algún error en la
            obtención de las imágenes, se muestra un mensaje de error,
            proporcionando una experiencia amigable para el usuario.
          </li>
          <li>
            Interacción con el Modal: El modal permite a los usuarios cerrarlo
            haciendo clic en un botón específico o fuera del área del modal.
          </li>
          <li>
            El código JSX proporciona la lógica necesaria para interactuar con
            la API <strong>dog.ceo</strong> y administrar el estado de la
            página, incluyendo la carga de imágenes y el manejo de eventos como
            la apertura y cierre del modal.
          </li>
        </ol>
      </>
    ),
    link: "https://cachorros.vercel.app/",
    img: "cachorros.png",
    gif: "cachorrosGif.gif",
    imageMobile: "mobileCachorrosGif.gif",
    codigo: "https://github.com/Daniel-Vasquez/cachorros",
    images: [
      {
        id: 0,
        src: "../cachorros.png",
      },
      {
        id: 1,
        src: "../cachorros-1.png",
      },
      {
        id: 2,
        src: "../cachorros-2.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 53.9,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 4.3,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 41.8,
      },
    ],
  },
  {
    id: 5,
    path: "encontrar-numero",
    title: "Encuentra el número",
    description: (
      <>
        Este proyecto es un emocionante juego interactivo desarrollado
        utilizando ReactJS. El objetivo del juego es adivinar el número oculto
        que se encuentra entre 1 y 100. Los jugadores tienen un límite de vidas
        para adivinar el número correcto, y reciben pistas para saber si el
        número buscado es mayor o menor al que han ingresado.
        <br />
        <br />
        Características Principales:
        <br />
        <ol>
          <li>
            Interfaz Atractiva: La aplicación cuenta con una interfaz
            visualmente atractiva y amigable para el usuario. El número secreto
            oculto es mostrado en pantalla con efectos de animación, lo que
            aumenta la emoción del juego.
          </li>
          <li>
            Pistas y Feedback: Cuando los jugadores ingresan un número, reciben
            mensajes informativos sobre si el número secreto es mayor o menor al
            que han ingresado. Esto les ayuda a ajustar sus conjeturas y tomar
            decisiones estratégicas para adivinar el número correcto.
          </li>
          <li>
            Contador de Vidas: Los jugadores tienen un contador de vidas que
            disminuye cada vez que ingresan un número incorrecto. Si llegan al
            límite de vidas sin adivinar el número correcto, el juego se
            reinicia automáticamente.
          </li>
          <li>
            Historial de Números: El juego muestra una lista de los números que
            los jugadores han ingresado previamente, lo que les permite mantener
            un registro de sus intentos anteriores.
          </li>
          <li>
            Reiniciar el Juego: Los jugadores pueden reiniciar el juego en
            cualquier momento para enfrentar un nuevo desafío y mejorar sus
            habilidades de adivinanza.
          </li>
        </ol>
        El código muestra la implementación organizada de componentes y estados
        de React, y utiliza funciones y métodos para manejar eventos y lógica
        del juego. La aplicación utiliza animaciones CSS para realzar la
        experiencia del usuario, haciéndolo más interactivo y entretenido.
      </>
    ),
    link: "https://encontrar-numero-phi.vercel.app/",
    img: "numero-1.png",
    gif: "randomGif.gif",
    imageMobile: "mobileRandomGif.gif",
    codigo: "https://github.com/Daniel-Vasquez/encontrar-numero",
    images: [
      {
        id: 0,
        src: "../numero-1.png",
      },
      {
        id: 2,
        src: "../numero-2.png",
      },
      {
        id: 3,
        src: "../numero-3.png",
      },
    ],
    technologies: [
      {
        name: "react",
        src: "../react-icono.png",
        level: 62.7,
      },
      {
        name: "html",
        src: "../html-5-icono.png",
        level: 8.0,
      },
      {
        name: "css",
        src: "../css-3-icono.png",
        level: 29.3,
      },
    ],
  }
];
