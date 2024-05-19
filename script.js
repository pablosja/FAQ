function showSection(section) {
    var mainContent = document.getElementById("mainContent");
    var content = "";

    switch(section) {
        case 1:
            content = `<h2>Desarrollo web Front-end</h2>
            <p>El desarrollo web front-end se refiere a la práctica de construir y diseñar la interfaz de usuario de un sitio web o aplicación. Esto implica trabajar con tecnologías del lado del cliente, como HTML, CSS y JavaScript, para crear páginas web interactivas y visualmente atractivas.</p>
            <p>La expresión "front-end" tiene su origen en el principio de separación de preocupaciones, el cual aboga por establecer una clara distinción entre la interfaz de usuario (front-end) y la lógica del servidor (back-end) en una aplicación. Esta separación facilita la creación de un código más modular y fácil de mantener.</p>
            <p>Características:</p>
            <ol>
                <li>Interactividad del Usuario: Desarrollar interfaces de usuario interactivas y atractivas que mejoren la experiencia del usuario en el navegador.</li>
                <li>Compatibilidad con Navegadores: Asegurar que la aplicación sea compatible con diversos navegadores para garantizar una experiencia consistente para todos los usuarios.</li>
                <li>Diseño Responsivo: Implementar diseños que se adapten y funcionen de manera óptima en diferentes dispositivos y tamaños de pantalla.</li>
                <li>Optimización de Rendimiento: Optimizar el rendimiento de la interfaz para cargar rápidamente y proporcionar una experiencia fluida.</li>
                <li>Desarrollo Basado en Componentes: Adoptar enfoques basados en componentes para facilitar la reutilización de código y mejorar la mantenibilidad.</li>
                <li>Accesibilidad: Garantizar que la aplicación sea accesible para personas con discapacidades mediante el cumplimiento de estándares de accesibilidad.</li>
                <li>Integración de Diseño y Desarrollo: Colaborar estrechamente con diseñadores para implementar interfaces que reflejen la visión y la identidad visual del producto.</li>
                <li>Frameworks y Bibliotecas: Utilizar frameworks y bibliotecas como React, Angular o Vue.js para agilizar el desarrollo y facilitar la gestión del estado de la aplicación.</li>
            </ol>
            <p>Herramientas usadas en el desarrollo front-end:</p>
            <ul>
                <li>Hyper Text Markup Language (HTML)</li>
                <li>Cascading Style Sheets (CSS)</li>
                <li>JavaScript</li>
                <li>WebAssembly</li>
            </ul>
            <p>Objetivos del desarrollo:</p>
            <ul>
                <li>Accesibilidad</li>
                <li>Rendimiento</li>
            </ul>
        `;
            break;
        case 2:
            content = "<h1>Conceptos básicos de HTML</h1>HTML no es un lenguaje de programación; es un <em>lenguaje de marcado</em> que define la estructura de tu contenido. HTML consiste en una serie de elementos que usarás para encerrar diferentes partes del contenido para que se vean o comporten de una determinada manera. Las etiquetas de encierre pueden hacer de una palabra o una imagen un hipervínculo a otro sitio, se pueden cambiar palabras a cursiva, agrandar o achicar la letra, etc. Por ejemplo, toma la siguiente línea de contenido:";
            break;
        case 3:
            content = "<h1>CSS</h1><p>Las Hojas de estilo en cascada (del ingles <em>Cascading Stylesheets</em> es la siguiente tecnología que aprenderemos después de. Mientras que HTML se utiliza para definir la estructura y la semántica del contenido, CSS se usa para darle estilo y posicionarlo visualmente. CSS se puede usar, por ejemplo, para cambiar la fuente, el color, el tamaño y el espaciado del contenido, para formar multiples columnas, añadir animaciones y otros elementos decorativos.</p>";
            break;
        case 4:
            content = "<h1>JavaScript</h1><p>JavaScript es un lenguaje de programación que te permite implementar cosas complejas en páginas web. Cada vez que una página web hace algo más que sentarse ahí y mostrar información estática para que la veas — mostrando actualizaciones de contenido oportunas, mapas interactivos, gráficos animados 2D/3D, desplazando máquinas reproductoras de video, o más, puedes apostar que probablemente JavaScript esté involucrado .</p>";
            break;
        case 5:
            content = "<h1>¿Qué es el desarrollo back end?</h1><p>Parte del desarrollo que se dedica a la programación de los diferentes componentes de un sitio web (páginas, formularios, funcionalidades, bases de datos...) para que éste funcione correctamente. Se trata de la parte lógica que el usuario no ve, pero que es fundamental para que los elementos se visualicen correctamente. En el Back end se trabaja con diferentes lenguajes de programación como Java, PHP, MySQL, etcétera.</p>";
            break;
        default:
            content = "";
    }

    mainContent.innerHTML = content;
}

function backToMainContent() {
    var mainContent = document.getElementById("mainContent");
    mainContent.innerHTML = "<p id=\"content\">blanco</p>";
}